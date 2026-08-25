import { Sparkles } from "lucide-react";

export default function FiestasPatriasBanner() {
  return (
    <div className="relative overflow-hidden border-b border-white/20 bg-[#b4232e] text-white">
      <div
        className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:14px_14px]"
        aria-hidden="true"
      />
      <p className="relative mx-auto flex min-h-8 max-w-7xl items-center justify-center gap-2 px-3 py-1.5 text-center text-[11px] font-extrabold leading-tight tracking-wide sm:text-xs">
        <Sparkles
          className="hidden h-3.5 w-3.5 shrink-0 text-accent-on-dark sm:block"
          aria-hidden="true"
        />
        <span className="sm:hidden">
          ¡Tiki Tiki Tiii! · Consulta cupos 2027
        </span>
        <span className="hidden sm:inline">
          Septiembre en Escuelitas Ruth · ¡Tiki Tiki Tiii! · Consulta cupos 2027
        </span>
        <Sparkles
          className="hidden h-3.5 w-3.5 shrink-0 text-accent-on-dark sm:block"
          aria-hidden="true"
        />
      </p>
    </div>
  );
}
