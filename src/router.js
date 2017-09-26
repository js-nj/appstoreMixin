import index from './pages/index/index.vue';
import custom from './pages/custom/custom.vue';
import app from './pages/app/app.vue';
import school from './pages/app/school.vue';
import contaction from './pages/contaction/contaction.vue';
import subClassification from './pages/subClassification/subClassification.vue';
import billDetail from './pages/bill/billDetail.vue';
import quickAskContent from './pages/quickAskContent/quickAskContent.vue';
import questionContent from './pages/questionContent/questionContent.vue';
import questionReplaying from './pages/questionReplaying/questionReplaying.vue';
import getInfo from './pages/getInfo/getInfo.vue';
export default {
	routes: [{
		path: '/',
		name: 'index',
		component: index
	}, {
		path: '/custom',
		name: 'custom',
		component: custom
	}, {
		path: '/app',
		name: 'app',
		component: app
	}, {
		path: '/school',
		name: 'school',
		component: school
	}, {
		path: '/contaction',
		name: 'contaction',
		component: contaction
	}, {
		path: '/subClassification',
		name: 'subClassification',
		component: subClassification
	}, {
		path: '/billDetail',
		name: 'billDetail',
		component: billDetail
	}, {
		path: '/quickAskContent',
		name: 'quickAskContent',
		component: quickAskContent
	}, {
		path: '/getInfo',
		name: 'getInfo',
		component: getInfo
	}, {
		path: '/questionContent',
		name: 'questionContent',
		component: questionContent
	}, {
		path: '/questionReplaying',
		name: 'questionReplaying',
		component: questionReplaying
	}],
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
};