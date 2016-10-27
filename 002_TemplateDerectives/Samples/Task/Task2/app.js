var app = angular.module("questions", []);

app.controller("QuestionsCtrl", function ($scope) {
    $scope.questions = [
        {question: '2+2=?', answers: ['1', '2', '3', '4'], right: 4},
        {question: '1+2=?', answers: ['1', '2', '3', '4'], right: 3},
        {question: '3+2=?', answers: ['5', '2', '3', '4'], right: 1},
        {question: '2+4=?', answers: ['1', '2', '3', '6'], right: 4},
        {question: '3+5=?', answers: ['1', '8', '3', '4'], right: 2}
    ];

    $scope.questionNumber = 1;

    $scope.userAnswer = [];
    $scope.resultAnswer = [];

    $scope.answer = function () {
        var questionResult;

        if (+$scope.userAnswer[$scope.questionNumber - 1] === $scope.questions[$scope.questionNumber - 1].right) {
            questionResult = true;
        } else {
            questionResult = false;
        }

        $scope.resultAnswer.push(questionResult);

        $scope.questionNumber++;
    };
});