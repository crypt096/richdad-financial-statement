<template>
  <main class="m-10 border border-sky-500">
    <div class="mt-8 ml-3 mb-3 text-xl">INCOME STATEMENT</div>
    <div class="grid grid-cols-2">
      <income-statement></income-statement>
      <auditor></auditor>
      <expenses></expenses>
    </div>
  </main>
</template>

<script setup lang="ts">
import IncomeStatement from "./components/IncomeStatement.vue";
import Auditor from "./components/Auditor.vue";
import Expenses from "./components/Expenses.vue";
</script>
