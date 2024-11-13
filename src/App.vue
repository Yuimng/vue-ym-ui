<template>
  <button @click="openModal">打开弹窗</button>
  <ym-modal ref="modalRef" :width="'340px'" :title="'标题'" :content="'内容'" @cancel="onCancel" @ok="onOk" />
  <ym-button />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalRef = ref()

const openModal = () => {
  modalRef.value.openModal()
}

const onOk = () => {
  console.log('ok')
}

const onCancel = () => {
  console.log('cancel')
}
</script>

<style scoped></style>
