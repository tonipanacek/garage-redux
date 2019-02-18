// TODO: add and export your own actions
const ROOT_URL = 'https://wagon-garage-api.herokuapp.com/3342/cars';

export const FETCH_CARS = 'FETCH_CARS';

export function fetchCars() {
  const promise = fetch(ROOT_URL)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  }
}
