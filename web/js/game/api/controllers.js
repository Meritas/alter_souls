angular.module('gameApp').controller('storyController', ['$scope','$http',
    function($scope , $http){
        var self = this;

        $scope.places = [];

        $scope.places.push('Church');
        console.log($scope.places);
    }]);