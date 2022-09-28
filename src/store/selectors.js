export const filteredPets = (store) => {
  const { pets, filters } = store;

  const ageFilters = Object.entries(filters.age)
    .filter(([_key, value]) => {
      return value;
    })
    .map(([key]) => key.split("-").map(Number));

  return pets.filter((pet) => {
    const result = ageFilters.find(([min, max]) => {
      // console.log(min, max, pet.age);
      return pet.age >= min && pet.age <= max;
    });
    // console.log("result", result);
    return result;
  });
};
