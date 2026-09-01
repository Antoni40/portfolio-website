//temporary
"use client";

import Image from "next/image";

import ButtonLink from "../ui/ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <>
      <section id="hero"
        className="grid w-full items-center justify-items-center gap-12 md:grid-cols-2"
      >
        <div>
          <div className="flex flex-col gap-1 w-full">
            <p className="text-primary font-16">Cześć,</p>
            <h1 className="text-5xl font-bold">Jestem Antek.</h1>
            <p className="text-text-secondary">
              Projekty, umiejętności i kilka słów o mnie.
            </p>
          </div>
          <div className="mt-8 mb-12">
            <p className="text-pretty w-8/10">
              Rozwijam się w kierunku programowania i tworzenia stron internetowych. 
              Na tej stronie znajdziesz moje projekty, umiejętności oraz informacje o mnie. 
              Jeśli masz pytanie lub propozycję współpracy zapraszam do kontaktu.
            </p>
          </div>

          <div>
            <div className="mb-4 flex gap-4">
              <ButtonLink
                href="#projekty"
                text="Zobacz projekty"
                variant="primary"
              />
              <ButtonLink href="#kontakt" text="Kontakt" variant="secondary" />
            </div>
            <div className="flex">
              <ButtonLink
                text="GitHub"
                href="https://github.com/Antoni40"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                <FontAwesomeIcon icon={faGithub} />
              </ButtonLink>
            </div>
          </div>
        </div>
        <div>
          <div className="border-border aspect-square w-full overflow-hidden rounded-lg border">
            <Image
              src="/images/profile.webp"
              width={1600}
              height={1600}
              alt="Moje zdjęcie"
              sizes="(max-width: 768px) 100vw, 50vw"
              preload
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
