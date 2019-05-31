import _h from '../utils/helper';
import _c from '../utils/calculate';
import _v from '../utils/variables';

export default class ChartBasic {
  constructor({padding, type, size, containerEl, data, options}) {
    this.padding = !options.hasOwnProperty(padding) ? _v.DEFAULT_PADDING : padding;
    this.size = size;
    this.containerEl = _h.selectEl(containerEl);
    this.data = data;
    this.options = options;
    this.svgEl = this.appendSvgEl(size);
    this.tooltipEl = options.tooltip.show ? this.appendTooltipEl() : '';
    this.unit = _v.Y_AXIS_UNIT;
    this.digit = _v.DEFAULT_DIGIT;
    this.colors = ['#60c5ba', '#47b8e0', '#205e74'];
  }
  appendSvgEl({width, height}) {
    const svgEl = _h.createElNS("svg", "http://www.w3.org/2000/svg");
    svgEl.setAttribute("width", width);
    svgEl.setAttribute("height", height);
    svgEl.setAttribute("viewBox", `0 0 ${width} ${height}`)
    return svgEl;
  }
  appendTooltipEl() {
    const tooltipEl = _h.createEl("div");
    tooltipEl.setAttribute("class", "tooltip");
    return tooltipEl;
  }
  drawXAxis([padding, {width, height}]) {
    const axisLabel = {
      x: width - (padding * _v.DEFAULT_PADDING_MULTIPLE_TIMES),
      y: height - (padding / _v.DEFAULT_PADDING_DIVISION_TIMES)
    }
    const axisLine = {
      left: {
        x: padding,
        y: height - (padding * _v.DEFAULT_PADDING_MULTIPLE_TIMES)
      },
      right: {
        x: width - padding,
        y: height - (padding * _v.DEFAULT_PADDING_MULTIPLE_TIMES)
      }
    };
    const xAxisLabel = (this.options.xAxis.show) ? `<text x="${axisLabel.x}" y="${axisLabel.y}">${this.options.xAxis.title}</text>` : "";
    this.svgEl.innerHTML += `
      <g class="axis x-axis">
        ${xAxisLabel}
        <line x1="${axisLine.left.x}" x2="${axisLine.right.x}" y1="${axisLine.left.y}" y2="${axisLine.right.y}" />
      </g>
    `;
  }
  drawXAxisLabels([padding, size, xAxisData]) {
    const xAxisWidth = _c.getXAxisWidth(size.width, padding);
    const gap = _c.calculateXAxisGap(xAxisWidth, xAxisData.length);
    const xAxisLabels = xAxisData.map((data, index) => {
      return `
        <text x="${padding + (gap * index)}" y="${size.height - (padding * _v.X_AXIS_LABEL_PADDING_MULTIPLE_TIMES)}">${data}</text>
        <line x1="${padding + (gap * index)}" x2="${padding + (gap * index)}" y1="${size.height - (padding * _v.DEFAULT_PADDING_MULTIPLE_TIMES)}" y2="${size.height - (padding * _v.DEFAULT_PADDING_MULTIPLE_TIMES) + _v.AXIS_LABEL_LINE_SIZE}" />
      `
    }).join("");
    this.svgEl.innerHTML += `<g class="labels x-axis-labels">${xAxisLabels}</g>`;
  }
  drawYAxis([padding, {width, height}]) {
    const axisLabel = {
      x: 0,
      y: (padding / _v.DEFAULT_PADDING_DIVISION_TIMES)
    }
    const axisLine = {
      left: {
        x: padding,
        y: height - (padding * _v.DEFAULT_PADDING_MULTIPLE_TIMES)
      },
      right: {
        x: padding,
        y: padding
      }
    };
    const yAxisLabel = (this.options.yAxis.show) ? `<text x="${axisLabel.x}" y="${axisLabel.y}">${this.options.yAxis.title}</text>` : "";
    this.svgEl.innerHTML += `
      <g class="axis y-axis">
        ${yAxisLabel}
        <line x1="${axisLine.left.x}" x2="${axisLine.right.x}" y1="${axisLine.left.y}" y2="${axisLine.right.y}" />
      </g>
    `;
  }
  drawYAxisLabels([padding, size, series, unit, digit], showGrid = true) {
    let max = _c.getArraysMax(_c.getDataSet(series));
    let min = (_c.getArraysMin(_c.getDataSet(series)) < 0) ? _c.getArraysMin(_c.getDataSet(series)) : 0;
    const yAxisHeight = _c.getYAxisHeight(size.height, padding);
    const yAxisData = _c.calculateYAxis(max, min, unit, digit);
    const yAxisLabels = yAxisData.map((data, index) => {
      return `
        <text x="${padding / _v.DEFAULT_PADDING_DIVISION_TIMES * _v.Y_AXIS_LABEL_PADDING_MULTIPLE_TIMES}" y="${(yAxisHeight - (yAxisHeight / unit * index)) }">${data}</text>
        <line x1="${padding - _v.AXIS_LABEL_LINE_SIZE}" x2="${padding}" y1="${(yAxisHeight - Math.round(yAxisHeight / unit * index))}" y2="${(yAxisHeight - Math.round(yAxisHeight / unit * index))}" />
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
      return `<line x1="${padding}" x2="${size.width - padding}" y1="${(yAxisHeight - Math.round(yAxisHeight / unit * index))}" y2="${(yAxisHeight - Math.round(yAxisHeight / unit * index))}" />`
    }).join("");
    this.svgEl.innerHTML += `<g class="grid y-axis-grid">${yAxisGrid}</g>`;
  }
  addTooltipEvent(e) {
    if (e.target.nodeName.toLowerCase() !== 'circle') {
      this.tooltipEl.style.left = `${_v.TOOLTIP_HIDE_LEFT_POSITION}px`;
    }
    else {
      const data = e.target.dataset;
      this.tooltipEl.innerHTML = `
        <h2 class="tooltip__title">${data.date}</h2>
        <p class="tooltip__desc">
          <span class="tooltip__line" style="background: ${data.color}"></span>
          ${data.value}
        </p>
      `;
      this.tooltipEl.style.left = `${e.clientX + _v.TOOLTIP_PADDINT_LEFT}px`;
      this.tooltipEl.style.top = `${e.clientY + _v.TOOLTIP_PADDINT_TOP}px`;
    }
  }
  drawChart(containerEl, tooltipEl, svgEl) {
    containerEl.classList.add('dopyo-chart');
    containerEl.style.minWidth =  `${this.size.width}px`;
    tooltipEl && containerEl.appendChild(tooltipEl);
    containerEl.appendChild(svgEl);
  }

  // *********************
  // Test
  // *********************
  // addData(option) {
  //   this.data.xAxis.push(option.xAxis);
  //   option.series.forEach(a => {
  //     this.data.series.forEach(b => {
  //       if (a.name === b.name) {
  //         b.data.push(a.data);
  //       }
  //     })
  //   })
  //   this.resetChart();
  //   this.init();
  // }
  // resetChart() {
  //   document.querySelector('svg').innerHTML = "";
  //   this.svg = this.appendSvgEl(this.size);
  // }
}
