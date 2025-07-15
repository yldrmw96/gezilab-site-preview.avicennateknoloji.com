"use client"
import { useSidebar } from "@store/hooks/sidebar.hook";
import {
  ArrowRightIcon,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command"
import { useLocalizedStringAlternate } from "@lib/localizedStringAlternate";

export function SearchCommand({ stringCatalog }: { stringCatalog: any }) {
  const { values: { searchQuery }, actions: { setSearchQuery } } = useSidebar();
  return (
    <Command>
      <CommandInput placeholder={useLocalizedStringAlternate(stringCatalog, "search_command", "_root")} value={searchQuery} onValueChange={(value) => setSearchQuery(value)} />


      <CommandList>
        <CommandEmpty>{useLocalizedStringAlternate(stringCatalog, "no_results", "_root")}</CommandEmpty>
        <CommandGroup heading={useLocalizedStringAlternate(stringCatalog, "helpful_links", "_root")} className="bg-accent p-0 ] border-t border-b">
          <CommandItem className="!gap-[var(--service-icon-gap)] ">
            <ArrowRightIcon className="shrink-0 !text-[length:var(--service-icon-size)]" width={"1em"} height={"1em"} />
            <span>{useLocalizedStringAlternate(stringCatalog, "request_from_us", "_root")}</span>
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
