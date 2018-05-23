"use strict";

const postForm = {
  bindings: {
    onSubmit: "&"
  },
  template: `
  <form class="new_message" ng-submit="$ctrl.onSubmit({ newUser: $ctrl.newItem })">
    <h4 class="new_message_title">Title</h4>
    <input expand-on-focus class="new_input" type="text" placeholder="Post Title" ng-model="$ctrl.newItem.subject">
    <h4 class="new_message_title">Thought</h4>
    <textarea expand-on-focus class="new_textarea" placeholder="Message" ng-model="$ctrl.newItem.message"></textarea>
    <button class="new_message_button">Add Post</button>
  </form>
  `
}


angular.module("SocialMedia").component("postForm", postForm);
