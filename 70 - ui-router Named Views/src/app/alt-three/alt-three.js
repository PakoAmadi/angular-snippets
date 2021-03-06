angular.module('ui-router-named-views.alt-three', [
    'ui.router',
    'blink'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.alt-three', {
        url: '/alt-three',
        views: {
          'content@': {
            templateUrl: 'alt-three/alt-three.content.tpl.html'
          },
          'header@': {
            templateUrl: 'alt-three/alt-three.header.tpl.html'
          },
          'one@app.alt-three': {
            template: '<div class="alert-info">Sub One</div>'
          },
          'two@app.alt-three': {
            template: '<div class="alert-success">Sub Two</div>'
          }
        }
      }
    )
  })
;
