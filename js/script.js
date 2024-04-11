// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Milestone 0 
// Creo l'array con gli object

const team = [
    // All'interno dell' array inseriamo tutti gli object. Negli object inseriamo le caratteristiche delle singole persone

    //Team member 1
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },

    //Team member 2
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },

    //Team member 3 
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },

    //Team member 4
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },

    //Team member 5
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },

    //Team member 6
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    },
];

// Faccio passare l'array e stampo in console tutti gli object all'interno
for (i = 0; i < team.length; i++) {
    const teamInfos = team[i];
    // console.log(teamInfos);
    //Milestone 1  
    // Stampo i singoli elementi degli object nella console
    for (let key in teamInfos) {
        // console.log(teamInfos[key]);
    }
}
// Milestone 2
// Creo la visualizzazione delle stringhe dei singoli elementi
const teamCards = document.getElementById("container");
for (let i = 0; i < team.length; i++) {
    const teamInfos = team[i]; 
    console.log(teamInfos);
    // Stapo la classe in pagina
    teamCards.innerHTML += `
    <h1>Nome : ${teamInfos.name}</h1>
    <h2>Ruolo : ${teamInfos.role}</h2>
    <div>Immagine : ${teamInfos.image}</div>
    `;
}