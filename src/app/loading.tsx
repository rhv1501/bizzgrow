export default function Loading() {
  return (
    <div className="fixed inset-0 bg-surface z-[100] flex flex-col items-center justify-center">
      <div className="w-20 h-20 bg-brand-secondary border border-border shadow-md animate-spin rounded-2xl mb-8"></div>
      <span className="text-foreground font-black text-2xl uppercase tracking-widest animate-pulse">
        Loading...
      </span>
    </div>
  );
}
