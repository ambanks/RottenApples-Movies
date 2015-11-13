angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {

    $scope.tagline = 'Nothing beats a pocket protector!';
    
    $http.get('json/movies.json')
    	.success(function(data) {
        	console.log("success");
        	$scope.movies = data.movies;
        	console.log(data.movies);
        })
       
        .error(function(data) {
        	console.log(err);
        });
           
    });
