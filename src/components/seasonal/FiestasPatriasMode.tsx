import type { ReactNode } from "react";

export default function FiestasPatriasMode({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="fiestas-only">{children}</div>;
}
