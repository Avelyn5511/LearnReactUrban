import Main from "../src/components/Main/Main.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import ThemeToggle from "./components/Theme/ThemeToggle.tsx";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ThemeToggle />
    </>
  );
}

export default App;
