import { createContext, Dispatch, useContext, useReducer } from "react";

type HoverAction =
  | { type: "onPath"; path: string | undefined }
  | { type: "onCommand"; command: string | undefined }
  | { type: "default" };

const initialState = {
  path: undefined,
  command: undefined,
};

function hoverReducer(state: React.ComponentState, action: HoverAction) {
  switch (action.type) {
    case "onPath": {
      return {
        ...state,
        path: action.path,
        command: undefined,
      };
    }
    case "onCommand": {
      return {
        ...state,
        path: undefined,
        command: action.command,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

const HoverContext = createContext(initialState);
const HoverDispatchContext = createContext<Dispatch<HoverAction> | null>(null);

export function useHover() {
  return useContext(HoverContext);
}

export function useHoverDispatch() {
  const dispatchContext = useContext(HoverDispatchContext);
  if (dispatchContext === null) {
    throw new Error("HoverPathDispatchContext is null but it is required.");
  }
  return dispatchContext;
}

const HoverProvider = ({ children }: { children: React.ReactNode }) => {
  const [path, dispatch] = useReducer(hoverReducer, initialState);

  return (
    <HoverContext.Provider value={path}>
      <HoverDispatchContext.Provider value={dispatch}>
        {children}
      </HoverDispatchContext.Provider>
    </HoverContext.Provider>
  );
};

export default HoverProvider;
