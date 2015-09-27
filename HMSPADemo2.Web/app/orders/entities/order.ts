module app.orders {
    'use strict';

    export interface IOrder {
        id: number;
        description: string;
    }

    export class Order implements IOrder {
        id: number;
        description: string;
    } 
}