const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 },
  //! Añado Rogue como personaje más antiguo ya que habían 5 personajes con el mismo año, retornaba el nombre de los 5.
  { name: 'Rogue', year: 1960 }
];

function findOldestXMen(xMen) {
    let oldestXMen= [];
    let oldestYear = 5000;
    for (let i = 0; i < xMen.length; i++) {
        if (xMen[i].year < oldestYear) {
            oldestYear = xMen[i].year;
            oldestXMen = [xMen[i].name];
        } else if (xMen[i].year === oldestYear) {
            oldestXMen.push(xMen[i].name);
        }
    }
    return oldestXMen;
}
console.log(findOldestXMen(xMen));