var app = new Vue({
  el: '#app',
  data() {
    return {
      tabs: [
        {
          isActive: true,
          title: 'Getting Started'
        },
        {
          isActive: false,
          title: 'Line chart'
        },
        {
          isActive: false,
          title: 'Area chart'
        },
      ]
    }
  },
  methods: {
    activeTab(tab) {
      this.tabs.forEach((item) => {
        item.isActive = false;
      })
      tab.isActive = true;
    }
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const lineChart = dopyo.createChart({
    type: 'line',
    size: {
      width: 600,
      height: 400,
    },
    containerEl: '#linechart',
    data: {
      xAxis: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05',],
      series: [
        {
          name: '라인그래프1',
          data: [0, 10, 20, 50, 30,]
        },
        {
          name: '라인그래프2',
          data: [20, 0, 15, 20, 70,]
        },
        {
          name: '라인그래프3',
          data: [10, 50, 10, 30, 50,]
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
      tooltip: {
        show: true,
      }
    }
  });
  const areaChart = dopyo.createChart({
    type: 'area',
    size: {
      width: 600,
      height: 400,
    },
    containerEl: '#areachart',
    data: {
      xAxis: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05',],
      series: [
        {
          name: '라인그래프1',
          data: [30, 50, 70, 120, 100]
        },
        {
          name: '라인그래프2',
          data: [20, 30, 90, 60, 120]
        },
        {
          name: '라인그래프3',
          data: [0, 40, 60, 30, 100]
        },
      ]
    },
    options: {
      xAxis: {
        show: true,
        title: 'x축 이름'
      },
      yAxis: {
        show: true,
        title: 'y축 이름'
      },
      tooltip: {
        show: true,
      }
    }
  });
})
