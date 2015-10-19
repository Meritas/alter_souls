var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};

angular.module('gameApp').directive("compareTo", compareTo);


/*
 * Description: this is possibly a near-pointless stretch,
 * but it serves a good purpose as a form of tutorial
 */
/*var formResponse = function() {
    return {
        require: "ngModel",

        scope: {
            formResponse: "=response"
        },

        restrict: 'A',

        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.formResponse = function() {
                return scope.formResponse === true;
            };

            scope.$watch("formResponse", function() {
                console.log(scope.formResponse);
                ngModel.$validate();
                console.log(ngModel.$validators.formResponse);
            });
        }
    };
};

angular.module('gameApp').directive("formResponse", formResponse);*/
