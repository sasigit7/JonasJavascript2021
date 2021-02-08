"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

function _plugin() {
  const data = require("@parcel/plugin");

  _plugin = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new (_plugin().Packager)({
  async package({
    bundle,
    getSourceMapReference
  }) {
    let assets = [];
    bundle.traverseAssets(asset => {
      assets.push(asset);
    });

    _assert().default.equal(assets.length, 1, 'TS bundles must only contain one asset');

    let code = await assets[0].getCode();
    let map = await assets[0].getMap();

    if (map) {
      let sourcemapReference = await getSourceMapReference(map);

      if (sourcemapReference != null) {
        code += '\n//# sourceMappingURL=' + sourcemapReference + '\n';
      }
    }

    return {
      contents: code,
      map
    };
  }

});

exports.default = _default;