app.value('woundForm', { 'id': 'woundForm',
  'label': 'Wound Formular',
  'dataType': 'container',
  'widgetType': 'form',
  'children': [
    { 'id': 'personalData',
      'label': 'personal data',
      'dataType': 'container',
      'widgetType': 'fieldset',
      'children': [
        {
          'id': 'name',
          'label': 'name',
          'dataType': 'text',
          'widgetType': 'textField',
          'data': 'max',
          'children': []
        },
        {
          'id': 'birthdate',
          'label': 'birthdate',
          'dataType': 'date',
          'widgetType': 'dateField',
          'data': '15.02.13',
          'children': []
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
          ],
          'children': []
        }
      ]
    },
    { 'id': 'personalData',
      'label': 'Medizinische Daten',
      'dataType': 'container',
      'widgetType': 'fieldset',
      'children': [],
      'data': '100'
    }
  ]
});