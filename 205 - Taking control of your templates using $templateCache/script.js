angular.module('app', [])
	.directive('myButton', function () {
		return {
			templateUrl: 'timestamp'
		}
	})
	.run(function ($templateCache) {

		$templateCache.put('./yours.html', '<button>Yours :)</button>');
		$templateCache.put('timestamp', '<button>' + Date.now() + '</button>');

	});