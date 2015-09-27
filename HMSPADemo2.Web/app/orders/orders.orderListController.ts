module app.orders {
    'use strict';

    interface IOrderList {
        orders: IOrder[];
        activate(): void;
    }

    class OrdersController implements IOrderList {
        orders: IOrder[];
        static $inject = ['OrderService'];
        constructor(private orderService: IOrderService) { }

        activate(): void {
            this.orders = this.orderService.getAll();
        }
    }

    angular.module('app.orders')
        .controller('orders', OrdersController);
}