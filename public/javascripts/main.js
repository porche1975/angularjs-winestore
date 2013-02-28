var theAppModule = angular.module('winestoreapp', ['winestoreServices']).
    config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.when('/wines', {
        templateUrl: 'partials/welcome.html'
    }).
    when('/wines/:wineId', {
        templateUrl: 'partials/wine-details.html',
        controller: WineDetailCtrl
    }).
    
    otherwise({redirectTo: '/'})
}]);

theAppModule.run(function($rootScope) {
    /*
        Receive emitted message and broadcast it.
        Event names must be distinct or browser will blow up!
    */
    $rootScope.$on('winesChanged', function(event, args) {
        $rootScope.$broadcast('handleWinesChanged', args);
    });
});