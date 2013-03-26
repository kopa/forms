
/********************************************************* Main Directive *******************************************************/

app.directive('yform', function($compile) {
  return {
    restrict: 'C',
    replace: true,
    link: function postLink(scope, element, attr) {
          var parentMarkup, childMarkup, parent, childScope = {};

          // check if scope.formSchmea is not undefined
          if (!scope.formSchema) {
            console.error("formSchema is undefined!");
            return false;
          } else if (!scope.formData) {
            console.error("formData is undefined!");
            return false;
          } else {
            // since we rendered all children in the schema with the data for all the children we now have to select the right one
            scope.formData = scope.formData[scope.formSchema.id];
          }

          // prepare markups
          parentMarkup = '<div widget-type-' + scope.formSchema.widgetType + ' id="{{formSchema.id}}"></div>';
          childMarkup = '<div class="yform" ng-repeat="formSchema in formSchema.children"></div>';

          // compile parent markup
          parent = $compile(angular.element(parentMarkup))(scope);

          // compile child markup and add it into the parent
          childScope = scope;
          childScope.formData = (scope.formData) ? scope.formData.children : scope.formData;
          parent.append($compile(angular.element(childMarkup))(childScope));

          // append the compiled parent code into the current yform element
          element.append(parent);

          // TRY: following option would produce a nicer markup but does not work this way
          // element.replaceWith(parent);
    }
  }
});



/****************************************************** Structuring Widgets *****************************************************/

app.directive('widgetTypeForm', function () { return { template: '<form/>', replace: true, link: formLinker};});
app.directive('widgetTypeFieldset', function () {return {template: '<fieldset/>', replace: true, link: fieldsetLinker};});



/********************************************************* Input Widgets ********************************************************/

// input widgets whith INPUT-TAG and 'inputLinker'-function as a linker function
app.directive('widgetTypeTextfield', function() {return {link: function(scope, element, attr) {inputLinker(scope, element, 'text');}};});
app.directive('widgetTypeSearchfield', function () {return {link: function(scope, element, attr) {inputLinker(scope, element, 'search');} };});
app.directive('widgetTypePasswordfield', function () {return {link: function(scope, element, attr) {inputLinker(scope, element, 'password');} };});
app.directive('widgetTypeFilefield', function () {return {link: function(scope, element, attr) {inputLinker(scope, element, 'file');} };});
app.directive('widgetTypeTelephonefield', function () {return {link: function(scope, element, attr) {inputLinker(scope, element, 'tel');} };});
app.directive('widgetTypeUrlfield', function () {return {link: function(scope, element, attr) {inputLinker(scope, element, 'url');} };});
app.directive('widgetTypeEmailfield', function () {return {link: function(scope, element, attr) {inputLinker(scope, element, 'email');} };});
app.directive('widgetTypeNumberfield', function () {return {link: function(scope, element, attr) {inputLinker(scope, element, 'number');} };});
app.directive('widgetTypeDatefield', function () {return {link: function(scope, element, attr) {inputLinker(scope, element, 'date');} };});
app.directive('widgetTypeDateTimefield', function () {return {link: function(scope, element, attr) {inputLinker(scope, element, 'datetime');} };});
app.directive('widgetTypeDateTimeLocalfield', function () {return {link: function(scope, element, attr) {inputLinker(scope, element, 'datetime-local');} };});
app.directive('widgetTypeTimefield', function () {return {link: function(scope, element, attr) {inputLinker(scope, element, 'time');} };});
app.directive('widgetTypeWeekfield', function () {return {link: function(scope, element, attr) {inputLinker(scope, element, 'week');} };});
app.directive('widgetTypeMonthfield', function () {return {link: function(scope, element, attr) {inputLinker(scope, element, 'month');} };});

// input widgets with INPUT-TAG and a special linker function
app.directive('widgetTypeRadioButton', function () {return {link: radioLinker};});
app.directive('widgetTypeCheckbox', function () {return {link: checkboxLinker};});
app.directive('widgetTypeRangeControl', function () {return {link: rangeLinker};});

// other input widgets
app.directive('widgetTypeTextarea', function () {return {link: textAreaLinker};});
app.directive('widgetTypeSelectone', function($compile) {
  return {
    link: function (scope, element, attr) {
      // this function can not be external like inputLinker e.g. because it uses an injected variable $compile, 
      // which does only work if the link function is defined directly in the return object
      var selectElement = $compile(angular.element('<select><option ng-repeat="(id, value) in formData" id="{{id}}">{{value.data}}</option></select>'))(scope);
      setDefaultAttributes(selectElement, scope);
      element.append(createLabelTag(scope));
      element.append(selectElement);
      // TODO: create option, optgroup  
    }

  };
});
app.directive('widgetTypeSelectmany', function ($compile) {return {link: selectManyLinker};});


/*************************************************************** TODO ************************************************************/
// Button Widgets 
// --------------
// * button
// * input [type = button | submit | reset]

// Display Widgets
// ----------------
// * h1, h2, h3, h4
// * paragraph
// * audio
// * video

// AutogeneratedTags
// ==================
// * datalist for input widgets
// * img, map, area for image widgets
// * 


/******************************************************** Linker Functions *******************************************************/
function formLinker (scope, element, attr) {
  // TODO: implement  
}

function fieldsetLinker(scope, element, attr) {
  element.prepend(createLegendTag(scope));
}

function inputLinker(scope, element, type) {
  var input = $('<input type="' + type + '">');
  input.attr('value', getWidgetData(scope));
  setDefaultAttributes(input, scope);
  element.html(createLabelTag(scope));
  element.append(input);
}

function textAreaLinker(scope, element, attr) {
  var textarea = $('<textarea></textarea>');
  textarea.html(getWidgetData(scope));
  setDefaultAttributes(textarea, scope);
  element.append(createLabelTag(scope));
  element.append(textarea);
}

function radioLinker(scope, element, attr) {
  // TODO: implement
}

function checkboxLinker(scope, element, attr) {
  // TODO: implement
}

function rangeLinker(scope, element, attr) {
  // TODO: implement
}


/******************************************************** Helper Functions *******************************************************/

/**
 * Creates a label tag for the current element
 * @param  {Object} scope
 * @return {Object}
 */
function createLabelTag (scope) {
  return $('<label for="' + scope.formSchema.id + '">' + getLabel(scope) + '</label>');
}

/**
 * Creates a legend tag for the current fieldset
 * @param  {[type]} scope
 * @return {[type]}
 */
function createLegendTag (scope) {
  return $('<legend>' + getLabel(scope) + '</legend>');
}

/**
 * Gets the value from the data attribute
 * @param  {Object} scope
 * @return {String}
 */
function getWidgetData (scope) {
  return (scope.formData && scope.formData.data) ? scope.formData.data : ''
}

/**
 * Gets the legend attribute for the current element
 * @param  {[type]} scope
 * @return {[type]}
 */
function getLabel (scope) {
  var label = scope.formSchema.label;
  return (label) ? label : '';
}

/**
 * Gets the id attribute for the current element
 * @param  {[type]} scope
 * @return {[type]}
 */
function getId (scope) {
  var id = scope.formSchema.id;
  return (id) ? id : '';
}

/**
 * Set attributes every input field has
 * @param {Object} element
 * @param {Object} scope
 */
function setDefaultAttributes (element, scope){
  element.attr('id', getId(scope));
  element.attr('placeholder', getLabel(scope));
}
