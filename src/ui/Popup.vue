<script setup lang="ts">
const startRecording = () => {
  console.log('Start recording');
};
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1>Recorder</h1>
    <button @click="startRecording">Start Recording</button>
  </div>
</template>
