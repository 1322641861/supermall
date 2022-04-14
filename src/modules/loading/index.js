import loadingComponent from './loading';

const Load = {};

Load.install = function (Vue) {
    const loadConstructor = Vue.extend(loadingComponent);
    const instance = new loadConstructor();
    instance.$mount(document.createElement('div'));
    document.body.appendChild(instance.$el);

    Vue.prototype.$load = show => {
        instance.show = show;
    }
}

export default Load;