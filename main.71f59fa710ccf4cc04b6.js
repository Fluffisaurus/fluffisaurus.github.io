/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 294:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var muiMenuItem = {
    MuiMenuItem: {
        styleOverrides: {
            root: {
                padding: 0,
                minHeight: 0,
            },
        },
    },
};
exports["default"] = muiMenuItem;


/***/ }),

/***/ 2943:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(96540));
var react_router_dom_1 = __webpack_require__(5058);
var material_1 = __webpack_require__(8157);
var hooks_1 = __webpack_require__(81214);
var MenuTwoTone_1 = __importDefault(__webpack_require__(78626));
var MenuOpenTwoTone_1 = __importDefault(__webpack_require__(53342));
var SubdirectoryArrowRightTwoTone_1 = __importDefault(__webpack_require__(45075));
var computeNodeStyle_1 = __importDefault(__webpack_require__(91582));
var muiButton_1 = __webpack_require__(8038);
__webpack_require__(60654);
var constants_1 = __webpack_require__(70908);
var react_type_animation_1 = __webpack_require__(9519);
var StyledBox = (0, material_1.styled)("div")(function (_a) {
    var theme = _a.theme;
    return [
        {
            backgroundColor: theme.vars.palette.background.globalNav,
            paddingBottom: "3px",
        },
        theme.applyStyles("dark", {
            backgroundColor: theme.vars.palette.background.globalNav,
        }),
    ];
});
var globalNavDrawerButtonStyles = {
    width: "min-content",
};
var GlobalNav = function () {
    var location = (0, react_router_dom_1.useLocation)();
    var _a = (0, react_1.useState)(""), currPath = _a[0], setCurrPath = _a[1];
    var _b = (0, react_1.useState)(), subPath = _b[0], setSubPath = _b[1];
    var _c = (0, react_1.useState)(), hoverPath = _c[0], setHoverPath = _c[1];
    var _d = (0, react_1.useState)("cd "), hoverText = _d[0], setHoverText = _d[1];
    var _e = (0, react_1.useState)(), fullPath = _e[0], setFullPath = _e[1];
    var _f = (0, react_1.useState)(false), showContent = _f[0], setShowContent = _f[1];
    (0, react_1.useEffect)(function () {
        if (location.pathname == "/") {
            var timer_1 = setTimeout(function () {
                setShowContent(true);
            }, constants_1.ANI_CONST.GLOBAL_NAV_LANDING_DELAY);
            return function () { return clearTimeout(timer_1); };
        }
        else {
            setShowContent(true);
        }
    }, []);
    var _g = react_1.default.useState(false), openDrawer = _g[0], setOpenDrawer = _g[1];
    var toggleDrawer = function () { return setOpenDrawer(!openDrawer); };
    var theme = (0, material_1.useTheme)();
    var isMobile = (0, material_1.useMediaQuery)(theme.breakpoints.down("sm"));
    var popupState = (0, hooks_1.usePopupState)({
        variant: "popover",
        popupId: "globalNavPopup",
    });
    var _h = (0, react_1.useState)({
        width: 0,
        height: 0,
    }), drawerProjectButtonDims = _h[0], setDrawerProjectButtonDims = _h[1];
    var drawerProjectButtonRef = (0, react_1.useCallback)(function (node) {
        if (node !== null) {
            var nodeDims = (0, computeNodeStyle_1.default)(node);
            setDrawerProjectButtonDims({
                width: nodeDims.width,
                height: nodeDims.height,
            });
        }
    }, []);
    var _j = (0, react_1.useState)({
        width: 0,
        height: 0,
    }), homeIconButtonDims = _j[0], setHomeIconeButtonDims = _j[1];
    var homeIconButtonRef = (0, react_1.useCallback)(function (node) {
        if (node !== null) {
            var nodeDims = (0, computeNodeStyle_1.default)(node);
            setHomeIconeButtonDims({
                width: nodeDims.width,
                height: nodeDims.height,
            });
        }
    }, []);
    (0, react_1.useEffect)(function () {
        setOpenDrawer(false);
        if (location.pathname === "/") {
            popupState.close();
        }
        if (location.pathname.substring(1).includes("/")) {
            setCurrPath(location.pathname.substring(1).split("/")[0]);
            setSubPath(location.pathname.substring(1).split("/")[1]);
            setHoverPath(location.pathname);
        }
        else {
            setCurrPath(location.pathname.substring(1));
            setSubPath(null);
            setHoverPath(location.pathname.substring(1));
        }
        setFullPath(location.pathname);
    }, [location]);
    (0, react_1.useEffect)(function () {
        if (hoverPath == "menu") {
            setHoverText("ls -R ~");
            return;
        }
        if (!hoverPath) {
            setHoverText("");
            return;
        }
        if (subPath) {
            if (hoverPath == fullPath) {
                setHoverText("cd ./");
                return;
            }
            if (fullPath === null || fullPath === void 0 ? void 0 : fullPath.includes(hoverPath)) {
                setHoverText("cd ../");
                return;
            }
            if (hoverPath != fullPath) {
                setHoverText("cd " + hoverPath);
                return;
            }
        }
        else if (hoverPath == fullPath) {
            setHoverText("cd ./");
        }
        else {
            setHoverText("cd " + hoverPath);
        }
    }, [hoverPath]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Slide, { in: showContent, timeout: constants_1.ANI_CONST.GLOBAL_NAV_DELAY },
            react_1.default.createElement(StyledBox, { className: "Global-nav" },
                react_1.default.createElement(material_1.Box, { className: "Global-nav__root" },
                    react_1.default.createElement(material_1.Button, __assign({ onClick: toggleDrawer }, muiButton_1.globalNavButtonProps, { onMouseEnter: function () { return setHoverPath("menu"); } }), openDrawer ? react_1.default.createElement(MenuOpenTwoTone_1.default, null) : react_1.default.createElement(MenuTwoTone_1.default, null)),
                    react_1.default.createElement(material_1.Button, __assign({ ref: homeIconButtonRef, component: react_router_dom_1.Link, to: "/" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), { padding: 0 }), onMouseEnter: function () { return setHoverPath("~"); } }), "\uD83C\uDFE0:/"),
                    react_1.default.createElement(material_1.Button, __assign({ component: react_router_dom_1.Link, to: currPath }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), { padding: 0 }), onMouseEnter: function () { return setHoverPath("/" + currPath); } }), currPath == "" ? "" : currPath + "/"),
                    subPath && (react_1.default.createElement(material_1.Button, __assign({ component: react_router_dom_1.Link, to: currPath + "/" + subPath }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), { padding: 0 }), onMouseEnter: function () {
                            return setHoverPath("/" + currPath + "/" + subPath);
                        } }), subPath + "/")),
                    react_1.default.createElement(material_1.Button, __assign({ className: "Nav-link__no-events" }, muiButton_1.globalNavButtonProps), "~$"),
                    !isMobile && (react_1.default.createElement(material_1.Button, __assign({ className: "Nav-link__no-events" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), { color: theme.vars.palette.primary.light, justifyContent: "flex-start", padding: "0 5px 0 25px" }) }),
                        react_1.default.createElement(react_type_animation_1.TypeAnimation, { key: hoverText, sequence: [hoverText, 500], speed: hoverText.length > 8 ? 50 : 1 })))))),
        react_1.default.createElement(material_1.SwipeableDrawer, { anchor: "top", open: openDrawer, onClose: toggleDrawer, onOpen: toggleDrawer, disableSwipeToOpen: false, keepMounted: true },
            react_1.default.createElement(StyledBox, { sx: { position: "relative" } },
                react_1.default.createElement(StyledBox, { sx: {
                        px: 2,
                        pb: 2,
                        height: "100",
                        display: "flex",
                        flexDirection: "column",
                        width: "fit-content",
                        marginLeft: homeIconButtonDims.width + "px",
                    } },
                    react_1.default.createElement(material_1.Button, __assign({ component: react_router_dom_1.Link, to: "/about" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), globalNavDrawerButtonStyles), onMouseEnter: function () { return setHoverPath("/about"); } }),
                        react_1.default.createElement(SubdirectoryArrowRightTwoTone_1.default, null),
                        "about"),
                    react_1.default.createElement(material_1.Button, __assign({ ref: drawerProjectButtonRef, className: "Nav-link__no-events" }, muiButton_1.globalNavButtonProps, (0, hooks_1.bindTrigger)(popupState), { sx: __assign(__assign(__assign({}, muiButton_1.globalNavButtonProps.sx), globalNavDrawerButtonStyles), { color: theme.vars.palette.primary.dark }), onMouseEnter: function () { return setHoverPath("/projects"); } }),
                        react_1.default.createElement(SubdirectoryArrowRightTwoTone_1.default, null),
                        "projects/"),
                    react_1.default.createElement(material_1.Button, __assign({ component: react_router_dom_1.Link, to: "/projects" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign(__assign({}, muiButton_1.globalNavButtonProps.sx), globalNavDrawerButtonStyles), { marginLeft: drawerProjectButtonDims.width + "px" }), onMouseEnter: function () { return setHoverPath("/projects"); } }),
                        react_1.default.createElement(SubdirectoryArrowRightTwoTone_1.default, null),
                        "./"),
                    react_1.default.createElement(material_1.Button, __assign({ component: react_router_dom_1.Link, to: "/projects/personal" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign(__assign({}, muiButton_1.globalNavButtonProps.sx), globalNavDrawerButtonStyles), { marginLeft: drawerProjectButtonDims.width + "px" }), onMouseEnter: function () { return setHoverPath("/projects/personal"); } }),
                        react_1.default.createElement(SubdirectoryArrowRightTwoTone_1.default, null),
                        "personal"),
                    react_1.default.createElement(material_1.Button, __assign({ component: react_router_dom_1.Link, to: "/projects/academic" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign(__assign({}, muiButton_1.globalNavButtonProps.sx), globalNavDrawerButtonStyles), { marginLeft: drawerProjectButtonDims.width + "px" }), onMouseEnter: function () { return setHoverPath("/projects/academic"); } }),
                        react_1.default.createElement(SubdirectoryArrowRightTwoTone_1.default, null),
                        "academic"),
                    react_1.default.createElement(material_1.Button, __assign({ component: react_router_dom_1.Link, to: "/contact" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), globalNavDrawerButtonStyles), onMouseEnter: function () { return setHoverPath("/contact"); } }),
                        react_1.default.createElement(SubdirectoryArrowRightTwoTone_1.default, null),
                        "contact"))))));
};
exports["default"] = GlobalNav;


/***/ }),

/***/ 4040:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(96540));
var material_1 = __webpack_require__(8157);
var react_router_dom_1 = __webpack_require__(5058);
var ProjectBlock_1 = __importDefault(__webpack_require__(96757));
var project_list_1 = __webpack_require__(60803);
var SlideWrapper_1 = __importDefault(__webpack_require__(53655));
var constants_1 = __webpack_require__(70908);
var FadeWrapper_1 = __importDefault(__webpack_require__(57824));
var Personal = function () {
    var containerRef = (0, react_1.useRef)(null);
    var theme = (0, material_1.useTheme)();
    var animationBreakpoint = (0, material_1.useMediaQuery)(theme.breakpoints.down(constants_1.ANI_CONST.PROJ_ROW_BREAKPOINT));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: containerRef },
            react_1.default.createElement(FadeWrapper_1.default, { delay: constants_1.ANI_CONST.PROJ_SUBHEADING_DELAY },
                react_1.default.createElement(material_1.Typography, { variant: "h4" }, "Personal_projects")),
            react_1.default.createElement(material_1.Grid, { container: true, spacing: 2, alignItems: "flex-start" }, project_list_1.ProjectList[project_list_1.ProjectCategories.PERSONAL].map(function (proj, i) {
                return (react_1.default.createElement(SlideWrapper_1.default, { slideFromRef: containerRef, delay: i * constants_1.ANI_CONST.PROJ_CARDS_DELAY, direction: animationBreakpoint ? "up" : "left" },
                    react_1.default.createElement(ProjectBlock_1.default, { proj: proj, key: i })));
            }))),
        react_1.default.createElement(react_router_dom_1.Outlet, null)));
};
exports["default"] = Personal;


/***/ }),

/***/ 6705:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var material_1 = __webpack_require__(8157);
var hooks_1 = __webpack_require__(81214);
var HoverMenu_1 = __importDefault(__webpack_require__(90467));
var react_1 = __importDefault(__webpack_require__(96540));
var react_router_dom_1 = __webpack_require__(5058);
var muiButton_1 = __webpack_require__(8038);
var paths = [
    {
        path: "/about",
        text: "about",
        subpaths: [],
    },
    {
        path: "/projects",
        text: "projects",
        subpaths: [
            { path: "projects/personal", text: "personal" },
            { path: "projects/academic", text: "academic" },
        ],
    },
    {
        path: "/contact",
        text: "contact",
        subpaths: [],
    },
];
var NavLinks = function () {
    var theme = (0, material_1.useTheme)();
    var isMobile = (0, material_1.useMediaQuery)(theme.breakpoints.down("sm"));
    var popupState = (0, hooks_1.usePopupState)({
        variant: "popover",
        popupId: "subPathMenu",
    });
    return (react_1.default.createElement(react_1.default.Fragment, null, paths.map(function (path, index) {
        return (react_1.default.createElement(react_1.default.Fragment, null, path.subpaths.length !== 0 ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(material_1.Button, __assign({ key: "".concat(path.text), component: react_router_dom_1.Link, to: path.path }, muiButton_1.navLinkButtonProps, (0, hooks_1.bindHover)(popupState)), path.text),
            react_1.default.createElement(HoverMenu_1.default, __assign({}, (0, hooks_1.bindMenu)(popupState), { anchorOrigin: isMobile
                    ? { vertical: "top", horizontal: "right" }
                    : { vertical: "bottom", horizontal: "left" }, transformOrigin: { vertical: "top", horizontal: "left" } }), path.subpaths.map(function (subPath, i) {
                return (react_1.default.createElement(material_1.MenuItem, null,
                    react_1.default.createElement(material_1.Button, __assign({ key: "".concat(subPath.text, "-").concat(i), component: react_router_dom_1.Link, to: subPath.path }, muiButton_1.navLinkButtonProps), subPath.text)));
            })))) : (react_1.default.createElement(material_1.Button, __assign({ key: "".concat(path.text, "-").concat(index), component: react_router_dom_1.Link, to: path.path }, muiButton_1.navLinkButtonProps), path.text))));
    })));
};
exports["default"] = NavLinks;


/***/ }),

/***/ 7293:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var antlionTowerDefense = {
    abbr: "antlion-td",
    name: "Antlion Tower Defense",
    date: "Oct 2018 - Dec 2018",
    tags: [
        "Unity",
        "C#",
        "Pathfinding",
        "ECS",
        "Game Dev",
        "Game Design",
        "Game",
    ],
    category: "Tower Defense Game",
    link: {
        repo: "https://github.com/Fluffisaurus/ATD",
        host: "",
    },
    detail: {
        short: "Build an army to fend off invaders with 5 different defensive towers. Block off paths and decide how you want to redirect the invading antlions.",
        long: [],
    },
    images: [
        {
            src: "atd/atd-pathfinding_muihab",
            alt: "ATD: A* Pathfinding",
            description: "Enemy AI with A* Pathfinding shown by lines and points.",
        },
        {
            src: "atd/atd-start-screen_mus0ji",
            alt: "ATD: Start Screen",
            description: "Start screen for the game.",
        },
        {
            src: "atd/atd-story_xms5lc",
            alt: "ATD: Story Screen",
            description: "Scrollable story and narrative screen.",
        },
        {
            src: "atd/atd-start-screen_mus0ji",
            alt: "ATD: Level Select Screen",
            description: "Level select screen.",
        },
        {
            src: "atd/atd-gameplay_xaxpcl",
            alt: "ATD: Gameplay Screenshot",
            description: "Gameplay screenshot.",
        },
        {
            src: "atd/atd-win-screen_vwnbfe",
            alt: "ATD: Win Screen",
            description: "Win screen",
        },
        {
            src: "atd/atd-lose-screen_tebbl0",
            alt: "ATD: Lose Screen",
            description: "Lose screen",
        },
    ],
};
exports["default"] = antlionTowerDefense;


/***/ }),

/***/ 7496:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = CustomOptionsDial;
var React = __importStar(__webpack_require__(96540));
var material_1 = __webpack_require__(8157);
var Edit_1 = __importDefault(__webpack_require__(28597));
var DisplaySettingsTwoTone_1 = __importDefault(__webpack_require__(12434));
var ToggleThemeButtons_1 = __importDefault(__webpack_require__(44685));
var ToggleImageQualityButtons_1 = __importDefault(__webpack_require__(45242));
function CustomOptionsDial() {
    var actions = [
        { icon: React.createElement(ToggleImageQualityButtons_1.default, null), name: "Image Quality" },
        { icon: React.createElement(ToggleThemeButtons_1.default, null), name: "Theme Mode" },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Box, { sx: {
                position: "absolute",
                bottom: 0,
                right: 0,
                height: 320,
                transform: "translateZ(0px)",
                flexGrow: 1,
                zIndex: 999,
            } },
            React.createElement(material_1.SpeedDial, { ariaLabel: "website options dial for theme mode and image quality", sx: { position: "absolute", bottom: 16, right: 16 }, icon: React.createElement(material_1.SpeedDialIcon, { icon: React.createElement(Edit_1.default, null), openIcon: React.createElement(DisplaySettingsTwoTone_1.default, null) }) }, actions.map(function (action) { return (React.createElement(material_1.SpeedDialAction, { key: action.name, icon: action.icon, slotProps: {
                    tooltip: {
                        title: action.name,
                    },
                } })); })))));
}


/***/ }),

/***/ 8038:
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.globalNavButtonProps = exports.navLinkButtonProps = void 0;
var muiButtonNavlinkFontSizes = {
    fontSize: { xs: 18, sm: 20, md: 24, lg: 26 },
};
exports.navLinkButtonProps = {
    size: "large",
    variant: "navlink",
    sx: __assign({}, muiButtonNavlinkFontSizes),
};
var muiButtonGlobalNavFontSizes = {
    fontSize: { xs: 18, sm: 18, md: 19, lg: 20 },
};
exports.globalNavButtonProps = {
    size: "medium",
    variant: "navlink",
    sx: __assign({}, muiButtonGlobalNavFontSizes),
};
var muiButtonStyles = {
    MuiButton: {
        variants: [
            {
                props: { variant: "navlink" },
                style: {
                    fontFamily: "Source Code Pro",
                    fontWeight: 600,
                    minWidth: 0,
                },
            },
        ],
        styleOverrides: {
            root: function (props) {
                return ({
                    fontFamily: "Source Code Pro",
                    fontWeight: 600,
                    textTransform: "none",
                    padding: "0px 5px 0px 5px",
                    color: props.theme.vars.palette.secondary.contrastText,
                    backgroundColor: "transparent",
                    "&:active": {
                        boxShadow: "none",
                        backgroundColor: props.theme.vars.palette.secondary.main,
                    },
                    "&:hover": {
                        boxShadow: "none",
                        backgroundColor: props.theme.vars.palette.secondary.main,
                    },
                    "&:focus": {},
                });
            },
        },
        defaultProps: {
            style: {
                textDecoration: "none",
            },
        },
    },
};
exports["default"] = muiButtonStyles;


/***/ }),

/***/ 8285:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var motionArt = {
    abbr: "motion-art",
    name: "Motion Art",
    date: "Sep 2018 - Dec 2018",
    tags: ["Java", "Android Studio", "Sensors", "Activity Lifecycle"],
    category: "Android App",
    link: {
        repo: "",
        host: "",
    },
    detail: {
        short: "Experimental Android drawing application that maps device movement as drawing strokes on a canvas.",
        long: [],
    },
    images: [
        {
            src: "motionart/motionart3_apfgbp",
            alt: "MotionArt: Home Screen",
            description: "Default screen.",
        },
        {
            src: "motionart/motionart1_qpfk2u",
            alt: "MotionArt: Brush Select ",
            description: "Brush size select interface.",
        },
        {
            src: "motionart/motionart2_ndtreo",
            alt: "MotionArt: Palette Changer",
            description: "Demo of MotionArt's palette changer.",
        },
        {
            src: "motionart/motionart4_sep5by",
            alt: "MotionArt: Edit Artboard Name",
            description: "Renaming the current artboard.",
        },
        {
            src: "motionart/motionart5_xnv0yh",
            alt: "Made with MotionArt app",
            description: "A sample drawing done on the app.",
        },
    ],
};
exports["default"] = motionArt;


/***/ }),

/***/ 15274:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.carouselStyles = void 0;
var react_1 = __importDefault(__webpack_require__(96540));
var material_1 = __webpack_require__(8157);
var react_material_ui_carousel_1 = __importDefault(__webpack_require__(31661));
var react_2 = __webpack_require__(44387);
var resize_1 = __webpack_require__(16012);
var KeyboardArrowRightTwoTone_1 = __importDefault(__webpack_require__(50255));
var KeyboardArrowLeftTwoTone_1 = __importDefault(__webpack_require__(40082));
var Cloudinary_1 = __importDefault(__webpack_require__(55039));
var react_router_dom_1 = __webpack_require__(5058);
var PhotoLibraryTwoTone_1 = __importDefault(__webpack_require__(53194));
exports.carouselStyles = {
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "5px",
    },
    outerBox: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
    },
    textOverlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        bgcolor: "rgba(0, 0, 0, 0.54)",
        color: "white",
        padding: "10px",
    },
};
var PlaceholderCard = function (_a) {
    var proj = _a.proj, width = _a.width, height = _a.height;
    var location = (0, react_router_dom_1.useLocation)();
    return (react_1.default.createElement(material_1.Card, { sx: __assign({ minHeight: height }, exports.carouselStyles.card) },
        react_1.default.createElement(material_1.CardActionArea, { component: react_router_dom_1.Link, to: proj.abbr, state: { background: location } },
            react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, width), exports.carouselStyles.outerBox) },
                react_1.default.createElement(material_1.CardMedia, null,
                    react_1.default.createElement(PhotoLibraryTwoTone_1.default, { sx: __assign(__assign({}, width), { height: height }) })),
                react_1.default.createElement(material_1.Box, { sx: __assign({}, exports.carouselStyles.textOverlay) },
                    react_1.default.createElement(material_1.Typography, { variant: "caption" }, "Photo unavailable at the moment."))))));
};
var PlaceholderCarousel = function (_a) {
    var proj = _a.proj, width = _a.width, height = _a.height;
    var placeholders = [1, 2];
    var theme = (0, material_1.useTheme)();
    var isMobile = (0, material_1.useMediaQuery)(theme.breakpoints.down("sm"));
    return (react_1.default.createElement(react_material_ui_carousel_1.default, { stopAutoPlayOnHover: true, fullHeightHover: true, autoPlay: false, interval: 5000, animation: "slide", height: height, NextIcon: react_1.default.createElement(KeyboardArrowRightTwoTone_1.default, null), PrevIcon: react_1.default.createElement(KeyboardArrowLeftTwoTone_1.default, null), navButtonsAlwaysVisible: isMobile ? true : false }, placeholders.map(function (item, i) { return (react_1.default.createElement(PlaceholderCard, { key: i, proj: proj, width: width, height: height })); })));
};
var CarouselCard = function (_a) {
    var proj = _a.proj, width = _a.width, height = _a.height;
    var location = (0, react_router_dom_1.useLocation)();
    var images = proj.images;
    var cld = Cloudinary_1.default;
    var theme = (0, material_1.useTheme)();
    var isMobile = (0, material_1.useMediaQuery)(theme.breakpoints.down("sm"));
    var imgWidth = isMobile ? width.width.xs : width.width.md;
    return (react_1.default.createElement(react_material_ui_carousel_1.default, { stopAutoPlayOnHover: true, fullHeightHover: true, autoPlay: false, interval: 5000, animation: "slide", height: height, NextIcon: react_1.default.createElement(KeyboardArrowRightTwoTone_1.default, null), PrevIcon: react_1.default.createElement(KeyboardArrowLeftTwoTone_1.default, null), navButtonsAlwaysVisible: isMobile ? true : false }, images.map(function (item, i) { return (react_1.default.createElement(material_1.Card, { key: i, sx: __assign({ minHeight: height }, exports.carouselStyles.card) },
        react_1.default.createElement(material_1.CardActionArea, { component: react_router_dom_1.Link, to: proj.abbr, state: { background: location } },
            react_1.default.createElement(material_1.Box, { sx: __assign({ width: width }, exports.carouselStyles.outerBox) },
                react_1.default.createElement(material_1.CardMedia, null,
                    react_1.default.createElement(react_2.AdvancedImage, { cldImg: cld
                            .image("portfolio/".concat(item.src))
                            .resize((0, resize_1.fit)(imgWidth, height)), plugins: [(0, react_2.placeholder)({ mode: "blur" }), (0, react_2.responsive)()] })),
                react_1.default.createElement(material_1.Box, { sx: __assign({}, exports.carouselStyles.textOverlay) },
                    react_1.default.createElement(material_1.Typography, { variant: "caption" }, item.description)))))); })));
};
var ProjectCarousel = function (props) {
    var proj = props.proj, width = props.width, height = props.height;
    return proj.images.length == 0 ? (react_1.default.createElement(PlaceholderCarousel, { proj: proj, width: width, height: height })) : (react_1.default.createElement(CarouselCard, { proj: proj, width: width, height: height }));
};
exports["default"] = ProjectCarousel;


/***/ }),

/***/ 15871:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var foodpick = {
    // foodpick
    abbr: "foodpick",
    name: "FoodPick",
    date: "Jun 2018 - Mar 2019",
    tags: ["React", "Redux", "JS", "NodeJS", "CSS"],
    category: "Web and Mobile App",
    link: {
        repo: "https://github.com/kca99/foodpick-native",
        host: "",
    },
    detail: {
        short: "Multiplatform random cuisine picker. Uses a randomizer for a the cuisines to feed into the Google Places API to generate suggestions!",
        long: [],
    },
    images: [],
};
exports["default"] = foodpick;


/***/ }),

/***/ 17425:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var styles_1 = __webpack_require__(9752);
var muiColorSchemes_1 = __importDefault(__webpack_require__(54790));
var muiTypography_1 = __importDefault(__webpack_require__(76710));
var muiButton_1 = __importDefault(__webpack_require__(8038));
var muiContainer_1 = __importDefault(__webpack_require__(25205));
var muiList_1 = __importDefault(__webpack_require__(34822));
var muiMenuItem_1 = __importDefault(__webpack_require__(294));
var muiDrawer_1 = __importDefault(__webpack_require__(56665));
var muiSpeedDial_1 = __webpack_require__(85459);
var muiCssBaseline_1 = __importDefault(__webpack_require__(86704));
var theme = (0, styles_1.createTheme)(__assign(__assign(__assign({}, muiColorSchemes_1.default), muiTypography_1.default), { components: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, muiButton_1.default), muiContainer_1.default), muiList_1.default), muiMenuItem_1.default), muiDrawer_1.default), muiSpeedDial_1.muiSpeedDial), muiSpeedDial_1.muiSpeedDialAction), muiCssBaseline_1.default), cssVariables: {
        colorSchemeSelector: "class",
        // generated stylesheet:
        // --custom-mui-theme-primary-main: ...;
        cssVarPrefix: "custom-mui-theme",
    } }));
theme = (0, styles_1.responsiveFontSizes)(theme);
exports["default"] = theme;


/***/ }),

/***/ 19432:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(96540));
var Grid_1 = __importDefault(__webpack_require__(36434));
var project_list_1 = __webpack_require__(60803);
var ProjectSelectionBlock_1 = __importDefault(__webpack_require__(42973));
var SlideWrapper_1 = __importDefault(__webpack_require__(53655));
var Selection = function () {
    var containerRef = (0, react_1.useRef)(null);
    return (react_1.default.createElement("div", { ref: containerRef },
        react_1.default.createElement(Grid_1.default, { container: true, direction: "row", spacing: 2, size: { xs: 6, md: 8 } },
            react_1.default.createElement(SlideWrapper_1.default, { slideFromRef: containerRef, delay: 500, direction: "up" },
                react_1.default.createElement(ProjectSelectionBlock_1.default, { cat: project_list_1.ProjectCategories.PERSONAL, data: project_list_1.ProjectList[project_list_1.ProjectCategories.PERSONAL] })),
            react_1.default.createElement(SlideWrapper_1.default, { slideFromRef: containerRef, delay: 1000, direction: "up" },
                react_1.default.createElement(ProjectSelectionBlock_1.default, { cat: project_list_1.ProjectCategories.ACADEMIC, data: project_list_1.ProjectList[project_list_1.ProjectCategories.ACADEMIC] })))));
};
exports["default"] = Selection;


/***/ }),

/***/ 20834:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(96540));
var material_1 = __webpack_require__(8157);
var about_me_1 = __importDefault(__webpack_require__(47294));
var ContentBlock_1 = __importDefault(__webpack_require__(24701));
var ScrollableContainer_1 = __importDefault(__webpack_require__(53751));
var SlideWrapper_1 = __importDefault(__webpack_require__(53655));
var constants_1 = __webpack_require__(70908);
var FadeWrapper_1 = __importDefault(__webpack_require__(57824));
var AboutMe = function () {
    var containerRef = (0, react_1.useRef)(null);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ScrollableContainer_1.default, { ref: containerRef },
            react_1.default.createElement(FadeWrapper_1.default, null,
                react_1.default.createElement(material_1.Typography, { variant: "h3" }, "5w1h")),
            react_1.default.createElement(material_1.Grid, { container: true, spacing: 2, flexDirection: "column" }, about_me_1.default === null || about_me_1.default === void 0 ? void 0 : about_me_1.default.map(function (cntBlk, i) {
                return (react_1.default.createElement(SlideWrapper_1.default, { slideFromRef: containerRef, delay: i * constants_1.ANI_CONST.ABOUT_CARD_DELAY, direction: "up" },
                    react_1.default.createElement(ContentBlock_1.default, { key: i, heading: cntBlk.heading, body: cntBlk.body })));
            })))));
};
exports["default"] = AboutMe;


/***/ }),

/***/ 21645:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(96540));
var Grid_1 = __importDefault(__webpack_require__(36434));
var material_1 = __webpack_require__(8157);
var react_router_dom_1 = __webpack_require__(5058);
var ProjectBlock_1 = __importDefault(__webpack_require__(96757));
var project_list_1 = __webpack_require__(60803);
var SlideWrapper_1 = __importDefault(__webpack_require__(53655));
var constants_1 = __webpack_require__(70908);
var FadeWrapper_1 = __importDefault(__webpack_require__(57824));
var Academic = function () {
    var containerRef = (0, react_1.useRef)(null);
    var theme = (0, material_1.useTheme)();
    var animationBreakpoint = (0, material_1.useMediaQuery)(theme.breakpoints.down(constants_1.ANI_CONST.PROJ_ROW_BREAKPOINT));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: containerRef },
            react_1.default.createElement(FadeWrapper_1.default, { delay: constants_1.ANI_CONST.PROJ_SUBHEADING_DELAY },
                react_1.default.createElement(material_1.Typography, { variant: "h4" }, "Academic_projects")),
            react_1.default.createElement(Grid_1.default, { container: true, spacing: 2, alignItems: "flex-start" }, project_list_1.ProjectList[project_list_1.ProjectCategories.ACADEMIC].map(function (proj, i) {
                return (react_1.default.createElement(SlideWrapper_1.default, { slideFromRef: containerRef, delay: i * constants_1.ANI_CONST.PROJ_CARDS_DELAY, direction: animationBreakpoint ? "up" : "left" },
                    react_1.default.createElement(ProjectBlock_1.default, { proj: proj, key: i })));
            }))),
        react_1.default.createElement(react_router_dom_1.Outlet, null)));
};
exports["default"] = Academic;


/***/ }),

/***/ 24701:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(96540));
var Card_1 = __importDefault(__webpack_require__(97452));
var CardContent_1 = __importDefault(__webpack_require__(61593));
var Typography_1 = __importDefault(__webpack_require__(59259));
var Grid_1 = __importDefault(__webpack_require__(36434));
var ContentBlock = function (_a) {
    var heading = _a.heading, body = _a.body;
    var _b = (0, react_1.useState)(""), headingText = _b[0], setHeadingText = _b[1];
    var _c = (0, react_1.useState)([""]), bodyText = _c[0], setBodyText = _c[1];
    (0, react_1.useEffect)(function () {
        setHeadingText(heading);
        setBodyText(body);
    }, [body, heading]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Grid_1.default, { size: { xs: 15, md: 20 }, sx: { width: "100%" } },
            react_1.default.createElement(Card_1.default, { variant: "outlined" },
                react_1.default.createElement(CardContent_1.default, null,
                    react_1.default.createElement(Typography_1.default, { variant: "h5", component: "div", sx: { mb: 2 } }, headingText),
                    react_1.default.createElement(Typography_1.default, { variant: "body1" }, bodyText.map(function (body, i) {
                        return react_1.default.createElement(Typography_1.default, { key: i }, body);
                    })))))));
};
exports["default"] = ContentBlock;


/***/ }),

/***/ 25205:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var muiContainer = {
    MuiContainer: {
        styleOverrides: {
            root: {
                display: "flex",
                overflow: "hidden",
                paddingLeft: 0,
                paddingRight: 0,
                "@media (min-width: 1200px)": {
                    maxWidth: "1800px", // default is 1200px
                },
            },
        },
    },
};
exports["default"] = muiContainer;


/***/ }),

/***/ 26740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 26843:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var playerPerformanceProjection = {
    abbr: "player-performance-projection",
    name: "Player Performance Projection",
    date: "Sep 2019 - Dec 2019",
    tags: ["Python", "ML", "ANOVA", "Regression", "ETL", "Data Science"],
    category: "Statistical Analysis",
    link: {
        repo: "https://github.com/Fluffisaurus/player-performance-projection",
        host: "bit.ly/ppp-report",
    },
    detail: {
        short: "ML algo to analyze Steph Curry's performance stats. Utilizes ETL for data collection and parsing, GradientBoostingRegressor, and ANOVA.",
        long: [],
    },
    images: [
        {
            src: "ppp/all-3-def-tiers-train-vs-predict_wbfjgm",
            alt: "Training vs predicted",
            description: "Training points vs Predicted points and Regression Line against three defenisve tiers.",
        },
        {
            src: "ppp/curry-shots-made-by-minutes_a6ggn3",
            alt: "Steph Curry's shots made by minutes passed in the game",
            description: "Steph Curry's shots made by minutes passed in the game.",
        },
        {
            src: "ppp/plot-nba-def-rating_a4f0ce",
            alt: "2009-2019 Aggregated Defensive Ratings of all 30 NBA teams",
            description: "2009-2019 Aggregated Defensive Ratings of all 30 NBA teams.",
        },
        {
            src: "ppp/variance-shot-defs_s0l4ax",
            alt: "Frequency of shots made vs different tiers of deffense",
            description: "Steph's shots made vs different tiers of defense.",
        },
    ],
};
exports["default"] = playerPerformanceProjection;


/***/ }),

/***/ 28346:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(96540));
var material_1 = __webpack_require__(8157);
var ScrollableContainer_1 = __importDefault(__webpack_require__(53751));
var DoesNotExist = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ScrollableContainer_1.default, null,
            react_1.default.createElement(material_1.Typography, { variant: "h3" }, "Oops!"),
            react_1.default.createElement(material_1.Typography, { variant: "body1" }, "The page you're looking for does not exist (yet?)!"),
            react_1.default.createElement(material_1.Typography, { variant: "body1" }, "Click the links above to teleport back!"))));
};
exports["default"] = DoesNotExist;


/***/ }),

