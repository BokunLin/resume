<template>
	<div id="index">
		<div class="content">
			<img class="avatar" src="../assets/img/avatar.jpg" alt="">
			<h1>{{info.name}}</h1>
			<p>{{info.intro}}</p>
			<div class="links">
				<ul class="clearfix">
					<li v-for="(item, index) in info.links" :key="index">
						<a id='icon' :href="item.href" :title="item.label">
							<svg class="icon" aria-hidden="true">
								<use :href="item.icon"></use>
							</svg>
						</a>
					</li>
				</ul>
			</div>
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

<style lang="scss">
#index {
  position: relative;
  .content {
    position: absolute;
    width: 100%;
    top: 40%;
    transform: translateY(-50%);
    text-align: center;
    color: #444;
    .avatar {
      display: block;
      margin: 0 auto;
      width: 140px;
      border-radius: 50%;
      padding: 5px;
      box-shadow: 2px 2px 10px #ccc;
		}
		h1 {
			line-height: 80px;
		}
		.links {
			margin-top: 30px;
			width: 100%;
			ul {
				li {
					display: inline-block;
					width: 50px;
					height: 50px;
					margin: 0 10px;
					.icon {
						transition: all .2s;
						display: block;
						margin: 5px auto;
						font-size: 30px;
						&:hover {
							margin-top: 0;
							margin-bottom: 0;
							font-size: 40px;
						}
					}
				}
			}
		}
  }
}
</style>


