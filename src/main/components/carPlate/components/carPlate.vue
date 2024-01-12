<template>
  <div class="les-select-car-plate" id="les-select-car-plate">
<!--    <div class="cancel-btn" @click="cancel">-->
<!--      <a-icon type="close" style="font-size: 16px;"/>-->
<!--    </div>-->
    <ul class="plate-input-list">
      <template v-for="(item,key) in catPlateInput">
        <li :key="key" @click="setIndex(key)">
          <div class="number" :class="{'active':nowInputIndex===key}">{{catPlateInput[key]}}</div>
          <div v-if="key===1" class="list-dot"></div>
        </li>
      </template>
    </ul>
    <div class="type-select">
      <label><input type="radio" v-model="plateType" @change="plateTypeChange" value="normal"/> 燃油车</label>
      <label><input type="radio" v-model="plateType" @change="plateTypeChange" value="newEnergy"/> 新能源</label>
<!--      <label><input type="radio" v-model="plateType" @change="plateTypeChange" value="tricycle"/>三轮车</label>-->
    </div>
    <common-keyboard v-model="plateSelectInput" :keys="keys[plateType][nowInputIndex]"
                     :keysNext="keys[plateType][nowInputIndex+1]" @onkeydown="onkeydown"></common-keyboard>
    <div class="commit-button">
      <a-button class="cancel-btn" @click="cancel">关闭</a-button>
      <div class="merge-div">
        <a-button class="del-btn" @click="delPlateSelect">删除</a-button>
        <a-button class="sure-btn" @click="commit">确定</a-button>
<!--    不确定军总警之类的号牌数量,放开限制    -->
<!--        <a-button class="sure-btn" :disabled="cannotCommit()" @click="commit">确定</a-button>-->
      </div>
    </div>
  </div>
</template>

