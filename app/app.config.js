/**
 * Created by pengyang on 2016/10/27.
 */
angular
    .module('sneakerApp')
    .config(['$locationProvider','$routeProvider',
        function config ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.when('/sneakers',{
                template:'<sneaker-list></sneaker-list>'
            }).when('/sneakers/:sneakerId',{
                template:'<sneaker-detail></sneaker-detail>'
            }).otherwise('/sneakers');
        }
    ]);