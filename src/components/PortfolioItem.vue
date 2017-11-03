<template>
 <section class="hero section is-light" :style="{ backgroundColor: project_data.colors.background }">
   <div class="container">
     <div class="project-header level">
       <div class="level-left">
         <h2 class="title center-flex-v">PORTFOLIO</h2>
       </div>
     </div>
     <div class="columns is-5 is-variable content">
       <div class="column is-two-thirds">
		    <div class="videoWrapper">      
         <iframe class="" width="" height="" :src="project_data.video" frameborder="0" allowfullscreen></iframe>
        </div>
		  <!--<swiper :options="swiperOption">
		    <swiper-slide v-for="slide in swiperSlides" v-if="project_data.video">
		      <div class="videoWrapper">
		    	<iframe class="" width="" height="" :src="project_data.video" frameborder="0" allowfullscreen></iframe>
		      </div>	
		    </swiper-slide>
		    <swiper-slide v-else>
		    	{{ project_data.cover }}
		    </swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
		  </swiper>-->
       </div>
       <div class="column">
         <div class="card">
         <header class="card-header">
            <p class="card-header-title center-flex-v">{{ project_data.title }}</p>
         </header>
          <div class="card-content project-header">
       	    <p class="title center-flex-v">PROJECT DETAILS</p>
             	<ul class="details-margin">
             		<li>
             		Role: {{ project_data.details.role }}	
             		</li>
             		<li>
             		Tools: {{ project_data.details.tools }}	
             		</li>
             		<li>
             		Team Size: {{ project_data.details.team }}	
             		</li>
             		<li>
             		Platform: {{ project_data.details.platform }}	
             		</li>
             	</ul>
             	<a class="button is-info" target="_blank" v-if="project_data.url">
             	  <span>{{ project_data.buttontext }}</span>
             	  <span class="icon is-small">
             	  	<i :class="project_data.buttonicon"></i>
             	  </span>
             	</a>
             </div>
             <footer class="card-footer">
               <a href="" class="card-footer-item">
                <span class="icon">
                  <i class="fa fa-steam"></i>
                </span>
                </a>
               <a href="" class="card-footer-item"></a>
               <a href="" class="card-footer-item"></a>
               <a href="" class="card-footer-item"></a>
             </footer>
           </div>   
          </div>
     </div>    
   </div>
</section>	
</template>

<script>
	export default {
		props: ['project_id', 'project_data'],
		
	    data() {
	      return {
	        swiperOption: {
	          autoplay: false,
	          setWrapperSize :true,
	          pagination : '.swiper-pagination',
	          paginationClickable :true,
	          mousewheelControl : true,
	          observeParents:true,
	        },
	        swiperSlides: [1]
	      }
	    }
	}
</script>

<style>

</style>