/***/ 30776:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var fallingBlocks = {
    // falling-blocks
    abbr: "falling-blocks",
    name: "Falling Blocks",
    date: "Apr 2018 - May 2018",
    tags: ["C#", "Unity", "Game Dev", "Game"],
    category: "Endless Game",
    link: {
        repo: "https://github.com/Fluffisaurus/Falling-Blocks",
        host: "bit.ly/fall-blocks",
    },
    detail: {
        short: "Endless 2D game - evade the blocks! Was completed to practice Unity basics after a long hiatus from the game engine.",
        long: [],
    },
    images: [
        {
            src: "fallingblocks/home_g0izls",
            alt: "Falling Blocks: Home Screen",
            description: "Instructional home screen.",
        },
        {
            src: "fallingblocks/in-game_d4a9hc",
            alt: "Falling Blocks: In-Game",
            description: "In game screenshot.",
        },
        {
            src: "fallingblocks/game-over_skfeve",
            alt: "Falling Blocks: Game Over Screen",
            description: "Game over screen with highscore and play-again prompt.",
        },
    ],
};
exports["default"] = fallingBlocks;


/***/ }),

/***/ 30791:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(96540));
var react_router_dom_1 = __webpack_require__(5058);
__webpack_require__(76103);
var material_1 = __webpack_require__(8157);
var ScrollableContainer_1 = __importDefault(__webpack_require__(53751));
var FadeWrapper_1 = __importDefault(__webpack_require__(57824));
var Projects = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ScrollableContainer_1.default, { className: "Projects-container" },
            react_1.default.createElement(FadeWrapper_1.default, null,
                react_1.default.createElement(material_1.Typography, { variant: "h3" }, "Projects")),
            react_1.default.createElement(react_router_dom_1.Outlet, null))));
};
exports["default"] = Projects;


/***/ }),

/***/ 33015:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var spochiV0 = {
    // nba-data-viz
    abbr: "nba-data-viz",
    name: "NBA Data Visualization",
    date: "Aug 2019 - Present",
    tags: ["D3", "React", "Python", "Flask", "JS"],
    category: "Web App / Tool",
    link: {
        repo: "",
        host: "",
    },
    detail: {
        short: "[In Progress] Full-stack data visualization tool. Analyze NBA player's stats through interactive visualizations. ",
        long: [],
    },
    images: [
        {
            src: "fbdv/fbdv-brush_dyyvul",
            alt: "NBA Data Viz: Brush Selection",
            description: "User can brush select data - in the future user will be able to further interact with this selection, ie. visualize subset with another graph.",
        },
        {
            src: "fbdv/fbdv-zoom_gk5hzh",
            alt: "NBA Data Viz: Zoom",
            description: "Zooming at different levels with history being saved. User can undo, redo, and reset.",
        },
        {
            src: "fbdv/fbdv-zoom-1_xzst3f",
            alt: "NBA Data Viz: Zoom",
            description: "Zooming further to subset the data seen.",
        },
        {
            src: "fbdv/fbdv-assists_vsuh6v",
            alt: "NBA Data Viz: Assists - Different Stats",
            description: "Visualize different box score metrics - in future iterations, the user will be able to graph and tabularize all box score data.",
        },
        {
            src: "fbdv/fbdv-brush_dyyvul",
            alt: "NBA Data Viz: Tooltip",
            description: "Tooltip to show respective data of the point - in the future will include more detail and will be interactable.",
        },
    ],
};
exports["default"] = spochiV0;


/***/ }),

/***/ 34822:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var muiList = {
    MuiList: {
        styleOverrides: {
            root: {
                padding: 0,
            },
        },
    },
};
exports["default"] = muiList;


/***/ }),

/***/ 36886:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var bobbysBreakout = {
    abbr: "bobbys-breakout",
    name: "Bobby's Breakout",
    date: "Sep 2019 - Dec 2019",
    tags: [
        "Agile",
        "Game Dev",
        "NodeJS",
        "Full Stack",
        "Heroku",
        "OOD",
        "Sys Design",
        "Game",
    ],
    category: "Top Down RPG",
    link: {
        repo: "https://github.com/abhatthal/Bobby-Breakout",
        host: "bit.ly/bobby-breakout",
    },
    detail: {
        short: "Full stack browser RPG - play as SFU's Dr. Bobby Chan in a top-down game with the Pokemon-style combat system.",
        long: [],
    },
    images: [
        {
            src: "bobby/bobby-breakout-map_qex5d0",
            alt: "Bobby Breakout: Map",
            description: "In-game screenshot of the map - SFU's CS lab blueprint.",
        },
        {
            src: "bobby/bobby-breakout-inventory_zgwqu1",
            alt: "Bobby Breakout: Inventory",
            description: "Player (Bobby's) inventory of picked up loot - user can swap loadouts and equipped items.",
        },
        {
            src: "bobby/bobby-breakout-fight_ccgkbs",
            alt: "Bobby Breakout: Fight Scene",
            description: "Pokemon style fight scene!",
        },
        {
            src: "bobby/bobby-breakout-fight-1_hg4lcd",
            alt: "Bobby Breakout: Fight Scene Player Ability",
            description: "Player using an ability - pokemon style combat dialogue.",
        },
        {
            src: "bobby/bobby-breakout-fight-2_g29dzy",
            alt: "Bobby Breakout: Fight Scene Enemy Ability",
            description: "Enemy retaliating with their custom skills.",
        },
        {
            src: "bobby/bobby-breakout-item_o1u8vm",
            alt: "Bobby Breakout: Funny Items",
            description: "In-game items user can pick up.",
        },
        {
            src: "bobby/bobby-breakout-achievement_tvbixc",
            alt: "Bobby Breakout: Achievement",
            description: "Dynamic and persistent achievements screen (stored in database by account session).",
        },
        {
            src: "bobby/bobby-breakout-inventory_zgwqu1",
            alt: "Bobby Breakout: Login and Signup",
            description: "Login and signup screen for the user to register.",
        },
    ],
};
exports["default"] = bobbysBreakout;


/***/ }),

/***/ 40858:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(96540));
var material_1 = __webpack_require__(8157);
var GitHub_1 = __importDefault(__webpack_require__(43294));
var LinkedIn_1 = __importDefault(__webpack_require__(47139));
var Email_1 = __importDefault(__webpack_require__(41845));
var react_2 = __webpack_require__(44387);
var resize_1 = __webpack_require__(16012);
var ScrollableContainer_1 = __importDefault(__webpack_require__(53751));
var Cloudinary_1 = __importDefault(__webpack_require__(55039));
var SlideWrapper_1 = __importDefault(__webpack_require__(53655));
var constants_1 = __webpack_require__(70908);
var FadeWrapper_1 = __importDefault(__webpack_require__(57824));
var info = [
    {
        name: "linkedin",
        link: "https://www.linkedin.com/in/angus-hon/",
        icon: react_1.default.createElement(LinkedIn_1.default, null),
    },
    {
        name: "github",
        link: "https://github.com/Fluffisaurus",
        icon: react_1.default.createElement(GitHub_1.default, null),
    },
    { name: "email", link: "", icon: react_1.default.createElement(Email_1.default, null), modal: true },
];
var Contact = function () {
    var theme = (0, material_1.useTheme)();
    var animationBreakpoint = (0, material_1.useMediaQuery)(theme.breakpoints.down("sm"));
    var containerRef = (0, react_1.useRef)(null);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ScrollableContainer_1.default, { ref: containerRef },
            react_1.default.createElement(FadeWrapper_1.default, null,
                react_1.default.createElement(material_1.Typography, { variant: "h3" }, "Contact Info")),
            react_1.default.createElement(material_1.Grid, { container: true, spacing: 2, direction: { xs: "column", sm: "row" } }, info.map(function (item, i) {
                return (react_1.default.createElement(SlideWrapper_1.default, { slideFromRef: containerRef, delay: i * constants_1.ANI_CONST.CONTACT_BADGE_DELAY, direction: animationBreakpoint ? "up" : "left" },
                    react_1.default.createElement(material_1.Card, { key: i, sx: { width: "150px", height: "fit-content" } },
                        react_1.default.createElement(material_1.CardActionArea, { href: item.link, target: "_blank", rel: "noopener noreferrer" },
                            react_1.default.createElement(material_1.Grid, { container: true, spacing: 2, sx: {
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "10px",
                                } },
                                item.icon,
                                react_1.default.createElement(material_1.Typography, { variant: "body1" }, item.name))))));
            })),
            react_1.default.createElement(material_1.Grid, { container: true, spacing: 1, direction: "column", sx: { paddingTop: "30px" } },
                react_1.default.createElement(SlideWrapper_1.default, { slideFromRef: containerRef, delay: constants_1.ANI_CONST.CONTACT_PORTRAIT_HEADING_DELAY, direction: "up" },
                    react_1.default.createElement(material_1.Typography, { variant: "h5" }, "Who you are contacting:")),
                react_1.default.createElement(SlideWrapper_1.default, { slideFromRef: containerRef, delay: constants_1.ANI_CONST.CONTACT_PORTRAIT_PIC_DELAY, direction: "up" },
                    react_1.default.createElement(material_1.Card, { sx: { width: "fit-content", height: "fit-content" } },
                        react_1.default.createElement(material_1.Grid, { container: true, direction: "column", spacing: 2, sx: {
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "10px",
                            } },
                            react_1.default.createElement(react_2.AdvancedImage, { cldImg: Cloudinary_1.default
                                    .image("portfolio/Elite_goose_jndy3l")
                                    .resize((0, resize_1.fit)(400, 400)) }),
                            react_1.default.createElement(material_1.Typography, { variant: "body1" }, "self portrait"))))))));
};
exports["default"] = Contact;


/***/ }),

/***/ 42973:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(96540));
var Card_1 = __importDefault(__webpack_require__(97452));
var CardActionArea_1 = __importDefault(__webpack_require__(91319));
var CardContent_1 = __importDefault(__webpack_require__(61593));
var react_router_dom_1 = __webpack_require__(5058);
var Typography_1 = __importDefault(__webpack_require__(59259));
var SchoolTwoTone_1 = __importDefault(__webpack_require__(88455));
var FaceTwoTone_1 = __importDefault(__webpack_require__(27736));
var project_list_1 = __webpack_require__(60803);
var iconStyling = {
    display: "flex",
    width: "50%",
    height: "50%",
    margin: "auto",
};
var ProjectSelectionBlock = function (_a) {
    var cat = _a.cat, data = _a.data;
    var location = (0, react_router_dom_1.useLocation)();
    return (react_1.default.createElement(Card_1.default, { sx: { maxWidth: 300 } },
        react_1.default.createElement(CardActionArea_1.default, { component: react_router_dom_1.Link, to: cat, state: location },
            cat == project_list_1.ProjectCategories.PERSONAL ? (react_1.default.createElement(FaceTwoTone_1.default, { sx: iconStyling })) : (react_1.default.createElement(SchoolTwoTone_1.default, { sx: iconStyling })),
            react_1.default.createElement(CardContent_1.default, null,
                react_1.default.createElement(Typography_1.default, { gutterBottom: true, variant: "h5", component: "div" }, cat),
                react_1.default.createElement(Typography_1.default, { variant: "body2", sx: { color: "text.secondary" } }, data.map(function (proj) {
                    return "- ".concat(proj.name, " ");
                }))))));
};
exports["default"] = ProjectSelectionBlock;


/***/ }),

/***/ 44685:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __importStar(__webpack_require__(96540));
var material_1 = __webpack_require__(8157);
var DarkModeTwoTone_1 = __importDefault(__webpack_require__(65698));
var LightModeTwoTone_1 = __importDefault(__webpack_require__(80170));
var SettingsSystemDaydreamTwoTone_1 = __importDefault(__webpack_require__(31572));
function ToggleThemeButtons() {
    var _a = (0, material_1.useColorScheme)(), mode = _a.mode, setMode = _a.setMode;
    var handleToggleTheme = function (event, newThemeMode) {
        setMode(newThemeMode);
    };
    return (React.createElement(material_1.ToggleButtonGroup, { value: mode, defaultValue: mode, exclusive: true, onChange: handleToggleTheme, "aria-label": "theme mode toggle" },
        React.createElement(material_1.ToggleButton, { value: "system", "aria-label": "light mode" },
            React.createElement(SettingsSystemDaydreamTwoTone_1.default, null)),
        React.createElement(material_1.ToggleButton, { value: "light", "aria-label": "light mode" },
            React.createElement(LightModeTwoTone_1.default, null)),
        React.createElement(material_1.ToggleButton, { value: "dark", "aria-label": "dark mode" },
            React.createElement(DarkModeTwoTone_1.default, null))));
}
exports["default"] = ToggleThemeButtons;


/***/ }),

/***/ 45242:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __importStar(__webpack_require__(96540));
var material_1 = __webpack_require__(8157);
var SdTwoTone_1 = __importDefault(__webpack_require__(38786));
var HdTwoTone_1 = __importDefault(__webpack_require__(58287));
var FourKTwoTone_1 = __importDefault(__webpack_require__(36424));
function ToggleImageQualityButtons() {
    var _a = React.useState("high"), imgQuality = _a[0], setImgQuality = _a[1];
    var handleToggleImgQuality = function (event, newImgQuality) {
        setImgQuality(newImgQuality);
    };
    return (React.createElement(material_1.ToggleButtonGroup, { value: imgQuality, exclusive: true, onChange: handleToggleImgQuality, "aria-label": "image quality toggle" },
        React.createElement(material_1.ToggleButton, { value: "low", "aria-label": "low image quality" },
            React.createElement(SdTwoTone_1.default, null)),
        React.createElement(material_1.ToggleButton, { value: "medium", "aria-label": "medium image quality" },
            React.createElement(HdTwoTone_1.default, null)),
        React.createElement(material_1.ToggleButton, { value: "high", "aria-label": "high image quality" },
            React.createElement(FourKTwoTone_1.default, null))));
}
exports["default"] = ToggleImageQualityButtons;


/***/ }),

/***/ 45688:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(96540));
var NavLinks_1 = __importDefault(__webpack_require__(6705));
__webpack_require__(26740);
var material_1 = __webpack_require__(8157);
var muiButton_1 = __webpack_require__(8038);
var theme_1 = __importDefault(__webpack_require__(17425));
var Landing = function () {
    return (react_1.default.createElement(material_1.Fade, { in: true, appear: true, timeout: 3000 },
        react_1.default.createElement(material_1.Box, { className: "Landing-container" },
            react_1.default.createElement(material_1.Typography, { variant: "h5", sx: { fontFamily: "Karla", fontWeight: 700 } }, "Hi there! Welcome to"),
            react_1.default.createElement(material_1.Box, { className: "Landing-container__name" },
                react_1.default.createElement(material_1.Typography, { className: "Landing-container__name__fullname", variant: "h1", sx: {
                        color: theme_1.default.vars.palette.primary.main,
                        backgroundColor: theme_1.default.vars.palette.background.highlight,
                    } }, "angus_hon"),
                react_1.default.createElement(material_1.Typography, { className: "Landing-container__name__at", variant: "h1", sx: { color: theme_1.default.vars.palette.primary.main } }, "@\uD83C\uDFE0")),
            react_1.default.createElement(material_1.Box, { className: "Landing-container__nav" },
                react_1.default.createElement(material_1.Button, __assign({ className: "Nav-link__no-events" }, muiButton_1.navLinkButtonProps, { sx: __assign({ paddingLeft: 0 }, muiButton_1.navLinkButtonProps.sx) }), "~$"),
                react_1.default.createElement(NavLinks_1.default, null)))));
};
exports["default"] = Landing;


/***/ }),

/***/ 47294:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var AboutMeContent = [
    {
        heading: "Who is Angus?",
        body: [
            "He is a software engineer who also happens to be a data scientist. He is an avid computer & keyboard builder, amateur basketball analyst, and casual volleyball player.",
        ],
    },
    {
        heading: "What is Angus?",
        body: [
            "He is an ethnically Chinese human that was born and raised in Vancouver, Canada. As noted by culinary experts, Angus is also a type of beef.",
        ],
    },
    {
        heading: "Where is Angus?",
        body: ["He is currently in Vancouver, BC, Canada."],
    },
    {
        heading: "When is Angus?",
        body: ["HE IS NOW."],
    },
    {
        heading: "Why is Angus?",
        body: ["That is a question he frequently asks himself."],
    },
    {
        heading: "How is Angus?",
        body: [
            "He is taking a break from work to explore his other passions.",
            "Previously, he worked as a software engineer at Amazon Web Services and Sokanu.",
            "Angus graduated from Simon Fraser University - main'ing in Data Science and alt'ing Interactive Arts and Technology (Game Design and Interaction Design).",
            "In his spare time, Angus enjoys hanging out with his friends, playing video games, and watching the NBA.",
        ],
    },
];
exports["default"] = AboutMeContent;


/***/ }),

/***/ 48931:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var websiteV1 = {
    abbr: "website",
    name: "Personal Website",
    date: "Mar 2019 - Present",
    tags: ["React", "JS", "CSS"],
    category: "Single-Page Web Application",
    link: {
        repo: "",
        host: "",
    },
    detail: {
        short: "You're looking right at it! Single page web app - my online portfolio. Find my most up-to-date projects, interests, and my contact info.",
        long: [],
    },
    images: [
        {
            src: "website/mobile_w4jkn3",
            alt: "Website: Mobile View",
            description: "Mobile view of my website",
        },
        {
            src: "website/mobile-about_tkthtq",
            alt: "Website: Mobile - About Page",
            description: "Different hierarchy and layout for mobile view.",
        },
        {
            src: "website/mobile-projects_aalnaf",
            alt: "Website: Mobile - Projects Page",
            description: "Vertical card layout and swipable carousel to view images.",
        },
        {
            src: "website/mobile-light_toonsi",
            alt: "Website: Mobile - Light Theme",
            description: "Light themed version.",
        },
        {
            src: "website/mobile-light-about_unfudo",
            alt: "Website: Mobile - Light Theme About Page",
            description: "Brighter colour palette for outdoor environments.",
        },
        {
            src: "website/mobile-light-projects_cloblh",
            alt: "Website: Mobile - Light Theme Projects Page",
            description: "Light themed version of the projects page.",
        },
    ],
};
exports["default"] = websiteV1;


/***/ }),

/***/ 50167:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = ProjectModalCarousel;
var react_1 = __importStar(__webpack_require__(96540));
var Box_1 = __importDefault(__webpack_require__(20079));
var Typography_1 = __importDefault(__webpack_require__(59259));
var Modal_1 = __importDefault(__webpack_require__(1219));
var react_router_dom_1 = __webpack_require__(5058);
var material_1 = __webpack_require__(8157);
var react_material_ui_carousel_1 = __importDefault(__webpack_require__(31661));
var react_2 = __webpack_require__(44387);
var resize_1 = __webpack_require__(16012);
var KeyboardArrowRightTwoTone_1 = __importDefault(__webpack_require__(50255));
var KeyboardArrowLeftTwoTone_1 = __importDefault(__webpack_require__(40082));
var PhotoLibraryTwoTone_1 = __importDefault(__webpack_require__(53194));
var Cloudinary_1 = __importDefault(__webpack_require__(55039));
var ProjectCarousel_1 = __webpack_require__(15274);
var computeNodeStyle_1 = __importDefault(__webpack_require__(91582));
var ScrollableContainer_1 = __importDefault(__webpack_require__(53751));
var FadeWrapper_1 = __importDefault(__webpack_require__(57824));
var styles = __assign(__assign({}, ProjectCarousel_1.carouselStyles), { modalBox: {
        position: "absolute",
        top: "calc(50% + 20px)", // global nav bar is 40px tall
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "87%",
        height: "87%",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 2,
        display: "flex",
    } });
function ProjectModalCarousel(_a) {
    var proj = _a.proj;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var theme = (0, material_1.useTheme)();
    var isSmallScreen = (0, material_1.useMediaQuery)(theme.breakpoints.down("md"));
    var cld = Cloudinary_1.default;
    var _b = (0, react_1.useState)({ width: 0, height: 0 }), dims = _b[0], setDims = _b[1];
    // issue with useRefs and useEffect detailed in this article
    // https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780
    // solution from: https://stackoverflow.com/a/67906087
    var modalRef = (0, react_1.useCallback)(function (node) {
        if (node !== null) {
            var nodeDims = (0, computeNodeStyle_1.default)(node);
            setDims({
                width: nodeDims.width,
                height: nodeDims.height - 40, // 40px for indicators
            });
        }
    }, []);
    var handleClose = function () {
        navigate("-1", { replace: true });
    };
    return (react_1.default.createElement(Modal_1.default, { open: true, onClose: handleClose, "aria-labelledby": "modal-modal-title-".concat(proj.abbr), "aria-describedby": "modal-modal-description-".concat(proj.abbr) },
        react_1.default.createElement(FadeWrapper_1.default, null,
            react_1.default.createElement(Box_1.default, { sx: __assign(__assign({}, styles.modalBox), { flexDirection: isSmallScreen ? "column-reverse" : "row" }) },
                react_1.default.createElement(ScrollableContainer_1.default, { sx: {
                        flexDirection: "column",
                        width: isSmallScreen ? "100%" : "30%",
                        height: isSmallScreen ? "40%" : "100%",
                    } },
                    react_1.default.createElement(material_1.CardContent, { sx: {
                            flex: "1 0 auto",
                        } },
                        react_1.default.createElement(Typography_1.default, { id: "modal-modal-title-".concat(proj.abbr), component: "div", variant: "h5" }, proj.name),
                        react_1.default.createElement(Typography_1.default, { variant: "subtitle1", component: "div", sx: { color: "text.secondary" } }, proj.category),
                        react_1.default.createElement(material_1.Grid, { container: true, display: "flex", flexDirection: "row", spacing: 2, rowSpacing: 0, width: "90%" }, proj.tags.map(function (tag, i) { return (react_1.default.createElement(Typography_1.default, { key: i, variant: "subtitle2", component: "div", sx: { color: "text.secondary" } }, tag)); })),
                        react_1.default.createElement(Box_1.default, { sx: { paddingTop: "10px" } },
                            react_1.default.createElement(Typography_1.default, { variant: "body2" }, proj.date),
                            react_1.default.createElement(Typography_1.default, { variant: "body1" }, proj.detail.short)))),
                react_1.default.createElement(Box_1.default, { ref: modalRef, sx: { width: isSmallScreen ? "100%" : "70%", height: "100%" } },
                    react_1.default.createElement(react_material_ui_carousel_1.default, { stopAutoPlayOnHover: true, fullHeightHover: true, autoPlay: false, interval: 5000, animation: "slide", indicators: true, navButtonsAlwaysVisible: true, NextIcon: react_1.default.createElement(KeyboardArrowRightTwoTone_1.default, null), PrevIcon: react_1.default.createElement(KeyboardArrowLeftTwoTone_1.default, null) }, proj.images.length >= 1
                        ? proj.images.map(function (item, i) { return (react_1.default.createElement(material_1.Card, { key: i, sx: __assign({ height: dims.height }, ProjectCarousel_1.carouselStyles.card) },
                            react_1.default.createElement(Box_1.default, { sx: __assign({ width: dims.width }, ProjectCarousel_1.carouselStyles.outerBox) },
                                react_1.default.createElement(react_2.AdvancedImage, { cldImg: cld
                                        .image("portfolio/".concat(item.src))
                                        .resize((0, resize_1.fit)(dims.width, dims.height)), plugins: [
                                        (0, react_2.placeholder)({ mode: "blur" }),
                                        (0, react_2.responsive)(),
                                    ] }),
                                react_1.default.createElement(Box_1.default, { sx: __assign({}, ProjectCarousel_1.carouselStyles.textOverlay) },
                                    react_1.default.createElement(Typography_1.default, { variant: "caption" }, item.description))))); })
                        : [1, 2].map(function (i) { return (react_1.default.createElement(material_1.Card, { key: i, sx: __assign({ height: dims.height }, ProjectCarousel_1.carouselStyles.card) },
                            react_1.default.createElement(Box_1.default, { sx: __assign({ width: dims.width }, ProjectCarousel_1.carouselStyles.outerBox) },
                                react_1.default.createElement(PhotoLibraryTwoTone_1.default, { sx: { width: dims.width, height: dims.height } }),
                                react_1.default.createElement(Box_1.default, { sx: __assign({}, ProjectCarousel_1.carouselStyles.textOverlay) },
                                    react_1.default.createElement(Typography_1.default, { variant: "caption" }, "Photo unavailable at the moment."))))); })))))));
}


/***/ }),

/***/ 50585:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(96540));
var FadeWrapper_1 = __importDefault(__webpack_require__(57824));
var material_1 = __webpack_require__(8157);
var Loading = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(FadeWrapper_1.default, null,
            react_1.default.createElement(material_1.Typography, { variant: "h5" }, "loading..."))));
};
exports["default"] = Loading;


/***/ }),

/***/ 53655:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __importStar(__webpack_require__(96540));
var Slide_1 = __importDefault(__webpack_require__(86919));
var constants_1 = __webpack_require__(70908);
var SlideWrapper = function (_a) {
    var children = _a.children, slideFromRef = _a.slideFromRef, direction = _a.direction, delay = _a.delay, timeout = _a.timeout;
    var _b = React.useState(function () {
        return !!localStorage.getItem("--slide-animatedOnLoad");
    }), animatedOnLoad = _b[0], setAnimatedOnLoad = _b[1];
    var _c = React.useState(false), showContent = _c[0], setShowContent = _c[1];
    React.useEffect(function () {
        if (!animatedOnLoad) {
            var timer_1 = setTimeout(function () {
                setShowContent(true);
            }, delay
                ? constants_1.ANI_CONST.WRAPPER_ONLOAD_DELAY + delay
                : constants_1.ANI_CONST.WRAPPER_ONLOAD_DELAY); // wait until page is loaded
            setAnimatedOnLoad(true);
            localStorage.setItem("--slide-animatedOnLoad", "true");
            return function () { return clearTimeout(timer_1); };
        }
        if (delay) {
            var timer_2 = setTimeout(function () {
                setShowContent(true);
            }, delay);
            console.log(delay);
            return function () { return clearTimeout(timer_2); };
        }
        else {
            setShowContent(true);
        }
    }, []);
    return (React.createElement(Slide_1.default, { in: showContent, timeout: timeout ? timeout : constants_1.ANI_CONST.WRAPPER_SLIDE_WRAPPER_DELAY, container: slideFromRef.current, direction: direction },
        React.createElement("div", null, children)));
};
exports["default"] = SlideWrapper;


/***/ }),

/***/ 53751:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __importStar(__webpack_require__(96540));
var material_1 = __webpack_require__(8157);
var scroll_area_1 = __webpack_require__(86411);
var ScrollableContainer = function (_a) {
    var children = _a.children, ref = _a.ref, sx = _a.sx, className = _a.className;
    return (React.createElement(material_1.Container, { sx: sx, className: className, ref: ref },
        React.createElement(scroll_area_1.ScrollArea, { classNames: {
                horizontalScrollbar: "h-2.5",
                root: "w-60 h-60 text-black dark:text-white",
                scrollbar: "p-[1px]",
                thumb: "bg-neutral-800 dark:bg-neutral-100 rounded-full opacity-30 hover:opacity-40 transition-opacity",
                verticalScrollbar: "w-2.5",
            }, dir: "ltr", orientation: "vertical", scrollHideDelay: 600, shadowSize: 50, type: "always", style: { width: "100%", height: "100%" } }, children)));
};
exports["default"] = ScrollableContainer;


/***/ }),

/***/ 53900:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(96540));
var client_1 = __importDefault(__webpack_require__(5338));
var react_router_dom_1 = __webpack_require__(5058);
var styles_1 = __webpack_require__(9752);
var material_1 = __webpack_require__(8157);
var App_1 = __importDefault(__webpack_require__(55802));
var theme_1 = __importDefault(__webpack_require__(17425));
__webpack_require__(97216);
var root = client_1.default.createRoot(document.getElementById("root"));
root.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(react_router_dom_1.BrowserRouter, { basename: "/" },
        react_1.default.createElement(styles_1.ThemeProvider, { theme: theme_1.default, defaultMode: "light", noSsr: true },
            react_1.default.createElement(material_1.CssBaseline, null),
            react_1.default.createElement(App_1.default, null)))));


/***/ }),

/***/ 54790:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var muiColorSchemes = {
    colorSchemes: {
        light: {
            palette: {
                background: {
                    default: "#fff3de",
                    paper: "white",
                    highlight: "#147F8259",
                    globalNav: "white",
                },
                primary: {
                    main: "#5399da",
                    contrastText: "black",
                },
                secondary: {
                    main: "#aa51f73F",
                    contrastText: "black",
                },
                text: {
                    primary: "black",
                },
            },
        },
        dark: {
            palette: {
                background: {
                    default: "#30383bff",
                    paper: "#1d2025",
                    highlight: "#147F8259",
                    globalNav: "black",
                },
                primary: {
                    main: "#53d8daff",
                    contrastText: "#fff3de",
                },
                secondary: {
                    main: "#9d2dff3f",
                    contrastText: "#fff3de",
                },
                text: {
                    primary: "#fff3de",
                },
            },
        },
    },
};
exports["default"] = muiColorSchemes;


/***/ }),

/***/ 55039:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var url_gen_1 = __webpack_require__(99028);
var cldInstance = null;
function getCloudinaryInstance() {
    if (!cldInstance) {
        cldInstance = new url_gen_1.Cloudinary({
            cloud: {
                cloudName: "djlcricbu",
            },
            url: { secure: true },
        });
    }
    return cldInstance;
}
exports["default"] = getCloudinaryInstance();


/***/ }),

/***/ 55802:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(96540));
var react_router_dom_1 = __webpack_require__(5058);
var material_1 = __webpack_require__(8157);
var Loading = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(50585)); }); });
var Default = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(72374)); }); });
var DoesNotExist = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(28346)); }); });
var CustomOptionsDial = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(7496)); }); });
var GlobalNav = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(2943)); }); });
var Landing = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(45688)); }); });
var Projects = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(30791)); }); });
var Selection = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(19432)); }); });
var Academic = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(21645)); }); });
var Personal = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(4040)); }); });
var AboutMe = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(20834)); }); });
var Contact = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(40858)); }); });
var ProjectModalCarousel = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(50167)); }); });
var project_list_1 = __webpack_require__(60803);
var App = function () {
    var location = (0, react_router_dom_1.useLocation)();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var background = location.state && location.state.background;
    (0, react_1.useEffect)(function () {
        // clean up on unmount
        localStorage.removeItem("--grow-animatedOnLoad");
        localStorage.removeItem("--slide-animatedOnLoad");
    }, []);
    return (react_1.default.createElement(material_1.Box, { className: "App" },
        react_1.default.createElement(CustomOptionsDial, null),
        react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(Loading, null) },
            react_1.default.createElement(GlobalNav, null),
            react_1.default.createElement(material_1.Box, { className: location.pathname == "/" ? "Container" : "Container Container--open" },
                react_1.default.createElement(react_router_dom_1.Routes, { location: background || location },
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Landing, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "about", element: react_1.default.createElement(AboutMe, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "projects", element: react_1.default.createElement(Projects, null) },
                        react_1.default.createElement(react_router_dom_1.Route, { index: true, element: react_1.default.createElement(Selection, null) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: "personal", element: react_1.default.createElement(Personal, null) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: "personal/*", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: "/projects/personal", replace: true }) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: "academic", element: react_1.default.createElement(Academic, null) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: "academic/*", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: "/projects/academic", replace: true }) })),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "contact", element: react_1.default.createElement(Contact, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "default", element: react_1.default.createElement(Default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(DoesNotExist, null) })),
                background && (react_1.default.createElement(react_router_dom_1.Routes, null,
                    project_list_1.ProjectList.personal.map(function (proj, i) { return (react_1.default.createElement(react_router_dom_1.Route, { key: i, path: "projects/personal/".concat(proj.abbr), element: react_1.default.createElement(ProjectModalCarousel, { proj: proj }) })); }),
                    project_list_1.ProjectList.academic.map(function (proj, i) { return (react_1.default.createElement(react_router_dom_1.Route, { key: i, path: "projects/academic/".concat(proj.abbr), element: react_1.default.createElement(ProjectModalCarousel, { proj: proj }) })); })))))));
};
exports["default"] = App;


/***/ }),

/***/ 56665:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var muiDrawer = {
    MuiDrawer: {
        styleOverrides: {
            paperAnchorTop: {
                top: "40px"
            },
            paper: {
                width: "600px",
                '@media (max-width: 600px)': {
                    width: "100%"
                },
            }
        }
    }
};
exports["default"] = muiDrawer;


/***/ }),

/***/ 57824:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __importStar(__webpack_require__(96540));
var Fade_1 = __importDefault(__webpack_require__(86496));
var constants_1 = __webpack_require__(70908);
var material_1 = __webpack_require__(8157);
var FadeWrapper = function (_a) {
    var children = _a.children, delay = _a.delay, timeout = _a.timeout;
    var _b = React.useState(false), showContent = _b[0], setShowContent = _b[1];
    React.useEffect(function () {
        var timer = setTimeout(function () {
            setShowContent(true);
        }, delay);
        return function () { return clearTimeout(timer); };
    }, []);
    return (React.createElement(Fade_1.default, { in: delay ? showContent : true, timeout: timeout ? timeout : constants_1.ANI_CONST.WRAPPER_FADE_WRAPPER_DELAY, easing: { enter: material_1.easing.sharp, exit: material_1.easing.easeOut } },
        React.createElement("div", null, children)));
};
exports["default"] = FadeWrapper;


/***/ }),

/***/ 60654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 60803:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectCategories = exports.ProjectList = void 0;
var ggj_2020_1 = __importDefault(__webpack_require__(81593));
var spochi_v0_1 = __importDefault(__webpack_require__(33015));
var website_v1_1 = __importDefault(__webpack_require__(48931));
var foodpick_1 = __importDefault(__webpack_require__(15871));
var falling_blocks_1 = __importDefault(__webpack_require__(30776));
var PersonalProjects = [
    ggj_2020_1.default,
    spochi_v0_1.default,
    website_v1_1.default,
    foodpick_1.default,
    falling_blocks_1.default,
];
var bobbys_breakout_1 = __importDefault(__webpack_require__(36886));
var player_performance_projection_1 = __importDefault(__webpack_require__(26843));
var motion_art_1 = __importDefault(__webpack_require__(8285));
var kingdom_of_helios_1 = __importDefault(__webpack_require__(90425));
var antlion_tower_defense_1 = __importDefault(__webpack_require__(7293));
var AcademicProjects = [
    bobbys_breakout_1.default,
    player_performance_projection_1.default,
    motion_art_1.default,
    kingdom_of_helios_1.default,
    antlion_tower_defense_1.default,
];
var ProjectCategories;
(function (ProjectCategories) {
    ProjectCategories["PERSONAL"] = "personal";
    ProjectCategories["ACADEMIC"] = "academic";
})(ProjectCategories || (exports.ProjectCategories = ProjectCategories = {}));
var ProjectList = {
    personal: PersonalProjects,
    academic: AcademicProjects,
};
exports.ProjectList = ProjectList;


/***/ }),

/***/ 70908:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ANI_CONST = void 0;
var GENERIC_CARD_DELAY = 400;
var GENERIC_WRAPPER_DELAY = 700;
exports.ANI_CONST = {
    // GENERIC
    WRAPPER_ONLOAD_DELAY: 500,
    WRAPPER_GROW_WRAPPER_DELAY: GENERIC_WRAPPER_DELAY,
    WRAPPER_SLIDE_WRAPPER_DELAY: GENERIC_WRAPPER_DELAY,
    WRAPPER_FADE_WRAPPER_DELAY: 800,
    // GLOBAL NAV
    GLOBAL_NAV_LANDING_DELAY: 1000,
    GLOBAL_NAV_DELAY: 500,
    // ABOUT
    ABOUT_CARD_DELAY: GENERIC_CARD_DELAY,
    // PROJECTS
    PROJ_ROW_BREAKPOINT: 1424, // >= 1424px fits 3 cards
    PROJ_SUBHEADING_DELAY: 300, // same as WRAPPER_FADE_WRAPPER_DELAY
    PROJ_CARDS_DELAY: GENERIC_CARD_DELAY,
    PROJ_CARD_WIDTH: { xs: 400, md: 450, lg: 600 },
    // CONTACT
    CONTACT_BADGE_DELAY: GENERIC_CARD_DELAY,
    CONTACT_PORTRAIT_HEADING_DELAY: GENERIC_CARD_DELAY * 6,
    CONTACT_PORTRAIT_PIC_DELAY: GENERIC_CARD_DELAY * 6,
};


