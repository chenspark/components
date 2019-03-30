<template>
    <el-select v-model="modelValue" placeholder="请选择" @change="changeHandler">
        <el-option v-if="isShowAll" :label="$t('pages.store.installer.pageStoreInsAll')" value=""/>
        <el-option v-for="(option, index) in options" :key="index" :value="option.value" :label="option.label"/>
    </el-select>
</template>

<script>
    /**
     * 总部的市场选择器 返回openCode或者carrierUid
     * @Author Nation
     * @cdate 2018-03-06 22:31
     */
    const TYPE_CONFIG = {
        OPEN_CODE : 'open_code',
        CARRIER_UID : 'carrier_uid'
    }
    export default {
        name: 'star-hq-market-select',
        model: {
            prop: 'value',
            event: 'input'
        },
        props: {
            showAll: {
                type: Boolean,
                default: false
            },
            value: [String, Number],
            type: {
                type: String,
                default: TYPE_CONFIG.OPEN_CODE
            }
        },
        data() {
            return {
                isShowAll: this.showAll,
                modelValue: '',
                options: []
            }
        },
        mounted() {
            let pagination = {
                page: 1, pageSize: 1000
            }
            this.service.market.getList(pagination).then((resp) => {
                resp.datalist.forEach((val) => {
                    this.options.push({
                        label: val.biz.biz_name,
                        value: (TYPE_CONFIG.OPEN_CODE == this.type ? val.biz.open_code : val.biz.owner_uid)
                    })
                });
                let defaultSelect = this.isShowAll ? '' : (this.options.length > 0 ? this.options[0].value : null);
                this.changeHandler(defaultSelect);
                this.$emit('dataLoad', defaultSelect);
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
                this.modelValue = newVal;
            },
        },
    }
</script>
<style scoped lang="scss">

</style>

