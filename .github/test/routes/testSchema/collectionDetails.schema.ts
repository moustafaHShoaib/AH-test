const webImageBody = () => {
  return {
    guid: "6e35f2ad-d28f-4ef8-b18a-f18b2df22651",
    height: 2500,
    offsetPercentageX: 50,
    offsetPercentageY: 0,
    url: "https://lh6.ggpht.com/NLXTn4xmW5qcQQP7nL_BM9eOzXLdrKtcFUQdeLSWXHrpjMBuF3XjGV7sulajkXRYrr9G-qZdMcH3Q0fIso_jXxcjzAU=s0",
    width: 1656,
  };
};
const principalMakersBodyEN = () => {
  return [
    {
      biography: null,
      dateOfBirth: null,
      dateOfBirthPrecision: null,
      dateOfDeath: null,
      dateOfDeathPrecision: null,
      labelDesc: "attributed to Borman workshop",
      name: "Borman workshop",
      nationality: null,
      occupation: [],
      placeOfBirth: null,
      placeOfDeath: null,
      productionPlaces: [],
      qualification: "attributed to",
      roles: ["sculptor"],
      unFixedName: "Borman workshop",
    },
    {
      biography: null,
      dateOfBirth: "1465",
      dateOfBirthPrecision: null,
      dateOfDeath: "1498-06",
      dateOfDeathPrecision: "before",
      labelDesc:
        "attributed to Renier van Thienen (I) (1465 - before jun-1498), Brussels",
      name: "Renier van Thienen (I)",
      nationality: "Vlaams",
      occupation: ["caster", "brazier"],
      placeOfBirth: "Tienen",
      placeOfDeath: null,
      productionPlaces: ["Brussels"],
      qualification: "attributed to",
      roles: ["caster"],
      unFixedName: "Thienen, Renier van (I)",
    },
  ];
};
const principalMakersBodyNL = () => {
  return [
    {
      name: 'Borman werkplaats',
      unFixedName: 'Borman werkplaats',
      placeOfBirth: null,
      dateOfBirth: null,
      dateOfBirthPrecision: null,
      dateOfDeath: null,
      dateOfDeathPrecision: null,
      placeOfDeath: null,
      occupation: [],
      roles: [ 'beeldhouwer' ],
      nationality: null,
      biography: null,
      productionPlaces: [],
      qualification: 'toegeschreven aan',
      labelDesc: 'toegeschreven aan Borman werkplaats'
    },
    {
      name: 'Renier van Thienen (I)',
      unFixedName: 'Thienen, Renier van (I)',
      placeOfBirth: 'Tienen',
      dateOfBirth: '1465',
      dateOfBirthPrecision: null,
      dateOfDeath: '1498-06',
      dateOfDeathPrecision: 'voor',
      placeOfDeath: null,
      occupation: [ 'gieter', 'bronsgieter' ],
      roles: [ 'gieter' ],
      nationality: 'Vlaams',
      biography: null,
      productionPlaces: [ 'Brussel (stad)' ],
      qualification: 'toegeschreven aan',
      labelDesc: 'toegeschreven aan Renier van Thienen (I) (1465 - voor jun-1498), Brussel (stad)'
    }
  ];
};
/*
 * Module exports
 */

export { webImageBody, principalMakersBodyEN, principalMakersBodyNL };
