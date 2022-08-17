import styles from "../styles/footer.module.css";
import Image from "next/image";
import ninfasMap from "../public/ninfas_map.png";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className={styles.footerMain}>
      <div className={styles.footerBox}>
        <div className={styles.footerText}></div>
        <div></div>
      </div>
    </div>
  );
}
