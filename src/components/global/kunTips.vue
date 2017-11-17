<template>
	<div class="kun-tips">
		<slot></slot>
		<transition name="fade">
			<div v-if="tipsShow" class="toolTip" :style="translateDirection" v-show="isShow">
				<span>{{content}}</span>
				<div :class="placement"></div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'kunTips',
	data() {
		return {
			isShow: false,
			tipsShow: true
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
	methods: {
		delay(fn, delay, execAsap) {
			//* fn 调用方法, delay 延迟, execAsap 是否开始时调用
			let timeout;
			return (...args) => {
				const _this = this;
				//* 开始时触发
				function delayed() {
					if (!execAsap) fn.apply(_this, args);
					timeout = null;
				}
				if (timeout) { clearTimeout(timeout); } else if (execAsap) { fn.apply(_this, args); }
				timeout = setTimeout(delayed, delay || 100);
			};
		},
		checkWidth(e = undefined) {
			const innerWid = e && e.target.innerWidth || window.innerWidth;
			if (innerWid >= this.showWidth) {
				this.tipsShow = false;
			} else {
				this.tipsShow = true;
			}
		}
	},
	created() {
		this.checkWidth();
		if (this.showWidth) {
			window.onresize = this.delay(this.checkWidth, 500, false);
		}
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
		placement: {
			type: String,
			required: true
		},
		content: {
			type: String,
			required: true
		},
		showWidth: Number
	}
};
</script>


<style lang="scss" scoped>
.kun-tips {
	position: relative;
  .toolTip {
    position: absolute;
		z-index: 10;
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
	.fade-enter-active {
		transition: opacity .3s;
	}
	.fade-leave-active {
		transition: opacity .3s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
}
</style>
