import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const HelloWorld = (resolve) => {
  import('components/HelloWorld').then((component) => {
    resolve(component)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      components: HelloWorld
    }
  ]
})
