'use strict';

/* Services */

angular.module('winestoreServices', ['ngResource']).
    factory('Wine', function($resource) {
        return $resource('/api/wines/:wineId', {}, {     
            put: { method: 'PUT' }
        })
    });

