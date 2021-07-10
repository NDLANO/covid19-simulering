import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const infected = {
    label: 'Infected',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
    fill: true,
    radius: 0,
    tension:0.4
};

const susceptable = {
    label: 'Susceptable',
    backgroundColor: 'rgb(79, 149, 32)',
    borderColor: 'rgb(79, 149, 32)',
    data: [0, 10, 5, 2, 20, 30, 45],
    fill: true,
    radius: 0,
    tension:0.4
}

const data={
  labels:labels,
  datasets: [infected, susceptable]
};

const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: (ctx) => 'Chart.js Line Chart - stacked=' + ctx.chart.options.scales.y.stacked
        },
      },
      scales: {
        x: {
          display: false,
          text:'Time'
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: 'number of humans'
          }
        }
      }
    }
  };

const chart = new Chart(
    document.getElementById('chart'),
    config
);

let x=0
setInterval(()=> {
  labels.push(x++)
  infected.data.push(Math.floor(Math.random()*50))
  susceptable.data.push(Math.floor(Math.random()*50))
  chart.update()
  console.log(infected.data)
},1000)

export{chart}