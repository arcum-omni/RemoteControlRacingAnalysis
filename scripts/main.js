window.onload = function () {
    getYear();
    var myMenu = new Navbar('selector');
};
function getYear() {
    var today = new Date();
    var year = today.getFullYear();
    var spanMsg = document.getElementById("span");
    spanMsg.innerHTML = year.toString();
}
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        datasets: [{
                label: '15Nov; 2wd Stock Buggy, A-Main',
                data: [20.304, 18.858, 19.324, 18.502, 18.671, 17.954, 18.301, 18.724, 18.151, 17.719, 17.923, 18.515, 18.25, 18.567, 19.183, 18.585, 18.554],
                borderColor: 'rgba(255, 0, 0,0.5)',
                backgroundColor: 'rgba(255, 0, 0,0.5)',
                borderWidth: 1,
                fill: false
            },
            {
                label: '17Nov; 2wd Stock Buggy, A-Main',
                data: [20.237, 18.173, 18.502, 18.414, 18.745, 19.075, 18.529, 18.162, 18.607, 18.737, 18.821, 18.762, 18.562, 17.851, 19.198, 18.463, 18.349],
                borderColor: 'rgba(0, 255, 0,0.5)',
                backgroundColor: 'rgba(0, 255, 0,0.5)',
                borderWidth: 1,
                fill: false
            },
            {
                label: '22Nov; 2wd Stock Buggy, A-Main',
                data: [20.692, 18.56, 18.085, 17.92, 19.036, 18.699, 18.465, 18.348, 18.418, 18.489, 18.538, 18.192, 19.061, 18.205, 18.483, 18.274, 18.783],
                borderColor: 'rgba(0, 0, 255,0.5)',
                backgroundColor: 'rgba(0, 0, 255,0.5)',
                borderWidth: 1,
                fill: false
            },
            {
                label: '24Nov; 2wd Stock Buggy, A-Main',
                data: [18.654, 17.718, 17.589, 17.706, 18.33, 18.105, 18.236, 18.178, 18.675, 18.154, 17.691, 17.54, 18.227, 18.338, 18.234, 18.314, 18.117],
                borderColor: 'rgba(0, 0, 0,0.75)',
                backgroundColor: 'rgba(0, 0, 0,0.75)',
                borderWidth: 1,
                fill: false
            },
            {
                label: '29Nov; 2wd Stock Buggy, A-Main',
                data: [22.903, 18.35, 17.756, 22.483, 20.645, 19.637, 18.453, 18.596, 17.063, 17.159, 18.324, 22.487, 18.673, 17.664, 17.623, 21.991],
                borderColor: 'rgba(0, 0, 0,0.25)',
                backgroundColor: 'rgba(0, 0, 0,0.25)',
                borderWidth: 1,
                fill: false
            },
            {
                label: '06Dec; 2wd Stock Buggy, A-Main',
                data: [20.009, 18.106, 17.861, 20.142, 17.78, 20.135, 18.956, 18.463, 18.286, 17.728, 18.889, 18.489, 18.744, 18.411, 18.128, 18.142, 19.037],
                borderColor: 'rgba(255, 0, 255,0.5)',
                backgroundColor: 'rgba(255, 0, 255,0.5)',
                borderWidth: 1,
                fill: false
            }]
    },
    options: {
        title: {
            display: true,
            postion: 'top',
            text: 'Race Lap Times'
        },
        legend: {
            position: 'bottom'
        },
        scales: {
            yAxes: [{
                    ticks: {
                        min: 15.0,
                        max: 23.0
                    }
                }]
        },
    }
});
var ctx2 = document.getElementById('myChart2');
var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['15Nov', '17Nov', '22Nov', '24Nov', '29Nov', '06Dec'],
        datasets: [{
                label: 'Fastest Lap',
                data: [17.719, 17.851, 17.920, 17.540, 17.063, 17.728],
                borderColor: 'rgba(0, 0, 0,0.1)',
                backgroundColor: ['rgba(255, 0, 0,0.5)', 'rgba(0, 255, 0,0.5)', 'rgba(0, 0, 255,0.5)', 'rgba(0, 0, 0,0.75)', 'rgba(0, 0, 0,0.25)', 'rgba(255, 0, 255,0.5)'],
                borderWidth: 1,
                fill: false,
                showline: false
            }]
    },
    options: {
        title: {
            display: true,
            postion: 'top',
            text: 'Race Fastest Lap Time'
        },
        legend: {
            position: 'bottom',
        }, scales: {
            yAxes: [{
                    ticks: {
                        min: 15.0,
                        max: 23.0
                    }
                }]
        }
    }
});
var ctx3 = document.getElementById('myChart3');
var myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['15Nov', '17Nov', '22Nov', '24Nov', '29Nov', '06Dec'],
        datasets: [{
                label: 'Lap Time Consistency',
                data: [.9773, .9822, .9835, .9826, .9046, .9620],
                borderColor: 'rgba(255, 0, 0,0.5)',
                backgroundColor: 'rgba(255, 0, 0,0.5)',
                borderWidth: 1,
                fill: false
            }, {
                label: 'Lap Time Standard Deviation',
                data: [0.421, 0.330, 0.305, 0.314, 1.824, 0.706],
                borderColor: 'rgba(0, 0, 0,0.5)',
                backgroundColor: 'rgba(0, 0, 0,0.5)',
                borderWidth: 1,
                fill: false
            }]
    },
    options: {
        title: {
            display: true,
            postion: 'top',
            text: 'Race Consistency & Standard Deviation'
        },
        legend: {
            position: 'bottom',
        }, scales: {
            yAxes: [{
                    ticks: {
                        min: 0.0,
                        max: 2.0
                    }
                }]
        }
    }
});
var player = new Plyr('#player', {});
window.player = player;
