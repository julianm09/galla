import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Controls from "../Controls/Controls";
import Section from "../Section/Section";
import styles from "./builder.module.css";
import generateHero from "@/lib/utils/section/generateHero";
import generateAbout from "@/lib/utils/section/generateAbout";

export default function Builder() {
  const [sections, setSections] = useState({});
  const [name, setName] = useState("Vancouver Terrerium");
  const [description, setDescription] = useState("Tererium");
  const [image, setImage] = useState("Forrest");
  const [type, setType] = useState("hero");
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState(0.2);
  const [controls, setControls] = useState("generate");
  const [layout, setLayout] = useState("1");
  const [activeSection, setActiveSection] = useState("");

  //scroll to bottom when section is generated
  const builderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (builderRef.current) {
      builderRef.current.scrollTo(0, builderRef.current.scrollHeight);
    }
  }, [Object.values(sections).length]);

  //generate sections
  const handleGenerateSection = async () => {
    setLoading(true);

    if (type === "hero") {
      const section = await generateHero({
        name,
        description,
        image,
        temperature,
        layout,
      });
      setSections({ ...sections, [uuidv4()]: section });
    }

    if (type === "about") {
      const section = await generateAbout({
        name,
        description,
        image,
        temperature,
        layout,
      });
      setSections({ ...sections, [uuidv4()]: section });
    }
  };

  //select section to edit
  const handleEditSection = (uid: string, section: object) => {
    if (activeSection === uid) {
      setActiveSection("");
      setControls("generate");
      return;
    }
    setControls("edit");
    setActiveSection(uid);
    console.log(activeSection);
  };

  return (
    <>
      <div ref={builderRef} className={styles["builder"]}>
        {sections && Object.entries(sections).length > 0 ? (
          Object.entries(sections).map((section, i) => (
            <>
              <Section
                uid={section[0]}
                section={section[1]}
                loading={loading}
                setLoading={setLoading}
                handleEditSection={handleEditSection}
                activeSection={activeSection}
              />
            </>
          ))
        ) : (
          <div className={styles["start-screen"]}>
            Create a section on the right to get started.
          </div>
        )}
      </div>
      <Controls
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        image={image}
        setImage={setImage}
        type={type}
        setType={setType}
        handleGenerateSection={handleGenerateSection}
        loading={loading}
        controls={controls}
        setControls={setControls}
        layout={layout}
        setLayout={setLayout}
        activeSection={activeSection}
        temperature={temperature}
        setTemperature={setTemperature}
        sections={sections}
        setSections={setSections}
      />
    </>
  );
}
