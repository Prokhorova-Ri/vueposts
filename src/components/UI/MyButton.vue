<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style lang="scss">
.btn {
  align-self: flex-end;
  border: 1px solid #000;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 8px 10px;
  background: linear-gradient(to right, #969696, #afafaf, #676767);
  transition: 0.3s;
  background-color: rgb(175, 175, 175);
  background-size: 200%;
  font-size: 18px;
  cursor: pointer;
  &__post {
    border-radius: 10px;
    margin: 10px;
    padding: 5px 10px;
  }
}

.btn:hover {
  background-position: right;
}
</style>
