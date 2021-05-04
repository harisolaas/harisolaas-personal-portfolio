import React from "react";

interface Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
export type Reducer<State> = (state: State, action: Action) => State;

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

function useSafeReducer<State>(
  reducer: Reducer<State>,
  initialState: State
): [State, React.Dispatch<Action>] {
  const [state, unsafeDispatch] = React.useReducer(reducer, initialState);
  const dispatch = useSafeDispatch(unsafeDispatch);

  return [state, dispatch];
}

export { useSafeReducer };
