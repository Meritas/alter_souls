angular.module('gameApp').controller('storyController', ['$scope','$http',
    function($scope , $http){
        var self = this;

        $scope.places = [];

        $scope.places.push('Church');
        console.log($scope.places);
    }]);




angular.module('gameApp').controller('userRegistrationController', ['$scope','$http',
    function($scope , $http){
        var self = this;

        $scope.formData = {
            password: ""
        };
        $scope.sideData = {
            confirmPassword: ""
        };

        $scope.formSubmit = function(){
            $http.requestAction('api/users/create', JSON.stringify($scope.formData));

            console.log('Form submitted');
        }
    }]);