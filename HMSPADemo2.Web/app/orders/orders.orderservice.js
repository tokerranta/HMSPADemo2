var app;
(function (app) {
    var orders;
    (function (orders) {
        'use strict';
        var OrderService = (function () {
            function OrderService($http, $q) {
                this.$http = $http;
                this.$q = $q;
            }
            OrderService.prototype.getAll = function () {
                var deferred = this.$q.defer();
                this.$http.get('/api/orders').then(function (response) {
                    deferred.resolve(response.data);
                })
                    .catch(function (reason) {
                    deferred.reject(reason);
                });
                return deferred.promise;
            };
            OrderService.$inject = ['$http', '$q'];
            return OrderService;
        })();
        orders.OrderService = OrderService;
        angular.module('app.orders')
            .service('OrderService', OrderService);
    })(orders = app.orders || (app.orders = {}));
})(app || (app = {}));
//# sourceMappingURL=orders.orderservice.js.map