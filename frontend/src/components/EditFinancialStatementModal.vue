<template>
  <div>
    <button type="button" class="btn btn-outline-dark mt-4" @click="showModal">Edit statement</button>

    <!-- Bootstrap modal -->
    <div class="modal" tabindex="-1" ref="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit financial statement</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- Select -->
            <div class="form-floating">
              <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <label for="floatingSelect">Works with selects</label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-outline-dark">Save changes</button>
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