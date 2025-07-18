import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { setLanguage } from "@store/reducers/language.reducer";
import { Language } from "@types/language";

export const useLanguage = () => {
  const language = useSelector((state: RootState) => state.language);
  const dispatch = useDispatch();
  return { values: { language }, actions: { setLanguage: (language: Language) => dispatch(setLanguage(language)) } };
};  