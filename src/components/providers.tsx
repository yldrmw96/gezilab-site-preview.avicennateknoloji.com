"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import BodyWrapper from "@/components/body-wrapper";

export default function Providers({
  children,
  sidebar,
  footer,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  footer: React.ReactNode;
}) {
  return <Provider store={store}>
    <BodyWrapper>
      {sidebar}
      {children}
      {footer}
    </BodyWrapper>
  </Provider>;
}
