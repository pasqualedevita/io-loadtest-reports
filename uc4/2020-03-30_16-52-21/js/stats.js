var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11400",
        "ok": "6872",
        "ko": "4528"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "40",
        "ko": "13"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "21503",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "11922",
        "ok": "5882",
        "ko": "21089"
    },
    "standardDeviation": {
        "total": "8380",
        "ok": "4915",
        "ko": "858"
    },
    "percentiles1": {
        "total": "10419",
        "ok": "5389",
        "ko": "21059"
    },
    "percentiles2": {
        "total": "21053",
        "ok": "9215",
        "ko": "21100"
    },
    "percentiles3": {
        "total": "21190",
        "ok": "15038",
        "ko": "21313"
    },
    "percentiles4": {
        "total": "21403",
        "ok": "18507",
        "ko": "21498"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1720,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 200,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4952,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 4528,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "46.721",
        "ok": "28.164",
        "ko": "18.557"
    }
},
contents: {
"req_get-profile-340b4": {
        type: "REQUEST",
        name: "Get Profile",
path: "Get Profile",
pathFormatted: "req_get-profile-340b4",
stats: {
    "name": "Get Profile",
    "numberOfRequests": {
        "total": "11400",
        "ok": "6872",
        "ko": "4528"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "40",
        "ko": "13"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "21503",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "11922",
        "ok": "5882",
        "ko": "21089"
    },
    "standardDeviation": {
        "total": "8380",
        "ok": "4915",
        "ko": "858"
    },
    "percentiles1": {
        "total": "10419",
        "ok": "5389",
        "ko": "21059"
    },
    "percentiles2": {
        "total": "21053",
        "ok": "9215",
        "ko": "21100"
    },
    "percentiles3": {
        "total": "21190",
        "ok": "15038",
        "ko": "21313"
    },
    "percentiles4": {
        "total": "21403",
        "ok": "18507",
        "ko": "21498"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1720,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 200,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4952,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 4528,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "46.721",
        "ok": "28.164",
        "ko": "18.557"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
