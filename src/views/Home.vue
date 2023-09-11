<template>
    <el-row>
        <el-col :span="8" style="padding-right: 10px;">
            <el-card class="box-card">
                <div class="user">
                    <img src="../assets/images/hd-pf.jpg" alt="">
                    <div class="user-info">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>2023-6-7</span></p>
                    <p>上次登录地点：<span>武汉</span></p>
                </div>
            </el-card>
            <el-card style="margin-top: 20px; height: 460px;">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column v-for="(val, key) in tableLable" :prop="key" :label="val" :key="key" />
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="padding-left: 10px;">
            <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                    <div class="detail">
                        <p class="price">￥{{ item.value }}</p>
                        <p class="desc">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <!-- 折线图 -->
            <el-card style="height: 280px;">
                <div ref="echarts1" style="height: 280px;">
                </div>
            </el-card>
            <div class="graph">
                <el-card style="height: 260px;">
                    <div ref="echarts2" style="height:260px">
                    </div>
                </el-card>
                <el-card style="height: 260px;">
                    <div ref="echarts3" style="height: 240px;">
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import { onDeactivated } from 'vue';
import { getData } from '../api'
import * as echarts from 'echarts'
export default {
    data() {
        return {
            tableData: [
            ],
            tableLable: {
                name: '课程',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总购买'
            },
            countData: [
                {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "今日收藏订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "本月收藏订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
            ]
        };
    },
    mounted() {
        getData().then(({ data }) => {
            const { tableData, userData, videoData } = data.data
            console.log(tableData);
            this.tableData = tableData
            //基于当前的dom，初始化echats实例
            const echarts1 = echarts.init(this.$refs.echarts1)
            //指定图表配置项和数据
            var echarts1option = {}
            //处理数据x轴
            const { orderData } = data.data
            const xAxis = Object.keys(orderData.data[0])
            // const xAxisData = 
            echarts1option.xAxis = {
                data: orderData.date
            }
            echarts1option.yAxis = {}
            echarts1option.legend = {
                data: xAxis
            }
            echarts1option.tooltip = {}
            //series
            echarts1option.series = []
            xAxis.forEach(key => {
                echarts1option.series.push({
                    name: key,
                    data: orderData.data.map(item => item[key]),
                    type: 'line'
                })
            })
            //根据配置显示图表
            echarts1.setOption(echarts1option)

            //柱状图
            const echarts2 = echarts.init(this.$refs.echarts2)
            const echarts2option = {
                legend: {
                    textStyle: {
                        color: "#333",
                    },
                },
                grid: {
                    left: "20%"
                },
                tooltip: {
                    trigger: "axis"
                },
                xAxis: {
                    type: "category",
                    data: userData.map(item => item.data),
                    axisLine: {
                        lineStyle: {
                            color: "#17b3a3",
                        },
                    },
                    axisLabel: {
                        interval: 0,
                        color: "#333"
                    },
                },
                yAxis: [
                    {
                        type: "value",
                        axisLine: {
                            lineStyle: {
                                color: "#17b3a3",
                            }
                        },
                    },
                ],
                color: ["#2ec7c9", "#b6a2de"],
                series: [
                    {
                        name: "新增用户",
                        data: userData.map(item => item.new),
                        type: 'bar'
                    },
                    {
                        name: "活跃用户",
                        data: userData.map(item => item.active),
                        type: 'bar'
                    }
                ],
            }
            echarts2.setOption(echarts2option)

            //饼状图
            const echarts3 = echarts.init(this.$refs.echarts3)
            const echarts3option = {
                tooltip: {
                    trigger: 'item'
                },
                color: [
                    "#ff99cc",
                    "#00ccff",
                    "#ff00ff",
                    "#800000",
                    "#99ff33",
                    "#5d75f7",
                ],
                series: [
                    {
                        data: videoData,
                        type: 'pie'
                    }
                ],
            }
            echarts3.setOption(echarts3option)
        })

    }
}
</script>
<style lang="less" scoped>
.user {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;

    img {
        width: 150px;
        height: 150px;
        margin-right: 40px;
        border-radius: 50%;
    }

    .user-info {
        .name {
            font-size: 32px;
            margin-bottom: 10px;
        }

        .access {
            color: #999999;
        }
    }
}

.login-info {
    p {
        line-height: 28px;
        font-size: 14px;
        color: #999999;

        span {
            color: #666666;
            margin-left: 60px;
        }
    }
}

.num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .icon {
        font-size: 30px;
        width: 80px;
        height: 80px;
        color: #fff;
        text-align: center;
        line-height: 80px;
    }

    .detail {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .price {
            font-size: 30px;
            height: 30px;
            margin-bottom: 10px;
            line-height: 30px;
        }

        .desc {
            font-size: 14px;
            color: #999999;
            text-align: center;
        }
    }

    .el-card {
        width: 32%;
        margin-bottom: 20px;
    }
}

.graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    .el-card {
        width: 48%;
    }
}
</style>