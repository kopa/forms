app.directive('yform', function () {
  return {
    template: '<div></div>',
    replace: true,
    transclude: true,
    restrict: 'E',
    scope: {formData: '=formData', formSchema: '=formSchema'},
    controller: function ($scope, $element, $transclude, $compile) {
      var child = angular.element('<div widget-type-' + $scope.formSchema.widgetType + '></div>');
      $element.append(child);
      $compile(child, $scope);
      // $transclude(function (clone) {
      //   clone.attr('widget-type-' + $scope.formSchema.widgetType, '');
      // })
    },
    compile: function compile(tElement, tAttrs, transclude  /* = linker function */ ) {
      console.log('compile');
      // console.log(transclude);
      // transclude({}, function (clone) {
      //    console.log('transclude');
      //    clone.attr('widget-type-' + $scope.formSchema.widgetType, '');
      // });
      return {
        pre: function preLink(scope, iElement, iAttrs, controller) { 
          console.log('pre');
          //iElement.append('<div widget-type-' + scope.formSchema.widgetType + '></div>');
        },
        post: function postLink(scope, iElement, iAttrs, controller) { }
      }
    }
  };
});