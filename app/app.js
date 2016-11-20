'use strict';
// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ui.router', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache','md.data.table','dndLists'])
    .config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider','$mdIconProvider','$mdIconProvider', function ($stateProvider, $urlRouterProvider, $mdThemingProvider,$mdIconProvider) {
        // For any unmatched url, send to /business
        $mdIconProvider.icon('md-close', 'img/icons/ic_close_24px.svg', 24);

        $mdThemingProvider
            .theme('default')
            .primaryPalette('blue')
            .accentPalette('pink');

        $urlRouterProvider.otherwise("/login");
        $stateProvider
            .state('login', {//State demonstrating Nested views
                url: "/login",
                templateUrl: "login/login.html"
            })

            .state('home', {//State demonstrating Nested views
                url: "/home",
                templateUrl: "view1/view1.html"

            })
            .state('home.progress', {
            url: '/progress',
            templateUrl: 'view1/view1-progress.html'
        })
            .state('home.manage', {
                url: '/manage',
                templateUrl: 'view2/view2.html'

            })
            .state('home.manage.tab1', {
                url: '/framework',
                templateUrl: 'directives/tabs/tab1.html'

            })
            .state('home.manage.tab2', {
                url: '/goals',
                templateUrl: 'directives/tabs/tab2.html'

            })
            .state('home.manage.tab3', {
                url: '/scenario',
                templateUrl: 'directives/tabs/tab3.html'

            })
            .state('home.manage.tab4', {
                url: '/activities',
                templateUrl: 'directives/tabs/tab4.html'

            })
            .state('home.manage.tab5', {
                url: '/assessment',
                templateUrl: 'directives/tabs/tab5.html'

            })
            .state('home.manage.tab6', {
                url: '/assessment',
                templateUrl: 'directives/tabs/tab6.html'

            })
        // nested list with just some random string data

    }]);
