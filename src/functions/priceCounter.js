export const priceCounter = data => {
  const recivedPrice = Number.parseFloat(data.price);
  const recivedSize = data.size
    .split(/\D/g)
    .filter(item => {
      return item.match(/\d/g);
    })
    .map(item => Number.parseInt(item))
    .reduce((acc, cur) => {
      return acc * cur;
    }, 1);
  const dirtyPrice = recivedPrice / (recivedSize / 1000);
  const pricePerLitre = Math.round(Math.round(dirtyPrice * 1000) / 10) / 100;
  return pricePerLitre.toFixed(2);
};
