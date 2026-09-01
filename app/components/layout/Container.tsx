export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <section className="bg-surface border-border mb-4 flex w-full rounded-lg border p-6">
        <div>{children}</div>
      </section>
    </div>
  );
}
