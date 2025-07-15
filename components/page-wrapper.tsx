"use client"
import { cn } from "@lib/utils";
import { motion } from "framer-motion";
export default function PageWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  return <motion.div 
  initial={{opacity:0,left:10}}
  animate={{opacity:1,left:0}}
  exit={{opacity:0,left:10}}

  transition={{duration:0.5}}
  className={cn("flex flex-col", className)}>

      {children}

  </motion.div>;
}