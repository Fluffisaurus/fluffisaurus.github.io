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
var react_router_dom_1 = __webpack_require__(28651);
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
                    react_1.default.createElement(material_1.Button, __assign({ onClick: toggleDrawer }, muiButton_1.globalNavButtonProps, { onMouseEnter: function () { return setHoverPath("menu"); }, "aria-label": "Global navigation button to expand drawer navigation." }), openDrawer ? react_1.default.createElement(MenuOpenTwoTone_1.default, null) : react_1.default.createElement(MenuTwoTone_1.default, null)),
                    react_1.default.createElement(material_1.Button, __assign({ ref: homeIconButtonRef, component: react_router_dom_1.Link, to: "/" }, muiButton_1.globalNavButtonProps, { sx: __assign({}, muiButton_1.globalNavButtonProps.sx), onMouseEnter: function () { return setHoverPath("~"); }, "aria-label": "Global navigation button to return to home." }), "\uD83C\uDFE0"),
                    react_1.default.createElement(material_1.Button, __assign({ className: "Nav-link__no-events" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), { color: theme.vars.palette.primary.dark, padding: 0 }), "aria-label": "Styling emulating a terminal's file structure." }), ":/"),
                    react_1.default.createElement(material_1.Button, __assign({ component: react_router_dom_1.Link, to: currPath }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), { padding: 0 }), onMouseEnter: function () { return setHoverPath("/" + currPath); }, "aria-label": "Breadcrumb navigation path." }), currPath == "" ? "" : currPath + "/"),
                    subPath && (react_1.default.createElement(material_1.Button, __assign({ component: react_router_dom_1.Link, to: currPath + "/" + subPath }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), { padding: 0 }), onMouseEnter: function () {
                            return setHoverPath("/" + currPath + "/" + subPath);
                        }, "aria-label": "Breadcrumb navigation subpath." }), subPath + "/")),
                    react_1.default.createElement(material_1.Button, __assign({ className: "Nav-link__no-events" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), { color: theme.vars.palette.primary.dark, padding: 0 }), "aria-label": "Styling emulating a terminal's command line blinking cursor for text input." }), "~$"),
                    !isMobile && (react_1.default.createElement(material_1.Button, __assign({ className: "Nav-link__no-events" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), { color: theme.vars.palette.primary.light, justifyContent: "flex-start", padding: "0 5px 0 25px" }), "aria-label": "Styling emulating a terminal's command line input. Types out paths and sub paths on user focus." }),
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
                    react_1.default.createElement(material_1.Button, __assign({ component: react_router_dom_1.Link, to: "/about" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), globalNavDrawerButtonStyles), onMouseEnter: function () { return setHoverPath("/about"); }, "aria-label": "Global navigation drawer menu link to about page." }),
                        react_1.default.createElement(SubdirectoryArrowRightTwoTone_1.default, null),
                        "about"),
                    react_1.default.createElement(material_1.Button, __assign({ ref: drawerProjectButtonRef, className: "Nav-link__no-events" }, muiButton_1.globalNavButtonProps, (0, hooks_1.bindTrigger)(popupState), { sx: __assign(__assign(__assign({}, muiButton_1.globalNavButtonProps.sx), globalNavDrawerButtonStyles), { color: theme.vars.palette.primary.dark }), onMouseEnter: function () { return setHoverPath("/projects"); }, "aria-label": "Global navigation drawer menu heading that emulates a terminal's foldre structure showing that projects is a folder with contents." }),
                        react_1.default.createElement(SubdirectoryArrowRightTwoTone_1.default, null),
                        "projects/"),
                    react_1.default.createElement(material_1.Button, __assign({ component: react_router_dom_1.Link, to: "/projects" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign(__assign({}, muiButton_1.globalNavButtonProps.sx), globalNavDrawerButtonStyles), { marginLeft: drawerProjectButtonDims.width + "px" }), onMouseEnter: function () { return setHoverPath("/projects"); }, "aria-label": "Global navigation drawer menu link to projects page." }),
                        react_1.default.createElement(SubdirectoryArrowRightTwoTone_1.default, null),
                        "./"),
                    react_1.default.createElement(material_1.Button, __assign({ component: react_router_dom_1.Link, to: "/projects/personal" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign(__assign({}, muiButton_1.globalNavButtonProps.sx), globalNavDrawerButtonStyles), { marginLeft: drawerProjectButtonDims.width + "px" }), onMouseEnter: function () { return setHoverPath("/projects/personal"); }, "aria-label": "Global navigation drawer menu link to personal projects page." }),
                        react_1.default.createElement(SubdirectoryArrowRightTwoTone_1.default, null),
                        "personal"),
                    react_1.default.createElement(material_1.Button, __assign({ component: react_router_dom_1.Link, to: "/projects/academic" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign(__assign({}, muiButton_1.globalNavButtonProps.sx), globalNavDrawerButtonStyles), { marginLeft: drawerProjectButtonDims.width + "px" }), onMouseEnter: function () { return setHoverPath("/projects/academic"); }, "aria-label": "Global navigation drawer menu link to academic projects page." }),
                        react_1.default.createElement(SubdirectoryArrowRightTwoTone_1.default, null),
                        "academic"),
                    react_1.default.createElement(material_1.Button, __assign({ component: react_router_dom_1.Link, to: "/contact" }, muiButton_1.globalNavButtonProps, { sx: __assign(__assign({}, muiButton_1.globalNavButtonProps.sx), globalNavDrawerButtonStyles), onMouseEnter: function () { return setHoverPath("/contact"); }, "aria-label": "Global navigation drawer menu link to contact page." }),
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
var react_router_dom_1 = __webpack_require__(28651);
var ProjectBlock_1 = __importDefault(__webpack_require__(96757));
var project_list_1 = __webpack_require__(60803);
var SlideWrapper_1 = __importDefault(__webpack_require__(53655));
var constants_1 = __webpack_require__(70908);
var FadeWrapper_1 = __importDefault(__webpack_require__(57824));
var Personal = function (_a) {
    var imgQuality = _a.imgQuality;
    var containerRef = (0, react_1.useRef)(null);
    var theme = (0, material_1.useTheme)();
    var animationBreakpoint = (0, material_1.useMediaQuery)(theme.breakpoints.down(constants_1.ANI_CONST.PROJ_ROW_BREAKPOINT));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: containerRef },
            react_1.default.createElement(FadeWrapper_1.default, { delay: constants_1.ANI_CONST.PROJ_SUBHEADING_DELAY },
                react_1.default.createElement(material_1.Typography, { variant: "h4" }, "Personal_projects")),
            react_1.default.createElement(material_1.Grid, { container: true, spacing: 2, alignItems: "flex-start" }, project_list_1.ProjectList[project_list_1.ProjectCategories.PERSONAL].map(function (proj, i) {
                return (react_1.default.createElement(SlideWrapper_1.default, { slideFromRef: containerRef, delay: i * constants_1.ANI_CONST.PROJ_CARDS_DELAY, direction: animationBreakpoint ? "up" : "left" },
                    react_1.default.createElement(ProjectBlock_1.default, { proj: proj, imgQuality: imgQuality, key: i })));
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
var react_router_dom_1 = __webpack_require__(28651);
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
            react_1.default.createElement(material_1.Button, __assign({ key: "".concat(path.text), component: react_router_dom_1.Link, to: path.path }, muiButton_1.navLinkButtonProps, (0, hooks_1.bindHover)(popupState), { "aria-label": "Landing page navigation to ".concat(path.text, " page.") }), path.text),
            react_1.default.createElement(HoverMenu_1.default, __assign({}, (0, hooks_1.bindMenu)(popupState), { anchorOrigin: isMobile
                    ? { vertical: "top", horizontal: "right" }
                    : { vertical: "bottom", horizontal: "left" }, transformOrigin: { vertical: "top", horizontal: "left" } }), path.subpaths.map(function (subPath, i) {
                return (react_1.default.createElement(material_1.MenuItem, null,
                    react_1.default.createElement(material_1.Button, __assign({ key: "".concat(subPath.text, "-").concat(i), component: react_router_dom_1.Link, to: subPath.path }, muiButton_1.navLinkButtonProps, { "aria-label": "Landing page navigation dropdown sub-menu to ".concat(path.text, " ").concat(subPath.text, " page.") }), subPath.text)));
            })))) : (react_1.default.createElement(material_1.Button, __assign({ key: "".concat(path.text, "-").concat(index), component: react_router_dom_1.Link, to: path.path }, muiButton_1.navLinkButtonProps, { "aria-label": "Landing page navigation to ".concat(path.text, " page.") }), path.text))));
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
var ToggleThemeButtons_1 = __importDefault(__webpack_require__(44685));
var ToggleImageQualityButtons_1 = __importDefault(__webpack_require__(45242));
var react_toastify_1 = __webpack_require__(90701);
function CustomOptionsDial(_a) {
    var imgQuality = _a.imgQuality, setImgQuality = _a.setImgQuality;
    var _b = (0, material_1.useColorScheme)(), mode = _b.mode, systemMode = _b.systemMode, setMode = _b.setMode;
    var actions = [
        {
            icon: (React.createElement(ToggleImageQualityButtons_1.default, { imgQuality: imgQuality, setImgQuality: setImgQuality })),
            name: "Image Quality",
        },
        {
            icon: React.createElement(ToggleThemeButtons_1.default, { mode: mode, setMode: setMode }),
            name: "Theme Mode",
        },
    ];
    var theme = (0, material_1.useTheme)();
    var isMobile = (0, material_1.useMediaQuery)(theme.breakpoints.down("sm"));
    // Note: --speedDial-onboard is cleared after <App/> unmount
    //       to re-enable functionality, remove that line
    var _c = React.useState(function () {
        return !!localStorage.getItem("--speedDial-onboard");
    }), initialLoad = _c[0], setInitialLoad = _c[1];
    React.useEffect(function () {
        if (!initialLoad) {
            // first load
            react_toastify_1.toast.info("Customize your experience", {
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
var react_1 = __importDefault(__webpack_require__(96540));
var material_1 = __webpack_require__(8157);
var CarouselWrapper_1 = __importDefault(__webpack_require__(52308));
var CarouselPlaceholderCard_1 = __importDefault(__webpack_require__(89336));
var CarouselCard_1 = __importDefault(__webpack_require__(54091));
var PlaceholderCarousel = function (_a) {
    var proj = _a.proj, width = _a.width, height = _a.height, isMobile = _a.isMobile;
    var placeholders = [1, 2];
    return (react_1.default.createElement(CarouselWrapper_1.default, { height: height, navButtonsAlwaysVisible: isMobile ? true : false }, placeholders.map(function (item, i) { return (react_1.default.createElement(CarouselPlaceholderCard_1.default, { key: i, width: width, height: height, cardActionArea: proj.abbr })); })));
};
var ProjectCarouselCard = function (_a) {
    var proj = _a.proj, width = _a.width, height = _a.height, imgQuality = _a.imgQuality, isMobile = _a.isMobile;
    return (react_1.default.createElement(CarouselWrapper_1.default, { height: height, navButtonsAlwaysVisible: isMobile ? true : false }, proj.images.map(function (item, i) { return (react_1.default.createElement(CarouselCard_1.default, { key: i, item: item, width: width, height: height, cardActionArea: proj.abbr, imgQuality: imgQuality })); })));
};
var ProjectCarousel = function (props) {
    var proj = props.proj;
    var theme = (0, material_1.useTheme)();
    var isMobile = (0, material_1.useMediaQuery)(theme.breakpoints.down("sm"));
    return proj.images.length == 0 ? (react_1.default.createElement(PlaceholderCarousel, __assign({}, props, { isMobile: isMobile }))) : (react_1.default.createElement(ProjectCarouselCard, __assign({}, props, { isMobile: isMobile })));
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
var react_router_dom_1 = __webpack_require__(28651);
var ProjectBlock_1 = __importDefault(__webpack_require__(96757));
var project_list_1 = __webpack_require__(60803);
var SlideWrapper_1 = __importDefault(__webpack_require__(53655));
var constants_1 = __webpack_require__(70908);
var FadeWrapper_1 = __importDefault(__webpack_require__(57824));
var Academic = function (_a) {
    var imgQuality = _a.imgQuality;
    var containerRef = (0, react_1.useRef)(null);
    var theme = (0, material_1.useTheme)();
    var animationBreakpoint = (0, material_1.useMediaQuery)(theme.breakpoints.down(constants_1.ANI_CONST.PROJ_ROW_BREAKPOINT));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: containerRef },
            react_1.default.createElement(FadeWrapper_1.default, { delay: constants_1.ANI_CONST.PROJ_SUBHEADING_DELAY },
                react_1.default.createElement(material_1.Typography, { variant: "h4" }, "Academic_projects")),
            react_1.default.createElement(Grid_1.default, { container: true, spacing: 2, alignItems: "flex-start" }, project_list_1.ProjectList[project_list_1.ProjectCategories.ACADEMIC].map(function (proj, i) {
                return (react_1.default.createElement(SlideWrapper_1.default, { slideFromRef: containerRef, delay: i * constants_1.ANI_CONST.PROJ_CARDS_DELAY, direction: animationBreakpoint ? "up" : "left" },
                    react_1.default.createElement(ProjectBlock_1.default, { proj: proj, imgQuality: imgQuality, key: i })));
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
var react_router_dom_1 = __webpack_require__(28651);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var Cloudinary_1 = __importStar(__webpack_require__(55039));
var SlideWrapper_1 = __importDefault(__webpack_require__(53655));
var constants_1 = __webpack_require__(70908);
var FadeWrapper_1 = __importDefault(__webpack_require__(57824));
var react_toastify_1 = __webpack_require__(90701);
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
var Contact = function (_a) {
    var imgQuality = _a.imgQuality;
    var theme = (0, material_1.useTheme)();
    var animationBreakpoint = (0, material_1.useMediaQuery)(theme.breakpoints.down("sm"));
    var containerRef = (0, react_1.useRef)(null);
    var handleEmailClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, navigator.clipboard.writeText("angushon96@gmail.com")];
                case 1:
                    _a.sent();
                    react_toastify_1.toast.success("Copied email to clipboard.");
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error("Failed to copy email to clipboard: ".concat(err_1 instanceof Error && err_1.message));
                    react_toastify_1.toast.error("Failed to copy email to clipboard");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ScrollableContainer_1.default, { ref: containerRef },
            react_1.default.createElement(FadeWrapper_1.default, null,
                react_1.default.createElement(material_1.Typography, { variant: "h3" }, "Contact Info")),
            react_1.default.createElement(material_1.Grid, { container: true, spacing: 2, direction: { xs: "column", sm: "row" } }, info.map(function (item, i) {
                return (react_1.default.createElement(SlideWrapper_1.default, { slideFromRef: containerRef, delay: i * constants_1.ANI_CONST.CONTACT_BADGE_DELAY, direction: animationBreakpoint ? "up" : "left" },
                    react_1.default.createElement(material_1.Card, { key: i, sx: { width: "150px", height: "fit-content" } },
                        react_1.default.createElement(material_1.CardActionArea, { href: item.link, target: "_blank", rel: "noopener noreferrer", onClick: item.modal ? function () { return handleEmailClick(); } : undefined },
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
                                    .resize((0, resize_1.fit)(400, 400))
                                    .quality((0, Cloudinary_1.getDesiredQuality)(imgQuality)) }),
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
var react_router_dom_1 = __webpack_require__(28651);
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
function ToggleImageQualityButtons(_a) {
    var imgQuality = _a.imgQuality, setImgQuality = _a.setImgQuality;
    var handleToggleImgQuality = function (event, newImgQuality) {
        if (setImgQuality) {
            if (newImgQuality) {
                setImgQuality(newImgQuality);
                react_toastify_1.toast.success("Image quality: ".concat(newImgQuality));
            }
            else {
                setImgQuality("best");
                react_toastify_1.toast.success("Image quality: default (best)");
            }
        }
        else {
            // this should never happen b/c it's always passed as a prop
            console.error("setImgQuality was never passed as a prop");
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.ToggleButtonGroup, { value: imgQuality, exclusive: true, onChange: handleToggleImgQuality, "aria-label": "image quality toggle" },
            React.createElement(material_1.ToggleButton, { value: "low", "aria-label": "low image quality" },
                React.createElement(SdTwoTone_1.default, null)),
            React.createElement(material_1.ToggleButton, { value: "good", "aria-label": "good image quality" },
                React.createElement(HdTwoTone_1.default, null)),
            React.createElement(material_1.ToggleButton, { value: "best", "aria-label": "best image quality" },
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
                react_1.default.createElement(material_1.Button, __assign({ className: "Nav-link__no-events" }, muiButton_1.navLinkButtonProps, { sx: __assign({ paddingLeft: 0 }, muiButton_1.navLinkButtonProps.sx), "aria-label": "Styling emulating a terminal's command line blinking cursor for text input." }), "~$"),
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
var react_router_dom_1 = __webpack_require__(28651);
var material_1 = __webpack_require__(8157);
var computeNodeStyle_1 = __importDefault(__webpack_require__(91582));
var ScrollableContainer_1 = __importDefault(__webpack_require__(53751));
var FadeWrapper_1 = __importDefault(__webpack_require__(57824));
var constants_1 = __webpack_require__(70908);
var CarouselWrapper_1 = __importDefault(__webpack_require__(52308));
var CarouselPlaceholderCard_1 = __importDefault(__webpack_require__(89336));
var CarouselCard_1 = __importDefault(__webpack_require__(54091));
var styles = {
    modalBox: {
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
    },
};
function ProjectModalCarousel(_a) {
    var proj = _a.proj, imgQuality = _a.imgQuality;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var theme = (0, material_1.useTheme)();
    var isSmallScreen = (0, material_1.useMediaQuery)(theme.breakpoints.down("md"));
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
                    react_1.default.createElement(CarouselWrapper_1.default, { navButtonsAlwaysVisible: true }, proj.images.length >= 1
                        ? proj.images.map(function (item, i) { return (react_1.default.createElement(CarouselCard_1.default, { key: i, item: item, width: { width: { md: dims.width } }, height: dims.height, cardActionArea: false, imgQuality: imgQuality })); })
                        : [1, 2].map(function (i) { return (react_1.default.createElement(CarouselPlaceholderCard_1.default, { key: i, width: { width: { md: dims.width } }, height: dims.height, cardActionArea: false })); })))))));
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

/***/ 52308:
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
var react_material_ui_carousel_1 = __importDefault(__webpack_require__(31661));
var KeyboardArrowRightTwoTone_1 = __importDefault(__webpack_require__(50255));
var KeyboardArrowLeftTwoTone_1 = __importDefault(__webpack_require__(40082));
var CarouselWrapper = function (_a) {
    var children = _a.children, height = _a.height, navButtonsAlwaysVisible = _a.navButtonsAlwaysVisible;
    return (React.createElement(react_material_ui_carousel_1.default, { stopAutoPlayOnHover: true, fullHeightHover: true, autoPlay: false, interval: 5000, animation: "slide", indicators: true, navButtonsAlwaysVisible: navButtonsAlwaysVisible, height: height, NextIcon: React.createElement(KeyboardArrowRightTwoTone_1.default, null), PrevIcon: React.createElement(KeyboardArrowLeftTwoTone_1.default, null) }, children));
};
exports["default"] = CarouselWrapper;


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
var scroll_area_1 = __webpack_require__(72298);
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
var react_router_dom_1 = __webpack_require__(28651);
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

/***/ 54091:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __importStar(__webpack_require__(96540));
var material_1 = __webpack_require__(8157);
var react_1 = __webpack_require__(44387);
var resize_1 = __webpack_require__(16012);
var Cloudinary_1 = __importStar(__webpack_require__(55039));
var react_router_dom_1 = __webpack_require__(28651);
var constants_1 = __webpack_require__(70908);
var CardContent = function (props) {
    var item = props.item, width = props.width, height = props.height, imgQuality = props.imgQuality;
    var cld = Cloudinary_1.default;
    var theme = (0, material_1.useTheme)();
    var isMobile = (0, material_1.useMediaQuery)(theme.breakpoints.down("sm"));
    var imgWidth = isMobile ? width.width.xs : width.width.md;
    return (React.createElement(material_1.Box, { sx: __assign({ width: width }, constants_1.CarouselStyles.wrapperBox) },
        React.createElement(react_1.AdvancedImage, { cldImg: cld
                .image("portfolio/".concat(item.src))
                .resize((0, resize_1.fit)(imgWidth, height))
                .quality((0, Cloudinary_1.getDesiredQuality)(imgQuality)), plugins: [(0, react_1.placeholder)({ mode: "blur" }), (0, react_1.responsive)()] }),
        React.createElement(material_1.Box, { sx: __assign({}, constants_1.CarouselStyles.textOverlayBox) },
            React.createElement(material_1.Typography, { variant: "caption" }, item.description))));
};
var CarouselCard = function (props) {
    var height = props.height, cardActionArea = props.cardActionArea;
    var location = (0, react_router_dom_1.useLocation)();
    return (React.createElement(material_1.Card, { sx: __assign({ height: height }, constants_1.CarouselStyles.card) }, cardActionArea ? (React.createElement(material_1.CardActionArea, { component: react_router_dom_1.Link, to: cardActionArea, state: { background: location } },
        React.createElement(CardContent, __assign({}, props)))) : (React.createElement(CardContent, __assign({}, props)))));
};
exports["default"] = CarouselCard;


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
exports.getDesiredQuality = getDesiredQuality;
var url_gen_1 = __webpack_require__(99028);
var constants_1 = __webpack_require__(70908);
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
function getDesiredQuality(imgQuality) {
    return imgQuality ? constants_1.CldImgQuality[imgQuality] : constants_1.CldImgQuality.best;
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
var react_router_dom_1 = __webpack_require__(28651);
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
    var _a = (0, react_1.useState)("best"), imgQuality = _a[0], setImgQuality = _a[1];
    (0, react_1.useEffect)(function () {
        // clean up on unmount
        localStorage.removeItem("--grow-animatedOnLoad");
        localStorage.removeItem("--slide-animatedOnLoad");
        localStorage.removeItem("--speedDial-onboard");
    }, []);
    return (react_1.default.createElement(material_1.Box, { className: "App" },
        react_1.default.createElement(CustomOptionsDial, { imgQuality: imgQuality, setImgQuality: setImgQuality }),
        react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(Loading, null) },
            react_1.default.createElement(GlobalNav, null),
            react_1.default.createElement(material_1.Box, { className: location.pathname == "/" ? "Container" : "Container Container--open" },
                react_1.default.createElement(react_router_dom_1.Routes, { location: background || location },
                    react_1.default.createElement(react_router_dom_1.Route, { path: "", element: react_1.default.createElement(Landing, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "about", element: react_1.default.createElement(AboutMe, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "projects", element: react_1.default.createElement(Projects, null) },
                        react_1.default.createElement(react_router_dom_1.Route, { index: true, element: react_1.default.createElement(Selection, null) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: "personal", element: react_1.default.createElement(Personal, { imgQuality: imgQuality }) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: "personal/*", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: "/projects/personal", replace: true }) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: "academic", element: react_1.default.createElement(Academic, { imgQuality: imgQuality }) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: "academic/*", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: "/projects/academic", replace: true }) })),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "contact", element: react_1.default.createElement(Contact, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "default", element: react_1.default.createElement(Default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(DoesNotExist, null) })),
                background && (react_1.default.createElement(react_router_dom_1.Routes, null,
                    project_list_1.ProjectList.personal.map(function (proj, i) { return (react_1.default.createElement(react_router_dom_1.Route, { key: i, path: "projects/personal/".concat(proj.abbr), element: react_1.default.createElement(ProjectModalCarousel, { proj: proj, imgQuality: imgQuality }) })); }),
                    project_list_1.ProjectList.academic.map(function (proj, i) { return (react_1.default.createElement(react_router_dom_1.Route, { key: i, path: "projects/academic/".concat(proj.abbr), element: react_1.default.createElement(ProjectModalCarousel, { proj: proj, imgQuality: imgQuality }) })); })))))));
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
exports.CarouselStyles = exports.ANI_CONST = exports.CldImgQuality = void 0;
var GENERIC_CARD_DELAY = 400;
var GENERIC_WRAPPER_DELAY = 700;
exports.CldImgQuality = {
    low: "auto:low",
    good: "auto:good",
    best: "auto:best",
};
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
    PROJ_ROW_BREAKPOINT: 1340, // >= 1340px fits 3 cards
    PROJ_SUBHEADING_DELAY: 300, // same as WRAPPER_FADE_WRAPPER_DELAY
    PROJ_CARDS_DELAY: GENERIC_CARD_DELAY,
    PROJ_CARD_WIDTH: { xs: 300, sm: 325, md: 350, lg: 375, xl: 425 },
    // CONTACT
    CONTACT_BADGE_DELAY: GENERIC_CARD_DELAY,
    CONTACT_PORTRAIT_HEADING_DELAY: GENERIC_CARD_DELAY * 6,
    CONTACT_PORTRAIT_PIC_DELAY: GENERIC_CARD_DELAY * 6,
};
exports.CarouselStyles = {
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "5px",
    },
    wrapperBox: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
    },
    textOverlayBox: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        bgcolor: "rgba(0, 0, 0, 0.54)",
        color: "white",
        padding: "10px",
    },
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
    MuiCssBaseline: {},
};
exports["default"] = muiCssBaseline;


/***/ }),

/***/ 89336:
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
var React = __importStar(__webpack_require__(96540));
var react_router_dom_1 = __webpack_require__(28651);
var material_1 = __webpack_require__(8157);
var PhotoLibraryTwoTone_1 = __importDefault(__webpack_require__(53194));
var constants_1 = __webpack_require__(70908);
var PlaceholderCardContent = function (props) {
    var width = props.width, height = props.height;
    return (React.createElement(material_1.Box, { sx: __assign(__assign({}, width), constants_1.CarouselStyles.wrapperBox) },
        React.createElement(PhotoLibraryTwoTone_1.default, { sx: __assign(__assign({}, width), { height: height }) }),
        React.createElement(material_1.Box, { sx: __assign({}, constants_1.CarouselStyles.textOverlayBox) },
            React.createElement(material_1.Typography, { variant: "caption" }, "Photo not availble at the moment."))));
};
var CarouselPlaceholderCard = function (props) {
    var width = props.width, height = props.height, cardActionArea = props.cardActionArea;
    var location = (0, react_router_dom_1.useLocation)();
    return (React.createElement(material_1.Card, { sx: __assign({ height: height }, constants_1.CarouselStyles.card) }, cardActionArea ? (React.createElement(material_1.CardActionArea, { component: react_router_dom_1.Link, to: cardActionArea, state: { background: location } },
        React.createElement(PlaceholderCardContent, { width: width, height: height }))) : (React.createElement(PlaceholderCardContent, { width: width, height: height }))));
};
exports["default"] = CarouselPlaceholderCard;


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
var react_router_dom_1 = __webpack_require__(28651);
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
    var proj = _a.proj, imgQuality = _a.imgQuality;
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
            react_1.default.createElement(ProjectCarousel_1.default, { key: location.pathname, proj: proj, width: { width: cardDims.width }, height: 400, imgQuality: imgQuality })),
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [243,135,356,843,976,851,965,877,174,521,591,90,547,251,114,840,774,979,834,872,520,435,831,287,825,349,267,180,974,730], () => (__webpack_require__(53900)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;