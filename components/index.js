import starHqMarketSelect from './star-hq-market-select/index'
import starStoreSalesSelect from './star-market-sales-select/index'
import starUserGroupSelect from './star-user-group-select/index'
import starInputTag from './star-input-tag/index'
import starUploadPicCard from './star-upload-pic-card/index'
import starPicList from './star-pic-list/index'
import './star-img-preview/star-img-preview.js'
import gTable from './g-table/index.js'

import starPicPreview from './star-pic-preview/index.js'
import Vue from 'vue'
Vue.use(starPicPreview.directive)
Vue.prototype.$picPreview = starPicPreview.service

import locale from 'element-ui/lib/locale'

let components = {
    starHqMarketSelect,
    starStoreSalesSelect,
    starUserGroupSelect,
    starInputTag,
    starUploadPicCard,
    starPicList,
    gTable,
}

const install = function(Vue, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    // 全局注册组件
    Object.values(components).forEach(component => {
        if (!component.name) {
            console.log('starComponent is not has name')
        }
        Vue.component(component.name, component)
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default Object.assign({
    version: '0.0.1',
    locale: locale.use,
    i18n: locale.i18n,
    install,
}, components)
