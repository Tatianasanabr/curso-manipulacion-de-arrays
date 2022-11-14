**Manipulación de Arrays de Platzi**

**forEach:** RECORRE un array.

**map:** TRANSFORMA un array. Es inmutable. Crea un nuevo array a partir de la transformación del array original.

**filter:** FILTRA con base a una condicional. Es inmutable. Crea un nuevo array.

**reduce:** REDUCE un array a un único valor. OJO: si un array tiene objetos, puede devolver un objeto con varios elementos. Es inmutable. Dependiendo del caso, crea un nuevo array

**some:** indica si ALGUNO de los elementos de un array cumple una condición. Es inmutable, no crea un nuevo array. Arroja TRUE o FALSE

**every:** indica si TODOS los elementos de un array cumplen una condición. Es inmutable, no crea un nuevo array. Arroja TRUE o FALSE

**find:** devuelve EL PRIMER ELEMENTO que cumpla con una condición. No devuelve un array, devuelve únicamente dicho elemento o un ‘undefined’ en caso de que ningún elemento cumpla con la condición.

**findIndex:** Devuelve LA POSICIÓN del PRIMER ELEMENTO que cumpla con una condición. No devuelve un array, devuelve únicamente la posición de dicho elemento o un ‘undefined’ en caso de que ningún elemento cumpla con la condición.

**includes:** indica si UN ELEMENTO se encuentra dentro del array dependiendo de una condición. Retorna un TRUE o un FALSE

**join:** convierte un ARRAY en un STRING, dependiendo del separador que le indiquemos.

**split:** convierte un STRING a un ARRAY. Crea un nuevo array.

**concat:** UNE un array en otro array. Es inmutable, y no es necesario crear un nuevo array con el resultado.

**flat:** ‘APLANA’ por niveles un array de arrays en un solo array. Es inmutable, y no es necesario crear un nuevo array.

**flatMap:** ‘APLANA’ y CONVIERTE un array de arrays en un solo array. Es inmutable, crea un nuevo array y UNICAMENTE aplana en el primer nivel. Realiza primero un map y luego un flat.

**push:** AGREGA un nuevo elemento al final de un array. Es mutable.

**splice:** CORTA un elemento específico de un array. Es mutable. También funciona para AGREGAR un elemento en un índice específico dentro de un array.

**sort:** ORDENA los elementos dentro de un array. Es mutable.

**Bonus:** Al trabajar con objetos dentro de un array basado en un array original, se pueden modificar los objetos dentro del array original ya que los objetos son de Reference type. Para evitar esto, se recomienda clonar el array original dentro del nuevo array (utilizando spread operator), y trabajar únicamente desde el nuevo array.

Créditos: Aporte de Santiago Alvarez Cuadros @salvarez96 en "Curso de manipulación de Arrays de Platzi"