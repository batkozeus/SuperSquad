import React, {Component} from 'react';
import styles from "./App.css";
import Header from "../Header/Header";
import AppBody from "../AppBody/AppBody";
import HeroConstructor from "../HeroConstructor/HeroConstructor";
import HeroesPanel from "../HeroesPanel/HeroesPanel";
import HeroesFilter from "../HeroesFilter/HeroesFilter";
import AvailableHeroCard from "../AvailableHeroCard/AvailableHeroCard";
import SquadEditor from "../SquadEditor/SquadEditor";
import SquadHeroCard from "../SquadHeroCard/SquadHeroCard";
import SquadCard from "../SquadCard/SquadCard";
import {
  getAllHeroes,
  addNewHero,
  deleteOldHero,
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
    serverHeroesList: [],
    squadHeroesList: [],
    serverSquadList: [],
    filterByNameHeroes: ""
  };

  componentDidMount() {
    getAllHeroes().then(data => {
      this.setState({ serverHeroesList: data });
    });
    getAllSquads().then(data => {
      this.setState({ serverSquadList: data });
    });
  }

  hideHeroesFromList = heroName => {
    this.setState({ filterByNameHeroes: heroName });
  };

  filterHeroes = heroName => {
    this.setState({ filterByNameHeroes: heroName });
  };

  addHero = newHero => {
    if (!this.state.serverHeroesList.find(hero => hero.name === newHero.name)) {
      addNewHero(newHero).then(data => {
        this.setState(state => ({
          serverHeroesList: [...state.serverHeroesList, data]
        }));
      });
    } else {
      alert("Such hero exists");
    }
  };

  deleteHero = id => {
    deleteOldHero(id).then(isSuccess => {
      if (isSuccess) {
        this.setState(state => ({
          serverHeroesList: state.serverHeroesList.filter(
            hero => hero.id !== id
          )
        }));
      } else {
        alert("Hero wasn't deleted");
      }
    });
  };

  addToTeam = id => {
    this.setState(state => ({
      squadHeroesList: [...state.squadHeroesList, id]
    }));
  };

  removeFromSquad = id => {
    this.setState(state => ({
      squadHeroesList: state.squadHeroesList.filter(heroId => heroId !== id)
    }));
  };

  resetSquad = () => {
    this.setState({
      squadHeroesList: []
    });
  };

  createSquad = () => {
    const { serverHeroesList, squadHeroesList } = this.state;
    const newSquad = composeSquad(serverHeroesList, squadHeroesList);
    if (squadHeroesList.length !== 0) {
      addNewSquad(newSquad).then(data => {
        this.setState(state => ({
          serverSquadList: [...state.serverSquadList, data]
        }));
      });
      this.setState({
        squadHeroesList: []
      });
    } else {
      alert("Add at list one hero");
    }
  };

  deleteSquad = id => {
    deleteOldSquad(id).then(isSuccess => {
      if (isSuccess) {
        this.setState(state => ({
          serverSquadList: state.serverSquadList.filter(
            squad => squad.id !== id
          )
        }));
      } else {
        alert("Squad wasn't deleted");
      }
    });
  };

  render() {
    const {
      serverHeroesList,
      squadHeroesList,
      serverSquadList,
      filterByNameHeroes
    } = this.state;

    const availableHeroesList = getAvailableHeroes(
      serverHeroesList,
      squadHeroesList
    );

    const forSquadHeroesList = getSquadHeroes(
      serverHeroesList,
      squadHeroesList
    );

    const visibleHeroesList = getVisibleHeroes(
      availableHeroesList,
      filterByNameHeroes
    );

    return (
      <div className={styles.App}>
        <Header />
        <AppBody>
          <HeroesPanel cardTitle="Create Hero">
            <HeroConstructor formHero={this.addHero} />
          </HeroesPanel>
          <HeroesPanel cardTitle="Heroes">
            <HeroesFilter filterHeroes={this.filterHeroes} />
            {visibleHeroesList.map(hero => (
              <AvailableHeroCard
                key={hero.id}
                {...hero}
                destroyHero={this.deleteHero}
                moveHero={this.addToTeam}
              />
            ))}
          </HeroesPanel>
          <HeroesPanel cardTitle="Squad Editor">
            <SquadEditor
              totalAttrInfo={forSquadHeroesList}
              resetHeroes={this.resetSquad}
              composeSquad={this.createSquad}
            >
              {forSquadHeroesList.map(hero => (
                <SquadHeroCard
                  key={hero.id}
                  {...hero}
                  retireHero={this.removeFromSquad}
                />
              ))}
            </SquadEditor>
          </HeroesPanel>
          <HeroesPanel cardTitle="Saved Squads">
            {serverSquadList.map(squad => (
              <SquadCard
                key={squad.id}
                {...squad}
                destroySquad={this.deleteSquad}
              />
            ))}
          </HeroesPanel>
        </AppBody>
      </div>
    );
  }
}

export default App;
