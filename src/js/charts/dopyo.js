import _h from '../Utils/helper';
import _c from '../Utils/calculate';
export default class Dopyo {
  constructor({padding, size, containerEl, data, options}) {
    this.padding = !this.padding ? 60 : padding;
    this.size = size;
    this.containerEl = _h.selectEl(containerEl);
    this.data = data;
    this.options = options;
    this.svgEl = this.appendSvgEl(size);
  }
  init() {
    this.drawXAxis([this.padding, this.size]);
    this.drawXAxisLabels([this.padding, this.size, this.data.xAxis]);
    this.drawYAxis([this.padding, this.size]);
    this.drawYAxisLabels([this.padding, this.size, this.data.series]);
    this.drawData([this.padidng, this.size, this.data.series]);
    this.drawChart(this.containerEl, this.svgEl);
  }
  appendSvgEl({width, height}) {
    const svgEl = _h.createElNS("svg", "http://www.w3.org/2000/svg");
    svgEl.setAttribute("width", width);
    svgEl.setAttribute("height", height);
    svgEl.setAttribute("viewBox", `0 0 ${width} ${height}`)
    return svgEl;
  }
  drawXAxis([padding, {width, height}]) {
    const axisLabel = {
      x: width - (padding * 2),
      y: height - (padding / 2)
    }
    const axisLine = {
      left: {
        x: padding,
        y: height - (padding * 2)
      },
      right: {
        x: width - padding,
        y: height - (padding * 2)
      }
    };
    this.svgEl.innerHTML += `
      <g class="axis x-axis">
        <text x="${axisLabel.x}" y="${axisLabel.y}">x축 이름</text>
        <line x1="${axisLine.left.x}" x2="${axisLine.right.x}" y1="${axisLine.left.y}" y2="${axisLine.right.y}" />
      </g>
    `;
  }
  drawXAxisLabels([padding, size, xAxisData]) {
    const xAxisWidth = size.width - (padding * 2);
    const gap = Math.floor(xAxisWidth / (xAxisData.length - 1));
    const xAxisLabels = xAxisData.map((data, index) => {
      return `
        <text x="${padding + (gap * index)}" y="${size.height - (padding * 1.5)}">${data}</text>
        <line x1="${padding + (gap * index)}" x2="${padding + (gap * index)}" y1="${size.height - (padding * 2)}" y2="${size.height - (padding * 2) + 5}" />
      `
    }).join("");
    this.svgEl.innerHTML += `<g class="labels x-axis-labels">${xAxisLabels}</g>`;
  }
  drawYAxis([padding, {width, height}]) {
    const axisLabel = {
      x: 0,
      y: (padding / 2)
    }
    const axisLine = {
      left: {
        x: padding,
        y: height - (padding * 2)
      },
      right: {
        x: padding,
        y: padding
      }
    };
    this.svgEl.innerHTML += `
      <g class="axis y-axis">
        <text x="${axisLabel.x}" y="${axisLabel.y}">y축 이름</text>
        <line x1="${axisLine.left.x}" x2="${axisLine.right.x}" y1="${axisLine.left.y}" y2="${axisLine.right.y}" />
      </g>
    `;
  }
  drawYAxisLabels([padding, size, series], showGrid = true) {
    let max = _c.getArraysMax(_c.getDataSet(series));
    let min = (_c.getArraysMin(_c.getDataSet(series)) < 0) ? _c.getArraysMin(_c.getDataSet(series)) : 0;
    const yAxisHeight = size.height - (padding * 2);
    const {unit, yAxisData} = _c.calculateYAxis(max, min);
    const yAxisLabels = yAxisData.map((data, index) => {
      return `
        <text x="${padding / 2 * 1.2}" y="${(yAxisHeight - (yAxisHeight / unit * index)) }">${data}</text>
        <line x1="${padding - 5}" x2="${padding}" y1="${(yAxisHeight - (yAxisHeight / unit * index))}" y2="${(yAxisHeight - (yAxisHeight / unit * index))}" />
      `;
    }).join("");
    this.svgEl.innerHTML += `<g class="labels y-axis-labels">${yAxisLabels}</g>`;
    if(showGrid) {
      this.drawYAxisGrid({padding, size, yAxisData, unit});
    }
  }
  drawYAxisGrid({padding, size, yAxisData, unit}) {
    const yAxisHeight = size.height - (padding * 2);
    const yAxisGrid = yAxisData.map((data, index) => {
      return `<line x1="${padding}" x2="${size.width - padding}" y1="${(yAxisHeight - (yAxisHeight / unit * index))}" y2="${(yAxisHeight - (yAxisHeight / unit * index))}" />`
    }).join("");
    this.svgEl.innerHTML += `<g class="grid y-axis-grid">${yAxisGrid}</g>`;
  }
  drawData({padding, size, data}) {
    // this.drawArea();
    // this.drawLine();
    // this.drawDots();
  }
  drawChart(containerEl, svgEl) {
    containerEl.appendChild(svgEl);
  }
}
