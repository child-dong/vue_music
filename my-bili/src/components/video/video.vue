<template>
  <div class="video">
    <input type="text" v-model='msg' v-on:keyup.enter="search()">
    <button @click="search()">搜索</button>
    <table class="video-list">
    	<thead>
	    	<tr>
	    		<th>序号</th>
	    		<th>操作</th>
	    		<th>音乐标题</th>
	    		<th>歌手</th>
	    		<th>时长</th>
	    	</tr>
    	</thead>
    	<tbody>
    		<tr v-for="(item,index) in searchData" :class="{playBg: index==playIndex}">
    			<td>{{index+1}}</td>
    			<td class="iconfont icon-bofang" @click="playMusic(item.id,index)"></td>
    			<td>{{item.name}} <span class="mv-show" v-if="item.mv!=0" @click="$store.commit('playMv',item.mv)">
    			<router-link to="/mv">mv</router-link></span></td>
    			<td>{{item.ar[0].name}}</td>
    			<td></td>
    		</tr>
    	</tbody>	
    </table>
    <div class="audio">   
    	<span @click="playFront()">上一首</span>	
    	<audio v-show="songData" :src="songData.url" autoplay="playStatus" controls></audio>
    	<span @click="playNext()">下一首</span>
    </div>
  </div>
</template>

<script>
import store from '@/store/store'
import Vue from 'vue' ;
export default {
  name: 'ivideo',
  data () {
    return {
      msg: '三角题',
      searchData: [],
      songData: {},
      playIndex: null,
    }
  },
  created: function(){ 
  	this.search()
  },
  methods:{
		search: function(){
			this.$http.get('https://api.imjad.cn/cloudmusic/?type=search&s='+ this.msg).then(function(res){  
        this.searchData = res.body.result.songs
	    },function(res){  
	    	alert('报警')
	    });  
		},
		playMusic: function(id,index){
			this.$http.get('https://api.imjad.cn/cloudmusic/?type=song&id='+ id).then(function(res){  
        this.songData = res.body.data[0];
        this.playIndex = index
	    },function(res){  
	    	alert('报警')
	    });
		},
		playNext: function(){
			if(this.playIndex==null){
				return false
			}
			this.$http.get('https://api.imjad.cn/cloudmusic/?type=song&id='+ this.searchData[this.playIndex+1].id).then(function(res){  
        this.songData = res.body.data[0];
        this.playIndex += 1;
	    },function(res){  
	    	alert('报警')
	    });
		},
		playFront: function(){
			if(this.playIndex==null){
				return false
			}
			this.$http.get('https://api.imjad.cn/cloudmusic/?type=song&id='+ this.searchData[this.playIndex-1].id).then(function(res){  
        this.songData = res.body.data[0];
        this.playIndex -= 1;
	    },function(res){  
	    	alert('报警')
	    });
		},
		
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
	@import '../../assets/css/common.less';
	.video{
		padding: 40px;
		box-sizing: border-box;
	}
	.video-list{
		min-width: 1000px;
		margin: 20px;
		line-height: 40px;
		overflow: hidden;
		text-align: left;
		border-collapse: collapse;
		thead{
			color: #615050;
			tr{
				background: #fff;
				th{
					padding: 0 20px;
				}
			}
		}
		tbody{
			color: #615050;
			tr{
				&:nth-child(even){
					background: #bbb;
				}
				&:nth-child(odd){
					background: #ccc;
				}
				td{
					padding: 0 20px;
					.mv-show{
						display: inline-block;
						margin-left: 10px;
						padding-right: 1px;
						line-height: 14px;
						border: 1px solid #fcfcfc;
						cursor: pointer;
					}
					a{
						font-size: 12px;
						color: red;
					}
				}
			}
		}
	}
	.icon-bofang{
		cursor: pointer;
	}
	.audio{
		position: fixed;
		bottom: 0;
		right: 20px;
		padding-left: 60px;
		width: 40%;
		audio{
			width: 80%;
		}
		span{
			cursor: pointer;
		}
	}
</style>
