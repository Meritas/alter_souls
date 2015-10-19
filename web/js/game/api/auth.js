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
        }
    }]);

angular.module('gameApp').controller('userLoginController', ['$scope','$http',
    function($scope , $http){
        var self = this;

        $scope.templateEnv = {
            loginStatus:    true,
            loginMessage:   ''
        };

        //$scope.formResponse = {};

        $scope.formData = {
            password: ""
        };
        $scope.sideData = {
            confirmPassword: ""
        };

        $scope.formSubmit = function(){
            $http.requestAction('api/users/login', JSON.stringify($scope.formData))
                .success(function(data){
                    switch(data.response_status){
                        case 0:
                            $scope.templateEnv.loginError = true;
                            $scope.templateEnv.loginMessage = data.ui_message;
                            break;
                        case 1:
                            $scope.templateEnv.loginError = false;
                            break;
                        case 2:
                            $scope.templateEnv.loginError = true;
                            $scope.templateEnv.loginMessage = data.ui_message;
                            break;
                    }
                });
        }
    }]);

