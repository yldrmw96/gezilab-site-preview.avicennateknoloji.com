"use client"
import { useSidebar } from "@/store/hooks/sidebar.hook";
import {
  ArrowRightIcon,
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { localizedStringAlternate } from "@/lib/localizedStringAlternate";

export function SearchCommand({ stringCatalog }: { stringCatalog: any }) {
  const { values: { searchQuery, isSearchOpen: isOpen }, actions: { setSearchQuery, setIsSearchOpen: setOpen } } = useSidebar();
  return (
    <Command>
      <CommandInput placeholder={localizedStringAlternate(stringCatalog, "search_command", "_root")} value={searchQuery} onValueChange={(value) => setSearchQuery(value)} />


      <CommandList>
        <CommandEmpty>{localizedStringAlternate(stringCatalog, "no_results", "_root")}</CommandEmpty>
        <CommandGroup heading={localizedStringAlternate(stringCatalog, "helpful_links", "_root")} className="bg-accent p-0 ] border-t border-b">
          <CommandItem className="!gap-[var(--service-icon-gap)] ">
            <ArrowRightIcon className="shrink-0 !text-[length:var(--service-icon-size)]" width={"1em"} height={"1em"}/>
            <span>{localizedStringAlternate(stringCatalog, "request_from_us", "_root")}</span>
          </CommandItem>
         
      
        </CommandGroup>
        <CommandSeparator />
        {/* <CommandGroup heading="Settings">
          <CommandItem>
            <User />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup> */}
      </CommandList>
    </Command>
  )
}
