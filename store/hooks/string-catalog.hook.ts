import { useDispatch, useSelector } from "react-redux";
import { setStringCatalog } from "../reducers/string-catalog.reducer";
import { RootState } from "..";
  
export function useStringCatalog() {
  const stringCatalog = useSelector((state: RootState) => state.stringCatalog );
  const dispatch = useDispatch();
  return { values: { stringCatalog }, actions: { setStringCatalog: (stringCatalog: any[]) => dispatch(setStringCatalog(stringCatalog)) } };
} 