app.directive('yform', function ($compile) {
  return {
    replace: true,
    transclude: true,
    link: function($scope, iElement, iAttrs) {     
      var parentMarkup, childMarkup, parent, children;

      // check if $scope.formSchmea is not undefined
      if (!$scope.formSchema){
        console.error("formSchema is undefined!");
        return false;
      } else if (! $scope.formData){
        console.error("formData is undefined!");
        return false;
      } else {
        console.log('linking: ', $scope, iElement, iAttrs);
      }

      // render current widget:
      parentMarkup =  '<div widget-type-' + $scope.formSchema.widgetType + '></div>';
      widget = angular.element(parentMarkup);
      parent = iElement.append($compile(widget)($scope));
      
      // render child widgets
      childMarkup = '<div yform ng-repeat="formSchema in formSchema.children">'; //form-schema="formSchema" form-data="formData[formSchema.id]"
      childMarkup += '</div>';
      children = angular.element(childMarkup);

      parent.append($compile(children)($scope));
    }
  };
});


// app.directive('widgetTypeForm', function () {
//   return {
//     // template: '<div class="test"></div><form ng-repeat="child in children"><yform>test</yform></form>',
//     // replace: true,
//     // transclude: true,
//     restrict: 'A',
//     compile: function compile(tElement, tAttrs, transclude  /* = linker function */ ) {
//       console.log('compile formDirective');
//       return {
//         pre: function preLink($scope, iElement, iAttrs, controller) { 
//           console.log('pre formDirective');
//           // scope.formData = formData;
//           // scope.formSchema = formSchema;
//           // iElement.attr("widget-type-" + formSchema.widgetType, "");
//         },
//         post: function postLink($scope, iElement, iAttrs, controller) { }
//       }
//     }
//   };
// });