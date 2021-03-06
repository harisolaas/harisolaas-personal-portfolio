import React from "react";
import { debounce } from "./index";

function useResponsiveWidth(
  componentRef: React.MutableRefObject<HTMLElement>
): number {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const debouncedSetWidth = debounce(() => {
      if (componentRef.current) {
        setWidth(componentRef.current.offsetWidth);
      }
    }, 100);
    setWidth(componentRef.current.offsetWidth);
    window.addEventListener("resize", debouncedSetWidth);
  }, [componentRef]);

  return width;
}

interface Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
function useSafeDispatch(dispatch: React.Dispatch<Action>) {
  const mounted = React.useRef(false);
  React.useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  return React.useCallback(
    (action) => (mounted.current ? dispatch(action) : void 0),
    [dispatch]
  );
}

export type Reducer<State> = (state: State, action: Action) => State;
function useSafeReducer<State>(
  reducer: Reducer<State>,
  initialState: State
): [State, React.Dispatch<Action>] {
  const [state, unsafeDispatch] = React.useReducer(reducer, initialState);
  const dispatch = useSafeDispatch(unsafeDispatch);

  return [state, dispatch];
}

export { useResponsiveWidth, useSafeReducer };
