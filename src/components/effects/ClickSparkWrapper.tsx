"use client";

import { useTheme } from "next-themes";
import ClickSpark from "./ClickSpark";
import { useEffect, useState } from "react";

export default function ClickSparkWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false); /* เพิ่มเผื่อไว้กันhydration error */

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return (
    <ClickSpark
      sparkColor={resolvedTheme === "dark" ? "#ffffff" : "#000000"}
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {children}
    </ClickSpark>
  );
}
