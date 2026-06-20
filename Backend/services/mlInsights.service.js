// services/mlInsights.service.js

function getDemandInsight(predictedDemand) {

    if (predictedDemand >= 80) {
        return {
            level: 'High',
            recommendation:
                'Stay online. High ride demand expected.'
        };
    }

    if (predictedDemand >= 40) {
        return {
            level: 'Medium',
            recommendation:
                'Demand is moderate. Consider moving toward busy areas.'
        };
    }

    return {
        level: 'Low',
        recommendation:
            'Demand is low. Consider relocating to a commercial hotspot.'
    };
}

module.exports = {
    getDemandInsight
};