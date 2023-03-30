import React from "react";
import Button from "../../Button/Button";
import Dropdown from "../../Dropdown/Dropdown";
import Input from "../../Input/Input";
import styles from "./edit.module.css";
import TextArea from "../../TextArea/TextArea";
import { generateText } from "@/lib/utils/openAi/generateText";
import cleanString from "@/lib/helpers/cleanString";
import cleanHeadline from "@/lib/helpers/cleanHeadline";

export default function Edit({
  name,
  setName,
  description,
  setDescription,
  image,
  setImage,
  type,
  setType,
  handleGenerateSection,
  loading,
  controls,
  setControls,
  layout,
  setLayout,
  activeSection,
  sections,
  setSections,
}: props) {

  const currentSection = sections[activeSection];

  console.log(currentSection)

  const handleEditText = (e: any, type: string) => {
    setSections({
      ...sections,
      [activeSection]: { ...sections[activeSection], [type]: e.target.value },
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
      [activeSection]: { ...sections[activeSection], [type]: cleanHeadline(response) },
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
        label="Image"
        value={activeSection && sections[activeSection].image.full}
        onChange={(e: any) => setImage(e.target.value)}
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
        setType={setType}
        options={["1", "2", "3"]}
      />
      <Button label={loading ? "Loading..." : "Save"} onClick={() => {}} />
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
  setType: React.Dispatch<React.SetStateAction<any>>;
  handleGenerateSection: any;
  loading: boolean;
  controls: string;
  setControls: any;
  layout: string;
  setLayout: React.Dispatch<React.SetStateAction<any>>;
  activeSection: any;
  sections: any;
  setSections: React.Dispatch<React.SetStateAction<any>>;
};
