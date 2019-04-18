import _h from '../Utils/helper';
export default class Dopyo {
  constructor({padding, size, containerEl, data, options}) {
    this.padding = !this.padding ? 40 : padding;
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
    // this.drawYAxisGrid();
    this.drawData(this.containerEl, this.svgEl);
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
      return `<text x="${padding + (gap * index)}" y="${size.height - padding}">${data}</text>`
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
  drawYAxisLabels([padding, size, series]) {

  }
  drawData(containerEl, svgEl) {
    containerEl.appendChild(svgEl);
  }
}
