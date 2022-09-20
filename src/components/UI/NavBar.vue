<template>
  <div class="navbar">
    <div @click="$router.push('/')">VUE 3</div>
    <div class="navbar__btns">
      <my-button class="navbar__btn" @click="$router.push('/posts')"
        >Посты</my-button
      >
      <my-button class="navbar__btn" @click="$router.push('/about')">
        Инфо
      </my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 70px;
  background-color: rgb(49, 49, 49);
  box-shadow: 2px 2px 3px;
  &__btn {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 15px;
  }
}
</style>