<script>
  import CommonKeyboard from "./Keyboard";

  export default {
    name: 'carPlate',
    components: {CommonKeyboard},
    props: {
      value: {
        default:'',
        type: String,
      },
      position:{
        default:'',
        type: String,
      },
      province:Array
    },
    data() {
      return {
        //normal:普通车牌（7位）
        //newEnergy:新能源车牌（8位）
        //tricycle:三轮车（6位、开头只能是三）
        plateType: 'normal',
        nowInputIndex: 2,
        catPlateInput: [],
        keys: {
          normal: [
            [
              ['京', '津', '沪', '渝', '冀', '晋', '辽', '吉', '黑', '苏'],
              ['浙', '皖', '闽', '赣', '豫', '鲁', '鄂', '湘', '粤', '琼'],
              ['川', '贵', '云', '陕', '甘', '青', '蒙', '桂', '宁', '新'],
              ['藏', '港', '澳', '台', '军', '总', '空', '海', '炮', '武'],
            ],
            // [
            //   ['Q','W','E','R','T','Y','U','I','O','P'],
            //   ['A','S','D','F','G','H','J','K','L'],
            //   ['Z','X','C','V','B','N','M','删'],
            // ],
            [
              ['A','B','C','D','E','F','G','H','J','K'],
              ['L','M','N','P','Q','R','S','T','U','V'],
              ['W','X','Y','Z'],
            ],
            [
              ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
              ['A','B','C','D','E','F','G','H','J','K'],
              ['L','M','N','P','Q','R','S','T','U','V'],
              ['W','X','Y','Z'],
            ],
            [
              ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
              ['A','B','C','D','E','F','G','H','J','K'],
              ['L','M','N','P','Q','R','S','T','U','V'],
              ['W','X','Y','Z'],
            ],
            [
              ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
              ['A','B','C','D','E','F','G','H','J','K'],
              ['L','M','N','P','Q','R','S','T','U','V'],
              ['W','X','Y','Z'],
            ],
            [
              ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
              ['A','B','C','D','E','F','G','H','J','K'],
              ['L','M','N','P','Q','R','S','T','U','V'],
              ['W','X','Y','Z','警','领','学','使','挂',],
            ],
            [
              ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
              ['A','B','C','D','E','F','G','H','J','K'],
              ['L','M','N','P','Q','R','S','T','U','V'],
              ['W','X','Y','Z','警','领','学','使','挂',],
            ],
          ],
          newEnergy: [
            [
              ['京', '津', '沪', '渝', '冀', '晋', '辽', '吉', '黑', '苏'],
              ['浙', '皖', '闽', '赣', '豫', '鲁', '鄂', '湘', '粤', '琼'],
              ['川', '贵', '云', '陕', '甘', '青', '蒙', '桂', '宁', '新'],
              ['藏', '港', '澳', '台', '军', '总', '空', '海', '炮', '武'],
            ],
            [
              ['A','B','C','D','E','F','G','H','J','K'],
              ['L','M','N','P','Q','R','S','T','U','V'],
              ['W','X','Y','Z'],
            ],
            [
              ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
              ['A','B','C','D','E','F','G','H','J','K'],
              ['L','M','N','P','Q','R','S','T','U','V'],
              ['W','X','Y','Z'],
            ],
            [
              ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
              ['A','B','C','D','E','F','G','H','J','K'],
              ['L','M','N','P','Q','R','S','T','U','V'],
              ['W','X','Y','Z'],
            ],
            [
              ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
              ['A','B','C','D','E','F','G','H','J','K'],
              ['L','M','N','P','Q','R','S','T','U','V'],
              ['W','X','Y','Z'],
            ],
            [
              ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
              ['A','B','C','D','E','F','G','H','J','K'],
              ['L','M','N','P','Q','R','S','T','U','V'],
              ['W','X','Y','Z','警','领','学','使','挂',],
            ],
            [
              ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
              ['A','B','C','D','E','F','G','H','J','K'],
              ['L','M','N','P','Q','R','S','T','U','V'],
              ['W','X','Y','Z','警','领','学','使','挂',],
            ],
            [
              ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
              ['A','B','C','D','E','F','G','H','J','K'],
              ['L','M','N','P','Q','R','S','T','U','V'],
              ['W','X','Y','Z','警','领','学','使','挂',],
            ],
          ],
          tricycle: [
            [
              ['三'],
            ],
            [
              ['0', '1', '2', '3', '4'],
              ['5', '6', '7', '8', '9'],
            ],
            [
              ['0', '1', '2', '3', '4'],
              ['5', '6', '7', '8', '9'],
            ],
            [
              ['0', '1', '2', '3', '4'],
              ['5', '6', '7', '8', '9'],
            ],
            [
              ['0', '1', '2', '3', '4'],
              ['5', '6', '7', '8', '9'],
            ],
            [
              ['0', '1', '2', '3', '4'],
              ['5', '6', '7', '8', '9'],
            ],
          ],
        },
      };
    },
    methods: {
      //输入组件所在位置
      pLatePosition(){
        if(this.position == 'top-left'){
          document.getElementById('les-select-car-plate').style.top = '-307px'
          document.getElementById('les-select-car-plate').style.left = '0'
        }if(this.position == 'top-right'||this.position == 'top'){
          document.getElementById('les-select-car-plate').style.top = '-307px'
          document.getElementById('les-select-car-plate').style.right = '0'
        }if(this.position == 'right-bottom'){
          document.getElementById('les-select-car-plate').style.top = '-272px'
          document.getElementById('les-select-car-plate').style.right = '-435px'
        }if(this.position == 'right'){
          document.getElementById('les-select-car-plate').style.top = '-135px'
          document.getElementById('les-select-car-plate').style.right = '-435px'
        }if(this.position == 'right-top'){
          document.getElementById('les-select-car-plate').style.top = '3px'
          document.getElementById('les-select-car-plate').style.right = '-435px'
        }if(this.position == 'bottom-right'||this.position == ''||this.position == 'bottom'){
          document.getElementById('les-select-car-plate').style.top = '40px'
          document.getElementById('les-select-car-plate').style.right = '0'
        }if(this.position == 'bottom-left'){
          document.getElementById('les-select-car-plate').style.top = '40px'
          document.getElementById('les-select-car-plate').style.left = '0'
        }if(this.position == 'left-top'){
          document.getElementById('les-select-car-plate').style.top = '3px'
          document.getElementById('les-select-car-plate').style.left = '-435px'
        }if(this.position == 'left'){
          document.getElementById('les-select-car-plate').style.top = '-135px'
          document.getElementById('les-select-car-plate').style.left = '-435px'
        }if(this.position == 'left-bottom'){
          document.getElementById('les-select-car-plate').style.top = '-272px'
          document.getElementById('les-select-car-plate').style.left = '-435px'
        }
      },
      plateTypeChange(type, noClear) {
        let length = 0;
        // let tmpArr = ['川','A'];
        let tmpArr = this.province?[...this.province]:[...GlobalConfig.province];
        switch (this.plateType) {
          case 'normal':
            length = 5;
            break;
          case 'newEnergy':
            length = 6;
            break;
          case 'tricycle':
            length = 4;
            break;
        }
        if (this.nowInputIndex >= length) {
          this.nowInputIndex = length - 1;
        }
        for (let i = 0; i < length; i++) {
          if (noClear) {
            let oldValue = this.catPlateInput[i];
            if (oldValue) {
              this.nowInputIndex = i;
              tmpArr.push(oldValue);
            } else {
              tmpArr.push('');
            }
          } else {
            this.nowInputIndex = 2;
            tmpArr.push('');
          }
        }
        if (this.plateType === 'tricycle') {
          tmpArr[0] = '三';
          if (this.nowInputIndex === 0) {
            this.nowInputIndex = 1;
          }
        }
        this.catPlateInput = tmpArr;
      },
      //不能提交
      cannotCommit() {
        for (let i in this.catPlateInput) {
          if (this.catPlateInput[i] === "") {
            //有位置没有输入不能提交
            return true;
          }
        }
        return false;
      },
      commit() {
        this.$emit('selectCarPlate', this.catPlateInput.join(''));
      },
      cancel(){
        this.$emit('selectCarPlate','');
      },
      //删除回退一格
      delPlateSelect(){
        this.$set(this.catPlateInput, this.nowInputIndex, '');
        if (this.nowInputIndex > 0) {
          this.nowInputIndex--
        }
      },
      //组件接到监听  退格键删除回退一格
      onkeydown(keyCode){
        switch (keyCode){
          case 8://del
            console.log('del')
            this.delPlateSelect()
            return;
          case 9://tab
            console.log('tab')
            break;
          case 13://enter
            console.log('enter')
            this.commit()
            break;
          case 27://esc
            console.log('esc')
            break;
          default:
            break;
        }
      },
      //判断是否移出面板
      judgeCancel(){
        let p = document.getElementsByClassName('les-select-car-plate');
        // console.log(p)
      },
      setIndex(index) {
        this.nowInputIndex = index;
      },
    },
    mounted() {
      this.catPlateInput = this.value.split('');
      if (this.catPlateInput.length === 8) {
        this.plateType = 'newEnergy';
      } else if (this.catPlateInput[0] === '三') {
        this.plateType = 'tricycle';
      } else {
        this.plateType = 'normal';
      }
      this.plateTypeChange(this.plateType, true);
      this.pLatePosition()
    },
    computed: {
      plateSelectInput: {
        get() {
          return '';
        },
        set(newValue) {
          if (newValue === "删") {
            this.$set(this.catPlateInput, this.nowInputIndex, '');
            if (this.nowInputIndex > 0) {
              this.nowInputIndex--
            }
          } else {
            setTimeout(()=>{
              this.$set(this.catPlateInput, this.nowInputIndex, newValue);
              if (this.nowInputIndex < this.catPlateInput.length - 1) {
                this.nowInputIndex++
              }
            })
          }
        },
      }
    },
  }
