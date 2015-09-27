module app.orders {
    'use strict';

    interface IOrderList {
        orders: IOrder[];
        activate(): void;
    }

    class OrdersController implements IOrderList {
        orders: IOrder[];
        static $inject = ['OrderService'];
        constructor(private orderService: IOrderService) {
            this.activate();
        }

        

        activate(): void {
            this
                .orderService
                .getAll()
                .then((orders): void => {
                console.log(orders);
                    this.orders = orders;
                })
                .catch((reason): void => {
                    console.log(reason);
                });
        }
    }

    angular.module('app.orders')
        .controller('Orders', OrdersController);
}