// desarrolle un alogaritmo que, de acuerdo a la altura de una persona, decida si puede entrar a un juego en eun parque de diversiones
// para poder subirse a la montaña rusa la persona debe medir 1.30mts o mas

let alturaPermitida: number = 1.3;
let alturaPersona: number = dato.value;

if (alturaPersona <= alturaPermitida) {
  console.log("La persona no puede subir al juego");
} else {
  console.log("la persona puede subir al juego");
}
