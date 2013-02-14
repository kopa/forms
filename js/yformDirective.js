angular.module('forms.directive').directive('yform', function () {

  var directiveDefinitionObject = {
    priority: 0,
    template: '<div></div>',
    replace: true,
    transclude: false,
    restrict: 'E',
    scope: true,
    compile: function compile(tElement, tAttrs, transclude) {

      //Template DOM manipulation

      return {
        pre: function preLink(scope, iElement, iAttrs, controller) {
          //TODO
        },
        post: function postLink(scope, iElement, iAttrs, controller) {
          //TODO
        }
      }
    },
    link: function postLink(scope, iElement, iAttrs) {
      //TODO
    }
  };
  return directiveDefinitionObject;
});
