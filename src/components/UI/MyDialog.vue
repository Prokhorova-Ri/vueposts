<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-dialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  &__content {
    margin: auto;
    background: rgb(196, 196, 196);
    border-radius: 20px;
    min-height: 70px;
    min-width: 400px;
    padding: 20px;
    color: #000;
  }
}
</style>
