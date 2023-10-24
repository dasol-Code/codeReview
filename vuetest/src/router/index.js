import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/member',
    name: 'member',
    component: () => import( '../views/MemberView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
  },
  {
    path: '/update/:upId',
    name: 'update',
    props: true,
    component: () => import( '../views/UpdateView.vue')
  },
  {
    path: '/signOut/:delId',
    name: 'signOut',
    props: true,
    component: () => import( '../views/SignOutView.vue')
  },
  {
    path: '/chgPwd/:chgId',
    name: 'chgPwd',
    props: true,
    component: () => import( '../views/PwdchgView.vue')
  },
  {
    path: '/uinfo/:conId',
    name: 'uinfo',
    component: () => import( '../views/InfoView.vue'),
    props: true
  },
  {
    path: '/info',
    name: 'info',
    component: () => import( '../views/InfoView.vue'),
  },
  {
    path: "/notFound",
    name: "notFound",
    component: () => import( '../views/ErrorView.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/notFound",
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


/*라우터 설정파일에서 알아둬야 할 것이 크게 두가지가 있는데 페이지 로드 방식과 라우팅 모드이다.

첫번째로 페이지 로드 방식인데 const로 선언된 routes 변수에는 두개의 페이지 경로가 담기는데 하나는 home과 다른 하나는 about이다. 두개의 페이지는 라우터를 이용한 페이지 이동을 할 수 있다는 점에서 동일한 기능을 하지만 그 안에서 수행하는 방식이 다르다. HomeView의 경우에는 상단에 이미 import 되어 있다. HomeView는 최초로 페이지 접속할 때 (개발자 도구 -> Network -> app.js) Response에 webpack으로 빌드된 결과물이 존재한다. 그러나 about 같은 경우에는 '코드 스플릿팅'이 되어 있어 해당 페이지로 이동할 때 AboutView가 빌드되어 보여진다. 실제로 운영하는 프로젝트같은 경우에는 페이지가 무수히 많을 것이다. SPA(Single Page Application) 특성 상 모든 페이지를 처음에 빌드하면 많은 시간을 소요하므로 '코드 스플리팅'을 통한 Lazy Loading이 필요한 페이지가 존재하게 된다.

두번째로는 라우터 모드로는 Hash, HTML5(History), Memory 세가지 모드가 있는데 각각 선언의 방식이 다르다. 위에서 라우터를 추가할 때 우리는 History Mode 라우터를 선택하였다.

Hash Mode : 내부적으로 전달되는 URL 앞에 해시 문자(#)를 사용한다(http://jiurinie.tistory.com/#). URL 호출 시 서버로 전송되지 않으므로 서버에서 특별한 처리가 필요하지 않는다. 그러나 SEO에서는 나쁜 영향을 끼친다고 한다.

HTML5 Mode(History Mode) : URL에 #이 나타나지 않고 정상적인 URL로 보인다. Vue 특성 상 서버 없이 단일 페이지 클라이언트 앱이므로 사용자가 브라우저에서 주소 타이핑(https://jiurinie.tistory.com/about)으로 접속 시 404 오류가 발생한다. 실제 운영하는 서버에 서브 페이지로 접근할 경우 index.html로 접근할 수 있도록 대체 경로를 추가하여 이 오류를 해결한다.

Memory Mode : 실제 브라우저 환경을 대상으로 가정하지 않기 때문에 추천되지 않는다.*/