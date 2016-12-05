(function() {
  'use strict';

  var app = angular.module('cj_exercise', []);
  app.controller('appController', appController);
  app.filter('cjcode', cjcodeFilterFactory);
  app.filter('keycode', keycodeFilterFactory);
  app.filter('progress', progressFilterFactory);

  appController.$inject = ['$scope', '$window', 'cjcodeFilter'];
  function appController($scope, $window, cjcodeFilter) {
    // 當前練習的字
    $scope.currentword = '';
    // 當前倉頡碼的輸入進度
    $scope.currentword_progress = 0;
    // 當前練習的文章
    $scope.currenttext = null;
    // 當前文章的練習進度
    $scope.currenttext_progress = 0;
    // 使用者輸入的練習文章
    $scope.input_text = null;

    $scope.inputTextButtonClick = inputTextButtonClick;
    angular.element($window).on('keypress', appKeyPressed);

    function inputTextButtonClick() {
      // 設定當前練習文章
      $scope.currenttext = $scope.input_text;
      // 重設練習進度
      _resetProgress();
    }

    function appKeyPressed(event) {
      if ($scope.currentword) {
        var word_cjcode = cjcodeFilter($scope.currentword);
        if (word_cjcode[$scope.currentword_progress] == event.key) {
          _nextKeycode();
          if ($scope.currentword_progress == word_cjcode.length) {
            _nextWord();
          }
          $scope.$apply();
        }
      }
    }

    function _resetProgress() {
      // 重設練習進度
      $scope.currentword = $scope.currenttext[0];
      $scope.currentword_progress = 0;
      $scope.currenttext_progress = 0;
    }

    function _nextKeycode() {
      $scope.currentword_progress += 1;
    }

    function _nextWord() {
      $scope.currentword_progress = 0;
      $scope.currenttext_progress += 1;
      let nextWord = $scope.currenttext[$scope.currenttext_progress];
      if (nextWord) {
        $scope.currentword = $scope.currenttext[$scope.currenttext_progress];
      }
      if (!cjcodeFilter($scope.currentword)) {
        _nextWord();
      }
    }

  }

  function cjcodeFilterFactory() {
    // 讀取倉頡碼表
    var codes = null;
    $.get('cj5-origin.json', function(data) {
      codes = data;
    });
    return function(word) {
      var cjcode = codes && codes[word];
      return cjcode;
    }
  }

  function keycodeFilterFactory() {
    var keycodes = null;
    $.get('keycode.json', function(data) {
      keycodes = data;
    });
    return function(word) {
      let result = '';
      if (keycodes) {
        for (var i in word) {
          result += keycodes[word[i]];
        }
      }
      return result;
    }
  }

  function progressFilterFactory() {
    return function(word, progress=0) {
      var word_with_progress  = word && word.slice(0, progress) + ">" + word.slice(progress);
      return word_with_progress;
    }
  }
})();
