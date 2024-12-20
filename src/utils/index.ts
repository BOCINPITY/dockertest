interface BusClass {
  emit: (name: string) => void
  on: (name: string, callback: FN) => void
}
type ANY = object | number | string | boolean | undefined | null
type FN = (...args: ANY[]) => void
type ParamsKey = string | symbol | number
type List = {
  [key: ParamsKey]: Array<FN>
}

class Bus implements BusClass {
  list: List //一个对象，键为ParamsKey类型，值为函数数组
  constructor() {
    this.list = {}
  }
  /**
   *
   * @param name 发布的事件名称
   * @param args 事件所携带的参数
   */
  emit(name: string, ...args: Array<ANY>) {
    const callbackList: Array<FN> = this.list[name] //所有订阅者的回调函数
    callbackList.forEach((fn) => {
      fn.apply(this, args) //执行
    })
  }
  /**
   *
   * @param name 监听的事件名称
   * @param callback 回调函数
   */
  on(name: string, callback: FN) {
    const callbackList: Array<FN> = this.list[name] || []
    callbackList.push(callback)
    this.list[name] = callbackList
  }
}
export default new Bus()
