import Nav from "./components/nav";
import { Main } from "./components/main";
import { useState } from "react";
function App() {
  const [font, setFont] = useState("font-sans");
  return (
    <>
      <div className={`${font} bg-white dark:bg-primary-black h-screen`}>
        <Nav changeFont={setFont} />
        <Main />
      </div>
    </>
  );
}

export default App;
