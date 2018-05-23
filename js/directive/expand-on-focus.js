"use strict";

function expandOnFocus() {
  return {
    restrict: "A",
    link: ($scope, $element, $attrs) => {
      $element.on("mouseover", () => {
        $element.css("width", "220px");
      }).on("mouseout", () => {
        $element.css("width", "200px");
      });
    }
  }
}



angular.module("SocialMedia").directive("expandOnFocus", expandOnFocus);