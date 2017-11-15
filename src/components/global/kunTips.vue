<template>
	<div id="toolTips">
		<slot></slot>
		<transition :name="placement">
			<div class="toolTip" :style="translateDirection" v-show="isShow">
				<span>{{content}}</span>
				<div :class="placement"></div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isShow: false
		};
	},
	mounted() {
		this.$slots.default[0].elm.onmouseenter = () => {
			this.isShow = true;
		};
		this.$slots.default[0].elm.onmouseleave = () => {
			this.isShow = false;
		};
	},
	computed: {
		translateDirection() {
			const styleVal = {};
			styleVal[this.placement] = 0;
			switch (this.placement) {
			case 'left':
				styleVal.transform = 'translate(-100%, -50%)';
				styleVal.right = '';
				break;
			case 'right':
				styleVal.transform = 'translate(100%, -50%)';
				styleVal.left = '';
				break;
			case 'top':
				styleVal.transform = 'translate(-50%, -100%)';
				styleVal.bottom = '';
				break;
			case 'bottom':
				styleVal.transform = 'translate(-50%, 100%)';
				styleVal.top = '';
				break;
			}
			return styleVal;
		}
	},
	props: {
		placement: String,
		content: String
	}
};
</script>


<style lang="scss" scoped>
#toolTips {
  .toolTip {
    position: absolute;
    display: inline-block;
    font-size: 12px;
		width: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 20px;
    line-height: 20px;
    background-color: #333;
    color: #fff;
    padding: 3px 8px;
    border-radius: 5px;
		span {
			white-space: nowrap;
		}
    div {
      position: absolute;
      border: 7px solid;
      display: inline-block;
      border-color: transparent;
    }
    .bottom {
      top: -13px;
      left: 50%;
      transform: translateX(-50%);
      border-bottom-color: #333;
    }
    .top {
      bottom: -13px;
      left: 50%;
      transform: translateX(-50%);
      border-top-color: #333;
    }
    .left {
      right: -13px;
      top: 50%;
      transform: translateY(-50%);
      border-left-color: #333;
    }
    .right {
      left: -13px;
      top: 50%;
      transform: translateY(-50%);
      border-right-color: #333;
    }
  }
	.left-enter-active {
		transition: opacity .3s;
	}
	.left-leave-active {
		transition: opacity .3s;
	}
	.left-enter, .left-leave-to {
		opacity: 0;
	}
}
</style>
