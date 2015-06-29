var gameApp = angular.module('gameApp',["ui.router", "ui.bootstrap"]).config(['$compileProvider',
    function( $compileProvider )
    {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|data):/);
    }
]);

angular.module('gameApp', ['ui.router','ngMessages']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    const TMP_PATH = 'templates/';

    $stateProvider.
        state('index', {
            url: '/',
            views: {
                /*'header':{
                    templateUrl: '',
                    controller: 'controller as headerController'
                },*/
                'main':{
                    templateUrl: TMP_PATH + 'game/story/index.html',
                    controller: 'storyController as storyController'
                }/*,
                'footer':{
                    templateUrl: '',
                    controller: 'controller as footerController'
                }*/
            }
        }).
        state('index.registration', {
            url: 'register',
            views: {
                'main@':{
                    templateUrl: TMP_PATH + 'user/register/registerForm.html',
                    controller: 'userRegistrationController as userRegistrationController'
                }
            }
        })
}]);

angular.module('gameApp').run(['$http', function($http){

    $http.requestAction = function(route, postData){
        var fd = new FormData();
        fd.append('post', postData);

        return $http.post(route, fd, {
            headers: {'Content-Type': undefined}

        });

    };
}]);