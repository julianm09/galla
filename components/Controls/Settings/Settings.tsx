import React from "react";
import Button from "../../Button/Button";
import Dropdown from "../../Dropdown/Dropdown";
import Input from "../../Input/Input";
import styles from "./generate.module.css";
import TextArea from "../../TextArea/TextArea";
import SliderInput from "@/components/SliderInput/SliderInput";

export default function Settings({
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
      <Dropdown
        label="Font"
        value=""
        type={layout}
        setType={() => {}}
        options={["1", "2"]}
      />
      <Dropdown
        label="Background Color"
        value=""
        type={layout}
        setType={() => {}}
        options={["1", "2"]}
      />
      <Dropdown
        label="Font Color"
        value=""
        type={layout}
        setType={() => {}}
        options={["1", "2"]}
      />
      <Dropdown
        label="Headline Color"
        value=""
        type={layout}
        setType={() => {}}
        options={["1", "2"]}
      />
      <Dropdown
        label="Text Color"
        value=""
        type={layout}
        setType={() => {}}
        options={["1", "2"]}
      />
      <Dropdown
        label="Button Color"
        value=""
        type={layout}
        setType={() => {}}
        options={["1", "2"]}
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
