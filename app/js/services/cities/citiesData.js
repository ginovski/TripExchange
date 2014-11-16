'use strict';

app.factory('citiesData', function($resource, baseServiceUrl, authorization) {
    var Cities = $resource(baseServiceUrl + '/api/cities', {}, {
        'getCities': {method: 'GET', isArray: true}
    });

    return{
        'getCities': function(){
            return Cities.getCities();
        }
    }
});