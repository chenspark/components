<template>
    <div @after-leave="handleAfterLeave">
        <div
            v-show="visible"
            class="el-loading-mask"
            @click="hideImage"
            :style="{ backgroundColor: background || '' }"
            :class="[customClass, { 'is-fullscreen': fullscreen }]">
            <div>
                <img class="displayImg" :src="imageUrl"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                background: null,
                // fullscreen: '',
                customClass: '',
                visible: false,
                imageUrl: '',
            };
        },
        methods: {
            handleAfterLeave() {
                this.$emit('after-leave');
            },
            hideImage(){
                this.visible = false
            }
        }
    };
</script>
<style>
    .displayImg{
        /*width: 600px;*/
        /*height: 600px;*/
    }
    .el-loading-mask{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
