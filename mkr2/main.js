const Distance = document.getElementById('distance'),
      Rashod = document.getElementById('rashod'),

const DistanceRange = document.getElementById('distance-range'),
      RashodRange = document.getElementById('rashod-range'),

    
const NeedFuel = document.getElementById('need-fuel'),
      CostFuel = document.getElementById('cost-fuel'),
    

const inputsRange = document.querySelectorAll('.input-range');

const fuelBtns = document.querySelectorAll('.fuel');

const assignValue = () => {
  Distance.value = DistanceRange.value;
  Rashod.value = RashodRange.value;
}

assignValue();

const fuels = [
  {
    name: 'benz95',
    costs: 35
  },
  {
    name: 'benz92',
    costs: 30
  },
  {
    name: 'gaz',
    costs: 20
  }
];

let currentCost = fuels[0].costs;

for (let fuel of fuelBtns) {
  fuel.addEventListener('click', ()=> {
    for (let item of fuelBtns) {
      item.classList.remove('active');
    }
    fuel.classList.add('active');
    takeActiveBank(fuel);
  })
}

const takeActiveFuel = currentActive => {
  const dataAttrValue = currentActive.dataset.name;
  const currentFuel = fuels.find( fuel => fuel.name === dataAttrValue);
  currentCost = currentFuel.costs;
  calculation(Distance.value, Rashod.value);
};

for (let input of inputsRange) {
  input.addEventListener('input', ()=> {
    assignValue();
    calculation(Distance.value, Rashod.value);
  })
}

const calculation = (Distance = 0, Rashod = 100000) => {
  let litres = Rashod/100 * Distance;
  let sum = litres * currentCost;

  needFuel.innerHTML = `${litres} л`;
  costFuel.innerHTML = `${sum} грн`;
}