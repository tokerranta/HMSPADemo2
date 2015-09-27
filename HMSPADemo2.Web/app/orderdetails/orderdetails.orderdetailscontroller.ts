module app.orderdetails {
    'use strict';

    interface IOrderDetailsParams extends ng.ui.IStateParams {
        orderId: number;
    }

    interface IOrderDetailsViewModel {
        orderDetails: IOrderDetails;
        activate(): void;
    }

    class OrderDetailsController implements IOrderDetailsViewModel {
        orderDetails: IOrderDetails;

        static $inject = ['$stateParams', 'OrderDetailsService'];
        constructor(private $stateParams: IOrderDetailsParams, private orderDetailsService: IOrderDetailsService) {
            this.activate();
        }

        activate(): void {
            this.orderDetailsService
                .getById(this.$stateParams.orderId)
                .then((order: IOrderDetails): void => {
                    this.orderDetails = order;
                })
                .catch((reason: any): void => {
                    console.log(reason);
                });
                
        }
    }

    angular.module('app.orderdetails')
        .controller('OrderDetails', OrderDetailsController);
}