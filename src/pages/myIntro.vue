<template>
	<div id="intro">
		<h1>{{info.title}}</h1>
		<div class="area">
			<p>{{info.intro}}</p>
		</div>
		<div class="area">
			<ul class="clearfix">
				<li v-for="(item, index) in info.icons" :key="index">
					<svg class="icon" aria-hidden="true">
						<use :href="item.icon"></use>
					</svg>
					<p>{{item.label}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		info: Object
	}
};
</script>

<style lang="scss" scoped>
#intro {
	background-color: #516395;
	.area {
		width: 70%;
		color: #444;
		background-color: #fff;
		border-radius: 5px;
		margin: 0 auto;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, .1);
		padding: 1.5rem 1rem;
		box-sizing: border-box;
		margin-bottom: 40px;
		font-size: 14px;
		&>p {
			line-height: 2;
			transition: all .5s;
		}
		ul {
			text-align: center;
			display: flex;
			flex-wrap: wrap;
				transition: all .5s;
			justify-content: center;
			li {
				margin: 20px 40px;
				min-width: 165px;
				transition: all .5s;
				.icon {
					font-size: 30px;
					margin-bottom: 10px;
				}
			}
			@media screen and (max-width: 767px){
				li {
					margin: 10px 20px;
				}
			}
		}
		@media screen and (max-width: 650px){
			font-size: 12px;
			padding: 10px;
			ul {
				padding-left: 10px;
				li {
					margin: 5px 0px;
					font-size: 12px;
					width: 100%;
					text-align: left;
					.icon {
						margin: 0 10px 0 0;
						display: inline-block;
						font-size: 24px;
					}
					p {
						display: inline-block;
						line-height: 30px;
					}
				}
			}
		}
	}
}
</style>

