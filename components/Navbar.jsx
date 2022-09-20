import styles from "../styles/Navbar.module.css";
import {
  IoHomeSharp,
  IoBarbellSharp,
  IoFastFoodSharp,
  IoSettingsSharp,
} from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Link href="/">
        <a>
          <IoHomeSharp />
        </a>
      </Link>

      <Link href="workout">
        <a>
          <IoBarbellSharp />
        </a>
      </Link>

      <Link href="calories">
        <a>
          <IoFastFoodSharp />
        </a>
      </Link>

      <Link href="chats">
        <a>
          <RiMessage2Fill />
        </a>
      </Link>

      <Link href="settings">
        <a>
          <IoSettingsSharp />
        </a>
      </Link>
    </div>
  );
};
export default Navbar;
