"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DndProvider = void 0;

var React = _interopRequireWildcard(require("react"));

var _DndContext = require("./DndContext");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * A React component that provides the React-DnD context
 */
var DndProvider = (0, React.memo)(function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var context = 'manager' in props ? {
    dragDropManager: props.manager
  } : createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  return React.createElement(_DndContext.DndContext.Provider, {
    value: context
  }, children);
});
exports.DndProvider = DndProvider;
var instanceSymbol = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');

function createSingletonDndContext(backend) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getGlobalContext();
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var debugMode = arguments.length > 3 ? arguments[3] : undefined;
  var ctx = context;

  if (!ctx[instanceSymbol]) {
    ctx[instanceSymbol] = (0, _DndContext.createDndContext)(backend, context, options, debugMode);
  }

  return ctx[instanceSymbol];
}

function getGlobalContext() {
  return typeof global !== 'undefined' ? global : window;
}