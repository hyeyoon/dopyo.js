import './assets/sass/main.sass';
import ChartBasic from './js/charts/chartBasic';
import chart from './js/charts/chart';

if (module.hot) {
  module.hot.accept()
}

document.addEventListener('DOMContentLoaded', () => {
  const dopyo = chart.createChart({
    type: 'line',
    size: {
      width: 600,
      height: 400,
    },
    containerEl: '#dopyo-chart',
    data: {
      xAxis: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05'],
      series: [
        {
          name: '라인그래프1',
          data: [50, -22, 200, 60, -200]
        },
        {
          name: '라인그래프2',
          data: [20, -40, 15, 36, -20]
        },
      ]
    },
    options: {
      title: {
        show: false,
        text: '차트 이름',
      },
      xAxis: {

      },
      yAxis: {

      },
    }
  });
})
