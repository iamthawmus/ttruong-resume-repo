import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CenteredTabs from "./CenteredTabs";
import SimpleAccordion from "./SimpleAccordion";
import ExperienceData from "./data/ExperienceData";
import ProjectData from "./data/ProjectData";
import EducationData from "./data/EducationData";
import LinksData from "./data/LinksData";
import StackData from "./data/StackData";
import ToolsData from "./data/ToolsData";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular,
    textAlign: "center",
    fontFamily: "sans-serif"
  }
}));

export default function App() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  const data = [ExperienceData, ProjectData, EducationData, LinksData];
  const data2 = [StackData, ToolsData];
  const tabNames = ["Experience", "Projects", "Education", "Links"];
  const tabNames2 = ["Stacks", "Tools"];

  return (
    <div className={classes.heading}>
      <h1>Hello I'm Thomas Truong</h1>
      <h2>Welcome to my resume :)</h2>
      <CenteredTabs
        value={value}
        handleChange={handleChange}
        tabNames={tabNames}
      />
      <SimpleAccordion data={data[value]} />
      <h2>Technology & Skills</h2>
      <CenteredTabs
        value={value2}
        handleChange={handleChange2}
        tabNames={tabNames2}
      />
      <SimpleAccordion data={data2[value2]} />
    </div>
  );
}
