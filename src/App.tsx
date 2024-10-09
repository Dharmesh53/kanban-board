import "./App.css";
import { GroupingProvider } from "./contexts/grouping.context";
import { OrderingProvider } from "./contexts/ordering.context";
import Home from "./pages/home";

function App() {
  return (
    <GroupingProvider>
      <OrderingProvider>
        <Home />
      </OrderingProvider>
    </GroupingProvider>
  );
}

export default App;
