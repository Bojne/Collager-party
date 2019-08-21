"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDndContext = createDndContext;
exports.DndContext = void 0;

var React = _interopRequireWildcard(require("react"));

var _dndCore = require("dnd-core");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Create the React Context
 */
var DndContext = React.createContext({
  dragDropManager: undefined
});
/**
 * Creates the context object we're providing
 * @param backend
 * @param context
 */

exports.DndContext = DndContext;

function createDndContext(backend, context, options, debugMode) {
  return {
    dragDropManager: (0, _dndCore.createDragDropManager)(backend, context, options, debugMode)
  };
}