((): void => {
    'use strict';

    angular.module('app.orderdetails')
        .config(configRoutes);

    configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configRoutes($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('orderdetails', {
            url: '/orderdetails/{orderId:int}',
            controller: 'OrderDetails',
            controllerAs: 'vm',
            templateUrl: '/app/orderdetails/orderdetails.html'
        });
    }

})();