'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";

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
            <li>Projekty</li>
            <li>O mnie</li>
            <li>Kontakt</li>
            <li>
              <Button text="" variant="borderless" onClick={() => {
                
              }}>
                <FontAwesomeIcon icon={faSun} />
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