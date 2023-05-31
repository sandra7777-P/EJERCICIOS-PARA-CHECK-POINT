const { BinarySearchTree } = require("./DS");

/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// ---- Arboles Binarios ----

// EJERCICIO 6

// Implementar la función searchMaxTwo que busque en nuestro arbol binario los dos valores maximos
// y los retorne en un array.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//    / \                 \
//       5                44
//
//  Debería retornarnos 44 y 31.

BinarySearchTree.prototype.searchMaxTwo = function () {
  // tu código acá:
  let maxValues = [];

  const findMaxValues = (node) => {
    if (node === null) {
      return;
    }

    if (maxValues.length < 2) {
      maxValues.push(node.value);
    } else if (node.value > maxValues[0]) {
      maxValues[1] = maxValues[0];
      maxValues[0] = node.value;
    } else if (node.value > maxValues[1]) {
      maxValues[1] = node.value;
    }

    findMaxValues(node.left);
    findMaxValues(node.right);
  };

  findMaxValues(this.root);

  return maxValues;
};



console.log(tree.searchMaxTwo()); // [44, 31]

// No modifiques nada debajo de esta linea //

module.exports = {
  BinarySearchTree,
};
