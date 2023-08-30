import React, { useState } from "react";
import Button from "../../Button/Button";
import Dropdown from "../../Dropdown/Dropdown";
import Input from "../../Input/Input";
import styles from "./edit.module.css";
import TextArea from "../../TextArea/TextArea";
import { generateText } from "@/lib/utils/openAi/generateText";
import cleanString from "@/lib/helpers/cleanString";
import cleanHeadline from "@/lib/helpers/cleanHeadline";
import { searchImage } from "@/lib/utils/unslpash/searchImage";

export default function Edit({
  name,
  setName,
  description,
  setDescription,
  image,
  setImage,
  type,

  handleGenerateSection,
  loading,
  controls,
  setControls,
  layout,
  activeSection,
  setActiveSection,
  sections,
  setSections,
}: props) {
  const currentSection = sections[activeSection];

  console.log(currentSection);

  const [ctaChecked, setCtaChecked] = useState(false);

  const removeSection = () => {
    delete sections[activeSection];
    setSections({
      ...sections,
    });
    setActiveSection("");
    setControls("generate")
  };

  const handleEditText = (e: any, type: string) => {
    setSections({
      ...sections,
      [activeSection]: { ...sections[activeSection], [type]: e.target.value },
    });
  };

  const toggleChecked = (type: string) => {
    setSections({
      ...sections,
      [activeSection]: {
        ...sections[activeSection],
        [type]: !sections[activeSection][type],
      },
    });
  };

  const regenerateText = async (type: string) => {
    const prompt = `Please write me a ${currentSection.type} section website ${type} for my ${currentSection.description} business named ${currentSection.name}. Under 150 characters.`;

    const response = await generateText(prompt, 0.5).catch((err) => {
      console.log(err);
      return;
    });
    setSections({
      ...sections,
      [activeSection]: {
        ...sections[activeSection],
        [type]: cleanHeadline(response),
      },
    });
  };

  const regenerateImage = async (type: string) => {
    const response = await searchImage(currentSection.imagePrompt).catch(
      (err) => {
        console.log(err);
        return;
      }
    );

    setSections({
      ...sections,
      [activeSection]: { ...sections[activeSection], [type]: response.regular },
    });
  };

  const setType = async (type: string) => {
    setSections({
      ...sections,
      [activeSection]: { ...sections[activeSection], type: type },
    });
  };

  const setLayout = async (layout: string) => {
    setSections({
      ...sections,
      [activeSection]: { ...sections[activeSection], layout: layout },
    });
  };

  return (
    <>
      <TextArea
        label="Headline"
        value={activeSection && sections[activeSection].headline}
        onChange={(e: any) => handleEditText(e, "headline")}
        regenerateText={() => regenerateText("headline")}
      />
      <TextArea
        label="Text"
        value={activeSection && sections[activeSection].text}
        onChange={(e: any) => handleEditText(e, "text")}
        regenerateText={() => regenerateText("text")}
      />
      <Input
        label="Call To Action"
        value={activeSection && sections[activeSection].ctaText}
        onChange={(e: any) => handleEditText(e, "ctaText")}
        checkbox={true}
        handleCheckbox={() => toggleChecked("cta")}
        checked={activeSection && sections[activeSection].cta}
      />
      <TextArea
        label="Image"
        value={activeSection && sections[activeSection].image}
        onChange={(e: any) => handleEditText(e, "image")}
        regenerateText={() => regenerateImage("image")}
      />
      <Dropdown
        label="Section Type"
        value=""
        type={activeSection && sections[activeSection].type}
        setType={setType}
        options={["hero", "about"]}
      />{" "}
      <Dropdown
        label="Layout"
        value=""
        type={activeSection && sections[activeSection].layout}
        setType={setLayout}
        options={["1", "2"]}
      />
      <Button label={"Remove Section"} onClick={removeSection} secondary={true}/>
    </>
  );
}

type props = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<any>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<any>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<any>>;
  type: string;
  handleGenerateSection: any;
  loading: boolean;
  controls: string;
  setControls: any;
  layout: string;
  activeSection: any;
  setActiveSection: React.Dispatch<React.SetStateAction<any>>;
  sections: any;
  setSections: React.Dispatch<React.SetStateAction<any>>;
};
