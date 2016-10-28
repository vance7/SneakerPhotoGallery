/**
 * Created by pengyang on 2016/10/27.
 */
'use strict';

angular
    .module('sneakerList')
    .component('sneakerList', {
        templateUrl: 'sneaker-list/sneaker-list.template.html',
        controller: function sneakerListController($http) {
            var self = this;
            self.orderProp = 'name';

            $http.get('sneakers/sneakers.json').then(function (response) {
                self.sneakers = response.data;
            })
        }
    });