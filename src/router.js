import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "UMP KPU",
        metaTags: [
          {
            name: "UMP KPU",
            content: "KPU UMP ELECTION"
          },
          {
            property: "og:description",
            content: "KPU UMP ELECTION."
          }
        ]
      }
    },
    {
      path: "/cek",
      name: "cek",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/cek.vue")
    },
    {
      path: "*",
      component: Home
    }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active"
});
