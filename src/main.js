import './assets/sass/main.sass';
import Dopyo from './js/charts/dopyo';

if (module.hot) {
  module.hot.accept()
}

document.addEventListener('DOMContentLoaded', () => {
  const dopyo = new Dopyo({
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
          data: [10, 22, 150, 60, 100]
        },
        {
          name: '라인그래프2',
          data: [20, 50, 15, 36, 240]
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
  dopyo.init();


  // *********************
  // Test
  // *********************

  let count = 6;
  const addBtn = document.querySelector('.add');
  addBtn.addEventListener("click", () => {
    dopyo.addData({
      xAxis: `2019-0${count}`,
      series: [
        {
          name: '라인그래프1',
          data: Math.floor(Math.random() * (800 - 0)) + 0
        },
        {
          name: '라인그래프2',
          data: Math.floor(Math.random() * (800 - 0)) + 0
        },
      ],
    });
    count++
  })
})
