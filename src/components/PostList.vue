<template>
  <div v-if="posts.length > 0">
    <h2>Список пользователей</h2>
    <post-item
      :post="post"
      v-for="post in posts"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else>Список постов пуст</h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
