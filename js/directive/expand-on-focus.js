"use strict";

function expandOnFocus() {
  return {
    restrict: "A",
    link: ($scope, $element, $attrs) => {
      $element.on("mouseover", () => {
        $element.css("padding", "16px");
      }).on("mouseout", () => {
        $element.css("padding", "10px");
      });
    }
  }
}



angular.module("SocialMedia").directive("expandOnFocus", expandOnFocus);