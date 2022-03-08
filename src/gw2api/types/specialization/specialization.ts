interface GW2ApiSpecialization {
  id: number;
  name: string;
  profession: string;
  elite: boolean;
  icon: string;
  profession_icon?: string;
  profession_icon_big?: string;
  background: string;
  minor_traits: number[];
  major_traits: number[];
  weapon_trait?: number;
}

export default GW2ApiSpecialization;
