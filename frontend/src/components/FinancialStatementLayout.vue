<template>
  <main class="mt-5 m-4 border border-dark border-2 position-relative">
    <div class="fs-4 text-uppercase pt-3 ps-3 fw-semibold">Income Statement</div>
    
    <income></income>

    <div class="mt-5">
      <edit-financial-statement-modal></edit-financial-statement-modal>
    </div>
  </main>
</template>

<script setup lang="ts">
import EditFinancialStatementModal from './EditFinancialStatementModal.vue';
import Income from './income-statement/Income.vue';
</script>