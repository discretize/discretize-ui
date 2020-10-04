const progression = [
  {
    min: 2,
    max: 10,
    increase: 7,
  },
  {
    min: 11,
    max: 20,
    increase: 10,
  },
  {
    min: 21,
    max: 24,
    increase: 14,
  },
  {
    min: 25,
    max: 26,
    increase: 15,
  },
  {
    min: 27,
    max: 30,
    increase: 16,
  },
  {
    min: 31,
    max: 40,
    increase: 20,
  },
  {
    min: 41,
    max: 44,
    increase: 24,
  },
  {
    min: 45,
    max: 46,
    increase: 25,
  },
  {
    min: 47,
    max: 50,
    increase: 26,
  },
  {
    min: 51,
    max: 60,
    increase: 30,
  },
  {
    min: 61,
    max: 64,
    increase: 34,
  },
  {
    min: 65,
    max: 66,
    increase: 35,
  },
  {
    min: 67,
    max: 70,
    increase: 36,
  },
  {
    min: 71,
    max: 74,
    increase: 44,
  },
  {
    min: 75,
    max: 76,
    increase: 45,
  },
  {
    min: 77,
    max: 80,
    increase: 46,
  },
]

const primaryAttributes = ['Power', 'Precision', 'Toughness', 'Vitality']

export default (level) => {
  if (!level) {
    return {}
  }

  let primaryAttributesBaseValue = 37 // level 1

  if (level >= 2) {
    for (let i = 2; i <= Math.min(10, level); i += 1) {
      const { increase } = progression.find(
        ({ min, max }) => min <= i && max >= i,
      )
      primaryAttributesBaseValue += increase
    }

    if (level >= 10) {
      for (let i = 12; i <= Math.min(80, level); i += 2) {
        const { increase } = progression.find(
          ({ min, max }) => min <= i && max >= i,
        )
        primaryAttributesBaseValue += increase
      }
    }
  }

  return primaryAttributes.reduce((result, primaryAttribute) => {
    // eslint-disable-next-line no-param-reassign
    result[primaryAttribute] = primaryAttributesBaseValue
    return result
  }, {})
}
