<template>
  <div>
    <button type="button" class="btn btn-dark" @click="showModal">Edit statement</button>
    
    <!-- Bootstrap modal -->
    <div class="modal" tabindex="-1" ref="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal Title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Modal Body
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Modal } from 'bootstrap';

const modal = ref<HTMLDivElement | null>(null);

const showModal = () => {
  if (modal.value) {
    const modalInstance = new Modal(modal.value);
    modalInstance.show();
  }
};
</script>