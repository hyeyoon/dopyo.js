import _h from '../utils/helper';
import _c from '../utils/calculate';
import _v from '../utils/variables';
import ChartBasic from './chartBasic';

export default class LineChart extends ChartBasic {
  constructor({size, containerEl, data, options}) {
    super({size, containerEl, data, options});
  }
  render() {
    this.drawXAxis([this.padding, this.size]);
    this.drawXAxisLabels([this.padding, this.size, this.data.xAxis]);
    this.drawYAxis([this.padding, this.size]);
    this.drawYAxisLabels([this.padding, this.size, this.data.series, this.unit, this.digit]);
    this.drawData([this.padding, this.size, this.data, this.unit, this.digit]);
    _h.addEventToEl(this.svgEl, 'mouseover', this.addTooltipEvent);
    this.drawChart(this.containerEl, this.svgEl);
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
          padding + (xAxisGap * i),
          yAxisHeight - (y * standardYAxis.yCoordinate / standardYAxis.value) + - Math.round(standardYAxis.yCoordinate * zeroIndex)
        ];
      })
    })
    this.svgEl.innerHTML += `
      <g class="data">
        ${this.drawLine(data.series)}
        ${this.drawDots(data.series)}
      </g>
    `
  }
  drawDots(series) {
    let dotsEl="";
    series.forEach((item, index) => {
      let dots = item.calculatedData.map((x, i) => {
        return `<circle cx="${x[0]}" cy="${x[1]}" r="8" stroke="${this.colors[index]}" fill="#fff" data-value="${item.data[i]}" />`
      }).join("");
      dotsEl += `<g class="dots">${dots}</g>`;
    })
    return dotsEl;
  }
  drawLine(series) {
    let lineEl="";
    series.forEach((item, index) => {
      let tmpLine = item.calculatedData.reduce((accum, curr, idx, array) => {
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
      lineEl += `<g class="line"><path fill="none" d="${tmpLine}" stroke="${this.colors[index]}" /></g>`;
    })
    return lineEl;
  }
}
