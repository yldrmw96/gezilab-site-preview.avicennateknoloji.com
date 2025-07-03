"use client";
import { useDispatch } from "react-redux";
import { setShouldShowBorder } from "@/store/reducers/sidebar.reducer";
import { useCallback, useRef } from "react";
import { useSidebar } from "@/store/hooks/sidebar.hook";
import { SearchCommand } from "./search-command";

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const { values: { isSearchOpen, isSidebarOpen } } = useSidebar();
  // Önceki durumu sakla
  const shouldShowBorderRef = useRef(false);

  const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = event.currentTarget.scrollTop;
    const shouldShow = scrollTop > 10;

    // Sadece durum değiştiyse dispatch yap
    if (shouldShow !== shouldShowBorderRef.current) {
      shouldShowBorderRef.current = shouldShow;
      dispatch(setShouldShowBorder(shouldShow));
    }
  }, [dispatch]);

  return (
    <main
      onScroll={handleScroll}
      className="grid grid-rows-[auto_1fr_auto] h-full w-full min-h-screen overflow-y-auto overflow-x-hidden relative"
    >
  
      {children}
  
    
    </main>
  );
}
