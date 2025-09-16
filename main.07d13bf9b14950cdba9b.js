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
                    react_1.default.createElement(material_1.Button, __assign({ ref: homeIconButtonRef, component: react_router_dom_1.Link, to: "/" }, muiButton_1.globalNavButtonProps, { sx: __assign({}, muiButton_1.globalNavButtonProps.sx), onMouseEnter: function () { return setHoverPath("~"); } }), "\uD83C\uDFE0"),
                    react_1.default.createElement(material_1.Button, __assign({ className: "Nav-link__no-events" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), { color: theme.vars.palette.primary.dark, padding: 0 }) }), ":/"),
                    react_1.default.createElement(material_1.Button, __assign({ component: react_router_dom_1.Link, to: currPath }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), { padding: 0 }), onMouseEnter: function () { return setHoverPath("/" + currPath); } }), currPath == "" ? "" : currPath + "/"),
                    subPath && (react_1.default.createElement(material_1.Button, __assign({ component: react_router_dom_1.Link, to: currPath + "/" + subPath }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), { padding: 0 }), onMouseEnter: function () {
                            return setHoverPath("/" + currPath + "/" + subPath);
                        } }), subPath + "/")),
                    react_1.default.createElement(material_1.Button, __assign({ className: "Nav-link__no-events" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), { color: theme.vars.palette.primary.dark, padding: 0 }) }), "~$"),
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
var react_toastify_1 = __webpack_require__(90701);
function CustomOptionsDial() {
    var _a = (0, material_1.useColorScheme)(), mode = _a.mode, systemMode = _a.systemMode, setMode = _a.setMode;
    var actions = [
        { icon: React.createElement(ToggleImageQualityButtons_1.default, null), name: "Image Quality" },
        {
            icon: React.createElement(ToggleThemeButtons_1.default, { mode: mode, setMode: setMode }),
            name: "Theme Mode",
        },
    ];
    var theme = (0, material_1.useTheme)();
    var isMobile = (0, material_1.useMediaQuery)(theme.breakpoints.down("sm"));
    // Note: --speedDial-onboard is not cleared after <App/> unmount
    var _b = React.useState(function () {
        return !!localStorage.getItem("--speedDial-onboard");
    }), initialLoad = _b[0], setInitialLoad = _b[1];
    React.useEffect(function () {
        if (!initialLoad) {
            // first load
            react_toastify_1.toast.info("Customize your experience", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                closeButton: false,
                pauseOnFocusLoss: false,
                draggableDirection: "y",
                style: {
                    right: isMobile ? "65px" : "55px",
                    bottom: isMobile ? "70px" : "40px",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: 0,
                    width: isMobile ? "280px" : "fit-content",
                },
            });
            setInitialLoad(true);
            localStorage.setItem("--speedDial-onboard", "true");
        }
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(react_toastify_1.ToastContainer, { position: "bottom-left", autoClose: 2000, limit: 3, hideProgressBar: false, newestOnTop: false, closeOnClick: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, theme: mode == "system" ? systemMode : mode, transition: react_toastify_1.Slide }),
        React.createElement(material_1.Box, { sx: {
                position: "absolute",
                bottom: 0,
                right: 0,
                height: 320,
                transform: "translateZ(0px)",
                flexGrow: 1,
                zIndex: 999,
            } },
            React.createElement(material_1.SpeedDial, { ariaLabel: "website options dial for theme mode and image quality", sx: { position: "absolute", bottom: 16, right: 16 }, icon: React.createElement(material_1.SpeedDialIcon, { icon: React.createElement(DisplaySettingsTwoTone_1.default, null), openIcon: React.createElement(Edit_1.default, null) }) }, actions.map(function (action) { return (React.createElement(material_1.SpeedDialAction, { key: action.name, icon: action.icon, slotProps: {
                    tooltip: {
                        title: action.name,
                        open: true,
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
    fontSize: { xs: 19, sm: 20, md: 21, lg: 22 },
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
var ToggleThemeButtons = function (_a) {
    var mode = _a.mode, setMode = _a.setMode;
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
};
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
var react_toastify_1 = __webpack_require__(90701);
function ToggleImageQualityButtons() {
    var _a = React.useState("high"), imgQuality = _a[0], setImgQuality = _a[1];
    var handleToggleImgQuality = function (event, newImgQuality) {
        if (newImgQuality) {
            setImgQuality(newImgQuality);
            react_toastify_1.toast.success("Image quality: ".concat(newImgQuality));
        }
        else {
            setImgQuality("high");
            react_toastify_1.toast.success("Image quality: default (high)");
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.ToggleButtonGroup, { value: imgQuality, exclusive: true, onChange: handleToggleImgQuality, "aria-label": "image quality toggle" },
            React.createElement(material_1.ToggleButton, { value: "low", "aria-label": "low image quality" },
                React.createElement(SdTwoTone_1.default, null)),
            React.createElement(material_1.ToggleButton, { value: "medium", "aria-label": "medium image quality" },
                React.createElement(HdTwoTone_1.default, null)),
            React.createElement(material_1.ToggleButton, { value: "high", "aria-label": "high image quality" },
                React.createElement(FourKTwoTone_1.default, null)))));
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
var constants_1 = __webpack_require__(70908);
var styles = __assign(__assign({}, ProjectCarousel_1.carouselStyles), { modalBox: {
        position: "absolute",
        top: "calc(50% + ".concat(constants_1.ANI_CONST.GLOBAL_NAV_HEIGHT / 2, "px)"), // global nav bar offset
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
                height: nodeDims.height - constants_1.ANI_CONST.GLOBAL_NAV_HEIGHT,
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
                    react_1.default.createElement(react_router_dom_1.Route, { path: "", element: react_1.default.createElement(Landing, null) }),
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var constants_1 = __webpack_require__(70908);
var muiDrawer = {
    MuiDrawer: {
        styleOverrides: {
            paperAnchorTop: {
                top: constants_1.ANI_CONST.GLOBAL_NAV_HEIGHT + "px",
            },
            paper: {
                width: "600px",
                "@media (max-width: 600px)": {
                    width: "100%",
                },
            },
        },
    },
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
    GLOBAL_NAV_HEIGHT: 50,
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
            staticTooltip: {
                whiteSpace: "nowrap",
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [338], () => (__webpack_require__(53900)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7VUFFQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvbXVpL2NvbXBvbmVudHMvbXVpTWVudUl0ZW0udHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9HbG9iYWxOYXYudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvcGFnZXMvcHJvamVjdHMvUGVyc29uYWwudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9OYXZMaW5rcy50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb250ZW50L3Byb2plY3RzL2FjYWRlbWljL2FudGxpb24tdG93ZXItZGVmZW5zZS50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL0N1c3RvbU9wdGlvbnNEaWFsLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL211aS9jb21wb25lbnRzL211aUJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb250ZW50L3Byb2plY3RzL2FjYWRlbWljL21vdGlvbi1hcnQudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0Q2Fyb3VzZWwudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29udGVudC9wcm9qZWN0cy9wZXJzb25hbC9mb29kcGljay50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9tdWkvdGhlbWUudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvcGFnZXMvcHJvamVjdHMvU2VsZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL3BhZ2VzL0Fib3V0LnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL3BhZ2VzL3Byb2plY3RzL0FjYWRlbWljLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudEJsb2NrLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL211aS9jb21wb25lbnRzL211aUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvbGFuZGluZy5zY3NzP2JiNGYiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb250ZW50L3Byb2plY3RzL2FjYWRlbWljL3BsYXllci1wZXJmb3JtYW5jZS1wcm9qZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL3BhZ2VzL0RvZXNOb3RFeGlzdC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb250ZW50L3Byb2plY3RzL3BlcnNvbmFsL2ZhbGxpbmctYmxvY2tzLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL3BhZ2VzL1Byb2plY3RzLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbnRlbnQvcHJvamVjdHMvcGVyc29uYWwvc3BvY2hpLXYwLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL211aS9jb21wb25lbnRzL211aUxpc3QudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29udGVudC9wcm9qZWN0cy9hY2FkZW1pYy9ib2JieXMtYnJlYWtvdXQudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvcGFnZXMvQ29udGFjdC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RTZWxlY3Rpb25CbG9jay50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL1RvZ2dsZVRoZW1lQnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL1RvZ2dsZUltYWdlUXVhbGl0eUJ1dHRvbnMudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvcGFnZXMvTGFuZGluZy50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb250ZW50L2Fib3V0LW1lLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbnRlbnQvcHJvamVjdHMvcGVyc29uYWwvd2Vic2l0ZS12MS50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RNb2RhbENhcm91c2VsLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL3BhZ2VzL0xvYWRpbmcudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9zdHlsZWQvU2xpZGVXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVkL1Njcm9sbGFibGVDb250YWluZXIudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvbXVpL211aUNvbG9yU2NoZW1lcy50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL0Nsb3VkaW5hcnkudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9BcHAudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvbXVpL2NvbXBvbmVudHMvbXVpRHJhd2VyLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVkL0ZhZGVXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9nbG9iYWwtbmF2LnNjc3M/YWM0ZCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbnRlbnQvcHJvamVjdHMvcHJvamVjdC1saXN0LnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVkL2NvbnN0YW50cy50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9wYWdlcy9EZWZhdWx0LnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9wcm9qZWN0cy5zY3NzP2ZiOTAiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9tdWkvbXVpVHlwb2dyYXBoeS50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb250ZW50L3Byb2plY3RzL3BlcnNvbmFsL2dnai0yMDIwLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL211aS9jb21wb25lbnRzL211aVNwZWVkRGlhbC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9tdWkvY29tcG9uZW50cy9tdWlDc3NCYXNlbGluZS50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb250ZW50L3Byb2plY3RzL2FjYWRlbWljL2tpbmdkb20tb2YtaGVsaW9zLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL2NvbXB1dGVOb2RlU3R5bGUudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0QmxvY2sudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL2Jhc2Uuc2Nzcz81ZjUzIiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG11aU1lbnVJdGVtID0ge1xuICAgIE11aU1lbnVJdGVtOiB7XG4gICAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gbXVpTWVudUl0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpO1xudmFyIGhvb2tzXzEgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWktcG9wdXAtc3RhdGUvaG9va3NcIik7XG52YXIgTWVudVR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9NZW51VHdvVG9uZVwiKSk7XG52YXIgTWVudU9wZW5Ud29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudU9wZW5Ud29Ub25lXCIpKTtcbnZhciBTdWJkaXJlY3RvcnlBcnJvd1JpZ2h0VHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL1N1YmRpcmVjdG9yeUFycm93UmlnaHRUd29Ub25lXCIpKTtcbnZhciBjb21wdXRlTm9kZVN0eWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3V0aWxzL2NvbXB1dGVOb2RlU3R5bGVcIikpO1xudmFyIG11aUJ1dHRvbl8xID0gcmVxdWlyZShcIi4uL211aS9jb21wb25lbnRzL211aUJ1dHRvblwiKTtcbnJlcXVpcmUoXCIuLi9zdHlsZXMvZ2xvYmFsLW5hdi5zY3NzXCIpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vc3R5bGVkL2NvbnN0YW50c1wiKTtcbnZhciByZWFjdF90eXBlX2FuaW1hdGlvbl8xID0gcmVxdWlyZShcInJlYWN0LXR5cGUtYW5pbWF0aW9uXCIpO1xudmFyIFN0eWxlZEJveCA9ICgwLCBtYXRlcmlhbF8xLnN0eWxlZCkoXCJkaXZcIikoZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRoZW1lID0gX2EudGhlbWU7XG4gICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS52YXJzLnBhbGV0dGUuYmFja2dyb3VuZC5nbG9iYWxOYXYsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjNweFwiLFxuICAgICAgICB9LFxuICAgICAgICB0aGVtZS5hcHBseVN0eWxlcyhcImRhcmtcIiwge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS52YXJzLnBhbGV0dGUuYmFja2dyb3VuZC5nbG9iYWxOYXYsXG4gICAgICAgIH0pLFxuICAgIF07XG59KTtcbnZhciBnbG9iYWxOYXZEcmF3ZXJCdXR0b25TdHlsZXMgPSB7XG4gICAgd2lkdGg6IFwibWluLWNvbnRlbnRcIixcbn07XG52YXIgR2xvYmFsTmF2ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCByZWFjdF9yb3V0ZXJfZG9tXzEudXNlTG9jYXRpb24pKCk7XG4gICAgdmFyIF9hID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFwiXCIpLCBjdXJyUGF0aCA9IF9hWzBdLCBzZXRDdXJyUGF0aCA9IF9hWzFdO1xuICAgIHZhciBfYiA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgpLCBzdWJQYXRoID0gX2JbMF0sIHNldFN1YlBhdGggPSBfYlsxXTtcbiAgICB2YXIgX2MgPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoKSwgaG92ZXJQYXRoID0gX2NbMF0sIHNldEhvdmVyUGF0aCA9IF9jWzFdO1xuICAgIHZhciBfZCA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShcImNkIFwiKSwgaG92ZXJUZXh0ID0gX2RbMF0sIHNldEhvdmVyVGV4dCA9IF9kWzFdO1xuICAgIHZhciBfZSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgpLCBmdWxsUGF0aCA9IF9lWzBdLCBzZXRGdWxsUGF0aCA9IF9lWzFdO1xuICAgIHZhciBfZiA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShmYWxzZSksIHNob3dDb250ZW50ID0gX2ZbMF0sIHNldFNob3dDb250ZW50ID0gX2ZbMV07XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9cIikge1xuICAgICAgICAgICAgdmFyIHRpbWVyXzEgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZXRTaG93Q29udGVudCh0cnVlKTtcbiAgICAgICAgICAgIH0sIGNvbnN0YW50c18xLkFOSV9DT05TVC5HTE9CQUxfTkFWX0xBTkRJTkdfREVMQVkpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsZWFyVGltZW91dCh0aW1lcl8xKTsgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFNob3dDb250ZW50KHRydWUpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHZhciBfZyA9IHJlYWN0XzEuZGVmYXVsdC51c2VTdGF0ZShmYWxzZSksIG9wZW5EcmF3ZXIgPSBfZ1swXSwgc2V0T3BlbkRyYXdlciA9IF9nWzFdO1xuICAgIHZhciB0b2dnbGVEcmF3ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRPcGVuRHJhd2VyKCFvcGVuRHJhd2VyKTsgfTtcbiAgICB2YXIgdGhlbWUgPSAoMCwgbWF0ZXJpYWxfMS51c2VUaGVtZSkoKTtcbiAgICB2YXIgaXNNb2JpbGUgPSAoMCwgbWF0ZXJpYWxfMS51c2VNZWRpYVF1ZXJ5KSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xuICAgIHZhciBwb3B1cFN0YXRlID0gKDAsIGhvb2tzXzEudXNlUG9wdXBTdGF0ZSkoe1xuICAgICAgICB2YXJpYW50OiBcInBvcG92ZXJcIixcbiAgICAgICAgcG9wdXBJZDogXCJnbG9iYWxOYXZQb3B1cFwiLFxuICAgIH0pO1xuICAgIHZhciBfaCA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSh7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgfSksIGRyYXdlclByb2plY3RCdXR0b25EaW1zID0gX2hbMF0sIHNldERyYXdlclByb2plY3RCdXR0b25EaW1zID0gX2hbMV07XG4gICAgdmFyIGRyYXdlclByb2plY3RCdXR0b25SZWYgPSAoMCwgcmVhY3RfMS51c2VDYWxsYmFjaykoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBub2RlRGltcyA9ICgwLCBjb21wdXRlTm9kZVN0eWxlXzEuZGVmYXVsdCkobm9kZSk7XG4gICAgICAgICAgICBzZXREcmF3ZXJQcm9qZWN0QnV0dG9uRGltcyh7XG4gICAgICAgICAgICAgICAgd2lkdGg6IG5vZGVEaW1zLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogbm9kZURpbXMuaGVpZ2h0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgdmFyIF9qID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICB9KSwgaG9tZUljb25CdXR0b25EaW1zID0gX2pbMF0sIHNldEhvbWVJY29uZUJ1dHRvbkRpbXMgPSBfalsxXTtcbiAgICB2YXIgaG9tZUljb25CdXR0b25SZWYgPSAoMCwgcmVhY3RfMS51c2VDYWxsYmFjaykoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBub2RlRGltcyA9ICgwLCBjb21wdXRlTm9kZVN0eWxlXzEuZGVmYXVsdCkobm9kZSk7XG4gICAgICAgICAgICBzZXRIb21lSWNvbmVCdXR0b25EaW1zKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogbm9kZURpbXMud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBub2RlRGltcy5oZWlnaHQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0T3BlbkRyYXdlcihmYWxzZSk7XG4gICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHtcbiAgICAgICAgICAgIHBvcHVwU3RhdGUuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDEpLmluY2x1ZGVzKFwiL1wiKSkge1xuICAgICAgICAgICAgc2V0Q3VyclBhdGgobG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDEpLnNwbGl0KFwiL1wiKVswXSk7XG4gICAgICAgICAgICBzZXRTdWJQYXRoKGxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cmluZygxKS5zcGxpdChcIi9cIilbMV0pO1xuICAgICAgICAgICAgc2V0SG92ZXJQYXRoKGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldEN1cnJQYXRoKGxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cmluZygxKSk7XG4gICAgICAgICAgICBzZXRTdWJQYXRoKG51bGwpO1xuICAgICAgICAgICAgc2V0SG92ZXJQYXRoKGxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cmluZygxKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0RnVsbFBhdGgobG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH0sIFtsb2NhdGlvbl0pO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaG92ZXJQYXRoID09IFwibWVudVwiKSB7XG4gICAgICAgICAgICBzZXRIb3ZlclRleHQoXCJscyAtUiB+XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaG92ZXJQYXRoKSB7XG4gICAgICAgICAgICBzZXRIb3ZlclRleHQoXCJcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1YlBhdGgpIHtcbiAgICAgICAgICAgIGlmIChob3ZlclBhdGggPT0gZnVsbFBhdGgpIHtcbiAgICAgICAgICAgICAgICBzZXRIb3ZlclRleHQoXCJjZCAuL1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZnVsbFBhdGggPT09IG51bGwgfHwgZnVsbFBhdGggPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZ1bGxQYXRoLmluY2x1ZGVzKGhvdmVyUGF0aCkpIHtcbiAgICAgICAgICAgICAgICBzZXRIb3ZlclRleHQoXCJjZCAuLi9cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhvdmVyUGF0aCAhPSBmdWxsUGF0aCkge1xuICAgICAgICAgICAgICAgIHNldEhvdmVyVGV4dChcImNkIFwiICsgaG92ZXJQYXRoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaG92ZXJQYXRoID09IGZ1bGxQYXRoKSB7XG4gICAgICAgICAgICBzZXRIb3ZlclRleHQoXCJjZCAuL1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldEhvdmVyVGV4dChcImNkIFwiICsgaG92ZXJQYXRoKTtcbiAgICAgICAgfVxuICAgIH0sIFtob3ZlclBhdGhdKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5TbGlkZSwgeyBpbjogc2hvd0NvbnRlbnQsIHRpbWVvdXQ6IGNvbnN0YW50c18xLkFOSV9DT05TVC5HTE9CQUxfTkFWX0RFTEFZIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTdHlsZWRCb3gsIHsgY2xhc3NOYW1lOiBcIkdsb2JhbC1uYXZcIiB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQm94LCB7IGNsYXNzTmFtZTogXCJHbG9iYWwtbmF2X19yb290XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5CdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogdG9nZ2xlRHJhd2VyIH0sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLCB7IG9uTW91c2VFbnRlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0SG92ZXJQYXRoKFwibWVudVwiKTsgfSB9KSwgb3BlbkRyYXdlciA/IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE1lbnVPcGVuVHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpIDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTWVudVR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQnV0dG9uLCBfX2Fzc2lnbih7IHJlZjogaG9tZUljb25CdXR0b25SZWYsIGNvbXBvbmVudDogcmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHRvOiBcIi9cIiB9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcywgeyBzeDogX19hc3NpZ24oe30sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLnN4KSwgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRIb3ZlclBhdGgoXCJ+XCIpOyB9IH0pLCBcIlxcdUQ4M0NcXHVERkUwXCIpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiTmF2LWxpbmtfX25vLWV2ZW50c1wiIH0sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLCB7IHN4OiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMuc3gpLCB7IGNvbG9yOiB0aGVtZS52YXJzLnBhbGV0dGUucHJpbWFyeS5kYXJrLCBwYWRkaW5nOiAwIH0pIH0pLCBcIjovXCIpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBjb21wb25lbnQ6IHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rLCB0bzogY3VyclBhdGggfSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMsIHsgc3g6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcy5zeCksIHsgcGFkZGluZzogMCB9KSwgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRIb3ZlclBhdGgoXCIvXCIgKyBjdXJyUGF0aCk7IH0gfSksIGN1cnJQYXRoID09IFwiXCIgPyBcIlwiIDogY3VyclBhdGggKyBcIi9cIiksXG4gICAgICAgICAgICAgICAgICAgIHN1YlBhdGggJiYgKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQnV0dG9uLCBfX2Fzc2lnbih7IGNvbXBvbmVudDogcmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHRvOiBjdXJyUGF0aCArIFwiL1wiICsgc3ViUGF0aCB9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcywgeyBzeDogX19hc3NpZ24oX19hc3NpZ24oe30sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLnN4KSwgeyBwYWRkaW5nOiAwIH0pLCBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0SG92ZXJQYXRoKFwiL1wiICsgY3VyclBhdGggKyBcIi9cIiArIHN1YlBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSwgc3ViUGF0aCArIFwiL1wiKSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQnV0dG9uLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJOYXYtbGlua19fbm8tZXZlbnRzXCIgfSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMsIHsgc3g6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcy5zeCksIHsgY29sb3I6IHRoZW1lLnZhcnMucGFsZXR0ZS5wcmltYXJ5LmRhcmssIHBhZGRpbmc6IDAgfSkgfSksIFwifiRcIiksXG4gICAgICAgICAgICAgICAgICAgICFpc01vYmlsZSAmJiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5CdXR0b24sIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIk5hdi1saW5rX19uby1ldmVudHNcIiB9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcywgeyBzeDogX19hc3NpZ24oX19hc3NpZ24oe30sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLnN4KSwgeyBjb2xvcjogdGhlbWUudmFycy5wYWxldHRlLnByaW1hcnkubGlnaHQsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIiwgcGFkZGluZzogXCIwIDVweCAwIDI1cHhcIiB9KSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3R5cGVfYW5pbWF0aW9uXzEuVHlwZUFuaW1hdGlvbiwgeyBrZXk6IGhvdmVyVGV4dCwgc2VxdWVuY2U6IFtob3ZlclRleHQsIDUwMF0sIHNwZWVkOiBob3ZlclRleHQubGVuZ3RoID4gOCA/IDUwIDogMSB9KSkpKSkpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlN3aXBlYWJsZURyYXdlciwgeyBhbmNob3I6IFwidG9wXCIsIG9wZW46IG9wZW5EcmF3ZXIsIG9uQ2xvc2U6IHRvZ2dsZURyYXdlciwgb25PcGVuOiB0b2dnbGVEcmF3ZXIsIGRpc2FibGVTd2lwZVRvT3BlbjogZmFsc2UsIGtlZXBNb3VudGVkOiB0cnVlIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTdHlsZWRCb3gsIHsgc3g6IHsgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9IH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkQm94LCB7IHN4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBweDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBiOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IGhvbWVJY29uQnV0dG9uRGltcy53aWR0aCArIFwicHhcIixcbiAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBjb21wb25lbnQ6IHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rLCB0bzogXCIvYWJvdXRcIiB9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcywgeyBzeDogX19hc3NpZ24oX19hc3NpZ24oe30sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLnN4KSwgZ2xvYmFsTmF2RHJhd2VyQnV0dG9uU3R5bGVzKSwgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRIb3ZlclBhdGgoXCIvYWJvdXRcIik7IH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTdWJkaXJlY3RvcnlBcnJvd1JpZ2h0VHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhYm91dFwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5CdXR0b24sIF9fYXNzaWduKHsgcmVmOiBkcmF3ZXJQcm9qZWN0QnV0dG9uUmVmLCBjbGFzc05hbWU6IFwiTmF2LWxpbmtfX25vLWV2ZW50c1wiIH0sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLCAoMCwgaG9va3NfMS5iaW5kVHJpZ2dlcikocG9wdXBTdGF0ZSksIHsgc3g6IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcy5zeCksIGdsb2JhbE5hdkRyYXdlckJ1dHRvblN0eWxlcyksIHsgY29sb3I6IHRoZW1lLnZhcnMucGFsZXR0ZS5wcmltYXJ5LmRhcmsgfSksIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0SG92ZXJQYXRoKFwiL3Byb2plY3RzXCIpOyB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ViZGlyZWN0b3J5QXJyb3dSaWdodFR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvamVjdHMvXCIpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBjb21wb25lbnQ6IHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rLCB0bzogXCIvcHJvamVjdHNcIiB9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcywgeyBzeDogX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oe30sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLnN4KSwgZ2xvYmFsTmF2RHJhd2VyQnV0dG9uU3R5bGVzKSwgeyBtYXJnaW5MZWZ0OiBkcmF3ZXJQcm9qZWN0QnV0dG9uRGltcy53aWR0aCArIFwicHhcIiB9KSwgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRIb3ZlclBhdGgoXCIvcHJvamVjdHNcIik7IH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTdWJkaXJlY3RvcnlBcnJvd1JpZ2h0VHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIuL1wiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5CdXR0b24sIF9fYXNzaWduKHsgY29tcG9uZW50OiByZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgdG86IFwiL3Byb2plY3RzL3BlcnNvbmFsXCIgfSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMsIHsgc3g6IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcy5zeCksIGdsb2JhbE5hdkRyYXdlckJ1dHRvblN0eWxlcyksIHsgbWFyZ2luTGVmdDogZHJhd2VyUHJvamVjdEJ1dHRvbkRpbXMud2lkdGggKyBcInB4XCIgfSksIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0SG92ZXJQYXRoKFwiL3Byb2plY3RzL3BlcnNvbmFsXCIpOyB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ViZGlyZWN0b3J5QXJyb3dSaWdodFR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyc29uYWxcIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQnV0dG9uLCBfX2Fzc2lnbih7IGNvbXBvbmVudDogcmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHRvOiBcIi9wcm9qZWN0cy9hY2FkZW1pY1wiIH0sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLCB7IHN4OiBfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMuc3gpLCBnbG9iYWxOYXZEcmF3ZXJCdXR0b25TdHlsZXMpLCB7IG1hcmdpbkxlZnQ6IGRyYXdlclByb2plY3RCdXR0b25EaW1zLndpZHRoICsgXCJweFwiIH0pLCBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldEhvdmVyUGF0aChcIi9wcm9qZWN0cy9hY2FkZW1pY1wiKTsgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN1YmRpcmVjdG9yeUFycm93UmlnaHRUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFjYWRlbWljXCIpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBjb21wb25lbnQ6IHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rLCB0bzogXCIvY29udGFjdFwiIH0sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLCB7IHN4OiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMuc3gpLCBnbG9iYWxOYXZEcmF3ZXJCdXR0b25TdHlsZXMpLCBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldEhvdmVyUGF0aChcIi9jb250YWN0XCIpOyB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ViZGlyZWN0b3J5QXJyb3dSaWdodFR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGFjdFwiKSkpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdsb2JhbE5hdjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbnZhciBQcm9qZWN0QmxvY2tfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0QmxvY2tcIikpO1xudmFyIHByb2plY3RfbGlzdF8xID0gcmVxdWlyZShcIi4uLy4uL2NvbnRlbnQvcHJvamVjdHMvcHJvamVjdC1saXN0XCIpO1xudmFyIFNsaWRlV3JhcHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZC9TbGlkZVdyYXBwZXJcIikpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkL2NvbnN0YW50c1wiKTtcbnZhciBGYWRlV3JhcHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZC9GYWRlV3JhcHBlclwiKSk7XG52YXIgUGVyc29uYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbnRhaW5lclJlZiA9ICgwLCByZWFjdF8xLnVzZVJlZikobnVsbCk7XG4gICAgdmFyIHRoZW1lID0gKDAsIG1hdGVyaWFsXzEudXNlVGhlbWUpKCk7XG4gICAgdmFyIGFuaW1hdGlvbkJyZWFrcG9pbnQgPSAoMCwgbWF0ZXJpYWxfMS51c2VNZWRpYVF1ZXJ5KSh0aGVtZS5icmVha3BvaW50cy5kb3duKGNvbnN0YW50c18xLkFOSV9DT05TVC5QUk9KX1JPV19CUkVBS1BPSU5UKSk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgcmVmOiBjb250YWluZXJSZWYgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZhZGVXcmFwcGVyXzEuZGVmYXVsdCwgeyBkZWxheTogY29uc3RhbnRzXzEuQU5JX0NPTlNULlBST0pfU1VCSEVBRElOR19ERUxBWSB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImg0XCIgfSwgXCJQZXJzb25hbF9wcm9qZWN0c1wiKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkdyaWQsIHsgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAyLCBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIiB9LCBwcm9qZWN0X2xpc3RfMS5Qcm9qZWN0TGlzdFtwcm9qZWN0X2xpc3RfMS5Qcm9qZWN0Q2F0ZWdvcmllcy5QRVJTT05BTF0ubWFwKGZ1bmN0aW9uIChwcm9qLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTbGlkZVdyYXBwZXJfMS5kZWZhdWx0LCB7IHNsaWRlRnJvbVJlZjogY29udGFpbmVyUmVmLCBkZWxheTogaSAqIGNvbnN0YW50c18xLkFOSV9DT05TVC5QUk9KX0NBUkRTX0RFTEFZLCBkaXJlY3Rpb246IGFuaW1hdGlvbkJyZWFrcG9pbnQgPyBcInVwXCIgOiBcImxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcm9qZWN0QmxvY2tfMS5kZWZhdWx0LCB7IHByb2o6IHByb2osIGtleTogaSB9KSkpO1xuICAgICAgICAgICAgfSkpKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLk91dGxldCwgbnVsbCkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBQZXJzb25hbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgaG9va3NfMSA9IHJlcXVpcmUoXCJtYXRlcmlhbC11aS1wb3B1cC1zdGF0ZS9ob29rc1wiKTtcbnZhciBIb3Zlck1lbnVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibWF0ZXJpYWwtdWktcG9wdXAtc3RhdGUvSG92ZXJNZW51XCIpKTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG52YXIgbXVpQnV0dG9uXzEgPSByZXF1aXJlKFwiLi4vbXVpL2NvbXBvbmVudHMvbXVpQnV0dG9uXCIpO1xudmFyIHBhdGhzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogXCIvYWJvdXRcIixcbiAgICAgICAgdGV4dDogXCJhYm91dFwiLFxuICAgICAgICBzdWJwYXRoczogW10sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL3Byb2plY3RzXCIsXG4gICAgICAgIHRleHQ6IFwicHJvamVjdHNcIixcbiAgICAgICAgc3VicGF0aHM6IFtcbiAgICAgICAgICAgIHsgcGF0aDogXCJwcm9qZWN0cy9wZXJzb25hbFwiLCB0ZXh0OiBcInBlcnNvbmFsXCIgfSxcbiAgICAgICAgICAgIHsgcGF0aDogXCJwcm9qZWN0cy9hY2FkZW1pY1wiLCB0ZXh0OiBcImFjYWRlbWljXCIgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCIvY29udGFjdFwiLFxuICAgICAgICB0ZXh0OiBcImNvbnRhY3RcIixcbiAgICAgICAgc3VicGF0aHM6IFtdLFxuICAgIH0sXG5dO1xudmFyIE5hdkxpbmtzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGVtZSA9ICgwLCBtYXRlcmlhbF8xLnVzZVRoZW1lKSgpO1xuICAgIHZhciBpc01vYmlsZSA9ICgwLCBtYXRlcmlhbF8xLnVzZU1lZGlhUXVlcnkpKHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XG4gICAgdmFyIHBvcHVwU3RhdGUgPSAoMCwgaG9va3NfMS51c2VQb3B1cFN0YXRlKSh7XG4gICAgICAgIHZhcmlhbnQ6IFwicG9wb3ZlclwiLFxuICAgICAgICBwb3B1cElkOiBcInN1YlBhdGhNZW51XCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIHBhdGguc3VicGF0aHMubGVuZ3RoICE9PSAwID8gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQnV0dG9uLCBfX2Fzc2lnbih7IGtleTogXCJcIi5jb25jYXQocGF0aC50ZXh0KSwgY29tcG9uZW50OiByZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgdG86IHBhdGgucGF0aCB9LCBtdWlCdXR0b25fMS5uYXZMaW5rQnV0dG9uUHJvcHMsICgwLCBob29rc18xLmJpbmRIb3ZlcikocG9wdXBTdGF0ZSkpLCBwYXRoLnRleHQpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSG92ZXJNZW51XzEuZGVmYXVsdCwgX19hc3NpZ24oe30sICgwLCBob29rc18xLmJpbmRNZW51KShwb3B1cFN0YXRlKSwgeyBhbmNob3JPcmlnaW46IGlzTW9iaWxlXG4gICAgICAgICAgICAgICAgICAgID8geyB2ZXJ0aWNhbDogXCJ0b3BcIiwgaG9yaXpvbnRhbDogXCJyaWdodFwiIH1cbiAgICAgICAgICAgICAgICAgICAgOiB7IHZlcnRpY2FsOiBcImJvdHRvbVwiLCBob3Jpem9udGFsOiBcImxlZnRcIiB9LCB0cmFuc2Zvcm1PcmlnaW46IHsgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwibGVmdFwiIH0gfSksIHBhdGguc3VicGF0aHMubWFwKGZ1bmN0aW9uIChzdWJQYXRoLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLk1lbnVJdGVtLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBrZXk6IFwiXCIuY29uY2F0KHN1YlBhdGgudGV4dCwgXCItXCIpLmNvbmNhdChpKSwgY29tcG9uZW50OiByZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgdG86IHN1YlBhdGgucGF0aCB9LCBtdWlCdXR0b25fMS5uYXZMaW5rQnV0dG9uUHJvcHMpLCBzdWJQYXRoLnRleHQpKSk7XG4gICAgICAgICAgICB9KSkpKSA6IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBrZXk6IFwiXCIuY29uY2F0KHBhdGgudGV4dCwgXCItXCIpLmNvbmNhdChpbmRleCksIGNvbXBvbmVudDogcmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHRvOiBwYXRoLnBhdGggfSwgbXVpQnV0dG9uXzEubmF2TGlua0J1dHRvblByb3BzKSwgcGF0aC50ZXh0KSkpKTtcbiAgICB9KSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IE5hdkxpbmtzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYW50bGlvblRvd2VyRGVmZW5zZSA9IHtcbiAgICBhYmJyOiBcImFudGxpb24tdGRcIixcbiAgICBuYW1lOiBcIkFudGxpb24gVG93ZXIgRGVmZW5zZVwiLFxuICAgIGRhdGU6IFwiT2N0IDIwMTggLSBEZWMgMjAxOFwiLFxuICAgIHRhZ3M6IFtcbiAgICAgICAgXCJVbml0eVwiLFxuICAgICAgICBcIkMjXCIsXG4gICAgICAgIFwiUGF0aGZpbmRpbmdcIixcbiAgICAgICAgXCJFQ1NcIixcbiAgICAgICAgXCJHYW1lIERldlwiLFxuICAgICAgICBcIkdhbWUgRGVzaWduXCIsXG4gICAgICAgIFwiR2FtZVwiLFxuICAgIF0sXG4gICAgY2F0ZWdvcnk6IFwiVG93ZXIgRGVmZW5zZSBHYW1lXCIsXG4gICAgbGluazoge1xuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9GbHVmZmlzYXVydXMvQVREXCIsXG4gICAgICAgIGhvc3Q6IFwiXCIsXG4gICAgfSxcbiAgICBkZXRhaWw6IHtcbiAgICAgICAgc2hvcnQ6IFwiQnVpbGQgYW4gYXJteSB0byBmZW5kIG9mZiBpbnZhZGVycyB3aXRoIDUgZGlmZmVyZW50IGRlZmVuc2l2ZSB0b3dlcnMuIEJsb2NrIG9mZiBwYXRocyBhbmQgZGVjaWRlIGhvdyB5b3Ugd2FudCB0byByZWRpcmVjdCB0aGUgaW52YWRpbmcgYW50bGlvbnMuXCIsXG4gICAgICAgIGxvbmc6IFtdLFxuICAgIH0sXG4gICAgaW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJhdGQvYXRkLXBhdGhmaW5kaW5nX211aWhhYlwiLFxuICAgICAgICAgICAgYWx0OiBcIkFURDogQSogUGF0aGZpbmRpbmdcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkVuZW15IEFJIHdpdGggQSogUGF0aGZpbmRpbmcgc2hvd24gYnkgbGluZXMgYW5kIHBvaW50cy5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImF0ZC9hdGQtc3RhcnQtc2NyZWVuX211czBqaVwiLFxuICAgICAgICAgICAgYWx0OiBcIkFURDogU3RhcnQgU2NyZWVuXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTdGFydCBzY3JlZW4gZm9yIHRoZSBnYW1lLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYXRkL2F0ZC1zdG9yeV94bXM1bGNcIixcbiAgICAgICAgICAgIGFsdDogXCJBVEQ6IFN0b3J5IFNjcmVlblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2Nyb2xsYWJsZSBzdG9yeSBhbmQgbmFycmF0aXZlIHNjcmVlbi5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImF0ZC9hdGQtc3RhcnQtc2NyZWVuX211czBqaVwiLFxuICAgICAgICAgICAgYWx0OiBcIkFURDogTGV2ZWwgU2VsZWN0IFNjcmVlblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTGV2ZWwgc2VsZWN0IHNjcmVlbi5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImF0ZC9hdGQtZ2FtZXBsYXlfeGF4cGNsXCIsXG4gICAgICAgICAgICBhbHQ6IFwiQVREOiBHYW1lcGxheSBTY3JlZW5zaG90XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lcGxheSBzY3JlZW5zaG90LlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYXRkL2F0ZC13aW4tc2NyZWVuX3Z3bmJmZVwiLFxuICAgICAgICAgICAgYWx0OiBcIkFURDogV2luIFNjcmVlblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiV2luIHNjcmVlblwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYXRkL2F0ZC1sb3NlLXNjcmVlbl90ZWJibDBcIixcbiAgICAgICAgICAgIGFsdDogXCJBVEQ6IExvc2UgU2NyZWVuXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3NlIHNjcmVlblwiLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gYW50bGlvblRvd2VyRGVmZW5zZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBDdXN0b21PcHRpb25zRGlhbDtcbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBFZGl0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdFwiKSk7XG52YXIgRGlzcGxheVNldHRpbmdzVHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Rpc3BsYXlTZXR0aW5nc1R3b1RvbmVcIikpO1xudmFyIFRvZ2dsZVRoZW1lQnV0dG9uc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1RvZ2dsZVRoZW1lQnV0dG9uc1wiKSk7XG52YXIgVG9nZ2xlSW1hZ2VRdWFsaXR5QnV0dG9uc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1RvZ2dsZUltYWdlUXVhbGl0eUJ1dHRvbnNcIikpO1xudmFyIHJlYWN0X3RvYXN0aWZ5XzEgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7XG5mdW5jdGlvbiBDdXN0b21PcHRpb25zRGlhbCgpIHtcbiAgICB2YXIgX2EgPSAoMCwgbWF0ZXJpYWxfMS51c2VDb2xvclNjaGVtZSkoKSwgbW9kZSA9IF9hLm1vZGUsIHN5c3RlbU1vZGUgPSBfYS5zeXN0ZW1Nb2RlLCBzZXRNb2RlID0gX2Euc2V0TW9kZTtcbiAgICB2YXIgYWN0aW9ucyA9IFtcbiAgICAgICAgeyBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KFRvZ2dsZUltYWdlUXVhbGl0eUJ1dHRvbnNfMS5kZWZhdWx0LCBudWxsKSwgbmFtZTogXCJJbWFnZSBRdWFsaXR5XCIgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChUb2dnbGVUaGVtZUJ1dHRvbnNfMS5kZWZhdWx0LCB7IG1vZGU6IG1vZGUsIHNldE1vZGU6IHNldE1vZGUgfSksXG4gICAgICAgICAgICBuYW1lOiBcIlRoZW1lIE1vZGVcIixcbiAgICAgICAgfSxcbiAgICBdO1xuICAgIHZhciB0aGVtZSA9ICgwLCBtYXRlcmlhbF8xLnVzZVRoZW1lKSgpO1xuICAgIHZhciBpc01vYmlsZSA9ICgwLCBtYXRlcmlhbF8xLnVzZU1lZGlhUXVlcnkpKHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XG4gICAgLy8gTm90ZTogLS1zcGVlZERpYWwtb25ib2FyZCBpcyBub3QgY2xlYXJlZCBhZnRlciA8QXBwLz4gdW5tb3VudFxuICAgIHZhciBfYiA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCItLXNwZWVkRGlhbC1vbmJvYXJkXCIpO1xuICAgIH0pLCBpbml0aWFsTG9hZCA9IF9iWzBdLCBzZXRJbml0aWFsTG9hZCA9IF9iWzFdO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaW5pdGlhbExvYWQpIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IGxvYWRcbiAgICAgICAgICAgIHJlYWN0X3RvYXN0aWZ5XzEudG9hc3QuaW5mbyhcIkN1c3RvbWl6ZSB5b3VyIGV4cGVyaWVuY2VcIiwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1yaWdodFwiLFxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXNMb3NzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGVEaXJlY3Rpb246IFwieVwiLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBpc01vYmlsZSA/IFwiNjVweFwiIDogXCI1NXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogaXNNb2JpbGUgPyBcIjcwcHhcIiA6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpc01vYmlsZSA/IFwiMjgwcHhcIiA6IFwiZml0LWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRJbml0aWFsTG9hZCh0cnVlKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiLS1zcGVlZERpYWwtb25ib2FyZFwiLCBcInRydWVcIik7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KHJlYWN0X3RvYXN0aWZ5XzEuVG9hc3RDb250YWluZXIsIHsgcG9zaXRpb246IFwiYm90dG9tLWxlZnRcIiwgYXV0b0Nsb3NlOiAyMDAwLCBsaW1pdDogMywgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSwgbmV3ZXN0T25Ub3A6IGZhbHNlLCBjbG9zZU9uQ2xpY2s6IGZhbHNlLCBwYXVzZU9uRm9jdXNMb3NzOiB0cnVlLCBkcmFnZ2FibGU6IHRydWUsIHBhdXNlT25Ib3ZlcjogdHJ1ZSwgdGhlbWU6IG1vZGUgPT0gXCJzeXN0ZW1cIiA/IHN5c3RlbU1vZGUgOiBtb2RlLCB0cmFuc2l0aW9uOiByZWFjdF90b2FzdGlmeV8xLlNsaWRlIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQm94LCB7IHN4OiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMjAsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVooMHB4KVwiLFxuICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgIHpJbmRleDogOTk5LFxuICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlNwZWVkRGlhbCwgeyBhcmlhTGFiZWw6IFwid2Vic2l0ZSBvcHRpb25zIGRpYWwgZm9yIHRoZW1lIG1vZGUgYW5kIGltYWdlIHF1YWxpdHlcIiwgc3g6IHsgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgYm90dG9tOiAxNiwgcmlnaHQ6IDE2IH0sIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5TcGVlZERpYWxJY29uLCB7IGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGlzcGxheVNldHRpbmdzVHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpLCBvcGVuSWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChFZGl0XzEuZGVmYXVsdCwgbnVsbCkgfSkgfSwgYWN0aW9ucy5tYXAoZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5TcGVlZERpYWxBY3Rpb24sIHsga2V5OiBhY3Rpb24ubmFtZSwgaWNvbjogYWN0aW9uLmljb24sIHNsb3RQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogYWN0aW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0gfSkpOyB9KSkpKSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdsb2JhbE5hdkJ1dHRvblByb3BzID0gZXhwb3J0cy5uYXZMaW5rQnV0dG9uUHJvcHMgPSB2b2lkIDA7XG52YXIgbXVpQnV0dG9uTmF2bGlua0ZvbnRTaXplcyA9IHtcbiAgICBmb250U2l6ZTogeyB4czogMTgsIHNtOiAyMCwgbWQ6IDI0LCBsZzogMjYgfSxcbn07XG5leHBvcnRzLm5hdkxpbmtCdXR0b25Qcm9wcyA9IHtcbiAgICBzaXplOiBcImxhcmdlXCIsXG4gICAgdmFyaWFudDogXCJuYXZsaW5rXCIsXG4gICAgc3g6IF9fYXNzaWduKHt9LCBtdWlCdXR0b25OYXZsaW5rRm9udFNpemVzKSxcbn07XG52YXIgbXVpQnV0dG9uR2xvYmFsTmF2Rm9udFNpemVzID0ge1xuICAgIGZvbnRTaXplOiB7IHhzOiAxOSwgc206IDIwLCBtZDogMjEsIGxnOiAyMiB9LFxufTtcbmV4cG9ydHMuZ2xvYmFsTmF2QnV0dG9uUHJvcHMgPSB7XG4gICAgc2l6ZTogXCJtZWRpdW1cIixcbiAgICB2YXJpYW50OiBcIm5hdmxpbmtcIixcbiAgICBzeDogX19hc3NpZ24oe30sIG11aUJ1dHRvbkdsb2JhbE5hdkZvbnRTaXplcyksXG59O1xudmFyIG11aUJ1dHRvblN0eWxlcyA9IHtcbiAgICBNdWlCdXR0b246IHtcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wczogeyB2YXJpYW50OiBcIm5hdmxpbmtcIiB9LFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiU291cmNlIENvZGUgUHJvXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgICAgICByb290OiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJTb3VyY2UgQ29kZSBQcm9cIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwcHggNXB4IDBweCA1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLnRoZW1lLnZhcnMucGFsZXR0ZS5zZWNvbmRhcnkuY29udHJhc3RUZXh0LFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgXCImOmFjdGl2ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy50aGVtZS52YXJzLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy50aGVtZS52YXJzLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiJjpmb2N1c1wiOiB7fSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gbXVpQnV0dG9uU3R5bGVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbW90aW9uQXJ0ID0ge1xuICAgIGFiYnI6IFwibW90aW9uLWFydFwiLFxuICAgIG5hbWU6IFwiTW90aW9uIEFydFwiLFxuICAgIGRhdGU6IFwiU2VwIDIwMTggLSBEZWMgMjAxOFwiLFxuICAgIHRhZ3M6IFtcIkphdmFcIiwgXCJBbmRyb2lkIFN0dWRpb1wiLCBcIlNlbnNvcnNcIiwgXCJBY3Rpdml0eSBMaWZlY3ljbGVcIl0sXG4gICAgY2F0ZWdvcnk6IFwiQW5kcm9pZCBBcHBcIixcbiAgICBsaW5rOiB7XG4gICAgICAgIHJlcG86IFwiXCIsXG4gICAgICAgIGhvc3Q6IFwiXCIsXG4gICAgfSxcbiAgICBkZXRhaWw6IHtcbiAgICAgICAgc2hvcnQ6IFwiRXhwZXJpbWVudGFsIEFuZHJvaWQgZHJhd2luZyBhcHBsaWNhdGlvbiB0aGF0IG1hcHMgZGV2aWNlIG1vdmVtZW50IGFzIGRyYXdpbmcgc3Ryb2tlcyBvbiBhIGNhbnZhcy5cIixcbiAgICAgICAgbG9uZzogW10sXG4gICAgfSxcbiAgICBpbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIm1vdGlvbmFydC9tb3Rpb25hcnQzX2FwZmdicFwiLFxuICAgICAgICAgICAgYWx0OiBcIk1vdGlvbkFydDogSG9tZSBTY3JlZW5cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlZmF1bHQgc2NyZWVuLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwibW90aW9uYXJ0L21vdGlvbmFydDFfcXBmazJ1XCIsXG4gICAgICAgICAgICBhbHQ6IFwiTW90aW9uQXJ0OiBCcnVzaCBTZWxlY3QgXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJCcnVzaCBzaXplIHNlbGVjdCBpbnRlcmZhY2UuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJtb3Rpb25hcnQvbW90aW9uYXJ0Ml9uZHRyZW9cIixcbiAgICAgICAgICAgIGFsdDogXCJNb3Rpb25BcnQ6IFBhbGV0dGUgQ2hhbmdlclwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVtbyBvZiBNb3Rpb25BcnQncyBwYWxldHRlIGNoYW5nZXIuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJtb3Rpb25hcnQvbW90aW9uYXJ0NF9zZXA1YnlcIixcbiAgICAgICAgICAgIGFsdDogXCJNb3Rpb25BcnQ6IEVkaXQgQXJ0Ym9hcmQgTmFtZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUmVuYW1pbmcgdGhlIGN1cnJlbnQgYXJ0Ym9hcmQuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJtb3Rpb25hcnQvbW90aW9uYXJ0NV94bnYweWhcIixcbiAgICAgICAgICAgIGFsdDogXCJNYWRlIHdpdGggTW90aW9uQXJ0IGFwcFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQSBzYW1wbGUgZHJhd2luZyBkb25lIG9uIHRoZSBhcHAuXCIsXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBtb3Rpb25BcnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNhcm91c2VsU3R5bGVzID0gdm9pZCAwO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgcmVhY3RfbWF0ZXJpYWxfdWlfY2Fyb3VzZWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3QtbWF0ZXJpYWwtdWktY2Fyb3VzZWxcIikpO1xudmFyIHJlYWN0XzIgPSByZXF1aXJlKFwiQGNsb3VkaW5hcnkvcmVhY3RcIik7XG52YXIgcmVzaXplXzEgPSByZXF1aXJlKFwiQGNsb3VkaW5hcnkvdXJsLWdlbi9hY3Rpb25zL3Jlc2l6ZVwiKTtcbnZhciBLZXlib2FyZEFycm93UmlnaHRUd29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd1JpZ2h0VHdvVG9uZVwiKSk7XG52YXIgS2V5Ym9hcmRBcnJvd0xlZnRUd29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0xlZnRUd29Ub25lXCIpKTtcbnZhciBDbG91ZGluYXJ5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ2xvdWRpbmFyeVwiKSk7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG52YXIgUGhvdG9MaWJyYXJ5VHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL1Bob3RvTGlicmFyeVR3b1RvbmVcIikpO1xuZXhwb3J0cy5jYXJvdXNlbFN0eWxlcyA9IHtcbiAgICBjYXJkOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgbWFyZ2luOiBcIjVweFwiLFxuICAgIH0sXG4gICAgb3V0ZXJCb3g6IHtcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIH0sXG4gICAgdGV4dE92ZXJsYXk6IHtcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGJnY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjU0KVwiLFxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICB9LFxufTtcbnZhciBQbGFjZWhvbGRlckNhcmQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgcHJvaiA9IF9hLnByb2osIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgcmVhY3Rfcm91dGVyX2RvbV8xLnVzZUxvY2F0aW9uKSgpO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5DYXJkLCB7IHN4OiBfX2Fzc2lnbih7IG1pbkhlaWdodDogaGVpZ2h0IH0sIGV4cG9ydHMuY2Fyb3VzZWxTdHlsZXMuY2FyZCkgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5DYXJkQWN0aW9uQXJlYSwgeyBjb21wb25lbnQ6IHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rLCB0bzogcHJvai5hYmJyLCBzdGF0ZTogeyBiYWNrZ3JvdW5kOiBsb2NhdGlvbiB9IH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJveCwgeyBzeDogX19hc3NpZ24oX19hc3NpZ24oe30sIHdpZHRoKSwgZXhwb3J0cy5jYXJvdXNlbFN0eWxlcy5vdXRlckJveCkgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNhcmRNZWRpYSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUGhvdG9MaWJyYXJ5VHdvVG9uZV8xLmRlZmF1bHQsIHsgc3g6IF9fYXNzaWduKF9fYXNzaWduKHt9LCB3aWR0aCksIHsgaGVpZ2h0OiBoZWlnaHQgfSkgfSkpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQm94LCB7IHN4OiBfX2Fzc2lnbih7fSwgZXhwb3J0cy5jYXJvdXNlbFN0eWxlcy50ZXh0T3ZlcmxheSkgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiY2FwdGlvblwiIH0sIFwiUGhvdG8gdW5hdmFpbGFibGUgYXQgdGhlIG1vbWVudC5cIikpKSkpKTtcbn07XG52YXIgUGxhY2Vob2xkZXJDYXJvdXNlbCA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBwcm9qID0gX2EucHJvaiwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuICAgIHZhciBwbGFjZWhvbGRlcnMgPSBbMSwgMl07XG4gICAgdmFyIHRoZW1lID0gKDAsIG1hdGVyaWFsXzEudXNlVGhlbWUpKCk7XG4gICAgdmFyIGlzTW9iaWxlID0gKDAsIG1hdGVyaWFsXzEudXNlTWVkaWFRdWVyeSkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X21hdGVyaWFsX3VpX2Nhcm91c2VsXzEuZGVmYXVsdCwgeyBzdG9wQXV0b1BsYXlPbkhvdmVyOiB0cnVlLCBmdWxsSGVpZ2h0SG92ZXI6IHRydWUsIGF1dG9QbGF5OiBmYWxzZSwgaW50ZXJ2YWw6IDUwMDAsIGFuaW1hdGlvbjogXCJzbGlkZVwiLCBoZWlnaHQ6IGhlaWdodCwgTmV4dEljb246IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEtleWJvYXJkQXJyb3dSaWdodFR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSwgUHJldkljb246IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEtleWJvYXJkQXJyb3dMZWZ0VHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpLCBuYXZCdXR0b25zQWx3YXlzVmlzaWJsZTogaXNNb2JpbGUgPyB0cnVlIDogZmFsc2UgfSwgcGxhY2Vob2xkZXJzLm1hcChmdW5jdGlvbiAoaXRlbSwgaSkgeyByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBsYWNlaG9sZGVyQ2FyZCwgeyBrZXk6IGksIHByb2o6IHByb2osIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSkpOyB9KSkpO1xufTtcbnZhciBDYXJvdXNlbENhcmQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgcHJvaiA9IF9hLnByb2osIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgcmVhY3Rfcm91dGVyX2RvbV8xLnVzZUxvY2F0aW9uKSgpO1xuICAgIHZhciBpbWFnZXMgPSBwcm9qLmltYWdlcztcbiAgICB2YXIgY2xkID0gQ2xvdWRpbmFyeV8xLmRlZmF1bHQ7XG4gICAgdmFyIHRoZW1lID0gKDAsIG1hdGVyaWFsXzEudXNlVGhlbWUpKCk7XG4gICAgdmFyIGlzTW9iaWxlID0gKDAsIG1hdGVyaWFsXzEudXNlTWVkaWFRdWVyeSkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpKTtcbiAgICB2YXIgaW1nV2lkdGggPSBpc01vYmlsZSA/IHdpZHRoLndpZHRoLnhzIDogd2lkdGgud2lkdGgubWQ7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9tYXRlcmlhbF91aV9jYXJvdXNlbF8xLmRlZmF1bHQsIHsgc3RvcEF1dG9QbGF5T25Ib3ZlcjogdHJ1ZSwgZnVsbEhlaWdodEhvdmVyOiB0cnVlLCBhdXRvUGxheTogZmFsc2UsIGludGVydmFsOiA1MDAwLCBhbmltYXRpb246IFwic2xpZGVcIiwgaGVpZ2h0OiBoZWlnaHQsIE5leHRJY29uOiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChLZXlib2FyZEFycm93UmlnaHRUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCksIFByZXZJY29uOiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChLZXlib2FyZEFycm93TGVmdFR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSwgbmF2QnV0dG9uc0Fsd2F5c1Zpc2libGU6IGlzTW9iaWxlID8gdHJ1ZSA6IGZhbHNlIH0sIGltYWdlcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGkpIHsgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNhcmQsIHsga2V5OiBpLCBzeDogX19hc3NpZ24oeyBtaW5IZWlnaHQ6IGhlaWdodCB9LCBleHBvcnRzLmNhcm91c2VsU3R5bGVzLmNhcmQpIH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQ2FyZEFjdGlvbkFyZWEsIHsgY29tcG9uZW50OiByZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgdG86IHByb2ouYWJiciwgc3RhdGU6IHsgYmFja2dyb3VuZDogbG9jYXRpb24gfSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Cb3gsIHsgc3g6IF9fYXNzaWduKHsgd2lkdGg6IHdpZHRoIH0sIGV4cG9ydHMuY2Fyb3VzZWxTdHlsZXMub3V0ZXJCb3gpIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5DYXJkTWVkaWEsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzIuQWR2YW5jZWRJbWFnZSwgeyBjbGRJbWc6IGNsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbWFnZShcInBvcnRmb2xpby9cIi5jb25jYXQoaXRlbS5zcmMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNpemUoKDAsIHJlc2l6ZV8xLmZpdCkoaW1nV2lkdGgsIGhlaWdodCkpLCBwbHVnaW5zOiBbKDAsIHJlYWN0XzIucGxhY2Vob2xkZXIpKHsgbW9kZTogXCJibHVyXCIgfSksICgwLCByZWFjdF8yLnJlc3BvbnNpdmUpKCldIH0pKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJveCwgeyBzeDogX19hc3NpZ24oe30sIGV4cG9ydHMuY2Fyb3VzZWxTdHlsZXMudGV4dE92ZXJsYXkpIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImNhcHRpb25cIiB9LCBpdGVtLmRlc2NyaXB0aW9uKSkpKSkpOyB9KSkpO1xufTtcbnZhciBQcm9qZWN0Q2Fyb3VzZWwgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgcHJvaiA9IHByb3BzLnByb2osIHdpZHRoID0gcHJvcHMud2lkdGgsIGhlaWdodCA9IHByb3BzLmhlaWdodDtcbiAgICByZXR1cm4gcHJvai5pbWFnZXMubGVuZ3RoID09IDAgPyAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUGxhY2Vob2xkZXJDYXJvdXNlbCwgeyBwcm9qOiBwcm9qLCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pKSA6IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDYXJvdXNlbENhcmQsIHsgcHJvajogcHJvaiwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gUHJvamVjdENhcm91c2VsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZm9vZHBpY2sgPSB7XG4gICAgLy8gZm9vZHBpY2tcbiAgICBhYmJyOiBcImZvb2RwaWNrXCIsXG4gICAgbmFtZTogXCJGb29kUGlja1wiLFxuICAgIGRhdGU6IFwiSnVuIDIwMTggLSBNYXIgMjAxOVwiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJKU1wiLCBcIk5vZGVKU1wiLCBcIkNTU1wiXSxcbiAgICBjYXRlZ29yeTogXCJXZWIgYW5kIE1vYmlsZSBBcHBcIixcbiAgICBsaW5rOiB7XG4gICAgICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL2tjYTk5L2Zvb2RwaWNrLW5hdGl2ZVwiLFxuICAgICAgICBob3N0OiBcIlwiLFxuICAgIH0sXG4gICAgZGV0YWlsOiB7XG4gICAgICAgIHNob3J0OiBcIk11bHRpcGxhdGZvcm0gcmFuZG9tIGN1aXNpbmUgcGlja2VyLiBVc2VzIGEgcmFuZG9taXplciBmb3IgYSB0aGUgY3Vpc2luZXMgdG8gZmVlZCBpbnRvIHRoZSBHb29nbGUgUGxhY2VzIEFQSSB0byBnZW5lcmF0ZSBzdWdnZXN0aW9ucyFcIixcbiAgICAgICAgbG9uZzogW10sXG4gICAgfSxcbiAgICBpbWFnZXM6IFtdLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZvb2RwaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHN0eWxlc18xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCIpO1xudmFyIG11aUNvbG9yU2NoZW1lc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL211aUNvbG9yU2NoZW1lc1wiKSk7XG52YXIgbXVpVHlwb2dyYXBoeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL211aVR5cG9ncmFwaHlcIikpO1xudmFyIG11aUJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbXVpQnV0dG9uXCIpKTtcbnZhciBtdWlDb250YWluZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL211aUNvbnRhaW5lclwiKSk7XG52YXIgbXVpTGlzdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbXVpTGlzdFwiKSk7XG52YXIgbXVpTWVudUl0ZW1fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL211aU1lbnVJdGVtXCIpKTtcbnZhciBtdWlEcmF3ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL211aURyYXdlclwiKSk7XG52YXIgbXVpU3BlZWREaWFsXzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL211aVNwZWVkRGlhbFwiKTtcbnZhciBtdWlDc3NCYXNlbGluZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbXVpQ3NzQmFzZWxpbmVcIikpO1xudmFyIHRoZW1lID0gKDAsIHN0eWxlc18xLmNyZWF0ZVRoZW1lKShfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbXVpQ29sb3JTY2hlbWVzXzEuZGVmYXVsdCksIG11aVR5cG9ncmFwaHlfMS5kZWZhdWx0KSwgeyBjb21wb25lbnRzOiBfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbXVpQnV0dG9uXzEuZGVmYXVsdCksIG11aUNvbnRhaW5lcl8xLmRlZmF1bHQpLCBtdWlMaXN0XzEuZGVmYXVsdCksIG11aU1lbnVJdGVtXzEuZGVmYXVsdCksIG11aURyYXdlcl8xLmRlZmF1bHQpLCBtdWlTcGVlZERpYWxfMS5tdWlTcGVlZERpYWwpLCBtdWlTcGVlZERpYWxfMS5tdWlTcGVlZERpYWxBY3Rpb24pLCBtdWlDc3NCYXNlbGluZV8xLmRlZmF1bHQpLCBjc3NWYXJpYWJsZXM6IHtcbiAgICAgICAgY29sb3JTY2hlbWVTZWxlY3RvcjogXCJjbGFzc1wiLFxuICAgICAgICAvLyBnZW5lcmF0ZWQgc3R5bGVzaGVldDpcbiAgICAgICAgLy8gLS1jdXN0b20tbXVpLXRoZW1lLXByaW1hcnktbWFpbjogLi4uO1xuICAgICAgICBjc3NWYXJQcmVmaXg6IFwiY3VzdG9tLW11aS10aGVtZVwiLFxuICAgIH0gfSkpO1xudGhlbWUgPSAoMCwgc3R5bGVzXzEucmVzcG9uc2l2ZUZvbnRTaXplcykodGhlbWUpO1xuZXhwb3J0cy5kZWZhdWx0ID0gdGhlbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgICAgICAgICByZXR1cm4gYXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvd25LZXlzKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICAgICAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBHcmlkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiKSk7XG52YXIgcHJvamVjdF9saXN0XzEgPSByZXF1aXJlKFwiLi4vLi4vY29udGVudC9wcm9qZWN0cy9wcm9qZWN0LWxpc3RcIik7XG52YXIgUHJvamVjdFNlbGVjdGlvbkJsb2NrXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvUHJvamVjdFNlbGVjdGlvbkJsb2NrXCIpKTtcbnZhciBTbGlkZVdyYXBwZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWQvU2xpZGVXcmFwcGVyXCIpKTtcbnZhciBTZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbnRhaW5lclJlZiA9ICgwLCByZWFjdF8xLnVzZVJlZikobnVsbCk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHJlZjogY29udGFpbmVyUmVmIH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEdyaWRfMS5kZWZhdWx0LCB7IGNvbnRhaW5lcjogdHJ1ZSwgZGlyZWN0aW9uOiBcInJvd1wiLCBzcGFjaW5nOiAyLCBzaXplOiB7IHhzOiA2LCBtZDogOCB9IH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTbGlkZVdyYXBwZXJfMS5kZWZhdWx0LCB7IHNsaWRlRnJvbVJlZjogY29udGFpbmVyUmVmLCBkZWxheTogNTAwLCBkaXJlY3Rpb246IFwidXBcIiB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFByb2plY3RTZWxlY3Rpb25CbG9ja18xLmRlZmF1bHQsIHsgY2F0OiBwcm9qZWN0X2xpc3RfMS5Qcm9qZWN0Q2F0ZWdvcmllcy5QRVJTT05BTCwgZGF0YTogcHJvamVjdF9saXN0XzEuUHJvamVjdExpc3RbcHJvamVjdF9saXN0XzEuUHJvamVjdENhdGVnb3JpZXMuUEVSU09OQUxdIH0pKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNsaWRlV3JhcHBlcl8xLmRlZmF1bHQsIHsgc2xpZGVGcm9tUmVmOiBjb250YWluZXJSZWYsIGRlbGF5OiAxMDAwLCBkaXJlY3Rpb246IFwidXBcIiB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFByb2plY3RTZWxlY3Rpb25CbG9ja18xLmRlZmF1bHQsIHsgY2F0OiBwcm9qZWN0X2xpc3RfMS5Qcm9qZWN0Q2F0ZWdvcmllcy5BQ0FERU1JQywgZGF0YTogcHJvamVjdF9saXN0XzEuUHJvamVjdExpc3RbcHJvamVjdF9saXN0XzEuUHJvamVjdENhdGVnb3JpZXMuQUNBREVNSUNdIH0pKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBTZWxlY3Rpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgICAgICAgICByZXR1cm4gYXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvd25LZXlzKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICAgICAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgYWJvdXRfbWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29udGVudC9hYm91dC1tZVwiKSk7XG52YXIgQ29udGVudEJsb2NrXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvQ29udGVudEJsb2NrXCIpKTtcbnZhciBTY3JvbGxhYmxlQ29udGFpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvc3R5bGVkL1Njcm9sbGFibGVDb250YWluZXJcIikpO1xudmFyIFNsaWRlV3JhcHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL3N0eWxlZC9TbGlkZVdyYXBwZXJcIikpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudHMvc3R5bGVkL2NvbnN0YW50c1wiKTtcbnZhciBGYWRlV3JhcHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL3N0eWxlZC9GYWRlV3JhcHBlclwiKSk7XG52YXIgQWJvdXRNZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29udGFpbmVyUmVmID0gKDAsIHJlYWN0XzEudXNlUmVmKShudWxsKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsYWJsZUNvbnRhaW5lcl8xLmRlZmF1bHQsIHsgcmVmOiBjb250YWluZXJSZWYgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZhZGVXcmFwcGVyXzEuZGVmYXVsdCwgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoM1wiIH0sIFwiNXcxaFwiKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkdyaWQsIHsgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAyLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sIGFib3V0X21lXzEuZGVmYXVsdCA9PT0gbnVsbCB8fCBhYm91dF9tZV8xLmRlZmF1bHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFib3V0X21lXzEuZGVmYXVsdC5tYXAoZnVuY3Rpb24gKGNudEJsaywgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2xpZGVXcmFwcGVyXzEuZGVmYXVsdCwgeyBzbGlkZUZyb21SZWY6IGNvbnRhaW5lclJlZiwgZGVsYXk6IGkgKiBjb25zdGFudHNfMS5BTklfQ09OU1QuQUJPVVRfQ0FSRF9ERUxBWSwgZGlyZWN0aW9uOiBcInVwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29udGVudEJsb2NrXzEuZGVmYXVsdCwgeyBrZXk6IGksIGhlYWRpbmc6IGNudEJsay5oZWFkaW5nLCBib2R5OiBjbnRCbGsuYm9keSB9KSkpO1xuICAgICAgICAgICAgfSkpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFib3V0TWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgICAgICAgICByZXR1cm4gYXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvd25LZXlzKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICAgICAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBHcmlkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiKSk7XG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpO1xudmFyIHJlYWN0X3JvdXRlcl9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xudmFyIFByb2plY3RCbG9ja18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL1Byb2plY3RCbG9ja1wiKSk7XG52YXIgcHJvamVjdF9saXN0XzEgPSByZXF1aXJlKFwiLi4vLi4vY29udGVudC9wcm9qZWN0cy9wcm9qZWN0LWxpc3RcIik7XG52YXIgU2xpZGVXcmFwcGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkL1NsaWRlV3JhcHBlclwiKSk7XG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWQvY29uc3RhbnRzXCIpO1xudmFyIEZhZGVXcmFwcGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkL0ZhZGVXcmFwcGVyXCIpKTtcbnZhciBBY2FkZW1pYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29udGFpbmVyUmVmID0gKDAsIHJlYWN0XzEudXNlUmVmKShudWxsKTtcbiAgICB2YXIgdGhlbWUgPSAoMCwgbWF0ZXJpYWxfMS51c2VUaGVtZSkoKTtcbiAgICB2YXIgYW5pbWF0aW9uQnJlYWtwb2ludCA9ICgwLCBtYXRlcmlhbF8xLnVzZU1lZGlhUXVlcnkpKHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oY29uc3RhbnRzXzEuQU5JX0NPTlNULlBST0pfUk9XX0JSRUFLUE9JTlQpKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IGNvbnRhaW5lclJlZiB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRmFkZVdyYXBwZXJfMS5kZWZhdWx0LCB7IGRlbGF5OiBjb25zdGFudHNfMS5BTklfQ09OU1QuUFJPSl9TVUJIRUFESU5HX0RFTEFZIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiaDRcIiB9LCBcIkFjYWRlbWljX3Byb2plY3RzXCIpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEdyaWRfMS5kZWZhdWx0LCB7IGNvbnRhaW5lcjogdHJ1ZSwgc3BhY2luZzogMiwgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIgfSwgcHJvamVjdF9saXN0XzEuUHJvamVjdExpc3RbcHJvamVjdF9saXN0XzEuUHJvamVjdENhdGVnb3JpZXMuQUNBREVNSUNdLm1hcChmdW5jdGlvbiAocHJvaiwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2xpZGVXcmFwcGVyXzEuZGVmYXVsdCwgeyBzbGlkZUZyb21SZWY6IGNvbnRhaW5lclJlZiwgZGVsYXk6IGkgKiBjb25zdGFudHNfMS5BTklfQ09OU1QuUFJPSl9DQVJEU19ERUxBWSwgZGlyZWN0aW9uOiBhbmltYXRpb25CcmVha3BvaW50ID8gXCJ1cFwiIDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHJvamVjdEJsb2NrXzEuZGVmYXVsdCwgeyBwcm9qOiBwcm9qLCBrZXk6IGkgfSkpKTtcbiAgICAgICAgICAgIH0pKSksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5PdXRsZXQsIG51bGwpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gQWNhZGVtaWM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgICAgICAgICByZXR1cm4gYXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvd25LZXlzKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICAgICAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBDYXJkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ2FyZFwiKSk7XG52YXIgQ2FyZENvbnRlbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiKSk7XG52YXIgVHlwb2dyYXBoeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIikpO1xudmFyIEdyaWRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9HcmlkXCIpKTtcbnZhciBDb250ZW50QmxvY2sgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgaGVhZGluZyA9IF9hLmhlYWRpbmcsIGJvZHkgPSBfYS5ib2R5O1xuICAgIHZhciBfYiA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShcIlwiKSwgaGVhZGluZ1RleHQgPSBfYlswXSwgc2V0SGVhZGluZ1RleHQgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoW1wiXCJdKSwgYm9keVRleHQgPSBfY1swXSwgc2V0Qm9keVRleHQgPSBfY1sxXTtcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0SGVhZGluZ1RleHQoaGVhZGluZyk7XG4gICAgICAgIHNldEJvZHlUZXh0KGJvZHkpO1xuICAgIH0sIFtib2R5LCBoZWFkaW5nXSk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEdyaWRfMS5kZWZhdWx0LCB7IHNpemU6IHsgeHM6IDE1LCBtZDogMjAgfSwgc3g6IHsgd2lkdGg6IFwiMTAwJVwiIH0gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRfMS5kZWZhdWx0LCB7IHZhcmlhbnQ6IFwib3V0bGluZWRcIiB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRDb250ZW50XzEuZGVmYXVsdCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsgdmFyaWFudDogXCJoNVwiLCBjb21wb25lbnQ6IFwiZGl2XCIsIHN4OiB7IG1iOiAyIH0gfSwgaGVhZGluZ1RleHQpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcImJvZHkxXCIgfSwgYm9keVRleHQubWFwKGZ1bmN0aW9uIChib2R5LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsga2V5OiBpIH0sIGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICB9KSkpKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBDb250ZW50QmxvY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtdWlDb250YWluZXIgPSB7XG4gICAgTXVpQ29udGFpbmVyOiB7XG4gICAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDAsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAwLFxuICAgICAgICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcIjoge1xuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxODAwcHhcIiwgLy8gZGVmYXVsdCBpcyAxMjAwcHhcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IG11aUNvbnRhaW5lcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHBsYXllclBlcmZvcm1hbmNlUHJvamVjdGlvbiA9IHtcbiAgICBhYmJyOiBcInBsYXllci1wZXJmb3JtYW5jZS1wcm9qZWN0aW9uXCIsXG4gICAgbmFtZTogXCJQbGF5ZXIgUGVyZm9ybWFuY2UgUHJvamVjdGlvblwiLFxuICAgIGRhdGU6IFwiU2VwIDIwMTkgLSBEZWMgMjAxOVwiLFxuICAgIHRhZ3M6IFtcIlB5dGhvblwiLCBcIk1MXCIsIFwiQU5PVkFcIiwgXCJSZWdyZXNzaW9uXCIsIFwiRVRMXCIsIFwiRGF0YSBTY2llbmNlXCJdLFxuICAgIGNhdGVnb3J5OiBcIlN0YXRpc3RpY2FsIEFuYWx5c2lzXCIsXG4gICAgbGluazoge1xuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9GbHVmZmlzYXVydXMvcGxheWVyLXBlcmZvcm1hbmNlLXByb2plY3Rpb25cIixcbiAgICAgICAgaG9zdDogXCJiaXQubHkvcHBwLXJlcG9ydFwiLFxuICAgIH0sXG4gICAgZGV0YWlsOiB7XG4gICAgICAgIHNob3J0OiBcIk1MIGFsZ28gdG8gYW5hbHl6ZSBTdGVwaCBDdXJyeSdzIHBlcmZvcm1hbmNlIHN0YXRzLiBVdGlsaXplcyBFVEwgZm9yIGRhdGEgY29sbGVjdGlvbiBhbmQgcGFyc2luZywgR3JhZGllbnRCb29zdGluZ1JlZ3Jlc3NvciwgYW5kIEFOT1ZBLlwiLFxuICAgICAgICBsb25nOiBbXSxcbiAgICB9LFxuICAgIGltYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwicHBwL2FsbC0zLWRlZi10aWVycy10cmFpbi12cy1wcmVkaWN0X3diZmpnbVwiLFxuICAgICAgICAgICAgYWx0OiBcIlRyYWluaW5nIHZzIHByZWRpY3RlZFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVHJhaW5pbmcgcG9pbnRzIHZzIFByZWRpY3RlZCBwb2ludHMgYW5kIFJlZ3Jlc3Npb24gTGluZSBhZ2FpbnN0IHRocmVlIGRlZmVuaXN2ZSB0aWVycy5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcInBwcC9jdXJyeS1zaG90cy1tYWRlLWJ5LW1pbnV0ZXNfYTZnZ24zXCIsXG4gICAgICAgICAgICBhbHQ6IFwiU3RlcGggQ3VycnkncyBzaG90cyBtYWRlIGJ5IG1pbnV0ZXMgcGFzc2VkIGluIHRoZSBnYW1lXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTdGVwaCBDdXJyeSdzIHNob3RzIG1hZGUgYnkgbWludXRlcyBwYXNzZWQgaW4gdGhlIGdhbWUuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJwcHAvcGxvdC1uYmEtZGVmLXJhdGluZ19hNGYwY2VcIixcbiAgICAgICAgICAgIGFsdDogXCIyMDA5LTIwMTkgQWdncmVnYXRlZCBEZWZlbnNpdmUgUmF0aW5ncyBvZiBhbGwgMzAgTkJBIHRlYW1zXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCIyMDA5LTIwMTkgQWdncmVnYXRlZCBEZWZlbnNpdmUgUmF0aW5ncyBvZiBhbGwgMzAgTkJBIHRlYW1zLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwicHBwL3ZhcmlhbmNlLXNob3QtZGVmc19zMGw0YXhcIixcbiAgICAgICAgICAgIGFsdDogXCJGcmVxdWVuY3kgb2Ygc2hvdHMgbWFkZSB2cyBkaWZmZXJlbnQgdGllcnMgb2YgZGVmZmVuc2VcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlN0ZXBoJ3Mgc2hvdHMgbWFkZSB2cyBkaWZmZXJlbnQgdGllcnMgb2YgZGVmZW5zZS5cIixcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHBsYXllclBlcmZvcm1hbmNlUHJvamVjdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgU2Nyb2xsYWJsZUNvbnRhaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL3N0eWxlZC9TY3JvbGxhYmxlQ29udGFpbmVyXCIpKTtcbnZhciBEb2VzTm90RXhpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNjcm9sbGFibGVDb250YWluZXJfMS5kZWZhdWx0LCBudWxsLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiaDNcIiB9LCBcIk9vcHMhXCIpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiYm9keTFcIiB9LCBcIlRoZSBwYWdlIHlvdSdyZSBsb29raW5nIGZvciBkb2VzIG5vdCBleGlzdCAoeWV0PykhXCIpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiYm9keTFcIiB9LCBcIkNsaWNrIHRoZSBsaW5rcyBhYm92ZSB0byB0ZWxlcG9ydCBiYWNrIVwiKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBEb2VzTm90RXhpc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBmYWxsaW5nQmxvY2tzID0ge1xuICAgIC8vIGZhbGxpbmctYmxvY2tzXG4gICAgYWJicjogXCJmYWxsaW5nLWJsb2Nrc1wiLFxuICAgIG5hbWU6IFwiRmFsbGluZyBCbG9ja3NcIixcbiAgICBkYXRlOiBcIkFwciAyMDE4IC0gTWF5IDIwMThcIixcbiAgICB0YWdzOiBbXCJDI1wiLCBcIlVuaXR5XCIsIFwiR2FtZSBEZXZcIiwgXCJHYW1lXCJdLFxuICAgIGNhdGVnb3J5OiBcIkVuZGxlc3MgR2FtZVwiLFxuICAgIGxpbms6IHtcbiAgICAgICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vRmx1ZmZpc2F1cnVzL0ZhbGxpbmctQmxvY2tzXCIsXG4gICAgICAgIGhvc3Q6IFwiYml0Lmx5L2ZhbGwtYmxvY2tzXCIsXG4gICAgfSxcbiAgICBkZXRhaWw6IHtcbiAgICAgICAgc2hvcnQ6IFwiRW5kbGVzcyAyRCBnYW1lIC0gZXZhZGUgdGhlIGJsb2NrcyEgV2FzIGNvbXBsZXRlZCB0byBwcmFjdGljZSBVbml0eSBiYXNpY3MgYWZ0ZXIgYSBsb25nIGhpYXR1cyBmcm9tIHRoZSBnYW1lIGVuZ2luZS5cIixcbiAgICAgICAgbG9uZzogW10sXG4gICAgfSxcbiAgICBpbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImZhbGxpbmdibG9ja3MvaG9tZV9nMGl6bHNcIixcbiAgICAgICAgICAgIGFsdDogXCJGYWxsaW5nIEJsb2NrczogSG9tZSBTY3JlZW5cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkluc3RydWN0aW9uYWwgaG9tZSBzY3JlZW4uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJmYWxsaW5nYmxvY2tzL2luLWdhbWVfZDRhOWhjXCIsXG4gICAgICAgICAgICBhbHQ6IFwiRmFsbGluZyBCbG9ja3M6IEluLUdhbWVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkluIGdhbWUgc2NyZWVuc2hvdC5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImZhbGxpbmdibG9ja3MvZ2FtZS1vdmVyX3NrZmV2ZVwiLFxuICAgICAgICAgICAgYWx0OiBcIkZhbGxpbmcgQmxvY2tzOiBHYW1lIE92ZXIgU2NyZWVuXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIG92ZXIgc2NyZWVuIHdpdGggaGlnaHNjb3JlIGFuZCBwbGF5LWFnYWluIHByb21wdC5cIixcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZhbGxpbmdCbG9ja3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG5yZXF1aXJlKFwiLi4vc3R5bGVzL3Byb2plY3RzLnNjc3NcIik7XG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpO1xudmFyIFNjcm9sbGFibGVDb250YWluZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9zdHlsZWQvU2Nyb2xsYWJsZUNvbnRhaW5lclwiKSk7XG52YXIgRmFkZVdyYXBwZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9zdHlsZWQvRmFkZVdyYXBwZXJcIikpO1xudmFyIFByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTY3JvbGxhYmxlQ29udGFpbmVyXzEuZGVmYXVsdCwgeyBjbGFzc05hbWU6IFwiUHJvamVjdHMtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZhZGVXcmFwcGVyXzEuZGVmYXVsdCwgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoM1wiIH0sIFwiUHJvamVjdHNcIikpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLk91dGxldCwgbnVsbCkpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gUHJvamVjdHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBzcG9jaGlWMCA9IHtcbiAgICAvLyBuYmEtZGF0YS12aXpcbiAgICBhYmJyOiBcIm5iYS1kYXRhLXZpelwiLFxuICAgIG5hbWU6IFwiTkJBIERhdGEgVmlzdWFsaXphdGlvblwiLFxuICAgIGRhdGU6IFwiQXVnIDIwMTkgLSBQcmVzZW50XCIsXG4gICAgdGFnczogW1wiRDNcIiwgXCJSZWFjdFwiLCBcIlB5dGhvblwiLCBcIkZsYXNrXCIsIFwiSlNcIl0sXG4gICAgY2F0ZWdvcnk6IFwiV2ViIEFwcCAvIFRvb2xcIixcbiAgICBsaW5rOiB7XG4gICAgICAgIHJlcG86IFwiXCIsXG4gICAgICAgIGhvc3Q6IFwiXCIsXG4gICAgfSxcbiAgICBkZXRhaWw6IHtcbiAgICAgICAgc2hvcnQ6IFwiW0luIFByb2dyZXNzXSBGdWxsLXN0YWNrIGRhdGEgdmlzdWFsaXphdGlvbiB0b29sLiBBbmFseXplIE5CQSBwbGF5ZXIncyBzdGF0cyB0aHJvdWdoIGludGVyYWN0aXZlIHZpc3VhbGl6YXRpb25zLiBcIixcbiAgICAgICAgbG9uZzogW10sXG4gICAgfSxcbiAgICBpbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImZiZHYvZmJkdi1icnVzaF9keXl2dWxcIixcbiAgICAgICAgICAgIGFsdDogXCJOQkEgRGF0YSBWaXo6IEJydXNoIFNlbGVjdGlvblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlciBjYW4gYnJ1c2ggc2VsZWN0IGRhdGEgLSBpbiB0aGUgZnV0dXJlIHVzZXIgd2lsbCBiZSBhYmxlIHRvIGZ1cnRoZXIgaW50ZXJhY3Qgd2l0aCB0aGlzIHNlbGVjdGlvbiwgaWUuIHZpc3VhbGl6ZSBzdWJzZXQgd2l0aCBhbm90aGVyIGdyYXBoLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiZmJkdi9mYmR2LXpvb21fZ2s1aHpoXCIsXG4gICAgICAgICAgICBhbHQ6IFwiTkJBIERhdGEgVml6OiBab29tXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJab29taW5nIGF0IGRpZmZlcmVudCBsZXZlbHMgd2l0aCBoaXN0b3J5IGJlaW5nIHNhdmVkLiBVc2VyIGNhbiB1bmRvLCByZWRvLCBhbmQgcmVzZXQuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJmYmR2L2ZiZHYtem9vbS0xX3h6c3QzZlwiLFxuICAgICAgICAgICAgYWx0OiBcIk5CQSBEYXRhIFZpejogWm9vbVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiWm9vbWluZyBmdXJ0aGVyIHRvIHN1YnNldCB0aGUgZGF0YSBzZWVuLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiZmJkdi9mYmR2LWFzc2lzdHNfdnN1aDZ2XCIsXG4gICAgICAgICAgICBhbHQ6IFwiTkJBIERhdGEgVml6OiBBc3Npc3RzIC0gRGlmZmVyZW50IFN0YXRzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWaXN1YWxpemUgZGlmZmVyZW50IGJveCBzY29yZSBtZXRyaWNzIC0gaW4gZnV0dXJlIGl0ZXJhdGlvbnMsIHRoZSB1c2VyIHdpbGwgYmUgYWJsZSB0byBncmFwaCBhbmQgdGFidWxhcml6ZSBhbGwgYm94IHNjb3JlIGRhdGEuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJmYmR2L2ZiZHYtYnJ1c2hfZHl5dnVsXCIsXG4gICAgICAgICAgICBhbHQ6IFwiTkJBIERhdGEgVml6OiBUb29sdGlwXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUb29sdGlwIHRvIHNob3cgcmVzcGVjdGl2ZSBkYXRhIG9mIHRoZSBwb2ludCAtIGluIHRoZSBmdXR1cmUgd2lsbCBpbmNsdWRlIG1vcmUgZGV0YWlsIGFuZCB3aWxsIGJlIGludGVyYWN0YWJsZS5cIixcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNwb2NoaVYwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbXVpTGlzdCA9IHtcbiAgICBNdWlMaXN0OiB7XG4gICAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBtdWlMaXN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYm9iYnlzQnJlYWtvdXQgPSB7XG4gICAgYWJicjogXCJib2JieXMtYnJlYWtvdXRcIixcbiAgICBuYW1lOiBcIkJvYmJ5J3MgQnJlYWtvdXRcIixcbiAgICBkYXRlOiBcIlNlcCAyMDE5IC0gRGVjIDIwMTlcIixcbiAgICB0YWdzOiBbXG4gICAgICAgIFwiQWdpbGVcIixcbiAgICAgICAgXCJHYW1lIERldlwiLFxuICAgICAgICBcIk5vZGVKU1wiLFxuICAgICAgICBcIkZ1bGwgU3RhY2tcIixcbiAgICAgICAgXCJIZXJva3VcIixcbiAgICAgICAgXCJPT0RcIixcbiAgICAgICAgXCJTeXMgRGVzaWduXCIsXG4gICAgICAgIFwiR2FtZVwiLFxuICAgIF0sXG4gICAgY2F0ZWdvcnk6IFwiVG9wIERvd24gUlBHXCIsXG4gICAgbGluazoge1xuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hYmhhdHRoYWwvQm9iYnktQnJlYWtvdXRcIixcbiAgICAgICAgaG9zdDogXCJiaXQubHkvYm9iYnktYnJlYWtvdXRcIixcbiAgICB9LFxuICAgIGRldGFpbDoge1xuICAgICAgICBzaG9ydDogXCJGdWxsIHN0YWNrIGJyb3dzZXIgUlBHIC0gcGxheSBhcyBTRlUncyBEci4gQm9iYnkgQ2hhbiBpbiBhIHRvcC1kb3duIGdhbWUgd2l0aCB0aGUgUG9rZW1vbi1zdHlsZSBjb21iYXQgc3lzdGVtLlwiLFxuICAgICAgICBsb25nOiBbXSxcbiAgICB9LFxuICAgIGltYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYm9iYnkvYm9iYnktYnJlYWtvdXQtbWFwX3FleDVkMFwiLFxuICAgICAgICAgICAgYWx0OiBcIkJvYmJ5IEJyZWFrb3V0OiBNYXBcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkluLWdhbWUgc2NyZWVuc2hvdCBvZiB0aGUgbWFwIC0gU0ZVJ3MgQ1MgbGFiIGJsdWVwcmludC5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImJvYmJ5L2JvYmJ5LWJyZWFrb3V0LWludmVudG9yeV96Z3dxdTFcIixcbiAgICAgICAgICAgIGFsdDogXCJCb2JieSBCcmVha291dDogSW52ZW50b3J5XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJQbGF5ZXIgKEJvYmJ5J3MpIGludmVudG9yeSBvZiBwaWNrZWQgdXAgbG9vdCAtIHVzZXIgY2FuIHN3YXAgbG9hZG91dHMgYW5kIGVxdWlwcGVkIGl0ZW1zLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYm9iYnkvYm9iYnktYnJlYWtvdXQtZmlnaHRfY2Nna2JzXCIsXG4gICAgICAgICAgICBhbHQ6IFwiQm9iYnkgQnJlYWtvdXQ6IEZpZ2h0IFNjZW5lXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJQb2tlbW9uIHN0eWxlIGZpZ2h0IHNjZW5lIVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYm9iYnkvYm9iYnktYnJlYWtvdXQtZmlnaHQtMV9oZzRsY2RcIixcbiAgICAgICAgICAgIGFsdDogXCJCb2JieSBCcmVha291dDogRmlnaHQgU2NlbmUgUGxheWVyIEFiaWxpdHlcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlBsYXllciB1c2luZyBhbiBhYmlsaXR5IC0gcG9rZW1vbiBzdHlsZSBjb21iYXQgZGlhbG9ndWUuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJib2JieS9ib2JieS1icmVha291dC1maWdodC0yX2cyOWR6eVwiLFxuICAgICAgICAgICAgYWx0OiBcIkJvYmJ5IEJyZWFrb3V0OiBGaWdodCBTY2VuZSBFbmVteSBBYmlsaXR5XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJFbmVteSByZXRhbGlhdGluZyB3aXRoIHRoZWlyIGN1c3RvbSBza2lsbHMuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJib2JieS9ib2JieS1icmVha291dC1pdGVtX28xdTh2bVwiLFxuICAgICAgICAgICAgYWx0OiBcIkJvYmJ5IEJyZWFrb3V0OiBGdW5ueSBJdGVtc1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSW4tZ2FtZSBpdGVtcyB1c2VyIGNhbiBwaWNrIHVwLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYm9iYnkvYm9iYnktYnJlYWtvdXQtYWNoaWV2ZW1lbnRfdHZiaXhjXCIsXG4gICAgICAgICAgICBhbHQ6IFwiQm9iYnkgQnJlYWtvdXQ6IEFjaGlldmVtZW50XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEeW5hbWljIGFuZCBwZXJzaXN0ZW50IGFjaGlldmVtZW50cyBzY3JlZW4gKHN0b3JlZCBpbiBkYXRhYmFzZSBieSBhY2NvdW50IHNlc3Npb24pLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYm9iYnkvYm9iYnktYnJlYWtvdXQtaW52ZW50b3J5X3pnd3F1MVwiLFxuICAgICAgICAgICAgYWx0OiBcIkJvYmJ5IEJyZWFrb3V0OiBMb2dpbiBhbmQgU2lnbnVwXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb2dpbiBhbmQgc2lnbnVwIHNjcmVlbiBmb3IgdGhlIHVzZXIgdG8gcmVnaXN0ZXIuXCIsXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBib2JieXNCcmVha291dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBHaXRIdWJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9HaXRIdWJcIikpO1xudmFyIExpbmtlZEluXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTGlua2VkSW5cIikpO1xudmFyIEVtYWlsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRW1haWxcIikpO1xudmFyIHJlYWN0XzIgPSByZXF1aXJlKFwiQGNsb3VkaW5hcnkvcmVhY3RcIik7XG52YXIgcmVzaXplXzEgPSByZXF1aXJlKFwiQGNsb3VkaW5hcnkvdXJsLWdlbi9hY3Rpb25zL3Jlc2l6ZVwiKTtcbnZhciBTY3JvbGxhYmxlQ29udGFpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvc3R5bGVkL1Njcm9sbGFibGVDb250YWluZXJcIikpO1xudmFyIENsb3VkaW5hcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9DbG91ZGluYXJ5XCIpKTtcbnZhciBTbGlkZVdyYXBwZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9zdHlsZWQvU2xpZGVXcmFwcGVyXCIpKTtcbnZhciBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL3N0eWxlZC9jb25zdGFudHNcIik7XG52YXIgRmFkZVdyYXBwZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9zdHlsZWQvRmFkZVdyYXBwZXJcIikpO1xudmFyIGluZm8gPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcImxpbmtlZGluXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FuZ3VzLWhvbi9cIixcbiAgICAgICAgaWNvbjogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTGlua2VkSW5fMS5kZWZhdWx0LCBudWxsKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJnaXRodWJcIixcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vRmx1ZmZpc2F1cnVzXCIsXG4gICAgICAgIGljb246IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEdpdEh1Yl8xLmRlZmF1bHQsIG51bGwpLFxuICAgIH0sXG4gICAgeyBuYW1lOiBcImVtYWlsXCIsIGxpbms6IFwiXCIsIGljb246IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEVtYWlsXzEuZGVmYXVsdCwgbnVsbCksIG1vZGFsOiB0cnVlIH0sXG5dO1xudmFyIENvbnRhY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRoZW1lID0gKDAsIG1hdGVyaWFsXzEudXNlVGhlbWUpKCk7XG4gICAgdmFyIGFuaW1hdGlvbkJyZWFrcG9pbnQgPSAoMCwgbWF0ZXJpYWxfMS51c2VNZWRpYVF1ZXJ5KSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xuICAgIHZhciBjb250YWluZXJSZWYgPSAoMCwgcmVhY3RfMS51c2VSZWYpKG51bGwpO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTY3JvbGxhYmxlQ29udGFpbmVyXzEuZGVmYXVsdCwgeyByZWY6IGNvbnRhaW5lclJlZiB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRmFkZVdyYXBwZXJfMS5kZWZhdWx0LCBudWxsLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImgzXCIgfSwgXCJDb250YWN0IEluZm9cIikpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5HcmlkLCB7IGNvbnRhaW5lcjogdHJ1ZSwgc3BhY2luZzogMiwgZGlyZWN0aW9uOiB7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9IH0sIGluZm8ubWFwKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTbGlkZVdyYXBwZXJfMS5kZWZhdWx0LCB7IHNsaWRlRnJvbVJlZjogY29udGFpbmVyUmVmLCBkZWxheTogaSAqIGNvbnN0YW50c18xLkFOSV9DT05TVC5DT05UQUNUX0JBREdFX0RFTEFZLCBkaXJlY3Rpb246IGFuaW1hdGlvbkJyZWFrcG9pbnQgPyBcInVwXCIgOiBcImxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNhcmQsIHsga2V5OiBpLCBzeDogeyB3aWR0aDogXCIxNTBweFwiLCBoZWlnaHQ6IFwiZml0LWNvbnRlbnRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNhcmRBY3Rpb25BcmVhLCB7IGhyZWY6IGl0ZW0ubGluaywgdGFyZ2V0OiBcIl9ibGFua1wiLCByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5HcmlkLCB7IGNvbnRhaW5lcjogdHJ1ZSwgc3BhY2luZzogMiwgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiYm9keTFcIiB9LCBpdGVtLm5hbWUpKSkpKSk7XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkdyaWQsIHsgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAxLCBkaXJlY3Rpb246IFwiY29sdW1uXCIsIHN4OiB7IHBhZGRpbmdUb3A6IFwiMzBweFwiIH0gfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTbGlkZVdyYXBwZXJfMS5kZWZhdWx0LCB7IHNsaWRlRnJvbVJlZjogY29udGFpbmVyUmVmLCBkZWxheTogY29uc3RhbnRzXzEuQU5JX0NPTlNULkNPTlRBQ1RfUE9SVFJBSVRfSEVBRElOR19ERUxBWSwgZGlyZWN0aW9uOiBcInVwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiaDVcIiB9LCBcIldobyB5b3UgYXJlIGNvbnRhY3Rpbmc6XCIpKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTbGlkZVdyYXBwZXJfMS5kZWZhdWx0LCB7IHNsaWRlRnJvbVJlZjogY29udGFpbmVyUmVmLCBkZWxheTogY29uc3RhbnRzXzEuQU5JX0NPTlNULkNPTlRBQ1RfUE9SVFJBSVRfUElDX0RFTEFZLCBkaXJlY3Rpb246IFwidXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNhcmQsIHsgc3g6IHsgd2lkdGg6IFwiZml0LWNvbnRlbnRcIiwgaGVpZ2h0OiBcImZpdC1jb250ZW50XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5HcmlkLCB7IGNvbnRhaW5lcjogdHJ1ZSwgZGlyZWN0aW9uOiBcImNvbHVtblwiLCBzcGFjaW5nOiAyLCBzeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzIuQWR2YW5jZWRJbWFnZSwgeyBjbGRJbWc6IENsb3VkaW5hcnlfMS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1hZ2UoXCJwb3J0Zm9saW8vRWxpdGVfZ29vc2Vfam5keTNsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzaXplKCgwLCByZXNpemVfMS5maXQpKDQwMCwgNDAwKSkgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiYm9keTFcIiB9LCBcInNlbGYgcG9ydHJhaXRcIikpKSkpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IENvbnRhY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgQ2FyZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NhcmRcIikpO1xudmFyIENhcmRBY3Rpb25BcmVhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ2FyZEFjdGlvbkFyZWFcIikpO1xudmFyIENhcmRDb250ZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnRcIikpO1xudmFyIHJlYWN0X3JvdXRlcl9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xudmFyIFR5cG9ncmFwaHlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCIpKTtcbnZhciBTY2hvb2xUd29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2Nob29sVHdvVG9uZVwiKSk7XG52YXIgRmFjZVR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9GYWNlVHdvVG9uZVwiKSk7XG52YXIgcHJvamVjdF9saXN0XzEgPSByZXF1aXJlKFwiLi4vY29udGVudC9wcm9qZWN0cy9wcm9qZWN0LWxpc3RcIik7XG52YXIgaWNvblN0eWxpbmcgPSB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgaGVpZ2h0OiBcIjUwJVwiLFxuICAgIG1hcmdpbjogXCJhdXRvXCIsXG59O1xudmFyIFByb2plY3RTZWxlY3Rpb25CbG9jayA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjYXQgPSBfYS5jYXQsIGRhdGEgPSBfYS5kYXRhO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCByZWFjdF9yb3V0ZXJfZG9tXzEudXNlTG9jYXRpb24pKCk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDYXJkXzEuZGVmYXVsdCwgeyBzeDogeyBtYXhXaWR0aDogMzAwIH0gfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2FyZEFjdGlvbkFyZWFfMS5kZWZhdWx0LCB7IGNvbXBvbmVudDogcmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHRvOiBjYXQsIHN0YXRlOiBsb2NhdGlvbiB9LFxuICAgICAgICAgICAgY2F0ID09IHByb2plY3RfbGlzdF8xLlByb2plY3RDYXRlZ29yaWVzLlBFUlNPTkFMID8gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZhY2VUd29Ub25lXzEuZGVmYXVsdCwgeyBzeDogaWNvblN0eWxpbmcgfSkpIDogKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNjaG9vbFR3b1RvbmVfMS5kZWZhdWx0LCB7IHN4OiBpY29uU3R5bGluZyB9KSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDYXJkQ29udGVudF8xLmRlZmF1bHQsIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsgZ3V0dGVyQm90dG9tOiB0cnVlLCB2YXJpYW50OiBcImg1XCIsIGNvbXBvbmVudDogXCJkaXZcIiB9LCBjYXQpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHlfMS5kZWZhdWx0LCB7IHZhcmlhbnQ6IFwiYm9keTJcIiwgc3g6IHsgY29sb3I6IFwidGV4dC5zZWNvbmRhcnlcIiB9IH0sIGRhdGEubWFwKGZ1bmN0aW9uIChwcm9qKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIi0gXCIuY29uY2F0KHByb2oubmFtZSwgXCIgXCIpO1xuICAgICAgICAgICAgICAgIH0pKSkpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gUHJvamVjdFNlbGVjdGlvbkJsb2NrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBEYXJrTW9kZVR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9EYXJrTW9kZVR3b1RvbmVcIikpO1xudmFyIExpZ2h0TW9kZVR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9MaWdodE1vZGVUd29Ub25lXCIpKTtcbnZhciBTZXR0aW5nc1N5c3RlbURheWRyZWFtVHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NldHRpbmdzU3lzdGVtRGF5ZHJlYW1Ud29Ub25lXCIpKTtcbnZhciBUb2dnbGVUaGVtZUJ1dHRvbnMgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgbW9kZSA9IF9hLm1vZGUsIHNldE1vZGUgPSBfYS5zZXRNb2RlO1xuICAgIHZhciBoYW5kbGVUb2dnbGVUaGVtZSA9IGZ1bmN0aW9uIChldmVudCwgbmV3VGhlbWVNb2RlKSB7XG4gICAgICAgIHNldE1vZGUobmV3VGhlbWVNb2RlKTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlRvZ2dsZUJ1dHRvbkdyb3VwLCB7IHZhbHVlOiBtb2RlLCBkZWZhdWx0VmFsdWU6IG1vZGUsIGV4Y2x1c2l2ZTogdHJ1ZSwgb25DaGFuZ2U6IGhhbmRsZVRvZ2dsZVRoZW1lLCBcImFyaWEtbGFiZWxcIjogXCJ0aGVtZSBtb2RlIHRvZ2dsZVwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Ub2dnbGVCdXR0b24sIHsgdmFsdWU6IFwic3lzdGVtXCIsIFwiYXJpYS1sYWJlbFwiOiBcImxpZ2h0IG1vZGVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZXR0aW5nc1N5c3RlbURheWRyZWFtVHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlRvZ2dsZUJ1dHRvbiwgeyB2YWx1ZTogXCJsaWdodFwiLCBcImFyaWEtbGFiZWxcIjogXCJsaWdodCBtb2RlXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlnaHRNb2RlVHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlRvZ2dsZUJ1dHRvbiwgeyB2YWx1ZTogXCJkYXJrXCIsIFwiYXJpYS1sYWJlbFwiOiBcImRhcmsgbW9kZVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERhcmtNb2RlVHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRvZ2dsZVRoZW1lQnV0dG9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgU2RUd29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2RUd29Ub25lXCIpKTtcbnZhciBIZFR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9IZFR3b1RvbmVcIikpO1xudmFyIEZvdXJLVHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0ZvdXJLVHdvVG9uZVwiKSk7XG52YXIgcmVhY3RfdG9hc3RpZnlfMSA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTtcbmZ1bmN0aW9uIFRvZ2dsZUltYWdlUXVhbGl0eUJ1dHRvbnMoKSB7XG4gICAgdmFyIF9hID0gUmVhY3QudXNlU3RhdGUoXCJoaWdoXCIpLCBpbWdRdWFsaXR5ID0gX2FbMF0sIHNldEltZ1F1YWxpdHkgPSBfYVsxXTtcbiAgICB2YXIgaGFuZGxlVG9nZ2xlSW1nUXVhbGl0eSA9IGZ1bmN0aW9uIChldmVudCwgbmV3SW1nUXVhbGl0eSkge1xuICAgICAgICBpZiAobmV3SW1nUXVhbGl0eSkge1xuICAgICAgICAgICAgc2V0SW1nUXVhbGl0eShuZXdJbWdRdWFsaXR5KTtcbiAgICAgICAgICAgIHJlYWN0X3RvYXN0aWZ5XzEudG9hc3Quc3VjY2VzcyhcIkltYWdlIHF1YWxpdHk6IFwiLmNvbmNhdChuZXdJbWdRdWFsaXR5KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRJbWdRdWFsaXR5KFwiaGlnaFwiKTtcbiAgICAgICAgICAgIHJlYWN0X3RvYXN0aWZ5XzEudG9hc3Quc3VjY2VzcyhcIkltYWdlIHF1YWxpdHk6IGRlZmF1bHQgKGhpZ2gpXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Ub2dnbGVCdXR0b25Hcm91cCwgeyB2YWx1ZTogaW1nUXVhbGl0eSwgZXhjbHVzaXZlOiB0cnVlLCBvbkNoYW5nZTogaGFuZGxlVG9nZ2xlSW1nUXVhbGl0eSwgXCJhcmlhLWxhYmVsXCI6IFwiaW1hZ2UgcXVhbGl0eSB0b2dnbGVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlRvZ2dsZUJ1dHRvbiwgeyB2YWx1ZTogXCJsb3dcIiwgXCJhcmlhLWxhYmVsXCI6IFwibG93IGltYWdlIHF1YWxpdHlcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2RUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlRvZ2dsZUJ1dHRvbiwgeyB2YWx1ZTogXCJtZWRpdW1cIiwgXCJhcmlhLWxhYmVsXCI6IFwibWVkaXVtIGltYWdlIHF1YWxpdHlcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGRUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlRvZ2dsZUJ1dHRvbiwgeyB2YWx1ZTogXCJoaWdoXCIsIFwiYXJpYS1sYWJlbFwiOiBcImhpZ2ggaW1hZ2UgcXVhbGl0eVwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3VyS1R3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSkpKSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBUb2dnbGVJbWFnZVF1YWxpdHlCdXR0b25zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBOYXZMaW5rc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL05hdkxpbmtzXCIpKTtcbnJlcXVpcmUoXCIuLi9zdHlsZXMvbGFuZGluZy5zY3NzXCIpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBtdWlCdXR0b25fMSA9IHJlcXVpcmUoXCIuLi9tdWkvY29tcG9uZW50cy9tdWlCdXR0b25cIik7XG52YXIgdGhlbWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbXVpL3RoZW1lXCIpKTtcbnZhciBMYW5kaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5GYWRlLCB7IGluOiB0cnVlLCBhcHBlYXI6IHRydWUsIHRpbWVvdXQ6IDMwMDAgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Cb3gsIHsgY2xhc3NOYW1lOiBcIkxhbmRpbmctY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImg1XCIsIHN4OiB7IGZvbnRGYW1pbHk6IFwiS2FybGFcIiwgZm9udFdlaWdodDogNzAwIH0gfSwgXCJIaSB0aGVyZSEgV2VsY29tZSB0b1wiKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQm94LCB7IGNsYXNzTmFtZTogXCJMYW5kaW5nLWNvbnRhaW5lcl9fbmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IGNsYXNzTmFtZTogXCJMYW5kaW5nLWNvbnRhaW5lcl9fbmFtZV9fZnVsbG5hbWVcIiwgdmFyaWFudDogXCJoMVwiLCBzeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lXzEuZGVmYXVsdC52YXJzLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZV8xLmRlZmF1bHQudmFycy5wYWxldHRlLmJhY2tncm91bmQuaGlnaGxpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB9IH0sIFwiYW5ndXNfaG9uXCIpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyBjbGFzc05hbWU6IFwiTGFuZGluZy1jb250YWluZXJfX25hbWVfX2F0XCIsIHZhcmlhbnQ6IFwiaDFcIiwgc3g6IHsgY29sb3I6IHRoZW1lXzEuZGVmYXVsdC52YXJzLnBhbGV0dGUucHJpbWFyeS5tYWluIH0gfSwgXCJAXFx1RDgzQ1xcdURGRTBcIikpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Cb3gsIHsgY2xhc3NOYW1lOiBcIkxhbmRpbmctY29udGFpbmVyX19uYXZcIiB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQnV0dG9uLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJOYXYtbGlua19fbm8tZXZlbnRzXCIgfSwgbXVpQnV0dG9uXzEubmF2TGlua0J1dHRvblByb3BzLCB7IHN4OiBfX2Fzc2lnbih7IHBhZGRpbmdMZWZ0OiAwIH0sIG11aUJ1dHRvbl8xLm5hdkxpbmtCdXR0b25Qcm9wcy5zeCkgfSksIFwifiRcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTmF2TGlua3NfMS5kZWZhdWx0LCBudWxsKSkpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTGFuZGluZztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFib3V0TWVDb250ZW50ID0gW1xuICAgIHtcbiAgICAgICAgaGVhZGluZzogXCJXaG8gaXMgQW5ndXM/XCIsXG4gICAgICAgIGJvZHk6IFtcbiAgICAgICAgICAgIFwiSGUgaXMgYSBzb2Z0d2FyZSBlbmdpbmVlciB3aG8gYWxzbyBoYXBwZW5zIHRvIGJlIGEgZGF0YSBzY2llbnRpc3QuIEhlIGlzIGFuIGF2aWQgY29tcHV0ZXIgJiBrZXlib2FyZCBidWlsZGVyLCBhbWF0ZXVyIGJhc2tldGJhbGwgYW5hbHlzdCwgYW5kIGNhc3VhbCB2b2xsZXliYWxsIHBsYXllci5cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaGVhZGluZzogXCJXaGF0IGlzIEFuZ3VzP1wiLFxuICAgICAgICBib2R5OiBbXG4gICAgICAgICAgICBcIkhlIGlzIGFuIGV0aG5pY2FsbHkgQ2hpbmVzZSBodW1hbiB0aGF0IHdhcyBib3JuIGFuZCByYWlzZWQgaW4gVmFuY291dmVyLCBDYW5hZGEuIEFzIG5vdGVkIGJ5IGN1bGluYXJ5IGV4cGVydHMsIEFuZ3VzIGlzIGFsc28gYSB0eXBlIG9mIGJlZWYuXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGhlYWRpbmc6IFwiV2hlcmUgaXMgQW5ndXM/XCIsXG4gICAgICAgIGJvZHk6IFtcIkhlIGlzIGN1cnJlbnRseSBpbiBWYW5jb3V2ZXIsIEJDLCBDYW5hZGEuXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBoZWFkaW5nOiBcIldoZW4gaXMgQW5ndXM/XCIsXG4gICAgICAgIGJvZHk6IFtcIkhFIElTIE5PVy5cIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGhlYWRpbmc6IFwiV2h5IGlzIEFuZ3VzP1wiLFxuICAgICAgICBib2R5OiBbXCJUaGF0IGlzIGEgcXVlc3Rpb24gaGUgZnJlcXVlbnRseSBhc2tzIGhpbXNlbGYuXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBoZWFkaW5nOiBcIkhvdyBpcyBBbmd1cz9cIixcbiAgICAgICAgYm9keTogW1xuICAgICAgICAgICAgXCJIZSBpcyB0YWtpbmcgYSBicmVhayBmcm9tIHdvcmsgdG8gZXhwbG9yZSBoaXMgb3RoZXIgcGFzc2lvbnMuXCIsXG4gICAgICAgICAgICBcIlByZXZpb3VzbHksIGhlIHdvcmtlZCBhcyBhIHNvZnR3YXJlIGVuZ2luZWVyIGF0IEFtYXpvbiBXZWIgU2VydmljZXMgYW5kIFNva2FudS5cIixcbiAgICAgICAgICAgIFwiQW5ndXMgZ3JhZHVhdGVkIGZyb20gU2ltb24gRnJhc2VyIFVuaXZlcnNpdHkgLSBtYWluJ2luZyBpbiBEYXRhIFNjaWVuY2UgYW5kIGFsdCdpbmcgSW50ZXJhY3RpdmUgQXJ0cyBhbmQgVGVjaG5vbG9neSAoR2FtZSBEZXNpZ24gYW5kIEludGVyYWN0aW9uIERlc2lnbikuXCIsXG4gICAgICAgICAgICBcIkluIGhpcyBzcGFyZSB0aW1lLCBBbmd1cyBlbmpveXMgaGFuZ2luZyBvdXQgd2l0aCBoaXMgZnJpZW5kcywgcGxheWluZyB2aWRlbyBnYW1lcywgYW5kIHdhdGNoaW5nIHRoZSBOQkEuXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbl07XG5leHBvcnRzLmRlZmF1bHQgPSBBYm91dE1lQ29udGVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHdlYnNpdGVWMSA9IHtcbiAgICBhYmJyOiBcIndlYnNpdGVcIixcbiAgICBuYW1lOiBcIlBlcnNvbmFsIFdlYnNpdGVcIixcbiAgICBkYXRlOiBcIk1hciAyMDE5IC0gUHJlc2VudFwiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiSlNcIiwgXCJDU1NcIl0sXG4gICAgY2F0ZWdvcnk6IFwiU2luZ2xlLVBhZ2UgV2ViIEFwcGxpY2F0aW9uXCIsXG4gICAgbGluazoge1xuICAgICAgICByZXBvOiBcIlwiLFxuICAgICAgICBob3N0OiBcIlwiLFxuICAgIH0sXG4gICAgZGV0YWlsOiB7XG4gICAgICAgIHNob3J0OiBcIllvdSdyZSBsb29raW5nIHJpZ2h0IGF0IGl0ISBTaW5nbGUgcGFnZSB3ZWIgYXBwIC0gbXkgb25saW5lIHBvcnRmb2xpby4gRmluZCBteSBtb3N0IHVwLXRvLWRhdGUgcHJvamVjdHMsIGludGVyZXN0cywgYW5kIG15IGNvbnRhY3QgaW5mby5cIixcbiAgICAgICAgbG9uZzogW10sXG4gICAgfSxcbiAgICBpbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndlYnNpdGUvbW9iaWxlX3c0amtuM1wiLFxuICAgICAgICAgICAgYWx0OiBcIldlYnNpdGU6IE1vYmlsZSBWaWV3XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJNb2JpbGUgdmlldyBvZiBteSB3ZWJzaXRlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3ZWJzaXRlL21vYmlsZS1hYm91dF90a3RodHFcIixcbiAgICAgICAgICAgIGFsdDogXCJXZWJzaXRlOiBNb2JpbGUgLSBBYm91dCBQYWdlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEaWZmZXJlbnQgaGllcmFyY2h5IGFuZCBsYXlvdXQgZm9yIG1vYmlsZSB2aWV3LlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2Vic2l0ZS9tb2JpbGUtcHJvamVjdHNfYWFsbmFmXCIsXG4gICAgICAgICAgICBhbHQ6IFwiV2Vic2l0ZTogTW9iaWxlIC0gUHJvamVjdHMgUGFnZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmVydGljYWwgY2FyZCBsYXlvdXQgYW5kIHN3aXBhYmxlIGNhcm91c2VsIHRvIHZpZXcgaW1hZ2VzLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2Vic2l0ZS9tb2JpbGUtbGlnaHRfdG9vbnNpXCIsXG4gICAgICAgICAgICBhbHQ6IFwiV2Vic2l0ZTogTW9iaWxlIC0gTGlnaHQgVGhlbWVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxpZ2h0IHRoZW1lZCB2ZXJzaW9uLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2Vic2l0ZS9tb2JpbGUtbGlnaHQtYWJvdXRfdW5mdWRvXCIsXG4gICAgICAgICAgICBhbHQ6IFwiV2Vic2l0ZTogTW9iaWxlIC0gTGlnaHQgVGhlbWUgQWJvdXQgUGFnZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQnJpZ2h0ZXIgY29sb3VyIHBhbGV0dGUgZm9yIG91dGRvb3IgZW52aXJvbm1lbnRzLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2Vic2l0ZS9tb2JpbGUtbGlnaHQtcHJvamVjdHNfY2xvYmxoXCIsXG4gICAgICAgICAgICBhbHQ6IFwiV2Vic2l0ZTogTW9iaWxlIC0gTGlnaHQgVGhlbWUgUHJvamVjdHMgUGFnZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTGlnaHQgdGhlbWVkIHZlcnNpb24gb2YgdGhlIHByb2plY3RzIHBhZ2UuXCIsXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSB3ZWJzaXRlVjE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFByb2plY3RNb2RhbENhcm91c2VsO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBCb3hfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Cb3hcIikpO1xudmFyIFR5cG9ncmFwaHlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCIpKTtcbnZhciBNb2RhbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL01vZGFsXCIpKTtcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgcmVhY3RfbWF0ZXJpYWxfdWlfY2Fyb3VzZWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3QtbWF0ZXJpYWwtdWktY2Fyb3VzZWxcIikpO1xudmFyIHJlYWN0XzIgPSByZXF1aXJlKFwiQGNsb3VkaW5hcnkvcmVhY3RcIik7XG52YXIgcmVzaXplXzEgPSByZXF1aXJlKFwiQGNsb3VkaW5hcnkvdXJsLWdlbi9hY3Rpb25zL3Jlc2l6ZVwiKTtcbnZhciBLZXlib2FyZEFycm93UmlnaHRUd29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd1JpZ2h0VHdvVG9uZVwiKSk7XG52YXIgS2V5Ym9hcmRBcnJvd0xlZnRUd29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0xlZnRUd29Ub25lXCIpKTtcbnZhciBQaG90b0xpYnJhcnlUd29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvUGhvdG9MaWJyYXJ5VHdvVG9uZVwiKSk7XG52YXIgQ2xvdWRpbmFyeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0Nsb3VkaW5hcnlcIikpO1xudmFyIFByb2plY3RDYXJvdXNlbF8xID0gcmVxdWlyZShcIi4vUHJvamVjdENhcm91c2VsXCIpO1xudmFyIGNvbXB1dGVOb2RlU3R5bGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbHMvY29tcHV0ZU5vZGVTdHlsZVwiKSk7XG52YXIgU2Nyb2xsYWJsZUNvbnRhaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3N0eWxlZC9TY3JvbGxhYmxlQ29udGFpbmVyXCIpKTtcbnZhciBGYWRlV3JhcHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3N0eWxlZC9GYWRlV3JhcHBlclwiKSk7XG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9zdHlsZWQvY29uc3RhbnRzXCIpO1xudmFyIHN0eWxlcyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBQcm9qZWN0Q2Fyb3VzZWxfMS5jYXJvdXNlbFN0eWxlcyksIHsgbW9kYWxCb3g6IHtcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgdG9wOiBcImNhbGMoNTAlICsgXCIuY29uY2F0KGNvbnN0YW50c18xLkFOSV9DT05TVC5HTE9CQUxfTkFWX0hFSUdIVCAvIDIsIFwicHgpXCIpLCAvLyBnbG9iYWwgbmF2IGJhciBvZmZzZXRcbiAgICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxuICAgICAgICB3aWR0aDogXCI4NyVcIixcbiAgICAgICAgaGVpZ2h0OiBcIjg3JVwiLFxuICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICAgICAgYm94U2hhZG93OiAyNCxcbiAgICAgICAgcDogMixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgfSB9KTtcbmZ1bmN0aW9uIFByb2plY3RNb2RhbENhcm91c2VsKF9hKSB7XG4gICAgdmFyIHByb2ogPSBfYS5wcm9qO1xuICAgIHZhciBuYXZpZ2F0ZSA9ICgwLCByZWFjdF9yb3V0ZXJfZG9tXzEudXNlTmF2aWdhdGUpKCk7XG4gICAgdmFyIHRoZW1lID0gKDAsIG1hdGVyaWFsXzEudXNlVGhlbWUpKCk7XG4gICAgdmFyIGlzU21hbGxTY3JlZW4gPSAoMCwgbWF0ZXJpYWxfMS51c2VNZWRpYVF1ZXJ5KSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIikpO1xuICAgIHZhciBjbGQgPSBDbG91ZGluYXJ5XzEuZGVmYXVsdDtcbiAgICB2YXIgX2IgPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pLCBkaW1zID0gX2JbMF0sIHNldERpbXMgPSBfYlsxXTtcbiAgICAvLyBpc3N1ZSB3aXRoIHVzZVJlZnMgYW5kIHVzZUVmZmVjdCBkZXRhaWxlZCBpbiB0aGlzIGFydGljbGVcbiAgICAvLyBodHRwczovL21lZGl1bS5jb20vQHRlaF9idWlsZGVyL3JlZi1vYmplY3RzLWluc2lkZS11c2VlZmZlY3QtaG9va3MtZWI3YzE1MTk4NzgwXG4gICAgLy8gc29sdXRpb24gZnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzY3OTA2MDg3XG4gICAgdmFyIG1vZGFsUmVmID0gKDAsIHJlYWN0XzEudXNlQ2FsbGJhY2spKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgbm9kZURpbXMgPSAoMCwgY29tcHV0ZU5vZGVTdHlsZV8xLmRlZmF1bHQpKG5vZGUpO1xuICAgICAgICAgICAgc2V0RGltcyh7XG4gICAgICAgICAgICAgICAgd2lkdGg6IG5vZGVEaW1zLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogbm9kZURpbXMuaGVpZ2h0IC0gY29uc3RhbnRzXzEuQU5JX0NPTlNULkdMT0JBTF9OQVZfSEVJR0hULFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgdmFyIGhhbmRsZUNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBuYXZpZ2F0ZShcIi0xXCIsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICB9O1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTW9kYWxfMS5kZWZhdWx0LCB7IG9wZW46IHRydWUsIG9uQ2xvc2U6IGhhbmRsZUNsb3NlLCBcImFyaWEtbGFiZWxsZWRieVwiOiBcIm1vZGFsLW1vZGFsLXRpdGxlLVwiLmNvbmNhdChwcm9qLmFiYnIpLCBcImFyaWEtZGVzY3JpYmVkYnlcIjogXCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvbi1cIi5jb25jYXQocHJvai5hYmJyKSB9LFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChGYWRlV3JhcHBlcl8xLmRlZmF1bHQsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCb3hfMS5kZWZhdWx0LCB7IHN4OiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc3R5bGVzLm1vZGFsQm94KSwgeyBmbGV4RGlyZWN0aW9uOiBpc1NtYWxsU2NyZWVuID8gXCJjb2x1bW4tcmV2ZXJzZVwiIDogXCJyb3dcIiB9KSB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNjcm9sbGFibGVDb250YWluZXJfMS5kZWZhdWx0LCB7IHN4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGlzU21hbGxTY3JlZW4gPyBcIjEwMCVcIiA6IFwiMzAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGlzU21hbGxTY3JlZW4gPyBcIjQwJVwiIDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5DYXJkQ29udGVudCwgeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IFwiMSAwIGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHlfMS5kZWZhdWx0LCB7IGlkOiBcIm1vZGFsLW1vZGFsLXRpdGxlLVwiLmNvbmNhdChwcm9qLmFiYnIpLCBjb21wb25lbnQ6IFwiZGl2XCIsIHZhcmlhbnQ6IFwiaDVcIiB9LCBwcm9qLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsgdmFyaWFudDogXCJzdWJ0aXRsZTFcIiwgY29tcG9uZW50OiBcImRpdlwiLCBzeDogeyBjb2xvcjogXCJ0ZXh0LnNlY29uZGFyeVwiIH0gfSwgcHJvai5jYXRlZ29yeSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkdyaWQsIHsgY29udGFpbmVyOiB0cnVlLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgc3BhY2luZzogMiwgcm93U3BhY2luZzogMCwgd2lkdGg6IFwiOTAlXCIgfSwgcHJvai50YWdzLm1hcChmdW5jdGlvbiAodGFnLCBpKSB7IHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsga2V5OiBpLCB2YXJpYW50OiBcInN1YnRpdGxlMlwiLCBjb21wb25lbnQ6IFwiZGl2XCIsIHN4OiB7IGNvbG9yOiBcInRleHQuc2Vjb25kYXJ5XCIgfSB9LCB0YWcpKTsgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQm94XzEuZGVmYXVsdCwgeyBzeDogeyBwYWRkaW5nVG9wOiBcIjEwcHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsgdmFyaWFudDogXCJib2R5MlwiIH0sIHByb2ouZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsgdmFyaWFudDogXCJib2R5MVwiIH0sIHByb2ouZGV0YWlsLnNob3J0KSkpKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCb3hfMS5kZWZhdWx0LCB7IHJlZjogbW9kYWxSZWYsIHN4OiB7IHdpZHRoOiBpc1NtYWxsU2NyZWVuID8gXCIxMDAlXCIgOiBcIjcwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfbWF0ZXJpYWxfdWlfY2Fyb3VzZWxfMS5kZWZhdWx0LCB7IHN0b3BBdXRvUGxheU9uSG92ZXI6IHRydWUsIGZ1bGxIZWlnaHRIb3ZlcjogdHJ1ZSwgYXV0b1BsYXk6IGZhbHNlLCBpbnRlcnZhbDogNTAwMCwgYW5pbWF0aW9uOiBcInNsaWRlXCIsIGluZGljYXRvcnM6IHRydWUsIG5hdkJ1dHRvbnNBbHdheXNWaXNpYmxlOiB0cnVlLCBOZXh0SWNvbjogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoS2V5Ym9hcmRBcnJvd1JpZ2h0VHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpLCBQcmV2SWNvbjogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoS2V5Ym9hcmRBcnJvd0xlZnRUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCkgfSwgcHJvai5pbWFnZXMubGVuZ3RoID49IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvai5pbWFnZXMubWFwKGZ1bmN0aW9uIChpdGVtLCBpKSB7IHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5DYXJkLCB7IGtleTogaSwgc3g6IF9fYXNzaWduKHsgaGVpZ2h0OiBkaW1zLmhlaWdodCB9LCBQcm9qZWN0Q2Fyb3VzZWxfMS5jYXJvdXNlbFN0eWxlcy5jYXJkKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJveF8xLmRlZmF1bHQsIHsgc3g6IF9fYXNzaWduKHsgd2lkdGg6IGRpbXMud2lkdGggfSwgUHJvamVjdENhcm91c2VsXzEuY2Fyb3VzZWxTdHlsZXMub3V0ZXJCb3gpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzIuQWR2YW5jZWRJbWFnZSwgeyBjbGRJbWc6IGNsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbWFnZShcInBvcnRmb2xpby9cIi5jb25jYXQoaXRlbS5zcmMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNpemUoKDAsIHJlc2l6ZV8xLmZpdCkoZGltcy53aWR0aCwgZGltcy5oZWlnaHQpKSwgcGx1Z2luczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCByZWFjdF8yLnBsYWNlaG9sZGVyKSh7IG1vZGU6IFwiYmx1clwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCByZWFjdF8yLnJlc3BvbnNpdmUpKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCb3hfMS5kZWZhdWx0LCB7IHN4OiBfX2Fzc2lnbih7fSwgUHJvamVjdENhcm91c2VsXzEuY2Fyb3VzZWxTdHlsZXMudGV4dE92ZXJsYXkpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcImNhcHRpb25cIiB9LCBpdGVtLmRlc2NyaXB0aW9uKSkpKSk7IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFsxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNhcmQsIHsga2V5OiBpLCBzeDogX19hc3NpZ24oeyBoZWlnaHQ6IGRpbXMuaGVpZ2h0IH0sIFByb2plY3RDYXJvdXNlbF8xLmNhcm91c2VsU3R5bGVzLmNhcmQpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQm94XzEuZGVmYXVsdCwgeyBzeDogX19hc3NpZ24oeyB3aWR0aDogZGltcy53aWR0aCB9LCBQcm9qZWN0Q2Fyb3VzZWxfMS5jYXJvdXNlbFN0eWxlcy5vdXRlckJveCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUGhvdG9MaWJyYXJ5VHdvVG9uZV8xLmRlZmF1bHQsIHsgc3g6IHsgd2lkdGg6IGRpbXMud2lkdGgsIGhlaWdodDogZGltcy5oZWlnaHQgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQm94XzEuZGVmYXVsdCwgeyBzeDogX19hc3NpZ24oe30sIFByb2plY3RDYXJvdXNlbF8xLmNhcm91c2VsU3R5bGVzLnRleHRPdmVybGF5KSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsgdmFyaWFudDogXCJjYXB0aW9uXCIgfSwgXCJQaG90byB1bmF2YWlsYWJsZSBhdCB0aGUgbW9tZW50LlwiKSkpKSk7IH0pKSkpKSkpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIEZhZGVXcmFwcGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvc3R5bGVkL0ZhZGVXcmFwcGVyXCIpKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRmFkZVdyYXBwZXJfMS5kZWZhdWx0LCBudWxsLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiaDVcIiB9LCBcImxvYWRpbmcuLi5cIikpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGluZztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBTbGlkZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1NsaWRlXCIpKTtcbnZhciBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcbnZhciBTbGlkZVdyYXBwZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgc2xpZGVGcm9tUmVmID0gX2Euc2xpZGVGcm9tUmVmLCBkaXJlY3Rpb24gPSBfYS5kaXJlY3Rpb24sIGRlbGF5ID0gX2EuZGVsYXksIHRpbWVvdXQgPSBfYS50aW1lb3V0O1xuICAgIHZhciBfYiA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCItLXNsaWRlLWFuaW1hdGVkT25Mb2FkXCIpO1xuICAgIH0pLCBhbmltYXRlZE9uTG9hZCA9IF9iWzBdLCBzZXRBbmltYXRlZE9uTG9hZCA9IF9iWzFdO1xuICAgIHZhciBfYyA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSwgc2hvd0NvbnRlbnQgPSBfY1swXSwgc2V0U2hvd0NvbnRlbnQgPSBfY1sxXTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWFuaW1hdGVkT25Mb2FkKSB7XG4gICAgICAgICAgICB2YXIgdGltZXJfMSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNldFNob3dDb250ZW50KHRydWUpO1xuICAgICAgICAgICAgfSwgZGVsYXlcbiAgICAgICAgICAgICAgICA/IGNvbnN0YW50c18xLkFOSV9DT05TVC5XUkFQUEVSX09OTE9BRF9ERUxBWSArIGRlbGF5XG4gICAgICAgICAgICAgICAgOiBjb25zdGFudHNfMS5BTklfQ09OU1QuV1JBUFBFUl9PTkxPQURfREVMQVkpOyAvLyB3YWl0IHVudGlsIHBhZ2UgaXMgbG9hZGVkXG4gICAgICAgICAgICBzZXRBbmltYXRlZE9uTG9hZCh0cnVlKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiLS1zbGlkZS1hbmltYXRlZE9uTG9hZFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xlYXJUaW1lb3V0KHRpbWVyXzEpOyB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgICAgdmFyIHRpbWVyXzIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZXRTaG93Q29udGVudCh0cnVlKTtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlbGF5KTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGVhclRpbWVvdXQodGltZXJfMik7IH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRTaG93Q29udGVudCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2xpZGVfMS5kZWZhdWx0LCB7IGluOiBzaG93Q29udGVudCwgdGltZW91dDogdGltZW91dCA/IHRpbWVvdXQgOiBjb25zdGFudHNfMS5BTklfQ09OU1QuV1JBUFBFUl9TTElERV9XUkFQUEVSX0RFTEFZLCBjb250YWluZXI6IHNsaWRlRnJvbVJlZi5jdXJyZW50LCBkaXJlY3Rpb246IGRpcmVjdGlvbiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGNoaWxkcmVuKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNsaWRlV3JhcHBlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgc2Nyb2xsX2FyZWFfMSA9IHJlcXVpcmUoXCJAYmx1ci11aS9zY3JvbGwtYXJlYVwiKTtcbnZhciBTY3JvbGxhYmxlQ29udGFpbmVyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIHJlZiA9IF9hLnJlZiwgc3ggPSBfYS5zeCwgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNvbnRhaW5lciwgeyBzeDogc3gsIGNsYXNzTmFtZTogY2xhc3NOYW1lLCByZWY6IHJlZiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KHNjcm9sbF9hcmVhXzEuU2Nyb2xsQXJlYSwgeyBjbGFzc05hbWVzOiB7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbFNjcm9sbGJhcjogXCJoLTIuNVwiLFxuICAgICAgICAgICAgICAgIHJvb3Q6IFwidy02MCBoLTYwIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyOiBcInAtWzFweF1cIixcbiAgICAgICAgICAgICAgICB0aHVtYjogXCJiZy1uZXV0cmFsLTgwMCBkYXJrOmJnLW5ldXRyYWwtMTAwIHJvdW5kZWQtZnVsbCBvcGFjaXR5LTMwIGhvdmVyOm9wYWNpdHktNDAgdHJhbnNpdGlvbi1vcGFjaXR5XCIsXG4gICAgICAgICAgICAgICAgdmVydGljYWxTY3JvbGxiYXI6IFwidy0yLjVcIixcbiAgICAgICAgICAgIH0sIGRpcjogXCJsdHJcIiwgb3JpZW50YXRpb246IFwidmVydGljYWxcIiwgc2Nyb2xsSGlkZURlbGF5OiA2MDAsIHNoYWRvd1NpemU6IDUwLCB0eXBlOiBcImFsd2F5c1wiLCBzdHlsZTogeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSB9LCBjaGlsZHJlbikpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBTY3JvbGxhYmxlQ29udGFpbmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGNsaWVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1kb20vY2xpZW50XCIpKTtcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbnZhciBzdHlsZXNfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgQXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9BcHBcIikpO1xudmFyIHRoZW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbXVpL3RoZW1lXCIpKTtcbnJlcXVpcmUoXCIuL3N0eWxlcy9iYXNlLnNjc3NcIik7XG52YXIgcm9vdCA9IGNsaWVudF8xLmRlZmF1bHQuY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xucm9vdC5yZW5kZXIocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LlN0cmljdE1vZGUsIG51bGwsXG4gICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLkJyb3dzZXJSb3V0ZXIsIHsgYmFzZW5hbWU6IFwiL1wiIH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHN0eWxlc18xLlRoZW1lUHJvdmlkZXIsIHsgdGhlbWU6IHRoZW1lXzEuZGVmYXVsdCwgZGVmYXVsdE1vZGU6IFwibGlnaHRcIiwgbm9Tc3I6IHRydWUgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQ3NzQmFzZWxpbmUsIG51bGwpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQXBwXzEuZGVmYXVsdCwgbnVsbCkpKSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbXVpQ29sb3JTY2hlbWVzID0ge1xuICAgIGNvbG9yU2NoZW1lczoge1xuICAgICAgICBsaWdodDoge1xuICAgICAgICAgICAgcGFsZXR0ZToge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogXCIjZmZmM2RlXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhcGVyOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogXCIjMTQ3RjgyNTlcIixcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsTmF2OiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIG1haW46IFwiIzUzOTlkYVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250cmFzdFRleHQ6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgICAgICAgICBtYWluOiBcIiNhYTUxZjczRlwiLFxuICAgICAgICAgICAgICAgICAgICBjb250cmFzdFRleHQ6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeTogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBkYXJrOiB7XG4gICAgICAgICAgICBwYWxldHRlOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBcIiMzMDM4M2JmZlwiLFxuICAgICAgICAgICAgICAgICAgICBwYXBlcjogXCIjMWQyMDI1XCIsXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogXCIjMTQ3RjgyNTlcIixcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsTmF2OiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIG1haW46IFwiIzUzZDhkYWZmXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyYXN0VGV4dDogXCIjZmZmM2RlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbjogXCIjOWQyZGZmM2ZcIixcbiAgICAgICAgICAgICAgICAgICAgY29udHJhc3RUZXh0OiBcIiNmZmYzZGVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeTogXCIjZmZmM2RlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBtdWlDb2xvclNjaGVtZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1cmxfZ2VuXzEgPSByZXF1aXJlKFwiQGNsb3VkaW5hcnkvdXJsLWdlblwiKTtcbnZhciBjbGRJbnN0YW5jZSA9IG51bGw7XG5mdW5jdGlvbiBnZXRDbG91ZGluYXJ5SW5zdGFuY2UoKSB7XG4gICAgaWYgKCFjbGRJbnN0YW5jZSkge1xuICAgICAgICBjbGRJbnN0YW5jZSA9IG5ldyB1cmxfZ2VuXzEuQ2xvdWRpbmFyeSh7XG4gICAgICAgICAgICBjbG91ZDoge1xuICAgICAgICAgICAgICAgIGNsb3VkTmFtZTogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9DTE9VRF9OQU1FLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybDogeyBzZWN1cmU6IHRydWUgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjbGRJbnN0YW5jZTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGdldENsb3VkaW5hcnlJbnN0YW5jZSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpO1xudmFyIExvYWRpbmcgPSAoMCwgcmVhY3RfMS5sYXp5KShmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcGFnZXMvTG9hZGluZ1wiKSk7IH0pOyB9KTtcbnZhciBEZWZhdWx0ID0gKDAsIHJlYWN0XzEubGF6eSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL3BhZ2VzL0RlZmF1bHRcIikpOyB9KTsgfSk7XG52YXIgRG9lc05vdEV4aXN0ID0gKDAsIHJlYWN0XzEubGF6eSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL3BhZ2VzL0RvZXNOb3RFeGlzdFwiKSk7IH0pOyB9KTtcbnZhciBDdXN0b21PcHRpb25zRGlhbCA9ICgwLCByZWFjdF8xLmxhenkpKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL0N1c3RvbU9wdGlvbnNEaWFsXCIpKTsgfSk7IH0pO1xudmFyIEdsb2JhbE5hdiA9ICgwLCByZWFjdF8xLmxhenkpKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL0dsb2JhbE5hdlwiKSk7IH0pOyB9KTtcbnZhciBMYW5kaW5nID0gKDAsIHJlYWN0XzEubGF6eSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL3BhZ2VzL0xhbmRpbmdcIikpOyB9KTsgfSk7XG52YXIgUHJvamVjdHMgPSAoMCwgcmVhY3RfMS5sYXp5KShmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcGFnZXMvUHJvamVjdHNcIikpOyB9KTsgfSk7XG52YXIgU2VsZWN0aW9uID0gKDAsIHJlYWN0XzEubGF6eSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL3BhZ2VzL3Byb2plY3RzL1NlbGVjdGlvblwiKSk7IH0pOyB9KTtcbnZhciBBY2FkZW1pYyA9ICgwLCByZWFjdF8xLmxhenkpKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9wYWdlcy9wcm9qZWN0cy9BY2FkZW1pY1wiKSk7IH0pOyB9KTtcbnZhciBQZXJzb25hbCA9ICgwLCByZWFjdF8xLmxhenkpKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9wYWdlcy9wcm9qZWN0cy9QZXJzb25hbFwiKSk7IH0pOyB9KTtcbnZhciBBYm91dE1lID0gKDAsIHJlYWN0XzEubGF6eSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL3BhZ2VzL0Fib3V0XCIpKTsgfSk7IH0pO1xudmFyIENvbnRhY3QgPSAoMCwgcmVhY3RfMS5sYXp5KShmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcGFnZXMvQ29udGFjdFwiKSk7IH0pOyB9KTtcbnZhciBQcm9qZWN0TW9kYWxDYXJvdXNlbCA9ICgwLCByZWFjdF8xLmxhenkpKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL1Byb2plY3RNb2RhbENhcm91c2VsXCIpKTsgfSk7IH0pO1xudmFyIHByb2plY3RfbGlzdF8xID0gcmVxdWlyZShcIi4uL2NvbnRlbnQvcHJvamVjdHMvcHJvamVjdC1saXN0XCIpO1xudmFyIEFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgcmVhY3Rfcm91dGVyX2RvbV8xLnVzZUxvY2F0aW9uKSgpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgdmFyIGJhY2tncm91bmQgPSBsb2NhdGlvbi5zdGF0ZSAmJiBsb2NhdGlvbi5zdGF0ZS5iYWNrZ3JvdW5kO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBjbGVhbiB1cCBvbiB1bm1vdW50XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiLS1ncm93LWFuaW1hdGVkT25Mb2FkXCIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIi0tc2xpZGUtYW5pbWF0ZWRPbkxvYWRcIik7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Cb3gsIHsgY2xhc3NOYW1lOiBcIkFwcFwiIH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEN1c3RvbU9wdGlvbnNEaWFsLCBudWxsKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5TdXNwZW5zZSwgeyBmYWxsYmFjazogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywgbnVsbCkgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEdsb2JhbE5hdiwgbnVsbCksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJveCwgeyBjbGFzc05hbWU6IGxvY2F0aW9uLnBhdGhuYW1lID09IFwiL1wiID8gXCJDb250YWluZXJcIiA6IFwiQ29udGFpbmVyIENvbnRhaW5lci0tb3BlblwiIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlcywgeyBsb2NhdGlvbjogYmFja2dyb3VuZCB8fCBsb2NhdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIHsgcGF0aDogXCJcIiwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTGFuZGluZywgbnVsbCkgfSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBwYXRoOiBcImFib3V0XCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFib3V0TWUsIG51bGwpIH0pLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIHsgcGF0aDogXCJwcm9qZWN0c1wiLCBlbGVtZW50OiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcm9qZWN0cywgbnVsbCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBpbmRleDogdHJ1ZSwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0aW9uLCBudWxsKSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBwYXRoOiBcInBlcnNvbmFsXCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBlcnNvbmFsLCBudWxsKSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBwYXRoOiBcInBlcnNvbmFsLypcIiwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLk5hdmlnYXRlLCB7IHRvOiBcIi9wcm9qZWN0cy9wZXJzb25hbFwiLCByZXBsYWNlOiB0cnVlIH0pIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlLCB7IHBhdGg6IFwiYWNhZGVtaWNcIiwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQWNhZGVtaWMsIG51bGwpIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlLCB7IHBhdGg6IFwiYWNhZGVtaWMvKlwiLCBlbGVtZW50OiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuTmF2aWdhdGUsIHsgdG86IFwiL3Byb2plY3RzL2FjYWRlbWljXCIsIHJlcGxhY2U6IHRydWUgfSkgfSkpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIHsgcGF0aDogXCJjb250YWN0XCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbnRhY3QsIG51bGwpIH0pLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIHsgcGF0aDogXCJkZWZhdWx0XCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERlZmF1bHQsIG51bGwpIH0pLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIHsgcGF0aDogXCIqXCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERvZXNOb3RFeGlzdCwgbnVsbCkgfSkpLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgJiYgKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZXMsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RfbGlzdF8xLlByb2plY3RMaXN0LnBlcnNvbmFsLm1hcChmdW5jdGlvbiAocHJvaiwgaSkgeyByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBrZXk6IGksIHBhdGg6IFwicHJvamVjdHMvcGVyc29uYWwvXCIuY29uY2F0KHByb2ouYWJiciksIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFByb2plY3RNb2RhbENhcm91c2VsLCB7IHByb2o6IHByb2ogfSkgfSkpOyB9KSxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdF9saXN0XzEuUHJvamVjdExpc3QuYWNhZGVtaWMubWFwKGZ1bmN0aW9uIChwcm9qLCBpKSB7IHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlLCB7IGtleTogaSwgcGF0aDogXCJwcm9qZWN0cy9hY2FkZW1pYy9cIi5jb25jYXQocHJvai5hYmJyKSwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHJvamVjdE1vZGFsQ2Fyb3VzZWwsIHsgcHJvajogcHJvaiB9KSB9KSk7IH0pKSkpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkL2NvbnN0YW50c1wiKTtcbnZhciBtdWlEcmF3ZXIgPSB7XG4gICAgTXVpRHJhd2VyOiB7XG4gICAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgICAgICBwYXBlckFuY2hvclRvcDoge1xuICAgICAgICAgICAgICAgIHRvcDogY29uc3RhbnRzXzEuQU5JX0NPTlNULkdMT0JBTF9OQVZfSEVJR0hUICsgXCJweFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcGVyOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNjAwcHhcIixcbiAgICAgICAgICAgICAgICBcIkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweClcIjoge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBtdWlEcmF3ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgICAgICAgICByZXR1cm4gYXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvd25LZXlzKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICAgICAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgRmFkZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0ZhZGVcIikpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBGYWRlV3JhcHBlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBkZWxheSA9IF9hLmRlbGF5LCB0aW1lb3V0ID0gX2EudGltZW91dDtcbiAgICB2YXIgX2IgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksIHNob3dDb250ZW50ID0gX2JbMF0sIHNldFNob3dDb250ZW50ID0gX2JbMV07XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRTaG93Q29udGVudCh0cnVlKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xlYXJUaW1lb3V0KHRpbWVyKTsgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZhZGVfMS5kZWZhdWx0LCB7IGluOiBkZWxheSA/IHNob3dDb250ZW50IDogdHJ1ZSwgdGltZW91dDogdGltZW91dCA/IHRpbWVvdXQgOiBjb25zdGFudHNfMS5BTklfQ09OU1QuV1JBUFBFUl9GQURFX1dSQVBQRVJfREVMQVksIGVhc2luZzogeyBlbnRlcjogbWF0ZXJpYWxfMS5lYXNpbmcuc2hhcnAsIGV4aXQ6IG1hdGVyaWFsXzEuZWFzaW5nLmVhc2VPdXQgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGNoaWxkcmVuKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEZhZGVXcmFwcGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlByb2plY3RDYXRlZ29yaWVzID0gZXhwb3J0cy5Qcm9qZWN0TGlzdCA9IHZvaWQgMDtcbnZhciBnZ2pfMjAyMF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BlcnNvbmFsL2dnai0yMDIwXCIpKTtcbnZhciBzcG9jaGlfdjBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wZXJzb25hbC9zcG9jaGktdjBcIikpO1xudmFyIHdlYnNpdGVfdjFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wZXJzb25hbC93ZWJzaXRlLXYxXCIpKTtcbnZhciBmb29kcGlja18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BlcnNvbmFsL2Zvb2RwaWNrXCIpKTtcbnZhciBmYWxsaW5nX2Jsb2Nrc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BlcnNvbmFsL2ZhbGxpbmctYmxvY2tzXCIpKTtcbnZhciBQZXJzb25hbFByb2plY3RzID0gW1xuICAgIGdnal8yMDIwXzEuZGVmYXVsdCxcbiAgICBzcG9jaGlfdjBfMS5kZWZhdWx0LFxuICAgIHdlYnNpdGVfdjFfMS5kZWZhdWx0LFxuICAgIGZvb2RwaWNrXzEuZGVmYXVsdCxcbiAgICBmYWxsaW5nX2Jsb2Nrc18xLmRlZmF1bHQsXG5dO1xudmFyIGJvYmJ5c19icmVha291dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FjYWRlbWljL2JvYmJ5cy1icmVha291dFwiKSk7XG52YXIgcGxheWVyX3BlcmZvcm1hbmNlX3Byb2plY3Rpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9hY2FkZW1pYy9wbGF5ZXItcGVyZm9ybWFuY2UtcHJvamVjdGlvblwiKSk7XG52YXIgbW90aW9uX2FydF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FjYWRlbWljL21vdGlvbi1hcnRcIikpO1xudmFyIGtpbmdkb21fb2ZfaGVsaW9zXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYWNhZGVtaWMva2luZ2RvbS1vZi1oZWxpb3NcIikpO1xudmFyIGFudGxpb25fdG93ZXJfZGVmZW5zZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FjYWRlbWljL2FudGxpb24tdG93ZXItZGVmZW5zZVwiKSk7XG52YXIgQWNhZGVtaWNQcm9qZWN0cyA9IFtcbiAgICBib2JieXNfYnJlYWtvdXRfMS5kZWZhdWx0LFxuICAgIHBsYXllcl9wZXJmb3JtYW5jZV9wcm9qZWN0aW9uXzEuZGVmYXVsdCxcbiAgICBtb3Rpb25fYXJ0XzEuZGVmYXVsdCxcbiAgICBraW5nZG9tX29mX2hlbGlvc18xLmRlZmF1bHQsXG4gICAgYW50bGlvbl90b3dlcl9kZWZlbnNlXzEuZGVmYXVsdCxcbl07XG52YXIgUHJvamVjdENhdGVnb3JpZXM7XG4oZnVuY3Rpb24gKFByb2plY3RDYXRlZ29yaWVzKSB7XG4gICAgUHJvamVjdENhdGVnb3JpZXNbXCJQRVJTT05BTFwiXSA9IFwicGVyc29uYWxcIjtcbiAgICBQcm9qZWN0Q2F0ZWdvcmllc1tcIkFDQURFTUlDXCJdID0gXCJhY2FkZW1pY1wiO1xufSkoUHJvamVjdENhdGVnb3JpZXMgfHwgKGV4cG9ydHMuUHJvamVjdENhdGVnb3JpZXMgPSBQcm9qZWN0Q2F0ZWdvcmllcyA9IHt9KSk7XG52YXIgUHJvamVjdExpc3QgPSB7XG4gICAgcGVyc29uYWw6IFBlcnNvbmFsUHJvamVjdHMsXG4gICAgYWNhZGVtaWM6IEFjYWRlbWljUHJvamVjdHMsXG59O1xuZXhwb3J0cy5Qcm9qZWN0TGlzdCA9IFByb2plY3RMaXN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFOSV9DT05TVCA9IHZvaWQgMDtcbnZhciBHRU5FUklDX0NBUkRfREVMQVkgPSA0MDA7XG52YXIgR0VORVJJQ19XUkFQUEVSX0RFTEFZID0gNzAwO1xuZXhwb3J0cy5BTklfQ09OU1QgPSB7XG4gICAgLy8gR0VORVJJQ1xuICAgIFdSQVBQRVJfT05MT0FEX0RFTEFZOiA1MDAsXG4gICAgV1JBUFBFUl9HUk9XX1dSQVBQRVJfREVMQVk6IEdFTkVSSUNfV1JBUFBFUl9ERUxBWSxcbiAgICBXUkFQUEVSX1NMSURFX1dSQVBQRVJfREVMQVk6IEdFTkVSSUNfV1JBUFBFUl9ERUxBWSxcbiAgICBXUkFQUEVSX0ZBREVfV1JBUFBFUl9ERUxBWTogODAwLFxuICAgIC8vIEdMT0JBTCBOQVZcbiAgICBHTE9CQUxfTkFWX0xBTkRJTkdfREVMQVk6IDEwMDAsXG4gICAgR0xPQkFMX05BVl9ERUxBWTogNTAwLFxuICAgIEdMT0JBTF9OQVZfSEVJR0hUOiA1MCxcbiAgICAvLyBBQk9VVFxuICAgIEFCT1VUX0NBUkRfREVMQVk6IEdFTkVSSUNfQ0FSRF9ERUxBWSxcbiAgICAvLyBQUk9KRUNUU1xuICAgIFBST0pfUk9XX0JSRUFLUE9JTlQ6IDE0MjQsIC8vID49IDE0MjRweCBmaXRzIDMgY2FyZHNcbiAgICBQUk9KX1NVQkhFQURJTkdfREVMQVk6IDMwMCwgLy8gc2FtZSBhcyBXUkFQUEVSX0ZBREVfV1JBUFBFUl9ERUxBWVxuICAgIFBST0pfQ0FSRFNfREVMQVk6IEdFTkVSSUNfQ0FSRF9ERUxBWSxcbiAgICBQUk9KX0NBUkRfV0lEVEg6IHsgeHM6IDQwMCwgbWQ6IDQ1MCwgbGc6IDYwMCB9LFxuICAgIC8vIENPTlRBQ1RcbiAgICBDT05UQUNUX0JBREdFX0RFTEFZOiBHRU5FUklDX0NBUkRfREVMQVksXG4gICAgQ09OVEFDVF9QT1JUUkFJVF9IRUFESU5HX0RFTEFZOiBHRU5FUklDX0NBUkRfREVMQVkgKiA2LFxuICAgIENPTlRBQ1RfUE9SVFJBSVRfUElDX0RFTEFZOiBHRU5FUklDX0NBUkRfREVMQVkgKiA2LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgU2Nyb2xsYWJsZUNvbnRhaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL3N0eWxlZC9TY3JvbGxhYmxlQ29udGFpbmVyXCIpKTtcbnZhciBEZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTY3JvbGxhYmxlQ29udGFpbmVyXzEuZGVmYXVsdCwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImJvZHkxXCIgfSwgXCJtdWNoIHdvdywgc3VjaCBlbXB0eVwiKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBEZWZhdWx0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbXVpVHlwb2dyYXBoeSA9IHtcbiAgICB0eXBvZ3JhcGh5OiB7XG4gICAgICAgIGZvbnRGYW1pbHk6IFtcIkluY29uc29sYXRhLCBTb3VyY2UgQ29kZSBQcm8sIEthcmxhXCJdLmpvaW4oXCIsXCIpLFxuICAgICAgICBoMzoge1xuICAgICAgICAgICAgZm9udEZhbWlseTogXCJTb3VyY2UgQ29kZSBQcm9cIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTUsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDIwLFxuICAgICAgICB9LFxuICAgICAgICBoNDoge1xuICAgICAgICAgICAgZm9udEZhbWlseTogXCJTb3VyY2UgQ29kZSBQcm9cIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgICAgIH0sXG4gICAgICAgIGg1OiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA1LFxuICAgICAgICB9LFxuICAgICAgICBzdWJ0aXRsZTE6IHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSW5jb25zb2xhdGFcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgfSxcbiAgICAgICAgc3VidGl0bGUyOiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkluY29uc29sYXRhXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHkxOiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkthcmxhXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHkyOiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkthcmxhXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGNhcHRpb246IHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiS2FybGFcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gdXNlZCBpbiBsYW5kaW5nIHBhZ2Ugb25seVxuICAgICAgICBoMToge1xuICAgICAgICAgICAgZm9udEZhbWlseTogXCJJbmNvbnNvbGF0YVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICB9LFxuICAgICAgICBoMjogdW5kZWZpbmVkLFxuICAgICAgICBoNjogdW5kZWZpbmVkLFxuICAgIH0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gbXVpVHlwb2dyYXBoeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGdnajIwMjAgPSB7XG4gICAgYWJicjogXCJpLXdhcy1uZXZlci1oZXJlXCIsXG4gICAgbmFtZTogXCJHR0o6IEkgV2FzIE5ldmVyIEhlcmVcIixcbiAgICBkYXRlOiBcIkphbiAyMDIwIC0gRmViIDIwMjBcIixcbiAgICB0YWdzOiBbXCJHR0otMjAyMFwiLCBcIlVuaXR5XCIsIFwiQyNcIiwgXCJTdHJhdGVneVwiLCBcIkdhbWVcIl0sXG4gICAgY2F0ZWdvcnk6IFwiMkQgU3RyYXRlZ3kgR2FtZVwiLFxuICAgIGxpbms6IHtcbiAgICAgICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vRmx1ZmZpc2F1cnVzL0dHSi0yMDIwXCIsXG4gICAgICAgIGhvc3Q6IFwiaHR0cDovL2JpdC5seS9SYXRUaGllZlwiLFxuICAgIH0sXG4gICAgZGV0YWlsOiB7XG4gICAgICAgIHNob3J0OiBcIk91ciB0ZWFtJ3MgdGFrZSBvbiB0aGUgR2xvYmFsIEdhbWUgSmFtIDIwMjAgdGhlbWU6IFJlcGFpci4gQSBzdHJhdGVneSBnYW1lIHdpdGggdW5pcXVlIGFuZCBlbWVyZ2VudCBtZWNoYW5pY3MuXCIsXG4gICAgICAgIGxvbmc6IFtdLFxuICAgIH0sXG4gICAgaW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJnZ2ovdGl0bGUtc2NyZWVuX3Y5enZ5alwiLFxuICAgICAgICAgICAgYWx0OiBcIkdHSi0yMDIwIEkgV2FzIE5ldmVyIEhlcmU6IFRpdGxlIFNjcmVlblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2FtZSdzIHRpdGxlIHNjcmVlbi5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImdnai90aGUtc3F1YWRfZmVzdXVtXCIsXG4gICAgICAgICAgICBhbHQ6IFwiR0dKLTIwMjAgSSBXYXMgTmV2ZXIgSGVyZTogVGVhbSBQaG90b1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIFNxdWFkISBGcm9tIGxlZnQgdG8gcmlnaHQ6IEFuZ3VzIEhvbiwgQWhtZWQgQWJ1enVyYWlxLCBBbnNvbiBDaHJpc3RvLCBKb3JkYW4gV2F0dGVyc29uLCBMaWx5IFphcmlmXCIsXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBnZ2oyMDIwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm11aVNwZWVkRGlhbEFjdGlvbiA9IGV4cG9ydHMubXVpU3BlZWREaWFsID0gdm9pZCAwO1xuZXhwb3J0cy5tdWlTcGVlZERpYWwgPSB7XG4gICAgTXVpU3BlZWREaWFsOiB7XG4gICAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLCAvLyBhbGlnbnMgYWN0aW9uc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhYjoge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBhY3R1YWwgaWNvbiBvbiB0aGUgc3BlZWQgZGlhbCBpdHNlbGZcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbmV4cG9ydHMubXVpU3BlZWREaWFsQWN0aW9uID0ge1xuICAgIE11aVNwZWVkRGlhbEFjdGlvbjoge1xuICAgICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICAgICAgLy8gZmFiIGNvbnRhaW5lciB0aGF0IHdyYXBzIGFjdGlvbiBjb250ZW50XG4gICAgICAgICAgICBmYWI6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCJ2YXIoLS1jdXN0b20tbXVpLXRoZW1lLXNoYXBlLWJvcmRlclJhZGl1cylcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJyaWdodFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXRpY1Rvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG11aUNzc0Jhc2VsaW5lID0ge1xuICAgIE11aUNzc0Jhc2VsaW5lOiB7XG4gICAgICAgIHN0eWxlT3ZlcnJpZGVzOiBcIlxcbiAgICAgICAgQGZvbnQtZmFjZSB7XFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnO1xcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgIGZvbnQtc3RyZXRjaDogMTAwJTtcXG4gICAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvaW5jb25zb2xhdGEvdjM3L1FsZGdOVGhMcVJ3SC1PSjFVSGpsS0VOVnprV0dWa0wzR1pRbUF3TFl4WVdJMnFmZG03THBwMkk3V1IzMmx3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICAgICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUwMDAwLTAwRkYsIFUwMTMxLCBVMDE1Mi0wMTUzLCBVMDJCQi0wMkJDLCBVMDJDNiwgVTAyREEsIFUwMkRDLCBVMDMwNCwgVTAzMDgsIFUwMzI5LCBVMjAwMC0yMDZGLCBVMjBBQywgVTIxMjIsIFUyMTkxLCBVMjE5MywgVTIyMTIsIFUyMjE1LCBVRkVGRiwgVUZGRkQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAZm9udC1mYWNlIHtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YSc7XFxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgZm9udC1zdHJldGNoOiAxMDAlO1xcbiAgICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvaW5jb25zb2xhdGEvdjM3L1FsZGROVGhMcVJ3SC1PSjFVSGpsS0VOVnprV0dWa0wzR1pRbUF3THl5YTE1LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICAgICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUwMDAwLTAwRkYsIFUwMTMxLCBVMDE1Mi0wMTUzLCBVMDJCQi0wMkJDLCBVMDJDNiwgVTAyREEsIFUwMkRDLCBVMDMwNCwgVTAzMDgsIFUwMzI5LCBVMjAwMC0yMDZGLCBVMjBBQywgVTIxMjIsIFUyMTkxLCBVMjE5MywgVTIyMTIsIFUyMjE1LCBVRkVGRiwgVUZGRkQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAZm9udC1mYWNlIHtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nO1xcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gICAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3NvdXJjZWNvZGVwcm8vdjMwL0hJX1NpWXNLSUx4UnBnM2hJUDZzSjdmTTdQcWxQZXZXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICAgICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUwMDAwLTAwRkYsIFUwMTMxLCBVMDE1Mi0wMTUzLCBVMDJCQi0wMkJDLCBVMDJDNiwgVTAyREEsIFUwMkRDLCBVMDMwNCwgVTAzMDgsIFUwMzI5LCBVMjAwMC0yMDZGLCBVMjBBQywgVTIxMjIsIFUyMTkxLCBVMjE5MywgVTIyMTIsIFUyMjE1LCBVRkVGRiwgVUZGRkQ7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgQGZvbnQtZmFjZSB7XFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnS2FybGEnO1xcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gICAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2thcmxhL3YzMi9xa0I5WHZZQzZ0ckFUNTVaQmkxdWVRVklqUVRELUpySUgyRzdueXRrSFJ5UThwNHdVamU2Ymcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG4gICAgICAgICAgdW5pY29kZS1yYW5nZTogVTAwMDAtMDBGRiwgVTAxMzEsIFUwMTUyLTAxNTMsIFUwMkJCLTAyQkMsIFUwMkM2LCBVMDJEQSwgVTAyREMsIFUwMzA0LCBVMDMwOCwgVTAzMjksIFUyMDAwLTIwNkYsIFUyMEFDLCBVMjEyMiwgVTIxOTEsIFUyMTkzLCBVMjIxMiwgVTIyMTUsIFVGRUZGLCBVRkZGRDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBmb250LWZhY2Uge1xcbiAgICAgICAgICBmb250LWZhbWlseTogJ0thcmxhJztcXG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mva2FybGEvdjMyL3FrQktYdllDNnRyQVQ3UlFOTksyRUc3U0l3UFdNTmxDVjNsSWI3TS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbiAgICAgICAgICB1bmljb2RlLXJhbmdlOiBVMDAwMC0wMEZGLCBVMDEzMSwgVTAxNTItMDE1MywgVTAyQkItMDJCQywgVTAyQzYsIFUwMkRBLCBVMDJEQywgVTAzMDQsIFUwMzA4LCBVMDMyOSwgVTIwMDAtMjA2RiwgVTIwQUMsIFUyMTIyLCBVMjE5MSwgVTIxOTMsIFUyMjEyLCBVMjIxNSwgVUZFRkYsIFVGRkZEO1xcbiAgICAgICAgfVxcbiAgICAgIFwiLFxuICAgIH0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gbXVpQ3NzQmFzZWxpbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBraW5nZG9tT2ZIZWxpb3MgPSB7XG4gICAgYWJicjogXCJraW5nZG9tLW9mLWhlbGlvc1wiLFxuICAgIG5hbWU6IFwiS2luZ2RvbSBvZiBIZWxpb3NcIixcbiAgICBkYXRlOiBcIk9jdCAyMDE4IC0gRGVjIDIwMThcIixcbiAgICB0YWdzOiBbXCJVbml0eVwiLCBcIkMjXCIsIFwiR2FtZSBEZXZcIiwgXCJHYW1lIERlc2lnblwiLCBcIkdhbWVcIl0sXG4gICAgY2F0ZWdvcnk6IFwiMkQgU2lkZS1TY3JvbGxpbmcgUGxhdGZvcm1lciBHYW1lXCIsXG4gICAgbGluazoge1xuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9GbHVmZmlzYXVydXMva2luZ2RvbS1vZi1oZWxpb3NcIixcbiAgICAgICAgaG9zdDogXCJiaXQubHkvS29IZWxpb3NcIixcbiAgICB9LFxuICAgIGRldGFpbDoge1xuICAgICAgICBzaG9ydDogXCIyRCBzaWRlLXNjcm9sbGluZyBwbGF0Zm9ybWVyIFJQRyAtIHBsYXkgYXMgdHdvIHByb3RhZ29uaXN0cyB3aXRoIGRpc3RpbmN0IHNraWxsIHNldHMgdG8gcHJvZ3Jlc3MgdGhyb3VnaCB0aGUgZ2FtZS5cIixcbiAgICAgICAgbG9uZzogW10sXG4gICAgfSxcbiAgICBpbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImhlbGlvcy9tYWluLXNjcmVlbl9ldXRsbmhcIixcbiAgICAgICAgICAgIGFsdDogXCJIZWxpb3M6IE1haW4gU2NyZWVuXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTdGFydCBzY3JlZW4uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJoZWxpb3MvY2hhci14X3YyOG54bFwiLFxuICAgICAgICAgICAgYWx0OiBcIkhlbGlvczogUHJvdGFnb25pc3RcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk1haW4gcHJvdGFnb25pc3Qgd2l0aCBkaXN0aW5jdCBza2lsbCBzZXQuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJoZWxpb3MvY2hhci15X2F0eDVhYVwiLFxuICAgICAgICAgICAgYWx0OiBcIkhlbGlvczogUHJvdGFnb25pc3QncyB5b3VuZ2VyIGJyb3RoZXJcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlByb3RhZ29uaXN0J3MgeW91bmdlciBicm90aGVyIHdpdGggYSBkaWZmZXJlbnQgc2tpbGwgc2V0LlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiaGVsaW9zL3NjZW5lLWZsb3ctY2hhcnRfdmZtbmoxXCIsXG4gICAgICAgICAgICBhbHQ6IFwiSGVsaW9zOiBTY2VuZSBGbG93IENoYXJ0XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lJ3MgbWFpbiBzY2VuZSBmbG93IGNoYXJ0LlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiaGVsaW9zL3N0b3J5LW1hcF9kanJnYnhcIixcbiAgICAgICAgICAgIGFsdDogXCJIZWxpb3M6IFN0b3J5IG1hcCBvZiB0aGUgZ2FtZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2FtZSdzIHN0b3J5IG1hcCBhbmQgcHJvZ3Jlc3Npb24uXCIsXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBraW5nZG9tT2ZIZWxpb3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wdXRlTm9kZVN0eWxlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgbm9kZUNtcFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICB2YXIgbm9kZU1hcmdpbiA9IHtcbiAgICAgICAgd2lkdGg6IHBhcnNlSW50KG5vZGVDbXBTdHlsZS5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KG5vZGVDbXBTdHlsZS5tYXJnaW5SaWdodCksXG4gICAgICAgIGhlaWdodDogcGFyc2VJbnQobm9kZUNtcFN0eWxlLm1hcmdpblRvcCkgKyBwYXJzZUludChub2RlQ21wU3R5bGUubWFyZ2luQm90dG9tKSxcbiAgICB9O1xuICAgIHZhciBub2RlUGFkZGluZyA9IHtcbiAgICAgICAgd2lkdGg6IHBhcnNlSW50KG5vZGVDbXBTdHlsZS5wYWRkaW5nTGVmdCkgKyBwYXJzZUludChub2RlQ21wU3R5bGUucGFkZGluZ1JpZ2h0KSxcbiAgICAgICAgaGVpZ2h0OiBwYXJzZUludChub2RlQ21wU3R5bGUucGFkZGluZ1RvcCkgKyBwYXJzZUludChub2RlQ21wU3R5bGUucGFkZGluZ0JvdHRvbSksXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogbm9kZS5vZmZzZXRXaWR0aCAtIG5vZGVNYXJnaW4ud2lkdGggLSBub2RlUGFkZGluZy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBub2RlLm9mZnNldEhlaWdodCAtIG5vZGVNYXJnaW4uaGVpZ2h0IC0gbm9kZVBhZGRpbmcuaGVpZ2h0XG4gICAgfTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjb21wdXRlTm9kZVN0eWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBDYXJkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ2FyZFwiKSk7XG52YXIgQ2FyZENvbnRlbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiKSk7XG52YXIgVHlwb2dyYXBoeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIikpO1xudmFyIENhcmRNZWRpYV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NhcmRNZWRpYVwiKSk7XG52YXIgc3R5bGVzXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIik7XG52YXIgSWNvbkJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIikpO1xudmFyIEV4cGFuZE1vcmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9FeHBhbmRNb3JlXCIpKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgUHJvamVjdENhcm91c2VsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUHJvamVjdENhcm91c2VsXCIpKTtcbnZhciBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL3N0eWxlZC9jb25zdGFudHNcIik7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG52YXIgRXhwYW5kTW9yZSA9ICgwLCBzdHlsZXNfMS5zdHlsZWQpKGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBleHBhbmQgPSBwcm9wcy5leHBhbmQsIG90aGVyID0gX19yZXN0KHByb3BzLCBbXCJleHBhbmRcIl0pOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b25fMS5kZWZhdWx0LCBfX2Fzc2lnbih7fSwgb3RoZXIpKTtcbn0pKGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB0aGVtZSA9IF9hLnRoZW1lO1xuICAgIHJldHVybiAoe1xuICAgICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwidHJhbnNmb3JtXCIsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVzdCxcbiAgICAgICAgfSksXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvcHM6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXhwYW5kID0gX2EuZXhwYW5kO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWV4cGFuZDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMGRlZylcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wczogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleHBhbmQgPSBfYS5leHBhbmQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWV4cGFuZDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMTgwZGVnKVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0pO1xufSk7XG52YXIgUHJvamVjdEJsb2NrID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHByb2ogPSBfYS5wcm9qO1xuICAgIHZhciBfYiA9IHJlYWN0XzEuZGVmYXVsdC51c2VTdGF0ZShmYWxzZSksIGV4cGFuZGVkID0gX2JbMF0sIHNldEV4cGFuZGVkID0gX2JbMV07XG4gICAgLypcbiAgICAgKiBsb2NhdGlvbiBhcyBhIGtleSBoZXJlIGhlbHBzIHJlYWN0IHJlY29nbml6ZSB3aGljaCBpcyBwYXJlbnQgdnMgY2hpbGRcbiAgICAgKiB3aGVuIHBhdGggdXBkYXRlcywgdGhlIHN0YXRlIG9mIHRoZSBwYXJlbnQgaXMgcHJlc2VydmVkIHNpbmNlIFJlYWN0IGNhbiBrZWVwIHRyYWNrXG4gICAgICogb2Ygd2hpY2ggaXMgdGhlIHBhcmVudCB2aWEgaXQncyBsb2NhdGlvbi5wYXRobmFtZS5cbiAgICAgKiBpbiB0aGlzIGNhc2UsIGZ1bGxzY3JlZW4gbW9kYWwgY2Fyb3VzZWwgaXMgdGhlIGNoaWxkLCBmb3JjaW5nIHByb2plY3QgYmxvY2sgdG9cbiAgICAgKiByZXJlbmRlciBvciBwcmVzZXJ2ZSBpdHMgc3RhdGVcbiAgICAgKlxuICAgICAqIHNlYXJjaDogXCJyZWFjdCByZXJlbmRlciB3aXRoIGtleSBsb2NhdGlvblwiIG9yIFwicmVhY3QgcmVyZW5kZXIgcGFyZW50IHdpdGggY2hpbGQga2V5IGxvY2F0aW9uXCJcbiAgICAgKi9cbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgcmVhY3Rfcm91dGVyX2RvbV8xLnVzZUxvY2F0aW9uKSgpO1xuICAgIHZhciBjYXJkRGltcyA9IHtcbiAgICAgICAgd2lkdGg6IGNvbnN0YW50c18xLkFOSV9DT05TVC5QUk9KX0NBUkRfV0lEVEgsXG4gICAgfTtcbiAgICB2YXIgaGFuZGxlRXhwYW5kQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XG4gICAgfTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRfMS5kZWZhdWx0LCB7IHN4OiBfX2Fzc2lnbih7fSwgY2FyZERpbXMpIH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRNZWRpYV8xLmRlZmF1bHQsIHsgc3g6IHsgbWluSGVpZ2h0OiAyMDAgfSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHJvamVjdENhcm91c2VsXzEuZGVmYXVsdCwgeyBrZXk6IGxvY2F0aW9uLnBhdGhuYW1lLCBwcm9qOiBwcm9qLCB3aWR0aDogeyB3aWR0aDogY2FyZERpbXMud2lkdGggfSwgaGVpZ2h0OiA0MDAgfSkpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDYXJkQ29udGVudF8xLmRlZmF1bHQsIHsgc3g6IHsgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9IH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyBjb21wb25lbnQ6IFwiZGl2XCIsIHZhcmlhbnQ6IFwiaDVcIiB9LCBwcm9qLm5hbWUpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsgdmFyaWFudDogXCJzdWJ0aXRsZTFcIiwgY29tcG9uZW50OiBcImRpdlwiLCBzeDogeyBjb2xvcjogXCJ0ZXh0LnNlY29uZGFyeVwiIH0gfSwgcHJvai5jYXRlZ29yeSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkdyaWQsIHsgY29udGFpbmVyOiB0cnVlLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgc3BhY2luZzogMiwgcm93U3BhY2luZzogMCwgd2lkdGg6IFwiOTAlXCIgfSwgcHJvai50YWdzLm1hcChmdW5jdGlvbiAodGFnLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyBrZXk6IGksIHZhcmlhbnQ6IFwic3VidGl0bGUyXCIsIGNvbXBvbmVudDogXCJkaXZcIiwgc3g6IHsgY29sb3I6IFwidGV4dC5zZWNvbmRhcnlcIiB9IH0sIHRhZykpO1xuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5DYXJkQWN0aW9ucywgeyBkaXNhYmxlU3BhY2luZzogdHJ1ZSwgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChFeHBhbmRNb3JlLCB7IGV4cGFuZDogZXhwYW5kZWQsIG9uQ2xpY2s6IGhhbmRsZUV4cGFuZENsaWNrLCBcImFyaWEtZXhwYW5kZWRcIjogZXhwYW5kZWQsIFwiYXJpYS1sYWJlbFwiOiBcInNob3cgbW9yZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEV4cGFuZE1vcmVfMS5kZWZhdWx0LCBudWxsKSkpKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Db2xsYXBzZSwgeyBpbjogZXhwYW5kZWQsIHRpbWVvdXQ6IFwiYXV0b1wiLCB1bm1vdW50T25FeGl0OiB0cnVlIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDYXJkQ29udGVudF8xLmRlZmF1bHQsIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsgdmFyaWFudDogXCJib2R5MlwiIH0sIHByb2ouZGF0ZSksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsgdmFyaWFudDogXCJib2R5MVwiIH0sIHByb2ouZGV0YWlsLnNob3J0KSkpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gUHJvamVjdEJsb2NrO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQ3OTI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2ZsdWZmaXNhdXJ1c19naXRodWJfaW9cIl0gPSBzZWxmW1wid2VicGFja0NodW5rZmx1ZmZpc2F1cnVzX2dpdGh1Yl9pb1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgWzMzOF0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDUzOTAwKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9