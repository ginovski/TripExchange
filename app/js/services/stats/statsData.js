'use strict';

app.factory('statsData', function($resource, baseServiceUrl) {
    var Stats = $resource(baseServiceUrl + '/api/stats', {}, {
        'getStats': {method: 'GET', isArray: false}
    });

    return{
        getStats: function(){
            return Stats.getStats();
        }
    }
});