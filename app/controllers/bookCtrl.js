'use strict';

myApp.controller("GuideController", function($scope, GuideFactory) {
	GuideFactory.getGuides()
	.then((guidesData) => {
		console.log("guidesdata", guidesData);
		$scope.guideList = guidesData.data.guides;
	});
});
