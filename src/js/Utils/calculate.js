import _v from '../utils/variables';

export default {
  getArrayMax(array) {
    return Math.max(...array);
  },
  getArraysMax(arraySet) {
    return Math.max(...arraySet.map(array => this.getArrayMax(array)))
  },
  getArrayMin(array) {
    return Math.min(...array);
  },
  getArraysMin(arraySet) {
    return Math.min(...arraySet.map(array => this.getArrayMin(array)))
  },
  getDataSet(series) {
    return series.map(item => item.data);
  },
  getNegativeMinNum(num, gap) {
    return Math.floor(num / gap) * gap
  },
  getXAxisWidth(width, padding) {
    return width - (padding * _v.DEFAULT_PADDING_MULTIPLE_TIMES);
  },
  getYAxisHeight(height, padding) {
    return height - (padding * _v.DEFAULT_PADDING_MULTIPLE_TIMES);
  },
  calculateXAxisGap(xAxisWidth, length) {
    return Math.floor(xAxisWidth / (length - 1));
  },
  calculateYAxis(max, min, unit, digit) {
    const gap = this.calculateYAxisGap(max, min, unit, digit);
    if (min < 0) {
      min = this.getNegativeMinNum(min, gap);
    }
    const yAxisData = [];
    for (let i = 0; i < unit; i++) {
      yAxisData.push(min + (i * gap));
    }
    return yAxisData;
  },
  calculateYAxisGap(max, min, unit, digit) {
    let gap;
    let maxMinGap = Math.ceil(max - min);
    if (maxMinGap <= 25) {
      gap = 5;
    } else if (maxMinGap <= 50) {
      gap = 10;
    } else if (maxMinGap <= 100) {
      gap = 20;
    } else if (maxMinGap <= 150) {
      gap = 30;
    } else if (maxMinGap <= 200) {
      gap = 40;
    } else {
      const multipleNum = Math.ceil(maxMinGap / 50 / 5);
      gap = multipleNum * 50;
    }
    return gap;
  }
}
