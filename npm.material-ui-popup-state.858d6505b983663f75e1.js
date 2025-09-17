"use strict";
(self["webpackChunkfluffisaurus_github_io"] = self["webpackChunkfluffisaurus_github_io"] || []).push([[591],{

/***/ 21097:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _typeof = __webpack_require__(73738);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useEvent = useEvent;
var React = _interopRequireWildcard(__webpack_require__(96540));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function useEvent(handler) {
  // istanbul ignore next
  if (typeof window === 'undefined') {
    // useLayoutEffect doesn't work on the server side, don't bother
    // trying to make callback functions stable
    return handler;
  }
  var handlerRef = React.useRef(null);
  React.useLayoutEffect(function () {
    handlerRef.current = handler;
  });
  return React.useCallback(function () {
    var _handlerRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    (_handlerRef$current = handlerRef.current) === null || _handlerRef$current === void 0 || _handlerRef$current.call.apply(_handlerRef$current, [handlerRef].concat(args));
  }, []);
}
//# sourceMappingURL=useEvent.js.map

/***/ }),

/***/ 45266:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.interopRequireDefault = interopRequireDefault;
function interopRequireDefault(defaultImport) {
  var asAny = defaultImport;
  // istanbul ignore next
  return asAny.__esModule ? asAny["default"] : defaultImport;
}
//# sourceMappingURL=interopRequireDefault.js.map

/***/ }),

/***/ 81214:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(24994);
var _typeof = __webpack_require__(73738);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.anchorRef = anchorRef;
exports.bindContextMenu = bindContextMenu;
exports.bindDialog = bindDialog;
exports.bindDoubleClick = bindDoubleClick;
exports.bindFocus = bindFocus;
exports.bindHover = bindHover;
exports.bindMenu = bindMenu;
exports.bindPopover = bindPopover;
exports.bindPopper = bindPopper;
exports.bindToggle = bindToggle;
exports.bindTrigger = bindTrigger;
exports.initCoreState = void 0;
exports.usePopupState = usePopupState;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(43693));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(85715));
var _react2 = _interopRequireWildcard(__webpack_require__(96540));
var React = _react2;
var _useEvent = __webpack_require__(21097);
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /* eslint-env browser */
var printedWarnings = {};
function warn(key, message) {
  if (printedWarnings[key]) return;
  printedWarnings[key] = true;
  // eslint-disable-next-line no-console
  console.error('[material-ui-popup-state] WARNING', message);
}
var initCoreState = exports.initCoreState = {
  isOpen: false,
  setAnchorElUsed: false,
  anchorEl: undefined,
  anchorPosition: undefined,
  hovered: false,
  focused: false,
  _openEventType: null,
  _childPopupState: null,
  _deferNextOpen: false,
  _deferNextClose: false
};

