import {
  Box,
  makeStyles,
  Paper,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Skills from "./Skills";
import Legends from "./Legends";
import Armor from "./Armor";
import Attributes from "./Attributes";
import BackAndTrinkets from "./BackAndTrinkets";
import Consumables from "./Consumables";
import Weapons from "./Weapons";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
  },
}));

const Character = ({
  profession,
  attributes,
  armorPropsAPI,
  weaponPropsAPI,
  skillsPropsAPI,
  legendsPropsAPI,
  backAndTrinketPropsAPI,
  consumablesPropsAPI,
  imageData,
}) => {
  const classes = useStyles();

  const theme = useTheme();
  const big = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-between">
      <Box
        flex="0 0 250px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Paper elevation={5} className={classes.section}>
          <Armor {...armorPropsAPI} />
        </Paper>

        <Paper elevation={5} className={classes.section}>
          <Weapons {...weaponPropsAPI} />
        </Paper>
      </Box>

      <Box
        display="flex"
        flex="0.7 0.2 300px"
        flexDirection="column"
        justifyContent="space-between"
      >
        {imageData && <GatsbyImage image={imageData} alt="Profession Image" />}

        {(skillsPropsAPI || legendsPropsAPI) && (
          <Paper
            style={
              big ? { maxWidth: 390, alignSelf: "center" } : { maxWidth: 390 }
            }
            elevation={5}
            className={classes.section}
          >
            {skillsPropsAPI && <Skills {...skillsPropsAPI} unembossed />}
            {legendsPropsAPI && <Legends {...legendsPropsAPI} />}
          </Paper>
        )}
      </Box>

      <Box
        flex="0 0 250px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Paper elevation={5} className={classes.section}>
          <Attributes profession={profession} data={attributes} />
        </Paper>

        <Paper elevation={5} className={classes.section}>
          <BackAndTrinkets {...backAndTrinketPropsAPI} />
        </Paper>
        <Paper elevation={5} className={classes.section}>
          <Consumables {...consumablesPropsAPI} />
        </Paper>
      </Box>
    </Box>
  );
};

export default Character;
