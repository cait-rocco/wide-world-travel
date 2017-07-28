'use strict';

myApp.factory("GuideFactory", function($q, $http) {
	function getGuides() {
		return $q((resolve, reject) => {
			$http.get('../../data/guides.json')
			.then((guides) => {
				console.log("guides", guides);
				resolve(guides);
			})
			.catch((err) => {
				reject(err);
			});
		});
	}
	return {getGuides};
});