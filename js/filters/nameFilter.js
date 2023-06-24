angular.module("listaTelefonica").filter("name", function () {
  return function (input) {
    const listaDeNomes = input.split(" ");
    const listaDeNomesFormatada = listaDeNomes.map(function (nome) {
      if (/(da|de)/i.test(nome)) return nome.toLowerCase();
      return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
    });

    return listaDeNomesFormatada.join(" ");
  };
});
