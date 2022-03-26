import { Grid, List, ListItem } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Attribute, Profession } from '@discretize/gw2-ui-new';
import firstUppercase from '../helpers/firstUppercase';

const useStyles = makeStyles()(() => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
    whiteSpace: 'nowrap',
  },
  gridItem: {
    padding: '4px 8px',
  },
}));

const Attributes = ({ profession, data }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <List dense disablePadding>
            <ListItem className={classes.gridItem}>
              <Attribute name="Power" text={`${data.Power}`} className={classes.gw2Item} />
            </ListItem>
            <ListItem className={classes.gridItem}>
              <Attribute name="Toughness" text={`${data.Toughness}`} className={classes.gw2Item} />
            </ListItem>
            <ListItem className={classes.gridItem}>
              <Attribute name="Vitality" text={`${data.Vitality}`} className={classes.gw2Item} />
            </ListItem>
            <ListItem className={classes.gridItem}>
              <Attribute name="Precision" text={`${data.Precision}`} className={classes.gw2Item} />
            </ListItem>
            <ListItem className={classes.gridItem}>
              <Attribute name="Ferocity" text={`${data.Ferocity}`} className={classes.gw2Item} />
            </ListItem>
            <ListItem className={classes.gridItem}>
              <Attribute
                name="Condition Damage"
                text={`${data['Condition Damage']}`}
                className={classes.gw2Item}
              />
            </ListItem>
            <ListItem className={classes.gridItem}>
              <Attribute name="Expertise" text={`${data.Expertise}`} className={classes.gw2Item} />
            </ListItem>
            <ListItem className={classes.gridItem}>
              <Attribute
                name="Concentration"
                text={`${data.Concentration}`}
                className={classes.gw2Item}
              />
            </ListItem>
            <ListItem className={classes.gridItem}>
              <Attribute
                name="Agony Resistance"
                text={`${data['Agony Resistance']}`}
                className={classes.gw2Item}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6}>
          <List dense disablePadding>
            <ListItem className={classes.gridItem}>
              <Profession name={firstUppercase(profession)} text="0" className={classes.gw2Item} />
            </ListItem>
            <ListItem className={classes.gridItem}>
              <Attribute name="Armor" text={`${data.Armor}`} className={classes.gw2Item} />
            </ListItem>
            <ListItem className={classes.gridItem}>
              <Attribute name="Health" text={`${data.Health}`} className={classes.gw2Item} />
            </ListItem>
            <ListItem className={classes.gridItem}>
              <Attribute
                name="Critical Chance"
                text={`${Math.round(data['Critical Chance'] * 10000) / 100}%`}
                className={classes.gw2Item}
              />
            </ListItem>
            <ListItem className={classes.gridItem}>
              <Attribute
                name="Critical Damage"
                text={`${Math.round(data['Critical Damage'] * 1000) / 10}%`}
                className={classes.gw2Item}
              />
            </ListItem>
            <ListItem className={classes.gridItem}>
              <Attribute
                name="Healing Power"
                text={`${data['Healing Power']}`}
                className={classes.gw2Item}
              />
            </ListItem>
            <ListItem className={classes.gridItem}>
              <Attribute
                name="Condition Duration"
                text={`${Math.round(data['Condition Duration'] * 10000) / 100}%`}
                className={classes.gw2Item}
              />
            </ListItem>
            <ListItem className={classes.gridItem}>
              <Attribute
                name="Boon Duration"
                text={`${Math.round(data['Boon Duration'] * 10000) / 100}%`}
                className={classes.gw2Item}
              />
            </ListItem>
            <ListItem className={classes.gridItem}>
              <Attribute name="Magic Find" text="0" className={classes.gw2Item} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Attributes;
