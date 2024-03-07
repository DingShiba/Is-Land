<script>
import axios from 'axios'
import moment from "moment";

export default {
  name: "list",
  data() {
    return {
      content: undefined,
      rangeDate: [
        moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
        moment().endOf('day').format('YYYY-MM-DD HH:mm:ss')
      ],
      columns: [
        {
          title: "留言时间",
          dataIndex: "createTime",
          key: "createTime"
        },
        {
          title: "留言内容",
          dataIndex: "content",
          key: "content",
          width: 1000,
          ellipsis: true
        },
        {
          title: "评分",
          dataIndex: "score",
          key: "score"
        }
      ],
      dataSource: [],
      loading: true
    }
  },
  mounted() {
    this.handleQuery()
  },
  methods: {
    handleQuery() {
      this.loading = true
      axios.request({
        url:"http://island.cel24.art:3000/leaveMessageByPage",
        // url: "http://localhost:3000/leaveMessageByPage",
        method: 'get',
        params: {
          startTime: this.rangeDate[0],
          endTime: this.rangeDate[1],
          content: this.content
        }
      }).then(res => {
        this.loading = false
        if (res.status == 200) {
          this.dataSource = res.data.map(item => {
            item.key = item.id;
            item.createTime = moment(item.create_time).format('YYYY-MM-DD HH:mm:ss')
            return item;
          })
        }
      })
    },
    handleReset() {
      this.content = undefined;
      this.rangeDate = [
        moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
        moment().endOf('day').format('YYYY-MM-DD HH:mm:ss')
      ]
    }
  }
}
</script>

<template>
  <div class="statistic-list">
    <div class="search-area">
      <div class="search-item">
        <div class="item-label">留言内容：</div>
        <div class="item-content">
          <a-input v-model:value="content" placeholder="请输入关键字检索留言" allow-clear/>
        </div>
      </div>
      <div class="search-item">
        <div class="item-label">时间区间：</div>
        <div class="item-content">
          <a-range-picker v-model:value="rangeDate"
                          show-time
                          value="YYYY-MM-DD HH:mm:ss" value-format="YYYY-MM-DD HH:mm:ss"/>
        </div>
      </div>
      <div class="actions-btns">
        <a-space>
          <a-button type="primary" @click="handleQuery">查询</a-button>
          <a-button type="default" @click="handleReset">重置</a-button>
        </a-space>
      </div>
    </div>
    <div class="result-area">
      <a-table :columns="columns"
               :data-source="dataSource" :loading="loading">
        <template #title>
          <h2>island.cel24.art留言记录</h2>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'content'">
            <a-tooltip placement="top">
              <template #title>
                <span>{{record.content}}</span>
              </template>
              <span>{{record.content}}</span>
            </a-tooltip>
          </template>

        </template>
      </a-table>
    </div>
  </div>
</template>

<style scoped lang="less">
.search-area {
  padding:24px;
  display: flex;
  align-items: center;
  gap: 24px;

  .search-item {
    display: flex;
    align-items: center;
  }
}
.result-area{
  padding:0px 12px;
}
</style>