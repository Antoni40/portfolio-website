export default function Footer() {
  return (
    <footer className="bg-surface text-text-secondary mt-2 mb-auto p-6 text-center">
      <div className="mx-auto">
        <p>
          &copy; {new Date().getFullYear()} Moja strona portfolio. Wszystkie
          prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
