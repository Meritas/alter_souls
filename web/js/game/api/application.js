var gameApp = angular.module('gasApp',['ui.router', 'ui.bootstrap']).config(['$compileProvider',
    function( $compileProvider )
    {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|data):/);
    }
]);