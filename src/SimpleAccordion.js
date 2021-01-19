import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SimpleList from "./SimpleList";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function SimpleAccordion({ data }) {
  const classes = useStyles();

  let arr = data.data;

  return (
    <div className={classes.root}>
      {arr.map((entry, index) => {
        let count = index + 1;
        let aControls = "panel" + count + "a-content";
        let id = "panel" + count + "a-header";
        const title = entry != null ? entry.title : "Test";
        const subTitle1 = entry != null ? entry.subtitle1 : "";
        const subTitle2 = entry != null ? entry.subtitle2 : "";
        const bullets = entry != null ? entry.bullets : [];
        const link = entry != null && entry.link != null ? entry.link : null;
        return (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={aControls}
              id={id}
            >
              <Typography className={classes.heading}>{title}</Typography>
            </AccordionSummary>
            {link != null ? (
              <AccordionDetails>
                <Typography>
                  <Link href={link}>{subTitle1}</Link>
                </Typography>
              </AccordionDetails>
            ) : (
              <AccordionDetails>
                <Typography>{subTitle1}</Typography>
                <Typography>{subTitle2}</Typography>
                <SimpleList data={bullets}></SimpleList>
              </AccordionDetails>
            )}
          </Accordion>
        );
      })}
    </div>
  );
  //});
}
