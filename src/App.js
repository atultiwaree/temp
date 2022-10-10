import { useState } from "react";
import { useDispatch } from "react-redux";
import action from "./redux/action";
import { useSelector } from "react-redux";
const App = () => {
  const [state, setState] = useState();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  return (
    <div className="container">
      {console.log(selector)}
      <div className="left">
        <input
          type="text"
          onChange={(e) => setState(e.target.value)}
          name="text"
          id=""
        />
        <button onClick={() => dispatch(action(state))}>Add task</button>
      </div>
      <div className="right">
        <h2>All tasks🔻 </h2>
        <ul>
          {selector.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
