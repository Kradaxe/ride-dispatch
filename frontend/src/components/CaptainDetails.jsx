import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { CaptainDataContext } from '../context/CapatainContext'

const CaptainDetails = () => {

    const { captain } = useContext(CaptainDataContext)
    const [mlData, setMlData] = useState(null)
    const [completedRides, setCompletedRides] = useState(0)
        useEffect(() => {

            const fetchData = async () => {

                try {
                    
                    const statsResponse = await axios.get(
                        `${import.meta.env.VITE_BASE_URL}/captain-stats`,
                        {
                            headers: {
                                Authorization:
                                    `Bearer ${localStorage.getItem('token')}`
                            }
                        }
                    )

                    setCompletedRides(
                        statsResponse.data.completedRides
                    )

                    const demandResponse = await axios.get(
                        `${import.meta.env.VITE_BASE_URL}/ml/demand`
                    )

                    setMlData(demandResponse.data)

                } catch (err) {

                    console.log(err)

                }

            }

            fetchData()

        }, [])

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
                    <h4 className='text-lg font-medium capitalize'>{captain?.firstname + " " + captain?.lastname}</h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>
                        ₹{(captain?.totalEarnings || 0).toFixed(2)}
                    </h4>
                    <p className='text-sm text-gray-600'>Earned</p>
                </div>
            </div>
            <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                    <h5 className='text-lg font-medium'>
                    {completedRides}
                    </h5>

                    <p className='text-sm text-gray-600'>
                    Completed Rides
                    </p>
                </div>
                <div className='text-center'>
                <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                <h5 className='text-lg font-medium'>
                    {Math.round(mlData?.predictedDemand || 0)}
                </h5>

                <p className='text-sm text-gray-600'>
                    Expected Rides
                </p>
                </div>
                <div className='text-center max-w-[120px]'>
                    <i className="text-3xl mb-2 font-thin ri-robot-2-line"></i>
                    <h5 className='text-lg font-medium'>
                        {mlData?.bestArea?.area || "Loading"}
                    </h5>

                    <p className='text-sm text-gray-600'>
                        Best Area
                    </p>
                </div>

            </div>

            {
                mlData?.insight && (
                    <div className='mt-4 p-3 rounded-xl bg-blue-50 border'>
                        <h4 className='font-semibold mb-1'>
                            AI Recommendation
                        </h4>
                
                        <p className='text-sm text-gray-700'>
                            Move towards{" "}
                            <span className='font-semibold'>
                                {mlData.bestArea.area}
                            </span>
                            {" "}where the predicted demand is{" "}
                            <span className='font-semibold'>
                                {Math.round(
                                    mlData.bestArea.demand
                                )}
                            </span>
                            {" "}rides.
                        </p>
                    </div>  
                )
                
            }

            {
    mlData?.allAreas && (

        <div className='mt-4 p-3 rounded-xl bg-white border'>

            <h4 className='font-semibold mb-2'>
                Demand Forecast
            </h4>

                {
                        mlData.allAreas.map(
                            area => (
                            
                                <div
                                    key={area.area}
                                    className='flex justify-between text-sm py-1'
                                >
                                
                                    <span>
                                        {area.area}
                                    </span>
                            
                                    <span>
                                        {Math.round(
                                            area.demand
                                        )}
                                    </span>
                                    
                                </div>
    
                            )
                        )
                    }
    
                </div>
    
            )
    }

        </div>
    )
}

export default CaptainDetails