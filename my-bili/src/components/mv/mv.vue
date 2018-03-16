<template>
  <div class="mv">
    <video :src='mvArray[2]' autoplay="autoplay" controls></video>
  </div>
</template>

<script>
import store from '@/store/store'
import Vue from 'vue' ;
export default {
  name: 'mv',
  data () {
    return {
    	mvData: {},
      mvArray: []
    }
  },
  created: function(){ 
  	this.autoPlay();
  	console.log(this.$store.state.mvId)
  },
  methods:{
  	autoPlay: function(){
			this.$http.get('https://api.imjad.cn/cloudmusic/?type=mv&id='+ this.$store.state.mvId).then(function(res){  
        this.mvData = res.body.data;
        for(var i in this.mvData.brs){
	    		this.mvArray.push(this.mvData.brs[i])
	    	}
	    },function(res){  
	    	alert('报警')
	    })
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