/***/ }),

/***/ 72374:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(96540));
var material_1 = __webpack_require__(8157);
var ScrollableContainer_1 = __importDefault(__webpack_require__(53751));
var Default = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ScrollableContainer_1.default, null,
            react_1.default.createElement(material_1.Typography, { variant: "body1" }, "much wow, such empty"))));
};
exports["default"] = Default;


/***/ }),

/***/ 76103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 76710:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var muiTypography = {
    typography: {
        fontFamily: ["Inconsolata, Source Code Pro, Karla"].join(","),
        h3: {
            fontFamily: "Source Code Pro",
            fontWeight: 400,
            marginBottom: 15,
            marginTop: 20,
        },
        h4: {
            fontFamily: "Source Code Pro",
            fontWeight: 400,
            marginBottom: 10,
        },
        h5: {
            fontFamily: "Source Code Pro",
            fontWeight: 400,
            marginBottom: 5,
        },
        subtitle1: {
            fontFamily: "Inconsolata",
            fontWeight: 700,
        },
        subtitle2: {
            fontFamily: "Inconsolata",
            fontWeight: 400,
        },
        body1: {
            fontFamily: "Karla",
            fontWeight: 400,
        },
        body2: {
            fontFamily: "Karla",
            fontWeight: 400,
            fontStyle: "italic",
        },
        caption: {
            fontFamily: "Karla",
            fontWeight: 400,
            fontStyle: "italic",
        },
        // used in landing page only
        h1: {
            fontFamily: "Inconsolata",
            fontWeight: 700,
        },
        h2: undefined,
        h6: undefined,
    },
};
exports["default"] = muiTypography;


/***/ }),

/***/ 81593:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var ggj2020 = {
    abbr: "i-was-never-here",
    name: "GGJ: I Was Never Here",
    date: "Jan 2020 - Feb 2020",
    tags: ["GGJ-2020", "Unity", "C#", "Strategy", "Game"],
    category: "2D Strategy Game",
    link: {
        repo: "https://github.com/Fluffisaurus/GGJ-2020",
        host: "http://bit.ly/RatThief",
    },
    detail: {
        short: "Our team's take on the Global Game Jam 2020 theme: Repair. A strategy game with unique and emergent mechanics.",
        long: [],
    },
    images: [
        {
            src: "ggj/title-screen_v9zvyj",
            alt: "GGJ-2020 I Was Never Here: Title Screen",
            description: "Game's title screen.",
        },
        {
            src: "ggj/the-squad_fesuum",
            alt: "GGJ-2020 I Was Never Here: Team Photo",
            description: "The Squad! From left to right: Angus Hon, Ahmed Abuzuraiq, Anson Christo, Jordan Watterson, Lily Zarif",
        },
    ],
};
exports["default"] = ggj2020;


/***/ }),

/***/ 85459:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.muiSpeedDialAction = exports.muiSpeedDial = void 0;
exports.muiSpeedDial = {
    MuiSpeedDial: {
        styleOverrides: {
            root: {
                alignItems: "flex-end", // aligns actions
            },
            fab: {
                // the actual icon on the speed dial itself
                alignItems: "center",
            },
        },
    },
};
exports.muiSpeedDialAction = {
    MuiSpeedDialAction: {
        styleOverrides: {
            // fab container that wraps action content
            fab: {
                width: "fit-content",
                height: "fit-content",
                borderRadius: "var(--custom-mui-theme-shape-borderRadius)",
                justifyContent: "right",
            },
        },
    },
};


/***/ }),

/***/ 86704:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var muiCssBaseline = {
    MuiCssBaseline: {
        styleOverrides: "\n        @font-face {\n          font-family: 'Inconsolata';\n          font-style: normal;\n          font-weight: 700;\n          font-stretch: 100%;\n          font-display: swap;\n          src: url(https://fonts.gstatic.com/s/inconsolata/v37/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp2I7WR32lw.woff2) format('woff2');\n          unicode-range: U0000-00FF, U0131, U0152-0153, U02BB-02BC, U02C6, U02DA, U02DC, U0304, U0308, U0329, U2000-206F, U20AC, U2122, U2191, U2193, U2212, U2215, UFEFF, UFFFD;\n        }\n\n        @font-face {\n          font-family: 'Inconsolata';\n          font-style: normal;\n          font-weight: 400;\n          font-stretch: 100%;\n          src: url(https://fonts.gstatic.com/s/inconsolata/v37/QlddNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLyya15.woff2) format('woff2');\n          unicode-range: U0000-00FF, U0131, U0152-0153, U02BB-02BC, U02C6, U02DA, U02DC, U0304, U0308, U0329, U2000-206F, U20AC, U2122, U2191, U2193, U2212, U2215, UFEFF, UFFFD;\n        }\n\n        @font-face {\n          font-family: 'Source Code Pro';\n          font-style: normal;\n          font-weight: 400;\n          font-display: swap;\n          src: url(https://fonts.gstatic.com/s/sourcecodepro/v30/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPevW.woff2) format('woff2');\n          unicode-range: U0000-00FF, U0131, U0152-0153, U02BB-02BC, U02C6, U02DA, U02DC, U0304, U0308, U0329, U2000-206F, U20AC, U2122, U2191, U2193, U2212, U2215, UFEFF, UFFFD;\n        }\n                \n        @font-face {\n          font-family: 'Karla';\n          font-style: normal;\n          font-weight: 400;\n          font-display: swap;\n          src: url(https://fonts.gstatic.com/s/karla/v32/qkB9XvYC6trAT55ZBi1ueQVIjQTD-JrIH2G7nytkHRyQ8p4wUje6bg.woff2) format('woff2');\n          unicode-range: U0000-00FF, U0131, U0152-0153, U02BB-02BC, U02C6, U02DA, U02DC, U0304, U0308, U0329, U2000-206F, U20AC, U2122, U2191, U2193, U2212, U2215, UFEFF, UFFFD;\n        }\n\n        @font-face {\n          font-family: 'Karla';\n          font-style: italic;\n          font-weight: 400;\n          src: url(https://fonts.gstatic.com/s/karla/v32/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNlCV3lIb7M.woff2) format('woff2');\n          unicode-range: U0000-00FF, U0131, U0152-0153, U02BB-02BC, U02C6, U02DA, U02DC, U0304, U0308, U0329, U2000-206F, U20AC, U2122, U2191, U2193, U2212, U2215, UFEFF, UFFFD;\n        }\n      ",
    },
};
exports["default"] = muiCssBaseline;


/***/ }),

/***/ 90425:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var kingdomOfHelios = {
    abbr: "kingdom-of-helios",
    name: "Kingdom of Helios",
    date: "Oct 2018 - Dec 2018",
    tags: ["Unity", "C#", "Game Dev", "Game Design", "Game"],
    category: "2D Side-Scrolling Platformer Game",
    link: {
        repo: "https://github.com/Fluffisaurus/kingdom-of-helios",
        host: "bit.ly/KoHelios",
    },
    detail: {
        short: "2D side-scrolling platformer RPG - play as two protagonists with distinct skill sets to progress through the game.",
        long: [],
    },
    images: [
        {
            src: "helios/main-screen_eutlnh",
            alt: "Helios: Main Screen",
            description: "Start screen.",
        },
        {
            src: "helios/char-x_v28nxl",
            alt: "Helios: Protagonist",
            description: "Main protagonist with distinct skill set.",
        },
        {
            src: "helios/char-y_atx5aa",
            alt: "Helios: Protagonist's younger brother",
            description: "Protagonist's younger brother with a different skill set.",
        },
        {
            src: "helios/scene-flow-chart_vfmnj1",
            alt: "Helios: Scene Flow Chart",
            description: "Game's main scene flow chart.",
        },
        {
            src: "helios/story-map_djrgbx",
            alt: "Helios: Story map of the game",
            description: "Game's story map and progression.",
        },
    ],
};
exports["default"] = kingdomOfHelios;


/***/ }),

/***/ 91582:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var computeNodeStyle = function (node) {
    var nodeCmpStyle = getComputedStyle(node);
    var nodeMargin = {
        width: parseInt(nodeCmpStyle.marginLeft) + parseInt(nodeCmpStyle.marginRight),
        height: parseInt(nodeCmpStyle.marginTop) + parseInt(nodeCmpStyle.marginBottom),
    };
    var nodePadding = {
        width: parseInt(nodeCmpStyle.paddingLeft) + parseInt(nodeCmpStyle.paddingRight),
        height: parseInt(nodeCmpStyle.paddingTop) + parseInt(nodeCmpStyle.paddingBottom),
    };
    return {
        width: node.offsetWidth - nodeMargin.width - nodePadding.width,
        height: node.offsetHeight - nodeMargin.height - nodePadding.height
    };
};
exports["default"] = computeNodeStyle;


/***/ }),

/***/ 96757:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(96540));
var Card_1 = __importDefault(__webpack_require__(97452));
var CardContent_1 = __importDefault(__webpack_require__(61593));
var Typography_1 = __importDefault(__webpack_require__(59259));
var CardMedia_1 = __importDefault(__webpack_require__(85672));
var styles_1 = __webpack_require__(9752);
var IconButton_1 = __importDefault(__webpack_require__(92975));
var ExpandMore_1 = __importDefault(__webpack_require__(72048));
var material_1 = __webpack_require__(8157);
var ProjectCarousel_1 = __importDefault(__webpack_require__(15274));
var constants_1 = __webpack_require__(70908);
var react_router_dom_1 = __webpack_require__(5058);
var ExpandMore = (0, styles_1.styled)(function (props) {
    var expand = props.expand, other = __rest(props, ["expand"]); //eslint-disable-line @typescript-eslint/no-unused-vars
    return react_1.default.createElement(IconButton_1.default, __assign({}, other));
})(function (_a) {
    var theme = _a.theme;
    return ({
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
        variants: [
            {
                props: function (_a) {
                    var expand = _a.expand;
                    return !expand;
                },
                style: {
                    transform: "rotate(0deg)",
                },
            },
            {
                props: function (_a) {
                    var expand = _a.expand;
                    return !!expand;
                },
                style: {
                    transform: "rotate(180deg)",
                },
            },
        ],
    });
});
var ProjectBlock = function (_a) {
    var proj = _a.proj;
    var _b = react_1.default.useState(false), expanded = _b[0], setExpanded = _b[1];
    /*
     * location as a key here helps react recognize which is parent vs child
     * when path updates, the state of the parent is preserved since React can keep track
     * of which is the parent via it's location.pathname.
     * in this case, fullscreen modal carousel is the child, forcing project block to
     * rerender or preserve its state
     *
     * search: "react rerender with key location" or "react rerender parent with child key location"
     */
    var location = (0, react_router_dom_1.useLocation)();
    var cardDims = {
        width: constants_1.ANI_CONST.PROJ_CARD_WIDTH,
    };
    var handleExpandClick = function () {
        setExpanded(!expanded);
    };
    return (react_1.default.createElement(Card_1.default, { sx: __assign({}, cardDims) },
        react_1.default.createElement(CardMedia_1.default, { sx: { minHeight: 200 } },
            react_1.default.createElement(ProjectCarousel_1.default, { key: location.pathname, proj: proj, width: { width: cardDims.width }, height: 400 })),
        react_1.default.createElement(CardContent_1.default, { sx: { position: "relative" } },
            react_1.default.createElement(Typography_1.default, { component: "div", variant: "h5" }, proj.name),
            react_1.default.createElement(Typography_1.default, { variant: "subtitle1", component: "div", sx: { color: "text.secondary" } }, proj.category),
            react_1.default.createElement(material_1.Grid, { container: true, display: "flex", flexDirection: "row", spacing: 2, rowSpacing: 0, width: "90%" }, proj.tags.map(function (tag, i) {
                return (react_1.default.createElement(Typography_1.default, { key: i, variant: "subtitle2", component: "div", sx: { color: "text.secondary" } }, tag));
            })),
            react_1.default.createElement(material_1.CardActions, { disableSpacing: true, sx: {
                    position: "absolute",
                    padding: 0,
                    right: "10px",
                    bottom: "10px",
                } },
                react_1.default.createElement(ExpandMore, { expand: expanded, onClick: handleExpandClick, "aria-expanded": expanded, "aria-label": "show more" },
                    react_1.default.createElement(ExpandMore_1.default, null)))),
        react_1.default.createElement(material_1.Collapse, { in: expanded, timeout: "auto", unmountOnExit: true },
            react_1.default.createElement(CardContent_1.default, null,
                react_1.default.createElement(Typography_1.default, { variant: "body2" }, proj.date),
                react_1.default.createElement(Typography_1.default, { variant: "body1" }, proj.detail.short)))));
};
exports["default"] = ProjectBlock;


/***/ }),

