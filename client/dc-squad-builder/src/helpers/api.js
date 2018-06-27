import axios from 'axios';

export const getAllHeroes = () =>
    axios
    .get("/heroes")
    .then(({data, status}) => {
        if (status === 200) {
            return data;
        }
        return {errors: {global: 'Error while fetching'}};
    })
    .catch(error => {console.error(`Error while fetching: ${error}`)});

export const addNewHero = (newHero) =>
    axios
    .post("/heroes", newHero)
    .then(({data, status}) => {
        if (status === 201) {
            return data;
        }
        return {errors: {global: 'Error while adding'}};
    })
    .catch(error => {console.error(`Error while adding: ${error}`)});

export const deleteHero = (heroId) => 
    axios
    .delete(`/heroes/${heroId}`)
    .then(({status}) => status === 200)
    .catch(error => {
        console.error(`Hero wasn't deleted: ${error}`);
    });

export const getAllSquads = () =>
    axios
    .get("/squads")
    .then(({data, status}) => {
        if (status === 200) {
            return data;
        }
        return {errors: {global: 'Error while fetching'}};
    })
    .catch(error => {console.error(`Error while fetching: ${error}`)});

export const addNewSquad = (newSquad) =>
    axios
    .post("/squads", newSquad)
    .then(({data, status}) => {
        if (status === 201) {
            return data;
        }
        return {errors: {global: 'Error while adding'}};
    })
    .catch(error => {console.error(`Error while adding: ${error}`)});

export const deleteOldSquad = (squadId) => 
    axios
    .delete(`/squads/${squadId}`)
    .then(({status}) => status === 200)
    .catch(error => {
        console.error(`Squad wasn't deleted: ${error}`);
    });