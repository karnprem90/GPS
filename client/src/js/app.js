'use strict';
var app = angular.module('gps-tracking', ['ui.router','angular-growl'])


.config(
    ['$stateProvider', '$urlRouterProvider','growlProvider',
        function($stateProvider, $urlRouterProvider,growlProvider){

            growlProvider.globalTimeToLive(4000);

            $urlRouterProvider
                .otherwise('/signin');
            $stateProvider
                .state('signin', {
                    url: '/signin',
                    templateUrl: 'login.html',
                    controller:'MapController'
                })
                
        }
    ]
)
















// (function() {
//   'use strict';
  
//   angular.module('gps-tracking',[]);
// })();
