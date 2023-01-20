<script setup lang="ts">
import IncomeStatement from "./components/IncomeStatement.vue";
import Auditor from "./components/Auditor.vue";
import Expenses from "./components/Expenses.vue";
</script>

<template>
  <main class="m-10 border border-sky-500">
    <div class="mt-8 ml-3 mb-3 text-xl">
        INCOME STATEMENT
    </div>
    <div class="grid grid-cols-2">
      <IncomeStatement/>
      <Auditor class="row-span-2"/>
      <Expenses class="mt-5"/>
    </div>
  </main>
</template>
