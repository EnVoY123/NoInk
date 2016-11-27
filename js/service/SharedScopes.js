MyApp.angular.factory('SharedScopes', ['$document', function ($document) {
  'use strict';

    'use strict';
    var sharedScopes = {};

    return {
        setScope: function (key, value) {
            sharedScopes[key] = value;
        },
        getScope: function (key) {
            return sharedScopes[key];
        }
    };
  
}]);
