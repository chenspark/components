import gTable from './src/g-table';

/* istanbul ignore next */
gTable.install = function(Vue) {
    Vue.component(gTable.name, gTable);
};

export default gTable;
