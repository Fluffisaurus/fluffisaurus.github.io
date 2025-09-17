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
var DisplaySettingsTwoTone_1 = __importDefault(__webpack_require__(12434));
var react_toastify_1 = __webpack_require__(90701);
var ToggleThemeButtons_1 = __importDefault(__webpack_require__(44685));
var ToggleImageQualityButtons_1 = __importDefault(__webpack_require__(45242));
var ToggleOnboardingButtons_1 = __importDefault(__webpack_require__(91953));
function CustomOptionsDial() {
    var _a = (0, material_1.useColorScheme)(), mode = _a.mode, systemMode = _a.systemMode, setMode = _a.setMode;
    var _b = React.useState(function () {
        var val = localStorage.getItem("--speedDial-onboard");
        if (val) {
            return val;
        }
        else {
            return "enabled";
        }
    }), isOnboarding = _b[0], setIsOnboarding = _b[1];
    var actions = [
        {
            icon: (React.createElement(ToggleOnboardingButtons_1.default, { isOnboarding: isOnboarding, setIsOnboarding: setIsOnboarding })),
            name: "Onboarding",
        },
        { icon: React.createElement(ToggleImageQualityButtons_1.default, null), name: "Image Quality" },
        {
            icon: React.createElement(ToggleThemeButtons_1.default, { mode: mode, setMode: setMode }),
            name: "Theme Mode",
        },
    ];
    var theme = (0, material_1.useTheme)();
    var isMobile = (0, material_1.useMediaQuery)(theme.breakpoints.down("sm"));
    var toastOptions = {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
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
    };
    // Note: --speedDial-initialOnboard and --speedDial-onboard
    //       is not cleared after <App/> unmount, required for
    //       functionality.
    var _c = React.useState(function () {
        return !!localStorage.getItem("--speedDial-initialOnboard");
    }), initialLoad = _c[0], setInitialLoad = _c[1];
    React.useEffect(function () {
        if (!initialLoad) {
            // first load
            react_toastify_1.toast.info("Customize your experience", toastOptions);
            setInitialLoad(true);
            localStorage.setItem("--speedDial-initialOnboard", "true");
        }
        else {
            if (isOnboarding == "enabled") {
                react_toastify_1.toast.info("Customize your experience", toastOptions);
            }
        }
        console.log("toggled option: ".concat(isOnboarding));
        console.log("initial onboarding: ".concat(initialLoad));
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(react_toastify_1.ToastContainer, { position: "bottom-left", autoClose: 2000, limit: 1, hideProgressBar: false, newestOnTop: false, closeOnClick: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, theme: mode == "system" ? systemMode : mode, transition: react_toastify_1.Slide }),
        React.createElement(material_1.Box, { sx: {
                position: "absolute",
                bottom: 0,
                right: 0,
                height: 320,
                transform: "translateZ(0px)",
                flexGrow: 1,
                zIndex: 999,
            } },
            React.createElement(material_1.SpeedDial, { ariaLabel: "website options dial for theme mode and image quality", sx: { position: "absolute", bottom: 16, right: 16 }, icon: React.createElement(material_1.SpeedDialIcon, { icon: React.createElement(DisplaySettingsTwoTone_1.default, null), openIcon: React.createElement(DisplaySettingsTwoTone_1.default, null) }) }, actions.map(function (action) { return (React.createElement(material_1.SpeedDialAction, { key: action.name, icon: action.icon, slotProps: {
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
                alignItems: "flex-end", // fab itself
            },
            actions: {
                alignItems: "flex-end", /// actions
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
    MuiCssBaseline: {},
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

/***/ 91953:
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
var UnpublishedTwoTone_1 = __importDefault(__webpack_require__(17338));
var CheckCircleTwoTone_1 = __importDefault(__webpack_require__(65667));
var react_toastify_1 = __webpack_require__(90701);
var ToggleOnboardingButtons = function (_a) {
    var isOnboarding = _a.isOnboarding, setIsOnboarding = _a.setIsOnboarding;
    var handleToggleOnboarding = function (event, newIsOnboarding) {
        if (newIsOnboarding) {
            setIsOnboarding(newIsOnboarding);
            localStorage.setItem("--speedDial-onboard", newIsOnboarding);
            react_toastify_1.toast.success("Onboarding: ".concat(newIsOnboarding));
        }
        else {
            setIsOnboarding("enabled");
            localStorage.setItem("--speedDial-onboard", "enabled");
            react_toastify_1.toast.success("Onboarding: default (enabled)");
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.ToggleButtonGroup, { value: isOnboarding, exclusive: true, onChange: handleToggleOnboarding, "aria-label": "onboarding toggle" },
            React.createElement(material_1.ToggleButton, { value: "disabled", "aria-label": "disable onboarding" },
                React.createElement(UnpublishedTwoTone_1.default, null)),
            React.createElement(material_1.ToggleButton, { value: "enabled", "aria-label": "enable onboarding" },
                React.createElement(CheckCircleTwoTone_1.default, null)))));
};
exports["default"] = ToggleOnboardingButtons;


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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [167], () => (__webpack_require__(53900)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL211aS9jb21wb25lbnRzL211aU1lbnVJdGVtLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvR2xvYmFsTmF2LnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL3BhZ2VzL3Byb2plY3RzL1BlcnNvbmFsLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvTmF2TGlua3MudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29udGVudC9wcm9qZWN0cy9hY2FkZW1pYy9hbnRsaW9uLXRvd2VyLWRlZmVuc2UudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9DdXN0b21PcHRpb25zRGlhbC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9tdWkvY29tcG9uZW50cy9tdWlCdXR0b24udHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29udGVudC9wcm9qZWN0cy9hY2FkZW1pYy9tb3Rpb24tYXJ0LnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdENhcm91c2VsLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbnRlbnQvcHJvamVjdHMvcGVyc29uYWwvZm9vZHBpY2sudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvbXVpL3RoZW1lLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL3BhZ2VzL3Byb2plY3RzL1NlbGVjdGlvbi50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9wYWdlcy9BYm91dC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9wYWdlcy9wcm9qZWN0cy9BY2FkZW1pYy50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRCbG9jay50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9tdWkvY29tcG9uZW50cy9tdWlDb250YWluZXIudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL2xhbmRpbmcuc2Nzcz9iYjRmIiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29udGVudC9wcm9qZWN0cy9hY2FkZW1pYy9wbGF5ZXItcGVyZm9ybWFuY2UtcHJvamVjdGlvbi50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9wYWdlcy9Eb2VzTm90RXhpc3QudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29udGVudC9wcm9qZWN0cy9wZXJzb25hbC9mYWxsaW5nLWJsb2Nrcy50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9wYWdlcy9Qcm9qZWN0cy50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb250ZW50L3Byb2plY3RzL3BlcnNvbmFsL3Nwb2NoaS12MC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9tdWkvY29tcG9uZW50cy9tdWlMaXN0LnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbnRlbnQvcHJvamVjdHMvYWNhZGVtaWMvYm9iYnlzLWJyZWFrb3V0LnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL3BhZ2VzL0NvbnRhY3QudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0U2VsZWN0aW9uQmxvY2sudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9Ub2dnbGVUaGVtZUJ1dHRvbnMudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9Ub2dnbGVJbWFnZVF1YWxpdHlCdXR0b25zLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL3BhZ2VzL0xhbmRpbmcudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29udGVudC9hYm91dC1tZS50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb250ZW50L3Byb2plY3RzL3BlcnNvbmFsL3dlYnNpdGUtdjEudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0TW9kYWxDYXJvdXNlbC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9wYWdlcy9Mb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVkL1NsaWRlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL3N0eWxlZC9TY3JvbGxhYmxlQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL211aS9tdWlDb2xvclNjaGVtZXMudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9DbG91ZGluYXJ5LnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvQXBwLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL211aS9jb21wb25lbnRzL211aURyYXdlci50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL3N0eWxlZC9GYWRlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvZ2xvYmFsLW5hdi5zY3NzP2FjNGQiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb250ZW50L3Byb2plY3RzL3Byb2plY3QtbGlzdC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL3N0eWxlZC9jb25zdGFudHMudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvcGFnZXMvRGVmYXVsdC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvcHJvamVjdHMuc2Nzcz9mYjkwIiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvbXVpL211aVR5cG9ncmFwaHkudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29udGVudC9wcm9qZWN0cy9wZXJzb25hbC9nZ2otMjAyMC50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy9tdWkvY29tcG9uZW50cy9tdWlTcGVlZERpYWwudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvbXVpL2NvbXBvbmVudHMvbXVpQ3NzQmFzZWxpbmUudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29udGVudC9wcm9qZWN0cy9hY2FkZW1pYy9raW5nZG9tLW9mLWhlbGlvcy50c3giLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby8uL3NyYy91dGlscy9jb21wdXRlTm9kZVN0eWxlLnRzeCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvVG9nZ2xlT25ib2FyZGluZ0J1dHRvbnMudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0QmxvY2sudHN4Iiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL2Jhc2Uuc2Nzcz81ZjUzIiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mbHVmZmlzYXVydXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZmx1ZmZpc2F1cnVzLmdpdGh1Yi5pby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2ZsdWZmaXNhdXJ1cy5naXRodWIuaW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG11aU1lbnVJdGVtID0ge1xuICAgIE11aU1lbnVJdGVtOiB7XG4gICAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gbXVpTWVudUl0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpO1xudmFyIGhvb2tzXzEgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWktcG9wdXAtc3RhdGUvaG9va3NcIik7XG52YXIgTWVudVR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9NZW51VHdvVG9uZVwiKSk7XG52YXIgTWVudU9wZW5Ud29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudU9wZW5Ud29Ub25lXCIpKTtcbnZhciBTdWJkaXJlY3RvcnlBcnJvd1JpZ2h0VHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL1N1YmRpcmVjdG9yeUFycm93UmlnaHRUd29Ub25lXCIpKTtcbnZhciBjb21wdXRlTm9kZVN0eWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3V0aWxzL2NvbXB1dGVOb2RlU3R5bGVcIikpO1xudmFyIG11aUJ1dHRvbl8xID0gcmVxdWlyZShcIi4uL211aS9jb21wb25lbnRzL211aUJ1dHRvblwiKTtcbnJlcXVpcmUoXCIuLi9zdHlsZXMvZ2xvYmFsLW5hdi5zY3NzXCIpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vc3R5bGVkL2NvbnN0YW50c1wiKTtcbnZhciByZWFjdF90eXBlX2FuaW1hdGlvbl8xID0gcmVxdWlyZShcInJlYWN0LXR5cGUtYW5pbWF0aW9uXCIpO1xudmFyIFN0eWxlZEJveCA9ICgwLCBtYXRlcmlhbF8xLnN0eWxlZCkoXCJkaXZcIikoZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRoZW1lID0gX2EudGhlbWU7XG4gICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS52YXJzLnBhbGV0dGUuYmFja2dyb3VuZC5nbG9iYWxOYXYsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjNweFwiLFxuICAgICAgICB9LFxuICAgICAgICB0aGVtZS5hcHBseVN0eWxlcyhcImRhcmtcIiwge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS52YXJzLnBhbGV0dGUuYmFja2dyb3VuZC5nbG9iYWxOYXYsXG4gICAgICAgIH0pLFxuICAgIF07XG59KTtcbnZhciBnbG9iYWxOYXZEcmF3ZXJCdXR0b25TdHlsZXMgPSB7XG4gICAgd2lkdGg6IFwibWluLWNvbnRlbnRcIixcbn07XG52YXIgR2xvYmFsTmF2ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCByZWFjdF9yb3V0ZXJfZG9tXzEudXNlTG9jYXRpb24pKCk7XG4gICAgdmFyIF9hID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFwiXCIpLCBjdXJyUGF0aCA9IF9hWzBdLCBzZXRDdXJyUGF0aCA9IF9hWzFdO1xuICAgIHZhciBfYiA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgpLCBzdWJQYXRoID0gX2JbMF0sIHNldFN1YlBhdGggPSBfYlsxXTtcbiAgICB2YXIgX2MgPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoKSwgaG92ZXJQYXRoID0gX2NbMF0sIHNldEhvdmVyUGF0aCA9IF9jWzFdO1xuICAgIHZhciBfZCA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShcImNkIFwiKSwgaG92ZXJUZXh0ID0gX2RbMF0sIHNldEhvdmVyVGV4dCA9IF9kWzFdO1xuICAgIHZhciBfZSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgpLCBmdWxsUGF0aCA9IF9lWzBdLCBzZXRGdWxsUGF0aCA9IF9lWzFdO1xuICAgIHZhciBfZiA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShmYWxzZSksIHNob3dDb250ZW50ID0gX2ZbMF0sIHNldFNob3dDb250ZW50ID0gX2ZbMV07XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9cIikge1xuICAgICAgICAgICAgdmFyIHRpbWVyXzEgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZXRTaG93Q29udGVudCh0cnVlKTtcbiAgICAgICAgICAgIH0sIGNvbnN0YW50c18xLkFOSV9DT05TVC5HTE9CQUxfTkFWX0xBTkRJTkdfREVMQVkpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsZWFyVGltZW91dCh0aW1lcl8xKTsgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFNob3dDb250ZW50KHRydWUpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHZhciBfZyA9IHJlYWN0XzEuZGVmYXVsdC51c2VTdGF0ZShmYWxzZSksIG9wZW5EcmF3ZXIgPSBfZ1swXSwgc2V0T3BlbkRyYXdlciA9IF9nWzFdO1xuICAgIHZhciB0b2dnbGVEcmF3ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRPcGVuRHJhd2VyKCFvcGVuRHJhd2VyKTsgfTtcbiAgICB2YXIgdGhlbWUgPSAoMCwgbWF0ZXJpYWxfMS51c2VUaGVtZSkoKTtcbiAgICB2YXIgaXNNb2JpbGUgPSAoMCwgbWF0ZXJpYWxfMS51c2VNZWRpYVF1ZXJ5KSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xuICAgIHZhciBwb3B1cFN0YXRlID0gKDAsIGhvb2tzXzEudXNlUG9wdXBTdGF0ZSkoe1xuICAgICAgICB2YXJpYW50OiBcInBvcG92ZXJcIixcbiAgICAgICAgcG9wdXBJZDogXCJnbG9iYWxOYXZQb3B1cFwiLFxuICAgIH0pO1xuICAgIHZhciBfaCA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSh7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgfSksIGRyYXdlclByb2plY3RCdXR0b25EaW1zID0gX2hbMF0sIHNldERyYXdlclByb2plY3RCdXR0b25EaW1zID0gX2hbMV07XG4gICAgdmFyIGRyYXdlclByb2plY3RCdXR0b25SZWYgPSAoMCwgcmVhY3RfMS51c2VDYWxsYmFjaykoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBub2RlRGltcyA9ICgwLCBjb21wdXRlTm9kZVN0eWxlXzEuZGVmYXVsdCkobm9kZSk7XG4gICAgICAgICAgICBzZXREcmF3ZXJQcm9qZWN0QnV0dG9uRGltcyh7XG4gICAgICAgICAgICAgICAgd2lkdGg6IG5vZGVEaW1zLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogbm9kZURpbXMuaGVpZ2h0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgdmFyIF9qID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICB9KSwgaG9tZUljb25CdXR0b25EaW1zID0gX2pbMF0sIHNldEhvbWVJY29uZUJ1dHRvbkRpbXMgPSBfalsxXTtcbiAgICB2YXIgaG9tZUljb25CdXR0b25SZWYgPSAoMCwgcmVhY3RfMS51c2VDYWxsYmFjaykoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBub2RlRGltcyA9ICgwLCBjb21wdXRlTm9kZVN0eWxlXzEuZGVmYXVsdCkobm9kZSk7XG4gICAgICAgICAgICBzZXRIb21lSWNvbmVCdXR0b25EaW1zKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogbm9kZURpbXMud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBub2RlRGltcy5oZWlnaHQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0T3BlbkRyYXdlcihmYWxzZSk7XG4gICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHtcbiAgICAgICAgICAgIHBvcHVwU3RhdGUuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDEpLmluY2x1ZGVzKFwiL1wiKSkge1xuICAgICAgICAgICAgc2V0Q3VyclBhdGgobG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDEpLnNwbGl0KFwiL1wiKVswXSk7XG4gICAgICAgICAgICBzZXRTdWJQYXRoKGxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cmluZygxKS5zcGxpdChcIi9cIilbMV0pO1xuICAgICAgICAgICAgc2V0SG92ZXJQYXRoKGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldEN1cnJQYXRoKGxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cmluZygxKSk7XG4gICAgICAgICAgICBzZXRTdWJQYXRoKG51bGwpO1xuICAgICAgICAgICAgc2V0SG92ZXJQYXRoKGxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cmluZygxKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0RnVsbFBhdGgobG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH0sIFtsb2NhdGlvbl0pO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaG92ZXJQYXRoID09IFwibWVudVwiKSB7XG4gICAgICAgICAgICBzZXRIb3ZlclRleHQoXCJscyAtUiB+XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaG92ZXJQYXRoKSB7XG4gICAgICAgICAgICBzZXRIb3ZlclRleHQoXCJcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1YlBhdGgpIHtcbiAgICAgICAgICAgIGlmIChob3ZlclBhdGggPT0gZnVsbFBhdGgpIHtcbiAgICAgICAgICAgICAgICBzZXRIb3ZlclRleHQoXCJjZCAuL1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZnVsbFBhdGggPT09IG51bGwgfHwgZnVsbFBhdGggPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZ1bGxQYXRoLmluY2x1ZGVzKGhvdmVyUGF0aCkpIHtcbiAgICAgICAgICAgICAgICBzZXRIb3ZlclRleHQoXCJjZCAuLi9cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhvdmVyUGF0aCAhPSBmdWxsUGF0aCkge1xuICAgICAgICAgICAgICAgIHNldEhvdmVyVGV4dChcImNkIFwiICsgaG92ZXJQYXRoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaG92ZXJQYXRoID09IGZ1bGxQYXRoKSB7XG4gICAgICAgICAgICBzZXRIb3ZlclRleHQoXCJjZCAuL1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldEhvdmVyVGV4dChcImNkIFwiICsgaG92ZXJQYXRoKTtcbiAgICAgICAgfVxuICAgIH0sIFtob3ZlclBhdGhdKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5TbGlkZSwgeyBpbjogc2hvd0NvbnRlbnQsIHRpbWVvdXQ6IGNvbnN0YW50c18xLkFOSV9DT05TVC5HTE9CQUxfTkFWX0RFTEFZIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTdHlsZWRCb3gsIHsgY2xhc3NOYW1lOiBcIkdsb2JhbC1uYXZcIiB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQm94LCB7IGNsYXNzTmFtZTogXCJHbG9iYWwtbmF2X19yb290XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5CdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogdG9nZ2xlRHJhd2VyIH0sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLCB7IG9uTW91c2VFbnRlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0SG92ZXJQYXRoKFwibWVudVwiKTsgfSB9KSwgb3BlbkRyYXdlciA/IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE1lbnVPcGVuVHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpIDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTWVudVR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQnV0dG9uLCBfX2Fzc2lnbih7IHJlZjogaG9tZUljb25CdXR0b25SZWYsIGNvbXBvbmVudDogcmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHRvOiBcIi9cIiB9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcywgeyBzeDogX19hc3NpZ24oe30sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLnN4KSwgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRIb3ZlclBhdGgoXCJ+XCIpOyB9IH0pLCBcIlxcdUQ4M0NcXHVERkUwXCIpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiTmF2LWxpbmtfX25vLWV2ZW50c1wiIH0sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLCB7IHN4OiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMuc3gpLCB7IGNvbG9yOiB0aGVtZS52YXJzLnBhbGV0dGUucHJpbWFyeS5kYXJrLCBwYWRkaW5nOiAwIH0pIH0pLCBcIjovXCIpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBjb21wb25lbnQ6IHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rLCB0bzogY3VyclBhdGggfSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMsIHsgc3g6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcy5zeCksIHsgcGFkZGluZzogMCB9KSwgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRIb3ZlclBhdGgoXCIvXCIgKyBjdXJyUGF0aCk7IH0gfSksIGN1cnJQYXRoID09IFwiXCIgPyBcIlwiIDogY3VyclBhdGggKyBcIi9cIiksXG4gICAgICAgICAgICAgICAgICAgIHN1YlBhdGggJiYgKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQnV0dG9uLCBfX2Fzc2lnbih7IGNvbXBvbmVudDogcmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHRvOiBjdXJyUGF0aCArIFwiL1wiICsgc3ViUGF0aCB9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcywgeyBzeDogX19hc3NpZ24oX19hc3NpZ24oe30sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLnN4KSwgeyBwYWRkaW5nOiAwIH0pLCBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0SG92ZXJQYXRoKFwiL1wiICsgY3VyclBhdGggKyBcIi9cIiArIHN1YlBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSwgc3ViUGF0aCArIFwiL1wiKSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQnV0dG9uLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJOYXYtbGlua19fbm8tZXZlbnRzXCIgfSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMsIHsgc3g6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcy5zeCksIHsgY29sb3I6IHRoZW1lLnZhcnMucGFsZXR0ZS5wcmltYXJ5LmRhcmssIHBhZGRpbmc6IDAgfSkgfSksIFwifiRcIiksXG4gICAgICAgICAgICAgICAgICAgICFpc01vYmlsZSAmJiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5CdXR0b24sIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIk5hdi1saW5rX19uby1ldmVudHNcIiB9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcywgeyBzeDogX19hc3NpZ24oX19hc3NpZ24oe30sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLnN4KSwgeyBjb2xvcjogdGhlbWUudmFycy5wYWxldHRlLnByaW1hcnkubGlnaHQsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIiwgcGFkZGluZzogXCIwIDVweCAwIDI1cHhcIiB9KSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3R5cGVfYW5pbWF0aW9uXzEuVHlwZUFuaW1hdGlvbiwgeyBrZXk6IGhvdmVyVGV4dCwgc2VxdWVuY2U6IFtob3ZlclRleHQsIDUwMF0sIHNwZWVkOiBob3ZlclRleHQubGVuZ3RoID4gOCA/IDUwIDogMSB9KSkpKSkpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlN3aXBlYWJsZURyYXdlciwgeyBhbmNob3I6IFwidG9wXCIsIG9wZW46IG9wZW5EcmF3ZXIsIG9uQ2xvc2U6IHRvZ2dsZURyYXdlciwgb25PcGVuOiB0b2dnbGVEcmF3ZXIsIGRpc2FibGVTd2lwZVRvT3BlbjogZmFsc2UsIGtlZXBNb3VudGVkOiB0cnVlIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTdHlsZWRCb3gsIHsgc3g6IHsgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9IH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkQm94LCB7IHN4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBweDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBiOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IGhvbWVJY29uQnV0dG9uRGltcy53aWR0aCArIFwicHhcIixcbiAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBjb21wb25lbnQ6IHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rLCB0bzogXCIvYWJvdXRcIiB9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcywgeyBzeDogX19hc3NpZ24oX19hc3NpZ24oe30sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLnN4KSwgZ2xvYmFsTmF2RHJhd2VyQnV0dG9uU3R5bGVzKSwgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRIb3ZlclBhdGgoXCIvYWJvdXRcIik7IH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTdWJkaXJlY3RvcnlBcnJvd1JpZ2h0VHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhYm91dFwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5CdXR0b24sIF9fYXNzaWduKHsgcmVmOiBkcmF3ZXJQcm9qZWN0QnV0dG9uUmVmLCBjbGFzc05hbWU6IFwiTmF2LWxpbmtfX25vLWV2ZW50c1wiIH0sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLCAoMCwgaG9va3NfMS5iaW5kVHJpZ2dlcikocG9wdXBTdGF0ZSksIHsgc3g6IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcy5zeCksIGdsb2JhbE5hdkRyYXdlckJ1dHRvblN0eWxlcyksIHsgY29sb3I6IHRoZW1lLnZhcnMucGFsZXR0ZS5wcmltYXJ5LmRhcmsgfSksIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0SG92ZXJQYXRoKFwiL3Byb2plY3RzXCIpOyB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ViZGlyZWN0b3J5QXJyb3dSaWdodFR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvamVjdHMvXCIpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBjb21wb25lbnQ6IHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rLCB0bzogXCIvcHJvamVjdHNcIiB9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcywgeyBzeDogX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oe30sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLnN4KSwgZ2xvYmFsTmF2RHJhd2VyQnV0dG9uU3R5bGVzKSwgeyBtYXJnaW5MZWZ0OiBkcmF3ZXJQcm9qZWN0QnV0dG9uRGltcy53aWR0aCArIFwicHhcIiB9KSwgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRIb3ZlclBhdGgoXCIvcHJvamVjdHNcIik7IH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTdWJkaXJlY3RvcnlBcnJvd1JpZ2h0VHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIuL1wiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5CdXR0b24sIF9fYXNzaWduKHsgY29tcG9uZW50OiByZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgdG86IFwiL3Byb2plY3RzL3BlcnNvbmFsXCIgfSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMsIHsgc3g6IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCBtdWlCdXR0b25fMS5nbG9iYWxOYXZCdXR0b25Qcm9wcy5zeCksIGdsb2JhbE5hdkRyYXdlckJ1dHRvblN0eWxlcyksIHsgbWFyZ2luTGVmdDogZHJhd2VyUHJvamVjdEJ1dHRvbkRpbXMud2lkdGggKyBcInB4XCIgfSksIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0SG92ZXJQYXRoKFwiL3Byb2plY3RzL3BlcnNvbmFsXCIpOyB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ViZGlyZWN0b3J5QXJyb3dSaWdodFR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyc29uYWxcIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQnV0dG9uLCBfX2Fzc2lnbih7IGNvbXBvbmVudDogcmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHRvOiBcIi9wcm9qZWN0cy9hY2FkZW1pY1wiIH0sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLCB7IHN4OiBfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMuc3gpLCBnbG9iYWxOYXZEcmF3ZXJCdXR0b25TdHlsZXMpLCB7IG1hcmdpbkxlZnQ6IGRyYXdlclByb2plY3RCdXR0b25EaW1zLndpZHRoICsgXCJweFwiIH0pLCBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldEhvdmVyUGF0aChcIi9wcm9qZWN0cy9hY2FkZW1pY1wiKTsgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN1YmRpcmVjdG9yeUFycm93UmlnaHRUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFjYWRlbWljXCIpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBjb21wb25lbnQ6IHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rLCB0bzogXCIvY29udGFjdFwiIH0sIG11aUJ1dHRvbl8xLmdsb2JhbE5hdkJ1dHRvblByb3BzLCB7IHN4OiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbXVpQnV0dG9uXzEuZ2xvYmFsTmF2QnV0dG9uUHJvcHMuc3gpLCBnbG9iYWxOYXZEcmF3ZXJCdXR0b25TdHlsZXMpLCBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldEhvdmVyUGF0aChcIi9jb250YWN0XCIpOyB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ViZGlyZWN0b3J5QXJyb3dSaWdodFR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGFjdFwiKSkpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdsb2JhbE5hdjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbnZhciBQcm9qZWN0QmxvY2tfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0QmxvY2tcIikpO1xudmFyIHByb2plY3RfbGlzdF8xID0gcmVxdWlyZShcIi4uLy4uL2NvbnRlbnQvcHJvamVjdHMvcHJvamVjdC1saXN0XCIpO1xudmFyIFNsaWRlV3JhcHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZC9TbGlkZVdyYXBwZXJcIikpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkL2NvbnN0YW50c1wiKTtcbnZhciBGYWRlV3JhcHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZC9GYWRlV3JhcHBlclwiKSk7XG52YXIgUGVyc29uYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbnRhaW5lclJlZiA9ICgwLCByZWFjdF8xLnVzZVJlZikobnVsbCk7XG4gICAgdmFyIHRoZW1lID0gKDAsIG1hdGVyaWFsXzEudXNlVGhlbWUpKCk7XG4gICAgdmFyIGFuaW1hdGlvbkJyZWFrcG9pbnQgPSAoMCwgbWF0ZXJpYWxfMS51c2VNZWRpYVF1ZXJ5KSh0aGVtZS5icmVha3BvaW50cy5kb3duKGNvbnN0YW50c18xLkFOSV9DT05TVC5QUk9KX1JPV19CUkVBS1BPSU5UKSk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgcmVmOiBjb250YWluZXJSZWYgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZhZGVXcmFwcGVyXzEuZGVmYXVsdCwgeyBkZWxheTogY29uc3RhbnRzXzEuQU5JX0NPTlNULlBST0pfU1VCSEVBRElOR19ERUxBWSB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImg0XCIgfSwgXCJQZXJzb25hbF9wcm9qZWN0c1wiKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkdyaWQsIHsgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAyLCBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIiB9LCBwcm9qZWN0X2xpc3RfMS5Qcm9qZWN0TGlzdFtwcm9qZWN0X2xpc3RfMS5Qcm9qZWN0Q2F0ZWdvcmllcy5QRVJTT05BTF0ubWFwKGZ1bmN0aW9uIChwcm9qLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTbGlkZVdyYXBwZXJfMS5kZWZhdWx0LCB7IHNsaWRlRnJvbVJlZjogY29udGFpbmVyUmVmLCBkZWxheTogaSAqIGNvbnN0YW50c18xLkFOSV9DT05TVC5QUk9KX0NBUkRTX0RFTEFZLCBkaXJlY3Rpb246IGFuaW1hdGlvbkJyZWFrcG9pbnQgPyBcInVwXCIgOiBcImxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcm9qZWN0QmxvY2tfMS5kZWZhdWx0LCB7IHByb2o6IHByb2osIGtleTogaSB9KSkpO1xuICAgICAgICAgICAgfSkpKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLk91dGxldCwgbnVsbCkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBQZXJzb25hbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgaG9va3NfMSA9IHJlcXVpcmUoXCJtYXRlcmlhbC11aS1wb3B1cC1zdGF0ZS9ob29rc1wiKTtcbnZhciBIb3Zlck1lbnVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibWF0ZXJpYWwtdWktcG9wdXAtc3RhdGUvSG92ZXJNZW51XCIpKTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG52YXIgbXVpQnV0dG9uXzEgPSByZXF1aXJlKFwiLi4vbXVpL2NvbXBvbmVudHMvbXVpQnV0dG9uXCIpO1xudmFyIHBhdGhzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogXCIvYWJvdXRcIixcbiAgICAgICAgdGV4dDogXCJhYm91dFwiLFxuICAgICAgICBzdWJwYXRoczogW10sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL3Byb2plY3RzXCIsXG4gICAgICAgIHRleHQ6IFwicHJvamVjdHNcIixcbiAgICAgICAgc3VicGF0aHM6IFtcbiAgICAgICAgICAgIHsgcGF0aDogXCJwcm9qZWN0cy9wZXJzb25hbFwiLCB0ZXh0OiBcInBlcnNvbmFsXCIgfSxcbiAgICAgICAgICAgIHsgcGF0aDogXCJwcm9qZWN0cy9hY2FkZW1pY1wiLCB0ZXh0OiBcImFjYWRlbWljXCIgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCIvY29udGFjdFwiLFxuICAgICAgICB0ZXh0OiBcImNvbnRhY3RcIixcbiAgICAgICAgc3VicGF0aHM6IFtdLFxuICAgIH0sXG5dO1xudmFyIE5hdkxpbmtzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGVtZSA9ICgwLCBtYXRlcmlhbF8xLnVzZVRoZW1lKSgpO1xuICAgIHZhciBpc01vYmlsZSA9ICgwLCBtYXRlcmlhbF8xLnVzZU1lZGlhUXVlcnkpKHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XG4gICAgdmFyIHBvcHVwU3RhdGUgPSAoMCwgaG9va3NfMS51c2VQb3B1cFN0YXRlKSh7XG4gICAgICAgIHZhcmlhbnQ6IFwicG9wb3ZlclwiLFxuICAgICAgICBwb3B1cElkOiBcInN1YlBhdGhNZW51XCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIHBhdGguc3VicGF0aHMubGVuZ3RoICE9PSAwID8gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQnV0dG9uLCBfX2Fzc2lnbih7IGtleTogXCJcIi5jb25jYXQocGF0aC50ZXh0KSwgY29tcG9uZW50OiByZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgdG86IHBhdGgucGF0aCB9LCBtdWlCdXR0b25fMS5uYXZMaW5rQnV0dG9uUHJvcHMsICgwLCBob29rc18xLmJpbmRIb3ZlcikocG9wdXBTdGF0ZSkpLCBwYXRoLnRleHQpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSG92ZXJNZW51XzEuZGVmYXVsdCwgX19hc3NpZ24oe30sICgwLCBob29rc18xLmJpbmRNZW51KShwb3B1cFN0YXRlKSwgeyBhbmNob3JPcmlnaW46IGlzTW9iaWxlXG4gICAgICAgICAgICAgICAgICAgID8geyB2ZXJ0aWNhbDogXCJ0b3BcIiwgaG9yaXpvbnRhbDogXCJyaWdodFwiIH1cbiAgICAgICAgICAgICAgICAgICAgOiB7IHZlcnRpY2FsOiBcImJvdHRvbVwiLCBob3Jpem9udGFsOiBcImxlZnRcIiB9LCB0cmFuc2Zvcm1PcmlnaW46IHsgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwibGVmdFwiIH0gfSksIHBhdGguc3VicGF0aHMubWFwKGZ1bmN0aW9uIChzdWJQYXRoLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLk1lbnVJdGVtLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBrZXk6IFwiXCIuY29uY2F0KHN1YlBhdGgudGV4dCwgXCItXCIpLmNvbmNhdChpKSwgY29tcG9uZW50OiByZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgdG86IHN1YlBhdGgucGF0aCB9LCBtdWlCdXR0b25fMS5uYXZMaW5rQnV0dG9uUHJvcHMpLCBzdWJQYXRoLnRleHQpKSk7XG4gICAgICAgICAgICB9KSkpKSA6IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJ1dHRvbiwgX19hc3NpZ24oeyBrZXk6IFwiXCIuY29uY2F0KHBhdGgudGV4dCwgXCItXCIpLmNvbmNhdChpbmRleCksIGNvbXBvbmVudDogcmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHRvOiBwYXRoLnBhdGggfSwgbXVpQnV0dG9uXzEubmF2TGlua0J1dHRvblByb3BzKSwgcGF0aC50ZXh0KSkpKTtcbiAgICB9KSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IE5hdkxpbmtzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYW50bGlvblRvd2VyRGVmZW5zZSA9IHtcbiAgICBhYmJyOiBcImFudGxpb24tdGRcIixcbiAgICBuYW1lOiBcIkFudGxpb24gVG93ZXIgRGVmZW5zZVwiLFxuICAgIGRhdGU6IFwiT2N0IDIwMTggLSBEZWMgMjAxOFwiLFxuICAgIHRhZ3M6IFtcbiAgICAgICAgXCJVbml0eVwiLFxuICAgICAgICBcIkMjXCIsXG4gICAgICAgIFwiUGF0aGZpbmRpbmdcIixcbiAgICAgICAgXCJFQ1NcIixcbiAgICAgICAgXCJHYW1lIERldlwiLFxuICAgICAgICBcIkdhbWUgRGVzaWduXCIsXG4gICAgICAgIFwiR2FtZVwiLFxuICAgIF0sXG4gICAgY2F0ZWdvcnk6IFwiVG93ZXIgRGVmZW5zZSBHYW1lXCIsXG4gICAgbGluazoge1xuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9GbHVmZmlzYXVydXMvQVREXCIsXG4gICAgICAgIGhvc3Q6IFwiXCIsXG4gICAgfSxcbiAgICBkZXRhaWw6IHtcbiAgICAgICAgc2hvcnQ6IFwiQnVpbGQgYW4gYXJteSB0byBmZW5kIG9mZiBpbnZhZGVycyB3aXRoIDUgZGlmZmVyZW50IGRlZmVuc2l2ZSB0b3dlcnMuIEJsb2NrIG9mZiBwYXRocyBhbmQgZGVjaWRlIGhvdyB5b3Ugd2FudCB0byByZWRpcmVjdCB0aGUgaW52YWRpbmcgYW50bGlvbnMuXCIsXG4gICAgICAgIGxvbmc6IFtdLFxuICAgIH0sXG4gICAgaW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJhdGQvYXRkLXBhdGhmaW5kaW5nX211aWhhYlwiLFxuICAgICAgICAgICAgYWx0OiBcIkFURDogQSogUGF0aGZpbmRpbmdcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkVuZW15IEFJIHdpdGggQSogUGF0aGZpbmRpbmcgc2hvd24gYnkgbGluZXMgYW5kIHBvaW50cy5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImF0ZC9hdGQtc3RhcnQtc2NyZWVuX211czBqaVwiLFxuICAgICAgICAgICAgYWx0OiBcIkFURDogU3RhcnQgU2NyZWVuXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTdGFydCBzY3JlZW4gZm9yIHRoZSBnYW1lLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYXRkL2F0ZC1zdG9yeV94bXM1bGNcIixcbiAgICAgICAgICAgIGFsdDogXCJBVEQ6IFN0b3J5IFNjcmVlblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2Nyb2xsYWJsZSBzdG9yeSBhbmQgbmFycmF0aXZlIHNjcmVlbi5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImF0ZC9hdGQtc3RhcnQtc2NyZWVuX211czBqaVwiLFxuICAgICAgICAgICAgYWx0OiBcIkFURDogTGV2ZWwgU2VsZWN0IFNjcmVlblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTGV2ZWwgc2VsZWN0IHNjcmVlbi5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImF0ZC9hdGQtZ2FtZXBsYXlfeGF4cGNsXCIsXG4gICAgICAgICAgICBhbHQ6IFwiQVREOiBHYW1lcGxheSBTY3JlZW5zaG90XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lcGxheSBzY3JlZW5zaG90LlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYXRkL2F0ZC13aW4tc2NyZWVuX3Z3bmJmZVwiLFxuICAgICAgICAgICAgYWx0OiBcIkFURDogV2luIFNjcmVlblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiV2luIHNjcmVlblwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYXRkL2F0ZC1sb3NlLXNjcmVlbl90ZWJibDBcIixcbiAgICAgICAgICAgIGFsdDogXCJBVEQ6IExvc2UgU2NyZWVuXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3NlIHNjcmVlblwiLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gYW50bGlvblRvd2VyRGVmZW5zZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBDdXN0b21PcHRpb25zRGlhbDtcbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBEaXNwbGF5U2V0dGluZ3NUd29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRGlzcGxheVNldHRpbmdzVHdvVG9uZVwiKSk7XG52YXIgcmVhY3RfdG9hc3RpZnlfMSA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTtcbnZhciBUb2dnbGVUaGVtZUJ1dHRvbnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Ub2dnbGVUaGVtZUJ1dHRvbnNcIikpO1xudmFyIFRvZ2dsZUltYWdlUXVhbGl0eUJ1dHRvbnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Ub2dnbGVJbWFnZVF1YWxpdHlCdXR0b25zXCIpKTtcbnZhciBUb2dnbGVPbmJvYXJkaW5nQnV0dG9uc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1RvZ2dsZU9uYm9hcmRpbmdCdXR0b25zXCIpKTtcbmZ1bmN0aW9uIEN1c3RvbU9wdGlvbnNEaWFsKCkge1xuICAgIHZhciBfYSA9ICgwLCBtYXRlcmlhbF8xLnVzZUNvbG9yU2NoZW1lKSgpLCBtb2RlID0gX2EubW9kZSwgc3lzdGVtTW9kZSA9IF9hLnN5c3RlbU1vZGUsIHNldE1vZGUgPSBfYS5zZXRNb2RlO1xuICAgIHZhciBfYiA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiLS1zcGVlZERpYWwtb25ib2FyZFwiKTtcbiAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcImVuYWJsZWRcIjtcbiAgICAgICAgfVxuICAgIH0pLCBpc09uYm9hcmRpbmcgPSBfYlswXSwgc2V0SXNPbmJvYXJkaW5nID0gX2JbMV07XG4gICAgdmFyIGFjdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGljb246IChSZWFjdC5jcmVhdGVFbGVtZW50KFRvZ2dsZU9uYm9hcmRpbmdCdXR0b25zXzEuZGVmYXVsdCwgeyBpc09uYm9hcmRpbmc6IGlzT25ib2FyZGluZywgc2V0SXNPbmJvYXJkaW5nOiBzZXRJc09uYm9hcmRpbmcgfSkpLFxuICAgICAgICAgICAgbmFtZTogXCJPbmJvYXJkaW5nXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHsgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChUb2dnbGVJbWFnZVF1YWxpdHlCdXR0b25zXzEuZGVmYXVsdCwgbnVsbCksIG5hbWU6IFwiSW1hZ2UgUXVhbGl0eVwiIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9nZ2xlVGhlbWVCdXR0b25zXzEuZGVmYXVsdCwgeyBtb2RlOiBtb2RlLCBzZXRNb2RlOiBzZXRNb2RlIH0pLFxuICAgICAgICAgICAgbmFtZTogXCJUaGVtZSBNb2RlXCIsXG4gICAgICAgIH0sXG4gICAgXTtcbiAgICB2YXIgdGhlbWUgPSAoMCwgbWF0ZXJpYWxfMS51c2VUaGVtZSkoKTtcbiAgICB2YXIgaXNNb2JpbGUgPSAoMCwgbWF0ZXJpYWxfMS51c2VNZWRpYVF1ZXJ5KSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xuICAgIHZhciB0b2FzdE9wdGlvbnMgPSB7XG4gICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1yaWdodFwiLFxuICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICBwYXVzZU9uRm9jdXNMb3NzOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dhYmxlRGlyZWN0aW9uOiBcInlcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHJpZ2h0OiBpc01vYmlsZSA/IFwiNjVweFwiIDogXCI1NXB4XCIsXG4gICAgICAgICAgICBib3R0b206IGlzTW9iaWxlID8gXCI3MHB4XCIgOiBcIjQwcHhcIixcbiAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogXCIxMHB4XCIsXG4gICAgICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogMCxcbiAgICAgICAgICAgIHdpZHRoOiBpc01vYmlsZSA/IFwiMjgwcHhcIiA6IFwiZml0LWNvbnRlbnRcIixcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIC8vIE5vdGU6IC0tc3BlZWREaWFsLWluaXRpYWxPbmJvYXJkIGFuZCAtLXNwZWVkRGlhbC1vbmJvYXJkXG4gICAgLy8gICAgICAgaXMgbm90IGNsZWFyZWQgYWZ0ZXIgPEFwcC8+IHVubW91bnQsIHJlcXVpcmVkIGZvclxuICAgIC8vICAgICAgIGZ1bmN0aW9uYWxpdHkuXG4gICAgdmFyIF9jID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIi0tc3BlZWREaWFsLWluaXRpYWxPbmJvYXJkXCIpO1xuICAgIH0pLCBpbml0aWFsTG9hZCA9IF9jWzBdLCBzZXRJbml0aWFsTG9hZCA9IF9jWzFdO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaW5pdGlhbExvYWQpIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IGxvYWRcbiAgICAgICAgICAgIHJlYWN0X3RvYXN0aWZ5XzEudG9hc3QuaW5mbyhcIkN1c3RvbWl6ZSB5b3VyIGV4cGVyaWVuY2VcIiwgdG9hc3RPcHRpb25zKTtcbiAgICAgICAgICAgIHNldEluaXRpYWxMb2FkKHRydWUpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCItLXNwZWVkRGlhbC1pbml0aWFsT25ib2FyZFwiLCBcInRydWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNPbmJvYXJkaW5nID09IFwiZW5hYmxlZFwiKSB7XG4gICAgICAgICAgICAgICAgcmVhY3RfdG9hc3RpZnlfMS50b2FzdC5pbmZvKFwiQ3VzdG9taXplIHlvdXIgZXhwZXJpZW5jZVwiLCB0b2FzdE9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9nZ2xlZCBvcHRpb246IFwiLmNvbmNhdChpc09uYm9hcmRpbmcpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbml0aWFsIG9uYm9hcmRpbmc6IFwiLmNvbmNhdChpbml0aWFsTG9hZCkpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQocmVhY3RfdG9hc3RpZnlfMS5Ub2FzdENvbnRhaW5lciwgeyBwb3NpdGlvbjogXCJib3R0b20tbGVmdFwiLCBhdXRvQ2xvc2U6IDIwMDAsIGxpbWl0OiAxLCBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLCBuZXdlc3RPblRvcDogZmFsc2UsIGNsb3NlT25DbGljazogZmFsc2UsIHBhdXNlT25Gb2N1c0xvc3M6IHRydWUsIGRyYWdnYWJsZTogdHJ1ZSwgcGF1c2VPbkhvdmVyOiB0cnVlLCB0aGVtZTogbW9kZSA9PSBcInN5c3RlbVwiID8gc3lzdGVtTW9kZSA6IG1vZGUsIHRyYW5zaXRpb246IHJlYWN0X3RvYXN0aWZ5XzEuU2xpZGUgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Cb3gsIHsgc3g6IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMyMCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWigwcHgpXCIsXG4gICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgekluZGV4OiA5OTksXG4gICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuU3BlZWREaWFsLCB7IGFyaWFMYWJlbDogXCJ3ZWJzaXRlIG9wdGlvbnMgZGlhbCBmb3IgdGhlbWUgbW9kZSBhbmQgaW1hZ2UgcXVhbGl0eVwiLCBzeDogeyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBib3R0b206IDE2LCByaWdodDogMTYgfSwgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlNwZWVkRGlhbEljb24sIHsgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChEaXNwbGF5U2V0dGluZ3NUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCksIG9wZW5JY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KERpc3BsYXlTZXR0aW5nc1R3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSB9KSB9LCBhY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlNwZWVkRGlhbEFjdGlvbiwgeyBrZXk6IGFjdGlvbi5uYW1lLCBpY29uOiBhY3Rpb24uaWNvbiwgc2xvdFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBhY3Rpb24ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSB9KSk7IH0pKSkpKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2xvYmFsTmF2QnV0dG9uUHJvcHMgPSBleHBvcnRzLm5hdkxpbmtCdXR0b25Qcm9wcyA9IHZvaWQgMDtcbnZhciBtdWlCdXR0b25OYXZsaW5rRm9udFNpemVzID0ge1xuICAgIGZvbnRTaXplOiB7IHhzOiAxOCwgc206IDIwLCBtZDogMjQsIGxnOiAyNiB9LFxufTtcbmV4cG9ydHMubmF2TGlua0J1dHRvblByb3BzID0ge1xuICAgIHNpemU6IFwibGFyZ2VcIixcbiAgICB2YXJpYW50OiBcIm5hdmxpbmtcIixcbiAgICBzeDogX19hc3NpZ24oe30sIG11aUJ1dHRvbk5hdmxpbmtGb250U2l6ZXMpLFxufTtcbnZhciBtdWlCdXR0b25HbG9iYWxOYXZGb250U2l6ZXMgPSB7XG4gICAgZm9udFNpemU6IHsgeHM6IDE5LCBzbTogMjAsIG1kOiAyMSwgbGc6IDIyIH0sXG59O1xuZXhwb3J0cy5nbG9iYWxOYXZCdXR0b25Qcm9wcyA9IHtcbiAgICBzaXplOiBcIm1lZGl1bVwiLFxuICAgIHZhcmlhbnQ6IFwibmF2bGlua1wiLFxuICAgIHN4OiBfX2Fzc2lnbih7fSwgbXVpQnV0dG9uR2xvYmFsTmF2Rm9udFNpemVzKSxcbn07XG52YXIgbXVpQnV0dG9uU3R5bGVzID0ge1xuICAgIE11aUJ1dHRvbjoge1xuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzOiB7IHZhcmlhbnQ6IFwibmF2bGlua1wiIH0sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJTb3VyY2UgQ29kZSBQcm9cIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgICAgIHJvb3Q6IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjBweCA1cHggMHB4IDVweFwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMudGhlbWUudmFycy5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBcIiY6YWN0aXZlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLnRoZW1lLnZhcnMucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLnRoZW1lLnZhcnMucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCImOmZvY3VzXCI6IHt9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBtdWlCdXR0b25TdHlsZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtb3Rpb25BcnQgPSB7XG4gICAgYWJicjogXCJtb3Rpb24tYXJ0XCIsXG4gICAgbmFtZTogXCJNb3Rpb24gQXJ0XCIsXG4gICAgZGF0ZTogXCJTZXAgMjAxOCAtIERlYyAyMDE4XCIsXG4gICAgdGFnczogW1wiSmF2YVwiLCBcIkFuZHJvaWQgU3R1ZGlvXCIsIFwiU2Vuc29yc1wiLCBcIkFjdGl2aXR5IExpZmVjeWNsZVwiXSxcbiAgICBjYXRlZ29yeTogXCJBbmRyb2lkIEFwcFwiLFxuICAgIGxpbms6IHtcbiAgICAgICAgcmVwbzogXCJcIixcbiAgICAgICAgaG9zdDogXCJcIixcbiAgICB9LFxuICAgIGRldGFpbDoge1xuICAgICAgICBzaG9ydDogXCJFeHBlcmltZW50YWwgQW5kcm9pZCBkcmF3aW5nIGFwcGxpY2F0aW9uIHRoYXQgbWFwcyBkZXZpY2UgbW92ZW1lbnQgYXMgZHJhd2luZyBzdHJva2VzIG9uIGEgY2FudmFzLlwiLFxuICAgICAgICBsb25nOiBbXSxcbiAgICB9LFxuICAgIGltYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwibW90aW9uYXJ0L21vdGlvbmFydDNfYXBmZ2JwXCIsXG4gICAgICAgICAgICBhbHQ6IFwiTW90aW9uQXJ0OiBIb21lIFNjcmVlblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVmYXVsdCBzY3JlZW4uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJtb3Rpb25hcnQvbW90aW9uYXJ0MV9xcGZrMnVcIixcbiAgICAgICAgICAgIGFsdDogXCJNb3Rpb25BcnQ6IEJydXNoIFNlbGVjdCBcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkJydXNoIHNpemUgc2VsZWN0IGludGVyZmFjZS5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIm1vdGlvbmFydC9tb3Rpb25hcnQyX25kdHJlb1wiLFxuICAgICAgICAgICAgYWx0OiBcIk1vdGlvbkFydDogUGFsZXR0ZSBDaGFuZ2VyXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZW1vIG9mIE1vdGlvbkFydCdzIHBhbGV0dGUgY2hhbmdlci5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIm1vdGlvbmFydC9tb3Rpb25hcnQ0X3NlcDVieVwiLFxuICAgICAgICAgICAgYWx0OiBcIk1vdGlvbkFydDogRWRpdCBBcnRib2FyZCBOYW1lXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSZW5hbWluZyB0aGUgY3VycmVudCBhcnRib2FyZC5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIm1vdGlvbmFydC9tb3Rpb25hcnQ1X3hudjB5aFwiLFxuICAgICAgICAgICAgYWx0OiBcIk1hZGUgd2l0aCBNb3Rpb25BcnQgYXBwXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIHNhbXBsZSBkcmF3aW5nIGRvbmUgb24gdGhlIGFwcC5cIixcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IG1vdGlvbkFydDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2Fyb3VzZWxTdHlsZXMgPSB2b2lkIDA7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciByZWFjdF9tYXRlcmlhbF91aV9jYXJvdXNlbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1tYXRlcmlhbC11aS1jYXJvdXNlbFwiKSk7XG52YXIgcmVhY3RfMiA9IHJlcXVpcmUoXCJAY2xvdWRpbmFyeS9yZWFjdFwiKTtcbnZhciByZXNpemVfMSA9IHJlcXVpcmUoXCJAY2xvdWRpbmFyeS91cmwtZ2VuL2FjdGlvbnMvcmVzaXplXCIpO1xudmFyIEtleWJvYXJkQXJyb3dSaWdodFR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93UmlnaHRUd29Ub25lXCIpKTtcbnZhciBLZXlib2FyZEFycm93TGVmdFR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93TGVmdFR3b1RvbmVcIikpO1xudmFyIENsb3VkaW5hcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9DbG91ZGluYXJ5XCIpKTtcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbnZhciBQaG90b0xpYnJhcnlUd29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvUGhvdG9MaWJyYXJ5VHdvVG9uZVwiKSk7XG5leHBvcnRzLmNhcm91c2VsU3R5bGVzID0ge1xuICAgIGNhcmQ6IHtcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBtYXJnaW46IFwiNXB4XCIsXG4gICAgfSxcbiAgICBvdXRlckJveDoge1xuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgfSxcbiAgICB0ZXh0T3ZlcmxheToge1xuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNTQpXCIsXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgIH0sXG59O1xudmFyIFBsYWNlaG9sZGVyQ2FyZCA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBwcm9qID0gX2EucHJvaiwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCByZWFjdF9yb3V0ZXJfZG9tXzEudXNlTG9jYXRpb24pKCk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNhcmQsIHsgc3g6IF9fYXNzaWduKHsgbWluSGVpZ2h0OiBoZWlnaHQgfSwgZXhwb3J0cy5jYXJvdXNlbFN0eWxlcy5jYXJkKSB9LFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNhcmRBY3Rpb25BcmVhLCB7IGNvbXBvbmVudDogcmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHRvOiBwcm9qLmFiYnIsIHN0YXRlOiB7IGJhY2tncm91bmQ6IGxvY2F0aW9uIH0gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQm94LCB7IHN4OiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgd2lkdGgpLCBleHBvcnRzLmNhcm91c2VsU3R5bGVzLm91dGVyQm94KSB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQ2FyZE1lZGlhLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQaG90b0xpYnJhcnlUd29Ub25lXzEuZGVmYXVsdCwgeyBzeDogX19hc3NpZ24oX19hc3NpZ24oe30sIHdpZHRoKSwgeyBoZWlnaHQ6IGhlaWdodCB9KSB9KSksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Cb3gsIHsgc3g6IF9fYXNzaWduKHt9LCBleHBvcnRzLmNhcm91c2VsU3R5bGVzLnRleHRPdmVybGF5KSB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJjYXB0aW9uXCIgfSwgXCJQaG90byB1bmF2YWlsYWJsZSBhdCB0aGUgbW9tZW50LlwiKSkpKSkpO1xufTtcbnZhciBQbGFjZWhvbGRlckNhcm91c2VsID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHByb2ogPSBfYS5wcm9qLCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XG4gICAgdmFyIHBsYWNlaG9sZGVycyA9IFsxLCAyXTtcbiAgICB2YXIgdGhlbWUgPSAoMCwgbWF0ZXJpYWxfMS51c2VUaGVtZSkoKTtcbiAgICB2YXIgaXNNb2JpbGUgPSAoMCwgbWF0ZXJpYWxfMS51c2VNZWRpYVF1ZXJ5KSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfbWF0ZXJpYWxfdWlfY2Fyb3VzZWxfMS5kZWZhdWx0LCB7IHN0b3BBdXRvUGxheU9uSG92ZXI6IHRydWUsIGZ1bGxIZWlnaHRIb3ZlcjogdHJ1ZSwgYXV0b1BsYXk6IGZhbHNlLCBpbnRlcnZhbDogNTAwMCwgYW5pbWF0aW9uOiBcInNsaWRlXCIsIGhlaWdodDogaGVpZ2h0LCBOZXh0SWNvbjogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoS2V5Ym9hcmRBcnJvd1JpZ2h0VHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpLCBQcmV2SWNvbjogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoS2V5Ym9hcmRBcnJvd0xlZnRUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCksIG5hdkJ1dHRvbnNBbHdheXNWaXNpYmxlOiBpc01vYmlsZSA/IHRydWUgOiBmYWxzZSB9LCBwbGFjZWhvbGRlcnMubWFwKGZ1bmN0aW9uIChpdGVtLCBpKSB7IHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUGxhY2Vob2xkZXJDYXJkLCB7IGtleTogaSwgcHJvajogcHJvaiwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KSk7IH0pKSk7XG59O1xudmFyIENhcm91c2VsQ2FyZCA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBwcm9qID0gX2EucHJvaiwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCByZWFjdF9yb3V0ZXJfZG9tXzEudXNlTG9jYXRpb24pKCk7XG4gICAgdmFyIGltYWdlcyA9IHByb2ouaW1hZ2VzO1xuICAgIHZhciBjbGQgPSBDbG91ZGluYXJ5XzEuZGVmYXVsdDtcbiAgICB2YXIgdGhlbWUgPSAoMCwgbWF0ZXJpYWxfMS51c2VUaGVtZSkoKTtcbiAgICB2YXIgaXNNb2JpbGUgPSAoMCwgbWF0ZXJpYWxfMS51c2VNZWRpYVF1ZXJ5KSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xuICAgIHZhciBpbWdXaWR0aCA9IGlzTW9iaWxlID8gd2lkdGgud2lkdGgueHMgOiB3aWR0aC53aWR0aC5tZDtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X21hdGVyaWFsX3VpX2Nhcm91c2VsXzEuZGVmYXVsdCwgeyBzdG9wQXV0b1BsYXlPbkhvdmVyOiB0cnVlLCBmdWxsSGVpZ2h0SG92ZXI6IHRydWUsIGF1dG9QbGF5OiBmYWxzZSwgaW50ZXJ2YWw6IDUwMDAsIGFuaW1hdGlvbjogXCJzbGlkZVwiLCBoZWlnaHQ6IGhlaWdodCwgTmV4dEljb246IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEtleWJvYXJkQXJyb3dSaWdodFR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSwgUHJldkljb246IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEtleWJvYXJkQXJyb3dMZWZ0VHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpLCBuYXZCdXR0b25zQWx3YXlzVmlzaWJsZTogaXNNb2JpbGUgPyB0cnVlIDogZmFsc2UgfSwgaW1hZ2VzLm1hcChmdW5jdGlvbiAoaXRlbSwgaSkgeyByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQ2FyZCwgeyBrZXk6IGksIHN4OiBfX2Fzc2lnbih7IG1pbkhlaWdodDogaGVpZ2h0IH0sIGV4cG9ydHMuY2Fyb3VzZWxTdHlsZXMuY2FyZCkgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5DYXJkQWN0aW9uQXJlYSwgeyBjb21wb25lbnQ6IHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rLCB0bzogcHJvai5hYmJyLCBzdGF0ZTogeyBiYWNrZ3JvdW5kOiBsb2NhdGlvbiB9IH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJveCwgeyBzeDogX19hc3NpZ24oeyB3aWR0aDogd2lkdGggfSwgZXhwb3J0cy5jYXJvdXNlbFN0eWxlcy5vdXRlckJveCkgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNhcmRNZWRpYSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMi5BZHZhbmNlZEltYWdlLCB7IGNsZEltZzogY2xkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltYWdlKFwicG9ydGZvbGlvL1wiLmNvbmNhdChpdGVtLnNyYykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc2l6ZSgoMCwgcmVzaXplXzEuZml0KShpbWdXaWR0aCwgaGVpZ2h0KSksIHBsdWdpbnM6IFsoMCwgcmVhY3RfMi5wbGFjZWhvbGRlcikoeyBtb2RlOiBcImJsdXJcIiB9KSwgKDAsIHJlYWN0XzIucmVzcG9uc2l2ZSkoKV0gfSkpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQm94LCB7IHN4OiBfX2Fzc2lnbih7fSwgZXhwb3J0cy5jYXJvdXNlbFN0eWxlcy50ZXh0T3ZlcmxheSkgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiY2FwdGlvblwiIH0sIGl0ZW0uZGVzY3JpcHRpb24pKSkpKSk7IH0pKSk7XG59O1xudmFyIFByb2plY3RDYXJvdXNlbCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBwcm9qID0gcHJvcHMucHJvaiwgd2lkdGggPSBwcm9wcy53aWR0aCwgaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0O1xuICAgIHJldHVybiBwcm9qLmltYWdlcy5sZW5ndGggPT0gMCA/IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQbGFjZWhvbGRlckNhcm91c2VsLCB7IHByb2o6IHByb2osIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSkpIDogKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcm91c2VsQ2FyZCwgeyBwcm9qOiBwcm9qLCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBQcm9qZWN0Q2Fyb3VzZWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBmb29kcGljayA9IHtcbiAgICAvLyBmb29kcGlja1xuICAgIGFiYnI6IFwiZm9vZHBpY2tcIixcbiAgICBuYW1lOiBcIkZvb2RQaWNrXCIsXG4gICAgZGF0ZTogXCJKdW4gMjAxOCAtIE1hciAyMDE5XCIsXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJSZWR1eFwiLCBcIkpTXCIsIFwiTm9kZUpTXCIsIFwiQ1NTXCJdLFxuICAgIGNhdGVnb3J5OiBcIldlYiBhbmQgTW9iaWxlIEFwcFwiLFxuICAgIGxpbms6IHtcbiAgICAgICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20va2NhOTkvZm9vZHBpY2stbmF0aXZlXCIsXG4gICAgICAgIGhvc3Q6IFwiXCIsXG4gICAgfSxcbiAgICBkZXRhaWw6IHtcbiAgICAgICAgc2hvcnQ6IFwiTXVsdGlwbGF0Zm9ybSByYW5kb20gY3Vpc2luZSBwaWNrZXIuIFVzZXMgYSByYW5kb21pemVyIGZvciBhIHRoZSBjdWlzaW5lcyB0byBmZWVkIGludG8gdGhlIEdvb2dsZSBQbGFjZXMgQVBJIHRvIGdlbmVyYXRlIHN1Z2dlc3Rpb25zIVwiLFxuICAgICAgICBsb25nOiBbXSxcbiAgICB9LFxuICAgIGltYWdlczogW10sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gZm9vZHBpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc3R5bGVzXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIik7XG52YXIgbXVpQ29sb3JTY2hlbWVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbXVpQ29sb3JTY2hlbWVzXCIpKTtcbnZhciBtdWlUeXBvZ3JhcGh5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbXVpVHlwb2dyYXBoeVwiKSk7XG52YXIgbXVpQnV0dG9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9tdWlCdXR0b25cIikpO1xudmFyIG11aUNvbnRhaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbXVpQ29udGFpbmVyXCIpKTtcbnZhciBtdWlMaXN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9tdWlMaXN0XCIpKTtcbnZhciBtdWlNZW51SXRlbV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbXVpTWVudUl0ZW1cIikpO1xudmFyIG11aURyYXdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbXVpRHJhd2VyXCIpKTtcbnZhciBtdWlTcGVlZERpYWxfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbXVpU3BlZWREaWFsXCIpO1xudmFyIG11aUNzc0Jhc2VsaW5lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9tdWlDc3NCYXNlbGluZVwiKSk7XG52YXIgdGhlbWUgPSAoMCwgc3R5bGVzXzEuY3JlYXRlVGhlbWUpKF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCBtdWlDb2xvclNjaGVtZXNfMS5kZWZhdWx0KSwgbXVpVHlwb2dyYXBoeV8xLmRlZmF1bHQpLCB7IGNvbXBvbmVudHM6IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCBtdWlCdXR0b25fMS5kZWZhdWx0KSwgbXVpQ29udGFpbmVyXzEuZGVmYXVsdCksIG11aUxpc3RfMS5kZWZhdWx0KSwgbXVpTWVudUl0ZW1fMS5kZWZhdWx0KSwgbXVpRHJhd2VyXzEuZGVmYXVsdCksIG11aVNwZWVkRGlhbF8xLm11aVNwZWVkRGlhbCksIG11aVNwZWVkRGlhbF8xLm11aVNwZWVkRGlhbEFjdGlvbiksIG11aUNzc0Jhc2VsaW5lXzEuZGVmYXVsdCksIGNzc1ZhcmlhYmxlczoge1xuICAgICAgICBjb2xvclNjaGVtZVNlbGVjdG9yOiBcImNsYXNzXCIsXG4gICAgICAgIC8vIGdlbmVyYXRlZCBzdHlsZXNoZWV0OlxuICAgICAgICAvLyAtLWN1c3RvbS1tdWktdGhlbWUtcHJpbWFyeS1tYWluOiAuLi47XG4gICAgICAgIGNzc1ZhclByZWZpeDogXCJjdXN0b20tbXVpLXRoZW1lXCIsXG4gICAgfSB9KSk7XG50aGVtZSA9ICgwLCBzdHlsZXNfMS5yZXNwb25zaXZlRm9udFNpemVzKSh0aGVtZSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0aGVtZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIEdyaWRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9HcmlkXCIpKTtcbnZhciBwcm9qZWN0X2xpc3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb250ZW50L3Byb2plY3RzL3Byb2plY3QtbGlzdFwiKTtcbnZhciBQcm9qZWN0U2VsZWN0aW9uQmxvY2tfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0U2VsZWN0aW9uQmxvY2tcIikpO1xudmFyIFNsaWRlV3JhcHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZC9TbGlkZVdyYXBwZXJcIikpO1xudmFyIFNlbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29udGFpbmVyUmVmID0gKDAsIHJlYWN0XzEudXNlUmVmKShudWxsKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgcmVmOiBjb250YWluZXJSZWYgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoR3JpZF8xLmRlZmF1bHQsIHsgY29udGFpbmVyOiB0cnVlLCBkaXJlY3Rpb246IFwicm93XCIsIHNwYWNpbmc6IDIsIHNpemU6IHsgeHM6IDYsIG1kOiA4IH0gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNsaWRlV3JhcHBlcl8xLmRlZmF1bHQsIHsgc2xpZGVGcm9tUmVmOiBjb250YWluZXJSZWYsIGRlbGF5OiA1MDAsIGRpcmVjdGlvbjogXCJ1cFwiIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHJvamVjdFNlbGVjdGlvbkJsb2NrXzEuZGVmYXVsdCwgeyBjYXQ6IHByb2plY3RfbGlzdF8xLlByb2plY3RDYXRlZ29yaWVzLlBFUlNPTkFMLCBkYXRhOiBwcm9qZWN0X2xpc3RfMS5Qcm9qZWN0TGlzdFtwcm9qZWN0X2xpc3RfMS5Qcm9qZWN0Q2F0ZWdvcmllcy5QRVJTT05BTF0gfSkpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2xpZGVXcmFwcGVyXzEuZGVmYXVsdCwgeyBzbGlkZUZyb21SZWY6IGNvbnRhaW5lclJlZiwgZGVsYXk6IDEwMDAsIGRpcmVjdGlvbjogXCJ1cFwiIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHJvamVjdFNlbGVjdGlvbkJsb2NrXzEuZGVmYXVsdCwgeyBjYXQ6IHByb2plY3RfbGlzdF8xLlByb2plY3RDYXRlZ29yaWVzLkFDQURFTUlDLCBkYXRhOiBwcm9qZWN0X2xpc3RfMS5Qcm9qZWN0TGlzdFtwcm9qZWN0X2xpc3RfMS5Qcm9qZWN0Q2F0ZWdvcmllcy5BQ0FERU1JQ10gfSkpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNlbGVjdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBhYm91dF9tZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb250ZW50L2Fib3V0LW1lXCIpKTtcbnZhciBDb250ZW50QmxvY2tfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9Db250ZW50QmxvY2tcIikpO1xudmFyIFNjcm9sbGFibGVDb250YWluZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9zdHlsZWQvU2Nyb2xsYWJsZUNvbnRhaW5lclwiKSk7XG52YXIgU2xpZGVXcmFwcGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvc3R5bGVkL1NsaWRlV3JhcHBlclwiKSk7XG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9zdHlsZWQvY29uc3RhbnRzXCIpO1xudmFyIEZhZGVXcmFwcGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvc3R5bGVkL0ZhZGVXcmFwcGVyXCIpKTtcbnZhciBBYm91dE1lID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb250YWluZXJSZWYgPSAoMCwgcmVhY3RfMS51c2VSZWYpKG51bGwpO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTY3JvbGxhYmxlQ29udGFpbmVyXzEuZGVmYXVsdCwgeyByZWY6IGNvbnRhaW5lclJlZiB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRmFkZVdyYXBwZXJfMS5kZWZhdWx0LCBudWxsLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImgzXCIgfSwgXCI1dzFoXCIpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuR3JpZCwgeyBjb250YWluZXI6IHRydWUsIHNwYWNpbmc6IDIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfSwgYWJvdXRfbWVfMS5kZWZhdWx0ID09PSBudWxsIHx8IGFib3V0X21lXzEuZGVmYXVsdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWJvdXRfbWVfMS5kZWZhdWx0Lm1hcChmdW5jdGlvbiAoY250QmxrLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTbGlkZVdyYXBwZXJfMS5kZWZhdWx0LCB7IHNsaWRlRnJvbVJlZjogY29udGFpbmVyUmVmLCBkZWxheTogaSAqIGNvbnN0YW50c18xLkFOSV9DT05TVC5BQk9VVF9DQVJEX0RFTEFZLCBkaXJlY3Rpb246IFwidXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb250ZW50QmxvY2tfMS5kZWZhdWx0LCB7IGtleTogaSwgaGVhZGluZzogY250QmxrLmhlYWRpbmcsIGJvZHk6IGNudEJsay5ib2R5IH0pKSk7XG4gICAgICAgICAgICB9KSkpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gQWJvdXRNZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIEdyaWRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9HcmlkXCIpKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG52YXIgUHJvamVjdEJsb2NrXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvUHJvamVjdEJsb2NrXCIpKTtcbnZhciBwcm9qZWN0X2xpc3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb250ZW50L3Byb2plY3RzL3Byb2plY3QtbGlzdFwiKTtcbnZhciBTbGlkZVdyYXBwZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWQvU2xpZGVXcmFwcGVyXCIpKTtcbnZhciBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZC9jb25zdGFudHNcIik7XG52YXIgRmFkZVdyYXBwZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWQvRmFkZVdyYXBwZXJcIikpO1xudmFyIEFjYWRlbWljID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb250YWluZXJSZWYgPSAoMCwgcmVhY3RfMS51c2VSZWYpKG51bGwpO1xuICAgIHZhciB0aGVtZSA9ICgwLCBtYXRlcmlhbF8xLnVzZVRoZW1lKSgpO1xuICAgIHZhciBhbmltYXRpb25CcmVha3BvaW50ID0gKDAsIG1hdGVyaWFsXzEudXNlTWVkaWFRdWVyeSkodGhlbWUuYnJlYWtwb2ludHMuZG93bihjb25zdGFudHNfMS5BTklfQ09OU1QuUFJPSl9ST1dfQlJFQUtQT0lOVCkpO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHJlZjogY29udGFpbmVyUmVmIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChGYWRlV3JhcHBlcl8xLmRlZmF1bHQsIHsgZGVsYXk6IGNvbnN0YW50c18xLkFOSV9DT05TVC5QUk9KX1NVQkhFQURJTkdfREVMQVkgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoNFwiIH0sIFwiQWNhZGVtaWNfcHJvamVjdHNcIikpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoR3JpZF8xLmRlZmF1bHQsIHsgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAyLCBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIiB9LCBwcm9qZWN0X2xpc3RfMS5Qcm9qZWN0TGlzdFtwcm9qZWN0X2xpc3RfMS5Qcm9qZWN0Q2F0ZWdvcmllcy5BQ0FERU1JQ10ubWFwKGZ1bmN0aW9uIChwcm9qLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTbGlkZVdyYXBwZXJfMS5kZWZhdWx0LCB7IHNsaWRlRnJvbVJlZjogY29udGFpbmVyUmVmLCBkZWxheTogaSAqIGNvbnN0YW50c18xLkFOSV9DT05TVC5QUk9KX0NBUkRTX0RFTEFZLCBkaXJlY3Rpb246IGFuaW1hdGlvbkJyZWFrcG9pbnQgPyBcInVwXCIgOiBcImxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcm9qZWN0QmxvY2tfMS5kZWZhdWx0LCB7IHByb2o6IHByb2osIGtleTogaSB9KSkpO1xuICAgICAgICAgICAgfSkpKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLk91dGxldCwgbnVsbCkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBBY2FkZW1pYztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIENhcmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkXCIpKTtcbnZhciBDYXJkQ29udGVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50XCIpKTtcbnZhciBUeXBvZ3JhcGh5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiKSk7XG52YXIgR3JpZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0dyaWRcIikpO1xudmFyIENvbnRlbnRCbG9jayA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBoZWFkaW5nID0gX2EuaGVhZGluZywgYm9keSA9IF9hLmJvZHk7XG4gICAgdmFyIF9iID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFwiXCIpLCBoZWFkaW5nVGV4dCA9IF9iWzBdLCBzZXRIZWFkaW5nVGV4dCA9IF9iWzFdO1xuICAgIHZhciBfYyA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShbXCJcIl0pLCBib2R5VGV4dCA9IF9jWzBdLCBzZXRCb2R5VGV4dCA9IF9jWzFdO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRIZWFkaW5nVGV4dChoZWFkaW5nKTtcbiAgICAgICAgc2V0Qm9keVRleHQoYm9keSk7XG4gICAgfSwgW2JvZHksIGhlYWRpbmddKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoR3JpZF8xLmRlZmF1bHQsIHsgc2l6ZTogeyB4czogMTUsIG1kOiAyMCB9LCBzeDogeyB3aWR0aDogXCIxMDAlXCIgfSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2FyZF8xLmRlZmF1bHQsIHsgdmFyaWFudDogXCJvdXRsaW5lZFwiIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2FyZENvbnRlbnRfMS5kZWZhdWx0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcImg1XCIsIGNvbXBvbmVudDogXCJkaXZcIiwgc3g6IHsgbWI6IDIgfSB9LCBoZWFkaW5nVGV4dCksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHlfMS5kZWZhdWx0LCB7IHZhcmlhbnQ6IFwiYm9keTFcIiB9LCBib2R5VGV4dC5tYXAoZnVuY3Rpb24gKGJvZHksIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyBrZXk6IGkgfSwgYm9keSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKSkpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IENvbnRlbnRCbG9jaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG11aUNvbnRhaW5lciA9IHtcbiAgICBNdWlDb250YWluZXI6IHtcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogMCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgXCJAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjE4MDBweFwiLCAvLyBkZWZhdWx0IGlzIDEyMDBweFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gbXVpQ29udGFpbmVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGxheWVyUGVyZm9ybWFuY2VQcm9qZWN0aW9uID0ge1xuICAgIGFiYnI6IFwicGxheWVyLXBlcmZvcm1hbmNlLXByb2plY3Rpb25cIixcbiAgICBuYW1lOiBcIlBsYXllciBQZXJmb3JtYW5jZSBQcm9qZWN0aW9uXCIsXG4gICAgZGF0ZTogXCJTZXAgMjAxOSAtIERlYyAyMDE5XCIsXG4gICAgdGFnczogW1wiUHl0aG9uXCIsIFwiTUxcIiwgXCJBTk9WQVwiLCBcIlJlZ3Jlc3Npb25cIiwgXCJFVExcIiwgXCJEYXRhIFNjaWVuY2VcIl0sXG4gICAgY2F0ZWdvcnk6IFwiU3RhdGlzdGljYWwgQW5hbHlzaXNcIixcbiAgICBsaW5rOiB7XG4gICAgICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0ZsdWZmaXNhdXJ1cy9wbGF5ZXItcGVyZm9ybWFuY2UtcHJvamVjdGlvblwiLFxuICAgICAgICBob3N0OiBcImJpdC5seS9wcHAtcmVwb3J0XCIsXG4gICAgfSxcbiAgICBkZXRhaWw6IHtcbiAgICAgICAgc2hvcnQ6IFwiTUwgYWxnbyB0byBhbmFseXplIFN0ZXBoIEN1cnJ5J3MgcGVyZm9ybWFuY2Ugc3RhdHMuIFV0aWxpemVzIEVUTCBmb3IgZGF0YSBjb2xsZWN0aW9uIGFuZCBwYXJzaW5nLCBHcmFkaWVudEJvb3N0aW5nUmVncmVzc29yLCBhbmQgQU5PVkEuXCIsXG4gICAgICAgIGxvbmc6IFtdLFxuICAgIH0sXG4gICAgaW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJwcHAvYWxsLTMtZGVmLXRpZXJzLXRyYWluLXZzLXByZWRpY3Rfd2JmamdtXCIsXG4gICAgICAgICAgICBhbHQ6IFwiVHJhaW5pbmcgdnMgcHJlZGljdGVkXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUcmFpbmluZyBwb2ludHMgdnMgUHJlZGljdGVkIHBvaW50cyBhbmQgUmVncmVzc2lvbiBMaW5lIGFnYWluc3QgdGhyZWUgZGVmZW5pc3ZlIHRpZXJzLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwicHBwL2N1cnJ5LXNob3RzLW1hZGUtYnktbWludXRlc19hNmdnbjNcIixcbiAgICAgICAgICAgIGFsdDogXCJTdGVwaCBDdXJyeSdzIHNob3RzIG1hZGUgYnkgbWludXRlcyBwYXNzZWQgaW4gdGhlIGdhbWVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlN0ZXBoIEN1cnJ5J3Mgc2hvdHMgbWFkZSBieSBtaW51dGVzIHBhc3NlZCBpbiB0aGUgZ2FtZS5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcInBwcC9wbG90LW5iYS1kZWYtcmF0aW5nX2E0ZjBjZVwiLFxuICAgICAgICAgICAgYWx0OiBcIjIwMDktMjAxOSBBZ2dyZWdhdGVkIERlZmVuc2l2ZSBSYXRpbmdzIG9mIGFsbCAzMCBOQkEgdGVhbXNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIjIwMDktMjAxOSBBZ2dyZWdhdGVkIERlZmVuc2l2ZSBSYXRpbmdzIG9mIGFsbCAzMCBOQkEgdGVhbXMuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJwcHAvdmFyaWFuY2Utc2hvdC1kZWZzX3MwbDRheFwiLFxuICAgICAgICAgICAgYWx0OiBcIkZyZXF1ZW5jeSBvZiBzaG90cyBtYWRlIHZzIGRpZmZlcmVudCB0aWVycyBvZiBkZWZmZW5zZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU3RlcGgncyBzaG90cyBtYWRlIHZzIGRpZmZlcmVudCB0aWVycyBvZiBkZWZlbnNlLlwiLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gcGxheWVyUGVyZm9ybWFuY2VQcm9qZWN0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBTY3JvbGxhYmxlQ29udGFpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvc3R5bGVkL1Njcm9sbGFibGVDb250YWluZXJcIikpO1xudmFyIERvZXNOb3RFeGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsYWJsZUNvbnRhaW5lcl8xLmRlZmF1bHQsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoM1wiIH0sIFwiT29wcyFcIiksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJib2R5MVwiIH0sIFwiVGhlIHBhZ2UgeW91J3JlIGxvb2tpbmcgZm9yIGRvZXMgbm90IGV4aXN0ICh5ZXQ/KSFcIiksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJib2R5MVwiIH0sIFwiQ2xpY2sgdGhlIGxpbmtzIGFib3ZlIHRvIHRlbGVwb3J0IGJhY2shXCIpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IERvZXNOb3RFeGlzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGZhbGxpbmdCbG9ja3MgPSB7XG4gICAgLy8gZmFsbGluZy1ibG9ja3NcbiAgICBhYmJyOiBcImZhbGxpbmctYmxvY2tzXCIsXG4gICAgbmFtZTogXCJGYWxsaW5nIEJsb2Nrc1wiLFxuICAgIGRhdGU6IFwiQXByIDIwMTggLSBNYXkgMjAxOFwiLFxuICAgIHRhZ3M6IFtcIkMjXCIsIFwiVW5pdHlcIiwgXCJHYW1lIERldlwiLCBcIkdhbWVcIl0sXG4gICAgY2F0ZWdvcnk6IFwiRW5kbGVzcyBHYW1lXCIsXG4gICAgbGluazoge1xuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9GbHVmZmlzYXVydXMvRmFsbGluZy1CbG9ja3NcIixcbiAgICAgICAgaG9zdDogXCJiaXQubHkvZmFsbC1ibG9ja3NcIixcbiAgICB9LFxuICAgIGRldGFpbDoge1xuICAgICAgICBzaG9ydDogXCJFbmRsZXNzIDJEIGdhbWUgLSBldmFkZSB0aGUgYmxvY2tzISBXYXMgY29tcGxldGVkIHRvIHByYWN0aWNlIFVuaXR5IGJhc2ljcyBhZnRlciBhIGxvbmcgaGlhdHVzIGZyb20gdGhlIGdhbWUgZW5naW5lLlwiLFxuICAgICAgICBsb25nOiBbXSxcbiAgICB9LFxuICAgIGltYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiZmFsbGluZ2Jsb2Nrcy9ob21lX2cwaXpsc1wiLFxuICAgICAgICAgICAgYWx0OiBcIkZhbGxpbmcgQmxvY2tzOiBIb21lIFNjcmVlblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSW5zdHJ1Y3Rpb25hbCBob21lIHNjcmVlbi5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImZhbGxpbmdibG9ja3MvaW4tZ2FtZV9kNGE5aGNcIixcbiAgICAgICAgICAgIGFsdDogXCJGYWxsaW5nIEJsb2NrczogSW4tR2FtZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSW4gZ2FtZSBzY3JlZW5zaG90LlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiZmFsbGluZ2Jsb2Nrcy9nYW1lLW92ZXJfc2tmZXZlXCIsXG4gICAgICAgICAgICBhbHQ6IFwiRmFsbGluZyBCbG9ja3M6IEdhbWUgT3ZlciBTY3JlZW5cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUgb3ZlciBzY3JlZW4gd2l0aCBoaWdoc2NvcmUgYW5kIHBsYXktYWdhaW4gcHJvbXB0LlwiLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gZmFsbGluZ0Jsb2NrcztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbnJlcXVpcmUoXCIuLi9zdHlsZXMvcHJvamVjdHMuc2Nzc1wiKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgU2Nyb2xsYWJsZUNvbnRhaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL3N0eWxlZC9TY3JvbGxhYmxlQ29udGFpbmVyXCIpKTtcbnZhciBGYWRlV3JhcHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL3N0eWxlZC9GYWRlV3JhcHBlclwiKSk7XG52YXIgUHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNjcm9sbGFibGVDb250YWluZXJfMS5kZWZhdWx0LCB7IGNsYXNzTmFtZTogXCJQcm9qZWN0cy1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRmFkZVdyYXBwZXJfMS5kZWZhdWx0LCBudWxsLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImgzXCIgfSwgXCJQcm9qZWN0c1wiKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuT3V0bGV0LCBudWxsKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBQcm9qZWN0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHNwb2NoaVYwID0ge1xuICAgIC8vIG5iYS1kYXRhLXZpelxuICAgIGFiYnI6IFwibmJhLWRhdGEtdml6XCIsXG4gICAgbmFtZTogXCJOQkEgRGF0YSBWaXN1YWxpemF0aW9uXCIsXG4gICAgZGF0ZTogXCJBdWcgMjAxOSAtIFByZXNlbnRcIixcbiAgICB0YWdzOiBbXCJEM1wiLCBcIlJlYWN0XCIsIFwiUHl0aG9uXCIsIFwiRmxhc2tcIiwgXCJKU1wiXSxcbiAgICBjYXRlZ29yeTogXCJXZWIgQXBwIC8gVG9vbFwiLFxuICAgIGxpbms6IHtcbiAgICAgICAgcmVwbzogXCJcIixcbiAgICAgICAgaG9zdDogXCJcIixcbiAgICB9LFxuICAgIGRldGFpbDoge1xuICAgICAgICBzaG9ydDogXCJbSW4gUHJvZ3Jlc3NdIEZ1bGwtc3RhY2sgZGF0YSB2aXN1YWxpemF0aW9uIHRvb2wuIEFuYWx5emUgTkJBIHBsYXllcidzIHN0YXRzIHRocm91Z2ggaW50ZXJhY3RpdmUgdmlzdWFsaXphdGlvbnMuIFwiLFxuICAgICAgICBsb25nOiBbXSxcbiAgICB9LFxuICAgIGltYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiZmJkdi9mYmR2LWJydXNoX2R5eXZ1bFwiLFxuICAgICAgICAgICAgYWx0OiBcIk5CQSBEYXRhIFZpejogQnJ1c2ggU2VsZWN0aW9uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2VyIGNhbiBicnVzaCBzZWxlY3QgZGF0YSAtIGluIHRoZSBmdXR1cmUgdXNlciB3aWxsIGJlIGFibGUgdG8gZnVydGhlciBpbnRlcmFjdCB3aXRoIHRoaXMgc2VsZWN0aW9uLCBpZS4gdmlzdWFsaXplIHN1YnNldCB3aXRoIGFub3RoZXIgZ3JhcGguXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJmYmR2L2ZiZHYtem9vbV9nazVoemhcIixcbiAgICAgICAgICAgIGFsdDogXCJOQkEgRGF0YSBWaXo6IFpvb21cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlpvb21pbmcgYXQgZGlmZmVyZW50IGxldmVscyB3aXRoIGhpc3RvcnkgYmVpbmcgc2F2ZWQuIFVzZXIgY2FuIHVuZG8sIHJlZG8sIGFuZCByZXNldC5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImZiZHYvZmJkdi16b29tLTFfeHpzdDNmXCIsXG4gICAgICAgICAgICBhbHQ6IFwiTkJBIERhdGEgVml6OiBab29tXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJab29taW5nIGZ1cnRoZXIgdG8gc3Vic2V0IHRoZSBkYXRhIHNlZW4uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJmYmR2L2ZiZHYtYXNzaXN0c192c3VoNnZcIixcbiAgICAgICAgICAgIGFsdDogXCJOQkEgRGF0YSBWaXo6IEFzc2lzdHMgLSBEaWZmZXJlbnQgU3RhdHNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZpc3VhbGl6ZSBkaWZmZXJlbnQgYm94IHNjb3JlIG1ldHJpY3MgLSBpbiBmdXR1cmUgaXRlcmF0aW9ucywgdGhlIHVzZXIgd2lsbCBiZSBhYmxlIHRvIGdyYXBoIGFuZCB0YWJ1bGFyaXplIGFsbCBib3ggc2NvcmUgZGF0YS5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImZiZHYvZmJkdi1icnVzaF9keXl2dWxcIixcbiAgICAgICAgICAgIGFsdDogXCJOQkEgRGF0YSBWaXo6IFRvb2x0aXBcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRvb2x0aXAgdG8gc2hvdyByZXNwZWN0aXZlIGRhdGEgb2YgdGhlIHBvaW50IC0gaW4gdGhlIGZ1dHVyZSB3aWxsIGluY2x1ZGUgbW9yZSBkZXRhaWwgYW5kIHdpbGwgYmUgaW50ZXJhY3RhYmxlLlwiLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gc3BvY2hpVjA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtdWlMaXN0ID0ge1xuICAgIE11aUxpc3Q6IHtcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IG11aUxpc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBib2JieXNCcmVha291dCA9IHtcbiAgICBhYmJyOiBcImJvYmJ5cy1icmVha291dFwiLFxuICAgIG5hbWU6IFwiQm9iYnkncyBCcmVha291dFwiLFxuICAgIGRhdGU6IFwiU2VwIDIwMTkgLSBEZWMgMjAxOVwiLFxuICAgIHRhZ3M6IFtcbiAgICAgICAgXCJBZ2lsZVwiLFxuICAgICAgICBcIkdhbWUgRGV2XCIsXG4gICAgICAgIFwiTm9kZUpTXCIsXG4gICAgICAgIFwiRnVsbCBTdGFja1wiLFxuICAgICAgICBcIkhlcm9rdVwiLFxuICAgICAgICBcIk9PRFwiLFxuICAgICAgICBcIlN5cyBEZXNpZ25cIixcbiAgICAgICAgXCJHYW1lXCIsXG4gICAgXSxcbiAgICBjYXRlZ29yeTogXCJUb3AgRG93biBSUEdcIixcbiAgICBsaW5rOiB7XG4gICAgICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL2FiaGF0dGhhbC9Cb2JieS1CcmVha291dFwiLFxuICAgICAgICBob3N0OiBcImJpdC5seS9ib2JieS1icmVha291dFwiLFxuICAgIH0sXG4gICAgZGV0YWlsOiB7XG4gICAgICAgIHNob3J0OiBcIkZ1bGwgc3RhY2sgYnJvd3NlciBSUEcgLSBwbGF5IGFzIFNGVSdzIERyLiBCb2JieSBDaGFuIGluIGEgdG9wLWRvd24gZ2FtZSB3aXRoIHRoZSBQb2tlbW9uLXN0eWxlIGNvbWJhdCBzeXN0ZW0uXCIsXG4gICAgICAgIGxvbmc6IFtdLFxuICAgIH0sXG4gICAgaW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJib2JieS9ib2JieS1icmVha291dC1tYXBfcWV4NWQwXCIsXG4gICAgICAgICAgICBhbHQ6IFwiQm9iYnkgQnJlYWtvdXQ6IE1hcFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSW4tZ2FtZSBzY3JlZW5zaG90IG9mIHRoZSBtYXAgLSBTRlUncyBDUyBsYWIgYmx1ZXByaW50LlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYm9iYnkvYm9iYnktYnJlYWtvdXQtaW52ZW50b3J5X3pnd3F1MVwiLFxuICAgICAgICAgICAgYWx0OiBcIkJvYmJ5IEJyZWFrb3V0OiBJbnZlbnRvcnlcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlBsYXllciAoQm9iYnkncykgaW52ZW50b3J5IG9mIHBpY2tlZCB1cCBsb290IC0gdXNlciBjYW4gc3dhcCBsb2Fkb3V0cyBhbmQgZXF1aXBwZWQgaXRlbXMuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJib2JieS9ib2JieS1icmVha291dC1maWdodF9jY2drYnNcIixcbiAgICAgICAgICAgIGFsdDogXCJCb2JieSBCcmVha291dDogRmlnaHQgU2NlbmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlBva2Vtb24gc3R5bGUgZmlnaHQgc2NlbmUhXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJib2JieS9ib2JieS1icmVha291dC1maWdodC0xX2hnNGxjZFwiLFxuICAgICAgICAgICAgYWx0OiBcIkJvYmJ5IEJyZWFrb3V0OiBGaWdodCBTY2VuZSBQbGF5ZXIgQWJpbGl0eVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUGxheWVyIHVzaW5nIGFuIGFiaWxpdHkgLSBwb2tlbW9uIHN0eWxlIGNvbWJhdCBkaWFsb2d1ZS5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImJvYmJ5L2JvYmJ5LWJyZWFrb3V0LWZpZ2h0LTJfZzI5ZHp5XCIsXG4gICAgICAgICAgICBhbHQ6IFwiQm9iYnkgQnJlYWtvdXQ6IEZpZ2h0IFNjZW5lIEVuZW15IEFiaWxpdHlcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkVuZW15IHJldGFsaWF0aW5nIHdpdGggdGhlaXIgY3VzdG9tIHNraWxscy5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImJvYmJ5L2JvYmJ5LWJyZWFrb3V0LWl0ZW1fbzF1OHZtXCIsXG4gICAgICAgICAgICBhbHQ6IFwiQm9iYnkgQnJlYWtvdXQ6IEZ1bm55IEl0ZW1zXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJJbi1nYW1lIGl0ZW1zIHVzZXIgY2FuIHBpY2sgdXAuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJib2JieS9ib2JieS1icmVha291dC1hY2hpZXZlbWVudF90dmJpeGNcIixcbiAgICAgICAgICAgIGFsdDogXCJCb2JieSBCcmVha291dDogQWNoaWV2ZW1lbnRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkR5bmFtaWMgYW5kIHBlcnNpc3RlbnQgYWNoaWV2ZW1lbnRzIHNjcmVlbiAoc3RvcmVkIGluIGRhdGFiYXNlIGJ5IGFjY291bnQgc2Vzc2lvbikuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJib2JieS9ib2JieS1icmVha291dC1pbnZlbnRvcnlfemd3cXUxXCIsXG4gICAgICAgICAgICBhbHQ6IFwiQm9iYnkgQnJlYWtvdXQ6IExvZ2luIGFuZCBTaWdudXBcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvZ2luIGFuZCBzaWdudXAgc2NyZWVuIGZvciB0aGUgdXNlciB0byByZWdpc3Rlci5cIixcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJvYmJ5c0JyZWFrb3V0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpO1xudmFyIEdpdEh1Yl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0dpdEh1YlwiKSk7XG52YXIgTGlua2VkSW5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9MaW5rZWRJblwiKSk7XG52YXIgRW1haWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9FbWFpbFwiKSk7XG52YXIgcmVhY3RfMiA9IHJlcXVpcmUoXCJAY2xvdWRpbmFyeS9yZWFjdFwiKTtcbnZhciByZXNpemVfMSA9IHJlcXVpcmUoXCJAY2xvdWRpbmFyeS91cmwtZ2VuL2FjdGlvbnMvcmVzaXplXCIpO1xudmFyIFNjcm9sbGFibGVDb250YWluZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9zdHlsZWQvU2Nyb2xsYWJsZUNvbnRhaW5lclwiKSk7XG52YXIgQ2xvdWRpbmFyeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL0Nsb3VkaW5hcnlcIikpO1xudmFyIFNsaWRlV3JhcHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL3N0eWxlZC9TbGlkZVdyYXBwZXJcIikpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudHMvc3R5bGVkL2NvbnN0YW50c1wiKTtcbnZhciBGYWRlV3JhcHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL3N0eWxlZC9GYWRlV3JhcHBlclwiKSk7XG52YXIgaW5mbyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwibGlua2VkaW5cIixcbiAgICAgICAgbGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYW5ndXMtaG9uL1wiLFxuICAgICAgICBpY29uOiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChMaW5rZWRJbl8xLmRlZmF1bHQsIG51bGwpLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImdpdGh1YlwiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9GbHVmZmlzYXVydXNcIixcbiAgICAgICAgaWNvbjogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoR2l0SHViXzEuZGVmYXVsdCwgbnVsbCksXG4gICAgfSxcbiAgICB7IG5hbWU6IFwiZW1haWxcIiwgbGluazogXCJcIiwgaWNvbjogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRW1haWxfMS5kZWZhdWx0LCBudWxsKSwgbW9kYWw6IHRydWUgfSxcbl07XG52YXIgQ29udGFjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGhlbWUgPSAoMCwgbWF0ZXJpYWxfMS51c2VUaGVtZSkoKTtcbiAgICB2YXIgYW5pbWF0aW9uQnJlYWtwb2ludCA9ICgwLCBtYXRlcmlhbF8xLnVzZU1lZGlhUXVlcnkpKHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XG4gICAgdmFyIGNvbnRhaW5lclJlZiA9ICgwLCByZWFjdF8xLnVzZVJlZikobnVsbCk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNjcm9sbGFibGVDb250YWluZXJfMS5kZWZhdWx0LCB7IHJlZjogY29udGFpbmVyUmVmIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChGYWRlV3JhcHBlcl8xLmRlZmF1bHQsIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiaDNcIiB9LCBcIkNvbnRhY3QgSW5mb1wiKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkdyaWQsIHsgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAyLCBkaXJlY3Rpb246IHsgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH0gfSwgaW5mby5tYXAoZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNsaWRlV3JhcHBlcl8xLmRlZmF1bHQsIHsgc2xpZGVGcm9tUmVmOiBjb250YWluZXJSZWYsIGRlbGF5OiBpICogY29uc3RhbnRzXzEuQU5JX0NPTlNULkNPTlRBQ1RfQkFER0VfREVMQVksIGRpcmVjdGlvbjogYW5pbWF0aW9uQnJlYWtwb2ludCA/IFwidXBcIiA6IFwibGVmdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQ2FyZCwgeyBrZXk6IGksIHN4OiB7IHdpZHRoOiBcIjE1MHB4XCIsIGhlaWdodDogXCJmaXQtY29udGVudFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQ2FyZEFjdGlvbkFyZWEsIHsgaHJlZjogaXRlbS5saW5rLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkdyaWQsIHsgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAyLCBzeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJib2R5MVwiIH0sIGl0ZW0ubmFtZSkpKSkpKTtcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuR3JpZCwgeyBjb250YWluZXI6IHRydWUsIHNwYWNpbmc6IDEsIGRpcmVjdGlvbjogXCJjb2x1bW5cIiwgc3g6IHsgcGFkZGluZ1RvcDogXCIzMHB4XCIgfSB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNsaWRlV3JhcHBlcl8xLmRlZmF1bHQsIHsgc2xpZGVGcm9tUmVmOiBjb250YWluZXJSZWYsIGRlbGF5OiBjb25zdGFudHNfMS5BTklfQ09OU1QuQ09OVEFDVF9QT1JUUkFJVF9IRUFESU5HX0RFTEFZLCBkaXJlY3Rpb246IFwidXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoNVwiIH0sIFwiV2hvIHlvdSBhcmUgY29udGFjdGluZzpcIikpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNsaWRlV3JhcHBlcl8xLmRlZmF1bHQsIHsgc2xpZGVGcm9tUmVmOiBjb250YWluZXJSZWYsIGRlbGF5OiBjb25zdGFudHNfMS5BTklfQ09OU1QuQ09OVEFDVF9QT1JUUkFJVF9QSUNfREVMQVksIGRpcmVjdGlvbjogXCJ1cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQ2FyZCwgeyBzeDogeyB3aWR0aDogXCJmaXQtY29udGVudFwiLCBoZWlnaHQ6IFwiZml0LWNvbnRlbnRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkdyaWQsIHsgY29udGFpbmVyOiB0cnVlLCBkaXJlY3Rpb246IFwiY29sdW1uXCIsIHNwYWNpbmc6IDIsIHN4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMi5BZHZhbmNlZEltYWdlLCB7IGNsZEltZzogQ2xvdWRpbmFyeV8xLmRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbWFnZShcInBvcnRmb2xpby9FbGl0ZV9nb29zZV9qbmR5M2xcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNpemUoKDAsIHJlc2l6ZV8xLmZpdCkoNDAwLCA0MDApKSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJib2R5MVwiIH0sIFwic2VsZiBwb3J0cmFpdFwiKSkpKSkpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gQ29udGFjdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBDYXJkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ2FyZFwiKSk7XG52YXIgQ2FyZEFjdGlvbkFyZWFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9uQXJlYVwiKSk7XG52YXIgQ2FyZENvbnRlbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiKSk7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG52YXIgVHlwb2dyYXBoeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIikpO1xudmFyIFNjaG9vbFR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9TY2hvb2xUd29Ub25lXCIpKTtcbnZhciBGYWNlVHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0ZhY2VUd29Ub25lXCIpKTtcbnZhciBwcm9qZWN0X2xpc3RfMSA9IHJlcXVpcmUoXCIuLi9jb250ZW50L3Byb2plY3RzL3Byb2plY3QtbGlzdFwiKTtcbnZhciBpY29uU3R5bGluZyA9IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICB3aWR0aDogXCI1MCVcIixcbiAgICBoZWlnaHQ6IFwiNTAlXCIsXG4gICAgbWFyZ2luOiBcImF1dG9cIixcbn07XG52YXIgUHJvamVjdFNlbGVjdGlvbkJsb2NrID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNhdCA9IF9hLmNhdCwgZGF0YSA9IF9hLmRhdGE7XG4gICAgdmFyIGxvY2F0aW9uID0gKDAsIHJlYWN0X3JvdXRlcl9kb21fMS51c2VMb2NhdGlvbikoKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRfMS5kZWZhdWx0LCB7IHN4OiB7IG1heFdpZHRoOiAzMDAgfSB9LFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDYXJkQWN0aW9uQXJlYV8xLmRlZmF1bHQsIHsgY29tcG9uZW50OiByZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgdG86IGNhdCwgc3RhdGU6IGxvY2F0aW9uIH0sXG4gICAgICAgICAgICBjYXQgPT0gcHJvamVjdF9saXN0XzEuUHJvamVjdENhdGVnb3JpZXMuUEVSU09OQUwgPyAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRmFjZVR3b1RvbmVfMS5kZWZhdWx0LCB7IHN4OiBpY29uU3R5bGluZyB9KSkgOiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2Nob29sVHdvVG9uZV8xLmRlZmF1bHQsIHsgc3g6IGljb25TdHlsaW5nIH0pKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRDb250ZW50XzEuZGVmYXVsdCwgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyBndXR0ZXJCb3R0b206IHRydWUsIHZhcmlhbnQ6IFwiaDVcIiwgY29tcG9uZW50OiBcImRpdlwiIH0sIGNhdCksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsgdmFyaWFudDogXCJib2R5MlwiLCBzeDogeyBjb2xvcjogXCJ0ZXh0LnNlY29uZGFyeVwiIH0gfSwgZGF0YS5tYXAoZnVuY3Rpb24gKHByb2opIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiLSBcIi5jb25jYXQocHJvai5uYW1lLCBcIiBcIik7XG4gICAgICAgICAgICAgICAgfSkpKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBQcm9qZWN0U2VsZWN0aW9uQmxvY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgICAgICAgICByZXR1cm4gYXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvd25LZXlzKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICAgICAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpO1xudmFyIERhcmtNb2RlVHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0RhcmtNb2RlVHdvVG9uZVwiKSk7XG52YXIgTGlnaHRNb2RlVHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xpZ2h0TW9kZVR3b1RvbmVcIikpO1xudmFyIFNldHRpbmdzU3lzdGVtRGF5ZHJlYW1Ud29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3NTeXN0ZW1EYXlkcmVhbVR3b1RvbmVcIikpO1xudmFyIFRvZ2dsZVRoZW1lQnV0dG9ucyA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBtb2RlID0gX2EubW9kZSwgc2V0TW9kZSA9IF9hLnNldE1vZGU7XG4gICAgdmFyIGhhbmRsZVRvZ2dsZVRoZW1lID0gZnVuY3Rpb24gKGV2ZW50LCBuZXdUaGVtZU1vZGUpIHtcbiAgICAgICAgc2V0TW9kZShuZXdUaGVtZU1vZGUpO1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVG9nZ2xlQnV0dG9uR3JvdXAsIHsgdmFsdWU6IG1vZGUsIGRlZmF1bHRWYWx1ZTogbW9kZSwgZXhjbHVzaXZlOiB0cnVlLCBvbkNoYW5nZTogaGFuZGxlVG9nZ2xlVGhlbWUsIFwiYXJpYS1sYWJlbFwiOiBcInRoZW1lIG1vZGUgdG9nZ2xlXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlRvZ2dsZUJ1dHRvbiwgeyB2YWx1ZTogXCJzeXN0ZW1cIiwgXCJhcmlhLWxhYmVsXCI6IFwibGlnaHQgbW9kZVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNldHRpbmdzU3lzdGVtRGF5ZHJlYW1Ud29Ub25lXzEuZGVmYXVsdCwgbnVsbCkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVG9nZ2xlQnV0dG9uLCB7IHZhbHVlOiBcImxpZ2h0XCIsIFwiYXJpYS1sYWJlbFwiOiBcImxpZ2h0IG1vZGVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaWdodE1vZGVUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVG9nZ2xlQnV0dG9uLCB7IHZhbHVlOiBcImRhcmtcIiwgXCJhcmlhLWxhYmVsXCI6IFwiZGFyayBtb2RlXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGFya01vZGVUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCkpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gVG9nZ2xlVGhlbWVCdXR0b25zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBTZFR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZFR3b1RvbmVcIikpO1xudmFyIEhkVHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0hkVHdvVG9uZVwiKSk7XG52YXIgRm91cktUd29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRm91cktUd29Ub25lXCIpKTtcbnZhciByZWFjdF90b2FzdGlmeV8xID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpO1xuZnVuY3Rpb24gVG9nZ2xlSW1hZ2VRdWFsaXR5QnV0dG9ucygpIHtcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VTdGF0ZShcImhpZ2hcIiksIGltZ1F1YWxpdHkgPSBfYVswXSwgc2V0SW1nUXVhbGl0eSA9IF9hWzFdO1xuICAgIHZhciBoYW5kbGVUb2dnbGVJbWdRdWFsaXR5ID0gZnVuY3Rpb24gKGV2ZW50LCBuZXdJbWdRdWFsaXR5KSB7XG4gICAgICAgIGlmIChuZXdJbWdRdWFsaXR5KSB7XG4gICAgICAgICAgICBzZXRJbWdRdWFsaXR5KG5ld0ltZ1F1YWxpdHkpO1xuICAgICAgICAgICAgcmVhY3RfdG9hc3RpZnlfMS50b2FzdC5zdWNjZXNzKFwiSW1hZ2UgcXVhbGl0eTogXCIuY29uY2F0KG5ld0ltZ1F1YWxpdHkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldEltZ1F1YWxpdHkoXCJoaWdoXCIpO1xuICAgICAgICAgICAgcmVhY3RfdG9hc3RpZnlfMS50b2FzdC5zdWNjZXNzKFwiSW1hZ2UgcXVhbGl0eTogZGVmYXVsdCAoaGlnaClcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlRvZ2dsZUJ1dHRvbkdyb3VwLCB7IHZhbHVlOiBpbWdRdWFsaXR5LCBleGNsdXNpdmU6IHRydWUsIG9uQ2hhbmdlOiBoYW5kbGVUb2dnbGVJbWdRdWFsaXR5LCBcImFyaWEtbGFiZWxcIjogXCJpbWFnZSBxdWFsaXR5IHRvZ2dsZVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVG9nZ2xlQnV0dG9uLCB7IHZhbHVlOiBcImxvd1wiLCBcImFyaWEtbGFiZWxcIjogXCJsb3cgaW1hZ2UgcXVhbGl0eVwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZFR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVG9nZ2xlQnV0dG9uLCB7IHZhbHVlOiBcIm1lZGl1bVwiLCBcImFyaWEtbGFiZWxcIjogXCJtZWRpdW0gaW1hZ2UgcXVhbGl0eVwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZFR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVG9nZ2xlQnV0dG9uLCB7IHZhbHVlOiBcImhpZ2hcIiwgXCJhcmlhLWxhYmVsXCI6IFwiaGlnaCBpbWFnZSBxdWFsaXR5XCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvdXJLVHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpKSkpKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFRvZ2dsZUltYWdlUXVhbGl0eUJ1dHRvbnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIE5hdkxpbmtzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvTmF2TGlua3NcIikpO1xucmVxdWlyZShcIi4uL3N0eWxlcy9sYW5kaW5nLnNjc3NcIik7XG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpO1xudmFyIG11aUJ1dHRvbl8xID0gcmVxdWlyZShcIi4uL211aS9jb21wb25lbnRzL211aUJ1dHRvblwiKTtcbnZhciB0aGVtZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9tdWkvdGhlbWVcIikpO1xudmFyIExhbmRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkZhZGUsIHsgaW46IHRydWUsIGFwcGVhcjogdHJ1ZSwgdGltZW91dDogMzAwMCB9LFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJveCwgeyBjbGFzc05hbWU6IFwiTGFuZGluZy1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiaDVcIiwgc3g6IHsgZm9udEZhbWlseTogXCJLYXJsYVwiLCBmb250V2VpZ2h0OiA3MDAgfSB9LCBcIkhpIHRoZXJlISBXZWxjb21lIHRvXCIpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Cb3gsIHsgY2xhc3NOYW1lOiBcIkxhbmRpbmctY29udGFpbmVyX19uYW1lXCIgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgY2xhc3NOYW1lOiBcIkxhbmRpbmctY29udGFpbmVyX19uYW1lX19mdWxsbmFtZVwiLCB2YXJpYW50OiBcImgxXCIsIHN4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVfMS5kZWZhdWx0LnZhcnMucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lXzEuZGVmYXVsdC52YXJzLnBhbGV0dGUuYmFja2dyb3VuZC5oaWdobGlnaHQsXG4gICAgICAgICAgICAgICAgICAgIH0gfSwgXCJhbmd1c19ob25cIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IGNsYXNzTmFtZTogXCJMYW5kaW5nLWNvbnRhaW5lcl9fbmFtZV9fYXRcIiwgdmFyaWFudDogXCJoMVwiLCBzeDogeyBjb2xvcjogdGhlbWVfMS5kZWZhdWx0LnZhcnMucGFsZXR0ZS5wcmltYXJ5Lm1haW4gfSB9LCBcIkBcXHVEODNDXFx1REZFMFwiKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJveCwgeyBjbGFzc05hbWU6IFwiTGFuZGluZy1jb250YWluZXJfX25hdlwiIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5CdXR0b24sIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIk5hdi1saW5rX19uby1ldmVudHNcIiB9LCBtdWlCdXR0b25fMS5uYXZMaW5rQnV0dG9uUHJvcHMsIHsgc3g6IF9fYXNzaWduKHsgcGFkZGluZ0xlZnQ6IDAgfSwgbXVpQnV0dG9uXzEubmF2TGlua0J1dHRvblByb3BzLnN4KSB9KSwgXCJ+JFwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOYXZMaW5rc18xLmRlZmF1bHQsIG51bGwpKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBMYW5kaW5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWJvdXRNZUNvbnRlbnQgPSBbXG4gICAge1xuICAgICAgICBoZWFkaW5nOiBcIldobyBpcyBBbmd1cz9cIixcbiAgICAgICAgYm9keTogW1xuICAgICAgICAgICAgXCJIZSBpcyBhIHNvZnR3YXJlIGVuZ2luZWVyIHdobyBhbHNvIGhhcHBlbnMgdG8gYmUgYSBkYXRhIHNjaWVudGlzdC4gSGUgaXMgYW4gYXZpZCBjb21wdXRlciAmIGtleWJvYXJkIGJ1aWxkZXIsIGFtYXRldXIgYmFza2V0YmFsbCBhbmFseXN0LCBhbmQgY2FzdWFsIHZvbGxleWJhbGwgcGxheWVyLlwiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBoZWFkaW5nOiBcIldoYXQgaXMgQW5ndXM/XCIsXG4gICAgICAgIGJvZHk6IFtcbiAgICAgICAgICAgIFwiSGUgaXMgYW4gZXRobmljYWxseSBDaGluZXNlIGh1bWFuIHRoYXQgd2FzIGJvcm4gYW5kIHJhaXNlZCBpbiBWYW5jb3V2ZXIsIENhbmFkYS4gQXMgbm90ZWQgYnkgY3VsaW5hcnkgZXhwZXJ0cywgQW5ndXMgaXMgYWxzbyBhIHR5cGUgb2YgYmVlZi5cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaGVhZGluZzogXCJXaGVyZSBpcyBBbmd1cz9cIixcbiAgICAgICAgYm9keTogW1wiSGUgaXMgY3VycmVudGx5IGluIFZhbmNvdXZlciwgQkMsIENhbmFkYS5cIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGhlYWRpbmc6IFwiV2hlbiBpcyBBbmd1cz9cIixcbiAgICAgICAgYm9keTogW1wiSEUgSVMgTk9XLlwiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaGVhZGluZzogXCJXaHkgaXMgQW5ndXM/XCIsXG4gICAgICAgIGJvZHk6IFtcIlRoYXQgaXMgYSBxdWVzdGlvbiBoZSBmcmVxdWVudGx5IGFza3MgaGltc2VsZi5cIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGhlYWRpbmc6IFwiSG93IGlzIEFuZ3VzP1wiLFxuICAgICAgICBib2R5OiBbXG4gICAgICAgICAgICBcIkhlIGlzIHRha2luZyBhIGJyZWFrIGZyb20gd29yayB0byBleHBsb3JlIGhpcyBvdGhlciBwYXNzaW9ucy5cIixcbiAgICAgICAgICAgIFwiUHJldmlvdXNseSwgaGUgd29ya2VkIGFzIGEgc29mdHdhcmUgZW5naW5lZXIgYXQgQW1hem9uIFdlYiBTZXJ2aWNlcyBhbmQgU29rYW51LlwiLFxuICAgICAgICAgICAgXCJBbmd1cyBncmFkdWF0ZWQgZnJvbSBTaW1vbiBGcmFzZXIgVW5pdmVyc2l0eSAtIG1haW4naW5nIGluIERhdGEgU2NpZW5jZSBhbmQgYWx0J2luZyBJbnRlcmFjdGl2ZSBBcnRzIGFuZCBUZWNobm9sb2d5IChHYW1lIERlc2lnbiBhbmQgSW50ZXJhY3Rpb24gRGVzaWduKS5cIixcbiAgICAgICAgICAgIFwiSW4gaGlzIHNwYXJlIHRpbWUsIEFuZ3VzIGVuam95cyBoYW5naW5nIG91dCB3aXRoIGhpcyBmcmllbmRzLCBwbGF5aW5nIHZpZGVvIGdhbWVzLCBhbmQgd2F0Y2hpbmcgdGhlIE5CQS5cIixcbiAgICAgICAgXSxcbiAgICB9LFxuXTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFib3V0TWVDb250ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgd2Vic2l0ZVYxID0ge1xuICAgIGFiYnI6IFwid2Vic2l0ZVwiLFxuICAgIG5hbWU6IFwiUGVyc29uYWwgV2Vic2l0ZVwiLFxuICAgIGRhdGU6IFwiTWFyIDIwMTkgLSBQcmVzZW50XCIsXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJKU1wiLCBcIkNTU1wiXSxcbiAgICBjYXRlZ29yeTogXCJTaW5nbGUtUGFnZSBXZWIgQXBwbGljYXRpb25cIixcbiAgICBsaW5rOiB7XG4gICAgICAgIHJlcG86IFwiXCIsXG4gICAgICAgIGhvc3Q6IFwiXCIsXG4gICAgfSxcbiAgICBkZXRhaWw6IHtcbiAgICAgICAgc2hvcnQ6IFwiWW91J3JlIGxvb2tpbmcgcmlnaHQgYXQgaXQhIFNpbmdsZSBwYWdlIHdlYiBhcHAgLSBteSBvbmxpbmUgcG9ydGZvbGlvLiBGaW5kIG15IG1vc3QgdXAtdG8tZGF0ZSBwcm9qZWN0cywgaW50ZXJlc3RzLCBhbmQgbXkgY29udGFjdCBpbmZvLlwiLFxuICAgICAgICBsb25nOiBbXSxcbiAgICB9LFxuICAgIGltYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2Vic2l0ZS9tb2JpbGVfdzRqa24zXCIsXG4gICAgICAgICAgICBhbHQ6IFwiV2Vic2l0ZTogTW9iaWxlIFZpZXdcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk1vYmlsZSB2aWV3IG9mIG15IHdlYnNpdGVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndlYnNpdGUvbW9iaWxlLWFib3V0X3RrdGh0cVwiLFxuICAgICAgICAgICAgYWx0OiBcIldlYnNpdGU6IE1vYmlsZSAtIEFib3V0IFBhZ2VcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpZmZlcmVudCBoaWVyYXJjaHkgYW5kIGxheW91dCBmb3IgbW9iaWxlIHZpZXcuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3ZWJzaXRlL21vYmlsZS1wcm9qZWN0c19hYWxuYWZcIixcbiAgICAgICAgICAgIGFsdDogXCJXZWJzaXRlOiBNb2JpbGUgLSBQcm9qZWN0cyBQYWdlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWZXJ0aWNhbCBjYXJkIGxheW91dCBhbmQgc3dpcGFibGUgY2Fyb3VzZWwgdG8gdmlldyBpbWFnZXMuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3ZWJzaXRlL21vYmlsZS1saWdodF90b29uc2lcIixcbiAgICAgICAgICAgIGFsdDogXCJXZWJzaXRlOiBNb2JpbGUgLSBMaWdodCBUaGVtZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTGlnaHQgdGhlbWVkIHZlcnNpb24uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3ZWJzaXRlL21vYmlsZS1saWdodC1hYm91dF91bmZ1ZG9cIixcbiAgICAgICAgICAgIGFsdDogXCJXZWJzaXRlOiBNb2JpbGUgLSBMaWdodCBUaGVtZSBBYm91dCBQYWdlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJCcmlnaHRlciBjb2xvdXIgcGFsZXR0ZSBmb3Igb3V0ZG9vciBlbnZpcm9ubWVudHMuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3ZWJzaXRlL21vYmlsZS1saWdodC1wcm9qZWN0c19jbG9ibGhcIixcbiAgICAgICAgICAgIGFsdDogXCJXZWJzaXRlOiBNb2JpbGUgLSBMaWdodCBUaGVtZSBQcm9qZWN0cyBQYWdlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMaWdodCB0aGVtZWQgdmVyc2lvbiBvZiB0aGUgcHJvamVjdHMgcGFnZS5cIixcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdlYnNpdGVWMTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgICAgICAgICByZXR1cm4gYXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvd25LZXlzKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICAgICAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gUHJvamVjdE1vZGFsQ2Fyb3VzZWw7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIEJveF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0JveFwiKSk7XG52YXIgVHlwb2dyYXBoeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIikpO1xudmFyIE1vZGFsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTW9kYWxcIikpO1xudmFyIHJlYWN0X3JvdXRlcl9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciByZWFjdF9tYXRlcmlhbF91aV9jYXJvdXNlbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1tYXRlcmlhbC11aS1jYXJvdXNlbFwiKSk7XG52YXIgcmVhY3RfMiA9IHJlcXVpcmUoXCJAY2xvdWRpbmFyeS9yZWFjdFwiKTtcbnZhciByZXNpemVfMSA9IHJlcXVpcmUoXCJAY2xvdWRpbmFyeS91cmwtZ2VuL2FjdGlvbnMvcmVzaXplXCIpO1xudmFyIEtleWJvYXJkQXJyb3dSaWdodFR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93UmlnaHRUd29Ub25lXCIpKTtcbnZhciBLZXlib2FyZEFycm93TGVmdFR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93TGVmdFR3b1RvbmVcIikpO1xudmFyIFBob3RvTGlicmFyeVR3b1RvbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9QaG90b0xpYnJhcnlUd29Ub25lXCIpKTtcbnZhciBDbG91ZGluYXJ5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ2xvdWRpbmFyeVwiKSk7XG52YXIgUHJvamVjdENhcm91c2VsXzEgPSByZXF1aXJlKFwiLi9Qcm9qZWN0Q2Fyb3VzZWxcIik7XG52YXIgY29tcHV0ZU5vZGVTdHlsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlscy9jb21wdXRlTm9kZVN0eWxlXCIpKTtcbnZhciBTY3JvbGxhYmxlQ29udGFpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3R5bGVkL1Njcm9sbGFibGVDb250YWluZXJcIikpO1xudmFyIEZhZGVXcmFwcGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3R5bGVkL0ZhZGVXcmFwcGVyXCIpKTtcbnZhciBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL3N0eWxlZC9jb25zdGFudHNcIik7XG52YXIgc3R5bGVzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIFByb2plY3RDYXJvdXNlbF8xLmNhcm91c2VsU3R5bGVzKSwgeyBtb2RhbEJveDoge1xuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICB0b3A6IFwiY2FsYyg1MCUgKyBcIi5jb25jYXQoY29uc3RhbnRzXzEuQU5JX0NPTlNULkdMT0JBTF9OQVZfSEVJR0hUIC8gMiwgXCJweClcIiksIC8vIGdsb2JhbCBuYXYgYmFyIG9mZnNldFxuICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXG4gICAgICAgIHdpZHRoOiBcIjg3JVwiLFxuICAgICAgICBoZWlnaHQ6IFwiODclXCIsXG4gICAgICAgIGJnY29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgICAgICBib3hTaGFkb3c6IDI0LFxuICAgICAgICBwOiAyLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICB9IH0pO1xuZnVuY3Rpb24gUHJvamVjdE1vZGFsQ2Fyb3VzZWwoX2EpIHtcbiAgICB2YXIgcHJvaiA9IF9hLnByb2o7XG4gICAgdmFyIG5hdmlnYXRlID0gKDAsIHJlYWN0X3JvdXRlcl9kb21fMS51c2VOYXZpZ2F0ZSkoKTtcbiAgICB2YXIgdGhlbWUgPSAoMCwgbWF0ZXJpYWxfMS51c2VUaGVtZSkoKTtcbiAgICB2YXIgaXNTbWFsbFNjcmVlbiA9ICgwLCBtYXRlcmlhbF8xLnVzZU1lZGlhUXVlcnkpKHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKSk7XG4gICAgdmFyIGNsZCA9IENsb3VkaW5hcnlfMS5kZWZhdWx0O1xuICAgIHZhciBfYiA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSh7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSksIGRpbXMgPSBfYlswXSwgc2V0RGltcyA9IF9iWzFdO1xuICAgIC8vIGlzc3VlIHdpdGggdXNlUmVmcyBhbmQgdXNlRWZmZWN0IGRldGFpbGVkIGluIHRoaXMgYXJ0aWNsZVxuICAgIC8vIGh0dHBzOi8vbWVkaXVtLmNvbS9AdGVoX2J1aWxkZXIvcmVmLW9iamVjdHMtaW5zaWRlLXVzZWVmZmVjdC1ob29rcy1lYjdjMTUxOTg3ODBcbiAgICAvLyBzb2x1dGlvbiBmcm9tOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNjc5MDYwODdcbiAgICB2YXIgbW9kYWxSZWYgPSAoMCwgcmVhY3RfMS51c2VDYWxsYmFjaykoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBub2RlRGltcyA9ICgwLCBjb21wdXRlTm9kZVN0eWxlXzEuZGVmYXVsdCkobm9kZSk7XG4gICAgICAgICAgICBzZXREaW1zKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogbm9kZURpbXMud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBub2RlRGltcy5oZWlnaHQgLSBjb25zdGFudHNfMS5BTklfQ09OU1QuR0xPQkFMX05BVl9IRUlHSFQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICB2YXIgaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5hdmlnYXRlKFwiLTFcIiwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChNb2RhbF8xLmRlZmF1bHQsIHsgb3BlbjogdHJ1ZSwgb25DbG9zZTogaGFuZGxlQ2xvc2UsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibW9kYWwtbW9kYWwtdGl0bGUtXCIuY29uY2F0KHByb2ouYWJiciksIFwiYXJpYS1kZXNjcmliZWRieVwiOiBcIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uLVwiLmNvbmNhdChwcm9qLmFiYnIpIH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZhZGVXcmFwcGVyXzEuZGVmYXVsdCwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJveF8xLmRlZmF1bHQsIHsgc3g6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBzdHlsZXMubW9kYWxCb3gpLCB7IGZsZXhEaXJlY3Rpb246IGlzU21hbGxTY3JlZW4gPyBcImNvbHVtbi1yZXZlcnNlXCIgOiBcInJvd1wiIH0pIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsYWJsZUNvbnRhaW5lcl8xLmRlZmF1bHQsIHsgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaXNTbWFsbFNjcmVlbiA/IFwiMTAwJVwiIDogXCIzMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaXNTbWFsbFNjcmVlbiA/IFwiNDAlXCIgOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNhcmRDb250ZW50LCB7IHN4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogXCIxIDAgYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsgaWQ6IFwibW9kYWwtbW9kYWwtdGl0bGUtXCIuY29uY2F0KHByb2ouYWJiciksIGNvbXBvbmVudDogXCJkaXZcIiwgdmFyaWFudDogXCJoNVwiIH0sIHByb2oubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcInN1YnRpdGxlMVwiLCBjb21wb25lbnQ6IFwiZGl2XCIsIHN4OiB7IGNvbG9yOiBcInRleHQuc2Vjb25kYXJ5XCIgfSB9LCBwcm9qLmNhdGVnb3J5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuR3JpZCwgeyBjb250YWluZXI6IHRydWUsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBzcGFjaW5nOiAyLCByb3dTcGFjaW5nOiAwLCB3aWR0aDogXCI5MCVcIiB9LCBwcm9qLnRhZ3MubWFwKGZ1bmN0aW9uICh0YWcsIGkpIHsgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyBrZXk6IGksIHZhcmlhbnQ6IFwic3VidGl0bGUyXCIsIGNvbXBvbmVudDogXCJkaXZcIiwgc3g6IHsgY29sb3I6IFwidGV4dC5zZWNvbmRhcnlcIiB9IH0sIHRhZykpOyB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCb3hfMS5kZWZhdWx0LCB7IHN4OiB7IHBhZGRpbmdUb3A6IFwiMTBweFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcImJvZHkyXCIgfSwgcHJvai5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcImJvZHkxXCIgfSwgcHJvai5kZXRhaWwuc2hvcnQpKSkpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJveF8xLmRlZmF1bHQsIHsgcmVmOiBtb2RhbFJlZiwgc3g6IHsgd2lkdGg6IGlzU21hbGxTY3JlZW4gPyBcIjEwMCVcIiA6IFwiNzAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9tYXRlcmlhbF91aV9jYXJvdXNlbF8xLmRlZmF1bHQsIHsgc3RvcEF1dG9QbGF5T25Ib3ZlcjogdHJ1ZSwgZnVsbEhlaWdodEhvdmVyOiB0cnVlLCBhdXRvUGxheTogZmFsc2UsIGludGVydmFsOiA1MDAwLCBhbmltYXRpb246IFwic2xpZGVcIiwgaW5kaWNhdG9yczogdHJ1ZSwgbmF2QnV0dG9uc0Fsd2F5c1Zpc2libGU6IHRydWUsIE5leHRJY29uOiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChLZXlib2FyZEFycm93UmlnaHRUd29Ub25lXzEuZGVmYXVsdCwgbnVsbCksIFByZXZJY29uOiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChLZXlib2FyZEFycm93TGVmdFR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSB9LCBwcm9qLmltYWdlcy5sZW5ndGggPj0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9qLmltYWdlcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGkpIHsgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNhcmQsIHsga2V5OiBpLCBzeDogX19hc3NpZ24oeyBoZWlnaHQ6IGRpbXMuaGVpZ2h0IH0sIFByb2plY3RDYXJvdXNlbF8xLmNhcm91c2VsU3R5bGVzLmNhcmQpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQm94XzEuZGVmYXVsdCwgeyBzeDogX19hc3NpZ24oeyB3aWR0aDogZGltcy53aWR0aCB9LCBQcm9qZWN0Q2Fyb3VzZWxfMS5jYXJvdXNlbFN0eWxlcy5vdXRlckJveCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMi5BZHZhbmNlZEltYWdlLCB7IGNsZEltZzogY2xkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltYWdlKFwicG9ydGZvbGlvL1wiLmNvbmNhdChpdGVtLnNyYykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc2l6ZSgoMCwgcmVzaXplXzEuZml0KShkaW1zLndpZHRoLCBkaW1zLmhlaWdodCkpLCBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHJlYWN0XzIucGxhY2Vob2xkZXIpKHsgbW9kZTogXCJibHVyXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHJlYWN0XzIucmVzcG9uc2l2ZSkoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJveF8xLmRlZmF1bHQsIHsgc3g6IF9fYXNzaWduKHt9LCBQcm9qZWN0Q2Fyb3VzZWxfMS5jYXJvdXNlbFN0eWxlcy50ZXh0T3ZlcmxheSkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHlfMS5kZWZhdWx0LCB7IHZhcmlhbnQ6IFwiY2FwdGlvblwiIH0sIGl0ZW0uZGVzY3JpcHRpb24pKSkpKTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogWzEsIDJdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQ2FyZCwgeyBrZXk6IGksIHN4OiBfX2Fzc2lnbih7IGhlaWdodDogZGltcy5oZWlnaHQgfSwgUHJvamVjdENhcm91c2VsXzEuY2Fyb3VzZWxTdHlsZXMuY2FyZCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCb3hfMS5kZWZhdWx0LCB7IHN4OiBfX2Fzc2lnbih7IHdpZHRoOiBkaW1zLndpZHRoIH0sIFByb2plY3RDYXJvdXNlbF8xLmNhcm91c2VsU3R5bGVzLm91dGVyQm94KSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQaG90b0xpYnJhcnlUd29Ub25lXzEuZGVmYXVsdCwgeyBzeDogeyB3aWR0aDogZGltcy53aWR0aCwgaGVpZ2h0OiBkaW1zLmhlaWdodCB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCb3hfMS5kZWZhdWx0LCB7IHN4OiBfX2Fzc2lnbih7fSwgUHJvamVjdENhcm91c2VsXzEuY2Fyb3VzZWxTdHlsZXMudGV4dE92ZXJsYXkpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcImNhcHRpb25cIiB9LCBcIlBob3RvIHVuYXZhaWxhYmxlIGF0IHRoZSBtb21lbnQuXCIpKSkpKTsgfSkpKSkpKSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgRmFkZVdyYXBwZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9zdHlsZWQvRmFkZVdyYXBwZXJcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChGYWRlV3JhcHBlcl8xLmRlZmF1bHQsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoNVwiIH0sIFwibG9hZGluZy4uLlwiKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkaW5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIFNsaWRlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvU2xpZGVcIikpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xudmFyIFNsaWRlV3JhcHBlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBzbGlkZUZyb21SZWYgPSBfYS5zbGlkZUZyb21SZWYsIGRpcmVjdGlvbiA9IF9hLmRpcmVjdGlvbiwgZGVsYXkgPSBfYS5kZWxheSwgdGltZW91dCA9IF9hLnRpbWVvdXQ7XG4gICAgdmFyIF9iID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIi0tc2xpZGUtYW5pbWF0ZWRPbkxvYWRcIik7XG4gICAgfSksIGFuaW1hdGVkT25Mb2FkID0gX2JbMF0sIHNldEFuaW1hdGVkT25Mb2FkID0gX2JbMV07XG4gICAgdmFyIF9jID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLCBzaG93Q29udGVudCA9IF9jWzBdLCBzZXRTaG93Q29udGVudCA9IF9jWzFdO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghYW5pbWF0ZWRPbkxvYWQpIHtcbiAgICAgICAgICAgIHZhciB0aW1lcl8xID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2V0U2hvd0NvbnRlbnQodHJ1ZSk7XG4gICAgICAgICAgICB9LCBkZWxheVxuICAgICAgICAgICAgICAgID8gY29uc3RhbnRzXzEuQU5JX0NPTlNULldSQVBQRVJfT05MT0FEX0RFTEFZICsgZGVsYXlcbiAgICAgICAgICAgICAgICA6IGNvbnN0YW50c18xLkFOSV9DT05TVC5XUkFQUEVSX09OTE9BRF9ERUxBWSk7IC8vIHdhaXQgdW50aWwgcGFnZSBpcyBsb2FkZWRcbiAgICAgICAgICAgIHNldEFuaW1hdGVkT25Mb2FkKHRydWUpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCItLXNsaWRlLWFuaW1hdGVkT25Mb2FkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGVhclRpbWVvdXQodGltZXJfMSk7IH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgICB2YXIgdGltZXJfMiA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNldFNob3dDb250ZW50KHRydWUpO1xuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGVsYXkpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsZWFyVGltZW91dCh0aW1lcl8yKTsgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFNob3dDb250ZW50KHRydWUpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTbGlkZV8xLmRlZmF1bHQsIHsgaW46IHNob3dDb250ZW50LCB0aW1lb3V0OiB0aW1lb3V0ID8gdGltZW91dCA6IGNvbnN0YW50c18xLkFOSV9DT05TVC5XUkFQUEVSX1NMSURFX1dSQVBQRVJfREVMQVksIGNvbnRhaW5lcjogc2xpZGVGcm9tUmVmLmN1cnJlbnQsIGRpcmVjdGlvbjogZGlyZWN0aW9uIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgY2hpbGRyZW4pKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gU2xpZGVXcmFwcGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBzY3JvbGxfYXJlYV8xID0gcmVxdWlyZShcIkBibHVyLXVpL3Njcm9sbC1hcmVhXCIpO1xudmFyIFNjcm9sbGFibGVDb250YWluZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgcmVmID0gX2EucmVmLCBzeCA9IF9hLnN4LCBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWU7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQ29udGFpbmVyLCB7IHN4OiBzeCwgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHJlZjogcmVmIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoc2Nyb2xsX2FyZWFfMS5TY3JvbGxBcmVhLCB7IGNsYXNzTmFtZXM6IHtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsU2Nyb2xsYmFyOiBcImgtMi41XCIsXG4gICAgICAgICAgICAgICAgcm9vdDogXCJ3LTYwIGgtNjAgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICBzY3JvbGxiYXI6IFwicC1bMXB4XVwiLFxuICAgICAgICAgICAgICAgIHRodW1iOiBcImJnLW5ldXRyYWwtODAwIGRhcms6YmctbmV1dHJhbC0xMDAgcm91bmRlZC1mdWxsIG9wYWNpdHktMzAgaG92ZXI6b3BhY2l0eS00MCB0cmFuc2l0aW9uLW9wYWNpdHlcIixcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbFNjcm9sbGJhcjogXCJ3LTIuNVwiLFxuICAgICAgICAgICAgfSwgZGlyOiBcImx0clwiLCBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLCBzY3JvbGxIaWRlRGVsYXk6IDYwMCwgc2hhZG93U2l6ZTogNTAsIHR5cGU6IFwiYWx3YXlzXCIsIHN0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9IH0sIGNoaWxkcmVuKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNjcm9sbGFibGVDb250YWluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgY2xpZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbS9jbGllbnRcIikpO1xudmFyIHJlYWN0X3JvdXRlcl9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xudmFyIHN0eWxlc18xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCIpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBBcHBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL0FwcFwiKSk7XG52YXIgdGhlbWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tdWkvdGhlbWVcIikpO1xucmVxdWlyZShcIi4vc3R5bGVzL2Jhc2Uuc2Nzc1wiKTtcbnZhciByb290ID0gY2xpZW50XzEuZGVmYXVsdC5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XG5yb290LnJlbmRlcihyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuU3RyaWN0TW9kZSwgbnVsbCxcbiAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuQnJvd3NlclJvdXRlciwgeyBiYXNlbmFtZTogXCIvXCIgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc3R5bGVzXzEuVGhlbWVQcm92aWRlciwgeyB0aGVtZTogdGhlbWVfMS5kZWZhdWx0LCBkZWZhdWx0TW9kZTogXCJsaWdodFwiLCBub1NzcjogdHJ1ZSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Dc3NCYXNlbGluZSwgbnVsbCksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChBcHBfMS5kZWZhdWx0LCBudWxsKSkpKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtdWlDb2xvclNjaGVtZXMgPSB7XG4gICAgY29sb3JTY2hlbWVzOiB7XG4gICAgICAgIGxpZ2h0OiB7XG4gICAgICAgICAgICBwYWxldHRlOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBcIiNmZmYzZGVcIixcbiAgICAgICAgICAgICAgICAgICAgcGFwZXI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiBcIiMxNDdGODI1OVwiLFxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxOYXY6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbjogXCIjNTM5OWRhXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyYXN0VGV4dDogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIG1haW46IFwiI2FhNTFmNzNGXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyYXN0VGV4dDogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5OiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGRhcms6IHtcbiAgICAgICAgICAgIHBhbGV0dGU6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFwiIzMwMzgzYmZmXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhcGVyOiBcIiMxZDIwMjVcIixcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiBcIiMxNDdGODI1OVwiLFxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxOYXY6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbjogXCIjNTNkOGRhZmZcIixcbiAgICAgICAgICAgICAgICAgICAgY29udHJhc3RUZXh0OiBcIiNmZmYzZGVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgICAgICAgICBtYWluOiBcIiM5ZDJkZmYzZlwiLFxuICAgICAgICAgICAgICAgICAgICBjb250cmFzdFRleHQ6IFwiI2ZmZjNkZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5OiBcIiNmZmYzZGVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IG11aUNvbG9yU2NoZW1lcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHVybF9nZW5fMSA9IHJlcXVpcmUoXCJAY2xvdWRpbmFyeS91cmwtZ2VuXCIpO1xudmFyIGNsZEluc3RhbmNlID0gbnVsbDtcbmZ1bmN0aW9uIGdldENsb3VkaW5hcnlJbnN0YW5jZSgpIHtcbiAgICBpZiAoIWNsZEluc3RhbmNlKSB7XG4gICAgICAgIGNsZEluc3RhbmNlID0gbmV3IHVybF9nZW5fMS5DbG91ZGluYXJ5KHtcbiAgICAgICAgICAgIGNsb3VkOiB7XG4gICAgICAgICAgICAgICAgY2xvdWROYW1lOiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0NMT1VEX05BTUUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiB7IHNlY3VyZTogdHJ1ZSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNsZEluc3RhbmNlO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Q2xvdWRpbmFyeUluc3RhbmNlKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgICAgICAgICByZXR1cm4gYXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvd25LZXlzKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICAgICAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgTG9hZGluZyA9ICgwLCByZWFjdF8xLmxhenkpKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9wYWdlcy9Mb2FkaW5nXCIpKTsgfSk7IH0pO1xudmFyIERlZmF1bHQgPSAoMCwgcmVhY3RfMS5sYXp5KShmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcGFnZXMvRGVmYXVsdFwiKSk7IH0pOyB9KTtcbnZhciBEb2VzTm90RXhpc3QgPSAoMCwgcmVhY3RfMS5sYXp5KShmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcGFnZXMvRG9lc05vdEV4aXN0XCIpKTsgfSk7IH0pO1xudmFyIEN1c3RvbU9wdGlvbnNEaWFsID0gKDAsIHJlYWN0XzEubGF6eSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vQ3VzdG9tT3B0aW9uc0RpYWxcIikpOyB9KTsgfSk7XG52YXIgR2xvYmFsTmF2ID0gKDAsIHJlYWN0XzEubGF6eSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvR2xvYmFsTmF2XCIpKTsgfSk7IH0pO1xudmFyIExhbmRpbmcgPSAoMCwgcmVhY3RfMS5sYXp5KShmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcGFnZXMvTGFuZGluZ1wiKSk7IH0pOyB9KTtcbnZhciBQcm9qZWN0cyA9ICgwLCByZWFjdF8xLmxhenkpKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9wYWdlcy9Qcm9qZWN0c1wiKSk7IH0pOyB9KTtcbnZhciBTZWxlY3Rpb24gPSAoMCwgcmVhY3RfMS5sYXp5KShmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcGFnZXMvcHJvamVjdHMvU2VsZWN0aW9uXCIpKTsgfSk7IH0pO1xudmFyIEFjYWRlbWljID0gKDAsIHJlYWN0XzEubGF6eSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL3BhZ2VzL3Byb2plY3RzL0FjYWRlbWljXCIpKTsgfSk7IH0pO1xudmFyIFBlcnNvbmFsID0gKDAsIHJlYWN0XzEubGF6eSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL3BhZ2VzL3Byb2plY3RzL1BlcnNvbmFsXCIpKTsgfSk7IH0pO1xudmFyIEFib3V0TWUgPSAoMCwgcmVhY3RfMS5sYXp5KShmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcGFnZXMvQWJvdXRcIikpOyB9KTsgfSk7XG52YXIgQ29udGFjdCA9ICgwLCByZWFjdF8xLmxhenkpKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9wYWdlcy9Db250YWN0XCIpKTsgfSk7IH0pO1xudmFyIFByb2plY3RNb2RhbENhcm91c2VsID0gKDAsIHJlYWN0XzEubGF6eSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvUHJvamVjdE1vZGFsQ2Fyb3VzZWxcIikpOyB9KTsgfSk7XG52YXIgcHJvamVjdF9saXN0XzEgPSByZXF1aXJlKFwiLi4vY29udGVudC9wcm9qZWN0cy9wcm9qZWN0LWxpc3RcIik7XG52YXIgQXBwID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCByZWFjdF9yb3V0ZXJfZG9tXzEudXNlTG9jYXRpb24pKCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICB2YXIgYmFja2dyb3VuZCA9IGxvY2F0aW9uLnN0YXRlICYmIGxvY2F0aW9uLnN0YXRlLmJhY2tncm91bmQ7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGNsZWFuIHVwIG9uIHVubW91bnRcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCItLWdyb3ctYW5pbWF0ZWRPbkxvYWRcIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiLS1zbGlkZS1hbmltYXRlZE9uTG9hZFwiKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJveCwgeyBjbGFzc05hbWU6IFwiQXBwXCIgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ3VzdG9tT3B0aW9uc0RpYWwsIG51bGwpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLlN1c3BlbnNlLCB7IGZhbGxiYWNrOiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nLCBudWxsKSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoR2xvYmFsTmF2LCBudWxsKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuQm94LCB7IGNsYXNzTmFtZTogbG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvXCIgPyBcIkNvbnRhaW5lclwiIDogXCJDb250YWluZXIgQ29udGFpbmVyLS1vcGVuXCIgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGVzLCB7IGxvY2F0aW9uOiBiYWNrZ3JvdW5kIHx8IGxvY2F0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBwYXRoOiBcIlwiLCBlbGVtZW50OiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChMYW5kaW5nLCBudWxsKSB9KSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlLCB7IHBhdGg6IFwiYWJvdXRcIiwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQWJvdXRNZSwgbnVsbCkgfSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBwYXRoOiBcInByb2plY3RzXCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFByb2plY3RzLCBudWxsKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlLCB7IGluZGV4OiB0cnVlLCBlbGVtZW50OiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTZWxlY3Rpb24sIG51bGwpIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlLCB7IHBhdGg6IFwicGVyc29uYWxcIiwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUGVyc29uYWwsIG51bGwpIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlLCB7IHBhdGg6IFwicGVyc29uYWwvKlwiLCBlbGVtZW50OiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuTmF2aWdhdGUsIHsgdG86IFwiL3Byb2plY3RzL3BlcnNvbmFsXCIsIHJlcGxhY2U6IHRydWUgfSkgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIHsgcGF0aDogXCJhY2FkZW1pY1wiLCBlbGVtZW50OiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChBY2FkZW1pYywgbnVsbCkgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIHsgcGF0aDogXCJhY2FkZW1pYy8qXCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5OYXZpZ2F0ZSwgeyB0bzogXCIvcHJvamVjdHMvYWNhZGVtaWNcIiwgcmVwbGFjZTogdHJ1ZSB9KSB9KSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBwYXRoOiBcImNvbnRhY3RcIiwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29udGFjdCwgbnVsbCkgfSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBwYXRoOiBcImRlZmF1bHRcIiwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRGVmYXVsdCwgbnVsbCkgfSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBwYXRoOiBcIipcIiwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRG9lc05vdEV4aXN0LCBudWxsKSB9KSksXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCAmJiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlcywgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdF9saXN0XzEuUHJvamVjdExpc3QucGVyc29uYWwubWFwKGZ1bmN0aW9uIChwcm9qLCBpKSB7IHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlLCB7IGtleTogaSwgcGF0aDogXCJwcm9qZWN0cy9wZXJzb25hbC9cIi5jb25jYXQocHJvai5hYmJyKSwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHJvamVjdE1vZGFsQ2Fyb3VzZWwsIHsgcHJvajogcHJvaiB9KSB9KSk7IH0pLFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0X2xpc3RfMS5Qcm9qZWN0TGlzdC5hY2FkZW1pYy5tYXAoZnVuY3Rpb24gKHByb2osIGkpIHsgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIHsga2V5OiBpLCBwYXRoOiBcInByb2plY3RzL2FjYWRlbWljL1wiLmNvbmNhdChwcm9qLmFiYnIpLCBlbGVtZW50OiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcm9qZWN0TW9kYWxDYXJvdXNlbCwgeyBwcm9qOiBwcm9qIH0pIH0pKTsgfSkpKSkpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWQvY29uc3RhbnRzXCIpO1xudmFyIG11aURyYXdlciA9IHtcbiAgICBNdWlEcmF3ZXI6IHtcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgICAgIHBhcGVyQW5jaG9yVG9wOiB7XG4gICAgICAgICAgICAgICAgdG9wOiBjb25zdGFudHNfMS5BTklfQ09OU1QuR0xPQkFMX05BVl9IRUlHSFQgKyBcInB4XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFwZXI6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI2MDBweFwiLFxuICAgICAgICAgICAgICAgIFwiQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IG11aURyYXdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBGYWRlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvRmFkZVwiKSk7XG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpO1xudmFyIEZhZGVXcmFwcGVyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIGRlbGF5ID0gX2EuZGVsYXksIHRpbWVvdXQgPSBfYS50aW1lb3V0O1xuICAgIHZhciBfYiA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSwgc2hvd0NvbnRlbnQgPSBfYlswXSwgc2V0U2hvd0NvbnRlbnQgPSBfYlsxXTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldFNob3dDb250ZW50KHRydWUpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGVhclRpbWVvdXQodGltZXIpOyB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmFkZV8xLmRlZmF1bHQsIHsgaW46IGRlbGF5ID8gc2hvd0NvbnRlbnQgOiB0cnVlLCB0aW1lb3V0OiB0aW1lb3V0ID8gdGltZW91dCA6IGNvbnN0YW50c18xLkFOSV9DT05TVC5XUkFQUEVSX0ZBREVfV1JBUFBFUl9ERUxBWSwgZWFzaW5nOiB7IGVudGVyOiBtYXRlcmlhbF8xLmVhc2luZy5zaGFycCwgZXhpdDogbWF0ZXJpYWxfMS5lYXNpbmcuZWFzZU91dCB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgY2hpbGRyZW4pKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gRmFkZVdyYXBwZXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUHJvamVjdENhdGVnb3JpZXMgPSBleHBvcnRzLlByb2plY3RMaXN0ID0gdm9pZCAwO1xudmFyIGdnal8yMDIwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGVyc29uYWwvZ2dqLTIwMjBcIikpO1xudmFyIHNwb2NoaV92MF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BlcnNvbmFsL3Nwb2NoaS12MFwiKSk7XG52YXIgd2Vic2l0ZV92MV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BlcnNvbmFsL3dlYnNpdGUtdjFcIikpO1xudmFyIGZvb2RwaWNrXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGVyc29uYWwvZm9vZHBpY2tcIikpO1xudmFyIGZhbGxpbmdfYmxvY2tzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGVyc29uYWwvZmFsbGluZy1ibG9ja3NcIikpO1xudmFyIFBlcnNvbmFsUHJvamVjdHMgPSBbXG4gICAgZ2dqXzIwMjBfMS5kZWZhdWx0LFxuICAgIHNwb2NoaV92MF8xLmRlZmF1bHQsXG4gICAgd2Vic2l0ZV92MV8xLmRlZmF1bHQsXG4gICAgZm9vZHBpY2tfMS5kZWZhdWx0LFxuICAgIGZhbGxpbmdfYmxvY2tzXzEuZGVmYXVsdCxcbl07XG52YXIgYm9iYnlzX2JyZWFrb3V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYWNhZGVtaWMvYm9iYnlzLWJyZWFrb3V0XCIpKTtcbnZhciBwbGF5ZXJfcGVyZm9ybWFuY2VfcHJvamVjdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FjYWRlbWljL3BsYXllci1wZXJmb3JtYW5jZS1wcm9qZWN0aW9uXCIpKTtcbnZhciBtb3Rpb25fYXJ0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYWNhZGVtaWMvbW90aW9uLWFydFwiKSk7XG52YXIga2luZ2RvbV9vZl9oZWxpb3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9hY2FkZW1pYy9raW5nZG9tLW9mLWhlbGlvc1wiKSk7XG52YXIgYW50bGlvbl90b3dlcl9kZWZlbnNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYWNhZGVtaWMvYW50bGlvbi10b3dlci1kZWZlbnNlXCIpKTtcbnZhciBBY2FkZW1pY1Byb2plY3RzID0gW1xuICAgIGJvYmJ5c19icmVha291dF8xLmRlZmF1bHQsXG4gICAgcGxheWVyX3BlcmZvcm1hbmNlX3Byb2plY3Rpb25fMS5kZWZhdWx0LFxuICAgIG1vdGlvbl9hcnRfMS5kZWZhdWx0LFxuICAgIGtpbmdkb21fb2ZfaGVsaW9zXzEuZGVmYXVsdCxcbiAgICBhbnRsaW9uX3Rvd2VyX2RlZmVuc2VfMS5kZWZhdWx0LFxuXTtcbnZhciBQcm9qZWN0Q2F0ZWdvcmllcztcbihmdW5jdGlvbiAoUHJvamVjdENhdGVnb3JpZXMpIHtcbiAgICBQcm9qZWN0Q2F0ZWdvcmllc1tcIlBFUlNPTkFMXCJdID0gXCJwZXJzb25hbFwiO1xuICAgIFByb2plY3RDYXRlZ29yaWVzW1wiQUNBREVNSUNcIl0gPSBcImFjYWRlbWljXCI7XG59KShQcm9qZWN0Q2F0ZWdvcmllcyB8fCAoZXhwb3J0cy5Qcm9qZWN0Q2F0ZWdvcmllcyA9IFByb2plY3RDYXRlZ29yaWVzID0ge30pKTtcbnZhciBQcm9qZWN0TGlzdCA9IHtcbiAgICBwZXJzb25hbDogUGVyc29uYWxQcm9qZWN0cyxcbiAgICBhY2FkZW1pYzogQWNhZGVtaWNQcm9qZWN0cyxcbn07XG5leHBvcnRzLlByb2plY3RMaXN0ID0gUHJvamVjdExpc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQU5JX0NPTlNUID0gdm9pZCAwO1xudmFyIEdFTkVSSUNfQ0FSRF9ERUxBWSA9IDQwMDtcbnZhciBHRU5FUklDX1dSQVBQRVJfREVMQVkgPSA3MDA7XG5leHBvcnRzLkFOSV9DT05TVCA9IHtcbiAgICAvLyBHRU5FUklDXG4gICAgV1JBUFBFUl9PTkxPQURfREVMQVk6IDUwMCxcbiAgICBXUkFQUEVSX0dST1dfV1JBUFBFUl9ERUxBWTogR0VORVJJQ19XUkFQUEVSX0RFTEFZLFxuICAgIFdSQVBQRVJfU0xJREVfV1JBUFBFUl9ERUxBWTogR0VORVJJQ19XUkFQUEVSX0RFTEFZLFxuICAgIFdSQVBQRVJfRkFERV9XUkFQUEVSX0RFTEFZOiA4MDAsXG4gICAgLy8gR0xPQkFMIE5BVlxuICAgIEdMT0JBTF9OQVZfTEFORElOR19ERUxBWTogMTAwMCxcbiAgICBHTE9CQUxfTkFWX0RFTEFZOiA1MDAsXG4gICAgR0xPQkFMX05BVl9IRUlHSFQ6IDUwLFxuICAgIC8vIEFCT1VUXG4gICAgQUJPVVRfQ0FSRF9ERUxBWTogR0VORVJJQ19DQVJEX0RFTEFZLFxuICAgIC8vIFBST0pFQ1RTXG4gICAgUFJPSl9ST1dfQlJFQUtQT0lOVDogMTQyNCwgLy8gPj0gMTQyNHB4IGZpdHMgMyBjYXJkc1xuICAgIFBST0pfU1VCSEVBRElOR19ERUxBWTogMzAwLCAvLyBzYW1lIGFzIFdSQVBQRVJfRkFERV9XUkFQUEVSX0RFTEFZXG4gICAgUFJPSl9DQVJEU19ERUxBWTogR0VORVJJQ19DQVJEX0RFTEFZLFxuICAgIFBST0pfQ0FSRF9XSURUSDogeyB4czogNDAwLCBtZDogNDUwLCBsZzogNjAwIH0sXG4gICAgLy8gQ09OVEFDVFxuICAgIENPTlRBQ1RfQkFER0VfREVMQVk6IEdFTkVSSUNfQ0FSRF9ERUxBWSxcbiAgICBDT05UQUNUX1BPUlRSQUlUX0hFQURJTkdfREVMQVk6IEdFTkVSSUNfQ0FSRF9ERUxBWSAqIDYsXG4gICAgQ09OVEFDVF9QT1JUUkFJVF9QSUNfREVMQVk6IEdFTkVSSUNfQ0FSRF9ERUxBWSAqIDYsXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBTY3JvbGxhYmxlQ29udGFpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvc3R5bGVkL1Njcm9sbGFibGVDb250YWluZXJcIikpO1xudmFyIERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNjcm9sbGFibGVDb250YWluZXJfMS5kZWZhdWx0LCBudWxsLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiYm9keTFcIiB9LCBcIm11Y2ggd293LCBzdWNoIGVtcHR5XCIpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IERlZmF1bHQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtdWlUeXBvZ3JhcGh5ID0ge1xuICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgICAgZm9udEZhbWlseTogW1wiSW5jb25zb2xhdGEsIFNvdXJjZSBDb2RlIFBybywgS2FybGFcIl0uam9pbihcIixcIiksXG4gICAgICAgIGgzOiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxNSxcbiAgICAgICAgICAgIG1hcmdpblRvcDogMjAsXG4gICAgICAgIH0sXG4gICAgICAgIGg0OiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICAgICAgfSxcbiAgICAgICAgaDU6IHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiU291cmNlIENvZGUgUHJvXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDUsXG4gICAgICAgIH0sXG4gICAgICAgIHN1YnRpdGxlMToge1xuICAgICAgICAgICAgZm9udEZhbWlseTogXCJJbmNvbnNvbGF0YVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICB9LFxuICAgICAgICBzdWJ0aXRsZTI6IHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSW5jb25zb2xhdGFcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTE6IHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiS2FybGFcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTI6IHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiS2FybGFcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgfSxcbiAgICAgICAgY2FwdGlvbjoge1xuICAgICAgICAgICAgZm9udEZhbWlseTogXCJLYXJsYVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgICAgICB9LFxuICAgICAgICAvLyB1c2VkIGluIGxhbmRpbmcgcGFnZSBvbmx5XG4gICAgICAgIGgxOiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkluY29uc29sYXRhXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgIH0sXG4gICAgICAgIGgyOiB1bmRlZmluZWQsXG4gICAgICAgIGg2OiB1bmRlZmluZWQsXG4gICAgfSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBtdWlUeXBvZ3JhcGh5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ2dqMjAyMCA9IHtcbiAgICBhYmJyOiBcImktd2FzLW5ldmVyLWhlcmVcIixcbiAgICBuYW1lOiBcIkdHSjogSSBXYXMgTmV2ZXIgSGVyZVwiLFxuICAgIGRhdGU6IFwiSmFuIDIwMjAgLSBGZWIgMjAyMFwiLFxuICAgIHRhZ3M6IFtcIkdHSi0yMDIwXCIsIFwiVW5pdHlcIiwgXCJDI1wiLCBcIlN0cmF0ZWd5XCIsIFwiR2FtZVwiXSxcbiAgICBjYXRlZ29yeTogXCIyRCBTdHJhdGVneSBHYW1lXCIsXG4gICAgbGluazoge1xuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9GbHVmZmlzYXVydXMvR0dKLTIwMjBcIixcbiAgICAgICAgaG9zdDogXCJodHRwOi8vYml0Lmx5L1JhdFRoaWVmXCIsXG4gICAgfSxcbiAgICBkZXRhaWw6IHtcbiAgICAgICAgc2hvcnQ6IFwiT3VyIHRlYW0ncyB0YWtlIG9uIHRoZSBHbG9iYWwgR2FtZSBKYW0gMjAyMCB0aGVtZTogUmVwYWlyLiBBIHN0cmF0ZWd5IGdhbWUgd2l0aCB1bmlxdWUgYW5kIGVtZXJnZW50IG1lY2hhbmljcy5cIixcbiAgICAgICAgbG9uZzogW10sXG4gICAgfSxcbiAgICBpbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImdnai90aXRsZS1zY3JlZW5fdjl6dnlqXCIsXG4gICAgICAgICAgICBhbHQ6IFwiR0dKLTIwMjAgSSBXYXMgTmV2ZXIgSGVyZTogVGl0bGUgU2NyZWVuXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lJ3MgdGl0bGUgc2NyZWVuLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiZ2dqL3RoZS1zcXVhZF9mZXN1dW1cIixcbiAgICAgICAgICAgIGFsdDogXCJHR0otMjAyMCBJIFdhcyBOZXZlciBIZXJlOiBUZWFtIFBob3RvXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgU3F1YWQhIEZyb20gbGVmdCB0byByaWdodDogQW5ndXMgSG9uLCBBaG1lZCBBYnV6dXJhaXEsIEFuc29uIENocmlzdG8sIEpvcmRhbiBXYXR0ZXJzb24sIExpbHkgWmFyaWZcIixcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdnajIwMjA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubXVpU3BlZWREaWFsQWN0aW9uID0gZXhwb3J0cy5tdWlTcGVlZERpYWwgPSB2b2lkIDA7XG5leHBvcnRzLm11aVNwZWVkRGlhbCA9IHtcbiAgICBNdWlTcGVlZERpYWw6IHtcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIsIC8vIGZhYiBpdHNlbGZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLCAvLy8gYWN0aW9uc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhYjoge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBhY3R1YWwgaWNvbiBvbiB0aGUgc3BlZWQgZGlhbCBpdHNlbGZcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbmV4cG9ydHMubXVpU3BlZWREaWFsQWN0aW9uID0ge1xuICAgIE11aVNwZWVkRGlhbEFjdGlvbjoge1xuICAgICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICAgICAgLy8gZmFiIGNvbnRhaW5lciB0aGF0IHdyYXBzIGFjdGlvbiBjb250ZW50XG4gICAgICAgICAgICBmYWI6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCJ2YXIoLS1jdXN0b20tbXVpLXRoZW1lLXNoYXBlLWJvcmRlclJhZGl1cylcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJyaWdodFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXRpY1Rvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG11aUNzc0Jhc2VsaW5lID0ge1xuICAgIE11aUNzc0Jhc2VsaW5lOiB7fSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBtdWlDc3NCYXNlbGluZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGtpbmdkb21PZkhlbGlvcyA9IHtcbiAgICBhYmJyOiBcImtpbmdkb20tb2YtaGVsaW9zXCIsXG4gICAgbmFtZTogXCJLaW5nZG9tIG9mIEhlbGlvc1wiLFxuICAgIGRhdGU6IFwiT2N0IDIwMTggLSBEZWMgMjAxOFwiLFxuICAgIHRhZ3M6IFtcIlVuaXR5XCIsIFwiQyNcIiwgXCJHYW1lIERldlwiLCBcIkdhbWUgRGVzaWduXCIsIFwiR2FtZVwiXSxcbiAgICBjYXRlZ29yeTogXCIyRCBTaWRlLVNjcm9sbGluZyBQbGF0Zm9ybWVyIEdhbWVcIixcbiAgICBsaW5rOiB7XG4gICAgICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0ZsdWZmaXNhdXJ1cy9raW5nZG9tLW9mLWhlbGlvc1wiLFxuICAgICAgICBob3N0OiBcImJpdC5seS9Lb0hlbGlvc1wiLFxuICAgIH0sXG4gICAgZGV0YWlsOiB7XG4gICAgICAgIHNob3J0OiBcIjJEIHNpZGUtc2Nyb2xsaW5nIHBsYXRmb3JtZXIgUlBHIC0gcGxheSBhcyB0d28gcHJvdGFnb25pc3RzIHdpdGggZGlzdGluY3Qgc2tpbGwgc2V0cyB0byBwcm9ncmVzcyB0aHJvdWdoIHRoZSBnYW1lLlwiLFxuICAgICAgICBsb25nOiBbXSxcbiAgICB9LFxuICAgIGltYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiaGVsaW9zL21haW4tc2NyZWVuX2V1dGxuaFwiLFxuICAgICAgICAgICAgYWx0OiBcIkhlbGlvczogTWFpbiBTY3JlZW5cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlN0YXJ0IHNjcmVlbi5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImhlbGlvcy9jaGFyLXhfdjI4bnhsXCIsXG4gICAgICAgICAgICBhbHQ6IFwiSGVsaW9zOiBQcm90YWdvbmlzdFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTWFpbiBwcm90YWdvbmlzdCB3aXRoIGRpc3RpbmN0IHNraWxsIHNldC5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImhlbGlvcy9jaGFyLXlfYXR4NWFhXCIsXG4gICAgICAgICAgICBhbHQ6IFwiSGVsaW9zOiBQcm90YWdvbmlzdCdzIHlvdW5nZXIgYnJvdGhlclwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUHJvdGFnb25pc3QncyB5b3VuZ2VyIGJyb3RoZXIgd2l0aCBhIGRpZmZlcmVudCBza2lsbCBzZXQuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJoZWxpb3Mvc2NlbmUtZmxvdy1jaGFydF92Zm1uajFcIixcbiAgICAgICAgICAgIGFsdDogXCJIZWxpb3M6IFNjZW5lIEZsb3cgQ2hhcnRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUncyBtYWluIHNjZW5lIGZsb3cgY2hhcnQuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJoZWxpb3Mvc3RvcnktbWFwX2RqcmdieFwiLFxuICAgICAgICAgICAgYWx0OiBcIkhlbGlvczogU3RvcnkgbWFwIG9mIHRoZSBnYW1lXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lJ3Mgc3RvcnkgbWFwIGFuZCBwcm9ncmVzc2lvbi5cIixcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGtpbmdkb21PZkhlbGlvcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXB1dGVOb2RlU3R5bGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBub2RlQ21wU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIHZhciBub2RlTWFyZ2luID0ge1xuICAgICAgICB3aWR0aDogcGFyc2VJbnQobm9kZUNtcFN0eWxlLm1hcmdpbkxlZnQpICsgcGFyc2VJbnQobm9kZUNtcFN0eWxlLm1hcmdpblJpZ2h0KSxcbiAgICAgICAgaGVpZ2h0OiBwYXJzZUludChub2RlQ21wU3R5bGUubWFyZ2luVG9wKSArIHBhcnNlSW50KG5vZGVDbXBTdHlsZS5tYXJnaW5Cb3R0b20pLFxuICAgIH07XG4gICAgdmFyIG5vZGVQYWRkaW5nID0ge1xuICAgICAgICB3aWR0aDogcGFyc2VJbnQobm9kZUNtcFN0eWxlLnBhZGRpbmdMZWZ0KSArIHBhcnNlSW50KG5vZGVDbXBTdHlsZS5wYWRkaW5nUmlnaHQpLFxuICAgICAgICBoZWlnaHQ6IHBhcnNlSW50KG5vZGVDbXBTdHlsZS5wYWRkaW5nVG9wKSArIHBhcnNlSW50KG5vZGVDbXBTdHlsZS5wYWRkaW5nQm90dG9tKSxcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBub2RlLm9mZnNldFdpZHRoIC0gbm9kZU1hcmdpbi53aWR0aCAtIG5vZGVQYWRkaW5nLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IG5vZGUub2Zmc2V0SGVpZ2h0IC0gbm9kZU1hcmdpbi5oZWlnaHQgLSBub2RlUGFkZGluZy5oZWlnaHRcbiAgICB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNvbXB1dGVOb2RlU3R5bGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgICAgICAgICByZXR1cm4gYXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvd25LZXlzKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICAgICAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpO1xudmFyIFVucHVibGlzaGVkVHdvVG9uZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL1VucHVibGlzaGVkVHdvVG9uZVwiKSk7XG52YXIgQ2hlY2tDaXJjbGVUd29Ub25lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGVUd29Ub25lXCIpKTtcbnZhciByZWFjdF90b2FzdGlmeV8xID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpO1xudmFyIFRvZ2dsZU9uYm9hcmRpbmdCdXR0b25zID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGlzT25ib2FyZGluZyA9IF9hLmlzT25ib2FyZGluZywgc2V0SXNPbmJvYXJkaW5nID0gX2Euc2V0SXNPbmJvYXJkaW5nO1xuICAgIHZhciBoYW5kbGVUb2dnbGVPbmJvYXJkaW5nID0gZnVuY3Rpb24gKGV2ZW50LCBuZXdJc09uYm9hcmRpbmcpIHtcbiAgICAgICAgaWYgKG5ld0lzT25ib2FyZGluZykge1xuICAgICAgICAgICAgc2V0SXNPbmJvYXJkaW5nKG5ld0lzT25ib2FyZGluZyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIi0tc3BlZWREaWFsLW9uYm9hcmRcIiwgbmV3SXNPbmJvYXJkaW5nKTtcbiAgICAgICAgICAgIHJlYWN0X3RvYXN0aWZ5XzEudG9hc3Quc3VjY2VzcyhcIk9uYm9hcmRpbmc6IFwiLmNvbmNhdChuZXdJc09uYm9hcmRpbmcpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldElzT25ib2FyZGluZyhcImVuYWJsZWRcIik7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIi0tc3BlZWREaWFsLW9uYm9hcmRcIiwgXCJlbmFibGVkXCIpO1xuICAgICAgICAgICAgcmVhY3RfdG9hc3RpZnlfMS50b2FzdC5zdWNjZXNzKFwiT25ib2FyZGluZzogZGVmYXVsdCAoZW5hYmxlZClcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLlRvZ2dsZUJ1dHRvbkdyb3VwLCB7IHZhbHVlOiBpc09uYm9hcmRpbmcsIGV4Y2x1c2l2ZTogdHJ1ZSwgb25DaGFuZ2U6IGhhbmRsZVRvZ2dsZU9uYm9hcmRpbmcsIFwiYXJpYS1sYWJlbFwiOiBcIm9uYm9hcmRpbmcgdG9nZ2xlXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Ub2dnbGVCdXR0b24sIHsgdmFsdWU6IFwiZGlzYWJsZWRcIiwgXCJhcmlhLWxhYmVsXCI6IFwiZGlzYWJsZSBvbmJvYXJkaW5nXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFVucHVibGlzaGVkVHdvVG9uZV8xLmRlZmF1bHQsIG51bGwpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5Ub2dnbGVCdXR0b24sIHsgdmFsdWU6IFwiZW5hYmxlZFwiLCBcImFyaWEtbGFiZWxcIjogXCJlbmFibGUgb25ib2FyZGluZ1wiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja0NpcmNsZVR3b1RvbmVfMS5kZWZhdWx0LCBudWxsKSkpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gVG9nZ2xlT25ib2FyZGluZ0J1dHRvbnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIENhcmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkXCIpKTtcbnZhciBDYXJkQ29udGVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50XCIpKTtcbnZhciBUeXBvZ3JhcGh5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiKSk7XG52YXIgQ2FyZE1lZGlhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhXCIpKTtcbnZhciBzdHlsZXNfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiKTtcbnZhciBJY29uQnV0dG9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvblwiKSk7XG52YXIgRXhwYW5kTW9yZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZE1vcmVcIikpO1xudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTtcbnZhciBQcm9qZWN0Q2Fyb3VzZWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Qcm9qZWN0Q2Fyb3VzZWxcIikpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vc3R5bGVkL2NvbnN0YW50c1wiKTtcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbnZhciBFeHBhbmRNb3JlID0gKDAsIHN0eWxlc18xLnN0eWxlZCkoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGV4cGFuZCA9IHByb3BzLmV4cGFuZCwgb3RoZXIgPSBfX3Jlc3QocHJvcHMsIFtcImV4cGFuZFwiXSk7IC8vZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbl8xLmRlZmF1bHQsIF9fYXNzaWduKHt9LCBvdGhlcikpO1xufSkoZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRoZW1lID0gX2EudGhlbWU7XG4gICAgcmV0dXJuICh7XG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ0cmFuc2Zvcm1cIiwge1xuICAgICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXN0LFxuICAgICAgICB9KSxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wczogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleHBhbmQgPSBfYS5leHBhbmQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhZXhwYW5kO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgwZGVnKVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4cGFuZCA9IF9hLmV4cGFuZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhZXhwYW5kO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgxODBkZWcpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSk7XG59KTtcbnZhciBQcm9qZWN0QmxvY2sgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgcHJvaiA9IF9hLnByb2o7XG4gICAgdmFyIF9iID0gcmVhY3RfMS5kZWZhdWx0LnVzZVN0YXRlKGZhbHNlKSwgZXhwYW5kZWQgPSBfYlswXSwgc2V0RXhwYW5kZWQgPSBfYlsxXTtcbiAgICAvKlxuICAgICAqIGxvY2F0aW9uIGFzIGEga2V5IGhlcmUgaGVscHMgcmVhY3QgcmVjb2duaXplIHdoaWNoIGlzIHBhcmVudCB2cyBjaGlsZFxuICAgICAqIHdoZW4gcGF0aCB1cGRhdGVzLCB0aGUgc3RhdGUgb2YgdGhlIHBhcmVudCBpcyBwcmVzZXJ2ZWQgc2luY2UgUmVhY3QgY2FuIGtlZXAgdHJhY2tcbiAgICAgKiBvZiB3aGljaCBpcyB0aGUgcGFyZW50IHZpYSBpdCdzIGxvY2F0aW9uLnBhdGhuYW1lLlxuICAgICAqIGluIHRoaXMgY2FzZSwgZnVsbHNjcmVlbiBtb2RhbCBjYXJvdXNlbCBpcyB0aGUgY2hpbGQsIGZvcmNpbmcgcHJvamVjdCBibG9jayB0b1xuICAgICAqIHJlcmVuZGVyIG9yIHByZXNlcnZlIGl0cyBzdGF0ZVxuICAgICAqXG4gICAgICogc2VhcmNoOiBcInJlYWN0IHJlcmVuZGVyIHdpdGgga2V5IGxvY2F0aW9uXCIgb3IgXCJyZWFjdCByZXJlbmRlciBwYXJlbnQgd2l0aCBjaGlsZCBrZXkgbG9jYXRpb25cIlxuICAgICAqL1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCByZWFjdF9yb3V0ZXJfZG9tXzEudXNlTG9jYXRpb24pKCk7XG4gICAgdmFyIGNhcmREaW1zID0ge1xuICAgICAgICB3aWR0aDogY29uc3RhbnRzXzEuQU5JX0NPTlNULlBST0pfQ0FSRF9XSURUSCxcbiAgICB9O1xuICAgIHZhciBoYW5kbGVFeHBhbmRDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKTtcbiAgICB9O1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2FyZF8xLmRlZmF1bHQsIHsgc3g6IF9fYXNzaWduKHt9LCBjYXJkRGltcykgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2FyZE1lZGlhXzEuZGVmYXVsdCwgeyBzeDogeyBtaW5IZWlnaHQ6IDIwMCB9IH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcm9qZWN0Q2Fyb3VzZWxfMS5kZWZhdWx0LCB7IGtleTogbG9jYXRpb24ucGF0aG5hbWUsIHByb2o6IHByb2osIHdpZHRoOiB7IHdpZHRoOiBjYXJkRGltcy53aWR0aCB9LCBoZWlnaHQ6IDQwMCB9KSksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRDb250ZW50XzEuZGVmYXVsdCwgeyBzeDogeyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH0gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHlfMS5kZWZhdWx0LCB7IGNvbXBvbmVudDogXCJkaXZcIiwgdmFyaWFudDogXCJoNVwiIH0sIHByb2oubmFtZSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcInN1YnRpdGxlMVwiLCBjb21wb25lbnQ6IFwiZGl2XCIsIHN4OiB7IGNvbG9yOiBcInRleHQuc2Vjb25kYXJ5XCIgfSB9LCBwcm9qLmNhdGVnb3J5KSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuR3JpZCwgeyBjb250YWluZXI6IHRydWUsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBzcGFjaW5nOiAyLCByb3dTcGFjaW5nOiAwLCB3aWR0aDogXCI5MCVcIiB9LCBwcm9qLnRhZ3MubWFwKGZ1bmN0aW9uICh0YWcsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHlfMS5kZWZhdWx0LCB7IGtleTogaSwgdmFyaWFudDogXCJzdWJ0aXRsZTJcIiwgY29tcG9uZW50OiBcImRpdlwiLCBzeDogeyBjb2xvcjogXCJ0ZXh0LnNlY29uZGFyeVwiIH0gfSwgdGFnKSk7XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNhcmRBY3Rpb25zLCB7IGRpc2FibGVTcGFjaW5nOiB0cnVlLCBzeDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEV4cGFuZE1vcmUsIHsgZXhwYW5kOiBleHBhbmRlZCwgb25DbGljazogaGFuZGxlRXhwYW5kQ2xpY2ssIFwiYXJpYS1leHBhbmRlZFwiOiBleHBhbmRlZCwgXCJhcmlhLWxhYmVsXCI6IFwic2hvdyBtb3JlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRXhwYW5kTW9yZV8xLmRlZmF1bHQsIG51bGwpKSkpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkNvbGxhcHNlLCB7IGluOiBleHBhbmRlZCwgdGltZW91dDogXCJhdXRvXCIsIHVubW91bnRPbkV4aXQ6IHRydWUgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRDb250ZW50XzEuZGVmYXVsdCwgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcImJvZHkyXCIgfSwgcHJvai5kYXRlKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcImJvZHkxXCIgfSwgcHJvai5kZXRhaWwuc2hvcnQpKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBQcm9qZWN0QmxvY2s7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDc5MjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZmx1ZmZpc2F1cnVzX2dpdGh1Yl9pb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtmbHVmZmlzYXVydXNfZ2l0aHViX2lvXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbMTY3XSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oNTM5MDApKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=