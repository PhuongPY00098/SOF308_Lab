<template>
  <div id="app" class="container">
    <h1>Ứng dụng Blog nhỏ với Vue.js</h1>
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script>
export default {
  name: "Lab5Bai4",
};
</script>

<script setup>
import { ref } from "vue";
import CreatePost from "./CreatePost.vue";
import PostList from "./PostList.vue";

const posts = ref([]);

function addPost(post) {
  posts.value.push(post);
}
</script>

<style></style>
