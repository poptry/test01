export default {
    state: {
        isCollapse: false, //控制菜单的展开还是收起
        tabsList: [
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            }
        ]//面包屑数据
    },
    mutations: {
        //修改菜单展开收起的方法
        collaspseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        //更新面包屑
        selectMenu(state, val) {
            // console.log(val);
            //判断添加的数据是否是首页
            if (val.name !== 'home') {
                const index = state.tabsList.findIndex(item => item.name === val.name)//存在返回索引，不存在返回-1
                if (index === -1) {
                    state.tabsList.push(val)
                }
            }
        },
        //删除指定的tag
        closeTag(state, item) {
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index, 1)
        }
    }
}