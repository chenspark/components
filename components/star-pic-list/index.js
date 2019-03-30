import starPicList from './src/star-pic-list';

/* istanbul ignore next */
starPicList.install = function(Vue) {
    Vue.component(starPicList.name, starPicList);
};

export default starPicList;
