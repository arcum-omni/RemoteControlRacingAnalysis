var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
        datasets: [{
            label: 'Nov 15th 2wd Stock Buggy A-Main',
            data: [20.304,18.858,19.324,18.502,18.671,17.954,18.301,18.724,18.151,17.719,17.923,18.515,18.25,18.567,19.183,18.585,18.554],
            borderColor: 'rgba(255, 0, 0,0.5)',
            backgroundColor: 'rgba(255, 0, 0,0.5)',
            borderWidth: 1,
            fill: false
        },{
            label: 'Nov 17th 2wd Stock Buggy A-Main',
            data: [20.237,18.173,18.502,18.414,18.745,19.075,18.529,18.162,18.607,18.737,18.821,18.762,18.562,17.851,19.198,18.463,18.349],
            borderColor: 'rgba(0, 255, 0,0.5)',
            backgroundColor: 'rgba(0, 255, 0,0.5)',
            borderWidth: 1,
            fill: false
        },{
            label: 'Nov 22th 2wd Stock Buggy A-Main',
            data: [20.692,18.56,18.085,17.92,19.036,18.699,18.465,18.348,18.418,18.489,18.538,18.192,19.061,18.205,18.483,18.274,18.783],
            borderColor: 'rgba(0, 0, 255,0.5)',
            backgroundColor: 'rgba(0, 0, 255,0.5)',
            borderWidth: 1,
            fill: false
        },{
            label: 'Nov 24th 2wd Stock Buggy A-Main',
            data: [18.654,17.718,17.589,17.706,18.33,18.105,18.236,18.178,18.675,18.154,17.691,17.54,18.227,18.338,18.234,18.314,18.117],
            borderColor: 'rgba(0, 0, 0,0.5)',
            backgroundColor: 'rgba(0, 0, 0,0.5)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    min: 15.0,
                    max: 23.0
                }
            }]
        }
    }
});
