export default function About() {
  return (
    <section id="o-mnie">
      <div className="flex flex-col gap-1 w-full">
        <p className="text-primary font-16">Trochę gadania.</p>
        <h1 className="text-4xl font-bold">O mnie</h1>
        <p className="text-text-secondary">
          Kim jestem i czym się zajmuję, a także co lubię robić w wolnym czasie.
        </p>
      </div>
      <div className="my-4">
        <p className="text-pretty">
          Obecnie chodzę do technikum na kierunku technik programista. Uczę się w zakresie programowania różnych aplikacji i pisania algorytmów. 
          Lubię rozwiązywać problemy i szybko adaptuję się do nich. W wolnych chwilach jestem aktywny lubię ćwiczyć siłowo i biegać.
        </p>
      </div>
    </section>
  );
}
