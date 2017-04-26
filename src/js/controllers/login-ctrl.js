/**
 * Login Controller
 */

angular.module('RDash')
    .controller('LoginCtrl', ['$scope', '$location', LoginCtrl]);

function LoginCtrl($scope, $location) {
    
    $scope.init = function() {
        $scope.user = {
			name: '',
			password: ''
		};
    };

    $scope.loginUser = function(userData) {
        if(userData.name!='' && userData.password!='') {
			$location.path('/dashboard');	
		}
    };

    //Call function initialization
	$scope.init();
}
