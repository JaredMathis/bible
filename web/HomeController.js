const {
    readFile,
    logIndent,
    merge,
    consoleLog,
    logProperties,
} = require('/utilities/log');

const {
    range,
} = require('/utilities/core');

const {
    getBooks,
    getChapterCount,
    getVerses,
} = require('/bible');

const ctrl = 'HomeController';
angular.module('bible', []);

angular.module('bible').controller(ctrl, function ($scope) {
        function loadState() {
            let json = localStorage.getItem('state');
            $scope.state = JSON.parse(json) || {};

            $scope.state.toggledWords = $scope.state.toggledWords || {};
            $scope.state.fontSizeFactor = $scope.state.fontSizeFactor || 0;
            saveState();
        }

        function saveState() {
            localStorage.setItem('state', JSON.stringify($scope.state));
        }

        logIndent(ctrl, context => {
            loadState();

            $scope.textLarger = () => {
                $scope.state.fontSizeFactor += 1;
                saveState();
            };
            $scope.textSmaller = () => {
                $scope.state.fontSizeFactor -= 1;
                saveState();
            };

            $scope.books = getBooks();

            if (!$scope.state.selectedBook) {
                $scope.state.selectedBook = 'John';
            }
            $scope.selectedChapter = 0;

            $scope.$watch('state.selectedBook', () => {
                let log = false;
                if (log) consoleLog('saving state');
                saveState();
                
                let count = getChapterCount($scope.state.selectedBook);
                $scope.chapters = range(count);

                if (log) consoleLog('selected book watch');
                if (log) consoleLog({chapters:$scope.chapters});
                if (log) consoleLog({selectedChapter:$scope.selectedChapter});
            });

            $scope.resetChapter = () => {
                $scope.selectedChapter = $scope.chapters[0];
            };

            $scope.$watch(() => {
                return [$scope.state.selectedBook, $scope.selectedChapter] 
            }, () => {
                let log = false;
                $scope.verses = getVerses($scope.state.selectedBook, $scope.selectedChapter);
                if (log) consoleLog({verses: $scope.verses})
            }, true);

            $scope.clickWord = (word) => {
                $scope.state.toggledWords[word.word] = !$scope.state.toggledWords[word.word];
                saveState();
            };

            $scope.previousChapter = () => {
                let log = false;
                if (log) consoleLog('previousChapter');
                $scope.selectedChapter = $scope.selectedChapter - 1;
                if ($scope.selectedChapter < 0) {
                    let selectedBookIndex = $scope.books.indexOf($scope.state.selectedBook) - 1;
                    if (selectedBookIndex < 0) {
                        selectedBookIndex = $scope.books.length - 1;
                    }
                    $scope.state.selectedBook = $scope.books[selectedBookIndex];
                    $scope.selectedChapter = getChapterCount($scope.state.selectedBook) - 1;
                    if (log) consoleLog({'$scope.selectedChapter':$scope.selectedChapter})
                }
            };
            $scope.nextChapter = () => {
                let log = false;
                if (log) consoleLog('previousChapter');
                $scope.selectedChapter = $scope.selectedChapter + 1;
                if ($scope.selectedChapter > getChapterCount($scope.state.selectedBook) - 1) {
                    let selectedBookIndex = $scope.books.indexOf($scope.state.selectedBook) + 1;
                    if (selectedBookIndex < 0) {
                        selectedBookIndex = 0;
                    }
                    $scope.state.selectedBook = $scope.books[selectedBookIndex];
                    $scope.selectedChapter = 0;
                    if (log) consoleLog({'$scope.selectedChapter':$scope.selectedChapter})
                }
            };
            $scope.getStyle = function () {
                let square = $scope.state.fontSizeFactor * $scope.state.fontSizeFactor;
                let style = { 
                    'font-size': (square * .02 + $scope.state.fontSizeFactor * .2 + 1) + 'em',
                };
                return style;
            };
        });
    });