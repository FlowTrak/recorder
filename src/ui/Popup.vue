<script setup lang="ts">
const startRecording = () => {
  console.log('Start recording');
};
</script>

<template>
  <div class="popup">
    <h1>Recorder</h1>
    <button @click="startRecording">Start Recording</button>
  </div>
</template>

<style scoped>
.popup {
  padding: 20px;
  width: 300px;
}
</style>
