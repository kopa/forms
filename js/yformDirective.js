
app.directive('yform', function yFormDirectiveFactory(/*injectables: */ formSchema, formData) {
  var directiveDefinitionObject = {
    priority: 0,
    replace: true,
    transclude: true,
    restrict: 'E',
    scope: true,
  compile: function compile(tElement, tAttrs, transclude  /* = linker function */ ) {
      console.log(transclude);
      tElement.html('<div class="form" id="{{formData.id}}"><fieldset id="{{formData.children[0].id}}"></fieldset></div>');
      // 1. Übersetze die JSON-Struktur aus woundForm.js in ein Angular Template
      //    Jedes Unter-Formular-Element soll den passenden Scope kriegen!
      return {
        pre: function preLink(scope, iElement, iAttrs, controller) { 
          // 2. Schreibe woundFormData in den scope
          scope.formData = formData;
        },
        post: function postLink(scope, iElement, iAttrs, controller) { }
      }
    },
    link: function postLink(scope, iElement, iAttrs) { }
  };
  return directiveDefinitionObject;
});
