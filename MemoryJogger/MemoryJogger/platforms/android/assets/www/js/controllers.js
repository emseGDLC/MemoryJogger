angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};



  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

    


  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

 // A simple relative timestamp filter
    .filter('relativets', function() {
      return function(value) {
        var now = new Date();
        var diff = now - value;

        // ms units
        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var year =  day * 365;
        var month = day * 30;

        var unit = day;
        var unitStr = 'd';
        if(diff > year) {
          unit = year;
          unitStr = 'y';
        } else if(diff > day) {
          unit = day;
          unitStr = 'd';
        } else if(diff > hour) {
          unit = hour;
          unitStr = 'h';
        } else if(diff > minute) {
          unit = minute;
          unitStr = 'm';
        } else {
          unit = second;
          unitStr = 's';
        }

        var amt = Math.ceil(diff / unit);
        return amt + '' + unitStr;
      }
    })

    .controller('ProfileCtrl', function($scope) {
      $scope.posts = [];

      for(var i = 0; i < 7; i++) {
        // Fake a date
        var date = (+new Date) - (i * 1000 * 60 * 60);
        $scope.posts.push({
          created_at: date,
          text: 'Doing a bit of ' + ((Math.floor(Math.random() * 2) === 1) ? 'that' : 'this')
        });
      }
    })


   .controller('patientDetailsCtrl', function ($scope, $ionicPopup, $ionicPlatform, $state) {
       $scope.notifyAlert = function () {
           $ionicPopup.alert({
               title: "Memory Jogger",
               content: "Notification Successfully Sent!!!"
           })
               
       };
   })
.controller('showRequestPopupCtrl', [
                    '$scope', '$ionicModal',
                    function ($scope, $ionicModal) {
                        $ionicModal.fromTemplateUrl('templates/requestPopup.html', {
                            scope: $scope,
                            animation: 'slide-in-up'
                        }).then(function (modal) {
                            $scope.modal = modal;
                        });

                        $scope.openModal = function () {
                            $scope.modal.show();
                        };

                        $scope.closeModal = function () {
                            $scope.modal.hide();
                        };

                        //Cleanup the modal when we're done with it!
                        $scope.$on('$destroy', function () {
                            $scope.modal.remove();
                        });
                        // Execute action on hide modal
                        $scope.$on('modal.hide', function () {
                            // Execute action
                        });
                        // Execute action on remove modal
                        $scope.$on('modal.removed', function () {
                            // Execute action
                        });
                        $scope.$on('modal.shown', function () {
                            console.log('Modal is shown!');
                        });

                        $scope.showRequest = function (index) {
                            $scope.openModal();
                        }
                    }
])
;
