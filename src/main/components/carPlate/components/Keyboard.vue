<template>
  <div class="les-common-keyboard">
    <ul class="line-list" v-for="(row,rowNo) in keys" :key="rowNo">
      <li v-for="(column,columnNo) in row" :key="columnNo" @click="emitInput(column)"
          :class="(['军','总', '空', '海', '炮', '武'].includes(column)?'special-plate':'') +' '+
                  (['I','O'].includes(column)?'not-allowed':'')">
        {{column}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'les-common-keyboard',
    props: {
      keys: Array,
      keysNext: Array,
    },
    data() {
      return {};
    },
    methods: {
      emitInput(column){
        if (['I','O'].includes(column)){
          return;
        }
        switch (column){
          case '军':
            column = 'V'
            break;
          case '总':
            column = 'Z'
            break;
          case '空':
            column = 'K'
            break;
          case '海':
            column = 'H'
            break;
          case '炮':
            column = 'E'
            break;
          case '武':
            column = 'WJ'
            break;
        }
        this.$emit('input',column)
      },

      //键盘事件
      keyup(){
        document.onkeyup = (event)=>{
          let e = event || window.event
          let keyCode = e.keyCode || e.which
          let key = e.key
          let keysNext = this.keys
          keysNext.forEach(item=>{
            item.forEach(sub=>{
              if (sub.indexOf(key.toUpperCase()) !== -1){
                this.$emit('input',key.toUpperCase())
              }
            })
          })
          if (e && e.preventDefault){
            e.preventDefault()
          } else {
            window.event.returnValue = false
          }
          switch (keyCode){
            case 8://del
              this.$emit('onkeydown',keyCode);
              return;
            case 9://tab
              break;
            case 13://enter
              this.$emit('onkeydown',keyCode);
              break;
            case 27://esc
              break;
            default:
              break;
          }
        }
      },
      //按键恢复
      keyupReview(){
        document.onkeyup = (event)=>{
          let e = event || window.event
          e.returnValue = false
        }
      }
    },
    beforeDestroy() {
      this.keyupReview()
    },
    created() {
      this.keyup()
    }
  }
</script>


<style scoped lang="less">
.les-common-keyboard{
  height: 178px;
  width: 100%;
  background: #f2f2f2;
  padding-bottom: 10px;
  .line-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0 10px;
    .special-plate{
      color: #ff5623;
    }
  }

  .line-list > li {
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background: white;
    color: #333;
    font-weight: 600;
    margin: 10px 10px 0 0;
    border-radius: 4px;
    cursor: pointer;
    //border: 1px solid #1890ff;
    box-shadow: 0 0 4px #999;
  }
  .line-list > li:hover:not(.not-allowed){
    background: #1890ff;
    color: #fff;
  }
  .line-list > .not-allowed{
    background: #cecece;
    cursor: not-allowed;
    //color: #fff;
  }

  .line-list > li:last-child {
    margin-right: 0;
  }
}

</style>
