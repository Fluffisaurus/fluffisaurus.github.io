import theme from "../mui/theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Viewport,
  MuiBreakpointDimension,
} from "../components/styled/constants";

interface Breakpoints {
  mobile: boolean;
  tablet: boolean;
  laptop: boolean;
  desktop: boolean;
  bigboi: boolean;
}

const getBreakpoints = () => {
  const bp: Breakpoints = {
    mobile: useMediaQuery(theme.breakpoints.down("tablet")),
    tablet: useMediaQuery(theme.breakpoints.between("tablet", "laptop")),
    laptop: useMediaQuery(theme.breakpoints.between("laptop", "desktop")),
    desktop: useMediaQuery(theme.breakpoints.between("desktop", "bigboi")),
    bigboi: useMediaQuery(theme.breakpoints.up("bigboi")),
  };
  return bp;
};

const getViewport = () => {
  const bp = getBreakpoints();
  const checkSum =
    Number(bp.mobile) +
    Number(bp.tablet) +
    Number(bp.laptop) +
    Number(bp.desktop) +
    Number(bp.bigboi);
  if (checkSum > 1 || checkSum == 0) {
    console.error("Error in evaluating viewport breakpoints: ", bp);
    return null;
  } else {
    if (bp.mobile) return Viewport.mobile;
    if (bp.tablet) return Viewport.tablet;
    if (bp.laptop) return Viewport.laptop;
    if (bp.desktop) return Viewport.desktop;
    if (bp.bigboi) return Viewport.bigboi;

    return undefined; // should never happen w/ checkSum check
  }
};

function isSmallScreen(): boolean {
  return useMediaQuery(theme.breakpoints.down("tablet"));
}

function getDimsFromViewport(dim: MuiBreakpointDimension) {
  const view = getViewport();
  switch (view) {
    case Viewport.mobile:
      return dim[Viewport.mobile];
    case Viewport.tablet:
      return dim[Viewport.tablet];
    case Viewport.laptop:
      return dim[Viewport.laptop];
    case Viewport.desktop:
      return dim[Viewport.desktop];
    case Viewport.bigboi:
      return dim[Viewport.bigboi];
    default:
      // catches null or undefined
      return dim[Viewport.mobile];
  }
}

function resolveDimensionValue(dim: number | MuiBreakpointDimension) {
  return typeof dim == "number" ? dim : getDimsFromViewport(dim);
}

export { isSmallScreen };
export default resolveDimensionValue;
