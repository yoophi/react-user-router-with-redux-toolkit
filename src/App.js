import { useReducer } from "react";
import "./App.css";
import { createSlice } from "@reduxjs/toolkit";

const counterState = {
  username: null,
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  reducers: {
    decrease: (state, action) => {
      state.count -= 1;
    },
    increase: (state, action) => {
      state.count += 1;
    },
    setUsername: (state, action) => {
      state.username = action.payload.username;
    },
  },
  initialState: counterState,
});

const { increase, decrease, setUsername } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

function App() {
  const [state, dispatch] = useReducer(counterReducer, counterState);

  return (
    <div className="App">
      <pre style={{ textAlign: "left", padding: "1em" }}>
        {JSON.stringify({ state }, null, 2)}
      </pre>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <input
        type="text"
        value={state.username}
        onChange={(e) => {
          dispatch(setUsername({ username: e.target.value }));
        }}
      />
    </div>
  );
}

export default App;
