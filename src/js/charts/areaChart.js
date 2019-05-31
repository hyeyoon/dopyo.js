import _h from '../utils/helper';
import _c from '../utils/calculate';
import _v from '../utils/variables';
import LineChart from './lineChart';

export default class AreaChart extends LineChart {
  constructor({size, containerEl, data, options}) {
    super({size, containerEl, data, options});
  }
  drawData([padding, size, data, unit, digit]) {
    let max = _c.getArraysMax(_c.getDataSet(data.series));
    let min = (_c.getArraysMin(_c.getDataSet(data.series)) < 0) ? _c.getArraysMin(_c.getDataSet(data.series)) : 0;
    const yAxisData = _c.calculateYAxis(max, min, unit, digit);
    const yAxisHeight = _c.getYAxisHeight(size.height, padding);
    const standardYAxis = {
      value:  _c.calculateYAxisGap(max, min, unit, digit),
      yCoordinate: yAxisHeight / unit
    }
    const zeroIndex = yAxisData.findIndex(num => num === 0);
    const xAxisGap = _c.calculateXAxisGap(_c.getXAxisWidth(size.width, padding), data.xAxis.length);
    data.series.forEach((item, index) => {
      item.calculatedData = item.data.map((y, i) => {
        return [
          Math.round(padding + (xAxisGap * i)),
          Math.round(yAxisHeight - (y * standardYAxis.yCoordinate / standardYAxis.value) + - Math.round(standardYAxis.yCoordinate * zeroIndex))
        ];
      })
    })
    this.svgEl.innerHTML += data.series.map((item, index) => {
      return `<g class="data">
        ${this.drawArea(item, index)}
        ${this.drawLine(item, index)}
        ${this.drawDots(data.xAxis, item, index)}
      </g>
      `
    }).join("")
  }
  drawArea(item, index) {
    const { width, height } = this.size;
    const padding = this.padding;
    let tmpCalculatedData = [...item.calculatedData, [item.calculatedData[item.calculatedData.length - 1][0], height - (padding * _v.DEFAULT_PADDING_MULTIPLE_TIMES)], [padding, height - (padding * _v.DEFAULT_PADDING_MULTIPLE_TIMES)]];
    let tmpLine = tmpCalculatedData.reduce((accum, curr, idx, array) => {
      if (!Array.isArray(curr)) { return; }
      else {
        if (idx === 0) {
          accum += 'M ';
        } else if (idx === 1) {
          accum += 'L ';
        }
        return accum += `${curr.join(",")} `;
      }
    }, "");
    return `<g class="area">
      <path fill-opacity="0.5" fill="${this.colors[index]}" d="${tmpLine} Z" />
    </g>`;
  }
}
