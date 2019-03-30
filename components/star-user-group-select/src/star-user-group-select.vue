<template>
    <el-select v-model="groupId" :placeholder='$t("components.toast.compToastSelect")' @change="changeHandler"
               style="width: 300px">
        <el-option v-if="isShowAll" :label='$t("components.toast.compToastAll")' value=""/>
        <el-option v-for="(option, index) in options" :key="index" :value="option.id" :label="option.group_name"/>
    </el-select>
</template>

<script>
    /**
     * 用户组选择器
     * @Author Nation
     * @cdate 2018-03-10 11:31
     */
    export default {
        name: 'star-user-group-select',
        props: {
            showAll: {
                type: Boolean,
                default: function () {
                    return true
                }
            },
            value: Number
        },
        data() {
            return {
                isShowAll: this.showAll,
                groupId: null,
                options: []
            }
        },
        mounted() {
            this.groupId = this.value;
            this.service.userGroup.getGroupList().then((resp) => {
                this.options = resp.datalist;
                let defaultSelect = this.options.length > 0 ? this.options[0].id : null;
                this.$emit('userGroupDataLoad', defaultSelect);
            }, (error) => {
                console.log(error);
            })
        },
        methods: {
            changeHandler(newVal) {
                this.$emit('input', newVal);
            }
        },
        watch: {
            value(newVal) {
                this.groupId = newVal;
            },
        },
    }
</script>
<style scoped lang="scss">

</style>

