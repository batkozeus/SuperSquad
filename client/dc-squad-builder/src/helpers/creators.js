export const getVisibleHeroes = (heroes, filteredHeroName) =>
  heroes.filter(hero =>
    hero.name.toUpperCase().includes(filteredHeroName.toUpperCase()));

export const getAvailableHeroes = (serverHeroesList, squadHeroesList) =>
  serverHeroesList.filter(hero => !squadHeroesList.includes(hero.id));

export const getSquadHeroes = (serverHeroesList, squadHeroesList) =>
  serverHeroesList.filter(hero => squadHeroesList.includes(hero.id));

export const composeSquad = (serverHeroesList, squadHeroesList) => {
  const newSquad = {};
  const composeSquadHeroes =
    serverHeroesList.filter(hero => squadHeroesList.includes(hero.id));
  const getTotalAttrInfo = {
    str: composeSquadHeroes.reduce(
      (acc, hero) => acc + hero.strength,
      0
    ),
    int: composeSquadHeroes.reduce(
      (acc, hero) => acc + hero.strength,
      0
    ),
    spd: composeSquadHeroes.reduce(
      (acc, hero) => acc + hero.speed,
      0
    )
  }
  newSquad.heroes = composeSquadHeroes;
  newSquad.stats = getTotalAttrInfo;
  return newSquad;
};
