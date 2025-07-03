"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import safeArea from "@/styles/safearea.module.css";
import { turKategorileri } from "@/lib/mock/turlar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRightIcon,
  CalendarIcon,
  MapPinIcon,
  StarIcon,
  UsersIcon,
  ClockIcon,
  SearchIcon,
  FilterIcon,
  ArrowUpDownIcon,
  XIcon
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useSidebar } from "@/store/hooks/sidebar.hook";
import Link from "next/link";
import { Sun } from "lucide-react";
import { mockTurlar } from "@/lib/mock/turlar";
import { normalizePrice } from "../utils";
import { links } from "@/lib/links";

  
const TurCard = ({ tur }: { tur: typeof mockTurlar[number] }) => (
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

const itemsPerPage = 9;

export default function TurlarClient({ kategori }: { kategori: string | null }) {
  const { values: { headerHeight } } = useSidebar();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(kategori || null);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [selectedRating, setSelectedRating] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filtreleme
  const filteredTurlar = mockTurlar.filter(tur => {
    const matchesSearch = tur.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tur.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || tur.categorySlug === selectedCategory;

    // Fiyat filtresi
    const normalizedPrice = normalizePrice(tur.price);
    const matchesPrice = normalizedPrice >= priceRange[0] && normalizedPrice <= priceRange[1];

    // Süre filtresi
    const turDays = parseInt(tur.duration.match(/\d+/)?.[0] || "0");
    let matchesDuration = true;
    if (selectedDuration === "1-3") matchesDuration = turDays >= 1 && turDays <= 3;
    else if (selectedDuration === "4-7") matchesDuration = turDays >= 4 && turDays <= 7;
    else if (selectedDuration === "8+") matchesDuration = turDays >= 8;

    // Rating filtresi
    let matchesRating = true;
    if (selectedRating === "5") matchesRating = tur.rating === 5;
    else if (selectedRating === "4+") matchesRating = tur.rating >= 4;

    return matchesSearch && matchesCategory && matchesPrice && matchesDuration && matchesRating;
  });


  // Sıralama
  const sortedTurlar = [...filteredTurlar].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return normalizePrice(a.price) - normalizePrice(b.price);
      case "price-high":
        return normalizePrice(b.price) - normalizePrice(a.price);
      case "rating":
        return b.rating - a.rating;
      case "duration":
        return parseInt(a.duration.match(/\d+/)?.[0] || "0") - parseInt(b.duration.match(/\d+/)?.[0] || "0");
      default:
        return 0;
    }
  });

  // Sayfalama
  const totalPages = Math.ceil(sortedTurlar.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTurlar = sortedTurlar.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtreleri sıfırla
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
    setSortBy("featured");
    setPriceRange([0, 5000]);
    setSelectedDuration("all");
    setSelectedRating("all");
    setCurrentPage(1);
  };

  // Filtre içeriği componenti (hem desktop hem mobile için kullanılacak)
  const FilterContent = () => (
    <>
      {/* Arama */}
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Tur ara..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Fiyat Aralığı Filtresi */}
      <div className="space-y-3">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <FilterIcon className="w-4 h-4" />
          Fiyat Aralığı
        </h3>
        <div className="px-3">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={5000}
            step={100}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>€{priceRange[0]}</span>
            <span>€{priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Süre Filtresi */}
      <div className="space-y-3">
        <h3 className="font-semibold mb-4">Tur Süresi</h3>
        <RadioGroup value={selectedDuration} onValueChange={setSelectedDuration}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all-duration" />
            <Label htmlFor="all-duration" className="cursor-pointer">Tümü</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1-3" id="short" />
            <Label htmlFor="short" className="cursor-pointer">1-3 Gün</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4-7" id="medium" />
            <Label htmlFor="medium" className="cursor-pointer">4-7 Gün</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="8+" id="long" />
            <Label htmlFor="long" className="cursor-pointer">8+ Gün</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Rating Filtresi */}
      <div className="space-y-3">
        <h3 className="font-semibold mb-4">Değerlendirme</h3>
        <RadioGroup value={selectedRating} onValueChange={setSelectedRating}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all-rating" />
            <Label htmlFor="all-rating" className="cursor-pointer">Tümü</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="5" id="5-stars" />
            <Label htmlFor="5-stars" className="cursor-pointer flex items-center gap-1">
              5 <StarIcon className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4+" id="4-plus" />
            <Label htmlFor="4-plus" className="cursor-pointer flex items-center gap-1">
              4+ <StarIcon className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            </Label>
          </div>
        </RadioGroup>
      </div>
    </>
  );

  return (
    <div className={cn(safeArea.safe_area, "!h-auto")}>
      <Banner_09 />
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
        {/* Sol Sidebar - Desktop */}
        <aside className="pt-8 hidden lg:flex flex-col space-y-6 overflow-y-auto  sticky " style={{ maxHeight: `calc(100vh - ${headerHeight}px)`, top: `calc(${headerHeight}px ` }}>
          <FilterContent />

          {/* İletişim Kartı */}
          <Card className="bg-primary text-white">
            <CardContent className="p-6 text-center space-y-3 rounded-4xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <CalendarIcon className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-lg">Tur Danışmanlığı</h4>
              <p className="text-sm opacity-90">
                Size özel tur planlaması için uzmanlarımızla iletişime geçin
              </p>
              <Button variant="secondary" className="w-full">
                Hemen Ara
              </Button>
            </CardContent>
          </Card>
        </aside>

        {/* Sağ İçerik */}
        <div>
          {/* Başlık */}
          <div className="bg-background pb-8 sticky pt-8 z-10 max-sm:relative max-sm:!top-auto" style={{ top: `${headerHeight}px` }}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">
                  {selectedCategory || "Tüm"} Turlarımız
                </h1>
                {/* <p className="text-muted-foreground">
                  {sortedTurlar.length} tur bulundu
                </p> */}
              </div>

              <div className="flex items-center gap-2">
                {/* Mobil Filtre Butonu */}
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <FilterIcon className="w-4 h-4 mr-2" />
                      Filtreler
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Filtreler</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6 space-y-6">
                      {/* Kategoriler - Mobil için */}
                      <div className="lg:hidden">
                        <h3 className="font-semibold mb-4">Tur Kategorileri</h3>
                        <div className="flex flex-row gap-2">
                          <Badge
                            variant={selectedCategory === null ? "default" : "outline"}
                            className={cn(
                              "cursor-pointer hover:bg-primary hover:text-white transition-colors px-3 py-1 text-xs",
                              selectedCategory === null && "bg-primary text-white"
                            )}
                            onClick={() => {
                              setSelectedCategory(null);
                              setMobileFiltersOpen(false);
                            }}
                          >
                            Tüm Turlar
                          </Badge>
                          {turKategorileri.map((kategori) => (

                            <Badge
                              key={kategori.slug}
                              variant={selectedCategory === kategori.slug ? "default" : "outline"}
                              asChild
                              className={cn(
                                "cursor-pointer hover:bg-primary hover:text-white transition-colors px-3 py-1 text-xs",
                                selectedCategory === kategori.slug && "bg-primary text-white"
                              )}
                            // onClick={() => {
                            //   setSelectedCategory(kategori.slug);
                            //   setMobileFiltersOpen(false);
                            // }}
                            >
                              <Link href={links.turlarKategori(kategori.slug)} key={kategori.slug}  >
                                {kategori.title}
                              </Link>
                            </Badge>

                          ))}
                        </div>
                      </div>
                      <Separator className="lg:hidden" />
                      <FilterContent /> 
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sıralama */}
                <div className="flex items-center gap-2">
                  {/* Filtreleri Sıfırla Butonu */}
                  {(searchTerm || selectedCategory || priceRange[0] > 0 || priceRange[1] < 5000 ||
                    selectedDuration !== "all" || selectedRating !== "all") && (
                      <Button
                        variant="outline"
                        className="border-none shadow-none text-primary"
                        onClick={resetFilters}
                      >
                        <XIcon className="w-4 h-4" />
                        Filtreleri Temizle
                      </Button>
                    )}

                  <ArrowUpDownIcon className="w-4 h-4 text-muted-foreground" />
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sıralama" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Öne Çıkanlar</SelectItem>
                      <SelectItem value="price-low">En Düşük Fiyat</SelectItem>
                      <SelectItem value="price-high">En Yüksek Fiyat</SelectItem>
                      <SelectItem value="rating">En Yüksek Puan</SelectItem>
                      <SelectItem value="duration">En Kısa Süre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Kategori Tag'leri */}
            <div className="mt-6 flex flex-wrap gap-2">

              <Badge
                variant={selectedCategory === null ? "default" : "outline"}
                className={cn(
                  "cursor-pointer hover:bg-primary hover:text-white transition-colors text-sm font-medium",
                  selectedCategory === null && "bg-primary text-white"
                )}
                asChild
              // onClick={() => setSelectedCategory(null)}
              >
                <Link href={links.turlar()}  >
                  Tüm Turlar
                </Link>
              </Badge>
              {turKategorileri.map((kategori) => (
                <Badge
                  key={kategori.slug}
                  variant={selectedCategory === kategori.slug ? "default" : "outline"}
                  className={cn(
                    "cursor-pointer hover:bg-primary hover:text-white transition-colors px-4 py-2 text-sm font-medium",
                    selectedCategory === kategori.slug && "bg-primary text-white"
                  )}
                  asChild
                // onClick={() => setSelectedCategory(kategori.slug)}
                >
                  <Link href={links.turlarKategori(kategori.slug)}  >
                    {kategori.title}
                  </Link>
                </Badge>
              ))}
            </div>
          </div>

          {/* Tur Kartları */}
          {currentTurlar.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {currentTurlar.map((tur) => (
                <TurCard key={tur.id} tur={tur} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Aradığınız kriterlere uygun tur bulunamadı.
              </p>
            </div>
          )}

          {/* Sayfalama */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) handlePageChange(currentPage - 1);
                      }}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>

                  {[...Array(totalPages)].map((_, i) => {
                    const pageNumber = i + 1;
                    // Sadece belirli sayfaları göster
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <PaginationItem key={pageNumber}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(pageNumber);
                            }}
                            isActive={currentPage === pageNumber}
                            className="cursor-pointer"
                          >
                            {pageNumber}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    } else if (
                      pageNumber === currentPage - 2 ||
                      pageNumber === currentPage + 2
                    ) {
                      return (
                        <PaginationItem key={pageNumber}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      );
                    }
                    return null;
                  })}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) handlePageChange(currentPage + 1);
                      }}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



