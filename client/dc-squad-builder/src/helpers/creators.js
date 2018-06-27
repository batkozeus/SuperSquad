export const getVisibleHeroes = (heroes, filteredHeroName) =>
  heroes.filter(hero =>
    hero.name.toLowerCase().includes(filteredHeroName.toLowerCase()));

export const getAvailableHeroes = (allHeroes, ids) =>
  allHeroes.filter(hero => !ids.includes(hero.id));

export const getSquadHeroes = (allHeroes, ids) =>
  allHeroes.filter(hero => ids.includes(hero.id));

export const getAttrInfo = (squadHeroes, attr) =>
squadHeroes.reduce((acc, hero) => acc + hero[attr],
  0
);

export const composeSquad = (allHeroes, ids) => {
  const composeSquadHeroes =
    allHeroes.filter(hero => ids.includes(hero.id));

  const getTotalAttrInfo = {
    str: getAttrInfo(composeSquadHeroes, 'strength'),
    int: getAttrInfo(composeSquadHeroes, 'intelligence'),
    spd: getAttrInfo(composeSquadHeroes, 'speed')
  };

  const newSquad = {
    heroes: composeSquadHeroes,
    stats: getTotalAttrInfo
  };
  return newSquad;
};
