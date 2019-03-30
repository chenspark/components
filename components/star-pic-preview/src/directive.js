const previewDirective = {}
previewDirective.install = Vue => {
    Vue.directive('picPreview', {
        inserted(el,binding){
            el.addEventListener('click', function (e){
                e.stopPropagation();
                let imgSrc;
                if (!binding.value) {
                    imgSrc = el.getAttribute('src');
                }else {
                    imgSrc = binding.value;
                }
                let displayImg = document.getElementById('displayImg');
                if (displayImg){
                    displayImg.style.display = 'flex';
                    const childImg = displayImg.childNodes[0];
                    childImg.setAttribute('src', imgSrc)
                }else{
                    displayImg = document.createElement('div');
                    const body = document.body;
                    displayImg.innerHTML = `<img src="${imgSrc}" />`;
                    displayImg.setAttribute('id', 'displayImg');
                    displayImg.setAttribute('style', 'display: flex;justify-content: center;align-items:center;position:fixed;z-index:1000;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,0.7);');
                    body.appendChild(displayImg);
                    displayImg.addEventListener('click', function(e){
                        e.stopPropagation();
                        this.style.display = 'none'
                    })
                }
            })
        }
    })
}
export default previewDirective



// import Vue from 'vue'
// import Preview from './star-pic-preview.vue'
// const Mask = Vue.extend(Preview)
//
// const previewDirective = {}
// previewDirective.install = Vue => {
//     const toggleLoading = (el, binding) => {
//         if (binding.value) {
//             if (binding.modifiers.fullscreen) {
//                 insertDom(document.body, el, binding)
//             }
//         } else {
//             el.instance.visible = false
//         }
//     }
//
//     const insertDom = (parent, el, binding) => {
//         el.instance.visible = false
//         parent.appendChild(el.mask)
//     }
//     Vue.directive('picPreview', {
//         bind: function(el, binding, vnode) {
//             let imageUrl = el.getAttribute('src');
//             const mask = new Mask({
//                 el: document.createElement('div'),
//                 data: {
//                     imageUrl: imageUrl,
//                     fullscreen: !!binding.modifiers.fullscreen
//                 }
//             })
//             el.addEventListener('click',function (e) {
//                 console.log(this.instance)
//                 this.instance.visible = this.instance.visible === true ? false : true;
//             })
//             el.instance = mask
//             el.mask = mask.$el
//             binding.value && toggleLoading(el, binding)
//         },
//         update: function(el, binding) {
//             if (binding.oldValue !== binding.value) {
//                 toggleLoading(el, binding)
//             }
//         },
//         unbind: function(el, binding) {
//             el.instance && el.instance.$destroy()
//         }
//     })
// }
// export default previewDirective
