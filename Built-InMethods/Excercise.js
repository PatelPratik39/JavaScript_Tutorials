const chefList = new Map();
let chefCount = 0;
let indianChefCount = 0;

const chefProxyHandler = {
  set(targetObj, name, value) {
    targetObj[name] = value;
    if (targetObj[name].country == "India") {
      indianChefCount++;
    }
    chefCount++;
  }
};

function onLoad() {
  const chefProxy = new Proxy(chefList, chefProxyHandler);
  chefProxy.John = { country: "India", speciality: "Continental" };
  chefProxy.Jack = { country: "Australia", speciality: "Saucier" };
  chefProxy.Jonathan = { country: "India", speciality: "Pastry" };

  // Log data.
  console.log(`Total numbers of chefs are - ${chefCount}`);
  console.log(`Total numbers of Indian chefs are - ${indianChefCount}`);
  for (let key of Object.keys(chefList)) {
    if (chefList[key].country == "India") {
      console.log(`Chef Details - Name - ${key} Speciality - ${chefList[key].speciality}`);
    }
  }
}
