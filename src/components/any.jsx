import React from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="Coins p-3">
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => {
          dispatch();
        }}
      >
        Primary
      </button>
    </div>
  );
};

export default App;