function Banner_09() {
  // State to control banner visibility
  const [isVisible, setIsVisible] = useState(true);
  // State to control promo code copy action
  const [copied, setCopied] = useState(false);

  // Hide banner when user dismisses it
  const dismissBanner = () => {
    setIsVisible(false);
  };

  // Handle copy promo code
  const copyPromoCode = () => {
    navigator.clipboard.writeText("SPRING25");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isVisible) return null;

  return (
    <div className="relative rounded-3xl w-full overflow-hidden bg-gradient-to-r from-red-600 to-pink-500 px-6 py-5 shadow-lg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-48 w-48 animate-pulse rounded-full bg-white opacity-10"></div>
        <div className="absolute top-5 right-10 h-20 w-20 animate-bounce rounded-full bg-white opacity-10 delay-300"></div>
        <div className="absolute bottom-4 left-1/3 h-24 w-24 animate-ping rounded-full bg-white opacity-10 [animation-duration:3s]"></div>
        <div className="absolute -right-10 -bottom-10 h-40 w-40 animate-pulse rounded-full bg-white opacity-10 delay-700"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-between gap-5 md:flex-row">
        <div className="flex items-center justify-center gap-4 text-center md:justify-start md:text-left">
          <div className="hidden animate-spin duration-9000 md:block">
            <Sun className="h-16 w-16 text-white" />
          </div>
          <div className="space-y-1">
            <span className="inline-flex animate-pulse rounded-md bg-white px-3 py-1 text-sm font-bold text-primary shadow-sm">
              25% İNDİRİM
            </span>
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Bahar İndirimleri
            </h3>
            <p className="text-base font-medium text-white/90">
              Kodu kullanarak{" "}
              <span className="rounded bg-white/20 px-2 py-0.5 font-bold tracking-wider text-white">
                BAHAR25
              </span>{" "}
              kodunu kullanın
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={copyPromoCode}
            className="relative rounded-md border-2 border-primary bg-white px-5 py-2.5 text-base font-medium text-primary backdrop-blur-sm transition-all hover:bg-white/80 focus:ring-2 focus:ring-white/50 focus:outline-none"
          >
            <span
              className={`transition-opacity ${copied ? "opacity-0" : "opacity-100"}`}
            >
              Kodu Kopyala
            </span>
            <span
              className={`absolute inset-0 flex items-center justify-center transition-opacity ${copied ? "opacity-100" : "opacity-0"}`}
            >
              Kopyalandı!
            </span>
          </button>

          <button
            className="flex-shrink-0 text-white opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
            onClick={dismissBanner}
            aria-label="Dismiss"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

