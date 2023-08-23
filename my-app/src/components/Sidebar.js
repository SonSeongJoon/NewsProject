// Sidebar.js
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./sidebar.module.css";
import CloseIcon from "./icons/CloseIcon"; // 닫기 아이콘 SVG 컴포넌트를 불러온다.

const Sidebar = ({ width = 280, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };

  const handleClose = (e) => {
    const sideArea = side.current;
    const isOutsideClick = !sideArea || !sideArea.contains(e.target);
    if (isOpen && isOutsideClick) {
      setX(-width);
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        ref={side}
        className={classNames(styles.sidebar, { [styles.open]: isOpen })}
        style={{ width: `${width}px`, transform: `translateX(${-xPosition}px)` }}
      >
        <button onClick={toggleMenu} className={styles.button}>
          {isOpen ? <CloseIcon /> : <img src="images/avatar.png" alt="contact open button" className={styles.openBtn} />}
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;