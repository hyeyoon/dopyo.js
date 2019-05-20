export default {
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
  },
  addEventToEl(el, type, fn, bindEl) {
    el.addEventListener(type, e => {
      fn.call(bindEl, e);
    })
  },
  findKey(collection, key) {
    for (let item in collection) {
      if (collection[item] === key) {
        return item;
      }
    }
  }
}
