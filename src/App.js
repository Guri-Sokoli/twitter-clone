import "./index.css";
import LeftSideBar from "./components/LeftSide/LeftSideBar";
import MiddleContentBar from "./components/MiddleSide/MiddleContentBar";
import RightWidgets from "./components/RightSide/RightWidgets";

function App() {
  return (
    <div className="flex min-h-screen">
      <LeftSideBar />
      <MiddleContentBar />
      <RightWidgets />
    </div>
  );
}

export default App;
