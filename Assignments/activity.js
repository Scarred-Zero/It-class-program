const petStore = [
    { name: "Max", species: "Dog", age: 3 },
    { name: "Luna", species: "Cat", age: 2 },
    { name: "Buddy", species: "Dog", age: 5 },
];

console.log(petStore);

petStore[0].age = 4;
console.log(petStore);

function findDogs() {
    const dogs = [];
    for (let i = 0; i < petStore.length; i++) {
        const normalisedSpecies = petStore[i].species.toLowerCase();
        if (normalisedSpecies === "dog") {
            dogs.push(petStore[i]);
        }
    }
    return dogs;
}

console.log(findDogs());

const petStoreJSON = JSON.stringify(petStore);

console.log(petStoreJSON);