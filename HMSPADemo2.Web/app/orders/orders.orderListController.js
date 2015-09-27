var app;
(function (app) {
    var orders;
    (function (orders) {
        'use strict';
        var OrdersController = (function () {
            function OrdersController(orderService) {
                this.orderService = orderService;
            }
            OrdersController.prototype.activate = function () {
                this.orders = this.orderService.getAll();
            };
            OrdersController.$inject = ['OrderService'];
            return OrdersController;
        })();
        angular.module('app.orders')
            .controller('orders', OrdersController);
    })(orders = app.orders || (app.orders = {}));
})(app || (app = {}));
