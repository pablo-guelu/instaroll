<template>
  <v-card color="cyan-darken-2" class="mx-auto rounded-0 d-flex flex-column pa-4" width="300" :min-height="200">
    <h2 class="my-3">InstaCast</h2>
    <v-btn class="my-2" @click="rotateVideo('90')">Rotate 90 <v-icon icon="mdi-rotate-right"></v-icon></v-btn>
    <v-btn class="my-2" @click="rotateVideo('270')">Rotate 270 <v-icon icon="mdi-rotate-left"></v-icon></v-btn>
    <v-btn class="my-2" @click="reset">Reset</v-btn>
  </v-card>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';

const tab = ref({ url: '', title: '', id: '' || 0 });

const getCurrentTab = async () => {
  let [ChromeTab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  if (ChromeTab.url && ChromeTab.title && ChromeTab.id) {
    tab.value.url = ChromeTab.url;
    tab.value.title = ChromeTab.title;
    tab.value.id = ChromeTab.id;
  }
}

onMounted(() => {
  getCurrentTab();
})

const rotateVideo = (deg: string) => {
  try {
    chrome.tabs.sendMessage(tab.value.id, { msg: `rotate${deg}`});
  } catch (error) {
    console.log(error)
  };
};

const reset = () => {
  try {
    chrome.tabs.sendMessage(tab.value.id, { msg: 'reset'});
  } catch (error) {
    console.log(error)
  };
}

</script>

<style scoped></style>
