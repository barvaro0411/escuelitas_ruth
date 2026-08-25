const flags = [
  "#d52b1e",
  "#ffffff",
  "#2450a4",
  "#ffffff",
  "#d52b1e",
  "#2450a4",
  "#ffffff",
  "#d52b1e",
  "#2450a4",
];

export default function ChileanBunting({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 900 70"
        className="h-auto w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 12 Q225 52 450 25 T900 14"
          fill="none"
          stroke="#f1d4a5"
          strokeWidth="3"
        />
        {flags.map((color, index) => {
          const x = index * 108 + 18;
          const y = 18 + (index % 3) * 8;
          return (
            <path
              key={`${color}-${index}`}
              d={`M${x} ${y} L${x + 42} ${y + 5} L${x + 18} ${y + 45} Z`}
              fill={color}
              stroke={color === "#ffffff" ? "#d9dce3" : "rgba(255,255,255,.25)"}
              className="fiestas-bunting-flag"
              style={{
                animationDelay: `${index * -0.35}s`,
                transformOrigin: `${x}px ${y}px`,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
