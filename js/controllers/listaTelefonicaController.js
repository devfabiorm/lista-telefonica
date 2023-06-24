angular
  .module("listaTelefonica")
  .controller(
    "listaTelefonicaCtrl",
    function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
      $scope.app = "Lista Telefônica";
      $scope.contatos = [];
      $scope.operadoras = [];
      $scope.contato = {
        data: 1674183600000,
      };

      var carregarContatos = function () {
        contatosAPI
          .getContatosAPI()
          .then(function (res, status) {
            $scope.contatos = res.data;
          })
          .catch(function (res) {
            $scope.error = "Não foi possível carregar dados!";
          });
      };

      var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (res, status) {
          $scope.operadoras = res.data;
        });
      };

      $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
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
