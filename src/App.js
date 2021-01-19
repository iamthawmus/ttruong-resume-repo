import React from "react";
import "./styles.css";
import CenteredTabs from "./CenteredTabs";
import SimpleAccordion from "./SimpleAccordion";
import ExperienceData from "./ExperienceData";
import ProjectData from "./ProjectData";
import EducationData from "./EducationData";

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    //console.log(newValue);
    setValue(newValue);
  };
  let data = [ExperienceData, ProjectData, EducationData];
  //console.log(CenteredTabs);
  return (
    <div className="App">
      <h1>Hello I'm Thomas Truong</h1>
      <h2>Welcome to my resume :)</h2>
      <CenteredTabs value={value} handleChange={handleChange} />
      <SimpleAccordion data={data[value]} />
    </div>
  );
}
