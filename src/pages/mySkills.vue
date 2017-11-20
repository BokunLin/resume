<template>
	<div id="skills">
		<h1>技能</h1>
		<ul class="clearfix">
			<li v-for="item in info" :key="item.label">
				<img :src="item.path" :alt="item.label">
				<span>{{item.label}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		info: Array
	}
};
</script>


<style lang="scss" scoped>
#skills {
	background: #ffc371;
	background: linear-gradient(270deg,#ff5f6d,#ffc371);
	ul {
		max-width: 920px;
		width: 80%;
		margin: 0 auto;
		text-align: center;
		li {
			position: relative;
			display: inline-block;
			max-width: 170px;
			width: 20%;
			box-sizing: border-box;
			box-shadow: 5px 5px 10px rgba(0, 0, 0, .1);
			margin: 40px 20px;
			background: linear-gradient(180deg, #fff, #f0f0f0);
			border-radius: 50%;
			img {
				width: 100%;
			}
			span {
				position: absolute;
				display: block;
				min-width: 100px;
				opacity: 0;
				background-color: #fff;
				padding: 10px 10%;
				border-radius: 5px;
				font-size: 1vw;
				font-weight: bold;
				box-shadow: 5px 5px 10px rgba(0, 0, 0, .1);
				top: -20px;
				left: 50%;
				transform: translateX(-50%);
				transition: all .5s;
			}
			&:hover {
				span {
					opacity: 1;
					top: -50px;
				}
			}
			&:nth-child(3) {
				background: linear-gradient(rgb(255, 235, 14), rgb(239, 221, 27));
			}
			&:nth-child(4) {
				background: linear-gradient(rgb(140, 207, 0), rgb(128, 189, 1)); border-color: rgb(140, 207, 0);
			}
			&:nth-child(5) {
				background: linear-gradient(rgb(128, 147, 209), rgb(123, 142, 201)); border-color: rgb(128, 147, 209);
			}
			&:nth-child(7) {
				background: rgb(0, 29, 38); border: 5px solid rgb(0, 200, 255); 
			}
			&:nth-child(8) {
				background: #261300; border: 5px solid #ff7c00; 
			}
		}
	}
}
</style>