</script>


<style scoped lang="less">
  .les-select-car-plate{
    border: 1px solid #8c8c8c;
    background: #fff;
    box-shadow: 0px 4px 8px #8c8c8c;
    border-radius: 4px;
    position: absolute;
    top: 40px;
    z-index: 99;
    animation: slideIn .3s ease forwards;
    //.cancel-btn{
    //  text-align: right;
    //  padding-right: 10px;
    //  height: 30px;
    //  cursor: pointer;
    //  line-height: 30px;
    //}
    //.cancel-btn i{
    //  padding: 2px;
    //}
    //.cancel-btn i:hover{
    //  background: rgba(236, 235, 235, 0.57);
    //}
    .plate-input-list {
      padding: 15px 0 0 ;
      display: flex;
      justify-content: space-around;
    }

    .plate-input-list > li {
    }
    .plate-input-list > li .number {
      width: 30px;
      height: 30px;
      line-height: 30px;
      border: 1px solid #848484;
      border-radius: 3px;
      color: transparent;
      text-shadow: 0 0 0 #000;
      text-align: center;
    }

    .plate-input-list > li .number.active {
      border: 1px solid #198fff;
      box-shadow: 0 0 5px #2595ff;
    }
    .plate-input-list > li .list-dot{
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background-color: #a8a8a8;
      position: absolute;
      top: 25px;
      margin-left: 40px;
    }

    .type-select {
      text-align: left;
      padding: 0px 10px 0;
      display: flex;
      justify-content: space-between
    }
    .type-select>label:hover {
      cursor: pointer;
    }

    .commit-button {
      display: flex;
      justify-content: space-between;
      padding: 0 10px 10px;
      background: #f2f2f2;
    }

    .commit-button >.cancel-btn{
      background: #ffffff;
      border: unset;
      box-shadow: 0 0 4px #999;
      //width: 18%;
      //border-radius: 4px;
      ////color: white;
      //font-size: 14px;
      //line-height: 1.499;
      //position: relative;
      //display: inline-block;
      //font-weight: 400;
      //white-space: nowrap;
      //text-align: center;
      //background-image: none;
      //box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
      //cursor: pointer;
      //transition: all .3s cubic-bezier(.645,.045,.355,1);
      //-webkit-user-select: none;
      //-moz-user-select: none;
      //-ms-user-select: none;
      //user-select: none;
      //touch-action: manipulation;
      //height: 32px;
      //padding: 0 15px;
      //color: rgba(0,0,0,.65);
      //background-color: #fff;
      //border: 1px solid #d9d9d9;

    }
    .commit-button >.merge-div{
      width: 82%;
      display: flex;
      justify-content: flex-end;
    }
    .commit-button >.merge-div > .del-btn {
      //width: 18%;
      color: #ff5353;
      background: #ffffff;
      border: unset;
      margin-right: 8px;
      box-shadow: 0 0 4px #999;
    }
    .commit-button >.merge-div > .sure-btn {
      //width: 18%;
      background: #1890ff;
      border-color: #1890ff;
      border-radius: 4px;
      color: white;
      font-size: 14px;


      line-height: 1.499;
      position: relative;
      display: inline-block;
      font-weight: 400;
      white-space: nowrap;
      text-align: center;
      //box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
      cursor: pointer;
      transition: all .3s cubic-bezier(.645,.045,.355,1);
      user-select: none;
      touch-action: manipulation;
      height: 32px;
      padding: 0 15px;

    }

    .commit-button  >.merge-div> button:disabled {
      background: #b2b2b2;
      cursor: not-allowed;
    }
  }

  @-webkit-keyframes slideIn {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }

    to {
      /*transform: translateY(400px);*/
      transform: translateY(0px);
      opacity: 1;
    }
  }
</style>

