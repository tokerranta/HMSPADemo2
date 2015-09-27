module app.orderdetails {
    'use strict';

    export interface IOrderDetailsService {
        getById(id: number): angular.IPromise<IOrderDetails>
    }

    export class OrderDetailsService implements IOrderDetailsService {
        static $inject = ['$http', '$q'];
        constructor(private $http: angular.IHttpService, private $q: angular.IQService) { }

        getById(id: number): angular.IPromise<IOrderDetails> {
            var url = '/api/orders/' + id,
                deferred = this.$q.defer();

            this.$http
                .get(url)
                .then((response: angular.IHttpPromiseCallbackArg<IOrderDetails>): void => {
                    deferred.resolve(response.data);
                })
                .catch((reason: any): void => {
                    deferred.reject(reason);
                });

            return deferred.promise;
        }
    }

    angular.module('app.orderdetails')
        .service('OrderDetailsService', OrderDetailsService);
}