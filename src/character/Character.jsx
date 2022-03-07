import { Box, Paper, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { GatsbyImage } from 'gatsby-plugin-image';
import Skills from './Skills';
import Legends from './Legends';
import Armor from './Armor';
import Attributes from './Attributes';
import BackAndTrinkets from './BackAndTrinkets';
import Consumables from './Consumables';
import Weapons from './Weapons';
import AssumedBuffs from './AssumedBuffs';
import HelperIcon from '../HelperIcon';

const useStyles = makeStyles()((theme) => ({
  section: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    borderRadius: 0,
    boxShadow:
      '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)',
  },
}));

const Character = ({
  profession,
  attributes,
  assumedBuffs,
  armorPropsAPI,
  weaponPropsAPI,
  skillsPropsAPI,
  legendsPropsAPI,
  backAndTrinketPropsAPI,
  consumablesPropsAPI,
  imageData,
}) => {
  const { classes } = useStyles();

  const theme = useTheme();
  const big = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      {assumedBuffs && (
        <Box display="flex" justifyContent="flex-end">
          <HelperIcon text="Assumed buffs for this build" />
          <AssumedBuffs value={assumedBuffs} />
        </Box>
      )}
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        <Box flex="0 0 250px" display="flex" flexDirection="column" justifyContent="space-between">
          <Paper elevation={0} className={classes.section}>
            <Armor {...armorPropsAPI} />
          </Paper>

          <Paper elevation={0} className={classes.section}>
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
              style={big ? { maxWidth: 390, alignSelf: 'center' } : { maxWidth: 390 }}
              elevation={0}
              className={classes.section}
            >
              {skillsPropsAPI && <Skills {...skillsPropsAPI} unembossed />}
              {legendsPropsAPI && <Legends {...legendsPropsAPI} />}
            </Paper>
          )}
        </Box>

        <Box flex="0 0 250px" display="flex" flexDirection="column" justifyContent="space-between">
          <Paper elevation={0} className={classes.section}>
            <Attributes profession={profession} data={attributes} />
          </Paper>

          <Paper elevation={0} className={classes.section}>
            <BackAndTrinkets {...backAndTrinketPropsAPI} />
          </Paper>
          <Paper elevation={0} className={classes.section}>
            <Consumables {...consumablesPropsAPI} />
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Character;
