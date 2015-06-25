var gameApp = angular.module('gameApp',['ui.router', 'ui.bootstrap']).config(['$compileProvider',
    function( $compileProvider )
    {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|data):/);
    }
]);

angular.module('gameApp', []).config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

angular.module('gameApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider.
        state('index', {
            url: '/',
            views: {
                /*'header':{
                    templateUrl: '',
                    controller: 'controller as headerController'
                },*/
                'main':{
                    templateUrl: '',
                    controller: 'storyController as storyController'
                }/*,
                'footer':{
                    templateUrl: '',
                    controller: 'controller as footerController'
                }*/
            }
        })
        /*.state('index.fight', {
            url: 'fight',
            views: {
                'main@':{
                    templateUrl: '',
                    controller: 'controller as fightController'
                }
            }
        })*/
}]);