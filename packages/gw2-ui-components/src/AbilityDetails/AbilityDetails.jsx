import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import DetailsHeader from '../DetailsHeader';
import DetailsFact from '../DetailsFact';
import DetailsText from '../DetailsText';
import { factsOrder } from '../helpers';

const AbilityDetails = forwardRef(
  (
    {
      data: { name, description: unparsedDescription, categories, facts },
      ...rest
    },
    ref,
  ) => {
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
          sx={{ mb: '10px' }}
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

        <DetailsText
          lines={[
            categories && (
              <span sx={{ color: 'gw2.details.abilityType' }}>
                {categories.map(category => `${category}. `)}
              </span>
            ),
            description,
          ]}
          lineComponent="span"
        />

        {facts && (facts.length > 1 || facts[0].type !== 'Recharge') && (
          <div sx={{ mt: '12px' }}>
            {facts
              .filter(
                (
                  { text, type, prefix: { status: prefixStatus } = {} },
                  index,
                ) =>
                  type !== 'Recharge' &&
                  facts.findIndex(
                    ({
                      text: otherText,
                      type: otherType,
                      prefix: { status: otherPrefixStatus } = {},
                    }) =>
                      text === otherText &&
                      type === otherType &&
                      (!prefixStatus || prefixStatus === otherPrefixStatus),
                  ) === index,
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
