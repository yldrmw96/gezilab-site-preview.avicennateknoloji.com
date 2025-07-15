"use client"
import { FilterIcon } from "lucide-react";
import { Slider } from "../../../../../../components/ui/slider";
import { useState } from "react";

export default function PriceRangeSliderSection({ 
  priceRange, 
  setPriceRange 
}: { priceRange: number[], setPriceRange: (value: number[]) => void }) {
  const [_price, setPrice] = useState(priceRange);
  return (
    <div className="space-y-3">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <FilterIcon className="w-4 h-4" />
        Fiyat Aralığı
      </h3>
      <div className="px-3">
        <Slider
          value={_price}
          onValueChange={setPrice}
          onValueCommit={() => setPriceRange(_price)}
          max={5000}
          step={100}
          className="mb-4"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>€{_price[0]}</span>
          <span>€{_price[1]}</span>
        </div>
      </div>
    </div>
  )
}