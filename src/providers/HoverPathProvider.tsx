import { createContext, Dispatch, useContext, useReducer } from "react";

const initialPath = {
  path: "",
};

type HoverPathAction = { type: "onHover"; path: string } | { type: "default" };

function hoverPathReducer(
  state: React.ComponentState,
  action: HoverPathAction
) {
  switch (action.type) {
    case "onHover": {
      return {
        ...state,
        path: action.path,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}

const HoverPathContext = createContext(initialPath);
const HoverPathDispatchContext =
  createContext<Dispatch<HoverPathAction> | null>(null);

export function useHoverPath() {
  return useContext(HoverPathContext);
}

export function useHoverPathDispatch() {
  const dispatchContext = useContext(HoverPathDispatchContext);
  if (dispatchContext === null) {
    throw new Error("HoverPathDispatchContext is null but it is required.");
  }
  return dispatchContext;
}

const HoverPathProvider = ({ children }: { children: React.ReactNode }) => {
  const [path, dispatch] = useReducer(hoverPathReducer, initialPath);

  return (
    <HoverPathContext.Provider value={path}>
      <HoverPathDispatchContext.Provider value={dispatch}>
        {children}
      </HoverPathDispatchContext.Provider>
    </HoverPathContext.Provider>
  );
};

export default HoverPathProvider;
