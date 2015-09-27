(function () {
    'use strict';
    angular.module('app.orders')
        .config(configRoutes);
    configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configRoutes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('orders', {
            url: '/',
            controller: 'Orders',
            controllerAs: 'vm',
            templateUrl: '/app/orders/orderlist.html'
        });
    }
})();
//# sourceMappingURL=orders.routing.js.map