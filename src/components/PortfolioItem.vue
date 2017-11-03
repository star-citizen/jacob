<template>
 <section class="hero section is-light" :style="{ backgroundColor: project_data.colors.background }">
   <div class="container">
     <div class="project-header level">
       <div class="level-left">
         <h2 class="title center-flex-v">{{ project_data.title }}</h2>
       </div>
     </div>
     <div class="columns">
       <div class="column">
		<div class="videoWrapper">      
         <iframe class="" width="" height="" :src="project_data.video" frameborder="0" allowfullscreen></iframe>
        </div> 
       </div>
       <div class="column">
       	<h1 class="center-flex-v">Project Details:</h1>
       </div>
     </div>    
   </div>
</section>	
</template>

<script>
	export default {
		props: ['project_id', 'project_data'],
		
		  data () {
			return {

			}
		}
	}
</script>