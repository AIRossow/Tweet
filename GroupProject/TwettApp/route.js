angular.module('tweetModule')
.config(function($stateProvider, $urlRouterProvider) {
  let feedState = {
    name: 'userFeed',
    url: '/feed',
    component: 'feedComponent'
  }

  $stateProvider.state(feedState)

  $urlRouterProvider.otherwise('/feed')
})