// https://github.com/jcoreio/material-ui-popup-state/issues/138
// Webpack prod build doesn't like it if we refer to React.useId conditionally,
// but aliasing to a variable like this works
var _react = React;
var defaultPopupId = 'useId' in _react ? function () {
  return _react.useId();
}
// istanbul ignore next
: function () {
  return undefined;
};
function usePopupState(_ref) {
  var parentPopupState = _ref.parentPopupState,
    _ref$popupId = _ref.popupId,
    popupId = _ref$popupId === void 0 ? defaultPopupId() : _ref$popupId,
    variant = _ref.variant,
    disableAutoFocus = _ref.disableAutoFocus;
  var isMounted = (0, _react2.useRef)(true);
  (0, _react2.useEffect)(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);
  var _useState = (0, _react2.useState)(initCoreState),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    state = _useState2[0],
    _setState = _useState2[1];
  var setState = (0, _react2.useCallback)(function (state) {
    if (isMounted.current) _setState(state);
  }, []);
  var setAnchorEl = (0, _react2.useCallback)(function (anchorEl) {
    return setState(function (state) {
      return _objectSpread(_objectSpread({}, state), {}, {
        setAnchorElUsed: true,
        anchorEl: anchorEl !== null && anchorEl !== void 0 ? anchorEl : undefined
      });
    });
  }, []);
  var toggle = (0, _useEvent.useEvent)(function (eventOrAnchorEl) {
    if (state.isOpen) close(eventOrAnchorEl);else open(eventOrAnchorEl);
    return state;
  });
  var open = (0, _useEvent.useEvent)(function (eventOrAnchorEl) {
    var event = eventOrAnchorEl instanceof Element ? undefined : eventOrAnchorEl;
    var element = eventOrAnchorEl instanceof Element ? eventOrAnchorEl : (eventOrAnchorEl === null || eventOrAnchorEl === void 0 ? void 0 : eventOrAnchorEl.currentTarget) instanceof Element ? eventOrAnchorEl.currentTarget : undefined;
    if ((event === null || event === void 0 ? void 0 : event.type) === 'touchstart') {
      setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          _deferNextOpen: true
        });
      });
      return;
    }
    var clientX = event === null || event === void 0 ? void 0 : event.clientX;
    var clientY = event === null || event === void 0 ? void 0 : event.clientY;
    var anchorPosition = typeof clientX === 'number' && typeof clientY === 'number' ? {
      left: clientX,
      top: clientY
    } : undefined;
    var doOpen = function doOpen(state) {
      if (!eventOrAnchorEl && !state.setAnchorElUsed && variant !== 'dialog') {
        warn('missingEventOrAnchorEl', 'eventOrAnchorEl should be defined if setAnchorEl is not used');
      }
      if (parentPopupState) {
        if (!parentPopupState.isOpen) return state;
        setTimeout(function () {
          return parentPopupState._setChildPopupState(popupState);
        });
      }
      var newState = _objectSpread(_objectSpread({}, state), {}, {
        isOpen: true,
        anchorPosition: anchorPosition,
        hovered: (event === null || event === void 0 ? void 0 : event.type) === 'mouseover' || state.hovered,
        focused: (event === null || event === void 0 ? void 0 : event.type) === 'focus' || state.focused,
        _openEventType: event === null || event === void 0 ? void 0 : event.type
      });
      if (!state.setAnchorElUsed) {
        if (event !== null && event !== void 0 && event.currentTarget) {
          newState.anchorEl = event.currentTarget;
        } else if (element) {
          newState.anchorEl = element;
        }
      }
      return newState;
    };
    setState(function (state) {
      if (state._deferNextOpen) {
        setTimeout(function () {
          return setState(doOpen);
        }, 0);
        return _objectSpread(_objectSpread({}, state), {}, {
          _deferNextOpen: false
        });
      } else {
        return doOpen(state);
      }
    });
  });
  var doClose = function doClose(state) {
    var _childPopupState = state._childPopupState;
    setTimeout(function () {
      _childPopupState === null || _childPopupState === void 0 || _childPopupState.close();
      parentPopupState === null || parentPopupState === void 0 || parentPopupState._setChildPopupState(null);
    });
    return _objectSpread(_objectSpread({}, state), {}, {
      isOpen: false,
      hovered: false,
      focused: false
    });
  };
  var close = (0, _useEvent.useEvent)(function (eventOrAnchorEl) {
    var event = eventOrAnchorEl instanceof Element ? undefined : eventOrAnchorEl;
    if ((event === null || event === void 0 ? void 0 : event.type) === 'touchstart') {
      setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          _deferNextClose: true
        });
      });
      return;
    }
    setState(function (state) {
      if (state._deferNextClose) {
        setTimeout(function () {
          return setState(doClose);
        }, 0);
        return _objectSpread(_objectSpread({}, state), {}, {
          _deferNextClose: false
        });
      } else {
        return doClose(state);
      }
    });
  });
  var setOpen = (0, _react2.useCallback)(function (nextOpen, eventOrAnchorEl) {
    if (nextOpen) {
      open(eventOrAnchorEl);
    } else {
      close(eventOrAnchorEl);
    }
  }, []);
  var onMouseLeave = (0, _useEvent.useEvent)(function (event) {
    var relatedTarget = event.relatedTarget;
    setState(function (state) {
      if (state.hovered && !(relatedTarget instanceof Element && isElementInPopup(relatedTarget, popupState))) {
        if (state.focused) {
          return _objectSpread(_objectSpread({}, state), {}, {
            hovered: false
          });
        } else {
          return doClose(state);
        }
      }
      return state;
    });
  });
  var onBlur = (0, _useEvent.useEvent)(function (event) {
    if (!event) return;
    var relatedTarget = event.relatedTarget;
    setState(function (state) {
      if (state.focused && !(relatedTarget instanceof Element && isElementInPopup(relatedTarget, popupState))) {
        if (state.hovered) {
          return _objectSpread(_objectSpread({}, state), {}, {
            focused: false
          });
        } else {
          return doClose(state);
        }
      }
      return state;
    });
  });
  var _setChildPopupState = (0, _react2.useCallback)(function (_childPopupState) {
    return setState(function (state) {
      return _objectSpread(_objectSpread({}, state), {}, {
        _childPopupState: _childPopupState
      });
    });
  }, []);
  var popupState = _objectSpread(_objectSpread({}, state), {}, {
    setAnchorEl: setAnchorEl,
    popupId: popupId !== null && popupId !== void 0 ? popupId : undefined,
    variant: variant,
    open: open,
    close: close,
    toggle: toggle,
    setOpen: setOpen,
    onBlur: onBlur,
    onMouseLeave: onMouseLeave,
    disableAutoFocus: disableAutoFocus !== null && disableAutoFocus !== void 0 ? disableAutoFocus : Boolean(state.hovered || state.focused),
    _setChildPopupState: _setChildPopupState
  });
  return popupState;
}

