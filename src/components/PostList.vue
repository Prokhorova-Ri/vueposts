<template>
  <div v-if="posts.length > 0">
    <h2>Список постов</h2>
    <transition-group name="post__list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
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

<style scoped>
.post__list-item {
  display: inline-block;
  margin-right: 10px;
}
.post__list-enter-active,
.post__list-leave-active {
  transition: all 0.6s ease;
}
.post__list-enter-from,
.post__list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post__list-move {
  transition: transform 0.3s ease;
}
</style>
