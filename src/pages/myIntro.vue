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
		padding: 25px;
		box-sizing: border-box;
		margin-bottom: 40px;
		font-size: 14px;
		ul {
			text-align: center;
			padding: 0 10%;
			li {
				width: 33%;
				float: left;
				padding: 0 20px;
				margin: 20px 0;
				box-sizing: border-box;
				.icon {
					font-size: 30px;
					margin-bottom: 10px;
				}
			}
		}
	}
}
</style>

