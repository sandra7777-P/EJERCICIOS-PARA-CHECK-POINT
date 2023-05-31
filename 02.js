const { LinkedList } = require('./DS');
// No modifiques nada arriba de esta linea //
  
/*
EJERCICIO 2
Agregar el método simplifyList al prototipo de LinkedList. Este método deberá filtrar 
los elementos repetidos de nuestra lista enlazada y crear una nueva lista con los elementos 
extraídos para finalmente reemplazar la lista original.
Si la lista está vacía, debe retornar false
Ejemplo:
    Suponiendo que la lista actual es: Head --> [2] --> [5] --> [1] --> [5] --> [7] --> [2] --> null
    lista.simplifyList();
    Ahora la lista resultante es: Head --> [2] --> [5] --> [1] --> [7] --> null
ACLARACIÓN: Se debe reemplazar la lista original por la nueva.
Pista: Podes usar el metodo search() ya incorporado dentro del prototype de LinkedList
  */
 
LinkedList.prototype.simplifyList = function () { 
  // Tu código aca:
  if (!this.head) {
    // Si la lista está vacía, retorna false
    return false;
  }

  let current = this.head;
  let uniqueValues = new Set();
  uniqueValues.add(current.value);

  while (current.next) {
    if (uniqueValues.has(current.next.value)) {
      // Si el valor del siguiente nodo ya está en el conjunto, se salta ese nodo
      current.next = current.next.next;
    } else {
      // Agrega el valor del siguiente nodo al conjunto
      uniqueValues.add(current.next.value);
      current = current.next;
    }
  }

  return true;
};


// No modifiques nada debajo de esta linea //
module.exports = {
  LinkedList
};