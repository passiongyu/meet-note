<template>
    <div class="card">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature2.jpg" @contextmenu="onImageRightClick" class="w-full md:w-[30rem] rounded shadow-lg" aria-haspopup="true" />
        <ContextMenu ref="menu" :model="items">
<template #item="{label2}">
    <div>{{ label2 }}</div>
</template>

        </ContextMenu>
    </div>
</template>

<script setup>
import { ContextMenu } from 'primevue';
import { ref } from 'vue';
const label2= 3;

const menu = ref();
const items = ref([
    { label: 'Copy', icon: 'pi pi-copy' },
    { label: 'Rename', icon: 'pi pi-file-edit' }
]);

const onImageRightClick = (event) => {
    menu.value.show(event);
};

</script>
