import Nav from "./components/nav";
import { Main } from "./components/main";
function App() {
  return (
    <>
      <div className="font-mono bg-white dark:bg-primary-black h-screen">
        <Nav />
        <Main />
      </div>
    </>
  );
}

export default App;
