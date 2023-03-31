import React from "react";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import styles from "./controls.module.css";
import {
  PlusCircle,
  Edit as EditIcon,
  Settings as SettingsIcon,
} from "react-feather";
import TextArea from "../TextArea/TextArea";
import Edit from "./Edit/Edit";
import Generate from "./Generate/Generate";
import Settings from "./Settings/Settings";

export default function Controls({
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
  sections,
  setSections,
}: props) {
  return (
    <div className={styles["controls"]}>
      <div className={styles["tab-container"]}>
        <div
          className={`${styles["tab"]} ${
            controls === "generate" && styles["active"]
          }`}
          onClick={() => {
            setControls("generate");
          }}
        >
          <PlusCircle size={18} />
        </div>
        <div
          className={`${styles["tab"]} ${
            controls === "edit" && styles["active"]
          } ${!activeSection && styles["disable"]}`}
          onClick={() => {
            activeSection && setControls("edit");
          }}
        >
          <EditIcon size={18} />
        </div>
        <div
          className={`${styles["tab"]} ${
            controls === "settings" && styles["active"]
          }`}
          onClick={() => {
            setControls("settings");
          }}
        >
          <SettingsIcon size={18} />
        </div>
      </div>

      {controls === "edit" && (
        <Edit
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          image={image}
          setImage={setImage}
          type={type}
          handleGenerateSection={handleGenerateSection}
          loading={loading}
          controls={controls}
          setControls={setControls}
          layout={layout}
          activeSection={activeSection}
          sections={sections}
          setSections={setSections}
        />
      )}
      {controls === "generate" && (
        <Generate
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
        />
      )}

      {controls === "settings" && (
        <Settings
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
        />
      )}
    </div>
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
  sections: any;
  setSections: React.Dispatch<React.SetStateAction<any>>;
};
