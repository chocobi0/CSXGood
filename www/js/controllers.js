
/*
$http.get(){
  dictionary = data;
}
*/
var dictionary = null;
var dictionary = [
  {
    category : "a",
    sub : [{
      word : "a",
      mean : "a"
    },
      {
        word : "aa",
        mean : "aa"
      },
      {
        word : "aaa",
        mean : "insuarance Company"
      },
      {
        word : "aab",
        mean : "ahahahah"
      }]
  },
  {
    category : "b",
    sub : [{
      word : "b",
      mean : "b"
    },
      {
        word : "bb",
        mean : "bb"
      },
      {
        word : "bbb",
        mean : "insuarance Company"
      },
      {
        word : "bba",
        mean : "ahahahah"
      }]
  }
];
angular.module('starter.controllers', [])


.controller('SearchCtrl', function($scope) {
    if(!dictionary){
      //$http.get(){
      //  dictionary = data;
      //}
    }

    console.log(dictionary);
    this.dics = dictionary;
  })
  .controller('SearchDetailCtrl', function($scope, $stateParams, $filter){
    this.init = function () {
      console.log("init");
    }
    this.category = $stateParams.searchCategory;

    var result = $filter('filter')(dictionary, {category : this.category});
    result = $filter('filter')(result[0].sub, {word : $stateParams.searchId}, true);
    console.log(result);
    this.word = result[0];



  })
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
