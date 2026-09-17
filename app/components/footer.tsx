export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-around w-full mt-20 py-16 text-sm bg-slate-50 text-gray-800/70">
      <p className="mt-4 text-center">
        Copyright © 2026 <a href="https://prebuiltui.com">Unicar</a>. All rights
        reservered.
      </p>
      <div className="flex items-center gap-4 mt-6">
        <a
          href="#"
          className="font-medium text-gray-800 hover:text-black transition-all"
        >
          Built by Nathan Parchment
        </a>
        <div className="h-4 w-px bg-black/20"></div>
        <a
          href="#"
          className="font-medium text-gray-800 hover:text-black transition-all"
        >
          Trademark Policy
        </a>
      </div>
    </footer>
  );
}
