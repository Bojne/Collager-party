"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragPreviewImage = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * A utility for rendering a drag preview image
 */
var DragPreviewImage = React.memo(function (_ref) {
  var connect = _ref.connect,
      src = _ref.src;

  if (typeof Image !== 'undefined') {
    var img = new Image();
    img.src = src;

    img.onload = function () {
      return connect(img);
    };
  }

  return null;
});
exports.DragPreviewImage = DragPreviewImage;
DragPreviewImage.displayName = 'DragPreviewImage';