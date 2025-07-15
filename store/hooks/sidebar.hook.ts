import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { setShouldShowBorder, setSearchQuery, setIsSearchOpen, setHeaderHeight, setIsSidebarOpen } from "@store/reducers/sidebar.reducer";

export const useSidebar = () => {
  const shouldShowBorder = useSelector((state: RootState) => state.sidebar.shouldShowBorder);
  const searchQuery = useSelector((state: RootState) => state.sidebar.searchQuery);
  const isSearchOpen = useSelector((state: RootState) => state.sidebar.isSearchOpen);
  const headerHeight = useSelector((state: RootState) => state.sidebar.headerHeight);
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();
  return { values: { shouldShowBorder, searchQuery, isSearchOpen, headerHeight, isSidebarOpen }, actions: { setShouldShowBorder: (value: boolean) => dispatch(setShouldShowBorder(value)), setSearchQuery: (value: string) => dispatch(setSearchQuery(value)), setIsSearchOpen: (value: boolean) => dispatch(setIsSearchOpen(value)), setHeaderHeight: (value: number) => dispatch(setHeaderHeight(value)), setIsSidebarOpen: (value: boolean) => dispatch(setIsSidebarOpen(value)) } };
};