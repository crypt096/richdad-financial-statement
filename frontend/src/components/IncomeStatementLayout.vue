<template>
  <!-- Create layout like this: https://www.richdad.com/MediaLibrary/RichDad/images/blogs/income-statement-131003.png -->
  <!-- I've just added components for you here. Add appropriate classes and make it look like in the image above -->

  <!-- Remember not to attach classes to components, rather create span/div with classes and then add component as a child: 
  <div class="something">
    <income></income>
  </div> -->

  <!-- <income></income>
  <expenses></expenses>
  <auditor></auditor> -->
  <div class="m-2 border-2 border-black">
    <div class="pt-4 pl-4 text-xl font-medium uppercase">Income Statement</div>
    <!-- <income></income> -->
  </div>
</template>

<script lang="ts" setup>
import Income from "./Income.vue";
import Expenses from "./Expenses.vue";
import Auditor from "./Auditor.vue";
</script>
