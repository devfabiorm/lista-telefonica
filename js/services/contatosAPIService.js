angular
  .module("listaTelefonica")
  .factory("contatosAPI", function ($http, config) {
    const _getContatos = function () {
      return $http.get(`${config.baseUrl}/contatos`);
    };

    const _saveConatos = function (contato) {
      return $http.post(`${config.baseUrl}/contatos`, contato);
    };

    return {
      getContatosAPI: _getContatos,
      saveContatoAPI: _saveConatos,
    };
  });
