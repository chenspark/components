import starUserGroupSelect from './src/star-user-group-select';

/* istanbul ignore next */
starUserGroupSelect.install = function(Vue) {
    Vue.component(starUserGroupSelect.name, starUserGroupSelect);
};

export default starUserGroupSelect;
