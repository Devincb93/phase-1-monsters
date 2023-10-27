

document.addEventListener("DOMContentLoaded", () => {
    const createMonster = document.getElementById("create-monster");
    const monsterContainer = document.getElementById("monster-container");
    const forwardBtn = document.getElementById("forward");
    const backBtn = document.getElementById("back");

    fetch("http://localhost:3000/monsters")
    .then(monster => monster.json())
    .then(monsterData => {
        monsterData.forEach((monster) => {
            /**Creates the div elements for the 50 monsters given in the above api */
            const monsterNames = document.createElement("h2");
            monsterNames.innerHTML = monster.name 
            const monsterAge = document.createElement("h4");
            monsterAge.innerHTML = monster.age
            const monsterBio = document.createElement("p");
            monsterBio.innerHTML = monster.description
            
            monsterContainer.append(monsterNames, monsterAge, monsterBio)
            
        })

            const enterName = document.createElement("input");
            enterName.id = "name-input"
            enterName.placeholder = "name..."
            const enterAge = document.createElement("input");
            enterAge.id = "age-input"
            enterAge.placeholder = "age..."
            const enterBio = document.createElement("input");
            enterBio.id = "bio-input"
            enterBio.placeholder = "description..."
            const createBtn = document.createElement("button")
            createBtn.innerHTML = "Create"

            createMonster.append(enterName, enterAge, enterBio, createBtn)

            
        createBtn.addEventListener("click", () => {
            const nameInput = enterName.value;
            const ageInput = enterAge.value;
            const bioInput = enterBio.value;

            const updateMonsters = {
          
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
        
                    },
                    body: JSON.stringify({
                        name: nameInput,
                        age: ageInput,
                        description: bioInput})  
                                
    }
    fetch("http://localhost:3000/monsters", updateMonsters)
        return updateMonsters
        })
        
            

            
})
})