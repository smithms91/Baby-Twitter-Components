"use strict";

const socialPosts = {
  template: `
  <h1 class="header">Baby Twitter!!</h1>
  <button class="add_thought_button" type="button" ng-click="$ctrl.openForm();">Add Thought</button>
  <div id="container">
    <post ng-repeat="post in $ctrl.postList" post="post"></post>
    <post-form ng-show="$ctrl.formOpen" on-submit="$ctrl.onSubmit(newUser);"></post-form>
  </div>
  `,
  controller: function() {
    const vm = this;
    vm.postList = [
      {subject: "Dog", message: "I am the first dog. also Lorem ipsum dolor sit amet todo something."},
      {subject: "Cat", message: "I am a cat. also Lorem ipsum dolor sit amet todo something."},
      {subject: "Dog2", message: "Second dog here. also also Lorem ipsum dolor sit amet todo something."},
      {subject: "Car", message: "My name is car I have always been a car. also Lorem ipsum dolor sit amet todo something."},
      {subject: "Pig", message: "I am the first pig. also Lorem ipsum dolor sit amet todo something."},
      {subject: "AlsoPig", message: "I am also a pig. also Lorem ipsum dolor sit amet todo something."}
    ];

    vm.openForm = () => {
      vm.formOpen = true;
    };

    vm.onSubmit = (item) => {
      vm.postList.unshift({
        subject: item.subject,
        message: item.message
      })
      item.subject = "";
      item.message = "";
      vm.formOpen = false;
      console.log();
    }
  }
};


angular.module("SocialMedia").component("socialPosts", socialPosts);