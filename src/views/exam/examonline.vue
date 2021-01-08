<template>
  <div>
  <div style="text-align:center"><h2>{{paperinfo.name}}</h2></div>
  <div>
  <a-steps :current="active" finish-status="success">
    <a-step  title="单选题"></a-step>
    <a-step title="多选题"></a-step>
    <a-step title="简答题"></a-step>
  </a-steps>

  <a-card >

    <a-timeline   v-for="(item,index) in examitim" :key="item.index" >
      <a-timeline-item   v-if=one>
        <a-card>
          <h3>第{{index+1}}题</h3>
          <h4>{{item.title}}</h4>
          <p>  <a-radio-group v-model="item.answer">
            <a-radio value="A">A.{{item.optionA}}</a-radio>
            <a-radio value="B">B.{{item.optionB}}</a-radio>
            <a-radio value="C">C.{{item.optionC}}</a-radio>
            <a-radio value="D">D.{{item.optionD}}</a-radio>
          </a-radio-group></p>
        </a-card>
      </a-timeline-item>
    </a-timeline>

    <a-timeline   v-for="(item,index) in examitimtwo" :key="item.index" >
      <a-timeline-item v-if=two>
        <a-card>
          <h3>第{{index+1}}题</h3>
          <h4>{{item.title}}</h4>
          <p>  <a-checkbox-group v-model="item.answerduo">
            <a-checkbox value="A">A.{{item.optionA}}</a-checkbox>
            <a-checkbox value="B">B.{{item.optionB}}</a-checkbox>
            <a-checkbox value="C">C.{{item.optionC}}</a-checkbox>
            <a-checkbox value="D">D.{{item.optionD}}</a-checkbox>
          </a-checkbox-group></p>
        </a-card>
      </a-timeline-item>

    </a-timeline>
    <a-timeline  v-for="(item,index) in examitimthree" :key="item.index">
      <a-timeline-item v-if=three>
        <a-card>
          <h3>第{{index+1}}题</h3>
          <h4>{{item.title}}</h4>
          <p> <a-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="item.answer">
          </a-input>
          </p>
        </a-card>
      </a-timeline-item>
    </a-timeline>
    <a-button type="primary" style="margin-top: 12px;float:right" @click="next">{{optionname}}</a-button>


  </a-card>
  </div>
  </div>
</template>

<script>
  import API from '../../api/api_exam'

  // 导出默认输出
  export default {

    data(){
      return {
        examitim:[],
        examitimtwo:[],
        examitimthree:[],
        optionname:"下一步",
        paperinfo:{},
        active: 0,
        one:true,
        two:false,
        three:false,
      }
    },  methods: {

        next() {
          this.active++
          if (this.active==1) {

            this.one =false
            this.two =true
            this.three =false

          }
          if (this.active==2) {
            this.one =false
            this.two =false
            this.three =true
            this.optionname="交卷"

          }
          if (this.active==3) {

            let sum = "";
            this.examitim.forEach((item) => {
              //遍历prodAllPrice这个字段，并累加
              sum += item.answer+",";
            });
            let sum2 = "";
            this.examitimtwo.forEach((item) => {
              //遍历prodAllPrice这个字段，并累加
              sum2 += item.answerduo+";";
            });
            let sum3 = "";
            this.examitimthree.forEach((item) => {
              //遍历prodAllPrice这个字段，并累加
              sum3 += item.answer+"@";
            });
            API.getexamonline({choose_answer: sum,multiple_choice_answer:sum2,short_answer:sum3,paperinfo:this.paperinfo}).then(res => {
              if (res.code == 0) {
                  this.$message.success("交卷成功返回主页")
                  this.$router.push({path:'/index/main',query:{pk_refinfo:'test',value:'test1'}});

              }else{
                alert("请答题再交卷")
              }

            })

          }
        }

    },
    created(){
     /* let queryid = this.$route.query.pk_refinfo*/
        API.getpaper({id: this.$route.query.id}).then(res => {
            if (res.code == 0) {
                this.examitim=res.examitim
                this.examitimtwo=res.examitimtwo
                this.examitimthree=res.examitimthree
                this.paperinfo=res.paperinfo
            }
        })
    }

   }
</script>

<style>

</style>
