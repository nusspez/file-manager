import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Fileslist from '@/components/files/FilesList.vue'
import EditFile from '@/components/files/EditFile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/files',
      name: 'Fileslist',
      component: Fileslist
    },
    {
      path: '/files/edit/:file_id',
      name: 'EditFiles',
      component: EditFile
    }
  ],
  mode: 'history'
})
