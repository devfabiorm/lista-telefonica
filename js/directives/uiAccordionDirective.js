angular.module("listaTelefonica").directive("uiAccordions", function () {
  return {
    controller: function ($scope, $element, $attrs) {
      const accordions = [];

      this.registerAccordions = function (accordion) {
        accordions.push(accordion);
      };

      this.closeAll = function () {
        accordions.forEach(function (accordion) {
          accordion.isOpened = false;
        });
      };
    },
  };
});

angular.module("listaTelefonica").directive("uiAccordion", function () {
  return {
    templateUrl: "view/accordion.html",
    transclude: true,
    require: "^uiAccordions",
    scope: {
      title: "@",
    },
    link: function (scope, element, attrs, ctrl) {
      ctrl.registerAccordions(scope);
      scope.open = function () {
        ctrl.closeAll();
        scope.isOpened = true;
      };
    },
  };
});
