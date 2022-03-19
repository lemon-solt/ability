import logo from "./logo.png";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "./reducks/store/store";
import { signIInAction } from "./reducks/users/actions";
import { useCallback } from "react";

function App() {
  const dispatch = useDispatch();
  const selecter = useSelector((state: ReducerType) => state);
  const user = selecter.users;

  const handler = useCallback(
    () => dispatch(signIInAction({ uid: "「う。。。。。」", username: "う" })),
    [dispatch]
  );

  console.log("selec: ", user);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>トラックの運転手がはなしかけてきた！！</p>
        <p>運転手「よかったら、おにぎり　くう？」</p>

        <div>
          <p>{user.uid && <>自分 {user.uid}</>}</p>
        </div>

        <button onClick={handler}>たべる</button>
        <button>ことわる</button>
      </header>
    </div>
  );
}

export default App;
