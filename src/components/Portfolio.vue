<template>
  <main>
    <portfolio-item v-for="(value, index) in projects" :project_id="index" :project_data="value" :key="projects.index"></portfolio-item>
  </main>
</template>

<script>
	import portfolioItem from './PortfolioItem'
  import projects from '../data/projects.json'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
    components: {
      'portfolio-item': portfolioItem,
       swiper,
       swiperSlide
    },
		data () {
			return {
        projects,
			}
		}
	}
</script>

<style>
	
</style>