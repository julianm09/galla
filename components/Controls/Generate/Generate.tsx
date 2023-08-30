import React from "react";
import Button from "../../Button/Button";
import Dropdown from "../../Dropdown/Dropdown";
import Input from "../../Input/Input";
import styles from "./generate.module.css";
import TextArea from "../../TextArea/TextArea";
import SliderInput from "@/components/SliderInput/SliderInput";

export default function Generate({
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
  temperature,
  setTemperature,
}: props) {
  return (
    <>
      <Input
        label="Name"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
        checkbox={false}
        handleCheckbox={() => {}}
        checked={false}
      />
      <Input
        label="Description"
        value={description}
        onChange={(e: any) => setDescription(e.target.value)}
        checkbox={false}
        handleCheckbox={() => {}}
        checked={false}
      />
      <Input
        label="Image"
        value={image}
        onChange={(e: any) => setImage(e.target.value)}
        checkbox={false}
        handleCheckbox={() => {}}
        checked={false}
      />
      <Dropdown
        label="Section Type"
        value=""
        type={type}
        setType={setType}
        options={["hero", "about"]}
      />{" "}
      <Dropdown
        label="Layout"
        value=""
        type={layout}
        setType={setLayout}
        options={["1", "2"]}
      />
      <SliderInput
        label="Random"
        value={temperature}
        onChange={(e: any) => setTemperature(e.target.value / 100)}
      />
      <Button
        label={loading ? "Loading..." : "Generate"}
        onClick={handleGenerateSection}
      />
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
  temperature: number;
  setTemperature: React.Dispatch<React.SetStateAction<any>>;
};
