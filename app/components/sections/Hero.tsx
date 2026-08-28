//temporary
"use client";

import Link from "next/link";
import ButtonLink from "../ui/ButtonLink";

export default function Hero() {
  return (
    <>
      <div>
        <p className="text-primary font-16">Cześć, jak leci?</p>
        <h1 className="text-4xl font-bold">Moje portfolio.</h1>
        <p className="text-text-secondary">Projekty, umięjętności i droga w tworzeniu oprogramowania.</p>
      </div>
      <div className="my-4">
        <p>Witam cię serdecznie na mojej stronie internetowej, mam na imię Antek i w skrócie ta strona jest moją wizytówką dotyczącą informatyki i programowania. Poniżej znajdziesz moje zrealizowane projekty, umiejętności i ważne informacje o mnie. Miłego czytania.</p> 
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ButtonLink 
          href="#projects" text="Zobacz projekty" variant="primary"/>
        <ButtonLink 
          href="#contact" text="Kontakt" variant="secondary"/>
        <Link href="https://github.com/Antoni40" 
          className="text-primary font-bold underline hover:text-primary-hover"
          target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
      </div>
    </>
  );
}