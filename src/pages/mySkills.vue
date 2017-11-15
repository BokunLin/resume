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
		width: 920px;
		margin: 0 auto;
		text-align: center;
		li {
			position: relative;
			box-sizing: border-box;
			float: left;
			box-shadow: 5px 5px 10px rgba(0, 0, 0, .1);
			margin: 40px 30px;
			width: 170px;
			height: 170px;
			background: linear-gradient(180deg, #fff, #f0f0f0);
			border-radius: 50%;
			display: flex;
			justify-content: center;
    	align-items: center;
			img {
				width: 100%;
			}
			span {
				position: absolute;
				display: block;
				opacity: 0;
				background-color: #fff;
				width: 50%;
				padding: 10px 20px;
				border-radius: 5px;
				font-size: 12px;
				font-weight: bold;
				box-shadow: 5px 5px 10px rgba(0, 0, 0, .1);
				top: -20px;
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
