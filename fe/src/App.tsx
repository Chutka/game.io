import React, { useLayoutEffect, useRef } from "react";
import { createGame } from "./game";

const App: React.FC = () => {
  const initialized = useRef(false);
  const elRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = elRef.current;
    if (!el || initialized.current) return;

    createGame(el);

    initialized.current = true;
  }, []);

  return <div ref={elRef} className="game" />;
};

export default App;
