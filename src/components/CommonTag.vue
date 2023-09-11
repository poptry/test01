<template>
    <div class="tabs">
        <el-tag v-for="(item, index) in tags" :key="item.path" :closable="item.name !== 'home'"
            :effect="$route.name === item.name ? 'dark' : 'plain'" @click="changeMenu(item)"
            @close="handleClose(item, index)">
            {{ item.label }}
        </el-tag>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'CommonTag',
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabsList
        })
    },
    methods: {
        ...mapMutations(['closeTag']),
        changeMenu(item) {
            this.$router.push({ name: item.name })
        },
        handleClose(item, index) {

            this.closeTag(item)
            const length = this.tags.length
            //删除后跳转逻辑
            //删除的不是当前路由
            if (item.name !== this.$route.name) {
                return
            }
            console.log(index);
            //删除的是最后一个 
            if (index === length) {
                this.$router.push({
                    name: this.tags[index - 1].name
                })
            } else {
                this.$router.push({
                    name: this.tags[index].name
                })
            }
        },

    }
}
</script>

<style></style>