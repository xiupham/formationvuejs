<template>
  <section class="container with-title is-loaded">
    <h2 class="title">Stats</h2>
    <div class="stats">
      <div class="stat-item">
        <i class="icon like is-empty"></i>
        <span class="counter pending">{{ pending }}</span>
        pending
      </div>
      <div class="stat-item">
        <i class="icon like"></i>
        <span class="counter done">{{ done }}</span>
        done
      </div>
      <div class="stat-item">
        <i class="icon trophy"></i>
        <span class="counter total">{{ pending + done }}</span>
        total
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pending: 2,
      done: 4
    }
  }
};
</script>

<style scoped>
.stats {
  display: flex;
}
.stat-item {
  flex: 1;
}
.stat-item {
  text-align: center;
}
.stat-item:first-child {
  text-align: left;
}
.stat-item:last-child {
  text-align: right;
}
.stat-item i {
  margin-right: 1rem;
}
</style>
