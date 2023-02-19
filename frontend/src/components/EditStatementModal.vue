<template>
  <div
    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
  >
    <div class="relative w-auto my-6 mx-auto max-w-6xl">
      <div
        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
      >
        <div
          class="flex items-center justify-center p-2 border-b border-solid border-slate-300 rounded-t uppercase"
        >
          <h3 class="text-xl">Edit financial statement</h3>
        </div>

        <div class="relative p-6 flex-auto">
          <!-- Form will go here -->
        </div>

        <div
          class="flex items-center justify-end p-6 border-t border-solid border-slate-300 rounded-b"
        >
          <button type="button" class="mr-4">Discard</button>
          <button type="button">Save</button>
        </div>
      </div>
    </div>
  </div>
  <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</template>

<script lang="ts" setup></script>
