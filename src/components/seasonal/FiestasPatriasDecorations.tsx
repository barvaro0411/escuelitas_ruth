export default function FiestasPatriasDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden sm:block" aria-hidden="true">
      <svg className="fiestas-kite absolute right-[4%] top-[24%] h-24 w-24 opacity-85 lg:right-[2%] lg:top-[20%] lg:h-28 lg:w-28" viewBox="0 0 120 150">
        <path d="M60 8 108 56 60 103 12 56Z" fill="#fff8ed" stroke="#f7c948" strokeWidth="3" />
        <path d="M60 8v95L12 56Z" fill="#2450a4" />
        <path d="m60 8 48 48-48 47Z" fill="#d52b1e" />
        <path d="M60 103c12 10-8 15 5 24s-4 12 8 20" fill="none" stroke="#fff8ed" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <svg className="fiestas-handkerchief absolute bottom-[9%] left-[48%] h-16 w-20 opacity-70" viewBox="0 0 100 70">
        <path d="M10 48C30 5 58 20 88 8c-8 27-26 48-68 54Z" fill="#fff" stroke="#dbe3f2" strokeWidth="2" />
        <path d="M20 53c22-8 38-20 58-36" fill="none" stroke="#8da5d1" strokeWidth="2" strokeDasharray="4 5" />
      </svg>
    </div>
  );
}