/***/ 97216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfluffisaurus_github_io"] = self["webpackChunkfluffisaurus_github_io"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [446], () => (__webpack_require__(53900)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43MWY1OWZhNzEwY2NmNGNjMDRiNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSxrQkFBZTs7Ozs7Ozs7QUNaRjtBQUNiO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEMsNEJBQTRCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsY0FBYztBQUN6RTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsMkJBQTJCLG1CQUFPLENBQUMsS0FBTztBQUMxQyx5QkFBeUIsbUJBQU8sQ0FBQyxJQUFrQjtBQUNuRCxpQkFBaUIsbUJBQU8sQ0FBQyxJQUFlO0FBQ3hDLGNBQWMsbUJBQU8sQ0FBQyxLQUErQjtBQUNyRCxvQ0FBb0MsbUJBQU8sQ0FBQyxLQUFpQztBQUM3RSx3Q0FBd0MsbUJBQU8sQ0FBQyxLQUFxQztBQUNyRixzREFBc0QsbUJBQU8sQ0FBQyxLQUFtRDtBQUNqSCx5Q0FBeUMsbUJBQU8sQ0FBQyxLQUEyQjtBQUM1RSxrQkFBa0IsbUJBQU8sQ0FBQyxJQUE2QjtBQUN2RCxtQkFBTyxDQUFDLEtBQTJCO0FBQ25DLGtCQUFrQixtQkFBTyxDQUFDLEtBQW9CO0FBQzlDLDZCQUE2QixtQkFBTyxDQUFDLElBQXNCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBEQUEwRCxrRUFBa0U7QUFDNUgsdURBQXVELHlCQUF5QjtBQUNoRixnRUFBZ0UsK0JBQStCO0FBQy9GLGdGQUFnRix1QkFBdUIsc0NBQXNDLDRCQUE0QixnQ0FBZ0M7QUFDek0sZ0ZBQWdGLHFFQUFxRSxzQ0FBc0Msd0JBQXdCLDBDQUEwQyxZQUFZLCtCQUErQiw2QkFBNkI7QUFDclUsZ0ZBQWdGLGtEQUFrRCxzQ0FBc0Msd0JBQXdCLDBDQUEwQyxZQUFZLCtCQUErQix3Q0FBd0M7QUFDN1QsNEZBQTRGLGtFQUFrRSxzQ0FBc0Msd0JBQXdCLDBDQUEwQyxZQUFZO0FBQ2xSO0FBQ0EsMkJBQTJCO0FBQzNCLGdGQUFnRixrQ0FBa0M7QUFDbEgsOEZBQThGLGtDQUFrQyxzQ0FBc0Msd0JBQXdCLDBDQUEwQyxnR0FBZ0csR0FBRztBQUMzVSw4RkFBOEYsa0ZBQWtGO0FBQ2hMLG9FQUFvRSw0SEFBNEg7QUFDaE0sdURBQXVELE1BQU0sd0JBQXdCO0FBQ3JGLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixnRkFBZ0Ysa0RBQWtELHNDQUFzQyx3QkFBd0Isa0dBQWtHLGtDQUFrQztBQUNwVTtBQUNBO0FBQ0EsZ0ZBQWdGLCtEQUErRCw0RUFBNEUsaUNBQWlDLHdFQUF3RSx3Q0FBd0MsK0JBQStCLHFDQUFxQztBQUNoYjtBQUNBO0FBQ0EsZ0ZBQWdGLHFEQUFxRCxzQ0FBc0MsaUNBQWlDLHdFQUF3RSxrREFBa0QsK0JBQStCLHFDQUFxQztBQUMxWTtBQUNBO0FBQ0EsZ0ZBQWdGLDhEQUE4RCxzQ0FBc0MsaUNBQWlDLHdFQUF3RSxrREFBa0QsK0JBQStCLDhDQUE4QztBQUM1WjtBQUNBO0FBQ0EsZ0ZBQWdGLDhEQUE4RCxzQ0FBc0MsaUNBQWlDLHdFQUF3RSxrREFBa0QsK0JBQStCLDhDQUE4QztBQUM1WjtBQUNBO0FBQ0EsZ0ZBQWdGLG9EQUFvRCxzQ0FBc0Msd0JBQXdCLGtHQUFrRyxvQ0FBb0M7QUFDeFU7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7O0FDM05GO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEMsNEJBQTRCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsY0FBYztBQUN6RTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsMkJBQTJCLG1CQUFPLENBQUMsS0FBTztBQUMxQyxpQkFBaUIsbUJBQU8sQ0FBQyxJQUFlO0FBQ3hDLHlCQUF5QixtQkFBTyxDQUFDLElBQWtCO0FBQ25ELHFDQUFxQyxtQkFBTyxDQUFDLEtBQStCO0FBQzVFLHFCQUFxQixtQkFBTyxDQUFDLEtBQXFDO0FBQ2xFLHFDQUFxQyxtQkFBTyxDQUFDLEtBQXNDO0FBQ25GLGtCQUFrQixtQkFBTyxDQUFDLEtBQW1DO0FBQzdELG9DQUFvQyxtQkFBTyxDQUFDLEtBQXFDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsbUJBQW1CO0FBQ2xFLG1FQUFtRSxvREFBb0Q7QUFDdkgsdUVBQXVFLGVBQWU7QUFDdEYsNkRBQTZELHVEQUF1RDtBQUNwSCxnRkFBZ0YsK0hBQStIO0FBQy9NLDRFQUE0RSxvQkFBb0I7QUFDaEcsYUFBYTtBQUNiO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7QUM1REY7QUFDYjtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQixtQkFBTyxDQUFDLElBQWU7QUFDeEMsY0FBYyxtQkFBTyxDQUFDLEtBQStCO0FBQ3JELGtDQUFrQyxtQkFBTyxDQUFDLEtBQW1DO0FBQzdFLDhCQUE4QixtQkFBTyxDQUFDLEtBQU87QUFDN0MseUJBQXlCLG1CQUFPLENBQUMsSUFBa0I7QUFDbkQsa0JBQWtCLG1CQUFPLENBQUMsSUFBNkI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkNBQTZDO0FBQzNELGNBQWMsNkNBQTZDO0FBQzNEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx3RUFBd0UsOEVBQThFO0FBQ3RKLDBFQUEwRSx1Q0FBdUM7QUFDakgsd0JBQXdCO0FBQ3hCLHdCQUF3Qix3Q0FBd0MscUJBQXFCLHVDQUF1QztBQUM1SDtBQUNBLGdGQUFnRixtR0FBbUc7QUFDbkwsYUFBYSxvRUFBb0UsaUdBQWlHO0FBQ2xMLEtBQUs7QUFDTDtBQUNBLGtCQUFlOzs7Ozs7OztBQzVERjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7QUM5REY7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxjQUFjO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBZTtBQUNmLHlCQUF5QixtQkFBTyxDQUFDLEtBQU87QUFDeEMsaUJBQWlCLG1CQUFPLENBQUMsSUFBZTtBQUN4Qyw2QkFBNkIsbUJBQU8sQ0FBQyxLQUEwQjtBQUMvRCwrQ0FBK0MsbUJBQU8sQ0FBQyxLQUE0QztBQUNuRywyQ0FBMkMsbUJBQU8sQ0FBQyxLQUFzQjtBQUN6RSxrREFBa0QsbUJBQU8sQ0FBQyxLQUE2QjtBQUN2RjtBQUNBO0FBQ0EsVUFBVSw2RkFBNkY7QUFDdkcsVUFBVSxtRkFBbUY7QUFDN0Y7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZix3REFBd0QsMEVBQTBFLDZDQUE2Qyx3REFBd0Qsd0hBQXdILEdBQUcsa0NBQWtDLDBEQUEwRDtBQUM5YjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG1CQUFtQixLQUFLO0FBQ3hCOzs7Ozs7OztBQ2pFYTtBQUNiO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDRCQUE0QixHQUFHLDBCQUEwQjtBQUN6RDtBQUNBLGdCQUFnQixnQ0FBZ0M7QUFDaEQ7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZ0JBQWdCLGdDQUFnQztBQUNoRDtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0JBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUNBQWlDO0FBQ2pDLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0Esa0JBQWU7Ozs7Ozs7O0FDdEVGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7O0FDNUNGO0FBQ2I7QUFDQTtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0I7QUFDdEIsOEJBQThCLG1CQUFPLENBQUMsS0FBTztBQUM3QyxpQkFBaUIsbUJBQU8sQ0FBQyxJQUFlO0FBQ3hDLG1EQUFtRCxtQkFBTyxDQUFDLEtBQTRCO0FBQ3ZGLGNBQWMsbUJBQU8sQ0FBQyxLQUFtQjtBQUN6QyxlQUFlLG1CQUFPLENBQUMsS0FBb0M7QUFDM0Qsa0RBQWtELG1CQUFPLENBQUMsS0FBK0M7QUFDekcsaURBQWlELG1CQUFPLENBQUMsS0FBOEM7QUFDdkcsbUNBQW1DLG1CQUFPLENBQUMsS0FBYztBQUN6RCx5QkFBeUIsbUJBQU8sQ0FBQyxJQUFrQjtBQUNuRCw0Q0FBNEMsbUJBQU8sQ0FBQyxLQUF5QztBQUM3RixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsZUFBZSxtQkFBbUIsZ0NBQWdDO0FBQy9ILG1FQUFtRSw0REFBNEQsd0JBQXdCO0FBQ3ZKLDREQUE0RCx3QkFBd0IsNENBQTRDO0FBQ2hJO0FBQ0EsbUZBQW1GLHdCQUF3QixZQUFZLGdCQUFnQixHQUFHO0FBQzFJLGdFQUFnRSxlQUFlLHVDQUF1QztBQUN0SCwyRUFBMkUsb0JBQW9CO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRixnVkFBZ1Ysd0NBQXdDLHlEQUF5RCxrREFBa0QsS0FBSztBQUMxakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLGdWQUFnVixrQ0FBa0MseURBQXlELHVCQUF1QixtQkFBbUIsZ0NBQWdDO0FBQ3ZrQixtRUFBbUUsNERBQTRELHdCQUF3QjtBQUN2Siw0REFBNEQsZUFBZSxjQUFjLG9DQUFvQztBQUM3SDtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBLCtHQUErRyxjQUFjLCtCQUErQjtBQUM1SixnRUFBZ0UsZUFBZSx1Q0FBdUM7QUFDdEgsMkVBQTJFLG9CQUFvQiwyQkFBMkI7QUFDMUg7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLDBDQUEwQyxvREFBb0QsMENBQTBDO0FBQ25PO0FBQ0Esa0JBQWU7Ozs7Ozs7O0FDMUZGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7O0FDbkJGO0FBQ2I7QUFDQTtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlLG1CQUFPLENBQUMsSUFBc0I7QUFDN0Msd0NBQXdDLG1CQUFPLENBQUMsS0FBbUI7QUFDbkUsc0NBQXNDLG1CQUFPLENBQUMsS0FBaUI7QUFDL0Qsa0NBQWtDLG1CQUFPLENBQUMsSUFBd0I7QUFDbEUscUNBQXFDLG1CQUFPLENBQUMsS0FBMkI7QUFDeEUsZ0NBQWdDLG1CQUFPLENBQUMsS0FBc0I7QUFDOUQsb0NBQW9DLG1CQUFPLENBQUMsR0FBMEI7QUFDdEUsa0NBQWtDLG1CQUFPLENBQUMsS0FBd0I7QUFDbEUscUJBQXFCLG1CQUFPLENBQUMsS0FBMkI7QUFDeEQsdUNBQXVDLG1CQUFPLENBQUMsS0FBNkI7QUFDNUUsbUVBQW1FLDBEQUEwRCxzRkFBc0Y7QUFDbk47QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxrQkFBZTs7Ozs7Ozs7QUNqQ0Y7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxjQUFjO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkIsbUJBQU8sQ0FBQyxLQUFPO0FBQzFDLDZCQUE2QixtQkFBTyxDQUFDLEtBQW9CO0FBQ3pELHFCQUFxQixtQkFBTyxDQUFDLEtBQXFDO0FBQ2xFLDhDQUE4QyxtQkFBTyxDQUFDLEtBQXdDO0FBQzlGLHFDQUFxQyxtQkFBTyxDQUFDLEtBQXNDO0FBQ25GO0FBQ0E7QUFDQSxtREFBbUQsbUJBQW1CO0FBQ3RFLHdEQUF3RCx1REFBdUQsZ0JBQWdCO0FBQy9ILG9FQUFvRSx5REFBeUQ7QUFDN0gsaUZBQWlGLDZIQUE2SDtBQUM5TSxvRUFBb0UsMERBQTBEO0FBQzlILGlGQUFpRiw2SEFBNkg7QUFDOU07QUFDQSxrQkFBZTs7Ozs7Ozs7QUNwREY7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxjQUFjO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkIsbUJBQU8sQ0FBQyxLQUFPO0FBQzFDLGlCQUFpQixtQkFBTyxDQUFDLElBQWU7QUFDeEMsaUNBQWlDLG1CQUFPLENBQUMsS0FBcUI7QUFDOUQscUNBQXFDLG1CQUFPLENBQUMsS0FBNEI7QUFDekUsNENBQTRDLG1CQUFPLENBQUMsS0FBMEM7QUFDOUYscUNBQXFDLG1CQUFPLENBQUMsS0FBbUM7QUFDaEYsa0JBQWtCLG1CQUFPLENBQUMsS0FBZ0M7QUFDMUQsb0NBQW9DLG1CQUFPLENBQUMsS0FBa0M7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLG1CQUFtQjtBQUMxRjtBQUNBLHVFQUF1RSxlQUFlO0FBQ3RGLDZEQUE2RCxzREFBc0Q7QUFDbkgsZ0ZBQWdGLGdHQUFnRztBQUNoTCw0RUFBNEUsb0RBQW9EO0FBQ2hJLGFBQWE7QUFDYjtBQUNBLGtCQUFlOzs7Ozs7OztBQ3pERjtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMENBQTBDLDRCQUE0QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGNBQWM7QUFDekU7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDJCQUEyQixtQkFBTyxDQUFDLEtBQU87QUFDMUMsNkJBQTZCLG1CQUFPLENBQUMsS0FBb0I7QUFDekQsaUJBQWlCLG1CQUFPLENBQUMsSUFBZTtBQUN4Qyx5QkFBeUIsbUJBQU8sQ0FBQyxJQUFrQjtBQUNuRCxxQ0FBcUMsbUJBQU8sQ0FBQyxLQUErQjtBQUM1RSxxQkFBcUIsbUJBQU8sQ0FBQyxLQUFxQztBQUNsRSxxQ0FBcUMsbUJBQU8sQ0FBQyxLQUFzQztBQUNuRixrQkFBa0IsbUJBQU8sQ0FBQyxLQUFtQztBQUM3RCxvQ0FBb0MsbUJBQU8sQ0FBQyxLQUFxQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLG1CQUFtQjtBQUNsRSxtRUFBbUUsb0RBQW9EO0FBQ3ZILHVFQUF1RSxlQUFlO0FBQ3RGLDREQUE0RCx1REFBdUQ7QUFDbkgsZ0ZBQWdGLCtIQUErSDtBQUMvTSw0RUFBNEUsb0JBQW9CO0FBQ2hHLGFBQWE7QUFDYjtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7O0FDN0RGO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEMsNEJBQTRCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsY0FBYztBQUN6RTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsMkJBQTJCLG1CQUFPLENBQUMsS0FBTztBQUMxQyw2QkFBNkIsbUJBQU8sQ0FBQyxLQUFvQjtBQUN6RCxvQ0FBb0MsbUJBQU8sQ0FBQyxLQUEyQjtBQUN2RSxtQ0FBbUMsbUJBQU8sQ0FBQyxLQUEwQjtBQUNyRSw2QkFBNkIsbUJBQU8sQ0FBQyxLQUFvQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHdEQUF3RCxRQUFRLGdCQUFnQixRQUFRLGlCQUFpQjtBQUN6Ryw0REFBNEQscUJBQXFCO0FBQ2pGO0FBQ0EsMEVBQTBFLHVDQUF1QyxTQUFTO0FBQzFILDBFQUEwRSxrQkFBa0I7QUFDNUYscUZBQXFGLFFBQVE7QUFDN0YscUJBQXFCO0FBQ3JCO0FBQ0Esa0JBQWU7Ozs7Ozs7O0FDNURGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0Esa0JBQWU7Ozs7Ozs7OztBQ2pCZjs7Ozs7Ozs7QUNBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7OztBQ3ZDRjtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDhCQUE4QixtQkFBTyxDQUFDLEtBQU87QUFDN0MsaUJBQWlCLG1CQUFPLENBQUMsSUFBZTtBQUN4Qyw0Q0FBNEMsbUJBQU8sQ0FBQyxLQUEwQztBQUM5RjtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsZUFBZTtBQUNsRixtRUFBbUUsa0JBQWtCO0FBQ3JGLG1FQUFtRSxrQkFBa0I7QUFDckY7QUFDQSxrQkFBZTs7Ozs7Ozs7QUNmRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7O0FDbkNGO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCLG1CQUFPLENBQUMsS0FBTztBQUM3Qyx5QkFBeUIsbUJBQU8sQ0FBQyxJQUFrQjtBQUNuRCxtQkFBTyxDQUFDLEtBQXlCO0FBQ2pDLGlCQUFpQixtQkFBTyxDQUFDLElBQWU7QUFDeEMsNENBQTRDLG1CQUFPLENBQUMsS0FBMEM7QUFDOUYsb0NBQW9DLG1CQUFPLENBQUMsS0FBa0M7QUFDOUU7QUFDQTtBQUNBLHVFQUF1RSxpQ0FBaUM7QUFDeEc7QUFDQSx1RUFBdUUsZUFBZTtBQUN0RjtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7O0FDbEJGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7QUM3Q0Y7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0Esa0JBQWU7Ozs7Ozs7O0FDWEY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7QUNwRUY7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxjQUFjO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkIsbUJBQU8sQ0FBQyxLQUFPO0FBQzFDLGlCQUFpQixtQkFBTyxDQUFDLElBQWU7QUFDeEMsK0JBQStCLG1CQUFPLENBQUMsS0FBNEI7QUFDbkUsaUNBQWlDLG1CQUFPLENBQUMsS0FBOEI7QUFDdkUsOEJBQThCLG1CQUFPLENBQUMsS0FBMkI7QUFDakUsY0FBYyxtQkFBTyxDQUFDLEtBQW1CO0FBQ3pDLGVBQWUsbUJBQU8sQ0FBQyxLQUFvQztBQUMzRCw0Q0FBNEMsbUJBQU8sQ0FBQyxLQUEwQztBQUM5RixtQ0FBbUMsbUJBQU8sQ0FBQyxLQUEwQjtBQUNyRSxxQ0FBcUMsbUJBQU8sQ0FBQyxLQUFtQztBQUNoRixrQkFBa0IsbUJBQU8sQ0FBQyxLQUFnQztBQUMxRCxvQ0FBb0MsbUJBQU8sQ0FBQyxLQUFrQztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLE1BQU0sa0dBQWtHO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxtQkFBbUI7QUFDMUY7QUFDQSx1RUFBdUUsZUFBZTtBQUN0Riw2REFBNkQsMENBQTBDLDJCQUEyQjtBQUNsSSxnRkFBZ0Ysa0lBQWtJO0FBQ2xOLHFFQUFxRSxjQUFjLHlDQUF5QztBQUM1SCxtRkFBbUYsK0RBQStEO0FBQ2xKLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQSx1RkFBdUYsa0JBQWtCO0FBQ3pHLGFBQWE7QUFDYiw2REFBNkQsd0RBQXdELHNCQUFzQjtBQUMzSSx3RUFBd0UsMEdBQTBHO0FBQ2xMLDJFQUEyRSxlQUFlO0FBQzFGLHdFQUF3RSxzR0FBc0c7QUFDOUsscUVBQXFFLE1BQU0sK0NBQStDO0FBQzFILHlFQUF5RTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsbUZBQW1GO0FBQ25GO0FBQ0EsMEVBQTBFO0FBQzFFLG1GQUFtRixrQkFBa0I7QUFDckc7QUFDQSxrQkFBZTs7Ozs7Ozs7QUNsR0Y7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQyxLQUFPO0FBQzdDLDZCQUE2QixtQkFBTyxDQUFDLEtBQW9CO0FBQ3pELHVDQUF1QyxtQkFBTyxDQUFDLEtBQThCO0FBQzdFLG9DQUFvQyxtQkFBTyxDQUFDLEtBQTJCO0FBQ3ZFLHlCQUF5QixtQkFBTyxDQUFDLElBQWtCO0FBQ25ELG1DQUFtQyxtQkFBTyxDQUFDLEtBQTBCO0FBQ3JFLHNDQUFzQyxtQkFBTyxDQUFDLEtBQW1DO0FBQ2pGLG9DQUFvQyxtQkFBTyxDQUFDLEtBQWlDO0FBQzdFLHFCQUFxQixtQkFBTyxDQUFDLEtBQWtDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxNQUFNLGlCQUFpQjtBQUNuRixrRUFBa0UsOERBQThEO0FBQ2hJLHVIQUF1SCxpQkFBaUIsK0RBQStELGlCQUFpQjtBQUN4TjtBQUNBLHNFQUFzRSxxREFBcUQ7QUFDM0gsc0VBQXNFLHdCQUF3QiwyQkFBMkI7QUFDekg7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxrQkFBZTs7Ozs7Ozs7QUNoQ0Y7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxjQUFjO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx5QkFBeUIsbUJBQU8sQ0FBQyxLQUFPO0FBQ3hDLGlCQUFpQixtQkFBTyxDQUFDLElBQWU7QUFDeEMsd0NBQXdDLG1CQUFPLENBQUMsS0FBcUM7QUFDckYseUNBQXlDLG1CQUFPLENBQUMsS0FBc0M7QUFDdkYsc0RBQXNELG1CQUFPLENBQUMsS0FBbUQ7QUFDakg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrSEFBa0g7QUFDbEwsdURBQXVELDZDQUE2QztBQUNwRztBQUNBLHVEQUF1RCw0Q0FBNEM7QUFDbkc7QUFDQSx1REFBdUQsMENBQTBDO0FBQ2pHO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7QUN4REY7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxjQUFjO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx5QkFBeUIsbUJBQU8sQ0FBQyxLQUFPO0FBQ3hDLGlCQUFpQixtQkFBTyxDQUFDLElBQWU7QUFDeEMsa0NBQWtDLG1CQUFPLENBQUMsS0FBK0I7QUFDekUsa0NBQWtDLG1CQUFPLENBQUMsS0FBK0I7QUFDekUscUNBQXFDLG1CQUFPLENBQUMsS0FBa0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSw0R0FBNEc7QUFDNUssdURBQXVELGlEQUFpRDtBQUN4RztBQUNBLHVEQUF1RCx1REFBdUQ7QUFDOUc7QUFDQSx1REFBdUQsbURBQW1EO0FBQzFHO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7QUN4REY7QUFDYjtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDhCQUE4QixtQkFBTyxDQUFDLEtBQU87QUFDN0MsaUNBQWlDLG1CQUFPLENBQUMsSUFBd0I7QUFDakUsbUJBQU8sQ0FBQyxLQUF3QjtBQUNoQyxpQkFBaUIsbUJBQU8sQ0FBQyxJQUFlO0FBQ3hDLGtCQUFrQixtQkFBTyxDQUFDLElBQTZCO0FBQ3ZELDhCQUE4QixtQkFBTyxDQUFDLEtBQWM7QUFDcEQ7QUFDQSw2REFBNkQsdUNBQXVDO0FBQ3BHLHdEQUF3RCxnQ0FBZ0M7QUFDeEYsbUVBQW1FLHFCQUFxQix3Q0FBd0M7QUFDaEksNERBQTRELHNDQUFzQztBQUNsRyx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix1RUFBdUUsK0RBQStELG9EQUFvRDtBQUMxTCw0REFBNEQscUNBQXFDO0FBQ2pHLDRFQUE0RSxrQ0FBa0Msb0NBQW9DLGVBQWUsZ0JBQWdCLHNDQUFzQztBQUN2TjtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7O0FDcENGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBZTs7Ozs7Ozs7QUNyQ0Y7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7QUNqREY7QUFDYjtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMENBQTBDLDRCQUE0QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGNBQWM7QUFDekU7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFlO0FBQ2YsMkJBQTJCLG1CQUFPLENBQUMsS0FBTztBQUMxQyw0QkFBNEIsbUJBQU8sQ0FBQyxLQUFtQjtBQUN2RCxtQ0FBbUMsbUJBQU8sQ0FBQyxLQUEwQjtBQUNyRSw4QkFBOEIsbUJBQU8sQ0FBQyxJQUFxQjtBQUMzRCx5QkFBeUIsbUJBQU8sQ0FBQyxJQUFrQjtBQUNuRCxpQkFBaUIsbUJBQU8sQ0FBQyxJQUFlO0FBQ3hDLG1EQUFtRCxtQkFBTyxDQUFDLEtBQTRCO0FBQ3ZGLGNBQWMsbUJBQU8sQ0FBQyxLQUFtQjtBQUN6QyxlQUFlLG1CQUFPLENBQUMsS0FBb0M7QUFDM0Qsa0RBQWtELG1CQUFPLENBQUMsS0FBK0M7QUFDekcsaURBQWlELG1CQUFPLENBQUMsS0FBOEM7QUFDdkcsNENBQTRDLG1CQUFPLENBQUMsS0FBeUM7QUFDN0YsbUNBQW1DLG1CQUFPLENBQUMsS0FBYztBQUN6RCx3QkFBd0IsbUJBQU8sQ0FBQyxLQUFtQjtBQUNuRCx5Q0FBeUMsbUJBQU8sQ0FBQyxLQUEyQjtBQUM1RSw0Q0FBNEMsbUJBQU8sQ0FBQyxLQUE4QjtBQUNsRixvQ0FBb0MsbUJBQU8sQ0FBQyxLQUFzQjtBQUNsRSxpQ0FBaUMsdUNBQXVDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUJBQXlCLGVBQWU7QUFDeEM7QUFDQSw2REFBNkQsK0pBQStKO0FBQzVOO0FBQ0EsMkRBQTJELHdCQUF3QixzQkFBc0IseURBQXlELEdBQUc7QUFDckssK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qiw0RUFBNEU7QUFDNUU7QUFDQSwyQkFBMkI7QUFDM0IsOEVBQThFLDZFQUE2RTtBQUMzSiw4RUFBOEUsOENBQThDLDJCQUEyQjtBQUN2Six5RUFBeUUsaUdBQWlHLG9DQUFvQyw4REFBOEQsc0RBQXNELDJCQUEyQixVQUFVO0FBQ3ZXLHVFQUF1RSxNQUFNLHNCQUFzQjtBQUNuRyxrRkFBa0Ysa0JBQWtCO0FBQ3BHLGtGQUFrRixrQkFBa0I7QUFDcEcsK0RBQStELHFCQUFxQix5REFBeUQ7QUFDN0ksMEZBQTBGLCtUQUErVDtBQUN6WiwrREFBK0QseURBQXlELHVCQUF1QixxQkFBcUIsMENBQTBDO0FBQzlNLDJFQUEyRSxlQUFlLG1CQUFtQiw4Q0FBOEM7QUFDM0osdUZBQXVGO0FBQ3ZGO0FBQ0E7QUFDQSxtRUFBbUUsY0FBYztBQUNqRjtBQUNBLHVDQUF1QztBQUN2QywrRUFBK0UsZUFBZSxpREFBaUQ7QUFDL0ksMEZBQTBGLG9CQUFvQiwwQkFBMEI7QUFDeEksb0RBQW9ELHlEQUF5RCx1QkFBdUIscUJBQXFCLDBDQUEwQztBQUNuTSwyRUFBMkUsZUFBZSxtQkFBbUIsOENBQThDO0FBQzNKLCtGQUErRixNQUFNLDBDQUEwQztBQUMvSSwrRUFBK0UsZUFBZSxpREFBaUQ7QUFDL0ksMEZBQTBGLG9CQUFvQiw0Q0FBNEM7QUFDMUo7Ozs7Ozs7O0FDdklhO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCLG1CQUFPLENBQUMsS0FBTztBQUM3QyxvQ0FBb0MsbUJBQU8sQ0FBQyxLQUFrQztBQUM5RSxpQkFBaUIsbUJBQU8sQ0FBQyxJQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxlQUFlO0FBQ2xGO0FBQ0Esa0JBQWU7Ozs7Ozs7O0FDYkY7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxjQUFjO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx5QkFBeUIsbUJBQU8sQ0FBQyxLQUFPO0FBQ3hDLDhCQUE4QixtQkFBTyxDQUFDLEtBQXFCO0FBQzNELGtCQUFrQixtQkFBTyxDQUFDLEtBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG1EQUFtRCx3SkFBd0o7QUFDM007QUFDQTtBQUNBLGtCQUFlOzs7Ozs7OztBQ3hFRjtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMENBQTBDLDRCQUE0QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGNBQWM7QUFDekU7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx5QkFBeUIsbUJBQU8sQ0FBQyxLQUFPO0FBQ3hDLGlCQUFpQixtQkFBTyxDQUFDLElBQWU7QUFDeEMsb0JBQW9CLG1CQUFPLENBQUMsS0FBc0I7QUFDbEQ7QUFDQTtBQUNBLHdEQUF3RCx3Q0FBd0M7QUFDaEcsd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNHQUFzRyxpQ0FBaUM7QUFDcEo7QUFDQSxrQkFBZTs7Ozs7Ozs7QUNqREY7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQyxLQUFPO0FBQzdDLCtCQUErQixtQkFBTyxDQUFDLElBQWtCO0FBQ3pELHlCQUF5QixtQkFBTyxDQUFDLElBQWtCO0FBQ25ELGVBQWUsbUJBQU8sQ0FBQyxJQUFzQjtBQUM3QyxpQkFBaUIsbUJBQU8sQ0FBQyxJQUFlO0FBQ3hDLDRCQUE0QixtQkFBTyxDQUFDLEtBQWtCO0FBQ3RELDhCQUE4QixtQkFBTyxDQUFDLEtBQWE7QUFDbkQsbUJBQU8sQ0FBQyxLQUFvQjtBQUM1QjtBQUNBO0FBQ0Esc0VBQXNFLGVBQWU7QUFDckYsZ0VBQWdFLDJEQUEyRDtBQUMzSDtBQUNBOzs7Ozs7OztBQ2xCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0Esa0JBQWU7Ozs7Ozs7O0FDaERGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQixtQkFBTyxDQUFDLEtBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsV0FBaUM7QUFDNUQsYUFBYTtBQUNiLG1CQUFtQixjQUFjO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7QUNmRjtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMENBQTBDLDRCQUE0QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGNBQWM7QUFDekU7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkIsbUJBQU8sQ0FBQyxLQUFPO0FBQzFDLHlCQUF5QixtQkFBTyxDQUFDLElBQWtCO0FBQ25ELGlCQUFpQixtQkFBTyxDQUFDLElBQWU7QUFDeEMsOENBQThDLDRDQUE0QyxvQkFBb0IsbUJBQU8sQ0FBQyxLQUFrQixLQUFLLElBQUk7QUFDakosOENBQThDLDRDQUE0QyxvQkFBb0IsbUJBQU8sQ0FBQyxLQUFrQixLQUFLLElBQUk7QUFDakosbURBQW1ELDRDQUE0QyxvQkFBb0IsbUJBQU8sQ0FBQyxLQUF1QixLQUFLLElBQUk7QUFDM0osd0RBQXdELDRDQUE0QyxvQkFBb0IsbUJBQU8sQ0FBQyxJQUFxQixLQUFLLElBQUk7QUFDOUosZ0RBQWdELDRDQUE0QyxvQkFBb0IsbUJBQU8sQ0FBQyxJQUF5QixLQUFLLElBQUk7QUFDMUosOENBQThDLDRDQUE0QyxvQkFBb0IsbUJBQU8sQ0FBQyxLQUFrQixLQUFLLElBQUk7QUFDakosK0NBQStDLDRDQUE0QyxvQkFBb0IsbUJBQU8sQ0FBQyxLQUFtQixLQUFLLElBQUk7QUFDbkosZ0RBQWdELDRDQUE0QyxvQkFBb0IsbUJBQU8sQ0FBQyxLQUE2QixLQUFLLElBQUk7QUFDOUosK0NBQStDLDRDQUE0QyxvQkFBb0IsbUJBQU8sQ0FBQyxLQUE0QixLQUFLLElBQUk7QUFDNUosK0NBQStDLDRDQUE0QyxvQkFBb0IsbUJBQU8sQ0FBQyxJQUE0QixLQUFLLElBQUk7QUFDNUosOENBQThDLDRDQUE0QyxvQkFBb0IsbUJBQU8sQ0FBQyxLQUFnQixLQUFLLElBQUk7QUFDL0ksOENBQThDLDRDQUE0QyxvQkFBb0IsbUJBQU8sQ0FBQyxLQUFrQixLQUFLLElBQUk7QUFDakosMkRBQTJELDRDQUE0QyxvQkFBb0IsbUJBQU8sQ0FBQyxLQUFvQyxLQUFLLElBQUk7QUFDaEwscUJBQXFCLG1CQUFPLENBQUMsS0FBa0M7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw0REFBNEQsa0JBQWtCO0FBQzlFO0FBQ0EsMERBQTBELHdEQUF3RDtBQUNsSDtBQUNBLDREQUE0RCxpRkFBaUY7QUFDN0ksMkVBQTJFLGtDQUFrQztBQUM3Ryw4RUFBOEUsa0VBQWtFO0FBQ2hKLDhFQUE4RSxzRUFBc0U7QUFDcEosOEVBQThFLDBFQUEwRTtBQUN4SixrRkFBa0Ysc0VBQXNFO0FBQ3hKLGtGQUFrRiwwRUFBMEU7QUFDNUosa0ZBQWtGLDBGQUEwRix5Q0FBeUMsR0FBRztBQUN4TixrRkFBa0YsMEVBQTBFO0FBQzVKLGtGQUFrRiwwRkFBMEYseUNBQXlDLEdBQUc7QUFDeE4sOEVBQThFLHdFQUF3RTtBQUN0Siw4RUFBOEUsd0VBQXdFO0FBQ3RKLDhFQUE4RSx1RUFBdUU7QUFDcko7QUFDQSxpRkFBaUYsa0VBQWtFLHFIQUFxSCxZQUFZLEdBQUcsS0FBSztBQUM1UixpRkFBaUYsa0VBQWtFLHFIQUFxSCxZQUFZLEdBQUcsS0FBSztBQUM1UjtBQUNBLGtCQUFlOzs7Ozs7OztBQ2xGRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7O0FDakJGO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEMsNEJBQTRCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsY0FBYztBQUN6RTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QseUJBQXlCLG1CQUFPLENBQUMsS0FBTztBQUN4Qyw2QkFBNkIsbUJBQU8sQ0FBQyxLQUFvQjtBQUN6RCxrQkFBa0IsbUJBQU8sQ0FBQyxLQUFhO0FBQ3ZDLGlCQUFpQixtQkFBTyxDQUFDLElBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDZCQUE2QjtBQUM3QixLQUFLO0FBQ0wsa0RBQWtELHlIQUF5SCxtRUFBbUU7QUFDOU87QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7QUN0RGY7Ozs7Ozs7O0FDQWE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx5QkFBeUIsR0FBRyxtQkFBbUI7QUFDL0MsaUNBQWlDLG1CQUFPLENBQUMsS0FBcUI7QUFDOUQsa0NBQWtDLG1CQUFPLENBQUMsS0FBc0I7QUFDaEUsbUNBQW1DLG1CQUFPLENBQUMsS0FBdUI7QUFDbEUsaUNBQWlDLG1CQUFPLENBQUMsS0FBcUI7QUFDOUQsdUNBQXVDLG1CQUFPLENBQUMsS0FBMkI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsbUJBQU8sQ0FBQyxLQUE0QjtBQUM1RSxzREFBc0QsbUJBQU8sQ0FBQyxLQUEwQztBQUN4RyxtQ0FBbUMsbUJBQU8sQ0FBQyxJQUF1QjtBQUNsRSwwQ0FBMEMsbUJBQU8sQ0FBQyxLQUE4QjtBQUNoRiw4Q0FBOEMsbUJBQU8sQ0FBQyxJQUFrQztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3QkFBd0IseUJBQXlCLHlCQUF5QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7Ozs7Ozs7QUN2Q047QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6QmE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQyxLQUFPO0FBQzdDLGlCQUFpQixtQkFBTyxDQUFDLElBQWU7QUFDeEMsNENBQTRDLG1CQUFPLENBQUMsS0FBMEM7QUFDOUY7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLGtCQUFrQjtBQUNyRjtBQUNBLGtCQUFlOzs7Ozs7Ozs7QUNiZjs7Ozs7Ozs7QUNBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBZTs7Ozs7Ozs7QUNwREY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7QUM3QkY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsMEJBQTBCLEdBQUcsb0JBQW9CO0FBQ2pELG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQSwrQ0FBK0MsdUNBQXVDLCtCQUErQiw2QkFBNkIsK0JBQStCLCtCQUErQix1SkFBdUosbUxBQW1MLFdBQVcsd0JBQXdCLHVDQUF1QywrQkFBK0IsNkJBQTZCLCtCQUErQixxSUFBcUksbUxBQW1MLFdBQVcsd0JBQXdCLDJDQUEyQywrQkFBK0IsNkJBQTZCLCtCQUErQiwySEFBMkgsbUxBQW1MLFdBQVcsd0NBQXdDLGlDQUFpQywrQkFBK0IsNkJBQTZCLCtCQUErQix5SUFBeUksbUxBQW1MLFdBQVcsd0JBQXdCLGlDQUFpQywrQkFBK0IsNkJBQTZCLDBIQUEwSCxtTEFBbUwsV0FBVztBQUNqM0UsS0FBSztBQUNMO0FBQ0Esa0JBQWU7Ozs7Ozs7O0FDUEY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7QUM1Q0Y7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7O0FDakJGO0FBQ2I7QUFDQTtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGNBQWM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDhCQUE4QixtQkFBTyxDQUFDLEtBQU87QUFDN0MsNkJBQTZCLG1CQUFPLENBQUMsS0FBb0I7QUFDekQsb0NBQW9DLG1CQUFPLENBQUMsS0FBMkI7QUFDdkUsbUNBQW1DLG1CQUFPLENBQUMsS0FBMEI7QUFDckUsa0NBQWtDLG1CQUFPLENBQUMsS0FBeUI7QUFDbkUsZUFBZSxtQkFBTyxDQUFDLElBQXNCO0FBQzdDLG1DQUFtQyxtQkFBTyxDQUFDLEtBQTBCO0FBQ3JFLG1DQUFtQyxtQkFBTyxDQUFDLEtBQWdDO0FBQzNFLGlCQUFpQixtQkFBTyxDQUFDLElBQWU7QUFDeEMsd0NBQXdDLG1CQUFPLENBQUMsS0FBbUI7QUFDbkUsa0JBQWtCLG1CQUFPLENBQUMsS0FBb0I7QUFDOUMseUJBQXlCLG1CQUFPLENBQUMsSUFBa0I7QUFDbkQ7QUFDQSxrRUFBa0U7QUFDbEUsMEVBQTBFO0FBQzFFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGVBQWUsYUFBYTtBQUN4Riw2REFBNkQsTUFBTSxrQkFBa0I7QUFDckYsdUVBQXVFLDZDQUE2Qyx1QkFBdUIsZUFBZTtBQUMxSiwrREFBK0QsTUFBTSx3QkFBd0I7QUFDN0Ysa0VBQWtFLGlDQUFpQztBQUNuRyxrRUFBa0UsOENBQThDLDJCQUEyQjtBQUMzSSw2REFBNkQsaUdBQWlHO0FBQzlKLDhFQUE4RSxzREFBc0QsMkJBQTJCO0FBQy9KLGFBQWE7QUFDYixvRUFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsNERBQTRELG9HQUFvRztBQUNoSztBQUNBLDZEQUE2RCxvREFBb0Q7QUFDakg7QUFDQSxzRUFBc0Usa0JBQWtCO0FBQ3hGLHNFQUFzRSxrQkFBa0I7QUFDeEY7QUFDQSxrQkFBZTs7Ozs7Ozs7O0FDaEhmOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9tdWkvY29tcG9uZW50cy9tdWlNZW51SXRlbS50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL0dsb2JhbE5hdi50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9wYWdlcy9wcm9qZWN0cy9QZXJzb25hbC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL05hdkxpbmtzLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbnRlbnQvcHJvamVjdHMvYWNhZGVtaWMvYW50bGlvbi10b3dlci1kZWZlbnNlLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tT3B0aW9uc0RpYWwudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvbXVpL2NvbXBvbmVudHMvbXVpQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbnRlbnQvcHJvamVjdHMvYWNhZGVtaWMvbW90aW9uLWFydC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RDYXJvdXNlbC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb250ZW50L3Byb2plY3RzL3BlcnNvbmFsL2Zvb2RwaWNrLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL211aS90aGVtZS50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9wYWdlcy9wcm9qZWN0cy9TZWxlY3Rpb24udHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvcGFnZXMvQWJvdXQudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvcGFnZXMvcHJvamVjdHMvQWNhZGVtaWMudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9Db250ZW50QmxvY2sudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvbXVpL2NvbXBvbmVudHMvbXVpQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9sYW5kaW5nLnNjc3M/YmI0ZiIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbnRlbnQvcHJvamVjdHMvYWNhZGVtaWMvcGxheWVyLXBlcmZvcm1hbmNlLXByb2plY3Rpb24udHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvcGFnZXMvRG9lc05vdEV4aXN0LnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbnRlbnQvcHJvamVjdHMvcGVyc29uYWwvZmFsbGluZy1ibG9ja3MudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvcGFnZXMvUHJvamVjdHMudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29udGVudC9wcm9qZWN0cy9wZXJzb25hbC9zcG9jaGktdjAudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvbXVpL2NvbXBvbmVudHMvbXVpTGlzdC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb250ZW50L3Byb2plY3RzL2FjYWRlbWljL2JvYmJ5cy1icmVha291dC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9wYWdlcy9Db250YWN0LnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFNlbGVjdGlvbkJsb2NrLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvVG9nZ2xlVGhlbWVCdXR0b25zLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvVG9nZ2xlSW1hZ2VRdWFsaXR5QnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9wYWdlcy9MYW5kaW5nLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbnRlbnQvYWJvdXQtbWUudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29udGVudC9wcm9qZWN0cy9wZXJzb25hbC93ZWJzaXRlLXYxLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdE1vZGFsQ2Fyb3VzZWwudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvcGFnZXMvTG9hZGluZy50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL3N0eWxlZC9TbGlkZVdyYXBwZXIudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9zdHlsZWQvU2Nyb2xsYWJsZUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9tdWkvbXVpQ29sb3JTY2hlbWVzLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvQ2xvdWRpbmFyeS50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL0FwcC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9tdWkvY29tcG9uZW50cy9tdWlEcmF3ZXIudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9zdHlsZWQvRmFkZVdyYXBwZXIudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL2dsb2JhbC1uYXYuc2Nzcz9hYzRkIiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29udGVudC9wcm9qZWN0cy9wcm9qZWN0LWxpc3QudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9zdHlsZWQvY29uc3RhbnRzLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL3BhZ2VzL0RlZmF1bHQudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL3Byb2plY3RzLnNjc3M/ZmI5MCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL211aS9tdWlUeXBvZ3JhcGh5LnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbnRlbnQvcHJvamVjdHMvcGVyc29uYWwvZ2dqLTIwMjAudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvbXVpL2NvbXBvbmVudHMvbXVpU3BlZWREaWFsLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL211aS9jb21wb25lbnRzL211aUNzc0Jhc2VsaW5lLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbnRlbnQvcHJvamVjdHMvYWNhZGVtaWMva2luZ2RvbS1vZi1oZWxpb3MudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvdXRpbHMvY29tcHV0ZU5vZGVTdHlsZS50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RCbG9jay50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvYmFzZS5zY3NzPzVmNTMiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbXVpTWVudUl0ZW0gPSB7XG4gICAgTXVpTWVudUl0ZW06IHtcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBtdWlNZW51SXRlbTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgICAgICAgICByZXR1cm4gYXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvd25LZXlzKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICAgICAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgaG9va3NfMSA9IHJlcXVpcmUoXCJtYXRlcmlhbC11aS1wb3B1cC1zdGF0ZS9ob29rc1wiKTtcbnZhciBNZW51VHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL01lbnVUd29Ub25lXCIpKTtcbnZhciBNZW51T3BlblR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9NZW51T3BlblR3b1RvbmVcIikpO1xudmFyIFN1YmRpcmVjdG9yeUFycm93UmlnaHRUd29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU3ViZGlyZWN0b3J5QXJyb3dSaWdodFR3b1RvbmVcIikpO1xudmFyIGNvbXB1dGVOb2RlU3R5bGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbHMvY29tcHV0ZU5vZGVTdHlsZVwiKSk7XG52YXIgbXVpQnV0dG9uXzEgPSByZXF1aXJlKFwiLi4vbXVpL2NvbXBvbmVudHMvbXVpQnV0dG9uXCIpO1xucmVxdWlyZShcIi4uL3N0eWxlcy9nbG9iYWwtbmF2LnNjc3NcIik7XG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9zdHlsZWQvY29uc3RhbnRzXCIpO1xudmFyIHJlYWN0X3R5cGVfYW5pbWF0aW9uXzEgPSByZXF1aXJlKFwicmVhY3QtdHlwZS1hbmltYXRpb25cIik7XG52YXIgU3R5bGVkQm94ID0gKDAsIG1hdGVyaWFsXzEuc3R5bGVkKShcImRpdlwiKShmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdGhlbWUgPSBfYS50aGVtZTtcbiAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnZhcnMucGFsZXR0ZS5iYWNrZ3JvdW5kLmdsb2JhbE5hdixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiM3B4XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRoZW1lLmFwcGx5U3R5bGVzKFwiZGFya1wiLCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnZhcnMucGFsZXR0ZS5iYWNrZ3JvdW5kLmdsb2JhbE5hdixcbiAgICAgICAgfSksXG4gICAgXTtcbn0pO1xudmFyIGdsb2JhbE5hdkRyYXdlckJ1dHRvblN0eWxlcyA9IHtcbiAgICB3aWR0aDogXCJtaW4tY29udGVudFwiLFxufTtcbnZhciBHbG9iYWxOYXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxvY2F0aW9uID0gKDAsIHJlYWN0X3JvdXRlcl9kb21fMS51c2VMb2NhdGlvbikoKTtcbiAgICB2YXIgX2EgPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoXCJcIiksIGN1cnJQYXRoID0gX2FbMF0sIHNldEN1cnJQYXRoID0gX2FbMV07XG4gICAgdmFyIF9iID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKCksIHN1YlBhdGggPSBfYlswXSwgc2V0U3ViUGF0aCA9IF9iWzFdO1xuICAgIHZhciBfYyA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgpLCBob3ZlclBhdGggPSBfY1swXSwgc2V0SG92ZXJQYXRoID0gX2NbMV07XG4gICAgdmFyIF9kID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFwiY2QgXCIpLCBob3ZlclRleHQgPSBfZFswXSwgc2V0SG92ZXJUZXh0ID0gX2RbMV07XG4gICAgdmFyIF9lID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKCksIGZ1bGxQYXRoID0gX2VbMF0sIHNldEZ1bGxQYXRoID0gX2VbMV07XG4gICAgdmFyIF9mID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKGZhbHNlKSwgc2hvd0NvbnRlbnQgPSBfZlswXSwgc2V0U2hvd0NvbnRlbnQgPSBfZlsxXTtcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09IFwiL1wiKSB7XG4gICAgICAgICAgICB2YXIgdGltZXJfMSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNldFNob3dDb250ZW50KHRydWUpO1xuICAgICAgICAgICAgfSwgY29uc3RhbnRzXzEuQU5JX0NPTlNULkdMT0JBTF9OQVZfTEFORElOR19ERUxBWSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xlYXJUaW1lb3V0KHRpbWVyXzEpOyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0U2hvd0NvbnRlbnQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgdmFyIF9nID0gcmVhY3RfMS5kZWZhdWx0LnVzZVN0YXRlKGZhbHNlKSwgb3BlbkRyYXdlciA9IF9nWzBdLCBzZXRPcGVuRHJhd2VyID0gX2dbMV07XG4gICAgdmFyIHRvZ2dsZURyYXdlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldE9wZW5EcmF3ZXIoIW9wZW5EcmF3ZXIpOyB9O1xuICAgIHZhciB0aGVtZSA9ICgwLCBtYXRlcmlhbF8xLnVzZVRoZW1lKSgpO1xuICAgIHZhciBpc01vYmlsZSA9ICgwLCBtYXRlcmlhbF8xLnVzZU1lZGlhUXVlcnkpKHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XG4gICAgdmFyIHBvcHVwU3RhdGUgPSAoMCwgaG9va3NfMS51c2VQb3B1cFN0YXRlKSh7XG4gICAgICAgIHZhcmlhbnQ6IFwicG9wb3ZlclwiLFxuICAgICAgICBwb3B1cElkOiBcImdsb2JhbE5hdlBvcHVwXCIsXG4gICAgfSk7XG4gICAgdmFyIF9oID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICB9KSwgZHJhd2VyUHJvamVjdEJ1dHRvbkRpbXMgPSBfaFswXSwgc2V0RHJhd2VyUHJvamVjdEJ1dHRvbkRpbXMgPSBfaFsxXTtcbiAgICB2YXIgZHJhd2VyUHJvamVjdEJ1dHRvblJlZiA9ICgwLCByZWFjdF8xLnVzZUNhbGxiYWNrKShmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIG5vZGVEaW1zID0gKDAsIGNvbXB1dGVOb2RlU3R5bGVfMS5kZWZhdWx0KShub2RlKTtcbiAgICAgICAgICAgIHNldERyYXdlclByb2plY3RCdXR0b25EaW1zKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogbm9kZURpbXMud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBub2RlRGltcy5oZWlnaHQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICB2YXIgX2ogPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoe1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgIH0pLCBob21lSWNvbkJ1dHRvbkRpbXMgPSBfalswXSwgc2V0SG9tZUljb25lQnV0dG9uRGltcyA9IF9qWzFdO1xuICAgIHZhciBob21lSWNvbkJ1dHRvblJlZiA9ICgwLCByZWFjdF8xLnVzZUNhbGxiYWNrKShmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIG5vZGVEaW1zID0gKDAsIGNvbXB1dGVOb2RlU3R5bGVfMS5kZWZhdWx0KShub2RlKTtcbiAgICAgICAgICAgIHNldEhvbWVJY29uZUJ1dHRvbkRpbXMoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiBub2RlRGltcy53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IG5vZGVEaW1zLmhlaWdodCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRPcGVuRHJhd2VyKGZhbHNlKTtcbiAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIikge1xuICAgICAgICAgICAgcG9wdXBTdGF0ZS5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5zdWJzdHJpbmcoMSkuaW5jbHVkZXMoXCIvXCIpKSB7XG4gICAgICAgICAgICBzZXRDdXJyUGF0aChsb2NhdGlvbi5wYXRobmFtZS5zdWJzdHJpbmcoMSkuc3BsaXQoXCIvXCIpWzBdKTtcbiAgICAgICAgICAgIHNldFN1YlBhdGgobG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDEpLnNwbGl0KFwiL1wiKVsxXSk7XG4gICAgICAgICAgICBzZXRIb3ZlclBhdGgobG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0Q3VyclBhdGgobG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgICAgIHNldFN1YlBhdGgobnVsbCk7XG4gICAgICAgICAgICBzZXRIb3ZlclBhdGgobG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRGdWxsUGF0aChsb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfSwgW2xvY2F0aW9uXSk7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChob3ZlclBhdGggPT0gXCJtZW51XCIpIHtcbiAgICAgICAgICAgIHNldEhvdmVyVGV4dChcImxzIC1SIH5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFob3ZlclBhdGgpIHtcbiAgICAgICAgICAgIHNldEhvdmVyVGV4dChcIlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3ViUGF0aCkge1xuICAgICAgICAgICAgaWYgKGhvdmVyUGF0aCA9PSBmdWxsUGF0aCkge1xuICAgICAgICAgICAgICAgIHNldEhvdmVyVGV4dChcImNkIC4vXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmdWxsUGF0aCA9PT0gbnVsbCB8fCBmdWxsUGF0aCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZnVsbFBhdGguaW5jbHVkZXMoaG92ZXJQYXRoKSkge1xuICAgICAgICAgICAgICAgIHNldEhvdmVyVGV4dChcImNkIC4uL1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaG92ZXJQYXRoICE9IGZ1bGxQYXRoKSB7XG4gICAgICAgICAgICAgICAgc2V0SG92ZXJUZXh0KFwiY2QgXCIgKyBob3ZlclBhdGgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChob3ZlclBhdGggPT0gZnVsbFBhdGgpIHtcbiAgICAgICAgICAgIHNldEhvdmVyVGV4dChcImNkIC4vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0SG92ZXJUZXh0KFwiY2QgXCIgKyBob3ZlclBhdGgpO1xuICAgICAgICB9XG4gICAgfSwgW2hvdmVyUGF0aF0pO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlNsaWRlLCB7IGluOiBzaG93Q29udGVudCwgdGltZW91dDogY29uc3RhbnRzXzEuQU5JX0NPTlNULkdMT0JBTF9OQVZfREVMQVkgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN0eWxlZEJveCwgeyBjbGFzc05hbWU6IFwiR2xvYmFsLW5hdlwiIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Cb3gsIHsgY2xhc3NOYW1lOiBcIkdsb2JhbC1uYXZfX3Jvb3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiB0b2dnbGVEcmF3ZXIgfSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMsIHsgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRIb3ZlclBhdGgoXCJtZW51XCIpOyB9IH0pLCBvcGVuRHJhd2VyID8gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTWVudU9wZW5Ud29Ub25lXzEuZGVmYXVsdCwgbnVsbCkgOiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChNZW51VHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5CdXR0b24sIF9fYXNzaWduKHsgcmVmOiBob21lSWNvbkJ1dHRvblJlZiwgY29tcG9uZW50OiByZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgdG86IFwiL1wiIH0sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLCB7IHN4OiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMuc3gpLCB7IHBhZGRpbmc6IDAgfSksIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0SG92ZXJQYXRoKFwiflwiKTsgfSB9KSwgXCJcXHVEODNDXFx1REZFMDovXCIpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBjb21wb25lbnQ6IHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rLCB0bzogY3VyclBhdGggfSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMsIHsgc3g6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcy5zeCksIHsgcGFkZGluZzogMCB9KSwgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRIb3ZlclBhdGgoXCIvXCIgKyBjdXJyUGF0aCk7IH0gfSksIGN1cnJQYXRoID09IFwiXCIgPyBcIlwiIDogY3VyclBhdGggKyBcIi9cIiksXG4gICAgICAgICAgICAgICAgICAgIHN1YlBhdGggJiYgKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQnV0dG9uLCBfX2Fzc2lnbih7IGNvbXBvbmVudDogcmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHRvOiBjdXJyUGF0aCArIFwiL1wiICsgc3ViUGF0aCB9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcywgeyBzeDogX19hc3NpZ24oX19hc3NpZ24oe30sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLnN4KSwgeyBwYWRkaW5nOiAwIH0pLCBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0SG92ZXJQYXRoKFwiL1wiICsgY3VyclBhdGggKyBcIi9cIiArIHN1YlBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSwgc3ViUGF0aCArIFwiL1wiKSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQnV0dG9uLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJOYXYtbGlua19fbm8tZXZlbnRzXCIgfSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMpLCBcIn4kXCIpLFxuICAgICAgICAgICAgICAgICAgICAhaXNNb2JpbGUgJiYgKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQnV0dG9uLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJOYXYtbGlua19fbm8tZXZlbnRzXCIgfSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMsIHsgc3g6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcy5zeCksIHsgY29sb3I6IHRoZW1lLnZhcnMucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsIHBhZGRpbmc6IFwiMCA1cHggMCAyNXB4XCIgfSkgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF90eXBlX2FuaW1hdGlvbl8xLlR5cGVBbmltYXRpb24sIHsga2V5OiBob3ZlclRleHQsIHNlcXVlbmNlOiBbaG92ZXJUZXh0LCA1MDBdLCBzcGVlZDogaG92ZXJUZXh0Lmxlbmd0aCA+IDggPyA1MCA6IDEgfSkpKSkpKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Td2lwZWFibGVEcmF3ZXIsIHsgYW5jaG9yOiBcInRvcFwiLCBvcGVuOiBvcGVuRHJhd2VyLCBvbkNsb3NlOiB0b2dnbGVEcmF3ZXIsIG9uT3BlbjogdG9nZ2xlRHJhd2VyLCBkaXNhYmxlU3dpcGVUb09wZW46IGZhbHNlLCBrZWVwTW91bnRlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkQm94LCB7IHN4OiB7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfSB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN0eWxlZEJveCwgeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHg6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBob21lSWNvbkJ1dHRvbkRpbXMud2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5CdXR0b24sIF9fYXNzaWduKHsgY29tcG9uZW50OiByZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgdG86IFwiL2Fib3V0XCIgfSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMsIHsgc3g6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcy5zeCksIGdsb2JhbE5hdkRyYXdlckJ1dHRvblN0eWxlcyksIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0SG92ZXJQYXRoKFwiL2Fib3V0XCIpOyB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ViZGlyZWN0b3J5QXJyb3dSaWdodFR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWJvdXRcIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQnV0dG9uLCBfX2Fzc2lnbih7IHJlZjogZHJhd2VyUHJvamVjdEJ1dHRvblJlZiwgY2xhc3NOYW1lOiBcIk5hdi1saW5rX19uby1ldmVudHNcIiB9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcywgKDAsIGhvb2tzXzEuYmluZFRyaWdnZXIpKHBvcHVwU3RhdGUpLCB7IHN4OiBfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMuc3gpLCBnbG9iYWxOYXZEcmF3ZXJCdXR0b25TdHlsZXMpLCB7IGNvbG9yOiB0aGVtZS52YXJzLnBhbGV0dGUucHJpbWFyeS5kYXJrIH0pLCBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldEhvdmVyUGF0aChcIi9wcm9qZWN0c1wiKTsgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN1YmRpcmVjdG9yeUFycm93UmlnaHRUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2plY3RzL1wiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5CdXR0b24sIF9fYXNzaWduKHsgY29tcG9uZW50OiByZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgdG86IFwiL3Byb2plY3RzXCIgfSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMsIHsgc3g6IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcy5zeCksIGdsb2JhbE5hdkRyYXdlckJ1dHRvblN0eWxlcyksIHsgbWFyZ2luTGVmdDogZHJhd2VyUHJvamVjdEJ1dHRvbkRpbXMud2lkdGggKyBcInB4XCIgfSksIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0SG92ZXJQYXRoKFwiL3Byb2plY3RzXCIpOyB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ViZGlyZWN0b3J5QXJyb3dSaWdodFR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLi9cIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQnV0dG9uLCBfX2Fzc2lnbih7IGNvbXBvbmVudDogcmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHRvOiBcIi9wcm9qZWN0cy9wZXJzb25hbFwiIH0sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLCB7IHN4OiBfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMuc3gpLCBnbG9iYWxOYXZEcmF3ZXJCdXR0b25TdHlsZXMpLCB7IG1hcmdpbkxlZnQ6IGRyYXdlclByb2plY3RCdXR0b25EaW1zLndpZHRoICsgXCJweFwiIH0pLCBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldEhvdmVyUGF0aChcIi9wcm9qZWN0cy9wZXJzb25hbFwiKTsgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN1YmRpcmVjdG9yeUFycm93UmlnaHRUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBlcnNvbmFsXCIpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBjb21wb25lbnQ6IHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rLCB0bzogXCIvcHJvamVjdHMvYWNhZGVtaWNcIiB9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcywgeyBzeDogX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oe30sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLnN4KSwgZ2xvYmFsTmF2RHJhd2VyQnV0dG9uU3R5bGVzKSwgeyBtYXJnaW5MZWZ0OiBkcmF3ZXJQcm9qZWN0QnV0dG9uRGltcy53aWR0aCArIFwicHhcIiB9KSwgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRIb3ZlclBhdGgoXCIvcHJvamVjdHMvYWNhZGVtaWNcIik7IH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTdWJkaXJlY3RvcnlBcnJvd1JpZ2h0VHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2FkZW1pY1wiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5CdXR0b24sIF9fYXNzaWduKHsgY29tcG9uZW50OiByZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgdG86IFwiL2NvbnRhY3RcIiB9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcywgeyBzeDogX19hc3NpZ24oX19hc3NpZ24oe30sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLnN4KSwgZ2xvYmFsTmF2RHJhd2VyQnV0dG9uU3R5bGVzKSwgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRIb3ZlclBhdGgoXCIvY29udGFjdFwiKTsgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN1YmRpcmVjdG9yeUFycm93UmlnaHRUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRhY3RcIikpKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBHbG9iYWxOYXY7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgICAgICAgICByZXR1cm4gYXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvd25LZXlzKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICAgICAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG52YXIgUHJvamVjdEJsb2NrXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvUHJvamVjdEJsb2NrXCIpKTtcbnZhciBwcm9qZWN0X2xpc3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb250ZW50L3Byb2plY3RzL3Byb2plY3QtbGlzdFwiKTtcbnZhciBTbGlkZVdyYXBwZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWQvU2xpZGVXcmFwcGVyXCIpKTtcbnZhciBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZC9jb25zdGFudHNcIik7XG52YXIgRmFkZVdyYXBwZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWQvRmFkZVdyYXBwZXJcIikpO1xudmFyIFBlcnNvbmFsID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb250YWluZXJSZWYgPSAoMCwgcmVhY3RfMS51c2VSZWYpKG51bGwpO1xuICAgIHZhciB0aGVtZSA9ICgwLCBtYXRlcmlhbF8xLnVzZVRoZW1lKSgpO1xuICAgIHZhciBhbmltYXRpb25CcmVha3BvaW50ID0gKDAsIG1hdGVyaWFsXzEudXNlTWVkaWFRdWVyeSkodGhlbWUuYnJlYWtwb2ludHMuZG93bihjb25zdGFudHNfMS5BTklfQ09OU1QuUFJPSl9ST1dfQlJFQUtQT0lOVCkpO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHJlZjogY29udGFpbmVyUmVmIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChGYWRlV3JhcHBlcl8xLmRlZmF1bHQsIHsgZGVsYXk6IGNvbnN0YW50c18xLkFOSV9DT05TVC5QUk9KX1NVQkhFQURJTkdfREVMQVkgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoNFwiIH0sIFwiUGVyc29uYWxfcHJvamVjdHNcIikpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5HcmlkLCB7IGNvbnRhaW5lcjogdHJ1ZSwgc3BhY2luZzogMiwgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIgfSwgcHJvamVjdF9saXN0XzEuUHJvamVjdExpc3RbcHJvamVjdF9saXN0XzEuUHJvamVjdENhdGVnb3JpZXMuUEVSU09OQUxdLm1hcChmdW5jdGlvbiAocHJvaiwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2xpZGVXcmFwcGVyXzEuZGVmYXVsdCwgeyBzbGlkZUZyb21SZWY6IGNvbnRhaW5lclJlZiwgZGVsYXk6IGkgKiBjb25zdGFudHNfMS5BTklfQ09OU1QuUFJPSl9DQVJEU19ERUxBWSwgZGlyZWN0aW9uOiBhbmltYXRpb25CcmVha3BvaW50ID8gXCJ1cFwiIDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHJvamVjdEJsb2NrXzEuZGVmYXVsdCwgeyBwcm9qOiBwcm9qLCBrZXk6IGkgfSkpKTtcbiAgICAgICAgICAgIH0pKSksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5PdXRsZXQsIG51bGwpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gUGVyc29uYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpO1xudmFyIGhvb2tzXzEgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWktcG9wdXAtc3RhdGUvaG9va3NcIik7XG52YXIgSG92ZXJNZW51XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1hdGVyaWFsLXVpLXBvcHVwLXN0YXRlL0hvdmVyTWVudVwiKSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0X3JvdXRlcl9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xudmFyIG11aUJ1dHRvbl8xID0gcmVxdWlyZShcIi4uL211aS9jb21wb25lbnRzL211aUJ1dHRvblwiKTtcbnZhciBwYXRocyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL2Fib3V0XCIsXG4gICAgICAgIHRleHQ6IFwiYWJvdXRcIixcbiAgICAgICAgc3VicGF0aHM6IFtdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIi9wcm9qZWN0c1wiLFxuICAgICAgICB0ZXh0OiBcInByb2plY3RzXCIsXG4gICAgICAgIHN1YnBhdGhzOiBbXG4gICAgICAgICAgICB7IHBhdGg6IFwicHJvamVjdHMvcGVyc29uYWxcIiwgdGV4dDogXCJwZXJzb25hbFwiIH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwicHJvamVjdHMvYWNhZGVtaWNcIiwgdGV4dDogXCJhY2FkZW1pY1wiIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL2NvbnRhY3RcIixcbiAgICAgICAgdGV4dDogXCJjb250YWN0XCIsXG4gICAgICAgIHN1YnBhdGhzOiBbXSxcbiAgICB9LFxuXTtcbnZhciBOYXZMaW5rcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGhlbWUgPSAoMCwgbWF0ZXJpYWxfMS51c2VUaGVtZSkoKTtcbiAgICB2YXIgaXNNb2JpbGUgPSAoMCwgbWF0ZXJpYWxfMS51c2VNZWRpYVF1ZXJ5KSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xuICAgIHZhciBwb3B1cFN0YXRlID0gKDAsIGhvb2tzXzEudXNlUG9wdXBTdGF0ZSkoe1xuICAgICAgICB2YXJpYW50OiBcInBvcG92ZXJcIixcbiAgICAgICAgcG9wdXBJZDogXCJzdWJQYXRoTWVudVwiLFxuICAgIH0pO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBwYXRoLnN1YnBhdGhzLmxlbmd0aCAhPT0gMCA/IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBrZXk6IFwiXCIuY29uY2F0KHBhdGgudGV4dCksIGNvbXBvbmVudDogcmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHRvOiBwYXRoLnBhdGggfSwgbXVpQnV0dG9uXzEubmF2TGlua0J1dHRvblByb3BzLCAoMCwgaG9va3NfMS5iaW5kSG92ZXIpKHBvcHVwU3RhdGUpKSwgcGF0aC50ZXh0KSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEhvdmVyTWVudV8xLmRlZmF1bHQsIF9fYXNzaWduKHt9LCAoMCwgaG9va3NfMS5iaW5kTWVudSkocG9wdXBTdGF0ZSksIHsgYW5jaG9yT3JpZ2luOiBpc01vYmlsZVxuICAgICAgICAgICAgICAgICAgICA/IHsgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwicmlnaHRcIiB9XG4gICAgICAgICAgICAgICAgICAgIDogeyB2ZXJ0aWNhbDogXCJib3R0b21cIiwgaG9yaXpvbnRhbDogXCJsZWZ0XCIgfSwgdHJhbnNmb3JtT3JpZ2luOiB7IHZlcnRpY2FsOiBcInRvcFwiLCBob3Jpem9udGFsOiBcImxlZnRcIiB9IH0pLCBwYXRoLnN1YnBhdGhzLm1hcChmdW5jdGlvbiAoc3ViUGF0aCwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5NZW51SXRlbSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5CdXR0b24sIF9fYXNzaWduKHsga2V5OiBcIlwiLmNvbmNhdChzdWJQYXRoLnRleHQsIFwiLVwiKS5jb25jYXQoaSksIGNvbXBvbmVudDogcmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHRvOiBzdWJQYXRoLnBhdGggfSwgbXVpQnV0dG9uXzEubmF2TGlua0J1dHRvblByb3BzKSwgc3ViUGF0aC50ZXh0KSkpO1xuICAgICAgICAgICAgfSkpKSkgOiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5CdXR0b24sIF9fYXNzaWduKHsga2V5OiBcIlwiLmNvbmNhdChwYXRoLnRleHQsIFwiLVwiKS5jb25jYXQoaW5kZXgpLCBjb21wb25lbnQ6IHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rLCB0bzogcGF0aC5wYXRoIH0sIG11aUJ1dHRvbl8xLm5hdkxpbmtCdXR0b25Qcm9wcyksIHBhdGgudGV4dCkpKSk7XG4gICAgfSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBOYXZMaW5rcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGFudGxpb25Ub3dlckRlZmVuc2UgPSB7XG4gICAgYWJicjogXCJhbnRsaW9uLXRkXCIsXG4gICAgbmFtZTogXCJBbnRsaW9uIFRvd2VyIERlZmVuc2VcIixcbiAgICBkYXRlOiBcIk9jdCAyMDE4IC0gRGVjIDIwMThcIixcbiAgICB0YWdzOiBbXG4gICAgICAgIFwiVW5pdHlcIixcbiAgICAgICAgXCJDI1wiLFxuICAgICAgICBcIlBhdGhmaW5kaW5nXCIsXG4gICAgICAgIFwiRUNTXCIsXG4gICAgICAgIFwiR2FtZSBEZXZcIixcbiAgICAgICAgXCJHYW1lIERlc2lnblwiLFxuICAgICAgICBcIkdhbWVcIixcbiAgICBdLFxuICAgIGNhdGVnb3J5OiBcIlRvd2VyIERlZmVuc2UgR2FtZVwiLFxuICAgIGxpbms6IHtcbiAgICAgICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vRmx1ZmZpc2F1cnVzL0FURFwiLFxuICAgICAgICBob3N0OiBcIlwiLFxuICAgIH0sXG4gICAgZGV0YWlsOiB7XG4gICAgICAgIHNob3J0OiBcIkJ1aWxkIGFuIGFybXkgdG8gZmVuZCBvZmYgaW52YWRlcnMgd2l0aCA1IGRpZmZlcmVudCBkZWZlbnNpdmUgdG93ZXJzLiBCbG9jayBvZmYgcGF0aHMgYW5kIGRlY2lkZSBob3cgeW91IHdhbnQgdG8gcmVkaXJlY3QgdGhlIGludmFkaW5nIGFudGxpb25zLlwiLFxuICAgICAgICBsb25nOiBbXSxcbiAgICB9LFxuICAgIGltYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYXRkL2F0ZC1wYXRoZmluZGluZ19tdWloYWJcIixcbiAgICAgICAgICAgIGFsdDogXCJBVEQ6IEEqIFBhdGhmaW5kaW5nXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJFbmVteSBBSSB3aXRoIEEqIFBhdGhmaW5kaW5nIHNob3duIGJ5IGxpbmVzIGFuZCBwb2ludHMuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJhdGQvYXRkLXN0YXJ0LXNjcmVlbl9tdXMwamlcIixcbiAgICAgICAgICAgIGFsdDogXCJBVEQ6IFN0YXJ0IFNjcmVlblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU3RhcnQgc2NyZWVuIGZvciB0aGUgZ2FtZS5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImF0ZC9hdGQtc3RvcnlfeG1zNWxjXCIsXG4gICAgICAgICAgICBhbHQ6IFwiQVREOiBTdG9yeSBTY3JlZW5cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjcm9sbGFibGUgc3RvcnkgYW5kIG5hcnJhdGl2ZSBzY3JlZW4uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJhdGQvYXRkLXN0YXJ0LXNjcmVlbl9tdXMwamlcIixcbiAgICAgICAgICAgIGFsdDogXCJBVEQ6IExldmVsIFNlbGVjdCBTY3JlZW5cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxldmVsIHNlbGVjdCBzY3JlZW4uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJhdGQvYXRkLWdhbWVwbGF5X3hheHBjbFwiLFxuICAgICAgICAgICAgYWx0OiBcIkFURDogR2FtZXBsYXkgU2NyZWVuc2hvdFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2FtZXBsYXkgc2NyZWVuc2hvdC5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImF0ZC9hdGQtd2luLXNjcmVlbl92d25iZmVcIixcbiAgICAgICAgICAgIGFsdDogXCJBVEQ6IFdpbiBTY3JlZW5cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIldpbiBzY3JlZW5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImF0ZC9hdGQtbG9zZS1zY3JlZW5fdGViYmwwXCIsXG4gICAgICAgICAgICBhbHQ6IFwiQVREOiBMb3NlIFNjcmVlblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9zZSBzY3JlZW5cIixcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFudGxpb25Ub3dlckRlZmVuc2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgICAgICAgICByZXR1cm4gYXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvd25LZXlzKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICAgICAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gQ3VzdG9tT3B0aW9uc0RpYWw7XG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgRWRpdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXRcIikpO1xudmFyIERpc3BsYXlTZXR0aW5nc1R3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9EaXNwbGF5U2V0dGluZ3NUd29Ub25lXCIpKTtcbnZhciBUb2dnbGVUaGVtZUJ1dHRvbnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Ub2dnbGVUaGVtZUJ1dHRvbnNcIikpO1xudmFyIFRvZ2dsZUltYWdlUXVhbGl0eUJ1dHRvbnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Ub2dnbGVJbWFnZVF1YWxpdHlCdXR0b25zXCIpKTtcbmZ1bmN0aW9uIEN1c3RvbU9wdGlvbnNEaWFsKCkge1xuICAgIHZhciBhY3Rpb25zID0gW1xuICAgICAgICB7IGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9nZ2xlSW1hZ2VRdWFsaXR5QnV0dG9uc18xLmRlZmF1bHQsIG51bGwpLCBuYW1lOiBcIkltYWdlIFF1YWxpdHlcIiB9LFxuICAgICAgICB7IGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9nZ2xlVGhlbWVCdXR0b25zXzEuZGVmYXVsdCwgbnVsbCksIG5hbWU6IFwiVGhlbWUgTW9kZVwiIH0sXG4gICAgXTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Cb3gsIHsgc3g6IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMyMCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWigwcHgpXCIsXG4gICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgekluZGV4OiA5OTksXG4gICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuU3BlZWREaWFsLCB7IGFyaWFMYWJlbDogXCJ3ZWJzaXRlIG9wdGlvbnMgZGlhbCBmb3IgdGhlbWUgbW9kZSBhbmQgaW1hZ2UgcXVhbGl0eVwiLCBzeDogeyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBib3R0b206IDE2LCByaWdodDogMTYgfSwgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlNwZWVkRGlhbEljb24sIHsgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChFZGl0XzEuZGVmYXVsdCwgbnVsbCksIG9wZW5JY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KERpc3BsYXlTZXR0aW5nc1R3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSB9KSB9LCBhY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlNwZWVkRGlhbEFjdGlvbiwgeyBrZXk6IGFjdGlvbi5uYW1lLCBpY29uOiBhY3Rpb24uaWNvbiwgc2xvdFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBhY3Rpb24ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9IH0pKTsgfSkpKSkpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nbG9iYWxOYXZCdXR0b25Qcm9wcyA9IGV4cG9ydHMubmF2TGlua0J1dHRvblByb3BzID0gdm9pZCAwO1xudmFyIG11aUJ1dHRvbk5hdmxpbmtGb250U2l6ZXMgPSB7XG4gICAgZm9udFNpemU6IHsgeHM6IDE4LCBzbTogMjAsIG1kOiAyNCwgbGc6IDI2IH0sXG59O1xuZXhwb3J0cy5uYXZMaW5rQnV0dG9uUHJvcHMgPSB7XG4gICAgc2l6ZTogXCJsYXJnZVwiLFxuICAgIHZhcmlhbnQ6IFwibmF2bGlua1wiLFxuICAgIHN4OiBfX2Fzc2lnbih7fSwgbXVpQnV0dG9uTmF2bGlua0ZvbnRTaXplcyksXG59O1xudmFyIG11aUJ1dHRvbkdsb2JhbE5hdkZvbnRTaXplcyA9IHtcbiAgICBmb250U2l6ZTogeyB4czogMTgsIHNtOiAxOCwgbWQ6IDE5LCBsZzogMjAgfSxcbn07XG5leHBvcnRzLmdsb2JhbE5hdkJ1dHRvblByb3BzID0ge1xuICAgIHNpemU6IFwibWVkaXVtXCIsXG4gICAgdmFyaWFudDogXCJuYXZsaW5rXCIsXG4gICAgc3g6IF9fYXNzaWduKHt9LCBtdWlCdXR0b25HbG9iYWxOYXZGb250U2l6ZXMpLFxufTtcbnZhciBtdWlCdXR0b25TdHlsZXMgPSB7XG4gICAgTXVpQnV0dG9uOiB7XG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvcHM6IHsgdmFyaWFudDogXCJuYXZsaW5rXCIgfSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICAgICAgcm9vdDogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiU291cmNlIENvZGUgUHJvXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMHB4IDVweCAwcHggNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy50aGVtZS52YXJzLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJjphY3RpdmVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMudGhlbWUudmFycy5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMudGhlbWUudmFycy5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIiY6Zm9jdXNcIjoge30sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IG11aUJ1dHRvblN0eWxlcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG1vdGlvbkFydCA9IHtcbiAgICBhYmJyOiBcIm1vdGlvbi1hcnRcIixcbiAgICBuYW1lOiBcIk1vdGlvbiBBcnRcIixcbiAgICBkYXRlOiBcIlNlcCAyMDE4IC0gRGVjIDIwMThcIixcbiAgICB0YWdzOiBbXCJKYXZhXCIsIFwiQW5kcm9pZCBTdHVkaW9cIiwgXCJTZW5zb3JzXCIsIFwiQWN0aXZpdHkgTGlmZWN5Y2xlXCJdLFxuICAgIGNhdGVnb3J5OiBcIkFuZHJvaWQgQXBwXCIsXG4gICAgbGluazoge1xuICAgICAgICByZXBvOiBcIlwiLFxuICAgICAgICBob3N0OiBcIlwiLFxuICAgIH0sXG4gICAgZGV0YWlsOiB7XG4gICAgICAgIHNob3J0OiBcIkV4cGVyaW1lbnRhbCBBbmRyb2lkIGRyYXdpbmcgYXBwbGljYXRpb24gdGhhdCBtYXBzIGRldmljZSBtb3ZlbWVudCBhcyBkcmF3aW5nIHN0cm9rZXMgb24gYSBjYW52YXMuXCIsXG4gICAgICAgIGxvbmc6IFtdLFxuICAgIH0sXG4gICAgaW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJtb3Rpb25hcnQvbW90aW9uYXJ0M19hcGZnYnBcIixcbiAgICAgICAgICAgIGFsdDogXCJNb3Rpb25BcnQ6IEhvbWUgU2NyZWVuXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZWZhdWx0IHNjcmVlbi5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIm1vdGlvbmFydC9tb3Rpb25hcnQxX3FwZmsydVwiLFxuICAgICAgICAgICAgYWx0OiBcIk1vdGlvbkFydDogQnJ1c2ggU2VsZWN0IFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQnJ1c2ggc2l6ZSBzZWxlY3QgaW50ZXJmYWNlLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwibW90aW9uYXJ0L21vdGlvbmFydDJfbmR0cmVvXCIsXG4gICAgICAgICAgICBhbHQ6IFwiTW90aW9uQXJ0OiBQYWxldHRlIENoYW5nZXJcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlbW8gb2YgTW90aW9uQXJ0J3MgcGFsZXR0ZSBjaGFuZ2VyLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwibW90aW9uYXJ0L21vdGlvbmFydDRfc2VwNWJ5XCIsXG4gICAgICAgICAgICBhbHQ6IFwiTW90aW9uQXJ0OiBFZGl0IEFydGJvYXJkIE5hbWVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlbmFtaW5nIHRoZSBjdXJyZW50IGFydGJvYXJkLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwibW90aW9uYXJ0L21vdGlvbmFydDVfeG52MHloXCIsXG4gICAgICAgICAgICBhbHQ6IFwiTWFkZSB3aXRoIE1vdGlvbkFydCBhcHBcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgc2FtcGxlIGRyYXdpbmcgZG9uZSBvbiB0aGUgYXBwLlwiLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gbW90aW9uQXJ0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jYXJvdXNlbFN0eWxlcyA9IHZvaWQgMDtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpO1xudmFyIHJlYWN0X21hdGVyaWFsX3VpX2Nhcm91c2VsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LW1hdGVyaWFsLXVpLWNhcm91c2VsXCIpKTtcbnZhciByZWFjdF8yID0gcmVxdWlyZShcIkBjbG91ZGluYXJ5L3JlYWN0XCIpO1xudmFyIHJlc2l6ZV8xID0gcmVxdWlyZShcIkBjbG91ZGluYXJ5L3VybC1nZW4vYWN0aW9ucy9yZXNpemVcIik7XG52YXIgS2V5Ym9hcmRBcnJvd1JpZ2h0VHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dSaWdodFR3b1RvbmVcIikpO1xudmFyIEtleWJvYXJkQXJyb3dMZWZ0VHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dMZWZ0VHdvVG9uZVwiKSk7XG52YXIgQ2xvdWRpbmFyeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0Nsb3VkaW5hcnlcIikpO1xudmFyIHJlYWN0X3JvdXRlcl9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xudmFyIFBob3RvTGlicmFyeVR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9QaG90b0xpYnJhcnlUd29Ub25lXCIpKTtcbmV4cG9ydHMuY2Fyb3VzZWxTdHlsZXMgPSB7XG4gICAgY2FyZDoge1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIG1hcmdpbjogXCI1cHhcIixcbiAgICB9LFxuICAgIG91dGVyQm94OiB7XG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICB9LFxuICAgIHRleHRPdmVybGF5OiB7XG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBiZ2NvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC41NClcIixcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgfSxcbn07XG52YXIgUGxhY2Vob2xkZXJDYXJkID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHByb2ogPSBfYS5wcm9qLCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XG4gICAgdmFyIGxvY2F0aW9uID0gKDAsIHJlYWN0X3JvdXRlcl9kb21fMS51c2VMb2NhdGlvbikoKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQ2FyZCwgeyBzeDogX19hc3NpZ24oeyBtaW5IZWlnaHQ6IGhlaWdodCB9LCBleHBvcnRzLmNhcm91c2VsU3R5bGVzLmNhcmQpIH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQ2FyZEFjdGlvbkFyZWEsIHsgY29tcG9uZW50OiByZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgdG86IHByb2ouYWJiciwgc3RhdGU6IHsgYmFja2dyb3VuZDogbG9jYXRpb24gfSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Cb3gsIHsgc3g6IF9fYXNzaWduKF9fYXNzaWduKHt9LCB3aWR0aCksIGV4cG9ydHMuY2Fyb3VzZWxTdHlsZXMub3V0ZXJCb3gpIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5DYXJkTWVkaWEsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBob3RvTGlicmFyeVR3b1RvbmVfMS5kZWZhdWx0LCB7IHN4OiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgd2lkdGgpLCB7IGhlaWdodDogaGVpZ2h0IH0pIH0pKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJveCwgeyBzeDogX19hc3NpZ24oe30sIGV4cG9ydHMuY2Fyb3VzZWxTdHlsZXMudGV4dE92ZXJsYXkpIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImNhcHRpb25cIiB9LCBcIlBob3RvIHVuYXZhaWxhYmxlIGF0IHRoZSBtb21lbnQuXCIpKSkpKSk7XG59O1xudmFyIFBsYWNlaG9sZGVyQ2Fyb3VzZWwgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgcHJvaiA9IF9hLnByb2osIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcbiAgICB2YXIgcGxhY2Vob2xkZXJzID0gWzEsIDJdO1xuICAgIHZhciB0aGVtZSA9ICgwLCBtYXRlcmlhbF8xLnVzZVRoZW1lKSgpO1xuICAgIHZhciBpc01vYmlsZSA9ICgwLCBtYXRlcmlhbF8xLnVzZU1lZGlhUXVlcnkpKHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9tYXRlcmlhbF91aV9jYXJvdXNlbF8xLmRlZmF1bHQsIHsgc3RvcEF1dG9QbGF5T25Ib3ZlcjogdHJ1ZSwgZnVsbEhlaWdodEhvdmVyOiB0cnVlLCBhdXRvUGxheTogZmFsc2UsIGludGVydmFsOiA1MDAwLCBhbmltYXRpb246IFwic2xpZGVcIiwgaGVpZ2h0OiBoZWlnaHQsIE5leHRJY29uOiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChLZXlib2FyZEFycm93UmlnaHRUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCksIFByZXZJY29uOiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChLZXlib2FyZEFycm93TGVmdFR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSwgbmF2QnV0dG9uc0Fsd2F5c1Zpc2libGU6IGlzTW9iaWxlID8gdHJ1ZSA6IGZhbHNlIH0sIHBsYWNlaG9sZGVycy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGkpIHsgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQbGFjZWhvbGRlckNhcmQsIHsga2V5OiBpLCBwcm9qOiBwcm9qLCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pKTsgfSkpKTtcbn07XG52YXIgQ2Fyb3VzZWxDYXJkID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHByb2ogPSBfYS5wcm9qLCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XG4gICAgdmFyIGxvY2F0aW9uID0gKDAsIHJlYWN0X3JvdXRlcl9kb21fMS51c2VMb2NhdGlvbikoKTtcbiAgICB2YXIgaW1hZ2VzID0gcHJvai5pbWFnZXM7XG4gICAgdmFyIGNsZCA9IENsb3VkaW5hcnlfMS5kZWZhdWx0O1xuICAgIHZhciB0aGVtZSA9ICgwLCBtYXRlcmlhbF8xLnVzZVRoZW1lKSgpO1xuICAgIHZhciBpc01vYmlsZSA9ICgwLCBtYXRlcmlhbF8xLnVzZU1lZGlhUXVlcnkpKHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XG4gICAgdmFyIGltZ1dpZHRoID0gaXNNb2JpbGUgPyB3aWR0aC53aWR0aC54cyA6IHdpZHRoLndpZHRoLm1kO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfbWF0ZXJpYWxfdWlfY2Fyb3VzZWxfMS5kZWZhdWx0LCB7IHN0b3BBdXRvUGxheU9uSG92ZXI6IHRydWUsIGZ1bGxIZWlnaHRIb3ZlcjogdHJ1ZSwgYXV0b1BsYXk6IGZhbHNlLCBpbnRlcnZhbDogNTAwMCwgYW5pbWF0aW9uOiBcInNsaWRlXCIsIGhlaWdodDogaGVpZ2h0LCBOZXh0SWNvbjogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoS2V5Ym9hcmRBcnJvd1JpZ2h0VHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpLCBQcmV2SWNvbjogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoS2V5Ym9hcmRBcnJvd0xlZnRUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCksIG5hdkJ1dHRvbnNBbHdheXNWaXNpYmxlOiBpc01vYmlsZSA/IHRydWUgOiBmYWxzZSB9LCBpbWFnZXMubWFwKGZ1bmN0aW9uIChpdGVtLCBpKSB7IHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5DYXJkLCB7IGtleTogaSwgc3g6IF9fYXNzaWduKHsgbWluSGVpZ2h0OiBoZWlnaHQgfSwgZXhwb3J0cy5jYXJvdXNlbFN0eWxlcy5jYXJkKSB9LFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNhcmRBY3Rpb25BcmVhLCB7IGNvbXBvbmVudDogcmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHRvOiBwcm9qLmFiYnIsIHN0YXRlOiB7IGJhY2tncm91bmQ6IGxvY2F0aW9uIH0gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQm94LCB7IHN4OiBfX2Fzc2lnbih7IHdpZHRoOiB3aWR0aCB9LCBleHBvcnRzLmNhcm91c2VsU3R5bGVzLm91dGVyQm94KSB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQ2FyZE1lZGlhLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8yLkFkdmFuY2VkSW1hZ2UsIHsgY2xkSW1nOiBjbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1hZ2UoXCJwb3J0Zm9saW8vXCIuY29uY2F0KGl0ZW0uc3JjKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzaXplKCgwLCByZXNpemVfMS5maXQpKGltZ1dpZHRoLCBoZWlnaHQpKSwgcGx1Z2luczogWygwLCByZWFjdF8yLnBsYWNlaG9sZGVyKSh7IG1vZGU6IFwiYmx1clwiIH0pLCAoMCwgcmVhY3RfMi5yZXNwb25zaXZlKSgpXSB9KSksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Cb3gsIHsgc3g6IF9fYXNzaWduKHt9LCBleHBvcnRzLmNhcm91c2VsU3R5bGVzLnRleHRPdmVybGF5KSB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJjYXB0aW9uXCIgfSwgaXRlbS5kZXNjcmlwdGlvbikpKSkpKTsgfSkpKTtcbn07XG52YXIgUHJvamVjdENhcm91c2VsID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIHByb2ogPSBwcm9wcy5wcm9qLCB3aWR0aCA9IHByb3BzLndpZHRoLCBoZWlnaHQgPSBwcm9wcy5oZWlnaHQ7XG4gICAgcmV0dXJuIHByb2ouaW1hZ2VzLmxlbmd0aCA9PSAwID8gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBsYWNlaG9sZGVyQ2Fyb3VzZWwsIHsgcHJvajogcHJvaiwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KSkgOiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxDYXJkLCB7IHByb2o6IHByb2osIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFByb2plY3RDYXJvdXNlbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGZvb2RwaWNrID0ge1xuICAgIC8vIGZvb2RwaWNrXG4gICAgYWJicjogXCJmb29kcGlja1wiLFxuICAgIG5hbWU6IFwiRm9vZFBpY2tcIixcbiAgICBkYXRlOiBcIkp1biAyMDE4IC0gTWFyIDIwMTlcIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIlJlZHV4XCIsIFwiSlNcIiwgXCJOb2RlSlNcIiwgXCJDU1NcIl0sXG4gICAgY2F0ZWdvcnk6IFwiV2ViIGFuZCBNb2JpbGUgQXBwXCIsXG4gICAgbGluazoge1xuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9rY2E5OS9mb29kcGljay1uYXRpdmVcIixcbiAgICAgICAgaG9zdDogXCJcIixcbiAgICB9LFxuICAgIGRldGFpbDoge1xuICAgICAgICBzaG9ydDogXCJNdWx0aXBsYXRmb3JtIHJhbmRvbSBjdWlzaW5lIHBpY2tlci4gVXNlcyBhIHJhbmRvbWl6ZXIgZm9yIGEgdGhlIGN1aXNpbmVzIHRvIGZlZWQgaW50byB0aGUgR29vZ2xlIFBsYWNlcyBBUEkgdG8gZ2VuZXJhdGUgc3VnZ2VzdGlvbnMhXCIsXG4gICAgICAgIGxvbmc6IFtdLFxuICAgIH0sXG4gICAgaW1hZ2VzOiBbXSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBmb29kcGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBzdHlsZXNfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiKTtcbnZhciBtdWlDb2xvclNjaGVtZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tdWlDb2xvclNjaGVtZXNcIikpO1xudmFyIG11aVR5cG9ncmFwaHlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tdWlUeXBvZ3JhcGh5XCIpKTtcbnZhciBtdWlCdXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL211aUJ1dHRvblwiKSk7XG52YXIgbXVpQ29udGFpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9tdWlDb250YWluZXJcIikpO1xudmFyIG11aUxpc3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL211aUxpc3RcIikpO1xudmFyIG11aU1lbnVJdGVtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9tdWlNZW51SXRlbVwiKSk7XG52YXIgbXVpRHJhd2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9tdWlEcmF3ZXJcIikpO1xudmFyIG11aVNwZWVkRGlhbF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9tdWlTcGVlZERpYWxcIik7XG52YXIgbXVpQ3NzQmFzZWxpbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL211aUNzc0Jhc2VsaW5lXCIpKTtcbnZhciB0aGVtZSA9ICgwLCBzdHlsZXNfMS5jcmVhdGVUaGVtZSkoX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oe30sIG11aUNvbG9yU2NoZW1lc18xLmRlZmF1bHQpLCBtdWlUeXBvZ3JhcGh5XzEuZGVmYXVsdCksIHsgY29tcG9uZW50czogX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oe30sIG11aUJ1dHRvbl8xLmRlZmF1bHQpLCBtdWlDb250YWluZXJfMS5kZWZhdWx0KSwgbXVpTGlzdF8xLmRlZmF1bHQpLCBtdWlNZW51SXRlbV8xLmRlZmF1bHQpLCBtdWlEcmF3ZXJfMS5kZWZhdWx0KSwgbXVpU3BlZWREaWFsXzEubXVpU3BlZWREaWFsKSwgbXVpU3BlZWREaWFsXzEubXVpU3BlZWREaWFsQWN0aW9uKSwgbXVpQ3NzQmFzZWxpbmVfMS5kZWZhdWx0KSwgY3NzVmFyaWFibGVzOiB7XG4gICAgICAgIGNvbG9yU2NoZW1lU2VsZWN0b3I6IFwiY2xhc3NcIixcbiAgICAgICAgLy8gZ2VuZXJhdGVkIHN0eWxlc2hlZXQ6XG4gICAgICAgIC8vIC0tY3VzdG9tLW11aS10aGVtZS1wcmltYXJ5LW1haW46IC4uLjtcbiAgICAgICAgY3NzVmFyUHJlZml4OiBcImN1c3RvbS1tdWktdGhlbWVcIixcbiAgICB9IH0pKTtcbnRoZW1lID0gKDAsIHN0eWxlc18xLnJlc3BvbnNpdmVGb250U2l6ZXMpKHRoZW1lKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRoZW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgR3JpZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0dyaWRcIikpO1xudmFyIHByb2plY3RfbGlzdF8xID0gcmVxdWlyZShcIi4uLy4uL2NvbnRlbnQvcHJvamVjdHMvcHJvamVjdC1saXN0XCIpO1xudmFyIFByb2plY3RTZWxlY3Rpb25CbG9ja18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL1Byb2plY3RTZWxlY3Rpb25CbG9ja1wiKSk7XG52YXIgU2xpZGVXcmFwcGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkL1NsaWRlV3JhcHBlclwiKSk7XG52YXIgU2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb250YWluZXJSZWYgPSAoMCwgcmVhY3RfMS51c2VSZWYpKG51bGwpO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IGNvbnRhaW5lclJlZiB9LFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChHcmlkXzEuZGVmYXVsdCwgeyBjb250YWluZXI6IHRydWUsIGRpcmVjdGlvbjogXCJyb3dcIiwgc3BhY2luZzogMiwgc2l6ZTogeyB4czogNiwgbWQ6IDggfSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2xpZGVXcmFwcGVyXzEuZGVmYXVsdCwgeyBzbGlkZUZyb21SZWY6IGNvbnRhaW5lclJlZiwgZGVsYXk6IDUwMCwgZGlyZWN0aW9uOiBcInVwXCIgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcm9qZWN0U2VsZWN0aW9uQmxvY2tfMS5kZWZhdWx0LCB7IGNhdDogcHJvamVjdF9saXN0XzEuUHJvamVjdENhdGVnb3JpZXMuUEVSU09OQUwsIGRhdGE6IHByb2plY3RfbGlzdF8xLlByb2plY3RMaXN0W3Byb2plY3RfbGlzdF8xLlByb2plY3RDYXRlZ29yaWVzLlBFUlNPTkFMXSB9KSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTbGlkZVdyYXBwZXJfMS5kZWZhdWx0LCB7IHNsaWRlRnJvbVJlZjogY29udGFpbmVyUmVmLCBkZWxheTogMTAwMCwgZGlyZWN0aW9uOiBcInVwXCIgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcm9qZWN0U2VsZWN0aW9uQmxvY2tfMS5kZWZhdWx0LCB7IGNhdDogcHJvamVjdF9saXN0XzEuUHJvamVjdENhdGVnb3JpZXMuQUNBREVNSUMsIGRhdGE6IHByb2plY3RfbGlzdF8xLlByb2plY3RMaXN0W3Byb2plY3RfbGlzdF8xLlByb2plY3RDYXRlZ29yaWVzLkFDQURFTUlDXSB9KSkpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gU2VsZWN0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpO1xudmFyIGFib3V0X21lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbnRlbnQvYWJvdXQtbWVcIikpO1xudmFyIENvbnRlbnRCbG9ja18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL0NvbnRlbnRCbG9ja1wiKSk7XG52YXIgU2Nyb2xsYWJsZUNvbnRhaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL3N0eWxlZC9TY3JvbGxhYmxlQ29udGFpbmVyXCIpKTtcbnZhciBTbGlkZVdyYXBwZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9zdHlsZWQvU2xpZGVXcmFwcGVyXCIpKTtcbnZhciBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL3N0eWxlZC9jb25zdGFudHNcIik7XG52YXIgRmFkZVdyYXBwZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9zdHlsZWQvRmFkZVdyYXBwZXJcIikpO1xudmFyIEFib3V0TWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbnRhaW5lclJlZiA9ICgwLCByZWFjdF8xLnVzZVJlZikobnVsbCk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNjcm9sbGFibGVDb250YWluZXJfMS5kZWZhdWx0LCB7IHJlZjogY29udGFpbmVyUmVmIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChGYWRlV3JhcHBlcl8xLmRlZmF1bHQsIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiaDNcIiB9LCBcIjV3MWhcIikpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5HcmlkLCB7IGNvbnRhaW5lcjogdHJ1ZSwgc3BhY2luZzogMiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9LCBhYm91dF9tZV8xLmRlZmF1bHQgPT09IG51bGwgfHwgYWJvdXRfbWVfMS5kZWZhdWx0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhYm91dF9tZV8xLmRlZmF1bHQubWFwKGZ1bmN0aW9uIChjbnRCbGssIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNsaWRlV3JhcHBlcl8xLmRlZmF1bHQsIHsgc2xpZGVGcm9tUmVmOiBjb250YWluZXJSZWYsIGRlbGF5OiBpICogY29uc3RhbnRzXzEuQU5JX0NPTlNULkFCT1VUX0NBUkRfREVMQVksIGRpcmVjdGlvbjogXCJ1cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9ja18xLmRlZmF1bHQsIHsga2V5OiBpLCBoZWFkaW5nOiBjbnRCbGsuaGVhZGluZywgYm9keTogY250QmxrLmJvZHkgfSkpKTtcbiAgICAgICAgICAgIH0pKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBBYm91dE1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgR3JpZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0dyaWRcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbnZhciBQcm9qZWN0QmxvY2tfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0QmxvY2tcIikpO1xudmFyIHByb2plY3RfbGlzdF8xID0gcmVxdWlyZShcIi4uLy4uL2NvbnRlbnQvcHJvamVjdHMvcHJvamVjdC1saXN0XCIpO1xudmFyIFNsaWRlV3JhcHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZC9TbGlkZVdyYXBwZXJcIikpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkL2NvbnN0YW50c1wiKTtcbnZhciBGYWRlV3JhcHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZC9GYWRlV3JhcHBlclwiKSk7XG52YXIgQWNhZGVtaWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbnRhaW5lclJlZiA9ICgwLCByZWFjdF8xLnVzZVJlZikobnVsbCk7XG4gICAgdmFyIHRoZW1lID0gKDAsIG1hdGVyaWFsXzEudXNlVGhlbWUpKCk7XG4gICAgdmFyIGFuaW1hdGlvbkJyZWFrcG9pbnQgPSAoMCwgbWF0ZXJpYWxfMS51c2VNZWRpYVF1ZXJ5KSh0aGVtZS5icmVha3BvaW50cy5kb3duKGNvbnN0YW50c18xLkFOSV9DT05TVC5QUk9KX1JPV19CUkVBS1BPSU5UKSk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgcmVmOiBjb250YWluZXJSZWYgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZhZGVXcmFwcGVyXzEuZGVmYXVsdCwgeyBkZWxheTogY29uc3RhbnRzXzEuQU5JX0NPTlNULlBST0pfU1VCSEVBRElOR19ERUxBWSB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImg0XCIgfSwgXCJBY2FkZW1pY19wcm9qZWN0c1wiKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChHcmlkXzEuZGVmYXVsdCwgeyBjb250YWluZXI6IHRydWUsIHNwYWNpbmc6IDIsIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiIH0sIHByb2plY3RfbGlzdF8xLlByb2plY3RMaXN0W3Byb2plY3RfbGlzdF8xLlByb2plY3RDYXRlZ29yaWVzLkFDQURFTUlDXS5tYXAoZnVuY3Rpb24gKHByb2osIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNsaWRlV3JhcHBlcl8xLmRlZmF1bHQsIHsgc2xpZGVGcm9tUmVmOiBjb250YWluZXJSZWYsIGRlbGF5OiBpICogY29uc3RhbnRzXzEuQU5JX0NPTlNULlBST0pfQ0FSRFNfREVMQVksIGRpcmVjdGlvbjogYW5pbWF0aW9uQnJlYWtwb2ludCA/IFwidXBcIiA6IFwibGVmdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFByb2plY3RCbG9ja18xLmRlZmF1bHQsIHsgcHJvajogcHJvaiwga2V5OiBpIH0pKSk7XG4gICAgICAgICAgICB9KSkpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuT3V0bGV0LCBudWxsKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFjYWRlbWljO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgQ2FyZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NhcmRcIikpO1xudmFyIENhcmRDb250ZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnRcIikpO1xudmFyIFR5cG9ncmFwaHlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCIpKTtcbnZhciBHcmlkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiKSk7XG52YXIgQ29udGVudEJsb2NrID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGhlYWRpbmcgPSBfYS5oZWFkaW5nLCBib2R5ID0gX2EuYm9keTtcbiAgICB2YXIgX2IgPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoXCJcIiksIGhlYWRpbmdUZXh0ID0gX2JbMF0sIHNldEhlYWRpbmdUZXh0ID0gX2JbMV07XG4gICAgdmFyIF9jID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFtcIlwiXSksIGJvZHlUZXh0ID0gX2NbMF0sIHNldEJvZHlUZXh0ID0gX2NbMV07XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldEhlYWRpbmdUZXh0KGhlYWRpbmcpO1xuICAgICAgICBzZXRCb2R5VGV4dChib2R5KTtcbiAgICB9LCBbYm9keSwgaGVhZGluZ10pO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChHcmlkXzEuZGVmYXVsdCwgeyBzaXplOiB7IHhzOiAxNSwgbWQ6IDIwIH0sIHN4OiB7IHdpZHRoOiBcIjEwMCVcIiB9IH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDYXJkXzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcIm91dGxpbmVkXCIgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDYXJkQ29udGVudF8xLmRlZmF1bHQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHlfMS5kZWZhdWx0LCB7IHZhcmlhbnQ6IFwiaDVcIiwgY29tcG9uZW50OiBcImRpdlwiLCBzeDogeyBtYjogMiB9IH0sIGhlYWRpbmdUZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsgdmFyaWFudDogXCJib2R5MVwiIH0sIGJvZHlUZXh0Lm1hcChmdW5jdGlvbiAoYm9keSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHlfMS5kZWZhdWx0LCB7IGtleTogaSB9LCBib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgfSkpKSkpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gQ29udGVudEJsb2NrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbXVpQ29udGFpbmVyID0ge1xuICAgIE11aUNvbnRhaW5lcjoge1xuICAgICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMCxcbiAgICAgICAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTgwMHB4XCIsIC8vIGRlZmF1bHQgaXMgMTIwMHB4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBtdWlDb250YWluZXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwbGF5ZXJQZXJmb3JtYW5jZVByb2plY3Rpb24gPSB7XG4gICAgYWJicjogXCJwbGF5ZXItcGVyZm9ybWFuY2UtcHJvamVjdGlvblwiLFxuICAgIG5hbWU6IFwiUGxheWVyIFBlcmZvcm1hbmNlIFByb2plY3Rpb25cIixcbiAgICBkYXRlOiBcIlNlcCAyMDE5IC0gRGVjIDIwMTlcIixcbiAgICB0YWdzOiBbXCJQeXRob25cIiwgXCJNTFwiLCBcIkFOT1ZBXCIsIFwiUmVncmVzc2lvblwiLCBcIkVUTFwiLCBcIkRhdGEgU2NpZW5jZVwiXSxcbiAgICBjYXRlZ29yeTogXCJTdGF0aXN0aWNhbCBBbmFseXNpc1wiLFxuICAgIGxpbms6IHtcbiAgICAgICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vRmx1ZmZpc2F1cnVzL3BsYXllci1wZXJmb3JtYW5jZS1wcm9qZWN0aW9uXCIsXG4gICAgICAgIGhvc3Q6IFwiYml0Lmx5L3BwcC1yZXBvcnRcIixcbiAgICB9LFxuICAgIGRldGFpbDoge1xuICAgICAgICBzaG9ydDogXCJNTCBhbGdvIHRvIGFuYWx5emUgU3RlcGggQ3VycnkncyBwZXJmb3JtYW5jZSBzdGF0cy4gVXRpbGl6ZXMgRVRMIGZvciBkYXRhIGNvbGxlY3Rpb24gYW5kIHBhcnNpbmcsIEdyYWRpZW50Qm9vc3RpbmdSZWdyZXNzb3IsIGFuZCBBTk9WQS5cIixcbiAgICAgICAgbG9uZzogW10sXG4gICAgfSxcbiAgICBpbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcInBwcC9hbGwtMy1kZWYtdGllcnMtdHJhaW4tdnMtcHJlZGljdF93YmZqZ21cIixcbiAgICAgICAgICAgIGFsdDogXCJUcmFpbmluZyB2cyBwcmVkaWN0ZWRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRyYWluaW5nIHBvaW50cyB2cyBQcmVkaWN0ZWQgcG9pbnRzIGFuZCBSZWdyZXNzaW9uIExpbmUgYWdhaW5zdCB0aHJlZSBkZWZlbmlzdmUgdGllcnMuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJwcHAvY3Vycnktc2hvdHMtbWFkZS1ieS1taW51dGVzX2E2Z2duM1wiLFxuICAgICAgICAgICAgYWx0OiBcIlN0ZXBoIEN1cnJ5J3Mgc2hvdHMgbWFkZSBieSBtaW51dGVzIHBhc3NlZCBpbiB0aGUgZ2FtZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU3RlcGggQ3VycnkncyBzaG90cyBtYWRlIGJ5IG1pbnV0ZXMgcGFzc2VkIGluIHRoZSBnYW1lLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwicHBwL3Bsb3QtbmJhLWRlZi1yYXRpbmdfYTRmMGNlXCIsXG4gICAgICAgICAgICBhbHQ6IFwiMjAwOS0yMDE5IEFnZ3JlZ2F0ZWQgRGVmZW5zaXZlIFJhdGluZ3Mgb2YgYWxsIDMwIE5CQSB0ZWFtc1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiMjAwOS0yMDE5IEFnZ3JlZ2F0ZWQgRGVmZW5zaXZlIFJhdGluZ3Mgb2YgYWxsIDMwIE5CQSB0ZWFtcy5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcInBwcC92YXJpYW5jZS1zaG90LWRlZnNfczBsNGF4XCIsXG4gICAgICAgICAgICBhbHQ6IFwiRnJlcXVlbmN5IG9mIHNob3RzIG1hZGUgdnMgZGlmZmVyZW50IHRpZXJzIG9mIGRlZmZlbnNlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTdGVwaCdzIHNob3RzIG1hZGUgdnMgZGlmZmVyZW50IHRpZXJzIG9mIGRlZmVuc2UuXCIsXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBwbGF5ZXJQZXJmb3JtYW5jZVByb2plY3Rpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpO1xudmFyIFNjcm9sbGFibGVDb250YWluZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9zdHlsZWQvU2Nyb2xsYWJsZUNvbnRhaW5lclwiKSk7XG52YXIgRG9lc05vdEV4aXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTY3JvbGxhYmxlQ29udGFpbmVyXzEuZGVmYXVsdCwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImgzXCIgfSwgXCJPb3BzIVwiKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImJvZHkxXCIgfSwgXCJUaGUgcGFnZSB5b3UncmUgbG9va2luZyBmb3IgZG9lcyBub3QgZXhpc3QgKHlldD8pIVwiKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImJvZHkxXCIgfSwgXCJDbGljayB0aGUgbGlua3MgYWJvdmUgdG8gdGVsZXBvcnQgYmFjayFcIikpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gRG9lc05vdEV4aXN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZmFsbGluZ0Jsb2NrcyA9IHtcbiAgICAvLyBmYWxsaW5nLWJsb2Nrc1xuICAgIGFiYnI6IFwiZmFsbGluZy1ibG9ja3NcIixcbiAgICBuYW1lOiBcIkZhbGxpbmcgQmxvY2tzXCIsXG4gICAgZGF0ZTogXCJBcHIgMjAxOCAtIE1heSAyMDE4XCIsXG4gICAgdGFnczogW1wiQyNcIiwgXCJVbml0eVwiLCBcIkdhbWUgRGV2XCIsIFwiR2FtZVwiXSxcbiAgICBjYXRlZ29yeTogXCJFbmRsZXNzIEdhbWVcIixcbiAgICBsaW5rOiB7XG4gICAgICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0ZsdWZmaXNhdXJ1cy9GYWxsaW5nLUJsb2Nrc1wiLFxuICAgICAgICBob3N0OiBcImJpdC5seS9mYWxsLWJsb2Nrc1wiLFxuICAgIH0sXG4gICAgZGV0YWlsOiB7XG4gICAgICAgIHNob3J0OiBcIkVuZGxlc3MgMkQgZ2FtZSAtIGV2YWRlIHRoZSBibG9ja3MhIFdhcyBjb21wbGV0ZWQgdG8gcHJhY3RpY2UgVW5pdHkgYmFzaWNzIGFmdGVyIGEgbG9uZyBoaWF0dXMgZnJvbSB0aGUgZ2FtZSBlbmdpbmUuXCIsXG4gICAgICAgIGxvbmc6IFtdLFxuICAgIH0sXG4gICAgaW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJmYWxsaW5nYmxvY2tzL2hvbWVfZzBpemxzXCIsXG4gICAgICAgICAgICBhbHQ6IFwiRmFsbGluZyBCbG9ja3M6IEhvbWUgU2NyZWVuXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJJbnN0cnVjdGlvbmFsIGhvbWUgc2NyZWVuLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiZmFsbGluZ2Jsb2Nrcy9pbi1nYW1lX2Q0YTloY1wiLFxuICAgICAgICAgICAgYWx0OiBcIkZhbGxpbmcgQmxvY2tzOiBJbi1HYW1lXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJJbiBnYW1lIHNjcmVlbnNob3QuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJmYWxsaW5nYmxvY2tzL2dhbWUtb3Zlcl9za2ZldmVcIixcbiAgICAgICAgICAgIGFsdDogXCJGYWxsaW5nIEJsb2NrczogR2FtZSBPdmVyIFNjcmVlblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2FtZSBvdmVyIHNjcmVlbiB3aXRoIGhpZ2hzY29yZSBhbmQgcGxheS1hZ2FpbiBwcm9tcHQuXCIsXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBmYWxsaW5nQmxvY2tzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0X3JvdXRlcl9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xucmVxdWlyZShcIi4uL3N0eWxlcy9wcm9qZWN0cy5zY3NzXCIpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBTY3JvbGxhYmxlQ29udGFpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvc3R5bGVkL1Njcm9sbGFibGVDb250YWluZXJcIikpO1xudmFyIEZhZGVXcmFwcGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvc3R5bGVkL0ZhZGVXcmFwcGVyXCIpKTtcbnZhciBQcm9qZWN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsYWJsZUNvbnRhaW5lcl8xLmRlZmF1bHQsIHsgY2xhc3NOYW1lOiBcIlByb2plY3RzLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChGYWRlV3JhcHBlcl8xLmRlZmF1bHQsIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiaDNcIiB9LCBcIlByb2plY3RzXCIpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5PdXRsZXQsIG51bGwpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFByb2plY3RzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc3BvY2hpVjAgPSB7XG4gICAgLy8gbmJhLWRhdGEtdml6XG4gICAgYWJicjogXCJuYmEtZGF0YS12aXpcIixcbiAgICBuYW1lOiBcIk5CQSBEYXRhIFZpc3VhbGl6YXRpb25cIixcbiAgICBkYXRlOiBcIkF1ZyAyMDE5IC0gUHJlc2VudFwiLFxuICAgIHRhZ3M6IFtcIkQzXCIsIFwiUmVhY3RcIiwgXCJQeXRob25cIiwgXCJGbGFza1wiLCBcIkpTXCJdLFxuICAgIGNhdGVnb3J5OiBcIldlYiBBcHAgLyBUb29sXCIsXG4gICAgbGluazoge1xuICAgICAgICByZXBvOiBcIlwiLFxuICAgICAgICBob3N0OiBcIlwiLFxuICAgIH0sXG4gICAgZGV0YWlsOiB7XG4gICAgICAgIHNob3J0OiBcIltJbiBQcm9ncmVzc10gRnVsbC1zdGFjayBkYXRhIHZpc3VhbGl6YXRpb24gdG9vbC4gQW5hbHl6ZSBOQkEgcGxheWVyJ3Mgc3RhdHMgdGhyb3VnaCBpbnRlcmFjdGl2ZSB2aXN1YWxpemF0aW9ucy4gXCIsXG4gICAgICAgIGxvbmc6IFtdLFxuICAgIH0sXG4gICAgaW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJmYmR2L2ZiZHYtYnJ1c2hfZHl5dnVsXCIsXG4gICAgICAgICAgICBhbHQ6IFwiTkJBIERhdGEgVml6OiBCcnVzaCBTZWxlY3Rpb25cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZXIgY2FuIGJydXNoIHNlbGVjdCBkYXRhIC0gaW4gdGhlIGZ1dHVyZSB1c2VyIHdpbGwgYmUgYWJsZSB0byBmdXJ0aGVyIGludGVyYWN0IHdpdGggdGhpcyBzZWxlY3Rpb24sIGllLiB2aXN1YWxpemUgc3Vic2V0IHdpdGggYW5vdGhlciBncmFwaC5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImZiZHYvZmJkdi16b29tX2drNWh6aFwiLFxuICAgICAgICAgICAgYWx0OiBcIk5CQSBEYXRhIFZpejogWm9vbVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiWm9vbWluZyBhdCBkaWZmZXJlbnQgbGV2ZWxzIHdpdGggaGlzdG9yeSBiZWluZyBzYXZlZC4gVXNlciBjYW4gdW5kbywgcmVkbywgYW5kIHJlc2V0LlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiZmJkdi9mYmR2LXpvb20tMV94enN0M2ZcIixcbiAgICAgICAgICAgIGFsdDogXCJOQkEgRGF0YSBWaXo6IFpvb21cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlpvb21pbmcgZnVydGhlciB0byBzdWJzZXQgdGhlIGRhdGEgc2Vlbi5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImZiZHYvZmJkdi1hc3Npc3RzX3ZzdWg2dlwiLFxuICAgICAgICAgICAgYWx0OiBcIk5CQSBEYXRhIFZpejogQXNzaXN0cyAtIERpZmZlcmVudCBTdGF0c1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmlzdWFsaXplIGRpZmZlcmVudCBib3ggc2NvcmUgbWV0cmljcyAtIGluIGZ1dHVyZSBpdGVyYXRpb25zLCB0aGUgdXNlciB3aWxsIGJlIGFibGUgdG8gZ3JhcGggYW5kIHRhYnVsYXJpemUgYWxsIGJveCBzY29yZSBkYXRhLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiZmJkdi9mYmR2LWJydXNoX2R5eXZ1bFwiLFxuICAgICAgICAgICAgYWx0OiBcIk5CQSBEYXRhIFZpejogVG9vbHRpcFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVG9vbHRpcCB0byBzaG93IHJlc3BlY3RpdmUgZGF0YSBvZiB0aGUgcG9pbnQgLSBpbiB0aGUgZnV0dXJlIHdpbGwgaW5jbHVkZSBtb3JlIGRldGFpbCBhbmQgd2lsbCBiZSBpbnRlcmFjdGFibGUuXCIsXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBzcG9jaGlWMDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG11aUxpc3QgPSB7XG4gICAgTXVpTGlzdDoge1xuICAgICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gbXVpTGlzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJvYmJ5c0JyZWFrb3V0ID0ge1xuICAgIGFiYnI6IFwiYm9iYnlzLWJyZWFrb3V0XCIsXG4gICAgbmFtZTogXCJCb2JieSdzIEJyZWFrb3V0XCIsXG4gICAgZGF0ZTogXCJTZXAgMjAxOSAtIERlYyAyMDE5XCIsXG4gICAgdGFnczogW1xuICAgICAgICBcIkFnaWxlXCIsXG4gICAgICAgIFwiR2FtZSBEZXZcIixcbiAgICAgICAgXCJOb2RlSlNcIixcbiAgICAgICAgXCJGdWxsIFN0YWNrXCIsXG4gICAgICAgIFwiSGVyb2t1XCIsXG4gICAgICAgIFwiT09EXCIsXG4gICAgICAgIFwiU3lzIERlc2lnblwiLFxuICAgICAgICBcIkdhbWVcIixcbiAgICBdLFxuICAgIGNhdGVnb3J5OiBcIlRvcCBEb3duIFJQR1wiLFxuICAgIGxpbms6IHtcbiAgICAgICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vYWJoYXR0aGFsL0JvYmJ5LUJyZWFrb3V0XCIsXG4gICAgICAgIGhvc3Q6IFwiYml0Lmx5L2JvYmJ5LWJyZWFrb3V0XCIsXG4gICAgfSxcbiAgICBkZXRhaWw6IHtcbiAgICAgICAgc2hvcnQ6IFwiRnVsbCBzdGFjayBicm93c2VyIFJQRyAtIHBsYXkgYXMgU0ZVJ3MgRHIuIEJvYmJ5IENoYW4gaW4gYSB0b3AtZG93biBnYW1lIHdpdGggdGhlIFBva2Vtb24tc3R5bGUgY29tYmF0IHN5c3RlbS5cIixcbiAgICAgICAgbG9uZzogW10sXG4gICAgfSxcbiAgICBpbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImJvYmJ5L2JvYmJ5LWJyZWFrb3V0LW1hcF9xZXg1ZDBcIixcbiAgICAgICAgICAgIGFsdDogXCJCb2JieSBCcmVha291dDogTWFwXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJJbi1nYW1lIHNjcmVlbnNob3Qgb2YgdGhlIG1hcCAtIFNGVSdzIENTIGxhYiBibHVlcHJpbnQuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJib2JieS9ib2JieS1icmVha291dC1pbnZlbnRvcnlfemd3cXUxXCIsXG4gICAgICAgICAgICBhbHQ6IFwiQm9iYnkgQnJlYWtvdXQ6IEludmVudG9yeVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUGxheWVyIChCb2JieSdzKSBpbnZlbnRvcnkgb2YgcGlja2VkIHVwIGxvb3QgLSB1c2VyIGNhbiBzd2FwIGxvYWRvdXRzIGFuZCBlcXVpcHBlZCBpdGVtcy5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImJvYmJ5L2JvYmJ5LWJyZWFrb3V0LWZpZ2h0X2NjZ2tic1wiLFxuICAgICAgICAgICAgYWx0OiBcIkJvYmJ5IEJyZWFrb3V0OiBGaWdodCBTY2VuZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUG9rZW1vbiBzdHlsZSBmaWdodCBzY2VuZSFcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImJvYmJ5L2JvYmJ5LWJyZWFrb3V0LWZpZ2h0LTFfaGc0bGNkXCIsXG4gICAgICAgICAgICBhbHQ6IFwiQm9iYnkgQnJlYWtvdXQ6IEZpZ2h0IFNjZW5lIFBsYXllciBBYmlsaXR5XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJQbGF5ZXIgdXNpbmcgYW4gYWJpbGl0eSAtIHBva2Vtb24gc3R5bGUgY29tYmF0IGRpYWxvZ3VlLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYm9iYnkvYm9iYnktYnJlYWtvdXQtZmlnaHQtMl9nMjlkenlcIixcbiAgICAgICAgICAgIGFsdDogXCJCb2JieSBCcmVha291dDogRmlnaHQgU2NlbmUgRW5lbXkgQWJpbGl0eVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRW5lbXkgcmV0YWxpYXRpbmcgd2l0aCB0aGVpciBjdXN0b20gc2tpbGxzLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYm9iYnkvYm9iYnktYnJlYWtvdXQtaXRlbV9vMXU4dm1cIixcbiAgICAgICAgICAgIGFsdDogXCJCb2JieSBCcmVha291dDogRnVubnkgSXRlbXNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkluLWdhbWUgaXRlbXMgdXNlciBjYW4gcGljayB1cC5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImJvYmJ5L2JvYmJ5LWJyZWFrb3V0LWFjaGlldmVtZW50X3R2Yml4Y1wiLFxuICAgICAgICAgICAgYWx0OiBcIkJvYmJ5IEJyZWFrb3V0OiBBY2hpZXZlbWVudFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRHluYW1pYyBhbmQgcGVyc2lzdGVudCBhY2hpZXZlbWVudHMgc2NyZWVuIChzdG9yZWQgaW4gZGF0YWJhc2UgYnkgYWNjb3VudCBzZXNzaW9uKS5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImJvYmJ5L2JvYmJ5LWJyZWFrb3V0LWludmVudG9yeV96Z3dxdTFcIixcbiAgICAgICAgICAgIGFsdDogXCJCb2JieSBCcmVha291dDogTG9naW4gYW5kIFNpZ251cFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9naW4gYW5kIHNpZ251cCBzY3JlZW4gZm9yIHRoZSB1c2VyIHRvIHJlZ2lzdGVyLlwiLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gYm9iYnlzQnJlYWtvdXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgICAgICAgICByZXR1cm4gYXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvd25LZXlzKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICAgICAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgR2l0SHViXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvR2l0SHViXCIpKTtcbnZhciBMaW5rZWRJbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xpbmtlZEluXCIpKTtcbnZhciBFbWFpbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0VtYWlsXCIpKTtcbnZhciByZWFjdF8yID0gcmVxdWlyZShcIkBjbG91ZGluYXJ5L3JlYWN0XCIpO1xudmFyIHJlc2l6ZV8xID0gcmVxdWlyZShcIkBjbG91ZGluYXJ5L3VybC1nZW4vYWN0aW9ucy9yZXNpemVcIik7XG52YXIgU2Nyb2xsYWJsZUNvbnRhaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL3N0eWxlZC9TY3JvbGxhYmxlQ29udGFpbmVyXCIpKTtcbnZhciBDbG91ZGluYXJ5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvQ2xvdWRpbmFyeVwiKSk7XG52YXIgU2xpZGVXcmFwcGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvc3R5bGVkL1NsaWRlV3JhcHBlclwiKSk7XG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9zdHlsZWQvY29uc3RhbnRzXCIpO1xudmFyIEZhZGVXcmFwcGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvc3R5bGVkL0ZhZGVXcmFwcGVyXCIpKTtcbnZhciBpbmZvID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJsaW5rZWRpblwiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbmd1cy1ob24vXCIsXG4gICAgICAgIGljb246IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExpbmtlZEluXzEuZGVmYXVsdCwgbnVsbCksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiZ2l0aHViXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0ZsdWZmaXNhdXJ1c1wiLFxuICAgICAgICBpY29uOiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChHaXRIdWJfMS5kZWZhdWx0LCBudWxsKSxcbiAgICB9LFxuICAgIHsgbmFtZTogXCJlbWFpbFwiLCBsaW5rOiBcIlwiLCBpY29uOiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChFbWFpbF8xLmRlZmF1bHQsIG51bGwpLCBtb2RhbDogdHJ1ZSB9LFxuXTtcbnZhciBDb250YWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGVtZSA9ICgwLCBtYXRlcmlhbF8xLnVzZVRoZW1lKSgpO1xuICAgIHZhciBhbmltYXRpb25CcmVha3BvaW50ID0gKDAsIG1hdGVyaWFsXzEudXNlTWVkaWFRdWVyeSkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpKTtcbiAgICB2YXIgY29udGFpbmVyUmVmID0gKDAsIHJlYWN0XzEudXNlUmVmKShudWxsKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsYWJsZUNvbnRhaW5lcl8xLmRlZmF1bHQsIHsgcmVmOiBjb250YWluZXJSZWYgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZhZGVXcmFwcGVyXzEuZGVmYXVsdCwgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoM1wiIH0sIFwiQ29udGFjdCBJbmZvXCIpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuR3JpZCwgeyBjb250YWluZXI6IHRydWUsIHNwYWNpbmc6IDIsIGRpcmVjdGlvbjogeyB4czogXCJjb2x1bW5cIiwgc206IFwicm93XCIgfSB9LCBpbmZvLm1hcChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2xpZGVXcmFwcGVyXzEuZGVmYXVsdCwgeyBzbGlkZUZyb21SZWY6IGNvbnRhaW5lclJlZiwgZGVsYXk6IGkgKiBjb25zdGFudHNfMS5BTklfQ09OU1QuQ09OVEFDVF9CQURHRV9ERUxBWSwgZGlyZWN0aW9uOiBhbmltYXRpb25CcmVha3BvaW50ID8gXCJ1cFwiIDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5DYXJkLCB7IGtleTogaSwgc3g6IHsgd2lkdGg6IFwiMTUwcHhcIiwgaGVpZ2h0OiBcImZpdC1jb250ZW50XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5DYXJkQWN0aW9uQXJlYSwgeyBocmVmOiBpdGVtLmxpbmssIHRhcmdldDogXCJfYmxhbmtcIiwgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuR3JpZCwgeyBjb250YWluZXI6IHRydWUsIHNwYWNpbmc6IDIsIHN4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImJvZHkxXCIgfSwgaXRlbS5uYW1lKSkpKSkpO1xuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5HcmlkLCB7IGNvbnRhaW5lcjogdHJ1ZSwgc3BhY2luZzogMSwgZGlyZWN0aW9uOiBcImNvbHVtblwiLCBzeDogeyBwYWRkaW5nVG9wOiBcIjMwcHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2xpZGVXcmFwcGVyXzEuZGVmYXVsdCwgeyBzbGlkZUZyb21SZWY6IGNvbnRhaW5lclJlZiwgZGVsYXk6IGNvbnN0YW50c18xLkFOSV9DT05TVC5DT05UQUNUX1BPUlRSQUlUX0hFQURJTkdfREVMQVksIGRpcmVjdGlvbjogXCJ1cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImg1XCIgfSwgXCJXaG8geW91IGFyZSBjb250YWN0aW5nOlwiKSksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2xpZGVXcmFwcGVyXzEuZGVmYXVsdCwgeyBzbGlkZUZyb21SZWY6IGNvbnRhaW5lclJlZiwgZGVsYXk6IGNvbnN0YW50c18xLkFOSV9DT05TVC5DT05UQUNUX1BPUlRSQUlUX1BJQ19ERUxBWSwgZGlyZWN0aW9uOiBcInVwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5DYXJkLCB7IHN4OiB7IHdpZHRoOiBcImZpdC1jb250ZW50XCIsIGhlaWdodDogXCJmaXQtY29udGVudFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuR3JpZCwgeyBjb250YWluZXI6IHRydWUsIGRpcmVjdGlvbjogXCJjb2x1bW5cIiwgc3BhY2luZzogMiwgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8yLkFkdmFuY2VkSW1hZ2UsIHsgY2xkSW1nOiBDbG91ZGluYXJ5XzEuZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltYWdlKFwicG9ydGZvbGlvL0VsaXRlX2dvb3NlX2puZHkzbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc2l6ZSgoMCwgcmVzaXplXzEuZml0KSg0MDAsIDQwMCkpIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImJvZHkxXCIgfSwgXCJzZWxmIHBvcnRyYWl0XCIpKSkpKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBDb250YWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIENhcmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkXCIpKTtcbnZhciBDYXJkQWN0aW9uQXJlYV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25BcmVhXCIpKTtcbnZhciBDYXJkQ29udGVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50XCIpKTtcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbnZhciBUeXBvZ3JhcGh5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiKSk7XG52YXIgU2Nob29sVHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NjaG9vbFR3b1RvbmVcIikpO1xudmFyIEZhY2VUd29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRmFjZVR3b1RvbmVcIikpO1xudmFyIHByb2plY3RfbGlzdF8xID0gcmVxdWlyZShcIi4uL2NvbnRlbnQvcHJvamVjdHMvcHJvamVjdC1saXN0XCIpO1xudmFyIGljb25TdHlsaW5nID0ge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgIGhlaWdodDogXCI1MCVcIixcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxufTtcbnZhciBQcm9qZWN0U2VsZWN0aW9uQmxvY2sgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2F0ID0gX2EuY2F0LCBkYXRhID0gX2EuZGF0YTtcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgcmVhY3Rfcm91dGVyX2RvbV8xLnVzZUxvY2F0aW9uKSgpO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2FyZF8xLmRlZmF1bHQsIHsgc3g6IHsgbWF4V2lkdGg6IDMwMCB9IH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRBY3Rpb25BcmVhXzEuZGVmYXVsdCwgeyBjb21wb25lbnQ6IHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rLCB0bzogY2F0LCBzdGF0ZTogbG9jYXRpb24gfSxcbiAgICAgICAgICAgIGNhdCA9PSBwcm9qZWN0X2xpc3RfMS5Qcm9qZWN0Q2F0ZWdvcmllcy5QRVJTT05BTCA/IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChGYWNlVHdvVG9uZV8xLmRlZmF1bHQsIHsgc3g6IGljb25TdHlsaW5nIH0pKSA6IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTY2hvb2xUd29Ub25lXzEuZGVmYXVsdCwgeyBzeDogaWNvblN0eWxpbmcgfSkpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2FyZENvbnRlbnRfMS5kZWZhdWx0LCBudWxsLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHlfMS5kZWZhdWx0LCB7IGd1dHRlckJvdHRvbTogdHJ1ZSwgdmFyaWFudDogXCJoNVwiLCBjb21wb25lbnQ6IFwiZGl2XCIgfSwgY2F0KSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcImJvZHkyXCIsIHN4OiB7IGNvbG9yOiBcInRleHQuc2Vjb25kYXJ5XCIgfSB9LCBkYXRhLm1hcChmdW5jdGlvbiAocHJvaikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCItIFwiLmNvbmNhdChwcm9qLm5hbWUsIFwiIFwiKTtcbiAgICAgICAgICAgICAgICB9KSkpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFByb2plY3RTZWxlY3Rpb25CbG9jaztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgRGFya01vZGVUd29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRGFya01vZGVUd29Ub25lXCIpKTtcbnZhciBMaWdodE1vZGVUd29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTGlnaHRNb2RlVHdvVG9uZVwiKSk7XG52YXIgU2V0dGluZ3NTeXN0ZW1EYXlkcmVhbVR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5nc1N5c3RlbURheWRyZWFtVHdvVG9uZVwiKSk7XG5mdW5jdGlvbiBUb2dnbGVUaGVtZUJ1dHRvbnMoKSB7XG4gICAgdmFyIF9hID0gKDAsIG1hdGVyaWFsXzEudXNlQ29sb3JTY2hlbWUpKCksIG1vZGUgPSBfYS5tb2RlLCBzZXRNb2RlID0gX2Euc2V0TW9kZTtcbiAgICB2YXIgaGFuZGxlVG9nZ2xlVGhlbWUgPSBmdW5jdGlvbiAoZXZlbnQsIG5ld1RoZW1lTW9kZSkge1xuICAgICAgICBzZXRNb2RlKG5ld1RoZW1lTW9kZSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Ub2dnbGVCdXR0b25Hcm91cCwgeyB2YWx1ZTogbW9kZSwgZGVmYXVsdFZhbHVlOiBtb2RlLCBleGNsdXNpdmU6IHRydWUsIG9uQ2hhbmdlOiBoYW5kbGVUb2dnbGVUaGVtZSwgXCJhcmlhLWxhYmVsXCI6IFwidGhlbWUgbW9kZSB0b2dnbGVcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVG9nZ2xlQnV0dG9uLCB7IHZhbHVlOiBcInN5c3RlbVwiLCBcImFyaWEtbGFiZWxcIjogXCJsaWdodCBtb2RlXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2V0dGluZ3NTeXN0ZW1EYXlkcmVhbVR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Ub2dnbGVCdXR0b24sIHsgdmFsdWU6IFwibGlnaHRcIiwgXCJhcmlhLWxhYmVsXCI6IFwibGlnaHQgbW9kZVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpZ2h0TW9kZVR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Ub2dnbGVCdXR0b24sIHsgdmFsdWU6IFwiZGFya1wiLCBcImFyaWEtbGFiZWxcIjogXCJkYXJrIG1vZGVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEYXJrTW9kZVR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSkpKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFRvZ2dsZVRoZW1lQnV0dG9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgU2RUd29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2RUd29Ub25lXCIpKTtcbnZhciBIZFR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9IZFR3b1RvbmVcIikpO1xudmFyIEZvdXJLVHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0ZvdXJLVHdvVG9uZVwiKSk7XG5mdW5jdGlvbiBUb2dnbGVJbWFnZVF1YWxpdHlCdXR0b25zKCkge1xuICAgIHZhciBfYSA9IFJlYWN0LnVzZVN0YXRlKFwiaGlnaFwiKSwgaW1nUXVhbGl0eSA9IF9hWzBdLCBzZXRJbWdRdWFsaXR5ID0gX2FbMV07XG4gICAgdmFyIGhhbmRsZVRvZ2dsZUltZ1F1YWxpdHkgPSBmdW5jdGlvbiAoZXZlbnQsIG5ld0ltZ1F1YWxpdHkpIHtcbiAgICAgICAgc2V0SW1nUXVhbGl0eShuZXdJbWdRdWFsaXR5KTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlRvZ2dsZUJ1dHRvbkdyb3VwLCB7IHZhbHVlOiBpbWdRdWFsaXR5LCBleGNsdXNpdmU6IHRydWUsIG9uQ2hhbmdlOiBoYW5kbGVUb2dnbGVJbWdRdWFsaXR5LCBcImFyaWEtbGFiZWxcIjogXCJpbWFnZSBxdWFsaXR5IHRvZ2dsZVwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Ub2dnbGVCdXR0b24sIHsgdmFsdWU6IFwibG93XCIsIFwiYXJpYS1sYWJlbFwiOiBcImxvdyBpbWFnZSBxdWFsaXR5XCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2RUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVG9nZ2xlQnV0dG9uLCB7IHZhbHVlOiBcIm1lZGl1bVwiLCBcImFyaWEtbGFiZWxcIjogXCJtZWRpdW0gaW1hZ2UgcXVhbGl0eVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhkVHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlRvZ2dsZUJ1dHRvbiwgeyB2YWx1ZTogXCJoaWdoXCIsIFwiYXJpYS1sYWJlbFwiOiBcImhpZ2ggaW1hZ2UgcXVhbGl0eVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvdXJLVHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpKSkpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gVG9nZ2xlSW1hZ2VRdWFsaXR5QnV0dG9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgTmF2TGlua3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9OYXZMaW5rc1wiKSk7XG5yZXF1aXJlKFwiLi4vc3R5bGVzL2xhbmRpbmcuc2Nzc1wiKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgbXVpQnV0dG9uXzEgPSByZXF1aXJlKFwiLi4vbXVpL2NvbXBvbmVudHMvbXVpQnV0dG9uXCIpO1xudmFyIHRoZW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL211aS90aGVtZVwiKSk7XG52YXIgTGFuZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuRmFkZSwgeyBpbjogdHJ1ZSwgYXBwZWFyOiB0cnVlLCB0aW1lb3V0OiAzMDAwIH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQm94LCB7IGNsYXNzTmFtZTogXCJMYW5kaW5nLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoNVwiLCBzeDogeyBmb250RmFtaWx5OiBcIkthcmxhXCIsIGZvbnRXZWlnaHQ6IDcwMCB9IH0sIFwiSGkgdGhlcmUhIFdlbGNvbWUgdG9cIiksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJveCwgeyBjbGFzc05hbWU6IFwiTGFuZGluZy1jb250YWluZXJfX25hbWVcIiB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyBjbGFzc05hbWU6IFwiTGFuZGluZy1jb250YWluZXJfX25hbWVfX2Z1bGxuYW1lXCIsIHZhcmlhbnQ6IFwiaDFcIiwgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZV8xLmRlZmF1bHQudmFycy5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWVfMS5kZWZhdWx0LnZhcnMucGFsZXR0ZS5iYWNrZ3JvdW5kLmhpZ2hsaWdodCxcbiAgICAgICAgICAgICAgICAgICAgfSB9LCBcImFuZ3VzX2hvblwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgY2xhc3NOYW1lOiBcIkxhbmRpbmctY29udGFpbmVyX19uYW1lX19hdFwiLCB2YXJpYW50OiBcImgxXCIsIHN4OiB7IGNvbG9yOiB0aGVtZV8xLmRlZmF1bHQudmFycy5wYWxldHRlLnByaW1hcnkubWFpbiB9IH0sIFwiQFxcdUQ4M0NcXHVERkUwXCIpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQm94LCB7IGNsYXNzTmFtZTogXCJMYW5kaW5nLWNvbnRhaW5lcl9fbmF2XCIgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiTmF2LWxpbmtfX25vLWV2ZW50c1wiIH0sIG11aUJ1dHRvbl8xLm5hdkxpbmtCdXR0b25Qcm9wcywgeyBzeDogX19hc3NpZ24oeyBwYWRkaW5nTGVmdDogMCB9LCBtdWlCdXR0b25fMS5uYXZMaW5rQnV0dG9uUHJvcHMuc3gpIH0pLCBcIn4kXCIpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5hdkxpbmtzXzEuZGVmYXVsdCwgbnVsbCkpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IExhbmRpbmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBYm91dE1lQ29udGVudCA9IFtcbiAgICB7XG4gICAgICAgIGhlYWRpbmc6IFwiV2hvIGlzIEFuZ3VzP1wiLFxuICAgICAgICBib2R5OiBbXG4gICAgICAgICAgICBcIkhlIGlzIGEgc29mdHdhcmUgZW5naW5lZXIgd2hvIGFsc28gaGFwcGVucyB0byBiZSBhIGRhdGEgc2NpZW50aXN0LiBIZSBpcyBhbiBhdmlkIGNvbXB1dGVyICYga2V5Ym9hcmQgYnVpbGRlciwgYW1hdGV1ciBiYXNrZXRiYWxsIGFuYWx5c3QsIGFuZCBjYXN1YWwgdm9sbGV5YmFsbCBwbGF5ZXIuXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGhlYWRpbmc6IFwiV2hhdCBpcyBBbmd1cz9cIixcbiAgICAgICAgYm9keTogW1xuICAgICAgICAgICAgXCJIZSBpcyBhbiBldGhuaWNhbGx5IENoaW5lc2UgaHVtYW4gdGhhdCB3YXMgYm9ybiBhbmQgcmFpc2VkIGluIFZhbmNvdXZlciwgQ2FuYWRhLiBBcyBub3RlZCBieSBjdWxpbmFyeSBleHBlcnRzLCBBbmd1cyBpcyBhbHNvIGEgdHlwZSBvZiBiZWVmLlwiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBoZWFkaW5nOiBcIldoZXJlIGlzIEFuZ3VzP1wiLFxuICAgICAgICBib2R5OiBbXCJIZSBpcyBjdXJyZW50bHkgaW4gVmFuY291dmVyLCBCQywgQ2FuYWRhLlwiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaGVhZGluZzogXCJXaGVuIGlzIEFuZ3VzP1wiLFxuICAgICAgICBib2R5OiBbXCJIRSBJUyBOT1cuXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBoZWFkaW5nOiBcIldoeSBpcyBBbmd1cz9cIixcbiAgICAgICAgYm9keTogW1wiVGhhdCBpcyBhIHF1ZXN0aW9uIGhlIGZyZXF1ZW50bHkgYXNrcyBoaW1zZWxmLlwiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaGVhZGluZzogXCJIb3cgaXMgQW5ndXM/XCIsXG4gICAgICAgIGJvZHk6IFtcbiAgICAgICAgICAgIFwiSGUgaXMgdGFraW5nIGEgYnJlYWsgZnJvbSB3b3JrIHRvIGV4cGxvcmUgaGlzIG90aGVyIHBhc3Npb25zLlwiLFxuICAgICAgICAgICAgXCJQcmV2aW91c2x5LCBoZSB3b3JrZWQgYXMgYSBzb2Z0d2FyZSBlbmdpbmVlciBhdCBBbWF6b24gV2ViIFNlcnZpY2VzIGFuZCBTb2thbnUuXCIsXG4gICAgICAgICAgICBcIkFuZ3VzIGdyYWR1YXRlZCBmcm9tIFNpbW9uIEZyYXNlciBVbml2ZXJzaXR5IC0gbWFpbidpbmcgaW4gRGF0YSBTY2llbmNlIGFuZCBhbHQnaW5nIEludGVyYWN0aXZlIEFydHMgYW5kIFRlY2hub2xvZ3kgKEdhbWUgRGVzaWduIGFuZCBJbnRlcmFjdGlvbiBEZXNpZ24pLlwiLFxuICAgICAgICAgICAgXCJJbiBoaXMgc3BhcmUgdGltZSwgQW5ndXMgZW5qb3lzIGhhbmdpbmcgb3V0IHdpdGggaGlzIGZyaWVuZHMsIHBsYXlpbmcgdmlkZW8gZ2FtZXMsIGFuZCB3YXRjaGluZyB0aGUgTkJBLlwiLFxuICAgICAgICBdLFxuICAgIH0sXG5dO1xuZXhwb3J0cy5kZWZhdWx0ID0gQWJvdXRNZUNvbnRlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB3ZWJzaXRlVjEgPSB7XG4gICAgYWJicjogXCJ3ZWJzaXRlXCIsXG4gICAgbmFtZTogXCJQZXJzb25hbCBXZWJzaXRlXCIsXG4gICAgZGF0ZTogXCJNYXIgMjAxOSAtIFByZXNlbnRcIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIkpTXCIsIFwiQ1NTXCJdLFxuICAgIGNhdGVnb3J5OiBcIlNpbmdsZS1QYWdlIFdlYiBBcHBsaWNhdGlvblwiLFxuICAgIGxpbms6IHtcbiAgICAgICAgcmVwbzogXCJcIixcbiAgICAgICAgaG9zdDogXCJcIixcbiAgICB9LFxuICAgIGRldGFpbDoge1xuICAgICAgICBzaG9ydDogXCJZb3UncmUgbG9va2luZyByaWdodCBhdCBpdCEgU2luZ2xlIHBhZ2Ugd2ViIGFwcCAtIG15IG9ubGluZSBwb3J0Zm9saW8uIEZpbmQgbXkgbW9zdCB1cC10by1kYXRlIHByb2plY3RzLCBpbnRlcmVzdHMsIGFuZCBteSBjb250YWN0IGluZm8uXCIsXG4gICAgICAgIGxvbmc6IFtdLFxuICAgIH0sXG4gICAgaW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3ZWJzaXRlL21vYmlsZV93NGprbjNcIixcbiAgICAgICAgICAgIGFsdDogXCJXZWJzaXRlOiBNb2JpbGUgVmlld1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTW9iaWxlIHZpZXcgb2YgbXkgd2Vic2l0ZVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2Vic2l0ZS9tb2JpbGUtYWJvdXRfdGt0aHRxXCIsXG4gICAgICAgICAgICBhbHQ6IFwiV2Vic2l0ZTogTW9iaWxlIC0gQWJvdXQgUGFnZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGlmZmVyZW50IGhpZXJhcmNoeSBhbmQgbGF5b3V0IGZvciBtb2JpbGUgdmlldy5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndlYnNpdGUvbW9iaWxlLXByb2plY3RzX2FhbG5hZlwiLFxuICAgICAgICAgICAgYWx0OiBcIldlYnNpdGU6IE1vYmlsZSAtIFByb2plY3RzIFBhZ2VcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZlcnRpY2FsIGNhcmQgbGF5b3V0IGFuZCBzd2lwYWJsZSBjYXJvdXNlbCB0byB2aWV3IGltYWdlcy5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndlYnNpdGUvbW9iaWxlLWxpZ2h0X3Rvb25zaVwiLFxuICAgICAgICAgICAgYWx0OiBcIldlYnNpdGU6IE1vYmlsZSAtIExpZ2h0IFRoZW1lXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMaWdodCB0aGVtZWQgdmVyc2lvbi5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndlYnNpdGUvbW9iaWxlLWxpZ2h0LWFib3V0X3VuZnVkb1wiLFxuICAgICAgICAgICAgYWx0OiBcIldlYnNpdGU6IE1vYmlsZSAtIExpZ2h0IFRoZW1lIEFib3V0IFBhZ2VcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkJyaWdodGVyIGNvbG91ciBwYWxldHRlIGZvciBvdXRkb29yIGVudmlyb25tZW50cy5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndlYnNpdGUvbW9iaWxlLWxpZ2h0LXByb2plY3RzX2Nsb2JsaFwiLFxuICAgICAgICAgICAgYWx0OiBcIldlYnNpdGU6IE1vYmlsZSAtIExpZ2h0IFRoZW1lIFByb2plY3RzIFBhZ2VcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxpZ2h0IHRoZW1lZCB2ZXJzaW9uIG9mIHRoZSBwcm9qZWN0cyBwYWdlLlwiLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gd2Vic2l0ZVYxO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBQcm9qZWN0TW9kYWxDYXJvdXNlbDtcbnZhciByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgQm94XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQm94XCIpKTtcbnZhciBUeXBvZ3JhcGh5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiKSk7XG52YXIgTW9kYWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Nb2RhbFwiKSk7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpO1xudmFyIHJlYWN0X21hdGVyaWFsX3VpX2Nhcm91c2VsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LW1hdGVyaWFsLXVpLWNhcm91c2VsXCIpKTtcbnZhciByZWFjdF8yID0gcmVxdWlyZShcIkBjbG91ZGluYXJ5L3JlYWN0XCIpO1xudmFyIHJlc2l6ZV8xID0gcmVxdWlyZShcIkBjbG91ZGluYXJ5L3VybC1nZW4vYWN0aW9ucy9yZXNpemVcIik7XG52YXIgS2V5Ym9hcmRBcnJvd1JpZ2h0VHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dSaWdodFR3b1RvbmVcIikpO1xudmFyIEtleWJvYXJkQXJyb3dMZWZ0VHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dMZWZ0VHdvVG9uZVwiKSk7XG52YXIgUGhvdG9MaWJyYXJ5VHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL1Bob3RvTGlicmFyeVR3b1RvbmVcIikpO1xudmFyIENsb3VkaW5hcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9DbG91ZGluYXJ5XCIpKTtcbnZhciBQcm9qZWN0Q2Fyb3VzZWxfMSA9IHJlcXVpcmUoXCIuL1Byb2plY3RDYXJvdXNlbFwiKTtcbnZhciBjb21wdXRlTm9kZVN0eWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3V0aWxzL2NvbXB1dGVOb2RlU3R5bGVcIikpO1xudmFyIFNjcm9sbGFibGVDb250YWluZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zdHlsZWQvU2Nyb2xsYWJsZUNvbnRhaW5lclwiKSk7XG52YXIgRmFkZVdyYXBwZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zdHlsZWQvRmFkZVdyYXBwZXJcIikpO1xudmFyIHN0eWxlcyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBQcm9qZWN0Q2Fyb3VzZWxfMS5jYXJvdXNlbFN0eWxlcyksIHsgbW9kYWxCb3g6IHtcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgdG9wOiBcImNhbGMoNTAlICsgMjBweClcIiwgLy8gZ2xvYmFsIG5hdiBiYXIgaXMgNDBweCB0YWxsXG4gICAgICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICAgICAgd2lkdGg6IFwiODclXCIsXG4gICAgICAgIGhlaWdodDogXCI4NyVcIixcbiAgICAgICAgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgICAgIGJveFNoYWRvdzogMjQsXG4gICAgICAgIHA6IDIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIH0gfSk7XG5mdW5jdGlvbiBQcm9qZWN0TW9kYWxDYXJvdXNlbChfYSkge1xuICAgIHZhciBwcm9qID0gX2EucHJvajtcbiAgICB2YXIgbmF2aWdhdGUgPSAoMCwgcmVhY3Rfcm91dGVyX2RvbV8xLnVzZU5hdmlnYXRlKSgpO1xuICAgIHZhciB0aGVtZSA9ICgwLCBtYXRlcmlhbF8xLnVzZVRoZW1lKSgpO1xuICAgIHZhciBpc1NtYWxsU2NyZWVuID0gKDAsIG1hdGVyaWFsXzEudXNlTWVkaWFRdWVyeSkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpKTtcbiAgICB2YXIgY2xkID0gQ2xvdWRpbmFyeV8xLmRlZmF1bHQ7XG4gICAgdmFyIF9iID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKHsgd2lkdGg6IDAsIGhlaWdodDogMCB9KSwgZGltcyA9IF9iWzBdLCBzZXREaW1zID0gX2JbMV07XG4gICAgLy8gaXNzdWUgd2l0aCB1c2VSZWZzIGFuZCB1c2VFZmZlY3QgZGV0YWlsZWQgaW4gdGhpcyBhcnRpY2xlXG4gICAgLy8gaHR0cHM6Ly9tZWRpdW0uY29tL0B0ZWhfYnVpbGRlci9yZWYtb2JqZWN0cy1pbnNpZGUtdXNlZWZmZWN0LWhvb2tzLWViN2MxNTE5ODc4MFxuICAgIC8vIHNvbHV0aW9uIGZyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS82NzkwNjA4N1xuICAgIHZhciBtb2RhbFJlZiA9ICgwLCByZWFjdF8xLnVzZUNhbGxiYWNrKShmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIG5vZGVEaW1zID0gKDAsIGNvbXB1dGVOb2RlU3R5bGVfMS5kZWZhdWx0KShub2RlKTtcbiAgICAgICAgICAgIHNldERpbXMoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiBub2RlRGltcy53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IG5vZGVEaW1zLmhlaWdodCAtIDQwLCAvLyA0MHB4IGZvciBpbmRpY2F0b3JzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICB2YXIgaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5hdmlnYXRlKFwiLTFcIiwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChNb2RhbF8xLmRlZmF1bHQsIHsgb3BlbjogdHJ1ZSwgb25DbG9zZTogaGFuZGxlQ2xvc2UsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibW9kYWwtbW9kYWwtdGl0bGUtXCIuY29uY2F0KHByb2ouYWJiciksIFwiYXJpYS1kZXNjcmliZWRieVwiOiBcIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uLVwiLmNvbmNhdChwcm9qLmFiYnIpIH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZhZGVXcmFwcGVyXzEuZGVmYXVsdCwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJveF8xLmRlZmF1bHQsIHsgc3g6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBzdHlsZXMubW9kYWxCb3gpLCB7IGZsZXhEaXJlY3Rpb246IGlzU21hbGxTY3JlZW4gPyBcImNvbHVtbi1yZXZlcnNlXCIgOiBcInJvd1wiIH0pIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsYWJsZUNvbnRhaW5lcl8xLmRlZmF1bHQsIHsgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaXNTbWFsbFNjcmVlbiA/IFwiMTAwJVwiIDogXCIzMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaXNTbWFsbFNjcmVlbiA/IFwiNDAlXCIgOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNhcmRDb250ZW50LCB7IHN4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogXCIxIDAgYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsgaWQ6IFwibW9kYWwtbW9kYWwtdGl0bGUtXCIuY29uY2F0KHByb2ouYWJiciksIGNvbXBvbmVudDogXCJkaXZcIiwgdmFyaWFudDogXCJoNVwiIH0sIHByb2oubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcInN1YnRpdGxlMVwiLCBjb21wb25lbnQ6IFwiZGl2XCIsIHN4OiB7IGNvbG9yOiBcInRleHQuc2Vjb25kYXJ5XCIgfSB9LCBwcm9qLmNhdGVnb3J5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuR3JpZCwgeyBjb250YWluZXI6IHRydWUsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBzcGFjaW5nOiAyLCByb3dTcGFjaW5nOiAwLCB3aWR0aDogXCI5MCVcIiB9LCBwcm9qLnRhZ3MubWFwKGZ1bmN0aW9uICh0YWcsIGkpIHsgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyBrZXk6IGksIHZhcmlhbnQ6IFwic3VidGl0bGUyXCIsIGNvbXBvbmVudDogXCJkaXZcIiwgc3g6IHsgY29sb3I6IFwidGV4dC5zZWNvbmRhcnlcIiB9IH0sIHRhZykpOyB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCb3hfMS5kZWZhdWx0LCB7IHN4OiB7IHBhZGRpbmdUb3A6IFwiMTBweFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcImJvZHkyXCIgfSwgcHJvai5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcImJvZHkxXCIgfSwgcHJvai5kZXRhaWwuc2hvcnQpKSkpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJveF8xLmRlZmF1bHQsIHsgcmVmOiBtb2RhbFJlZiwgc3g6IHsgd2lkdGg6IGlzU21hbGxTY3JlZW4gPyBcIjEwMCVcIiA6IFwiNzAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9tYXRlcmlhbF91aV9jYXJvdXNlbF8xLmRlZmF1bHQsIHsgc3RvcEF1dG9QbGF5T25Ib3ZlcjogdHJ1ZSwgZnVsbEhlaWdodEhvdmVyOiB0cnVlLCBhdXRvUGxheTogZmFsc2UsIGludGVydmFsOiA1MDAwLCBhbmltYXRpb246IFwic2xpZGVcIiwgaW5kaWNhdG9yczogdHJ1ZSwgbmF2QnV0dG9uc0Fsd2F5c1Zpc2libGU6IHRydWUsIE5leHRJY29uOiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChLZXlib2FyZEFycm93UmlnaHRUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCksIFByZXZJY29uOiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChLZXlib2FyZEFycm93TGVmdFR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSB9LCBwcm9qLmltYWdlcy5sZW5ndGggPj0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9qLmltYWdlcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGkpIHsgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNhcmQsIHsga2V5OiBpLCBzeDogX19hc3NpZ24oeyBoZWlnaHQ6IGRpbXMuaGVpZ2h0IH0sIFByb2plY3RDYXJvdXNlbF8xLmNhcm91c2VsU3R5bGVzLmNhcmQpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQm94XzEuZGVmYXVsdCwgeyBzeDogX19hc3NpZ24oeyB3aWR0aDogZGltcy53aWR0aCB9LCBQcm9qZWN0Q2Fyb3VzZWxfMS5jYXJvdXNlbFN0eWxlcy5vdXRlckJveCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMi5BZHZhbmNlZEltYWdlLCB7IGNsZEltZzogY2xkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltYWdlKFwicG9ydGZvbGlvL1wiLmNvbmNhdChpdGVtLnNyYykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc2l6ZSgoMCwgcmVzaXplXzEuZml0KShkaW1zLndpZHRoLCBkaW1zLmhlaWdodCkpLCBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHJlYWN0XzIucGxhY2Vob2xkZXIpKHsgbW9kZTogXCJibHVyXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHJlYWN0XzIucmVzcG9uc2l2ZSkoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJveF8xLmRlZmF1bHQsIHsgc3g6IF9fYXNzaWduKHt9LCBQcm9qZWN0Q2Fyb3VzZWxfMS5jYXJvdXNlbFN0eWxlcy50ZXh0T3ZlcmxheSkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHlfMS5kZWZhdWx0LCB7IHZhcmlhbnQ6IFwiY2FwdGlvblwiIH0sIGl0ZW0uZGVzY3JpcHRpb24pKSkpKTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogWzEsIDJdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQ2FyZCwgeyBrZXk6IGksIHN4OiBfX2Fzc2lnbih7IGhlaWdodDogZGltcy5oZWlnaHQgfSwgUHJvamVjdENhcm91c2VsXzEuY2Fyb3VzZWxTdHlsZXMuY2FyZCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCb3hfMS5kZWZhdWx0LCB7IHN4OiBfX2Fzc2lnbih7IHdpZHRoOiBkaW1zLndpZHRoIH0sIFByb2plY3RDYXJvdXNlbF8xLmNhcm91c2VsU3R5bGVzLm91dGVyQm94KSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQaG90b0xpYnJhcnlUd29Ub25lXzEuZGVmYXVsdCwgeyBzeDogeyB3aWR0aDogZGltcy53aWR0aCwgaGVpZ2h0OiBkaW1zLmhlaWdodCB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCb3hfMS5kZWZhdWx0LCB7IHN4OiBfX2Fzc2lnbih7fSwgUHJvamVjdENhcm91c2VsXzEuY2Fyb3VzZWxTdHlsZXMudGV4dE92ZXJsYXkpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcImNhcHRpb25cIiB9LCBcIlBob3RvIHVuYXZhaWxhYmxlIGF0IHRoZSBtb21lbnQuXCIpKSkpKTsgfSkpKSkpKSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgRmFkZVdyYXBwZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9zdHlsZWQvRmFkZVdyYXBwZXJcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChGYWRlV3JhcHBlcl8xLmRlZmF1bHQsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoNVwiIH0sIFwibG9hZGluZy4uLlwiKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkaW5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIFNsaWRlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvU2xpZGVcIikpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xudmFyIFNsaWRlV3JhcHBlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBzbGlkZUZyb21SZWYgPSBfYS5zbGlkZUZyb21SZWYsIGRpcmVjdGlvbiA9IF9hLmRpcmVjdGlvbiwgZGVsYXkgPSBfYS5kZWxheSwgdGltZW91dCA9IF9hLnRpbWVvdXQ7XG4gICAgdmFyIF9iID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIi0tc2xpZGUtYW5pbWF0ZWRPbkxvYWRcIik7XG4gICAgfSksIGFuaW1hdGVkT25Mb2FkID0gX2JbMF0sIHNldEFuaW1hdGVkT25Mb2FkID0gX2JbMV07XG4gICAgdmFyIF9jID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLCBzaG93Q29udGVudCA9IF9jWzBdLCBzZXRTaG93Q29udGVudCA9IF9jWzFdO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghYW5pbWF0ZWRPbkxvYWQpIHtcbiAgICAgICAgICAgIHZhciB0aW1lcl8xID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2V0U2hvd0NvbnRlbnQodHJ1ZSk7XG4gICAgICAgICAgICB9LCBkZWxheVxuICAgICAgICAgICAgICAgID8gY29uc3RhbnRzXzEuQU5JX0NPTlNULldSQVBQRVJfT05MT0FEX0RFTEFZICsgZGVsYXlcbiAgICAgICAgICAgICAgICA6IGNvbnN0YW50c18xLkFOSV9DT05TVC5XUkFQUEVSX09OTE9BRF9ERUxBWSk7IC8vIHdhaXQgdW50aWwgcGFnZSBpcyBsb2FkZWRcbiAgICAgICAgICAgIHNldEFuaW1hdGVkT25Mb2FkKHRydWUpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCItLXNsaWRlLWFuaW1hdGVkT25Mb2FkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGVhclRpbWVvdXQodGltZXJfMSk7IH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgICB2YXIgdGltZXJfMiA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNldFNob3dDb250ZW50KHRydWUpO1xuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGVsYXkpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsZWFyVGltZW91dCh0aW1lcl8yKTsgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFNob3dDb250ZW50KHRydWUpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTbGlkZV8xLmRlZmF1bHQsIHsgaW46IHNob3dDb250ZW50LCB0aW1lb3V0OiB0aW1lb3V0ID8gdGltZW91dCA6IGNvbnN0YW50c18xLkFOSV9DT05TVC5XUkFQUEVSX1NMSURFX1dSQVBQRVJfREVMQVksIGNvbnRhaW5lcjogc2xpZGVGcm9tUmVmLmN1cnJlbnQsIGRpcmVjdGlvbjogZGlyZWN0aW9uIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgY2hpbGRyZW4pKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gU2xpZGVXcmFwcGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBzY3JvbGxfYXJlYV8xID0gcmVxdWlyZShcIkBibHVyLXVpL3Njcm9sbC1hcmVhXCIpO1xudmFyIFNjcm9sbGFibGVDb250YWluZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgcmVmID0gX2EucmVmLCBzeCA9IF9hLnN4LCBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWU7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQ29udGFpbmVyLCB7IHN4OiBzeCwgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHJlZjogcmVmIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoc2Nyb2xsX2FyZWFfMS5TY3JvbGxBcmVhLCB7IGNsYXNzTmFtZXM6IHtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsU2Nyb2xsYmFyOiBcImgtMi41XCIsXG4gICAgICAgICAgICAgICAgcm9vdDogXCJ3LTYwIGgtNjAgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICBzY3JvbGxiYXI6IFwicC1bMXB4XVwiLFxuICAgICAgICAgICAgICAgIHRodW1iOiBcImJnLW5ldXRyYWwtODAwIGRhcms6YmctbmV1dHJhbC0xMDAgcm91bmRlZC1mdWxsIG9wYWNpdHktMzAgaG92ZXI6b3BhY2l0eS00MCB0cmFuc2l0aW9uLW9wYWNpdHlcIixcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbFNjcm9sbGJhcjogXCJ3LTIuNVwiLFxuICAgICAgICAgICAgfSwgZGlyOiBcImx0clwiLCBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLCBzY3JvbGxIaWRlRGVsYXk6IDYwMCwgc2hhZG93U2l6ZTogNTAsIHR5cGU6IFwiYWx3YXlzXCIsIHN0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9IH0sIGNoaWxkcmVuKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNjcm9sbGFibGVDb250YWluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgY2xpZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbS9jbGllbnRcIikpO1xudmFyIHJlYWN0X3JvdXRlcl9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xudmFyIHN0eWxlc18xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCIpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBBcHBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL0FwcFwiKSk7XG52YXIgdGhlbWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tdWkvdGhlbWVcIikpO1xucmVxdWlyZShcIi4vc3R5bGVzL2Jhc2Uuc2Nzc1wiKTtcbnZhciByb290ID0gY2xpZW50XzEuZGVmYXVsdC5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XG5yb290LnJlbmRlcihyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuU3RyaWN0TW9kZSwgbnVsbCxcbiAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuQnJvd3NlclJvdXRlciwgeyBiYXNlbmFtZTogXCIvXCIgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc3R5bGVzXzEuVGhlbWVQcm92aWRlciwgeyB0aGVtZTogdGhlbWVfMS5kZWZhdWx0LCBkZWZhdWx0TW9kZTogXCJsaWdodFwiLCBub1NzcjogdHJ1ZSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Dc3NCYXNlbGluZSwgbnVsbCksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChBcHBfMS5kZWZhdWx0LCBudWxsKSkpKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtdWlDb2xvclNjaGVtZXMgPSB7XG4gICAgY29sb3JTY2hlbWVzOiB7XG4gICAgICAgIGxpZ2h0OiB7XG4gICAgICAgICAgICBwYWxldHRlOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBcIiNmZmYzZGVcIixcbiAgICAgICAgICAgICAgICAgICAgcGFwZXI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiBcIiMxNDdGODI1OVwiLFxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxOYXY6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbjogXCIjNTM5OWRhXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyYXN0VGV4dDogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIG1haW46IFwiI2FhNTFmNzNGXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyYXN0VGV4dDogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5OiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGRhcms6IHtcbiAgICAgICAgICAgIHBhbGV0dGU6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFwiIzMwMzgzYmZmXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhcGVyOiBcIiMxZDIwMjVcIixcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiBcIiMxNDdGODI1OVwiLFxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxOYXY6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbjogXCIjNTNkOGRhZmZcIixcbiAgICAgICAgICAgICAgICAgICAgY29udHJhc3RUZXh0OiBcIiNmZmYzZGVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgICAgICAgICBtYWluOiBcIiM5ZDJkZmYzZlwiLFxuICAgICAgICAgICAgICAgICAgICBjb250cmFzdFRleHQ6IFwiI2ZmZjNkZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5OiBcIiNmZmYzZGVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IG11aUNvbG9yU2NoZW1lcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHVybF9nZW5fMSA9IHJlcXVpcmUoXCJAY2xvdWRpbmFyeS91cmwtZ2VuXCIpO1xudmFyIGNsZEluc3RhbmNlID0gbnVsbDtcbmZ1bmN0aW9uIGdldENsb3VkaW5hcnlJbnN0YW5jZSgpIHtcbiAgICBpZiAoIWNsZEluc3RhbmNlKSB7XG4gICAgICAgIGNsZEluc3RhbmNlID0gbmV3IHVybF9nZW5fMS5DbG91ZGluYXJ5KHtcbiAgICAgICAgICAgIGNsb3VkOiB7XG4gICAgICAgICAgICAgICAgY2xvdWROYW1lOiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0NMT1VEX05BTUUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiB7IHNlY3VyZTogdHJ1ZSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNsZEluc3RhbmNlO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Q2xvdWRpbmFyeUluc3RhbmNlKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgICAgICAgICByZXR1cm4gYXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvd25LZXlzKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICAgICAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgTG9hZGluZyA9ICgwLCByZWFjdF8xLmxhenkpKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9wYWdlcy9Mb2FkaW5nXCIpKTsgfSk7IH0pO1xudmFyIERlZmF1bHQgPSAoMCwgcmVhY3RfMS5sYXp5KShmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcGFnZXMvRGVmYXVsdFwiKSk7IH0pOyB9KTtcbnZhciBEb2VzTm90RXhpc3QgPSAoMCwgcmVhY3RfMS5sYXp5KShmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcGFnZXMvRG9lc05vdEV4aXN0XCIpKTsgfSk7IH0pO1xudmFyIEN1c3RvbU9wdGlvbnNEaWFsID0gKDAsIHJlYWN0XzEubGF6eSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vQ3VzdG9tT3B0aW9uc0RpYWxcIikpOyB9KTsgfSk7XG52YXIgR2xvYmFsTmF2ID0gKDAsIHJlYWN0XzEubGF6eSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvR2xvYmFsTmF2XCIpKTsgfSk7IH0pO1xudmFyIExhbmRpbmcgPSAoMCwgcmVhY3RfMS5sYXp5KShmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcGFnZXMvTGFuZGluZ1wiKSk7IH0pOyB9KTtcbnZhciBQcm9qZWN0cyA9ICgwLCByZWFjdF8xLmxhenkpKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9wYWdlcy9Qcm9qZWN0c1wiKSk7IH0pOyB9KTtcbnZhciBTZWxlY3Rpb24gPSAoMCwgcmVhY3RfMS5sYXp5KShmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcGFnZXMvcHJvamVjdHMvU2VsZWN0aW9uXCIpKTsgfSk7IH0pO1xudmFyIEFjYWRlbWljID0gKDAsIHJlYWN0XzEubGF6eSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL3BhZ2VzL3Byb2plY3RzL0FjYWRlbWljXCIpKTsgfSk7IH0pO1xudmFyIFBlcnNvbmFsID0gKDAsIHJlYWN0XzEubGF6eSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL3BhZ2VzL3Byb2plY3RzL1BlcnNvbmFsXCIpKTsgfSk7IH0pO1xudmFyIEFib3V0TWUgPSAoMCwgcmVhY3RfMS5sYXp5KShmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcGFnZXMvQWJvdXRcIikpOyB9KTsgfSk7XG52YXIgQ29udGFjdCA9ICgwLCByZWFjdF8xLmxhenkpKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9wYWdlcy9Db250YWN0XCIpKTsgfSk7IH0pO1xudmFyIFByb2plY3RNb2RhbENhcm91c2VsID0gKDAsIHJlYWN0XzEubGF6eSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvUHJvamVjdE1vZGFsQ2Fyb3VzZWxcIikpOyB9KTsgfSk7XG52YXIgcHJvamVjdF9saXN0XzEgPSByZXF1aXJlKFwiLi4vY29udGVudC9wcm9qZWN0cy9wcm9qZWN0LWxpc3RcIik7XG52YXIgQXBwID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCByZWFjdF9yb3V0ZXJfZG9tXzEudXNlTG9jYXRpb24pKCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICB2YXIgYmFja2dyb3VuZCA9IGxvY2F0aW9uLnN0YXRlICYmIGxvY2F0aW9uLnN0YXRlLmJhY2tncm91bmQ7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGNsZWFuIHVwIG9uIHVubW91bnRcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCItLWdyb3ctYW5pbWF0ZWRPbkxvYWRcIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiLS1zbGlkZS1hbmltYXRlZE9uTG9hZFwiKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJveCwgeyBjbGFzc05hbWU6IFwiQXBwXCIgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ3VzdG9tT3B0aW9uc0RpYWwsIG51bGwpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLlN1c3BlbnNlLCB7IGZhbGxiYWNrOiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nLCBudWxsKSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoR2xvYmFsTmF2LCBudWxsKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQm94LCB7IGNsYXNzTmFtZTogbG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvXCIgPyBcIkNvbnRhaW5lclwiIDogXCJDb250YWluZXIgQ29udGFpbmVyLS1vcGVuXCIgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGVzLCB7IGxvY2F0aW9uOiBiYWNrZ3JvdW5kIHx8IGxvY2F0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBwYXRoOiBcIi9cIiwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTGFuZGluZywgbnVsbCkgfSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBwYXRoOiBcImFib3V0XCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFib3V0TWUsIG51bGwpIH0pLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIHsgcGF0aDogXCJwcm9qZWN0c1wiLCBlbGVtZW50OiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcm9qZWN0cywgbnVsbCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBpbmRleDogdHJ1ZSwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0aW9uLCBudWxsKSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBwYXRoOiBcInBlcnNvbmFsXCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBlcnNvbmFsLCBudWxsKSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBwYXRoOiBcInBlcnNvbmFsLypcIiwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLk5hdmlnYXRlLCB7IHRvOiBcIi9wcm9qZWN0cy9wZXJzb25hbFwiLCByZXBsYWNlOiB0cnVlIH0pIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlLCB7IHBhdGg6IFwiYWNhZGVtaWNcIiwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQWNhZGVtaWMsIG51bGwpIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlLCB7IHBhdGg6IFwiYWNhZGVtaWMvKlwiLCBlbGVtZW50OiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuTmF2aWdhdGUsIHsgdG86IFwiL3Byb2plY3RzL2FjYWRlbWljXCIsIHJlcGxhY2U6IHRydWUgfSkgfSkpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIHsgcGF0aDogXCJjb250YWN0XCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbnRhY3QsIG51bGwpIH0pLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIHsgcGF0aDogXCJkZWZhdWx0XCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERlZmF1bHQsIG51bGwpIH0pLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIHsgcGF0aDogXCIqXCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERvZXNOb3RFeGlzdCwgbnVsbCkgfSkpLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgJiYgKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZXMsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RfbGlzdF8xLlByb2plY3RMaXN0LnBlcnNvbmFsLm1hcChmdW5jdGlvbiAocHJvaiwgaSkgeyByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBrZXk6IGksIHBhdGg6IFwicHJvamVjdHMvcGVyc29uYWwvXCIuY29uY2F0KHByb2ouYWJiciksIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFByb2plY3RNb2RhbENhcm91c2VsLCB7IHByb2o6IHByb2ogfSkgfSkpOyB9KSxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdF9saXN0XzEuUHJvamVjdExpc3QuYWNhZGVtaWMubWFwKGZ1bmN0aW9uIChwcm9qLCBpKSB7IHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlLCB7IGtleTogaSwgcGF0aDogXCJwcm9qZWN0cy9hY2FkZW1pYy9cIi5jb25jYXQocHJvai5hYmJyKSwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHJvamVjdE1vZGFsQ2Fyb3VzZWwsIHsgcHJvajogcHJvaiB9KSB9KSk7IH0pKSkpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG11aURyYXdlciA9IHtcbiAgICBNdWlEcmF3ZXI6IHtcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgICAgIHBhcGVyQW5jaG9yVG9wOiB7XG4gICAgICAgICAgICAgICAgdG9wOiBcIjQwcHhcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcGVyOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNjAwcHhcIixcbiAgICAgICAgICAgICAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSc6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBtdWlEcmF3ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgICAgICAgICByZXR1cm4gYXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvd25LZXlzKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICAgICAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgRmFkZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0ZhZGVcIikpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBGYWRlV3JhcHBlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBkZWxheSA9IF9hLmRlbGF5LCB0aW1lb3V0ID0gX2EudGltZW91dDtcbiAgICB2YXIgX2IgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksIHNob3dDb250ZW50ID0gX2JbMF0sIHNldFNob3dDb250ZW50ID0gX2JbMV07XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRTaG93Q29udGVudCh0cnVlKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xlYXJUaW1lb3V0KHRpbWVyKTsgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZhZGVfMS5kZWZhdWx0LCB7IGluOiBkZWxheSA/IHNob3dDb250ZW50IDogdHJ1ZSwgdGltZW91dDogdGltZW91dCA/IHRpbWVvdXQgOiBjb25zdGFudHNfMS5BTklfQ09OU1QuV1JBUFBFUl9GQURFX1dSQVBQRVJfREVMQVksIGVhc2luZzogeyBlbnRlcjogbWF0ZXJpYWxfMS5lYXNpbmcuc2hhcnAsIGV4aXQ6IG1hdGVyaWFsXzEuZWFzaW5nLmVhc2VPdXQgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGNoaWxkcmVuKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEZhZGVXcmFwcGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlByb2plY3RDYXRlZ29yaWVzID0gZXhwb3J0cy5Qcm9qZWN0TGlzdCA9IHZvaWQgMDtcbnZhciBnZ2pfMjAyMF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BlcnNvbmFsL2dnai0yMDIwXCIpKTtcbnZhciBzcG9jaGlfdjBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wZXJzb25hbC9zcG9jaGktdjBcIikpO1xudmFyIHdlYnNpdGVfdjFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wZXJzb25hbC93ZWJzaXRlLXYxXCIpKTtcbnZhciBmb29kcGlja18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BlcnNvbmFsL2Zvb2RwaWNrXCIpKTtcbnZhciBmYWxsaW5nX2Jsb2Nrc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BlcnNvbmFsL2ZhbGxpbmctYmxvY2tzXCIpKTtcbnZhciBQZXJzb25hbFByb2plY3RzID0gW1xuICAgIGdnal8yMDIwXzEuZGVmYXVsdCxcbiAgICBzcG9jaGlfdjBfMS5kZWZhdWx0LFxuICAgIHdlYnNpdGVfdjFfMS5kZWZhdWx0LFxuICAgIGZvb2RwaWNrXzEuZGVmYXVsdCxcbiAgICBmYWxsaW5nX2Jsb2Nrc18xLmRlZmF1bHQsXG5dO1xudmFyIGJvYmJ5c19icmVha291dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FjYWRlbWljL2JvYmJ5cy1icmVha291dFwiKSk7XG52YXIgcGxheWVyX3BlcmZvcm1hbmNlX3Byb2plY3Rpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9hY2FkZW1pYy9wbGF5ZXItcGVyZm9ybWFuY2UtcHJvamVjdGlvblwiKSk7XG52YXIgbW90aW9uX2FydF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FjYWRlbWljL21vdGlvbi1hcnRcIikpO1xudmFyIGtpbmdkb21fb2ZfaGVsaW9zXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYWNhZGVtaWMva2luZ2RvbS1vZi1oZWxpb3NcIikpO1xudmFyIGFudGxpb25fdG93ZXJfZGVmZW5zZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FjYWRlbWljL2FudGxpb24tdG93ZXItZGVmZW5zZVwiKSk7XG52YXIgQWNhZGVtaWNQcm9qZWN0cyA9IFtcbiAgICBib2JieXNfYnJlYWtvdXRfMS5kZWZhdWx0LFxuICAgIHBsYXllcl9wZXJmb3JtYW5jZV9wcm9qZWN0aW9uXzEuZGVmYXVsdCxcbiAgICBtb3Rpb25fYXJ0XzEuZGVmYXVsdCxcbiAgICBraW5nZG9tX29mX2hlbGlvc18xLmRlZmF1bHQsXG4gICAgYW50bGlvbl90b3dlcl9kZWZlbnNlXzEuZGVmYXVsdCxcbl07XG52YXIgUHJvamVjdENhdGVnb3JpZXM7XG4oZnVuY3Rpb24gKFByb2plY3RDYXRlZ29yaWVzKSB7XG4gICAgUHJvamVjdENhdGVnb3JpZXNbXCJQRVJTT05BTFwiXSA9IFwicGVyc29uYWxcIjtcbiAgICBQcm9qZWN0Q2F0ZWdvcmllc1tcIkFDQURFTUlDXCJdID0gXCJhY2FkZW1pY1wiO1xufSkoUHJvamVjdENhdGVnb3JpZXMgfHwgKGV4cG9ydHMuUHJvamVjdENhdGVnb3JpZXMgPSBQcm9qZWN0Q2F0ZWdvcmllcyA9IHt9KSk7XG52YXIgUHJvamVjdExpc3QgPSB7XG4gICAgcGVyc29uYWw6IFBlcnNvbmFsUHJvamVjdHMsXG4gICAgYWNhZGVtaWM6IEFjYWRlbWljUHJvamVjdHMsXG59O1xuZXhwb3J0cy5Qcm9qZWN0TGlzdCA9IFByb2plY3RMaXN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFOSV9DT05TVCA9IHZvaWQgMDtcbnZhciBHRU5FUklDX0NBUkRfREVMQVkgPSA0MDA7XG52YXIgR0VORVJJQ19XUkFQUEVSX0RFTEFZID0gNzAwO1xuZXhwb3J0cy5BTklfQ09OU1QgPSB7XG4gICAgLy8gR0VORVJJQ1xuICAgIFdSQVBQRVJfT05MT0FEX0RFTEFZOiA1MDAsXG4gICAgV1JBUFBFUl9HUk9XX1dSQVBQRVJfREVMQVk6IEdFTkVSSUNfV1JBUFBFUl9ERUxBWSxcbiAgICBXUkFQUEVSX1NMSURFX1dSQVBQRVJfREVMQVk6IEdFTkVSSUNfV1JBUFBFUl9ERUxBWSxcbiAgICBXUkFQUEVSX0ZBREVfV1JBUFBFUl9ERUxBWTogODAwLFxuICAgIC8vIEdMT0JBTCBOQVZcbiAgICBHTE9CQUxfTkFWX0xBTkRJTkdfREVMQVk6IDEwMDAsXG4gICAgR0xPQkFMX05BVl9ERUxBWTogNTAwLFxuICAgIC8vIEFCT1VUXG4gICAgQUJPVVRfQ0FSRF9ERUxBWTogR0VORVJJQ19DQVJEX0RFTEFZLFxuICAgIC8vIFBST0pFQ1RTXG4gICAgUFJPSl9ST1dfQlJFQUtQT0lOVDogMTQyNCwgLy8gPj0gMTQyNHB4IGZpdHMgMyBjYXJkc1xuICAgIFBST0pfU1VCSEVBRElOR19ERUxBWTogMzAwLCAvLyBzYW1lIGFzIFdSQVBQRVJfRkFERV9XUkFQUEVSX0RFTEFZXG4gICAgUFJPSl9DQVJEU19ERUxBWTogR0VORVJJQ19DQVJEX0RFTEFZLFxuICAgIFBST0pfQ0FSRF9XSURUSDogeyB4czogNDAwLCBtZDogNDUwLCBsZzogNjAwIH0sXG4gICAgLy8gQ09OVEFDVFxuICAgIENPTlRBQ1RfQkFER0VfREVMQVk6IEdFTkVSSUNfQ0FSRF9ERUxBWSxcbiAgICBDT05UQUNUX1BPUlRSQUlUX0hFQURJTkdfREVMQVk6IEdFTkVSSUNfQ0FSRF9ERUxBWSAqIDYsXG4gICAgQ09OVEFDVF9QT1JUUkFJVF9QSUNfREVMQVk6IEdFTkVSSUNfQ0FSRF9ERUxBWSAqIDYsXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBTY3JvbGxhYmxlQ29udGFpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvc3R5bGVkL1Njcm9sbGFibGVDb250YWluZXJcIikpO1xudmFyIERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNjcm9sbGFibGVDb250YWluZXJfMS5kZWZhdWx0LCBudWxsLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiYm9keTFcIiB9LCBcIm11Y2ggd293LCBzdWNoIGVtcHR5XCIpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IERlZmF1bHQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtdWlUeXBvZ3JhcGh5ID0ge1xuICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgICAgZm9udEZhbWlseTogW1wiSW5jb25zb2xhdGEsIFNvdXJjZSBDb2RlIFBybywgS2FybGFcIl0uam9pbihcIixcIiksXG4gICAgICAgIGgzOiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxNSxcbiAgICAgICAgICAgIG1hcmdpblRvcDogMjAsXG4gICAgICAgIH0sXG4gICAgICAgIGg0OiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICAgICAgfSxcbiAgICAgICAgaDU6IHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiU291cmNlIENvZGUgUHJvXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDUsXG4gICAgICAgIH0sXG4gICAgICAgIHN1YnRpdGxlMToge1xuICAgICAgICAgICAgZm9udEZhbWlseTogXCJJbmNvbnNvbGF0YVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICB9LFxuICAgICAgICBzdWJ0aXRsZTI6IHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSW5jb25zb2xhdGFcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTE6IHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiS2FybGFcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTI6IHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiS2FybGFcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgfSxcbiAgICAgICAgY2FwdGlvbjoge1xuICAgICAgICAgICAgZm9udEZhbWlseTogXCJLYXJsYVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgICAgICB9LFxuICAgICAgICAvLyB1c2VkIGluIGxhbmRpbmcgcGFnZSBvbmx5XG4gICAgICAgIGgxOiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkluY29uc29sYXRhXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgIH0sXG4gICAgICAgIGgyOiB1bmRlZmluZWQsXG4gICAgICAgIGg2OiB1bmRlZmluZWQsXG4gICAgfSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBtdWlUeXBvZ3JhcGh5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ2dqMjAyMCA9IHtcbiAgICBhYmJyOiBcImktd2FzLW5ldmVyLWhlcmVcIixcbiAgICBuYW1lOiBcIkdHSjogSSBXYXMgTmV2ZXIgSGVyZVwiLFxuICAgIGRhdGU6IFwiSmFuIDIwMjAgLSBGZWIgMjAyMFwiLFxuICAgIHRhZ3M6IFtcIkdHSi0yMDIwXCIsIFwiVW5pdHlcIiwgXCJDI1wiLCBcIlN0cmF0ZWd5XCIsIFwiR2FtZVwiXSxcbiAgICBjYXRlZ29yeTogXCIyRCBTdHJhdGVneSBHYW1lXCIsXG4gICAgbGluazoge1xuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9GbHVmZmlzYXVydXMvR0dKLTIwMjBcIixcbiAgICAgICAgaG9zdDogXCJodHRwOi8vYml0Lmx5L1JhdFRoaWVmXCIsXG4gICAgfSxcbiAgICBkZXRhaWw6IHtcbiAgICAgICAgc2hvcnQ6IFwiT3VyIHRlYW0ncyB0YWtlIG9uIHRoZSBHbG9iYWwgR2FtZSBKYW0gMjAyMCB0aGVtZTogUmVwYWlyLiBBIHN0cmF0ZWd5IGdhbWUgd2l0aCB1bmlxdWUgYW5kIGVtZXJnZW50IG1lY2hhbmljcy5cIixcbiAgICAgICAgbG9uZzogW10sXG4gICAgfSxcbiAgICBpbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImdnai90aXRsZS1zY3JlZW5fdjl6dnlqXCIsXG4gICAgICAgICAgICBhbHQ6IFwiR0dKLTIwMjAgSSBXYXMgTmV2ZXIgSGVyZTogVGl0bGUgU2NyZWVuXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lJ3MgdGl0bGUgc2NyZWVuLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiZ2dqL3RoZS1zcXVhZF9mZXN1dW1cIixcbiAgICAgICAgICAgIGFsdDogXCJHR0otMjAyMCBJIFdhcyBOZXZlciBIZXJlOiBUZWFtIFBob3RvXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgU3F1YWQhIEZyb20gbGVmdCB0byByaWdodDogQW5ndXMgSG9uLCBBaG1lZCBBYnV6dXJhaXEsIEFuc29uIENocmlzdG8sIEpvcmRhbiBXYXR0ZXJzb24sIExpbHkgWmFyaWZcIixcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdnajIwMjA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubXVpU3BlZWREaWFsQWN0aW9uID0gZXhwb3J0cy5tdWlTcGVlZERpYWwgPSB2b2lkIDA7XG5leHBvcnRzLm11aVNwZWVkRGlhbCA9IHtcbiAgICBNdWlTcGVlZERpYWw6IHtcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIsIC8vIGFsaWducyBhY3Rpb25zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFiOiB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIGFjdHVhbCBpY29uIG9uIHRoZSBzcGVlZCBkaWFsIGl0c2VsZlxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuZXhwb3J0cy5tdWlTcGVlZERpYWxBY3Rpb24gPSB7XG4gICAgTXVpU3BlZWREaWFsQWN0aW9uOiB7XG4gICAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgICAgICAvLyBmYWIgY29udGFpbmVyIHRoYXQgd3JhcHMgYWN0aW9uIGNvbnRlbnRcbiAgICAgICAgICAgIGZhYjoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcImZpdC1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcInZhcigtLWN1c3RvbS1tdWktdGhlbWUtc2hhcGUtYm9yZGVyUmFkaXVzKVwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbXVpQ3NzQmFzZWxpbmUgPSB7XG4gICAgTXVpQ3NzQmFzZWxpbmU6IHtcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IFwiXFxuICAgICAgICBAZm9udC1mYWNlIHtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YSc7XFxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgZm9udC1zdHJldGNoOiAxMDAlO1xcbiAgICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICAgICAgICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9pbmNvbnNvbGF0YS92MzcvUWxkZ05UaExxUndILU9KMVVIamxLRU5WemtXR1ZrTDNHWlFtQXdMWXhZV0kycWZkbTdMcHAySTdXUjMybHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG4gICAgICAgICAgdW5pY29kZS1yYW5nZTogVTAwMDAtMDBGRiwgVTAxMzEsIFUwMTUyLTAxNTMsIFUwMkJCLTAyQkMsIFUwMkM2LCBVMDJEQSwgVTAyREMsIFUwMzA0LCBVMDMwOCwgVTAzMjksIFUyMDAwLTIwNkYsIFUyMEFDLCBVMjEyMiwgVTIxOTEsIFUyMTkzLCBVMjIxMiwgVTIyMTUsIFVGRUZGLCBVRkZGRDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBmb250LWZhY2Uge1xcbiAgICAgICAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJztcXG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICBmb250LXN0cmV0Y2g6IDEwMCU7XFxuICAgICAgICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9pbmNvbnNvbGF0YS92MzcvUWxkZE5UaExxUndILU9KMVVIamxLRU5WemtXR1ZrTDNHWlFtQXdMeXlhMTUud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG4gICAgICAgICAgdW5pY29kZS1yYW5nZTogVTAwMDAtMDBGRiwgVTAxMzEsIFUwMTUyLTAxNTMsIFUwMkJCLTAyQkMsIFUwMkM2LCBVMDJEQSwgVTAyREMsIFUwMzA0LCBVMDMwOCwgVTAzMjksIFUyMDAwLTIwNkYsIFUyMEFDLCBVMjEyMiwgVTIxOTEsIFUyMTkzLCBVMjIxMiwgVTIyMTUsIFVGRUZGLCBVRkZGRDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBmb250LWZhY2Uge1xcbiAgICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybyc7XFxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvc291cmNlY29kZXByby92MzAvSElfU2lZc0tJTHhScGczaElQNnNKN2ZNN1BxbFBldlcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG4gICAgICAgICAgdW5pY29kZS1yYW5nZTogVTAwMDAtMDBGRiwgVTAxMzEsIFUwMTUyLTAxNTMsIFUwMkJCLTAyQkMsIFUwMkM2LCBVMDJEQSwgVTAyREMsIFUwMzA0LCBVMDMwOCwgVTAzMjksIFUyMDAwLTIwNkYsIFUyMEFDLCBVMjEyMiwgVTIxOTEsIFUyMTkzLCBVMjIxMiwgVTIyMTUsIFVGRUZGLCBVRkZGRDtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICBAZm9udC1mYWNlIHtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdLYXJsYSc7XFxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mva2FybGEvdjMyL3FrQjlYdllDNnRyQVQ1NVpCaTF1ZVFWSWpRVEQtSnJJSDJHN255dGtIUnlROHA0d1VqZTZiZy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbiAgICAgICAgICB1bmljb2RlLXJhbmdlOiBVMDAwMC0wMEZGLCBVMDEzMSwgVTAxNTItMDE1MywgVTAyQkItMDJCQywgVTAyQzYsIFUwMkRBLCBVMDJEQywgVTAzMDQsIFUwMzA4LCBVMDMyOSwgVTIwMDAtMjA2RiwgVTIwQUMsIFUyMTIyLCBVMjE5MSwgVTIxOTMsIFUyMjEyLCBVMjIxNSwgVUZFRkYsIFVGRkZEO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgQGZvbnQtZmFjZSB7XFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnS2FybGEnO1xcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9rYXJsYS92MzIvcWtCS1h2WUM2dHJBVDdSUU5OSzJFRzdTSXdQV01ObENWM2xJYjdNLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICAgICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUwMDAwLTAwRkYsIFUwMTMxLCBVMDE1Mi0wMTUzLCBVMDJCQi0wMkJDLCBVMDJDNiwgVTAyREEsIFUwMkRDLCBVMDMwNCwgVTAzMDgsIFUwMzI5LCBVMjAwMC0yMDZGLCBVMjBBQywgVTIxMjIsIFUyMTkxLCBVMjE5MywgVTIyMTIsIFUyMjE1LCBVRkVGRiwgVUZGRkQ7XFxuICAgICAgICB9XFxuICAgICAgXCIsXG4gICAgfSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBtdWlDc3NCYXNlbGluZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGtpbmdkb21PZkhlbGlvcyA9IHtcbiAgICBhYmJyOiBcImtpbmdkb20tb2YtaGVsaW9zXCIsXG4gICAgbmFtZTogXCJLaW5nZG9tIG9mIEhlbGlvc1wiLFxuICAgIGRhdGU6IFwiT2N0IDIwMTggLSBEZWMgMjAxOFwiLFxuICAgIHRhZ3M6IFtcIlVuaXR5XCIsIFwiQyNcIiwgXCJHYW1lIERldlwiLCBcIkdhbWUgRGVzaWduXCIsIFwiR2FtZVwiXSxcbiAgICBjYXRlZ29yeTogXCIyRCBTaWRlLVNjcm9sbGluZyBQbGF0Zm9ybWVyIEdhbWVcIixcbiAgICBsaW5rOiB7XG4gICAgICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0ZsdWZmaXNhdXJ1cy9raW5nZG9tLW9mLWhlbGlvc1wiLFxuICAgICAgICBob3N0OiBcImJpdC5seS9Lb0hlbGlvc1wiLFxuICAgIH0sXG4gICAgZGV0YWlsOiB7XG4gICAgICAgIHNob3J0OiBcIjJEIHNpZGUtc2Nyb2xsaW5nIHBsYXRmb3JtZXIgUlBHIC0gcGxheSBhcyB0d28gcHJvdGFnb25pc3RzIHdpdGggZGlzdGluY3Qgc2tpbGwgc2V0cyB0byBwcm9ncmVzcyB0aHJvdWdoIHRoZSBnYW1lLlwiLFxuICAgICAgICBsb25nOiBbXSxcbiAgICB9LFxuICAgIGltYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiaGVsaW9zL21haW4tc2NyZWVuX2V1dGxuaFwiLFxuICAgICAgICAgICAgYWx0OiBcIkhlbGlvczogTWFpbiBTY3JlZW5cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlN0YXJ0IHNjcmVlbi5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImhlbGlvcy9jaGFyLXhfdjI4bnhsXCIsXG4gICAgICAgICAgICBhbHQ6IFwiSGVsaW9zOiBQcm90YWdvbmlzdFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTWFpbiBwcm90YWdvbmlzdCB3aXRoIGRpc3RpbmN0IHNraWxsIHNldC5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImhlbGlvcy9jaGFyLXlfYXR4NWFhXCIsXG4gICAgICAgICAgICBhbHQ6IFwiSGVsaW9zOiBQcm90YWdvbmlzdCdzIHlvdW5nZXIgYnJvdGhlclwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUHJvdGFnb25pc3QncyB5b3VuZ2VyIGJyb3RoZXIgd2l0aCBhIGRpZmZlcmVudCBza2lsbCBzZXQuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJoZWxpb3Mvc2NlbmUtZmxvdy1jaGFydF92Zm1uajFcIixcbiAgICAgICAgICAgIGFsdDogXCJIZWxpb3M6IFNjZW5lIEZsb3cgQ2hhcnRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUncyBtYWluIHNjZW5lIGZsb3cgY2hhcnQuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJoZWxpb3Mvc3RvcnktbWFwX2RqcmdieFwiLFxuICAgICAgICAgICAgYWx0OiBcIkhlbGlvczogU3RvcnkgbWFwIG9mIHRoZSBnYW1lXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lJ3Mgc3RvcnkgbWFwIGFuZCBwcm9ncmVzc2lvbi5cIixcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGtpbmdkb21PZkhlbGlvcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXB1dGVOb2RlU3R5bGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBub2RlQ21wU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIHZhciBub2RlTWFyZ2luID0ge1xuICAgICAgICB3aWR0aDogcGFyc2VJbnQobm9kZUNtcFN0eWxlLm1hcmdpbkxlZnQpICsgcGFyc2VJbnQobm9kZUNtcFN0eWxlLm1hcmdpblJpZ2h0KSxcbiAgICAgICAgaGVpZ2h0OiBwYXJzZUludChub2RlQ21wU3R5bGUubWFyZ2luVG9wKSArIHBhcnNlSW50KG5vZGVDbXBTdHlsZS5tYXJnaW5Cb3R0b20pLFxuICAgIH07XG4gICAgdmFyIG5vZGVQYWRkaW5nID0ge1xuICAgICAgICB3aWR0aDogcGFyc2VJbnQobm9kZUNtcFN0eWxlLnBhZGRpbmdMZWZ0KSArIHBhcnNlSW50KG5vZGVDbXBTdHlsZS5wYWRkaW5nUmlnaHQpLFxuICAgICAgICBoZWlnaHQ6IHBhcnNlSW50KG5vZGVDbXBTdHlsZS5wYWRkaW5nVG9wKSArIHBhcnNlSW50KG5vZGVDbXBTdHlsZS5wYWRkaW5nQm90dG9tKSxcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBub2RlLm9mZnNldFdpZHRoIC0gbm9kZU1hcmdpbi53aWR0aCAtIG5vZGVQYWRkaW5nLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IG5vZGUub2Zmc2V0SGVpZ2h0IC0gbm9kZU1hcmdpbi5oZWlnaHQgLSBub2RlUGFkZGluZy5oZWlnaHRcbiAgICB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNvbXB1dGVOb2RlU3R5bGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIENhcmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkXCIpKTtcbnZhciBDYXJkQ29udGVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50XCIpKTtcbnZhciBUeXBvZ3JhcGh5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiKSk7XG52YXIgQ2FyZE1lZGlhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhXCIpKTtcbnZhciBzdHlsZXNfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiKTtcbnZhciBJY29uQnV0dG9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvblwiKSk7XG52YXIgRXhwYW5kTW9yZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZE1vcmVcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBQcm9qZWN0Q2Fyb3VzZWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Qcm9qZWN0Q2Fyb3VzZWxcIikpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vc3R5bGVkL2NvbnN0YW50c1wiKTtcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbnZhciBFeHBhbmRNb3JlID0gKDAsIHN0eWxlc18xLnN0eWxlZCkoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGV4cGFuZCA9IHByb3BzLmV4cGFuZCwgb3RoZXIgPSBfX3Jlc3QocHJvcHMsIFtcImV4cGFuZFwiXSk7IC8vZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbl8xLmRlZmF1bHQsIF9fYXNzaWduKHt9LCBvdGhlcikpO1xufSkoZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRoZW1lID0gX2EudGhlbWU7XG4gICAgcmV0dXJuICh7XG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ0cmFuc2Zvcm1cIiwge1xuICAgICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXN0LFxuICAgICAgICB9KSxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wczogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleHBhbmQgPSBfYS5leHBhbmQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhZXhwYW5kO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgwZGVnKVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4cGFuZCA9IF9hLmV4cGFuZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhZXhwYW5kO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgxODBkZWcpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSk7XG59KTtcbnZhciBQcm9qZWN0QmxvY2sgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgcHJvaiA9IF9hLnByb2o7XG4gICAgdmFyIF9iID0gcmVhY3RfMS5kZWZhdWx0LnVzZVN0YXRlKGZhbHNlKSwgZXhwYW5kZWQgPSBfYlswXSwgc2V0RXhwYW5kZWQgPSBfYlsxXTtcbiAgICAvKlxuICAgICAqIGxvY2F0aW9uIGFzIGEga2V5IGhlcmUgaGVscHMgcmVhY3QgcmVjb2duaXplIHdoaWNoIGlzIHBhcmVudCB2cyBjaGlsZFxuICAgICAqIHdoZW4gcGF0aCB1cGRhdGVzLCB0aGUgc3RhdGUgb2YgdGhlIHBhcmVudCBpcyBwcmVzZXJ2ZWQgc2luY2UgUmVhY3QgY2FuIGtlZXAgdHJhY2tcbiAgICAgKiBvZiB3aGljaCBpcyB0aGUgcGFyZW50IHZpYSBpdCdzIGxvY2F0aW9uLnBhdGhuYW1lLlxuICAgICAqIGluIHRoaXMgY2FzZSwgZnVsbHNjcmVlbiBtb2RhbCBjYXJvdXNlbCBpcyB0aGUgY2hpbGQsIGZvcmNpbmcgcHJvamVjdCBibG9jayB0b1xuICAgICAqIHJlcmVuZGVyIG9yIHByZXNlcnZlIGl0cyBzdGF0ZVxuICAgICAqXG4gICAgICogc2VhcmNoOiBcInJlYWN0IHJlcmVuZGVyIHdpdGgga2V5IGxvY2F0aW9uXCIgb3IgXCJyZWFjdCByZXJlbmRlciBwYXJlbnQgd2l0aCBjaGlsZCBrZXkgbG9jYXRpb25cIlxuICAgICAqL1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCByZWFjdF9yb3V0ZXJfZG9tXzEudXNlTG9jYXRpb24pKCk7XG4gICAgdmFyIGNhcmREaW1zID0ge1xuICAgICAgICB3aWR0aDogY29uc3RhbnRzXzEuQU5JX0NPTlNULlBST0pfQ0FSRF9XSURUSCxcbiAgICB9O1xuICAgIHZhciBoYW5kbGVFeHBhbmRDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKTtcbiAgICB9O1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2FyZF8xLmRlZmF1bHQsIHsgc3g6IF9fYXNzaWduKHt9LCBjYXJkRGltcykgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2FyZE1lZGlhXzEuZGVmYXVsdCwgeyBzeDogeyBtaW5IZWlnaHQ6IDIwMCB9IH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcm9qZWN0Q2Fyb3VzZWxfMS5kZWZhdWx0LCB7IGtleTogbG9jYXRpb24ucGF0aG5hbWUsIHByb2o6IHByb2osIHdpZHRoOiB7IHdpZHRoOiBjYXJkRGltcy53aWR0aCB9LCBoZWlnaHQ6IDQwMCB9KSksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRDb250ZW50XzEuZGVmYXVsdCwgeyBzeDogeyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH0gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHlfMS5kZWZhdWx0LCB7IGNvbXBvbmVudDogXCJkaXZcIiwgdmFyaWFudDogXCJoNVwiIH0sIHByb2oubmFtZSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcInN1YnRpdGxlMVwiLCBjb21wb25lbnQ6IFwiZGl2XCIsIHN4OiB7IGNvbG9yOiBcInRleHQuc2Vjb25kYXJ5XCIgfSB9LCBwcm9qLmNhdGVnb3J5KSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuR3JpZCwgeyBjb250YWluZXI6IHRydWUsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBzcGFjaW5nOiAyLCByb3dTcGFjaW5nOiAwLCB3aWR0aDogXCI5MCVcIiB9LCBwcm9qLnRhZ3MubWFwKGZ1bmN0aW9uICh0YWcsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHlfMS5kZWZhdWx0LCB7IGtleTogaSwgdmFyaWFudDogXCJzdWJ0aXRsZTJcIiwgY29tcG9uZW50OiBcImRpdlwiLCBzeDogeyBjb2xvcjogXCJ0ZXh0LnNlY29uZGFyeVwiIH0gfSwgdGFnKSk7XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNhcmRBY3Rpb25zLCB7IGRpc2FibGVTcGFjaW5nOiB0cnVlLCBzeDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEV4cGFuZE1vcmUsIHsgZXhwYW5kOiBleHBhbmRlZCwgb25DbGljazogaGFuZGxlRXhwYW5kQ2xpY2ssIFwiYXJpYS1leHBhbmRlZFwiOiBleHBhbmRlZCwgXCJhcmlhLWxhYmVsXCI6IFwic2hvdyBtb3JlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRXhwYW5kTW9yZV8xLmRlZmF1bHQsIG51bGwpKSkpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNvbGxhcHNlLCB7IGluOiBleHBhbmRlZCwgdGltZW91dDogXCJhdXRvXCIsIHVubW91bnRPbkV4aXQ6IHRydWUgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRDb250ZW50XzEuZGVmYXVsdCwgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcImJvZHkyXCIgfSwgcHJvai5kYXRlKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcImJvZHkxXCIgfSwgcHJvai5kZXRhaWwuc2hvcnQpKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBQcm9qZWN0QmxvY2s7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDc5MjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZmx1ZmZpc2F1cnVzX2dpdGh1Yl9pb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtmbHVmZmlzYXVydXNfZ2l0aHViX2lvXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbNDQ2XSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oNTM5MDApKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=