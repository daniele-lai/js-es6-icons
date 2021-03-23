// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//
// Milestone 2
// Coloriamo le icone per tipo
//
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];
// Milestone 1
// Mostriamo in pagina le icone
// icons.forEach((item) => {
//
//   const {name, prefix, family, category} = item
//   const box = `
//   <div>
//   <i class="${family} ${prefix}${name}"></i>
//   <div class="title">${name}</div>
//   </div>`
//
//   $(".icons").append(box);
// });
// Milestone 2
// Coloriamo le icone per tipo
//1. Mi riprendo le categorie ma per assegnarle ad un array
const categorie = [];

icons.forEach((item) => {
  if (categorie.includes(item.category) == false) {
    categorie.push(item.category);
  }
});

//2. Creo un array di Colori
const colori = ["tomato","lightgreen","lightblue"];

//3. Assegnamo la proprietà colori agli oggetti
const newIcons = icons.map((item, i) => {
  const categorieIndex = categorie.indexOf(item.category);
  const colorIcon = colori[categorieIndex];
  item.color = colorIcon;
  return item;
});

//4. Riutilizziamo il for Each per stampare il nuovo array
newIcons.forEach((item) => {

  const {name, prefix, family, category, color} = item
  const box = `
  <div>
  <i class="${family} ${prefix}${name}" style = color:${color}></i>
  <div class="title">${name}</div>
  </div>`

  $(".icons").append(box);
});
