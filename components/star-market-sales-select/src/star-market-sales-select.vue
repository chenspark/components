<template>
    <el-select v-model="salesUid" :placeholder='$t("components.salesSelect.compSaleSelectSale")' @change="changeHandler"
               :disabled="useFlag">
        <el-option v-if="isShowAll" :label='$t("components.salesSelect.compSaleAll")' value=""/>
        <el-option v-for="(option, index) in options" :key="index" :value="option.id + ''" :label="option.name"/>
    </el-select>
</template>

<script>
    /**
     * 市场销售人员选择器
     * @Author Nation
     * @cdate 2018-03-06 22:31
     */
    export default {
        name: 'star-market-sales-select',
        props: {
            showAll: {
                type: Boolean,
                default: function () {
                    return true
                }
            },
            value: String,
            disabled: Boolean
        },
        data() {
            return {
                isShowAll: this.showAll,
                salesUid: '',
                options: [],
                useFlag: null
            }
        },
        mounted() {
            this.salesUid = this.value;
            this.service.userGroup.getSalesList().then((resp) => {
                this.options = resp.datalist;
            }, (error) => {
                console.log(error);
            });
            this.useFlag = this.disabled;
        },
        methods: {
            changeHandler(newVal) {
                this.$emit('input', newVal);
            }
        },
        watch: {
            value(newVal) {
                this.salesUid = newVal;
            },
        },
    }
</script>
<style scoped lang="scss">

</style>

