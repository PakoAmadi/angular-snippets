angular.module('hello-protractor', [
    'ui.router'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/index.tpl.html',
                controller: function($scope) {
                    $scope.updateMessageText = function(text) {
                        $scope.messageText = text;
                    }

                    $scope.items = [
                        { name: 'Ben' },
                        { name: 'Hannah' },
                        { name: 'Sophi' },
                        { name: 'Jack' },
                        { name: 'Henry' }
                    ];

                    $scope.selectItem = function (item) {
                        item.isSelected = !item.isSelected;
                    }
                }
            })
        ;
        $urlRouterProvider.otherwise('/');
    })
;
