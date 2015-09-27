var app;
(function (app) {
    var orders;
    (function (orders_1) {
        'use strict';
        var OrdersController = (function () {
            function OrdersController(orderService) {
                this.orderService = orderService;
                this.activate();
            }
            OrdersController.prototype.activate = function () {
                var _this = this;
                this
                    .orderService
                    .getAll()
                    .then(function (orders) {
                    console.log(orders);
                    _this.orders = orders;
                })
                    .catch(function (reason) {
                    console.log(reason);
                });
            };
            OrdersController.$inject = ['OrderService'];
            return OrdersController;
        })();
        angular.module('app.orders')
            .controller('Orders', OrdersController);
    })(orders = app.orders || (app.orders = {}));
})(app || (app = {}));
//# sourceMappingURL=orders.orderlistcontroller.js.map