<template>
	<div id="project">
		<h1>项目经历</h1>
		<div class="cardContainer" @touchmove="touchmove" @touchend="touchend" :style="{ transform: `translateX(-${translateX}px)` }">
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
	data() {
		return {
			page: 0,
			touchstartX: 0,
			translateX: 0
		};
	},
	props: {
		info: Object
	},
	methods: {
		jumpPage(e) {
			this.translateX = this.page * 250;
		},
		touchmove(e) {
			e.preventDefault();
			if (this.touchstartX !== 0) return;
			this.touchstartX = e.changedTouches[0].screenX;
		},
		touchend(e) {
			e.preventDefault();
			if (this.touchStartX === 0) return;

			const touchEndX = e.changedTouches[0].screenX;
			if (this.touchstartX - touchEndX > 30) {
				if (this.page < 2) this.jumpPage(this.page++);
			} else if (this.touchstartX - touchEndX < -30) {
				if (this.page > 0) this.jumpPage(this.page--);
			}

			this.touchstartX = 0;
		}
	}
};
</script>


<style lang="scss" scoped>
#project {
  position: relative;
  background: #859398;
  background: linear-gradient(270deg, #283048, #859398);
  .cardContainer {
    display: flex;
    align-items: center;
    transition: transform .2s ease;
    justify-content: space-between;
    .card {
      position: relative;
      box-sizing: border-box;
      padding: 10px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      border-radius: 5px;
      width: 250px;
      padding-bottom: 50px;
      height: 350px;
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
    @media screen and (max-width: 800px){
      margin: 0 0 0 20px;
      width: 780px;
      transform: translateX(0);
    }
	}
	h2 {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
		width: 60%;
		border-radius: 10px;
		color: #ddd;
		border: 1px solid #ddd;
		padding: 10px 0;
		text-align: center;
    font-size: 2vw;
    cursor: pointer;
		&:hover {
			color: #fff;
			background-color: rgba(0, 0, 0, 0.1);
			border-color: #aaa;
		}
	}
}
</style>
