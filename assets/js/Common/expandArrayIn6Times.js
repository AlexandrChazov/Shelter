export const expandArrIn6Times = ((arr) => {
  let tempArr = [];

  for (let i = 0; i < 6; i++) {
    const newArr = arr;

    for (let j = arr.length; j > 0; j--) {
      let randInd = Math.floor(Math.random() * j);
      const randElem = newArr.splice(randInd, 1)[0];
      newArr.push(randElem);
    }

    tempArr = [...tempArr, ...newArr];
  }
  return tempArr;
});
