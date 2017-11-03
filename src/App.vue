<template>
  <div id="app" :style="{ height: `${innerHei}px` }">
    <my-index :info="slider.index"></my-index>
    <my-intro :info="slider.intro"></my-intro>
    <my-skills :info="slider.skills"></my-skills>
  </div>
</template>

<script>
import myIndex from '@/pages/myIndex';
import myIntro from '@/pages/myIntro';
import mySkills from '@/pages/mySkills';
export default {
	data() {
		return {
			innerHei: 0,
			slider: {
				index: {
					name: '林柏坤',
					intro: '大三学生, 前端进阶中...',
					links: [
						{
							label: 'Blog',
							icon: '#icon-blogease-copy',
							href: 'https://kunine.github.io/blog'
						},
						{
							label: 'GitHub',
							icon: '#icon-github',
							href: 'https://www.github.com/Kunine	'
						},
						{
							label: 'Coding',
							icon: '#icon-coding-copy',
							href: 'https://coding.net/u/Kunine'
						}
					]
				},
				intro: {
					title: '个人介绍',
					intro: '高中接触 Web 开发和设计，上了大学正式学习前端、PHP、Node.js，大一开始在校不间断负责多个公众号、小程序的开发。目前在腾讯公司 Web 前端开发岗位实习。',
					icons: [
						{
							icon: '#icon-birthday',
							label: '1997-08'
						},
						{
							icon: '#icon-edu',
							label: '广东轻工职业技术学院'
						},
						{
							icon: '#icon-position',
							label: '广东·广州'
						},
						{
							icon: '#icon-youxiang',
							label: 'ninebook@hotmail.com'
						},
						{
							icon: '#icon-phone',
							label: '13631539770'
						},
						{
							icon: '#icon-CombinedShape',
							label: 'LBK865996'
						}
					]
				},
				skills: {

				}
			}
		};
	},
	components: {
		myIndex,
		myIntro,
		mySkills
	},
	created() {
		this.innerHei = window.innerHeight;
	}
};
</script>

<style lang="scss">
@import './assets/css/base';
#app {
	& > div {
		height: 100%;
	}
}
</style>
