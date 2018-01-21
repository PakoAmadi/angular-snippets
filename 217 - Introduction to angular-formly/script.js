/* global angular */
(function() {
  
  'use strict';

  var app = angular.module('formlyExample', ['formly', 'formlyBootstrap']);

  app.controller('MainCtrl', function MainCtrl() {
    var vm = this;
    // funcation assignment
    vm.onSubmit = onSubmit;

    // variable assignment
    vm.model = {
      firstName: 'Obi Wan'
    };
    vm.fields = [
      {
        type: 'input',
        key: 'firstName',
        templateOptions: {
          label: 'First Name'
        }
      },
      {
        template: '<hr />'
      },
      {
        type: 'select',
        key: 'something',
        templateOptions: {
          label: 'Select Somthing'
        }
      }
    ];
    
    
    // copy fields because formly adds data to them
    // that is not necessary to show for the purposes
    // of this lesson
    vm.originalFields = angular.copy(vm.fields);
    
    // function definition
    function onSubmit() {
      alert(JSON.stringify(vm.model), null, 2);
    }
  });

})();