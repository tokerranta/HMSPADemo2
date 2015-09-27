((): void => {
    'use strict';

    angular.module('app.orders')
        .config(configRoutes);

    configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configRoutes($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('orders', {
            url: '/',
            controller: 'Orders',
            controllerAs: 'vm',
            templateUrl: '/app/orders/orderlist.html'
        });
    }

})();