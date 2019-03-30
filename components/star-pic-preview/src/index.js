import Vue from 'vue'
import previewVue from './star-pic-preview.vue'
import merge from 'element-ui/src/utils/merge';

const PreviewConstructor = Vue.extend(previewVue)
let isShowImage
let opt = {}

PreviewConstructor.prototype.visible = true
const imgPreview = (options = {}) => {
    if(typeof options === "string") {
        opt.imageUrl = options
    }
    options = merge({fullscreen: '',visible: true}, opt, options);
    if (options.fullscreen && isShowImage) {
        return isShowImage
    }
    let instance = new PreviewConstructor({
        el: document.createElement('div'),
        data: options
    })
    instance.$el.addEventListener('click',function () {
        instance.visible = false;
    })
    let parent = document.body
    parent.appendChild(instance.$el)
    if (options.fullscreen) {
        isShowImage = instance
    }
    return instance
}
export default imgPreview
