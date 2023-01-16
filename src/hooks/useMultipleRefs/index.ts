import { useRef, useMemo } from "react";

type Args = {
  countRefs: number;
};

type SetRefArgs<T> = {
  index: number;
  node: T | null;
};

export const useMultipleRefs = <T extends HTMLElement>({ countRefs }: Args) => {
  const initialRefs = useMemo(
    () => new Array(countRefs).fill(null),
    [countRefs]
  );

  const refs = useRef<Array<T | null>>(initialRefs);

  const setRef = ({ index, node }: SetRefArgs<T>) => {
    refs.current[index] = node;
  };

  return [refs.current, setRef] as const;
};
