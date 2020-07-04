import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ClassNames } from '@emotion/core';
import { useThemeUI } from '@theme-ui/core';

import DetailsHeader from '../DetailsHeader';
import DetailsFact from '../DetailsFact';
import DetailsText from '../DetailsText';
import { formatFlavor, factsOrder } from '../helpers';

const AbilityDetails = forwardRef(
  (
    {
      data: { name, description: unparsedDescription, categories, facts },
      ...rest
    },
    ref,
  ) => {
    const {
      theme: {
        colors: { gw2: { details: { abilityType, muted } = {} } = {} } = {},
      } = {},
    } = useThemeUI();

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

    return (
      <div {...rest} ref={ref}>
        <DetailsHeader
          {...rechargeValue && {
            flags: [
              {
                value: rechargeValue,
                icon: rechargeIcon,
              },
            ],
          }}
        >
          {name}
        </DetailsHeader>

        <DetailsText sx={{ mb: '4px' }}>
          {categories && (
            <span sx={{ color: 'gw2.details.abilityType' }}>
              {categories.map(category => `${category}. `)}
            </span>
          )}

          {description && (
            <ClassNames>
              {({ css }) =>
                formatFlavor(description, {
                  ability: null,
                  abilitytype: css({ color: abilityType }),
                  reminder: css({ color: muted }),
                })
              }
            </ClassNames>
          )}
        </DetailsText>

        {facts && (
          <div>
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
                <DetailsFact key={`${data.type}-${index}`} data={data} />
              ))}
          </div>
        )}
      </div>
    );
  },
);

AbilityDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

AbilityDetails.displayName = 'AbilityDetails';

export default AbilityDetails;
