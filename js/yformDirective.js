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
