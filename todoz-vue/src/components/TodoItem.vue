<template>
  <div class="todo-item">
    <i
      @click.prevent="toggle"
      :class="[
        'toggle-todo-item icon like is-medium',
        { 'is-empty': !item.done }
      ]"
    ></i>
    <p>{{ item.text }}</p>
    <i @click.prevent="remove" class="remove-todo-item icon close is-medium"></i>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    toggle() {
      alert(`TODO toggle ${this.$props.item.id}`);
    },
    remove() {
      alert(`TODO remove ${this.$props.item.id}`);
    }
  }
};
</script>

<style scoped>
.todo-item {
  padding-bottom: 1rem;
  border-bottom: 4px solid #eee;
  margin-bottom: 1rem;
}
.todo-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.todo-item {
  display: flex;
}
.todo-item .toggle-todo-item,
.todo-item .remove-todo-item {
  flex: 1;
  width: 80px;
  cursor: pointer;
}
.todo-item p {
  flex: 10;
  text-align: left;
}
.todo-item .remove-todo-item:before {
  opacity: 0.5;
}
.todo-item .remove-todo-item:hover:before {
  opacity: 1;
  color: red;
}
</style>
