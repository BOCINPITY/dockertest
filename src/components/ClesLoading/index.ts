import type { App, VNode } from 'vue'
import Loading from './ClesLoading.vue'
import { createVNode, render } from 'vue'
export default {
  install(app: App) {
    const Vnode: VNode = createVNode(Loading)
    render(Vnode, document.body)
    app.config.globalProperties.$clesLoading = {
      show: Vnode.component?.exposed?.show,
      hide: Vnode.component?.exposed?.hide,
    }
  },
}
