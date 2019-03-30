import starUploadPicCard from './src/star-upload-pic-card';

/* istanbul ignore next */
starUploadPicCard.install = function(Vue) {
    Vue.component(starUploadPicCard.name, starUploadPicCard);
};

export default starUploadPicCard;
