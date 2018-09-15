let ctx = document.getElementById("myChart").getContext('2d');
let hours = Math.floor((curentTime - beginningTime) / 60) + 1;

function chartValues(hours) {
  let dataArray = [
    0,
    108762,
    92114,
    76890,
    112422,
    98092,
    89711,
    88324,
    104911,
    65848,
    87013,
    91364,
    105154,
    99814,
    56741
  ];
  // for (let i = 0; i < hours; i++) {
  //   dataArray.push(Math.floor(Math.random() * 10000));
  // }
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
      data: chartValues(hours).slice(0, hours),
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

function commaMagic (value) {
  let d = value.toString().split('.')
  let e = d[0].split('').reverse().join('')
  e = e.match(/.{1,3}/g).join(',').split('').reverse().join('')
  return `${e}`
}

let votes = chartValues(hours).reduce((sum, el) => sum += el, 0);
let maxVotes = 2810057;
$('#amount').html(commaMagic(votes));
$('#percentage').html((votes/maxVotes*100).toFixed(2) + '%');

setInterval(() => {
  votes += 166;
  $('#amount').html(commaMagic(votes));
  $('#percentage').html((votes/maxVotes*100).toFixed(2) + '%');
}, 10000);