var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11400",
        "ok": "8749",
        "ko": "2651"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "41",
        "ko": "16"
    },
    "maxResponseTime": {
        "total": "26906",
        "ok": "26906",
        "ko": "23046"
    },
    "meanResponseTime": {
        "total": "7675",
        "ok": "3728",
        "ko": "20702"
    },
    "standardDeviation": {
        "total": "8640",
        "ok": "5217",
        "ko": "3183"
    },
    "percentiles1": {
        "total": "5684",
        "ok": "74",
        "ko": "21045"
    },
    "percentiles2": {
        "total": "17758",
        "ok": "6402",
        "ko": "21202"
    },
    "percentiles3": {
        "total": "21269",
        "ok": "16719",
        "ko": "22005"
    },
    "percentiles4": {
        "total": "22091",
        "ok": "19852",
        "ko": "22410"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5057,
    "percentage": 44
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3689,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 2651,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "54.286",
        "ok": "41.662",
        "ko": "12.624"
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
        "ok": "8749",
        "ko": "2651"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "41",
        "ko": "16"
    },
    "maxResponseTime": {
        "total": "26906",
        "ok": "26906",
        "ko": "23046"
    },
    "meanResponseTime": {
        "total": "7675",
        "ok": "3728",
        "ko": "20702"
    },
    "standardDeviation": {
        "total": "8640",
        "ok": "5217",
        "ko": "3183"
    },
    "percentiles1": {
        "total": "5684",
        "ok": "74",
        "ko": "21045"
    },
    "percentiles2": {
        "total": "17758",
        "ok": "6402",
        "ko": "21202"
    },
    "percentiles3": {
        "total": "21269",
        "ok": "16719",
        "ko": "22005"
    },
    "percentiles4": {
        "total": "22091",
        "ok": "19852",
        "ko": "22410"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5057,
    "percentage": 44
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3689,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 2651,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "54.286",
        "ok": "41.662",
        "ko": "12.624"
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
