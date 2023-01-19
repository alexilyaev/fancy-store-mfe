"use strict";
exports.__esModule = true;
exports.useCart = void 0;
var zustand_1 = require("zustand");
exports.useCart = (0, zustand_1.create)(function (set, get) { return ({
    items: [],
    addItem: function (itemToAdd) {
        set(function (state) { return ({ items: state.items.concat(itemToAdd) }); });
    },
    removeItem: function (itemId) {
        set(function (state) { return ({
            items: state.items.filter(function (item) { return item.id !== itemId; })
        }); });
    }
}); });
