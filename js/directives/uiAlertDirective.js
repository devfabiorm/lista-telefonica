angular.module("listaTelefonica").directive("uiAlert", function () {
  return {
    templateUrl: "view/alert.html",
    replace: false,
    restrict: "AE",
    scope: {
      title: "@",
    },
    transclude: true,
  };
});
