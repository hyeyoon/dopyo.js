arguments = {
  containerEl: '#chart',
  data: {
    xAxis: ['2018-01', '2018-02', '2018-03', '2018-04', '2018.05'],
    series: [
      {
        name: '라인그래프1',
        data: [10, 20, 5, 60, 100]
      },
      {
        name: '라인그래프2',
        data: [20, 50, 15, 30, 800]
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
}
