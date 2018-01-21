
angular.module('app', [])
	.run(function ($http, $rootScope) {

		function onSuccess (result) {
			$rootScope.repos = result.data;
		}

		function onFailure (info) {
			console.log('boo error :(');
			console.log(info);
		}

		$http.get('https://api.github.com/users/bclinkinbeard/repos')
			.then(onSuccess, onFailure);

	});
