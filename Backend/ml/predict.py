import joblib
import json
import sys
import pandas as pd

model = joblib.load("ml/models/demand_model.pkl")

hour = int(sys.argv[1])
dayOfWeek = int(sys.argv[2])
activeCaptains = int(sys.argv[3])
avgFare = float(sys.argv[4])
pickupArea = sys.argv[5]

input_df = pd.DataFrame(
    [{
        "hour": hour,
        "dayOfWeek": dayOfWeek,
        "activeCaptains": activeCaptains,
        "avgFare": avgFare,
        "pickupArea": pickupArea
    }]
)

prediction = model.predict(input_df)

print(json.dumps({
    "predictedDemand": round(float(prediction[0]), 2)
}))