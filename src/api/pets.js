export const apiGetDogs = () =>
  fetch("http://adoptame.ga/pets/").then((res) => res.json());
