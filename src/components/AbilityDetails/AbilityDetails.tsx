import React from 'react';
import { GW2ApiSkill } from '../../gw2api/types/skills/skill';
import factsOrder from '../../helpers/factsOrder';
import DetailsFact from '../DetailsFact/DetailsFact';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import DetailsText from '../DetailsText/DetailsText';
import Spinner from '../Spinner/Spinner';
import css from './AbilityDetails.module.css';
import GW2ApiTrait, { GW2ApiTraitSkill } from '../../gw2api/types/traits/trait';

export interface AbilityDetailsProps {
  data: GW2ApiSkill | GW2ApiTrait | GW2ApiTraitSkill;
}

// type is "skills" or "traits"
const AbilityDetails = ({ data }: AbilityDetailsProps) => {
  const { name, description: unparsedDescription, categories, facts } = data;

  const { value: rechargeValue, icon: rechargeIcon } =
    (facts && facts.find(({ type }) => type === 'Recharge')) || {};

  let description = unparsedDescription;
  if (categories && description) {
    description = description.replace(
      new RegExp(
        `^(${categories.map((category) => `${category}\\. `).join('|')})`,
        'g',
      ),
      '',
    );
  }

  return (
    <div>
      <DetailsHeader
        className={css.mb8}
        {...(rechargeValue && {
          flags: [
            {
              value: rechargeValue,
              icon: rechargeIcon,
            },
          ],
        })}
      >
        {name}
      </DetailsHeader>
      {!(unparsedDescription || categories || facts) && <Spinner />}
      <DetailsText
        lines={[
          categories && (
            <span className={css.detailsText}>
              {categories.map((category) => `${category}. `)}
            </span>
          ),
          description,
        ]}
        lineComponent="span"
      />

      {facts && (
        <DetailsFact
          facts={facts
            .filter((fact) => fact.type !== 'Recharge')
            .sort((a, b) => factsOrder[a.type] - factsOrder[b.type])}
        />
      )}
    </div>
  );
};

export default AbilityDetails;
