import starInputTag from './src/star-input-tag';

/* istanbul ignore next */
starInputTag.install = function(Vue) {
    Vue.component(starInputTag.name, starInputTag);
};

export default starInputTag;
