import { Habits } from "./components/Habits";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Habits completed={12} />
    </div>
  );
}

export default App;
