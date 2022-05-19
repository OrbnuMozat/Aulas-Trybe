// Exercício do Conteúdo
const awake = () => 'Acordando!!';
const coffe = () => 'Bora tomar café';
const zzzZ = () => 'Partiu dormir';

const doingThings = (callback) => {console.log(callback())};

doingThings(awake);

