document.addEventListener("DOMContentLoaded", () => {
    const dogImages = document.querySelectorAll(".dog-image");
    const dogDetails = {
        name: document.getElementById("dog-name"),
        age: document.getElementById("dog-age"),
        weight: document.getElementById("dog-weight"),
        address: document.getElementById("dog-address"),
        description: document.getElementById("dog-description")
    };

    // Fetch dog details from JSON (simulate database fetch)
    fetch('dogs.json')
        .then(response => response.json())
        .then(data => {
            const dogs = data.dogs;
            dogImages.forEach(dogImage => {
                dogImage.addEventListener("click", () => {
                    const dogId = dogImage.id;
                    const selectedDog = dogs.find(dog => dog.id === dogId);

                    if (selectedDog) {
                        dogDetails.name.textContent = selectedDog.name;
                        dogDetails.age.textContent = selectedDog.age;
                        dogDetails.weight.textContent = selectedDog.weight;
                        dogDetails.address.textContent = selectedDog.address;
                        dogDetails.description.textContent = selectedDog.description;
                    }
                });
            });
        });
});

