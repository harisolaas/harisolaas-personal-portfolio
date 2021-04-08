import { Dispatch, useCallback, useEffect, useReducer, useRef } from "react";

interface Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
export type Reducer<State> = (state: State, action: Action) => State;

function useSafeDispatch(dispatch: Dispatch<Action>) {
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  return useCallback(
    (action) => (mounted.current ? dispatch(action) : void 0),
    [dispatch]
  );
}

function useSafeReducer<State>(
  reducer: Reducer<State>,
  initialState: State
): [State, Dispatch<Action>] {
  const [state, unsafeDispatch] = useReducer(reducer, initialState);
  const dispatch = useSafeDispatch(unsafeDispatch);

  return [state, dispatch];
}

export { useSafeReducer };
