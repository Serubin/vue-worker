import SimpleWebWorker from 'simple-web-worker'

export default {
  install: function(Vue, name) {
    name = name || '$worker'
    Vue.worker = SimpleWebWorker
    Object.defineProperty(Vue.prototype, name, { value: SimpleWebWorker })
  }
}
