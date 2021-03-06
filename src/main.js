import './assets/sass/main.sass';
import { dopyo } from './js/chart';

if (module.hot) {
  module.hot.accept()
}

document.addEventListener('DOMContentLoaded', () => {
  const chart = dopyo.createChart({
    type: 'area',
    size: {
      width: 600,
      height: 400,
    },
    containerEl: '#dopyo-chart',
    data: {
      xAxis: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-04', '2018-05'],
      series: [
        {
          name: '라인그래프1',
          data: [0, 10, 20, 50, 30, 80, 150]
        },
        {
          name: '라인그래프2',
          data: [20, 0, 15, 20, 70, 20, 80]
        },
        {
          name: '라인그래프3',
          data: [10, 50, 10, 30, 50, 50, 40]
        },
      ]
    },
    options: {
      xAxis: {
        show: false,
      },
      yAxis: {
        show: true,
        title: 'y축 이름'
      },
      // title: {
      //   show: false,
      //   text: '차트 이름',
      // },
      tooltip: {
        show: true,
      }
    }
  });
})
