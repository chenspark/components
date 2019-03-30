<template>
    <div class="g-table">
        <div class="row"
             v-for="(item, index) in cellConfigArr.length"
             :key="index"
        >
            <div class="cell"
                 v-for="(cell, cellIndex) in cellConfigArr[index].cellNum"
                 :key="cellIndex"
                 :style="{width: getWidth(cellConfigArr[index])}"
            >
                <div class="cell-box">
                    <div class="cell-text" :style="{width: cellTextWidth}">
                        <slot :name="`text-${index + 1}-${cellIndex + 1}`"></slot>
                    </div>
                    <div class="cell-content">
                        <slot :name="`content-${index + 1}-${cellIndex + 1}`"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "g-table",
        props: {
            cellConfigArr: {
                type: Array,
                default: [{cellNum:2}],
            },
            cellTextWidth: {
                type: String,
                default: '120px',
            },
        },
        methods: {
            getWidth(item) {
                return (100/item.cellNum)+'%'
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../../assets/css/var";
    .g-table {
        width:100%;
        margin-top: 20px;
        font-size: 14px;
        .row {
            display:flex;
            width: 100%;
            .cell{
                border: 1px solid #e4e7ed;
                .cell-box{
                    display: flex;
                    padding:10px;
                    .cell-text{
                        color: #303133;
                        font-size: 14px;
                    }
                }
            }
            .full{
                width: 100%;
            }
            .half{
                width: 50%;
            }
            .cell + .cell{
                border-left:0;
            }
        }
        .row + .row{
            .cell{
                border-top: 0;
            }
        }
    }
</style>
