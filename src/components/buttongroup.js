// import { incact } from "../redux/incs/incredact";
// import { decact } from "../redux/decs/decact";

import { incact } from "../redux/action";
import { decact } from "../redux/action";

import { useDispatch } from "react-redux";

export const Buttons = () => {
  const dispatcher = useDispatch();

  const increase = () => {
    console.log("increased");
    const value = incact();
    dispatcher(value);
  };

  const decrease = () => {
    console.log("decreased");
    const value = decact();
    dispatcher(value);
  };

  return (
    <div className="fuckingbuttons">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};
