import { useState, useEffect } from "react";
import logIcon from "../assets/images/logo.svg";
import DarkMoon from "../assets/images/icon-dark-moon.svg";
import moon from "../assets/images/icon-moon.svg";
type FontProps = {
  changeFont: (font: string) => void;
};
function Nav(props: FontProps) {
  const [theme, setTheme] = useState("light");

  useEffect(
    function () {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [theme]
  );

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let font: string = "";
    switch (e.target.options[e.target.options.selectedIndex].textContent) {
      case "Sans-serif":
        font = "font-sans";
        break;
      case "Serif":
        font = "font-serif";
        break;
      case "Mono":
        font = "font-mono";
        break;
      default:
        font = "font-sans";
    }
    props.changeFont(font);
  };
  return (
    <>
      <div className="flex justify-between self-center pt-4 items-center px-4 py-8">
        <div className="w-10 h-5">
          <img src={logIcon} alt="logo" />
        </div>
        <div className="flex justify-between items-center pt-4 ">
          <select
            name="fonts"
            id="fonts"
            className="bg-white dark:bg-primary-black dark:text-white"
            onChange={handleFontChange}
          >
            <option value="sans-selif">Sans-Serif</option>
            <option value="sans-selif">Serif</option>
            <option value="sans-selif">Mono</option>
          </select>
          <div className="flex justify-between ml-4 border-l-2 pl-4 border-slate-200">
            <button className="mr-4 outline-none" onClick={handleThemeChange}>
              {theme === "light" ? (
                <svg
                  width="40"
                  height="20"
                  viewBox="0 0 40 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="20" rx="10" fill="#757575" />
                  <circle cx="10" cy="10" r="7" fill="white" />
                </svg>
              ) : (
                <svg
                  width="40"
                  height="20"
                  viewBox="0 0 40 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="20" rx="10" fill="#A445ED" />
                  <circle cx="30" cy="10" r="7" fill="white" />
                </svg>
              )}
            </button>
            {theme === "dark" ? (
              <img src={DarkMoon} alt="dark moon" />
            ) : (
              <img src={moon} alt="moon icon" />
            )}
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default Nav;
