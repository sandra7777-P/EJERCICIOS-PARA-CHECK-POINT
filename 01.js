const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {
  // Tu código aca:
  if (!this.head) {
    // Si la lista está vacía, retorna false
    return false;
  }

  let current = this.head;
  let nextNode = current.next;
  let isSwapped;

  do {
    isSwapped = false;
    while (current.next) {
      if (current.value < nextNode.value) {
        // Intercambiar los valores de los nodos
        const temp = current.value;
        current.value = nextNode.value;
        nextNode.value = temp;
        isSwapped = true;
      }
      current = nextNode;
      nextNode = nextNode.next;
    }
    current = this.head;
    nextNode = current.next;
  } while (isSwapped);

  return true;
};


// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList
};