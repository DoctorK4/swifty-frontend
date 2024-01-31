"use client";

import { useState } from "react";
import { container } from "./page.css";
import { BottomSheet } from "@swifty/ui";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <main className={container}>
      <button onClick={() => setOpen(true)}>시트 열기</button>
      <BottomSheet open={open}>hello</BottomSheet>
    </main>
  );
}
