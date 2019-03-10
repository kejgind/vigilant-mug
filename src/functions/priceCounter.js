export const priceCounter = data => {
  const recivedPrice = Number.parseFloat(data.price);
  const recivedSize = data.size
    // create array by splitting recived string by any non digit character
    .split(/\D/g)
    // filter array to store only digits
    .filter(item => {
      return item.match(/\d/g);
    })
    // turn strings with digits to intigers
    .map(item => Number.parseInt(item))
    // show size in [ml] of beer
    .reduce((acc, cur) => {
      return acc * cur;
    }, 1);

  // get price by litre
  const dirtyPrice = recivedPrice / (recivedSize / 1000);
  const pricePerLitre = Math.round(Math.round(dirtyPrice * 1000) / 10) / 100;
  return pricePerLitre.toFixed(2);
};
