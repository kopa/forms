app.directive('widgetTypeForm', function () {
  return {
    // template: '<div class="test"></div><form ng-repeat="child in children"><yform>test</yform></form>',
    // replace: true,
    // transclude: true,
    restrict: 'A',
    // scope: true,
    compile: function compile(tElement, tAttrs, transclude  /* = linker function */ ) {
      console.log('compile formDirective');
      return {
        pre: function preLink(scope, iElement, iAttrs, controller) { 
          console.log('pre formDirective');
          // scope.formData = formData;
          // scope.formSchema = formSchema;
          // iElement.attr("widget-type-" + formSchema.widgetType, "");
        },
        post: function postLink(scope, iElement, iAttrs, controller) { }
      }
    }
  };
});