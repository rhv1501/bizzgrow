export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center">
      <div className="w-20 h-20 bg-[#FFD500] border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-spin rounded-2xl mb-8"></div>
      <span className="text-gray-900 font-black text-2xl uppercase tracking-widest animate-pulse">Loading...</span>
    </div>
  );
}
