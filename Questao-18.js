const usuarios = [
    { nome: "João", sobrenome: "Silva" },
    { nome: "Maria", sobrenome: "Souza" },
   
];

const nomesCompletos = usuarios.map(usuario => `${usuario.nome} ${usuario.sobrenome}`);

console.log(nomesCompletos);
