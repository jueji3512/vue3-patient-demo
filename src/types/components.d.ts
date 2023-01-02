import CpNavBar from '@/components/cp-nav-bar.vue'
import CpIcon from '@/components/CpIcon.vue'

// 这个地方可以通过测试van的一个标签测试一下，仿照它的代码得出以下的代码

// 给组件添加类型，让写属性和事件可以有提示
// 给vue添加全局组件类型，interface会和之前的类型合并
declare module 'vue' {
  interface GlobalComponents {
    // 定义具体组件类型，typeof 获取到组件实例类型
    CpNavBar: typeof CpNavBar
    CpIcon: typeof CpIcon
  }
}
