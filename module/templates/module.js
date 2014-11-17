angular.module('<%= _.camelize(name) %>', ['ui.bootstrap', 'ui.utils', '<%= routerModuleName %>', 'ngAnimate', 'ngResource'])
<% if (!uirouter) { %>
    .config(function($routeProvider) {

    /* Add New Routes Above */

    });
<% } %>
<% if (uirouter) { %>
    .config(function($stateProvider) {

    /* Add New States Above */

    });
<% } %>