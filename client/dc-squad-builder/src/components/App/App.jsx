import React, {Component} from 'react';
import styles from "./App.css";
import Header from "../Header/Header";
import AppBody from "../AppBody/AppBody";
import HeroConstructor from "../HeroConstructor/HeroConstructor";
import HeroesPanel from "../HeroesPanel/HeroesPanel";
import HeroesFilter from "../HeroesFilter/HeroesFilter";
import HeroesList from "../HeroesList/HeroesList";
import SquadEditor from "../SquadEditor/SquadEditor";
import SquadMembers from "../SquadMembers/SquadMembers";
import SquadList from "../SquadList/SquadList";

import {
  getAllHeroes,
  addNewHero,
  deleteHero,
  getAllSquads,
  addNewSquad,
  deleteOldSquad
} from "../../helpers/api";
import {
  getVisibleHeroes,
  getAvailableHeroes,
  getSquadHeroes,
  composeSquad
} from "../../helpers/creators";

class App extends Component {
  state = {
    heroes: [],
    squadEditorIds: [],
    squads: [],
    filterByName: ""
  };

  componentDidMount() {
    const heroesPromise = getAllHeroes();

    const squadPromise = getAllSquads();

    Promise.all([heroesPromise, squadPromise]).then(([heroes, squads]) =>
      this.setState({
        heroes,
        squads
      })
    );
  }

  filterHeroes = heroName => {
    this.setState({ filterByName: heroName });
  };

  addHero = newHero => {
    const isUnique = !this.state.heroes.find(
      hero => hero.name === newHero.name
    );

    if (isUnique) {
      addNewHero(newHero).then(data => {
        this.setState(state => ({ heroes: [...state.heroes, data] }));
      });
    } else {
      alert("Such hero exists");
    }
  };

  deleteHero = id => {
    deleteHero(id).then(() => {
      this.setState(state => ({
        heroes: state.heroes.filter(hero => hero.id !== id)
      }));
    });
  };

  addToSquad = id => {
    this.setState(state => ({
      squadEditorIds: [...state.squadEditorIds, id]
    }));
  };

  removeFromSquad = id => {
    this.setState(state => ({
      squadEditorIds: state.squadEditorIds.filter(heroId => heroId !== id)
    }));
  };

  showHeroInfo = id => {
    const chosenHero = !this.state.heroes.find(hero => hero.id === id);
    console.log(
      `${chosenHero.name} stats:\n strength-${chosenHero.strength}\n intelligence-${chosenHero.intelligence}\n speed-${chosenHero.speed}`
    );
  };

  resetSquad = () => {
    this.setState({
      squadEditorIds: []
    });
  };

  createSquad = () => {
    const { heroes, squadEditorIds } = this.state;
    const newSquad = composeSquad(heroes, squadEditorIds);

    if (squadEditorIds.length !== 0) {
      addNewSquad(newSquad).then(data => {
        this.setState(
          state => ({
            squads: [...state.squads, data]
          }),
          this.resetSquad
        );
      });
    } else {
      alert("Add at list one hero");
    }
  };

  deleteSquad = id => {
    deleteOldSquad(id).then(() => {
      this.setState(state => ({
        squads: state.squads.filter(squad => squad.id !== id)
      }));
    });
  };

  render() {
    const { heroes, squadEditorIds, squads, filterByName } = this.state;

    const freeHeroes = getAvailableHeroes(heroes, squadEditorIds);

    const squadHeroes = getSquadHeroes(heroes, squadEditorIds);

    const searchedHeroes = getVisibleHeroes(freeHeroes, filterByName);

    return (
      <div className={styles.App}>
        <Header />
        <AppBody>
          <HeroesPanel cardTitle="Create Hero">
            <HeroConstructor formHero={this.addHero} />
          </HeroesPanel>

          <HeroesPanel cardTitle="Heroes">
            <HeroesFilter
              filteredHeroName={filterByName}
              filterHeroes={this.filterHeroes}
            />
            <HeroesList
              searchedHeroes={searchedHeroes}
              destroyHero={this.deleteHero}
              moveHero={this.addToSquad}
            />
          </HeroesPanel>

          <HeroesPanel cardTitle="Squad Editor">
            <SquadEditor
              squadHeroes={squadHeroes}
              resetHeroes={this.resetSquad}
              composeSquad={this.createSquad}
            >
              <SquadMembers
                squadHeroes={squadHeroes}
                showHeroInfo={this.showHeroInfo}
                retireHero={this.removeFromSquad}
              />
            </SquadEditor>
          </HeroesPanel>

          <HeroesPanel cardTitle="Saved Squads">
            <SquadList squads={squads} destroySquad={this.deleteSquad} />
          </HeroesPanel>
        </AppBody>
      </div>
    );
  }
}

export default App;
