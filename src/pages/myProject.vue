<template>
	<div id="project">
		<h1>项目经历</h1>
		<div class="cardContainer">
			<div  class="card" v-for="item in info.project" :key="item.label">
				<img :src="item.url" :alt="item.label">
				<p v-html="item.intro"></p>
				<a :href="`${info.github}${item.label}`" class="button">
					<svg class="icon" aria-hidden="true">
						<use href="#icon-Link"></use>
					</svg>
				</a>
			</div>
		</div>
		<h2>
			<svg class="icon" aria-hidden="true">
				<use href="#icon-github"></use>
			</svg>
			在GitHub上查看更多项目
		</h2>
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
#project {
  background: #859398;
  background: linear-gradient(270deg, #283048, #859398);
  .cardContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    .card {
      position: relative;
      box-sizing: border-box;
      padding: 10px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      border-radius: 5px;
      margin: 0 10px;
      width: 280px;
      padding-bottom: 50px;
      height: 400px;
      text-align: center;
      img {
        border-radius: 5px;
        width: 100%;
        height: 150px;
      }
      p {
        text-align: left;
        text-indent: 2em;
        color: #444;
        line-height: 2;
        font-size: 16px;
      }
      .button {
        position: absolute;
        left: 10px;
        right: 10px;
        bottom: 10px;
        display: block;
        border-radius: 5px;
        border: 1px solid #333;
        padding: 5px 0;
        transition: all 0.2s;
        .icon {
          font-size: 18px;
        }
        &:hover {
          background-color: #333;
          border-color: #eee;
          .icon {
            color: #fff;
          }
        }
      }
    }
	}
	h2 {
		width: 40%;
		border-radius: 10px;
		color: #ddd;
		border: 1px solid #ddd;
		margin: 0 auto;
		margin-top: 100px;
		transition: all .2s;
		padding: 10px 0;
		text-align: center;
    cursor: pointer;
		&:hover {
			color: #fff;
			background-color: rgba(0, 0, 0, 0.1);
			border-color: #aaa;
		}
	}
}
</style>
