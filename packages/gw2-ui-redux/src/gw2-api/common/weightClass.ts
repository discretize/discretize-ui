const WEIGHT_CLASSES = ['Heavy', 'Medium', 'Light', 'Clothing'] as const
type GW2ApiWeightClass = typeof WEIGHT_CLASSES[number]

export default GW2ApiWeightClass
