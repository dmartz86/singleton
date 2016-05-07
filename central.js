'use strict';
const items = {};

function add(key, value) {
  items[key] = value;
}

function del(key) {
  delete items[key];
}

function list() {
  return items;
}

module.exports = {
  add: add,
  del: del,
  list: list
}
