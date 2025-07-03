import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ClockIcon, MapPinIcon, StarIcon, UsersIcon } from "lucide-react";

type TurCardProps = {

  href?: string,
  imageData: {
    src?: string,
    alt: string
  },
  location: string,
  rating: number,
  title: string,
  duration: string,
  participants: number
} 

function TurCard(
  {
    href,
    imageData,
    location,
    rating,
    title,
    duration,
    participants,
  }: TurCardProps) {

  return (
    <TurLinkWrapper href={href}>
      <Card className="group rounded-4xl overflow-hidden transition-all duration-300 hover:-translate-y-1 !p-0 shadow-none border-none cursor-pointer shining-card-capturer">
        <CardContent className="!p-0 relative h-[220px] overflow-hidden rounded-4xl">
          <TurImage 
            src={imageData.src} 
            alt={imageData.alt } 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </CardContent>
        <CardFooter className="flex flex-col gap-3 p-5 px-0 items-stretch group-hover:-translate-y-4 transition-all duration-300">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPinIcon className="w-4 h-4 text-primary" />
            <span>{location}</span>
            <div className="ml-auto flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={cn(
                    "w-3 h-3",
                    i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  )}
                />
              ))}
            </div>
          </div>
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <UsersIcon className="w-4 h-4" />
                <span>{participants} Kişi</span>
              </div>
            </div>
          </div>

        </CardFooter>
      </Card>
    </TurLinkWrapper>
  )
}

export default TurCard;

function TurLinkWrapper(
  {
    children,
    href
  }
  :
  {
    children: React.ReactNode,
    href?: string | null
  }
) {
  if (!href) {
    return children
  }
  return (
    <Link href={href}>
      {children}
    </Link>
  )
}

function TurImage(
  {
    src,
    alt,
  }: {
    src?: string,
    alt: string
  }
) {
  if (!src) {
    return (
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    )
  }
  return (
    <Image src={src} alt={alt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
  )
}