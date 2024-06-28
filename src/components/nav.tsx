import { useState, useEffect } from "react";
import logIcon from "../assets/images/logo.svg";

import moon from "../assets/images/icon-moon.svg";
function Nav() {
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
          >
            <option value="sans-selif">Sans-Selif</option>
            <option value="sans-selif">Selif</option>
            <option value="sans-selif">Monospace</option>
          </select>
          <div className="flex justify-between ml-4 border-l-2 pl-4 border-slate-200">
            <button className="mr-4" onClick={handleThemeChange}>
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
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z"
                  stroke="#A445ED"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
