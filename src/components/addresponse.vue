<template>
<div class="c">
<h1><span class="icon icon-message-circle"></span> 返答を編集</h1>
    <hr color="#ced4db" noshade size="1">

<at-card :style="{ width: '98%' }">
  <h4 slot="title">返答を追加</h4>
  <div slot="extra" class="tf"><a @click="sendtxt" class="icon icon-plus ti"></a></div>
  <div>
    <at-input v-model="txttrg" placeholder="返答するトリガー"></at-input>
    <p>と送信された場合</p>
    <at-input v-model="txtresp" placeholder="返答する内容"></at-input>
    <p>と返答する</p>
    <at-checkbox                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             v-model="senderbot" label="送信元がbotの場合も返答する">送信元がbotの場合も返答する</at-checkbox>

    <p style="text-align: left;vertical-align: bottom;width: 70%;font-size: 12px;">右上の+ボタンをクリックで返答が追加されます。</p>
  </div>
</at-card>
<div class="spacer"></div>
<at-card :style="{ width: '98%' }">
  <h4 slot="title">返答を削除</h4>
  <div slot="extra"><a class="icon icon-trash-2"></a></div>
  <div>
    Card Content
  </div>
</at-card>

</div>
</template>
<script>
export default {
    name: 'Addresponse',
    data(){
        return{
            txttrg: "",
            txtresp: "",
            senderbot: false,
        }
    },
    props:{
outjson: JSON
    },
    methods:{
        sendtxt(){
if(this.txtresp && this.txtresp){
console.log(this.txttrg);
this.$emit('addresp',this.txttrg,this.txtresp,this.senderbot);
this.txttrg ="";
this.txtresp="";
console.log("---outjson---");
console.log(this.$parent.outjson);
this.$Notify.success({                                                                          
        title: '追加が完了しました。',
        })
} else {
    this.$Notify({
        title: '項目が入力されていません。',
        type: 'error'
        })
}
        }
    }
}
</script>
<style scoped>
.ti{
    
}
.c{
    margin-left: 10px;
}
.i{
    position: relative;
    display: inline-block;
}
.tf{
    position: relative;
    display: table-cell;
    vertical-align:middle;
}
.spacer{
    position: relative;
    height: 10px;
}
</style>