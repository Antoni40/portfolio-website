export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <section className="bg-surface border-border flex w-full rounded-lg border p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>{children}</div>
        </div>
      </section>
    </div>
  );
}
