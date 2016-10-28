/**
 * Created by pengyang on 2016/10/27.
 */
angular.module('sneakerDetail')
    .component('sneakerDetail', {
        templateUrl: 'sneaker-detail/sneaker-detail.template.html',
        controller: [
            '$http',
            '$routeParams',
            function sneakerDetailController($http, $routeParams) {
                var self = this;
                $http.get('sneakers/' + $routeParams.sneakerId + '.json').then(function (response) {
                    self.sneaker = response.data;
                });
                self.sneakerId = $routeParams.sneakerId;
            }
        ]
    });



