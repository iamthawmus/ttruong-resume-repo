import React from "react";
import "./styles.css";
import CenteredTabs from "./CenteredTabs";
import SimpleAccordion from "./SimpleAccordion";

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    //console.log(newValue);
    setValue(newValue);
  };

  //console.log(CenteredTabs);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CenteredTabs value={value} handleChange={handleChange} />
      {value === 0 ? <SimpleAccordion /> : null}
    </div>
  );
}
