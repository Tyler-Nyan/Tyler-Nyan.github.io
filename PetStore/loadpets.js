const pets = [
    { name: "Charlie", breed: "Golden Retriever", kind: "Dog", image: "dog.jpg" },
    { name: "Milo", breed: "British Shorthair", kind: "Cat", image: "cat.jpg" },
];

function groupPetsByKind(pets) {
    const grouped = {};
    pets.forEach(pet => {
        if (!grouped[pet.kind]) grouped[pet.kind] = [];
        grouped[pet.kind].push(pet);
    });
    return grouped;
}

function displayPets() {
    const petListContainer = document.getElementById("pet-list");
    petListContainer.innerHTML = ""; // clear previous pets

    const groupedPets = groupPetsByKind(pets);

    for (const kind in groupedPets) {
        const groupDiv = document.createElement("div");
        groupDiv.className = "pet-group";

        const heading = document.createElement("h3");
        heading.textContent = kind + "s";
        groupDiv.appendChild(heading);

        const petList = document.createElement("div");
        petList.className = "pet-list";

        groupedPets[kind].forEach(pet => {
            const petDiv = document.createElement("div");
            petDiv.className = "pet";
            petDiv.innerHTML = `
                <img src="${pet.image}" alt="Cute ${pet.kind}">
                <p>${pet.name} - ${pet.breed}</p>
                <button onclick="adoptPet()">Adopt Now</button>
            `;
            petList.appendChild(petDiv);
        });

        groupDiv.appendChild(petList);
        petListContainer.appendChild(groupDiv);
    }
}

window.onload = displayPets;
