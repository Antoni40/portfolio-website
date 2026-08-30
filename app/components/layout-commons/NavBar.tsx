'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import Link from "next/dist/client/link";

export default function NavBar() {

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
                  const isDark = document.documentElement.classList.toggle("dark");
                  localStorage.setItem("theme", isDark ? "dark" : "light");
              }}>
                <span className="hidden dark:inline">
                  <FontAwesomeIcon icon={faSun} />
                </span>
                <span className="dark:hidden">
                  <FontAwesomeIcon icon={faMoon} />
                </span>
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