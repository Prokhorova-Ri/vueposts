<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  border: 2px solid #000;
  padding: 10px 15px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: rgb(175, 175, 175);
  color: #000;
  font-size: 18px;
}
</style>
