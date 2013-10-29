function HeaderController($scope, $location, Global) {
    $scope.global = Global;
    $scope.menu = [];

    $scope.init = function() {

    };

    $scope.isSelected = function(item) {        
        if ($location.path() == "/"+item.link) {
            return "active"
        } else return ""
    }
}