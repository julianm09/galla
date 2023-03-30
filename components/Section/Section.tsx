import Image from "next/image";
import React, { useState } from "react";
import { Repeat, Edit } from "react-feather";
import About from "./About/About";
import Hero from "./Hero/Hero";
import styles from "./section.module.css";

type props = {
  uid: string;
  section: any;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<any>>;
  handleEditSection: any;
  activeSection: any;
};

export default function Section({
  uid,
  section,
  loading,
  setLoading,
  handleEditSection,
  activeSection,
}: props) {
  const [sectionName, setSectionName] = useState(section.className);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={`${styles["section"]}`}
      onDoubleClick={() => handleEditSection(uid, section)}
    >
      {activeSection && activeSection === uid && (
        <div className={styles["active"]}></div>
      )}
      {section.type === "hero" && (
        <Hero
          section={section}
          setLoading={setLoading}
          loading={loading}
          sectionName={sectionName}
        />
      )}
      {section.type === "about" && (
        <About
          section={section}
          setLoading={setLoading}
          loading={loading}
          sectionName={sectionName}
        />
      )}
    </div>
  );
}
