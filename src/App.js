import { useState } from "react";
import "./App.css"; // --> ES6, version của JavaScript
import { Button } from "antd";
import Display from "./components/display/Display";
import Summary from "./components/summary/Summary";
import ParentToChild from "./components/lesson7/ParentToChild";
import ChildToParent from "./components/lesson7/ChildToParent";
import ChildToChild from "./components/lesson7/ChildToChild";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./components/lesson7-assignment/home-page/HomePage";

export default function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    console.log("ADD");
    const newCount = count + 1;
    setCount(newCount);
  }

  const handleSubtract = () => {
    console.log("SUBTRACT");
    const newCount = count - 1;
    setCount(newCount);
  };

  const isDisabled = count === 0;

  return (
    // thêm giao diện --> JSX
    // Bản chất --> JS object --> lúc code thì nhìn giống HTML
    <div className="App">
      {/* <p className={`${isDisabled ? "disabled" : "count"}`}>Count: {count}</p> */}
      {/* <Display data={count} disabled={isDisabled} />
      <Button onClick={handleAdd} type="primary">ADD</Button>
      <Button disabled={isDisabled} onClick={handleSubtract} type="dashed">SUBTRACT</Button> */}
      {/* <Summary /> */}
      {/* <ParentToChild /> */}
      {/* <ChildToParent /> */}
      {/* <ChildToChild /> */}
      {/* <Navigation /> */}
      <HomePage/>
    </div>
  );
}