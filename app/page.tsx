import Hero from "./components/sections/Hero";
import Container from "./components/layout/Container";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <main className="flex w-full justify-center">
        <div className="mt-8 w-full md:w-8/10">
          <Container>
            <Hero />
          </Container>
          <Container>
            <Projects />
          </Container>
          <Container>
            <Skills />
          </Container>
          <Container>
            <About />
          </Container>
          <Container>
            <Contact />
          </Container>
        </div>
      </main>
    </>
  );
}
