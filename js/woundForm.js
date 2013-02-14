app.value('formSchema', {
  'id': 'woundForm',
  'label': 'Wound Formular',
  'dataType': 'container',
  'widgetType': 'form',
  'children': [
    {
      'id': 'personalData',
      'label': 'personal data',
      'dataType': 'container',
      'widgetType': 'fieldset',
      'children': [
        {
          'id': 'name',
          'label': 'name',
          'dataType': 'text',
          'widgetType': 'textField',
          'data': 'max'
        },
        {
          'id': 'birthdate',
          'label': 'birthdate',
          'dataType': 'date',
          'widgetType': 'dateField',
          'data': '15.02.13'
        },
        {
          'id': 'gender',
          'label': 'gender',
          'dataType': 'text',
          'widgetType': 'selectOne',
          'data': 'm',
          'options': [
            {
              'value': 'm',
              'description': 'male'
            },
            {
              'value': 'w',
              'description': 'female'
            }
          ]
        }
      ]
    },
    {
      'id': 'medicalData',
      'label': 'medical data',
      'dataType': 'container',
      'widgetType': 'fieldset',
      'children': [
        {
          'id': 'bloodPressure',
          'label': 'blood pressure',
          'dataType': 'number',
          'widgetType': 'textField'
        },
        {
          'id': 'bloodSugar',
          'label': 'blood sugar',
          'dataType': 'number',
          'widgetType': 'textField'
        },
        {
          'id': 'comment',
          'label': 'comment',
          'dataType': 'text',
          'widgetType': 'textArea'
        }

      ]
    }
  ]
});
