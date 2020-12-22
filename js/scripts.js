var timestamp = Number(new Date()); // current time as number

var date = new Date(timestamp).toLocaleDateString("de-DE")
console.log(date)
// expected output "30.08.2017"

var time = new Date(timestamp).toLocaleTimeString("de-DE")
console.log(time)
// expected output "3:19:27"

document.getElementById("timestamp").innerHTML = "Daten abgerufen am " +date+" um "+time;

var ctx = document.getElementById('myChart');
var chartData = [12, 19, 3, 5, 2, 3];
var backgroundColor = [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ];
var borderColor = [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ]
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['10.12.2020', '11.12.2020', '12.12.2020', '13.12.2020', '14.12.2020', '15.12.2020'],
        datasets: [{
            label: 'Kraftstoffverbrauch in Liter',
            data: chartData,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
		responsive: false, // Boolean - whether or not the chart should be responsive and resize when the browser does.
		maintainAspectRatio: false, // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    }
});

document.getElementById('diagrammtype').onclick = function() {
	myChart.destroy();
	
	if((document.getElementById("diagrammtype").value) == 'line') {
		myChart = new Chart(ctx, {
			type: 'line',
			data: {
			labels: ['10.12.2020', '11.12.2020', '12.12.2020', '13.12.2020', '14.12.2020', '15.12.2020'],
			datasets: [{
				label: 'Kraftstoffverbrauch in Liter',
				data: chartData,
				backgroundColor: backgroundColor,
				borderColor: borderColor,
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			responsive: false, // Boolean - whether or not the chart should be responsive and resize when the browser does.
			maintainAspectRatio: false, // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
		}
		});
	} else if((document.getElementById("diagrammtype").value) == 'pie') {
		myChart = new Chart(ctx, {
			type: 'pie',
			data: {
			labels: ['10.12.2020', '11.12.2020', '12.12.2020', '13.12.2020', '14.12.2020', '15.12.2020'],
			datasets: [{
				label: 'Kraftstoffverbrauch in Liter',
				data: chartData,
				backgroundColor: backgroundColor,
				borderColor: borderColor,
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			responsive: false, // Boolean - whether or not the chart should be responsive and resize when the browser does.
			maintainAspectRatio: false, // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
		}
		});
	} else {
		myChart = new Chart(ctx, {
			type: 'bar',
			data: {
			labels: ['10.12.2020', '11.12.2020', '12.12.2020', '13.12.2020', '14.12.2020', '15.12.2020'],
			datasets: [{
				label: 'Kraftstoffverbrauch in Liter',
				data: chartData,
				backgroundColor: backgroundColor,
				borderColor: borderColor,
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			responsive: false, // Boolean - whether or not the chart should be responsive and resize when the browser does.
			maintainAspectRatio: false, // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
		}
		});
	}
};

var ctx2 = document.getElementById('myChart2');
var myChart2 = new Chart(ctx2, {
	type: 'bar',
	data: {
		labels: ['Super', 'Diesel', 'Elektro', 'Wasserstoff'],
		datasets: [{
			label: 'Kraftstoffverbrauch nach Art',
			data: chartData,
			backgroundColor: backgroundColor,
			borderColor: borderColor,
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		},
		responsive: false, // Boolean - whether or not the chart should be responsive and resize when the browser does.
		maintainAspectRatio: false, // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
	}
});

document.getElementById('diagrammtype2').onclick = function() {
	myChart2.destroy();
	
	if((document.getElementById("diagrammtype2").value) == 'line') {
		myChart2 = new Chart(ctx2, {
			type: 'line',
			data: {
				labels: ['Super', 'Diesel', 'Elektro', 'Wasserstoff'],
				datasets: [{
					label: 'Kraftstoffverbrauch nach Art',
					data: chartData,
					backgroundColor: backgroundColor,
					borderColor: borderColor,
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				responsive: false, // Boolean - whether or not the chart should be responsive and resize when the browser does.
				maintainAspectRatio: false, // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
			}
		});
	} else if((document.getElementById("diagrammtype2").value) == 'pie') {
		myChart2 = new Chart(ctx2, {
			type: 'pie',
			data: {
				labels: ['Super', 'Diesel', 'Elektro', 'Wasserstoff'],
				datasets: [{
					label: 'Kraftstoffverbrauch nach Art',
					data: chartData,
					backgroundColor: backgroundColor,
					borderColor: borderColor,
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				responsive: false, // Boolean - whether or not the chart should be responsive and resize when the browser does.
				maintainAspectRatio: false, // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
			}
		});
	} else {
		myChart2 = new Chart(ctx2, {
			type: 'bar',
			data: {
				labels: ['Super', 'Diesel', 'Elektro', 'Wasserstoff'],
				datasets: [{
					label: 'Kraftstoffverbrauch nach Art',
					data: chartData,
					backgroundColor: backgroundColor,
					borderColor: borderColor,
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				responsive: false, // Boolean - whether or not the chart should be responsive and resize when the browser does.
				maintainAspectRatio: false, // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
			}
		});
	}
};

var ctx3 = document.getElementById('myChart3');
var myChart3 = new Chart(ctx3, {
	type: 'bar',
	data: {
		labels: ['DE-Nord', 'DE-West', 'DE-Süd', 'DE-Ost'],
		datasets: [{
			label: 'Kraftstoffverbrauch nach Region',
			data: chartData,
			backgroundColor: backgroundColor,
			borderColor: borderColor,
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		},
		responsive: false, // Boolean - whether or not the chart should be responsive and resize when the browser does.
		maintainAspectRatio: false, // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
	}
});

document.getElementById('diagrammtype3').onclick = function() {
	myChart3.destroy();
	
	if((document.getElementById("diagrammtype3").value) == 'line') {
		myChart3 = new Chart(ctx3, {
			type: 'line',
			data: {
				labels: ['DE-Nord', 'DE-West', 'DE-Süd', 'DE-Ost'],
				datasets: [{
					label: 'Kraftstoffverbrauch nach Region',
					data: chartData,
					backgroundColor: backgroundColor,
					borderColor: borderColor,
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				responsive: false, // Boolean - whether or not the chart should be responsive and resize when the browser does.
				maintainAspectRatio: false, // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
			}
		});
	} else if((document.getElementById("diagrammtype3").value) == 'pie') {
		myChart3 = new Chart(ctx3, {
			type: 'pie',
			data: {
				labels: ['DE-Nord', 'DE-West', 'DE-Süd', 'DE-Ost'],
				datasets: [{
					label: 'Kraftstoffverbrauch nach Region',
					data: chartData,
					backgroundColor: backgroundColor,
					borderColor: borderColor,
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				responsive: false, // Boolean - whether or not the chart should be responsive and resize when the browser does.
				maintainAspectRatio: false, // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
			}
		});
	} else {
		myChart3 = new Chart(ctx3, {
			type: 'bar',
			data: {
				labels: ['DE-Nord', 'DE-West', 'DE-Süd', 'DE-Ost'],
				datasets: [{
					label: 'Kraftstoffverbrauch nach Region',
					data: chartData,
					backgroundColor: backgroundColor,
					borderColor: borderColor,
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				responsive: false, // Boolean - whether or not the chart should be responsive and resize when the browser does.
				maintainAspectRatio: false, // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
			}
		});
	}
};

document.getElementById('economicKPIs').onmouseover = function() {
	showElements('economicKPIs');
}

document.getElementById('economicKPIs').onmouseout = function() {
	hideElements('economicKPIs');
}

document.getElementById('logisticKPIs').onmouseover = function() {
	showElements('logisticKPIs');
}

document.getElementById('logisticKPIs').onmouseout = function() {
	hideElements('logisticKPIs');
}

document.getElementById('sustainabilityKPIs').onmouseover = function() {
	showElements('sustainabilityKPIs');
}

document.getElementById('sustainabilityKPIs').onmouseout = function() {
	hideElements('sustainabilityKPIs');
}

function showElements(element) {
	var elems = document.getElementsByClassName(element);
	for (var i=0;i<elems.length;i+=1) {
		elems[i].style.display = 'block';
	}
}

function hideElements(element) {
	var elems = document.getElementsByClassName(element);
	for (var i=0;i<elems.length;i+=1) {
		elems[i].style.display = 'none';
	}
}