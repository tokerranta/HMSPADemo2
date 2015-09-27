module app.orders {
    'use strict';
    
    export interface IOrderService {
        getAll(): ng.IPromise<IOrder[]>;
    }

    export class OrderService implements IOrderService {
        static $inject = ['$http', '$q'];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) { }

        getAll(): ng.IPromise<IOrder[]> {
            var deferred = this.$q.defer();

            this.$http.get('/api/orders').then(function (response) {
                deferred.resolve(response.data);
            })
            .catch(function (reason) {
                deferred.reject(reason);
                });

            return deferred.promise;
        }
    }

    angular.module('app.orders')
        .service('OrderService', OrderService);
}