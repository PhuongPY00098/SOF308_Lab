<template>
  <div class="p-5">
    <label for="score">Nhập điểm của bạn:</label>
    <input
      id="score"
      type="number"
      v-model="score"
      placeholder="Nhập điểm"
      class="form-control"
      step="0.1"
      min="0"
      max="10"
    />

    <p class="mt-3"><strong>Xếp loại:</strong> {{ classification }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const score = ref(0);

const classification = computed(() => {
  if (score.value < 5) {
    return "Yếu";
  } else if (score.value >= 5 && score.value < 6.5) {
    return "Trung bình";
  } else if (score.value >= 6.5 && score.value < 8) {
    return "Khá";
  } else if (score.value >= 8 && score.value < 9) {
    return "Giỏi";
  } else if (score.value >= 9) {
    return "Xuất sắc";
  } else {
    return "Không hợp lệ";
  }
});
</script>

<script>
export default {
  name: "Lab6Bai1",
};
</script>

<style></style>
