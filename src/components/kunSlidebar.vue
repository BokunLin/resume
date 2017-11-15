<template>
	<div id="slideBar">
		<ul>
			<li :class="showPage === index ? 'active' : ''" v-for="(item, index) in list" :key="index" @click="jumpPage(index)">
				<kun-tips placement="left" :content="item.label">
					<div class="buttons">
						<svg class="icon" aria-hidden="true">
							<use :href="item.icon"></use>
						</svg>
					</div>
				</kun-tips>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	methods: {
		jumpPage(page) {
			this.$emit('jumpPage', page);
		}
	},
	props: {
		list: Array,
		showPage: Number
	}
};
</script>

<style lang="scss" scoped>
#slideBar {
  z-index: 10;
  position: fixed;
  right: 30px;
  top: 40%;
  ul {
    width: 64px;
    li {
      position: relative;
      width: 60px;
      height: 60px;
      margin: 0;
      display: flex;
      flex-wrap: wrap-reverse;
      align-items: center;
      justify-content: center;
      .buttons {
        transition: all 0.2s;
        display: flex;
        flex-wrap: wrap-reverse;
        align-items: center;
        justify-content: center;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, .2);
        text-align: center;
        .icon {
          font-size: 24px;
          color: #eee;
          display: none;
        }
        &:hover {
          width: 40px;
          height: 40px;
        	background-color: #444;
          .icon {
            display: inline;
          }
        }
      }
    }
    .active {
      .buttons {
        background-color: #444;
        width: 40px;
        height: 40px;
        .icon {
          display: inline;
        }
      }
    }
  }
}
</style>
