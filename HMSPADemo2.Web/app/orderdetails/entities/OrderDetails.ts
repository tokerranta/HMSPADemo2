module app.orderdetails {
    'use strict';

    export interface IOrderDetails {
        id: number;
        description: string;
        totalCost: number;
    }

    export class OrderDetails implements IOrderDetails {
        id: number;
        description: string;
        totalCost: number;
    }
}