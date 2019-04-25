import _h from '../utils/helper';
import _c from '../utils/calculate';
export default class Dopyo {
  constructor({padding, size, containerEl, data, options}) {
    this.padding = !this.padding ? 40 : padding;
    this.size = size;
    this.containerEl = _h.selectEl(containerEl);
    this.data = data;
    this.options = options;
    this.svgEl = this.appendSvgEl(size);
    // y축 단위
    this.unit = 5;
    // 자리수
    this.digit = 10;
    this.colors = ['#60c5ba', '#47b8e0'];
  }
  init() {
    this.drawXAxis([this.padding, this.size]);
    this.drawXAxisLabels([this.padding, this.size, this.data.xAxis]);
    this.drawYAxis([this.padding, this.size]);
    this.drawYAxisLabels([this.padding, this.size, this.data.series, this.unit, this.digit]);
    this.drawData([this.padding, this.size, this.data, this.unit, this.digit]);
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
    const xAxisWidth = _c.getXAxisWidth(size.width, padding);
    const gap = _c.calculateXAxisGap(xAxisWidth, xAxisData.length);
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
  drawYAxisLabels([padding, size, series, unit, digit], showGrid = true) {
    let max = _c.getArraysMax(_c.getDataSet(series));
    let min = (_c.getArraysMin(_c.getDataSet(series)) < 0) ? _c.getArraysMin(_c.getDataSet(series)) : 0;
    // if (min < 0) ++unit;
    const yAxisHeight = _c.getYAxisHeight(size.height, padding);
    const yAxisData = _c.calculateYAxis(max, min, unit, digit);
    const yAxisLabels = yAxisData.map((data, index) => {
      return `
        <text x="${padding / 2 * 1.4}" y="${(yAxisHeight - (yAxisHeight / unit * index)) }">${data}</text>
        <line x1="${padding - 5}" x2="${padding}" y1="${(yAxisHeight - (yAxisHeight / unit * index))}" y2="${(yAxisHeight - (yAxisHeight / unit * index))}" />
      `;
    }).join("");
    this.svgEl.innerHTML += `<g class="labels y-axis-labels">${yAxisLabels}</g>`;
    if(showGrid) {
      this.drawYAxisGrid({padding, size, yAxisData, unit});
    }
  }
  drawYAxisGrid({padding, size, yAxisData, unit}) {
    const yAxisHeight = _c.getYAxisHeight(size.height, padding);
    const yAxisGrid = yAxisData.map((data, index) => {
      return `<line x1="${padding}" x2="${size.width - padding}" y1="${(yAxisHeight - (yAxisHeight / unit * index))}" y2="${(yAxisHeight - (yAxisHeight / unit * index))}" />`
    }).join("");
    this.svgEl.innerHTML += `<g class="grid y-axis-grid">${yAxisGrid}</g>`;
  }
  drawData([padding, size, data, unit, digit]) {
    let max = _c.getArraysMax(_c.getDataSet(data.series));
    let min = (_c.getArraysMin(_c.getDataSet(data.series)) < 0) ? _c.getArraysMin(_c.getDataSet(data.series)) : 0;
    // if (min < 0) ++unit;
    const yAxisHeight = _c.getYAxisHeight(size.height, padding);
    const standardYAxis = {
      value:  _c.calculateYAxisGap(max, min, unit, digit),
      yCoordinate: yAxisHeight / unit
    }

    const xAxisGap = _c.calculateXAxisGap(_c.getXAxisWidth(size.width, padding), data.xAxis.length);

    data.series.forEach((item, index) => {
      item.calculatedData = item.data.map((y, i) => {
        return [padding + (xAxisGap * i), yAxisHeight - (y * standardYAxis.yCoordinate / standardYAxis.value)];
      })
    })

    // this.drawArea();
    this.svgEl.innerHTML += `
      <g class="data">
        ${this.drawLine(data.series)}
        ${this.drawDots(data.series)}
      </g>
    `
  }
  drawDots(series) {
    let dotsEl;
    series.forEach((item, index) => {
      let dots = item.calculatedData.map((x, i) => {
        return `<circle cx="${x[0]}" cy="${x[1]}" r="8" stroke="${this.colors[index]}" fill="#fff" data-value="${item.data[i]}" />`
      }).join("");
      dotsEl += `<g class="dots">${dots}</g>`;
    })
    return dotsEl;
  }
  drawLine(series) {
    let lineEl;
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
  drawChart(containerEl, svgEl) {
    containerEl.appendChild(svgEl);
  }


  // *********************
  // Test
  // *********************
  addData(option) {
    this.data.xAxis.push(option.xAxis);
    option.series.forEach(a => {
      this.data.series.forEach(b => {
        if (a.name === b.name) {
          b.data.push(a.data);
        }
      })
    })
    this.resetChart();
    this.init();
  }
  resetChart() {
    document.querySelector('svg').innerHTML = "";
    this.svg = this.appendSvgEl(this.size);
  }
}
