<template>
    <div v-if="isOpen" class="modal">
        <div class="modal-content">
            <slot></slot>
        </div>
    </div>
</template>
   
<script>

export default {
    name: 'PoPView',
    props: {
        isOpen: {
            type: Object,
            required: true,
        },
    },
}
</script>
<style scoped>
.modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
}
</style>