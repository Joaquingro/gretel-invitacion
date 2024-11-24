import { Suspense } from "react";
import "./App.css";
import LayoutInvitation from "./pages/Invitation/LayoutInvitation";

function App() {
  return (
    <Suspense>
      <LayoutInvitation />
    </Suspense>
  );
}

export default App;