/**
 * Creates a ref that sets the anchorEl for the popup.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
function anchorRef(_ref2) {
  var setAnchorEl = _ref2.setAnchorEl;
  return setAnchorEl;
}
function controlAriaProps(_ref3) {
  var isOpen = _ref3.isOpen,
    popupId = _ref3.popupId,
    variant = _ref3.variant;
  return _objectSpread({}, variant === 'popover' ? {
    'aria-haspopup': true,
    'aria-controls': isOpen ? popupId : undefined
  } : variant === 'popper' ? {
    'aria-describedby': isOpen ? popupId : undefined
  } : undefined);
}

/**
 * Creates props for a component that opens the popup when clicked.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
function bindTrigger(popupState) {
  return _objectSpread(_objectSpread({}, controlAriaProps(popupState)), {}, {
    onClick: popupState.open,
    onTouchStart: popupState.open
  });
}

/**
 * Creates props for a component that opens the popup on its contextmenu event (right click).
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
function bindContextMenu(popupState) {
  return _objectSpread(_objectSpread({}, controlAriaProps(popupState)), {}, {
    onContextMenu: function onContextMenu(e) {
      e.preventDefault();
      popupState.open(e);
    }
  });
}

/**
 * Creates props for a component that toggles the popup when clicked.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
function bindToggle(popupState) {
  return _objectSpread(_objectSpread({}, controlAriaProps(popupState)), {}, {
    onClick: popupState.toggle,
    onTouchStart: popupState.toggle
  });
}

/**
 * Creates props for a component that opens the popup while hovered.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
function bindHover(popupState) {
  var open = popupState.open,
    onMouseLeave = popupState.onMouseLeave;
  return _objectSpread(_objectSpread({}, controlAriaProps(popupState)), {}, {
    onTouchStart: open,
    onMouseOver: open,
    onMouseLeave: onMouseLeave
  });
}

/**
 * Creates props for a component that opens the popup while focused.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
function bindFocus(popupState) {
  var open = popupState.open,
    onBlur = popupState.onBlur;
  return _objectSpread(_objectSpread({}, controlAriaProps(popupState)), {}, {
    onFocus: open,
    onBlur: onBlur
  });
}

/**
 * Creates props for a component that opens the popup while double click.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
function bindDoubleClick(_ref4) {
  var isOpen = _ref4.isOpen,
    open = _ref4.open,
    popupId = _ref4.popupId,
    variant = _ref4.variant;
  return (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, variant === 'popover' ? 'aria-controls' : 'aria-describedby', isOpen ? popupId : null), 'aria-haspopup', variant === 'popover' ? true : undefined), "onDoubleClick", open);
}

/**
 * Creates props for a `Popover` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
function bindPopover(_ref6) {
  var isOpen = _ref6.isOpen,
    anchorEl = _ref6.anchorEl,
    anchorPosition = _ref6.anchorPosition,
    close = _ref6.close,
    popupId = _ref6.popupId,
    onMouseLeave = _ref6.onMouseLeave,
    disableAutoFocus = _ref6.disableAutoFocus,
    _openEventType = _ref6._openEventType;
  var usePopoverPosition = _openEventType === 'contextmenu';
  return _objectSpread({
    id: popupId,
    anchorEl: anchorEl,
    anchorPosition: anchorPosition,
    anchorReference: usePopoverPosition ? 'anchorPosition' : 'anchorEl',
    open: isOpen,
    onClose: close,
    onMouseLeave: onMouseLeave
  }, disableAutoFocus && {
    disableAutoFocus: true,
    disableEnforceFocus: true,
    disableRestoreFocus: true
  });
}

/**
 * Creates props for a `Menu` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */

