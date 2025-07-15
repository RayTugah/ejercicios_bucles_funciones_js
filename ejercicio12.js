const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' },
  { name: 'Professor A', power: 'telepathy' }
];

function findMutantByPower(mutants, power) {
    let foundMutants = null;
    for (let i = 0; i < mutants.length; i++) {
        if (mutants[i].power === power) {
            if (!foundMutants) {
                foundMutants = [];
            }
            foundMutants.push(mutants[i].name);
        }
    }
    if (foundMutants) {
        return `Encontrado/s ${foundMutants.length} mutante/s con el poder de ${power}: ${foundMutants}`;
    } else {
        return `No se encontraron mutantes con el poder de ${power}.`;
    }
}
console.log(findMutantByPower(mutants, 'telepathy'));