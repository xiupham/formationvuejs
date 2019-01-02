<template>
  <section class="container with-title is-loaded todo-items">
    <todo-item v-for="item in items" :key="item.id" :item="item"/>
  </section>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { fetchItems } from "../api";

export default {
  components: {
    TodoItem
  },
  computed: {
    items() {
      return this.$store.state.items;
    }
  },
  methods: {}
};
</script>
