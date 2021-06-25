export default {
  register(fun) {
    this.fun = fun
  },
  trigger(...args) {
    this.fun(...args)
  }
}