import { GW2ApiFactRecharge } from '../../gw2api/types/common/fact';
import { GW2ApiSkill } from '../../gw2api/types/skills/skill';
import GW2ApiTrait, { GW2ApiTraitSkill } from '../../gw2api/types/traits/trait';
import factsOrder from '../../helpers/factsOrder';
import DetailsFact from '../DetailsFact/DetailsFact';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import DetailsText from '../DetailsText/DetailsText';
import Spinner from '../Spinner/Spinner';
import css from './AbilityDetails.module.css';

const invalidCategories = [
  'Signet',
  'LegendaryDwarf',
  'LegendaryDemon',
  'LegendaryAssassin',
  'LegendaryCentaur',
];

export interface AbilityDetailsProps {
  data: GW2ApiSkill | GW2ApiTrait | GW2ApiTraitSkill;
}
// type is "skills" or "traits"
const AbilityDetails = ({ data }: AbilityDetailsProps) => {
  const { name, description: unparsedDescription, facts } = data;
  const categories = (data as GW2ApiSkill).categories || undefined;

  const { value: rechargeValue, icon: rechargeIcon } =
    ((facts &&
      facts.find(({ type }) => type === 'Recharge')) as GW2ApiFactRecharge) ||
    {};

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
        {...(rechargeValue &&
          rechargeIcon && {
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
          <>
            <span className={css.detailsText}>
              {categories &&
                categories
                  .filter((category) => !invalidCategories.includes(category))
                  .map((category) => `${category}. `)}
            </span>
            {description}
          </>,
        ]}
        lineComponent="span"
      />

      {facts && (
        <DetailsFact
          facts={facts
            .filter((fact) => fact.type !== 'Recharge')
            .sort((a, b) => factsOrder[a.type] - factsOrder[b.type])}
          className={css.mt12}
        />
      )}
    </div>
  );
};

export default AbilityDetails;
