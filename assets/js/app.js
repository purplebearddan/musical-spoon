// JS

// selecting an element to recieve our items from out list 
const unorderedList = document.querySelector("#repos");

const repos = async (url) => {
    
    try{
        
        const response = await fetch(url);
        const json = await response.json();
        
        json.forEach((repo) => {
            const li = document.createElement("li");
            li.textContent = repo.name;
            unorderedList.appendChild(li);
        });
    }
    catch(e){
        console.error(`You've errored: ${e.message}`)
    }

};

window.addEventListener("load", () => {
    console.log("This will run before something is wrong")
    
    repos("https://api.github.com/users/mowglixx/repos");
    
    console.log("This will run if nothing is wrong")
});
