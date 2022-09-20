<template>
  <div>
    <div class="post">
      <div>
        <div>{{ post.id }}</div>
        <div><strong>Название: </strong>{{ post.title }}</div>
        <div><strong>Описание: </strong>{{ post.body }}</div>
      </div>
      <div class="btns__post">
        <my-button @click="$router.push(`/posts/${post.id}`)"
          >Открыть</my-button
        >
        <my-button @click="$emit('remove', post)">Удалить</my-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 2px solid #000;
  border-radius: 20px;
  margin-top: 10px;
  background-color: rgb(175, 175, 175);
  font-style: italic;
  color: #000;
  font-size: 20px;
}
</style>
