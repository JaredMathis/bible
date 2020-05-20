const {
    readFile,
    logIndent,
    merge,
    consoleLog,
    logProperties,
} = require('/utilities/log');

const {
    getBooks,
} = require('/bible');

const ctrl = 'HomeController';
angular.module('bible', [])
    .controller(ctrl, function ($scope) {

        logIndent(ctrl, context => {
            $scope.books = getBooks();

            $scope.selectedBook = 'John';

            merge(context, { step: 'reading' });
            let text = require('/data/interlinear/john');
        
            //consoleLog({text});
            //logProperties(text);

            $scope.parsed = text;
        });
    });