module.exports = {
  pipe(...functions) {
    return args => functions.reduce((arg, nextFn) => nextFn(arg), args);
  },
  selectEl(selector) {
    return document.querySelector(selector);
  },
  createEl(el) {
    return document.createElement(el);
  },
  createElNS(el, namespaceURI) {
    return document.createElementNS(namespaceURI, el);
  }
}
