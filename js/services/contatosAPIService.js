angular.module("listaTelefonica").factory("contatosAPI", function ($http) {
  const _getContatos = function () {
    return $http.get("http://localhost:3412/contatos");
  };

  const _saveConatos = function (contato) {
    return $http.post("http://localhost:3412/contatos", contato);
  };

  return {
    getContatosAPI: _getContatos,
    saveContatoAPI: _saveConatos,
  };
});
