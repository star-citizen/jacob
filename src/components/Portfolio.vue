<template>
  <main>
    <portfolio-item v-for="(value, index) in projects" :project_id="index" :project_data="value" :key="projects.index"></portfolio-item>
  </main>
</template>

<script>
	import portfolioItem from './PortfolioItem'
  import projects from '../data/projects.json'
	export default {
    components: {
      'portfolio-item': portfolioItem
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