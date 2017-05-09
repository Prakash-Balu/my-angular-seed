/**
 * Auth Services
 */

angular.module('RDash')
    .service('AuthServices', ['$http', AuthServices]);

function AuthServices($http) {   
	this.getUsers = function() {
		return $http.get('data/login.json')
		.success(function(data){
			 return data;
		}).error(function(error){
			alert(error);
		});
	};
	
	this.setUsers = function(userData) {
		return $http.put('data/login.json', userData)
		.success(function(data){
			 return data;
		}).error(function(error){
			alert(error);
		});
	};
	

}
