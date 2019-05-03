import _h from '../utils/helper';
import _v from '../utils/variables';
import LineChart from './lineChart';

export default {
  createChart({type, size, containerEl, data, options}) {
    const chartType = _h.findKey(_v.CHART_TYPES, type);
    switch(chartType) {
      case 'LINE_CHART':
        this.lineChart({size, containerEl, data, options});
        break;
      case 'BAR_CHART':
        break;
      case 'PIE_CHART':
        break;
      case 'AREA_CHART':
        break;
    }
  },
  lineChart({size, containerEl, data, options}) {
    const chart = new LineChart({size, containerEl, data, options});
    chart.render();
  }
}
