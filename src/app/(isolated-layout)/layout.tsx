"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import BodyWrapper from "@/components/body-wrapper";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>
      {children}
    
  </Provider>;
}
