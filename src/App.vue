<template>
  <div id="app" :style="{ height: `${innerHei}px` }">
		<kun-slidebar :list="sliderBar" :showPage="showPage" @jumpPage="jumpPage"></kun-slidebar>
		<div class="content" :style="{ height: `${innerHei}px`, top: `${nowTop}px` }">
			<my-index :info="slider.index"></my-index>
			<my-intro :info="slider.intro"></my-intro>
			<my-skills :info="slider.skills"></my-skills>
			<my-project :info="slider.project"></my-project>
		</div>
  </div>
</template>

<script>
import myIndex from '@/pages/myIndex';
import myIntro from '@/pages/myIntro';
import mySkills from '@/pages/mySkills';
import myProject from '@/pages/myProject';
import kunSlidebar from '@/components/kunSlidebar';
export default {
	data() {
		return {
			innerHei: 0,
			showPage: 0,
			isSliding: false,
			slider: {
				index: {
					name: '林柏坤',
					intro: '大三学生, 前端进阶中...',
					links: [
						{
							label: 'Blog',
							icon: '#icon-blogease',
							href: 'https://kunine.github.io/blog'
						},
						{
							label: 'GitHub',
							icon: '#icon-github',
							href: 'https://www.github.com/Kunine	'
						},
						{
							label: 'Coding',
							icon: '#icon-icon',
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
				skills: [
					{
						path: '/static/img/html.png',
						label: 'HTML'
					},
					{
						path: '/static/img/css.png',
						label: 'CSS'
					},
					{
						path: '/static/img/javascript.png',
						label: 'JavaScript'
					},
					{
						path: '/static/img/nodejs.png',
						label: 'Node.Js'
					},
					{
						path: '/static/img/php.png',
						label: 'PHP'
					},
					{
						path: '/static/img/maya.png',
						label: 'MAYA'
					},
					{
						path: '/static/img/photoshop.png',
						label: 'PhotoShop'
					},
					{
						path: '/static/img/ai.png',
						label: 'illustrator'
					}
				],
				project: {
					github: 'https://github.com/Kunine/',
					project: [
						{
							label: 'mallBackend',
							url: '/static/img/avatar.jpg',
							intro: '使用Vue & elmentUI 开发的一个商城类后台管理模板，包含用户商品管理，发布商品以及商城概况。'
						},
						{
							label: 'resume',
							url: '/static/img/avatar.jpg',
							intro: '模仿<a href="https://ijason.cc/">Jason</a>的开源简历，手动使用Vue制作的一个翻页简历。'
						},
						{
							label: 'blog',
							url: '/static/img/avatar.jpg',
							intro: '使用Hexo框架开发的一个个人博客，主要用来记录个人学习记录以及整理技能点。'
						}
					]
				},
				blog: {
				}
			},
			sliderBar: [
				{
					label: '个人简介',
					icon: '#icon-index'
				},
				{
					label: '个人介绍',
					icon: '#icon-user'
				},
				{
					label: '专业技能',
					icon: '#icon-jineng-copy'
				},
				{
					label: '项目经历',
					icon: '#icon-jingli'
				}
			],
			nowTop: 0
		};
	},
	components: {
		myIndex,
		myIntro,
		mySkills,
		myProject,
		kunSlidebar
	},
	watch: {
		showPage() {
			this.delay();
			this.nowTop = parseInt(this.showPage) * parseInt(this.innerHei) * -1;
		}
	},
	methods: {
		jumpPage(page) {
			if (this.isSliding) return;
			this.showPage = page;
		},
		delay() {
			this.isSliding = true;
			setTimeout(() => {
				this.isSliding = false;
			}, 1000);
		}
	},
	mounted() {
		this.innerHei = window.innerHeight;

		window.onmousewheel = e => {
			if (this.isSliding) return;
			this.delay();
			e.stopPropagation();
			e.preventDefault();

			//* 向下滚动
			if (e.wheelDelta < 40) {
				this.isSliding = true;
				if (this.showPage < Object.keys(this.slider).length - 2) this.showPage++;
			}
			if (e.wheelDelta > 40) {
				this.isSliding = true;
				if (this.showPage > 0) this.showPage--;
			}
		};
	}
};
</script>

<style lang="scss">
@import './assets/css/base';
#app {
	overflow: hidden;
	position: relative;
	h1 {
		padding: 60px 0;
		font-size: 42px;
		color: #eee;
		text-align: center;
		text-shadow: 2px 2px 10px rgba(0, 0, 0, .1);
	}
	.content {
		position: absolute;
		top: 0;
		transition: .8s ease-out;
		width: 100%;
		left: 0;
		& > div {
			overflow: hidden;
			height: 100%;
		}
	}
}
</style>
