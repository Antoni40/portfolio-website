
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <section className="w-full flex bg-surface border-2 border-border rounded-lg p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}