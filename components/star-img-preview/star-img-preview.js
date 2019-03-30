// 自定义指令v-preview点击img预览，再次点击关闭预览
import Vue from 'vue'
Vue.directive('preview', {
    inserted(el){
        el.addEventListener('click', function (e){
            // console.log(el);
            e.stopPropagation();
            // 获取当前图片的src
            const imgSrc = el.getAttribute('src');
            let displayImg = document.getElementById('displayImg');
            if (displayImg){
                displayImg.style.display = 'flex';
                const childImg = displayImg.childNodes[0];
                childImg.setAttribute('src', imgSrc)
            }else{
                displayImg = document.createElement('div');
                const body = document.body;
                displayImg.innerHTML = `<img src="${imgSrc}" style="width: 800px;height: 100%" />`;
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
