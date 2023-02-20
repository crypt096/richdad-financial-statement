<template>
  <!-- Create layout like this: https://www.richdad.com/MediaLibrary/RichDad/images/blogs/income-statement-131003.png -->
  <!-- I've just added components for you here. Add appropriate classes and make it look like in the image above -->

  <!-- Remember not to attach classes to components, rather create span/div with classes and then add component as a child: 
  <div class="something">
    <income></income>
  </div> -->

  <div class="m-2 border-2 border-black">
    <edit-statement-modal
      v-if="isEditStatementModalOpened"
    ></edit-statement-modal>
    <div class="pt-4 pl-4 text-xl font-medium uppercase">Income Statement</div>

    <div class="flex flex-row">
      <div class="income w-max flex-1">
        <income></income>
      </div>
      <div class="auditor w-max flex-1">
        <!-- Auditor code here -->
        auditor placeholder
      </div>
    </div>

    <div>
      <button
        type="button"
        class="bg-sky-600 border-black rounded text-white px-4 py-2"
        @click="showEditStatementModal()"
      >
        Edit statement
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Income from "./Income.vue";
import Expenses from "./Expenses.vue";
import Auditor from "./Auditor.vue";
import EditStatementModal from "./EditStatementModal.vue";

const isEditStatementModalOpened = ref(false);

const showEditStatementModal = () => {
  isEditStatementModalOpened.value = true;
};
</script>
