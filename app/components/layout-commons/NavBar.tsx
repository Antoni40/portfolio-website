'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import Link from "next/dist/client/link";

export default function NavBar() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    const isSystemDarkMode = localStorage.getItem("theme") == null && 
     window.matchMedia("(prefers-color-scheme: dark)").matches;

    if(isDarkMode || isSystemDarkMode) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  return (
    <>
    <nav className="bg-surface border-b-4 border-border p-4">
      <div className="hidden md:flex w-full items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Antek Lubomski</h1>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li><Link href="#projekty">Projekty</Link></li>
            <li><Link href="#o-mnie">O mnie</Link></li>
            <li><Link href="#kontakt">Kontakt</Link></li>
            <li>
              <Button text="" variant="borderless" onClick={() => {
                  document.documentElement.classList.toggle("dark");
                  setIsDarkMode((prev) => !prev);
                  localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
              }}>
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden flex w-full items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Antek</h1>
        </div>
        <div>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
    </>
  );
}