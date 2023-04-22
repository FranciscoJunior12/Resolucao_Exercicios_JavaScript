const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function dividirArray(array) {
    const parte1 = [];
    const parte2 = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        parte1.push(array[i]); // Adiciona o elemento na parte 1
      } else {
        parte2.push(array[i]); // Adiciona o elemento na parte 2
      }
    }
    return [parte1, parte2];
  }
  
  const [parte1, parte2] = dividirArray(meuArray);
  console.log(parte1); // Output: [ 1, 3, 5, 7, 9 ]
  console.log(parte2); // Output: [ 2, 4, 6, 8 ]

  function somarPartes(arrayPartes) {
    const somaParte1 = arrayPartes[0].reduce((total, num) => total + num, 0);
    const somaParte2 = arrayPartes[1].reduce((total, num) => total + num, 0);
    return [somaParte1, somaParte2];
  }
  

  const arrayPartes = dividirArray(meuArray);
  const [somaParte1, somaParte2] = somarPartes(arrayPartes);
  console.log(somaParte1); // Output: 25
  console.log(somaParte2); // Output: 20
  
