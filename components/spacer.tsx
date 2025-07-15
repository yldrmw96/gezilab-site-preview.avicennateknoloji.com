import { cn } from "@lib/utils";
import styles from "@styles/spacer.module.css";

export default function Spacer({ className }: { className?: string }) {
  return <hr className={cn(className, styles.spacer_vertical)} />;
}

export function SpacerX({ size }: { size: number }) {
  const sizeClass = size ? `--spacer-spacing: ${size}rem` : "";
  return <div className={cn("w-spacer-spacing", sizeClass)} />;
}