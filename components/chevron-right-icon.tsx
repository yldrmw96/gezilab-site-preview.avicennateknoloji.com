import { cn } from "@lib/utils"

export default function ChevronRightCustomIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className={cn("injected-svg", props.className)} data-src="https://cdn.hugeicons.com/icons/arrow-right-01-stroke-standard.svg" >
      <path d="M9.00005 6L15 12L9 18" stroke="currentColor" strokeWidth={3} strokeMiterlimit={16} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}