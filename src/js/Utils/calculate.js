module.exports = {
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
    return width - (padding * 2);
  },
  getYAxisHeight(height, padding) {
    return height - (padding * 2);
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
    console.log('max:', max);
    console.log('min:', min);
    let tmpGap = Math.abs(Math.ceil(((max - min) / unit / digit))) * digit;
    if (tmpGap < 5) {
      gap = 5;
      return
    } else if (tmpGap < 10) {
      gap = 10;
      return
    } else if (tmpGap < 20) {
      gap = 20;
      return
    } else if (tmpGap < 30) {
      gap = 30;
      return
    } else {
      gap = Math.ceil(tmpGap / 50) * 50;
    }
    return gap;
  }
}
