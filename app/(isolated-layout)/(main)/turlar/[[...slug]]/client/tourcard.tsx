import { Card, CardContent, CardFooter } from "../../../../../../components/ui/card";
import { Badge } from "../../../../../../components/ui/badge";
import { MapPinIcon, StarIcon, ClockIcon, UsersIcon } from "lucide-react";
import { cn } from "@lib/utils";
import Link from "next/link";
import { Separator } from "../../../../../../components/ui/separator";
import { Button } from "../../../../../../components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { links } from "@lib/links";
import { mockTurlar } from "@lib/mock/turlar";
import Image from "next/image";

export const TurCard = ({ tur }: { tur: typeof mockTurlar[number] }) => (
  <Link href={links.tur(tur.id)}>
    <Card className="group rounded-4xl overflow-hidden transition-all duration-300 hover:-translate-y-1 !p-0 shadow-none border-none cursor-pointer shining-card-capturer">
      <CardContent className="!p-0 relative h-[220px] overflow-hidden rounded-4xl">
        <Image
          src={tur.image}
          alt={tur.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {tur.badge && (
          <Badge className="absolute top-4 left-4 bg-primary text-white shining-card-default !font-bold">
            {tur.badge}
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </CardContent>
      <CardFooter className="flex flex-col gap-3 p-5 px-0 items-stretch group-hover:-translate-y-4 transition-all duration-300">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPinIcon className="w-4 h-4 text-primary" />
          <span>{tur.location}</span>
          <div className="ml-auto flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={cn(
                  "w-3 h-3",
                  i < tur.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                )}
              />
            ))}
          </div>
        </div>

        <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {tur.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4" />
              <span>{tur.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <UsersIcon className="w-4 h-4" />
              <span>{tur.participants} Kişi</span>
            </div>
          </div>
        </div>

        <Separator className="my-2" />

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Başlangıç fiyatı</p>
            <p className="text-xl font-bold text-primary">{tur.price}</p>
          </div>
          <Button size="sm" className="rounded-full">
            Detaylar
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  </Link>
);