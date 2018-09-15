let ctx = document.getElementById("myChart").getContext('2d');
let hours = Math.floor((curentTime - beginningTime) / 60) + 1;

function chartValues(hours) {
  let dataArray = [];
  for (let i = 0; i < hours; i++) {
    dataArray.push(Math.floor(Math.random() * 10000));
  }
  return dataArray;
}

let myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      "7:00", 
      "8:00", 
      "9:00", 
      "10:00", 
      "11:00", 
      "12:00",
      "13:00", 
      "14:00", 
      "15:00", 
      "16:00", 
      "17:00", 
      "18:00",
      "19:00", 
      "20:00", 
      "21:00"
    ],
    datasets: [{
      label: 'Numarul de Votanti',
      data: chartValues(hours),
      backgroundColor: [
        'rgba(88,137,192,0.38)'
      ],
      borderColor: [
        'rgba(88,137,192,1)'
      ],
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "#507fb3",
          fontSize: 20,
          beginAtZero:true
        }
      }],
      xAxes: [{
        ticks: {
            fontColor: "#507fb3",
            fontSize: 20,
            beginAtZero: true
        }
    }]
    },
    legend: {
      labels: {
        // This more specific font property overrides the global property
        fontColor: '#507fb3',
        fontSize: 30,
      }
    }
  }
});