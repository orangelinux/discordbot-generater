<template>
  <div style=" display: inline-block;width: 100%;">
    <at-alert message="過去に作成したbotデーターがある場合、こちらをクリックして編集を継続できます。" closable show-icon></at-alert>
    <div class="menu">
    <at-menu active-name="1-1" inline-collapsed>
      <div @click="countnum(0)">
    <at-menu-item name="1-1"><i class="icon icon-home"></i>ホーム</at-menu-item>
      </div>
      <div @click="countnum(1)">
    <at-menu-item name="1-2"><i class="icon icon-message-circle"></i>返答を編集</at-menu-item>
      </div>
  <at-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单三</template>
    <at-menu-item name="3-1">子菜单一</at-menu-item>
    <at-menu-item name="3-2">子菜单二</at-menu-item>
    <at-menu-item name="3-3">子菜单三</at-menu-item>
    <at-menu-item name="3-4">子菜单四</at-menu-item>
  </at-submenu>
  <at-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单四</template>
    <at-menu-item name="4-1">子菜单一</at-menu-item>
    <at-menu-item name="4-2">子菜单二</at-menu-item>
  </at-submenu>
  <at-menu-item name="5-1"><i class="icon icon-file-text"></i>データをインポートする</at-menu-item>
  <at-menu-item disabled name="6-1"></at-menu-item>
  <at-menu-item name="7-1" class="download"><i class="icon icon-download"></i>ダウンロード</at-menu-item>
</at-menu>
    </div>
<div class="content">
<keep-alive>
  <component @addresp="adrp" v-bind:is="cmp"></component>
</keep-alive>
</div>
  </div>
</template>

<script>
import Addresponse from '../components/addresponse';
import Generatertop from '../components/generatertop';
export default {
  name: 'Generater',
  components:{
    'addresp':Addresponse,
    'generatertop':Generatertop
  },
  props: {
    AT: String
  },
  data:function() {
        return {
    cmplist:["generatertop","addresp"],
    count: 0,
    outjson:false
  }},
  methods:{
    countnum(c){
    console.log("count");
    this.count = c;
    },
    adrp(rh,sh,ifbot){
      if(this.outjson){
          const addlist = this.outjson["resp"].push({"t":rh,"s":sh,"ifbot":ifbot});
          console.log(addlist);
      }else{
          this.createdict()
          this.outjson["resp"]=[{"t":rh,"s":sh,"ifbot":ifbot}]
      }
      console.log(this.outjson);
    },
    createdict(){
       this.outjson={"AT":this.AT}
    }
  },
    computed:{
        cmp(){
            return this.cmplist[this.count]
        }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
   position: relative;
  width: 240px;
  float: left;
}
.content{
  position: relative;
  width:calc(100% - 240px);
  float: right;
}
.download{
background: #6190E8;
border-radius: 0px 10px 10px 0px;
color: #fff;
}
.download:hover{
  color: #fff;
}
.download:active{
  /*transform:scale(0.8);*/
}
.download > .at-menu--inline .at-menu__item.at-menu__item--active .at-menu__item-link{
  color: #fff;
}
.download > .at-menu--inline .at-menu__item.at-menu__item--active .at-menu__item-link{
  color: #fff;
}
</style>
