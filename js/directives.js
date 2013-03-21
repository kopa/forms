app.directive('yform', function ($compile) {
  return {
    restrict: 'C',
    // transclude: 'element', //mabe this could help
    // scope: true, //set new one
    replace: true, 
    compile: function compile(tElement, tAttrs, transclude) {
      return {
        post: function postLink($scope, iElement, iAttrs) {     
          var parentMarkup, childMarkup, parent;

          // check if $scope.formSchmea is not undefined
          if (!$scope.formSchema){
            console.error("formSchema is undefined!");
            return false;
          } else if (! $scope.formData){
            console.error("formData is undefined!");
            return false;
          }  else {
            console.log()
          }

          // prepare markups
          // class="widget-type-{{formSchema.widgetType}}"  //does not work
          parentMarkup = '<div widget-type-'+$scope.formSchema.widgetType+' id="{{formSchema.id}}"></div>';
          childMarkup = '<div class="yform" ng-repeat="formSchema in formSchema.children" test="{{formSchema.id}}"></div>';

          // compile parent markup
          parent = $compile(angular.element(parentMarkup))($scope);          

          // compile child markup and add it into the parent
          parent.html($compile(angular.element(childMarkup))($scope));

          // append the compiled parent code into the current yform element
          iElement.append(parent);
          // iElement.replaceWith(parent); //sorry, does not work
        }
      };
    }
  }
});


app.directive('widgetTypeForm', function () {
  return {
    template: '<form></form>',
    replace: true,
    restrict: 'A',
    link: function postLink($scope, element, iAttrs, controller) { 
      // $scope.formData = $scope.formData[0];
      // console.log($scope.formData);
    }
  };
});

app.directive('widgetTypeFieldset', function () {
  return {
    template: '<fieldset></fieldset>', 
    replace: true,
    restrict: 'A',
    link: function postLink($scope, element, iAttrs, controller) { 
      // $scope.formData = $scope.formData[0];
      console.log($scope.formData);
    }
  };
});

app.directive('widgetTypeTextfield', function () {
  return {
    template: '<input type="text"/>', 
    replace: true,
    restrict: 'A'
  };
});

app.directive('widgetTypeDatefield', function () {
  return {
    template: '<input type="date"/>', 
    replace: true,
    restrict: 'A'
  };
});

app.directive('widgetTypeTextarea', function () {
  return {
    template: '<textarea></textarea>', 
    replace: true,
    restrict: 'A'
  };
});