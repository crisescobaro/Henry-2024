// const adduserButton = document.getElementById("adduserButton");

// let i = 1;

// class users {
//     constructor(id, name, username, email){
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//     }
// }

// class repository {
//     constructor() {
//         this.users = [];
//     }
//     createuser({id, name, username, email}){
//         const newuser = new user(id, name, username, email);
//         this.users.push(newuser);

//     } 
// }

// const repository = new repository();


// const refresh = () => {
//     const usersContainer = document.getElementById("usersContainer");
//     usersContainer.innerHTML = "";

//     const users = repository.users;

//     const htmlUsers = users.map((user) => {
//         const name = document.createElement("h3");
//         const email = document.createElement("p");

//         name.innerHTML = user.name;
//         email.innerHTML = user.email;

//         const card = document.createElement("div");
//         card.appendChild(name);
//         card.appendChild(email);

//         return card;
//     });

//     htmlUsers.forEach((card) => {
//         usersContainer.appendChild(card);
//     });
// };

// const adduser = () => {
//     if(i > 10) return alert("no hay mas usuarios");
//     $.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data, status) => {
//         console.log(data);
//         i++;
//         refresh()
//     });
// };

// adduserButton.addEventListener("click", adduser);







const adduserButton = document.getElementById("adduserButton");

let i = 1;

class User {
    constructor(id, name, username, email){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }
}

class Repository {
    constructor() {
        this.users = [];
    }
    
    createUser({id, name, username, email}){
        const newUser = new User(id, name, username, email);
        this.users.push(newUser);
    } 
}

const repository = new Repository();

const refresh = () => {
    const usersContainer = document.getElementById("usersContainer"); // Asegúrate de que coincida con el ID del HTML
    usersContainer.innerHTML = "";

    const users = repository.users;

    const htmlUsers = users.map((user) => {
        const name = document.createElement("h3");
        const email = document.createElement("p");

        name.innerHTML = user.name;
        email.innerHTML = user.email;

        const card = document.createElement("div");
        card.appendChild(name);
        card.appendChild(email);

        return card;
    });

    htmlUsers.forEach((card) => {
        usersContainer.appendChild(card);
    });
};

const adduser = () => {
    if(i > 10) return alert("No hay más usuarios");
    
    $.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data, status) => {
        if (status === "success") {
            repository.createUser(data); // Añadir usuario al repositorio
            i++;
            refresh();
        }
    });
};

adduserButton.addEventListener("click", adduser);

