<template>
  <div class="app">
    <header>
      <h1>
        <i class="icon trophy is-large"></i> TodoZ
      </h1>
      <p>
        Handle your tasks with style!
        <i class="snes-jp-logo"></i>
      </p>
    </header>
    <template v-if="loading">
      <section class="container is-dark is-loading">Loading…</section>
    </template>
    <template v-else>
      <TodoStats/>
      <TodoItems app-remove-item="removeItem"/>
      <TodoForm/>
    </template>
  </div>
</template>

<script>
import TodoStats from "./components/TodoStats.vue";
import TodoItems from "./components/TodoItems.vue";
import TodoForm from "./components/TodoForm.vue";
import { fetchItems } from "./api";

export default {
  data() {
    return {
      loading: true
    };
  },
  async created() {
    // fetchItems().then(items => this.$store.commit("init", items));
    this.$store.commit("init", await fetchItems());
    this.loading = false;
  },
  components: {
    TodoStats,
    TodoItems,
    TodoForm
  }
};
</script>

<style src="./assets/nes-0.0.2.css"></style>
<style>
body {
  padding: 0 2rem;
  margin: 2rem;
}

.container {
  margin: 2rem 0;
}
.container.is-dark {
  color: #fff;
}

.container.is-loading {
  text-align: center;
  font-size: 3rem;
}
</style>
