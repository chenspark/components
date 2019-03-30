<template>
    <div class="star-upload-pic-card">
        <el-upload
            :action="uploadAction"
            list-type="picture-card"
            :on-preview="handlePreview"
            :on-change="handleUrlChange"
            :on-remove="handleRemove"
            :on-progress="picUpload"
            :on-success="success"
            :before-upload="handleCheckLength"
            :file-list="fileList">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl">
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'star-upload-pic-card',
        model: {
            prop: 'imageList',
            event: 'input'
        },
        props: {
            /**
             * 图片url数组
             */
            imageList: {
                type: Array,
                default() {
                    return []
                }
            },
            limit: {
                type: Number,
                default: 5
            },
            uploadAction: {
                type: String,
                default: '/cgi/upload/file/item/image'
            },
            fileSizeMax: {
                type: Number,
                default: 1024 * 1024 * 100
            }
        },
        data() {
            return {
                isSubmiting: false,
                dialogImageUrl: '',
                dialogVisible: false,
                /**
                 * 文件对象数组
                 */
                fileList: []
            }
        },
        watch: {
            imageList: {
                handler() {
                    this.imageList.filter(img => !this.fileList.find(file => file.url === img)).forEach(img => {
                        this.fileList.push({name: '', url: img})
                    })
                },
                deep: true,
                immediate: true
            },
            fileList: {
                handler() {
                },
                deep: true,
                immediate: true
            },
        },
        methods: {
            beforeUpload(file) {
                if (this.fileList.length + 1 > this.limit) {
                    this.showError(`限制上传 ${this.limit} 个文件`);
                    return false;
                }
                if (this.allowMimes.indexOf(file.type) === -1) {
                    this.showError('不支持的格式，当前支持的格式有' + this.allowExtsView)
                    return false
                }
                if (file.size > this.fileSizeMax) {
                    this.showError('超出当前支持的上传限制' + this.fileSizeMaxView)
                    return false
                }
            },
            handleRemove(file, fileList) {
                this.$emit('input', this.imageList.filter(url => url !== file.url))
                this.fileList = fileList;
            },
            handlePreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleUrlChange(file, fileList) {
                this.fileList = fileList;
            },
            handleCheckLength(file) {
                if (this.fileList.length > this.limit) {
                    this.showError(`最多上传${this.limit}张图片！`);
                    return false;
                }
                return true;
            },
            picUpload() {
                this.isSubmiting = true;
            },
            success(resp, file, fileList) {
                this.isSubmiting = false;
                if (resp.success && resp.data) {
                    file.url = resp.data.url
                    let urls = this.imageList
                    urls.push(file.url)
                    this.$emit('input', urls)
                }
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>
