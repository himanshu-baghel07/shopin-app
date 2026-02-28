export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl backdrop-brightness-25 bg-white/20 border-b border-gray-600 shadow-sm ">
      <div className=" mx-auto px-4 py-4">
        <a href="/" className="text-2xl font-bold text-white">
          Shop<span className="text-red-400 text-2xl">In</span>
        </a>
      </div>
    </header>
  );
}
