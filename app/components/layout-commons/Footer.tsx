export default function Footer() {
  return (
    <footer className="mt-auto bg-surface text-text-secondary p-4 ">
      <div className="mx-auto">
        <p>&copy; {new Date().getFullYear()} Moja strona portfolio. Wszystkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}