/**
 * Creates props for a `Popover` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
function bindMenu(_ref7) {
  var isOpen = _ref7.isOpen,
    anchorEl = _ref7.anchorEl,
    anchorPosition = _ref7.anchorPosition,
    close = _ref7.close,
    popupId = _ref7.popupId,
    onMouseLeave = _ref7.onMouseLeave,
    disableAutoFocus = _ref7.disableAutoFocus,
    _openEventType = _ref7._openEventType;
  var usePopoverPosition = _openEventType === 'contextmenu';
  return _objectSpread({
    id: popupId,
    anchorEl: anchorEl,
    anchorPosition: anchorPosition,
    anchorReference: usePopoverPosition ? 'anchorPosition' : 'anchorEl',
    open: isOpen,
    onClose: close,
    onMouseLeave: onMouseLeave
  }, disableAutoFocus && {
    autoFocus: false,
    disableAutoFocusItem: true,
    disableAutoFocus: true,
    disableEnforceFocus: true,
    disableRestoreFocus: true
  });
}
/**
 * Creates props for a `Popper` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
function bindPopper(_ref8) {
  var isOpen = _ref8.isOpen,
    anchorEl = _ref8.anchorEl,
    popupId = _ref8.popupId,
    onMouseLeave = _ref8.onMouseLeave;
  return {
    id: popupId,
    anchorEl: anchorEl,
    open: isOpen,
    onMouseLeave: onMouseLeave
  };
}

/**
 * Creates props for a `Dialog` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
function bindDialog(_ref9) {
  var isOpen = _ref9.isOpen,
    close = _ref9.close;
  return {
    open: isOpen,
    onClose: close
  };
}
function getPopup(element, _ref0) {
  var popupId = _ref0.popupId;
  if (!popupId) return null;
  var rootNode = typeof element.getRootNode === 'function' ? element.getRootNode() : document;
  if (typeof rootNode.getElementById === 'function') {
    return rootNode.getElementById(popupId);
  }
  return null;
}
function isElementInPopup(element, popupState) {
  var anchorEl = popupState.anchorEl,
    _childPopupState = popupState._childPopupState;
  return isAncestor(anchorEl, element) || isAncestor(getPopup(element, popupState), element) || _childPopupState != null && isElementInPopup(element, _childPopupState);
}
function isAncestor(parent, child) {
  if (!parent) return false;
  while (child) {
    if (child === parent) return true;
    child = child.parentElement;
  }
  return false;
}
//# sourceMappingURL=hooks.js.map

/***/ }),

/***/ 90467:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault2 = __webpack_require__(24994);
var _typeof = __webpack_require__(73738);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault2(__webpack_require__(94634));
var _defineProperty2 = _interopRequireDefault2(__webpack_require__(43693));
var React = _interopRequireWildcard(__webpack_require__(96540));
var _material = __webpack_require__(8157);
var _interopRequireDefault = __webpack_require__(45266);
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /* eslint-disable @typescript-eslint/no-deprecated */
// work around https://github.com/vercel/next.js/issues/57285
var Menu = (0, _interopRequireDefault.interopRequireDefault)(_material.Menu);
var HoverMenu = /*#__PURE__*/React.forwardRef(function HoverMenu(props, ref) {
  var _props$slotProps2, _props$PaperProps;
  var paperSlotProps = React.useMemo(function () {
    var _props$slotProps;
    var wrapped = (_props$slotProps = props.slotProps) === null || _props$slotProps === void 0 ? void 0 : _props$slotProps.paper;
    if (wrapped instanceof Function) {
      return function (ownerProps) {
        var base = wrapped(ownerProps);
        return _objectSpread(_objectSpread({}, base), {}, {
          style: _objectSpread({
            pointerEvents: 'auto'
          }, base.style)
        });
      };
    }
    return _objectSpread(_objectSpread({}, wrapped), {}, {
      style: _objectSpread({
        pointerEvents: 'auto'
      }, wrapped === null || wrapped === void 0 ? void 0 : wrapped.style)
    });
  }, [(_props$slotProps2 = props.slotProps) === null || _props$slotProps2 === void 0 ? void 0 : _props$slotProps2.paper]);
  return /*#__PURE__*/React.createElement(Menu, (0, _extends2["default"])({}, props, {
    ref: ref,
    style: _objectSpread({
      pointerEvents: 'none'
    }, props.style),
    PaperProps: _objectSpread(_objectSpread({}, props.PaperProps), {}, {
      style: _objectSpread({
        pointerEvents: 'auto'
      }, (_props$PaperProps = props.PaperProps) === null || _props$PaperProps === void 0 ? void 0 : _props$PaperProps.style)
    }),
    slotProps: _objectSpread(_objectSpread({}, props.slotProps), {}, {
      paper: paperSlotProps
    })
  }));
});
var _default = exports["default"] = HoverMenu;
module.exports = exports.default;
//# sourceMappingURL=HoverMenu.js.map

/***/ })

}]);
//# sourceMappingURL=npm.material-ui-popup-state.858d6505b983663f75e1.js.map