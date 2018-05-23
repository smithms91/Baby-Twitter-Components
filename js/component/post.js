"use strict";

const post = {
  bindings: {
    post: "<"
  },
  template: `
  <div class="single_post">
    <h1 class="post_header">{{$ctrl.post.subject}}</h1>
    <p class="post_message">{{$ctrl.post.message}}</p>
  </div>
  `
}




angular.module("SocialMedia").component("post", post);