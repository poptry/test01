//mock 数据模拟
import Mock from 'mockjs'

//图表数据
let List = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    apple: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    xiaomi: Mock.Random.float(100, 8000, 0, 0),
                    huawei: Mock.Random.float(100, 8000, 0, 0),
                    sanxing: Mock.Random.float(100, 8000, 0, 0),
                    meizu: Mock.Random.float(100, 8000, 0, 0)
                })
            )
        }
        return {
            code: 20000,
            data: {
                videoData: [
                    {
                        name: 'oppo',
                        value: 2999
                    },
                    {
                        name: '小米',
                        value: 2999
                    },
                    {
                        name: 'meizu',
                        value: 2999
                    },
                    {
                        name: 'apple',
                        value: 2999
                    },
                    {
                        name: 'sanxing',
                        value: 2999
                    },
                    {
                        name: 'huawei',
                        value: 2999
                    },
                ],
                userData: [
                    {
                        data: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周二',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周三',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周四',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周五',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周六',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周日',
                        new: 5,
                        active: 200
                    },
                ],
                //折线图
                orderData: {
                    date: ['20191001', '20191001', '20191001', '20191001', '20191001', '20191001', '20191001']
                    , data: List
                },
                tableData: [
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22222,
                    },
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22222,
                    },
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22222,
                    },
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22222,
                    },
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22222,
                    },
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22222,
                    },
                ]
            },
        }
    }
}