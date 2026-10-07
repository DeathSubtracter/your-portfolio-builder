import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type RouteTo = ComponentProps<typeof Link>["to"];

export function MinecraftButton({ children, to, className = "", onClick, disabled, external }: { children: ReactNode; to?: RouteTo; className?: string; onClick?: () => void; disabled?: boolean; external?: string }) {
  const classes = `mc-button ${className}`;
  if (to) return <Link to={to} className={classes}>{children}</Link>;
  if (external) return <a href={external} target="_blank" rel="noreferrer" className={classes}>{children}</a>;
  return <button type="button" className={classes} onClick={onClick} disabled={disabled}>{children}</button>;
}