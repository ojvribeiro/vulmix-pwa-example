<template>
  <div class="content">
    <div>
      <img src="/icons/192.png" alt="Vulmix" width="192" height="192" />
      <h1>Hello, {{ msg }}</h1>
      <button @click="count++">Count: {{ count }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Vulmix PWA App",
});

const msg = ref("Vulmix!");
const count = ref(0);
</script>

<style>
html,
body {
  background-color: black;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

.content {
  text-align: center;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
}

.content img {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.content button {
  background-color: #439e46;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
}
</style>
