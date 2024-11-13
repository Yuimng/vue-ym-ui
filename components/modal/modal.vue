<template>
  <teleport to="body">
    <div class="modal-mask" v-show="modalOpen" @click.self="onBlur"></div>
    <div
      class="modal-wrapper"
      :style="{ width: modalWidth }"
      v-show="modalOpen"
    >
      <h3>{{ title }}</h3>
      <div>{{ content }}</div>
      <div class="modal-footer">
        <button @click="onCancel">取消</button>
        <button @click="onOk">确定</button>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

interface Props {
  width?: string | number;
  title?: string;
  content?: string;
  open?: boolean; // (v-model) 提示框是否可见
}

const props = withDefaults(defineProps<Props>(), {
  width: 420,
  title: "默认标题",
  content: "默认内容",
  open: false,
});

const modalWidth = computed(() => {
  return typeof props.width === "number" ? `${props.width}px` : props.width;
});

const modalOpen = ref<boolean>();
const emits = defineEmits(["update:open", "cancel", "ok"]);

function openModal() {
  modalOpen.value = true;
  emits("update:open", true);
}

function onBlur() {
  modalOpen.value = false;
  emits("update:open", false);
  emits("cancel");
}

function onCancel() {
  modalOpen.value = false;
  emits("update:open", false);
  emits("cancel");
}

function onOk() {
  modalOpen.value = false;
  emits("update:open", false);
  emits("ok");
}

defineExpose({ openModal });
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.modal-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  z-index: 2000;
}
</style>
