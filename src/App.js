import React from "react";
import "./styles.css";
import CenteredTabs from "./CenteredTabs";
import SimpleAccordion from "./SimpleAccordion";
import ExperienceData from "./data/ExperienceData";
import ProjectData from "./data/ProjectData";
import EducationData from "./data/EducationData";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

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
      {value === 1 ? <Divider /> : null}
      {value === 1 ? (
        <Typography>
          <Link href="https://store.steampowered.com/app/1398420/One_Last_Dungeon/">
            Visit One Last Dungeon store page
          </Link>
        </Typography>
      ) : null}
    </div>
  );
}
