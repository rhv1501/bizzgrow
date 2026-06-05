import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-primary flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center max-w-2xl w-full">
        <h1 className="text-7xl md:text-[10rem] font-black text-gray-900 mb-4 tracking-tighter leading-none">404</h1>
        <div className="inline-block bg-[#FFD500] px-6 py-2 border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2 mb-8">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase">You Broke It.</h2>
        </div>
        <p className="text-lg md:text-xl font-bold text-gray-700 mb-10">
          Just kidding. But the page you're looking for doesn't exist or has been moved. Let's get you back to safety.
        </p>
        <Link href="/" className="btn-primary inline-flex text-lg px-8 py-4">
          Take Me Home
        </Link>
      </div>
    </main>
  );
}
