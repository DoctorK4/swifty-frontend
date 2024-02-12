"use client";

import Image from "next/image";
import { styles } from "./BackBtn.css";
import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();

  const handleBtn = () => {
    router.replace("/agreement");
  };
  return (
    <button className={styles.btn} onClick={handleBtn}>
      <Image
        src={"/icon/Icon_Cancellation.svg"}
        alt="Icon_Cancellation"
        width={30}
        height={30}
      />
    </button>
  );
}
