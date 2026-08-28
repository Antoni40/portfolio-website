import Hero from "./components/sections/Hero";
import Container from "./components/layout-commons/Container";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <main className="flex justify-center w-full">
        <div className="w-full md:w-8/10 mt-8">
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
