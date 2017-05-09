/**
 * Login Controller
 */

angular.module('RDash')
    .controller('LoginCtrl', ['$scope', '$location', 'AuthServices', '$http', LoginCtrl]);

function LoginCtrl($scope, $location, AuthServices, $http) {
    $scope.users = [];
	
    $scope.init = function() {
        $scope.user = {
			name: '',
			password: ''
		};
    };

    $scope.loginUser = function(userData) {
		angular.forEach($scope.users, function(value, key) {
			if(userData.name == value.name && userData.password==value.password){
				$location.path('/home/dashboard');
			}
		});
    };
	
	$scope.getUsers = function() {
		AuthServices.getUsers()
		.success(function(data){
			$scope.users = data;
		}).error(function(error){
			alert(error);
		});
	};
	
    //Call function initialization
	$scope.init();
	$scope.getUsers();
	
}
