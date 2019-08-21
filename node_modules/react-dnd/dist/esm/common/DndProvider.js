function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { memo } from 'react';
import { DndContext, createDndContext } from './DndContext';
/**
 * A React component that provides the React-DnD context
 */

export var DndProvider = memo(function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var context = 'manager' in props ? {
    dragDropManager: props.manager
  } : createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  return React.createElement(DndContext.Provider, {
    value: context
  }, children);
});
var instanceSymbol = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');

function createSingletonDndContext(backend) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getGlobalContext();
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var debugMode = arguments.length > 3 ? arguments[3] : undefined;
  var ctx = context;

  if (!ctx[instanceSymbol]) {
    ctx[instanceSymbol] = createDndContext(backend, context, options, debugMode);
  }

  return ctx[instanceSymbol];
}

function getGlobalContext() {
  return typeof global !== 'undefined' ? global : window;
}