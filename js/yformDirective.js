app.directive('yform', function ($compile) {
  return {
    template: '<div></div>',
    replace: true,
    transclude: true,
    scope: {
      formData: '=formData', 
      formSchema: '=formSchema'
    },
    link: function(scope, iElement, iAttrs) {
      console.log('linking: ', scope, iElement, iAttrs);
      
      // render myself:
      var widget = angular.element('<div widget-type-' + scope.formSchema.widgetType + '>{{formSchema.widgetType}}</div>');
      iElement.append( $compile(widget)(scope) );
      
      // render all children:
      var children = angular.element('<div class="children" ng-repeat="formSchema in formSchema.children">{{formSchema.widgetType}}: <div yform form-schema="formSchema" form-data="formData[formSchema.id]"></div></div>');
      iElement.append( $compile(children)(scope) );
    }
  };
});


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