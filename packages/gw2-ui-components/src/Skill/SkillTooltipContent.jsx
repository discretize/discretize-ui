import React, { Fragment } from 'react';

import { TooltipHeader, TooltipFact } from '../Tooltip';
import { withStyles, formatFlavor, factsOrder } from '../helpers';

const styles = {
  description: {
    whiteSpace: 'pre-wrap',
  },
  special: {
    color: '#efdf80',
  },
  reminder: {
    color: 'rgba(255,255,255,0.7)',
  },
  facts: {},
};

const SkillTooltipContent = ({
  classes,
  data: { name, description: unparsedDescription, categories, facts },
}) => {
  const { value: rechargeValue, icon: rechargeIcon } =
    (facts && facts.find(({ type }) => type === 'Recharge')) || {};

  let description = unparsedDescription;

  if (categories) {
    description = description.replace(
      new RegExp(
        `^(${categories.map(category => `${category}\\. `).join('|')})`,
        'g',
      ),
      '',
    );
  }

  if (description) {
    description = formatFlavor(description, {
      ability: null,
      abilitytype: classes.special,
      reminder: classes.reminder,
    });
  }

  return (
    <Fragment>
      <TooltipHeader
        flags={[
          ...(rechargeValue
            ? [
                {
                  value: rechargeValue,
                  icon: rechargeIcon,
                },
              ]
            : []),
        ]}
        classes={{ title: classes.title }}
      >
        {name}
      </TooltipHeader>

      <div className={classes.description}>
        {categories && (
          <span className={classes.special}>
            {categories.map(category => `${category}. `)}
          </span>
        )}

        {description}
      </div>

      {facts && facts.length > 0 && (
        <div className={classes.facts}>
          {facts
            .filter(
              ({ text, type }, index) =>
                type !== 'Recharge' &&
                (type === 'PrefixedBuff' ||
                  facts.findIndex(
                    ({ text: otherText, type: otherType }) =>
                      text === otherText && type === otherType,
                  ) === index),
            )
            .sort(
              ({ type: a }, { type: b }) =>
                (factsOrder[a] || 0) - (factsOrder[b] || 0),
            )
            .map((data, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <TooltipFact key={`${data.type}-${index}`} data={data} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default withStyles(styles)(SkillTooltipContent);
