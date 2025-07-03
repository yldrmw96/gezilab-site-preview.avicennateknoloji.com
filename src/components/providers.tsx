"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import BodyWrapper from "@/components/body-wrapper";

export default function Providers({
  children,
  sidebar,
  footer,
  topbar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  footer: React.ReactNode;
  topbar: React.ReactNode;
}) {
  return <Provider store={store}>
    <BodyWrapper>
      {/* {topbar} */}
      {sidebar}

      {children}
      
      {footer}
    </BodyWrapper>
  </Provider>;
}
