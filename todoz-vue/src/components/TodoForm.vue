<template>
  <section class="container with-title is-loaded">
    <h2 class="title">Add a new task</h2>
    <form @submit.prevent="submit">
      <input type="text" placeholder="What?" class="input" v-model.trim="text">
      <button type="submit" class="btn is-primary">Add this task</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      text: null
    };
  },
  methods: {
    submit() {
      const text = this.$data.text;
      this.$data.text = null;
      alert(`TODO create new item ${JSON.stringify({ text, done: false })}`);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
form input {
  flex: 1;
}
form button {
  flex: 0;
  min-width: 12em;
}
</style>
