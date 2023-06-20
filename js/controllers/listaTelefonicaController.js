angular
  .module("listaTelefonica")
  .controller(
    "listaTelefonicaCtrl",
    function ($scope, contatosAPI, operadorasAPI) {
      $scope.app = "Lista Telefônica";
      $scope.contatos = [];
      $scope.operadoras = [];

      var carregarContatos = function () {
        contatosAPI.getContatosAPI().then(function (res, status) {
          $scope.contatos = res.data;
        });
      };

      var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (res, status) {
          $scope.operadoras = res.data;
        });
      };

      $scope.adicionarContato = function (contato) {
        let serial = "";

        while (serial.length < 20) {
          serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
        }

        contato.serial = serial;
        contato.data = new Date();
        contatosAPI.saveContatoAPI(contato).then(function (res) {
          delete $scope.contato;
          $scope.contatoForm.$setPristine();
          carregarContatos();
        });
      };

      $scope.deletarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
          if (!contato.selecionado) return contato;
        });
      };

      $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
          return contato.selecionado;
        });
      };

      $scope.aplicarFiltroPor = function (campo) {
        $scope.filtrarPor = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
      };

      $scope.classe1 = "selecionado";
      $scope.classe2 = "negrito";

      carregarContatos();
      carregarOperadoras();
    }
  );
