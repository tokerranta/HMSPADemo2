var app;
(function (app) {
    var orders;
    (function (orders) {
        'use strict';
        var Order = (function () {
            function Order() {
            }
            return Order;
        })();
        orders.Order = Order;
    })(orders = app.orders || (app.orders = {}));
})(app || (app = {}));
