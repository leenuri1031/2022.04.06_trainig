

const costOj = {
  plane : 900000,
  londondHostel : 50000,
  eurostar : 45000,
  shopping : 100000,
  meal : 15000,
  traffic : 10000,
  parisHostel : 45000,
  spainPlane : 120000,
  spainHostel : 200000,
  italyPlane : 150000,
  italyHostel : 40000,
  italyTrain : 150000
}

const londonAday = {
  hostelAday : costOj.londondHostel,
  oysterCard : costOj.traffic,
  meal : costOj.meal,
  shopping : costOj.shopping
}

let london4DayCost = (londonAday.hostelAday + londonAday.oysterCard + londonAday.meal + londonAday.shopping)*4;

console.log(london4DayCost);

let paris3DayCost = (costOj.parisHostel+ costOj.traffic + costOj.meal )*3 + (costOj.shopping*2);

console.log(paris3DayCost);


let spain5DayCost = costOj.spainHostel + ( costOj.traffic + costOj.meal + costOj.shopping)*5;

console.log(spain5DayCost);

let italy5DayCost = costOj.italyTrain + (costOj.italyHostel + costOj.meal + costOj.shopping)*5;

console.log(italy5DayCost);

// let trafficSum = ;











