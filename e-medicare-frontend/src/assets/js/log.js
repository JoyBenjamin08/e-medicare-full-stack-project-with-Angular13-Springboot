var cta = document.querySelector(".cta");
var check = 0;

cta.addEventListener('click', function(e){
    var text = e.target.nextElementSibling;
    var loginText = e.target.parentElement;
    text.classList.toggle('show-hide');
    loginText.classList.toggle('expand');
    if(check == 0)
    {
        cta.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
        check++;
    }
    else
    {
        cta.innerHTML = "<i class=\"fas fa-chevron-down\"></i>";
        check = 0;
    }
})

const basicAutocomplete = document.querySelector('#search-autocomplete');
const data = ['One', 'Two', 'Three', 'Four', 'Five'];
const dataFilter = (value) => {
  return data.filter((item) => {
    return item.toLowerCase().startsWith(value.toLowerCase());
  });
};

new mdb.Autocomplete(basicAutocomplete, {
  filter: dataFilter
});
var app = angular.module('MyApp');
app.controller('DemoCtrl', function($scope) {
		$scope.user = {
				first_name: '',
				last_name: '',
				gender: '',
				age: '',
				email: '',
		};
});
app.directive("compareTo", function() {
		return {
				require: "ngModel",
				scope: {
						otherModelValue: "=compareTo"
				},
				link: function(scope, element, attributes, ngModel) {

						ngModel.$validators.compareTo = function(modelValue) {
								return modelValue == scope.otherModelValue;
						};

						scope.$watch("otherModelValue", function() {
								ngModel.$validate();
						});
				}
		};
});
var app = angular.module('MyApp');
app.controller('DemoCtrl', function($scope) {
		$scope.user = {
				first_name: '',
				last_name: '',
				gender: '',
				age: '',
				email: '',
		};
});
app.directive("compareTo", function() {
		return {
				require: "ngModel",
				scope: {
						otherModelValue: "=compareTo"
				},
				link: function(scope, element, attributes, ngModel) {

						ngModel.$validators.compareTo = function(modelValue) {
								return modelValue == scope.otherModelValue;
						};

						scope.$watch("otherModelValue", function() {
								ngModel.$validate();
						});
				}
		};
});


