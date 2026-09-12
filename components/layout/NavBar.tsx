"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

import Button from "../ui/Button";
import ButtonLink from "../ui/ButtonLink";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menu = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    function outOfMenuClick(event: PointerEvent) {
      !menu.current?.contains(event.target as Node) &&
        setIsMobileMenuOpen(false);
    }
    document.addEventListener("pointerdown", outOfMenuClick);
    return () => {
      document.removeEventListener("pointerdown", outOfMenuClick);
    };
  }, [isMobileMenuOpen]);

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <>
      <nav
        ref={menu}
        className="bg-surface border-border relative border-b p-4"
      >
        <div className="hidden w-full items-center justify-between md:flex">
          <div>
            <ButtonLink text="Antek Lubomski" href="./" variant="brand" />
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <ButtonLink text="Projekty" href="#projekty" variant="text" />
              </li>
              <li>
                <ButtonLink text="O mnie" href="#o-mnie" variant="text" />
              </li>
              <li>
                <ButtonLink text="Kontakt" href="#kontakt" variant="text" />
              </li>
              <li>
                <Button
                  aria-label="Zmień motyw"
                  variant="borderless"
                  onClickHandler={toggleTheme}
                >
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
        <div className="flex w-full items-center justify-between md:hidden">
          <div>
            <ButtonLink text="Antek" href="./" variant="brand" />
          </div>
          <div>
            <Button
              aria-label="Otwórz menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              variant="borderless"
              onClickHandler={() => {
                setIsMobileMenuOpen((prev) => !prev);
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </div>
          {isMobileMenuOpen && (
            <div
              className="absolute inset-x-0 top-full z-20"
              onBlur={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              <ul
                id="mobile-menu"
                className="border-border bg-surface flex items-center justify-between gap-4 border-t border-b p-4"
              >
                <li>
                  <ButtonLink
                    text="Projekty"
                    href="#projekty"
                    variant="text"
                    onClickHandler={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  />
                </li>
                <li>
                  <ButtonLink
                    text="O mnie"
                    href="#o-mnie"
                    variant="text"
                    onClickHandler={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  />
                </li>
                <li>
                  <ButtonLink
                    text="Kontakt"
                    href="#kontakt"
                    variant="text"
                    onClickHandler={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  />
                </li>
                <li>
                  <Button
                    aria-label="Zmień motyw"
                    variant="borderless"
                    onClickHandler={toggleTheme}
                  >
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
          )}
        </div>
      </nav>
    </>
  );
}
