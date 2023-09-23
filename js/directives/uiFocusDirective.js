angular.module("listaTelefonica").directive("uiFocus", function () {
  return {
    restrict: "A",
    scope: {
      mustBeFocused: "=focused",
    },
    link: function (scope, element, attrs) {
      scope.$watch("mustBeFocused", function () {
        if (scope.mustBeFocused) {
          console.log(element);
          element[0].focus();
        }
      });
    },
  };
});
