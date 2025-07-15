import { cn } from "@lib/utils";

const textVariants = {
  default: {
    classes: "text-gray-600",
    component: "p",
  },
  handwriting: {
    classes: "text-2xl text-primary font-bold",
    component: "h3",
  },
  heading: {
    classes: "text-lg text-gray-600 font-[family-name:var(--font-nunito)] tracking-tight ",
    component: "h1",
  },
  title: {
    classes: " tracking-tight font-bold",
    component: "h4",
  },
  subheading: {
    classes: "text-2xl tracking-tight font-bold",
    component: "h2",
  },
  paragraph: {
    classes: "opacity-70",
    component: "p",
  },
  paragraph2: {
    classes: "leading-relaxed text-balance tracking-tight",
    component: "p",
  },
  paragraphProminent: { 
    classes: "font-bold",
    component: "p",
  },
} as const;

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof textVariants;
}

export default function Text({ children, className, variant = "default", ...props }: TextProps) {
  const { classes, component: Component } = textVariants[variant];
  return <Component className={cn(classes, className)} {...props}>{children}</Component>
}

