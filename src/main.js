// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import kunTips from '@/components/global/kunTips';

Vue.config.productionTip = false;


//* 全局组件
Vue.component('kun-tips', kunTips);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
});