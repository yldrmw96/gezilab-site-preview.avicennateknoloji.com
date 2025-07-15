
"use client";

import { cn } from "@lib/utils";
import styles from "@styles/safearea.module.css";
import Form from "./client/components/form";
import Info from "./client/components/info";
import contactStyles from "@styles/contact.module.css";


export default function ContactPage() {
  return (
    <section className={cn(styles.safe_area, contactStyles.grid)}>
      <Form />
      <Info />
    </section>
  );
}
