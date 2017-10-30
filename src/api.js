//WEBPACK_CONIFG_HOST的值，在webpack.config.js中更改
//开发环境时 = "http://amptest.wisedu.com/xsfwfw/"
//发布环境时 = location.origin + location.pathname.substring(0, location.pathname.indexOf("/", 1)) + "/"

export default {
	yyfx: WEBPACK_CONIFG_HOST + "sys/appstoreservice/sjzds/yyfx.do", //应用类型(字典表)
	appsLbtList: WEBPACK_CONIFG_HOST + "sys/appstoreservice/apps/lbtList.do", //轮播图
	appsRmyyList: WEBPACK_CONIFG_HOST + "sys/appstoreservice/apps/rmyyList.do", //热门应用
	appsZxyyList: WEBPACK_CONIFG_HOST + "sys/appstoreservice/apps/zxyyList.do", //最新应用
	appsKhalList: WEBPACK_CONIFG_HOST + "sys/appstoreservice/apps/khalList.do", //客户案例
	appsList: WEBPACK_CONIFG_HOST + "sys/appstoreservice/apps/list.do", //搜索模糊查询应用
	appsDetail: WEBPACK_CONIFG_HOST + "sys/appstoreservice/apps/detail.do", //应用详情
	appsIntrodure: WEBPACK_CONIFG_HOST + "sys/appstoreservice/apps/introdure.do", //获取应用介绍
	appsCustomer: WEBPACK_CONIFG_HOST + "sys/appstoreservice/apps/customer.do", //客户案例信息
	appsCount: WEBPACK_CONIFG_HOST + "sys/appstoreservice/apps/appscount.do", //学校应用统计，服务学校列表
	addBill: WEBPACK_CONIFG_HOST + "sys/appstoreservice/bills/addBill.do", //加入清单
	billsList: WEBPACK_CONIFG_HOST + "sys/appstoreservice/bills/list.do", //我的清单
	deleteBills: WEBPACK_CONIFG_HOST + "sys/appstoreservice/bills/deleteBills.do",
	quotationsList: WEBPACK_CONIFG_HOST + "sys/appstoreservice/quotations/list.do",
	addQuotation: WEBPACK_CONIFG_HOST + "sys/appstoreservice/quotations/addQuotation.do",
	deleteQuotaition: WEBPACK_CONIFG_HOST + "sys/appstoreservice/quotations/deleteQuotaition.do",
	quotationsDetails: WEBPACK_CONIFG_HOST + "sys/appstoreservice/quotations/details.do",
	getImageSrc: WEBPACK_CONIFG_HOST + "sys/appstoreservice/attrs/preview.do",
	getUserInfo: WEBPACK_CONIFG_HOST + "sys/appstoreservice/users/login.do",
	appYyflSum: WEBPACK_CONIFG_HOST + "sys/appstoreservice/apps/yyflSum.do", //应用类型(应用数)
	saveUserInfo: WEBPACK_CONIFG_HOST + "sys/appstoreservice/users/saveUserInfo.do", //保存联系人的信息
	loginUserInfo: WEBPACK_CONIFG_HOST + "sys/appstoreservice/users/loginUserInfo.do", //查询联系人的信息
	appBq: WEBPACK_CONIFG_HOST + "sys/appstoreservice/sjzds/roleBq.do", //标签类型
	checkBills: WEBPACK_CONIFG_HOST + "sys/appstoreservice/bills/checkBills.do", //检查是否已经加入清单
	zdyTab: WEBPACK_CONIFG_HOST + "sys/appstoreservice/apps/zdyTab.do", //自定义tab
	zdyList: WEBPACK_CONIFG_HOST + "sys/appstoreservice/apps/zdyList.do", //自定义tab内应用
	sysSetting: WEBPACK_CONIFG_HOST + "sys/appstoreservice/syssetting/setting.do", //查询系统设置的电话
	staticsOfShareApp: WEBPACK_CONIFG_HOST + "sys/appstoreservice/users/shareCount.do", //获取分享统计数据
	//新
	queryBjdInWechat: WEBPACK_CONIFG_HOST + "sys/appstoreservice/quotations/wxDetails.do", //查询报价单属性及详情
	queryCustom: WEBPACK_CONIFG_HOST + "sys/appstoreservice/apps/wxCustomer.do", //查询案例属性及详情
	//我想要
	iWantIt: WEBPACK_CONIFG_HOST + "sys/appstoreservice/jrxy/save.do", //我想要
	//检查学生是否已经想要
	checkClick: WEBPACK_CONIFG_HOST + "sys/appstoreservice/jrxy/checkClick.do", //是否已经想要
	//获取钉钉配置
	getDingTalkConfig: WEBPACK_CONIFG_HOST + "sys/appstoreservice/dingding/getConfig.do", //获取钉钉配置
	//保存问题
	saveQuestion: WEBPACK_CONIFG_HOST + "sys/appstoreservice/question/saveQuestion.do",
	//获取当前用户待解决问题
	queryQuestionByUserId: WEBPACK_CONIFG_HOST + "sys/appstoreservice/question/queryQuestionByUserId.do",
	//获取产品线
	queryAppType: WEBPACK_CONIFG_HOST + "sys/appstoreservice/question/queryAppType.do",
	//获取目标产品线产品
	queryAppByType: WEBPACK_CONIFG_HOST + "sys/appstoreservice/question/queryAppByType.do",
	//给客户发送资料
	sendAppCustomLog: WEBPACK_CONIFG_HOST + "sys/appstoreservice/send/sendAppCustomLog.do",
	//给销售发送资料
	sendAppSalesLog: WEBPACK_CONIFG_HOST + "sys/appstoreservice/question/sendAppSalesLog.do",
	//添加回答
	solveQuestion: WEBPACK_CONIFG_HOST + "sys/appstoreservice/question/solveQuestion.do",
	//根据应用id获取相关的问题列表
	queryQuestionByAppId: WEBPACK_CONIFG_HOST + "sys/appstoreservice/question/queryQuestionByAppId.do",
	// 获取问题解决方案列表
	querySolveQuestionList: WEBPACK_CONIFG_HOST + "sys/appstoreservice/question/querySolveQuestionList.do",
	// 查询当前人对应产品线 所有问题
	queryQuestionByProduceId: WEBPACK_CONIFG_HOST + "sys/appstoreservice/question/queryQuestions.do",
	//上传图片
	upload: WEBPACK_CONIFG_HOST + "sys/appstoreservice/qUpload/upload.do",
	//删除问题
	deleteQuestion: WEBPACK_CONIFG_HOST + "sys/appstoreservice/question/deleteQuestion.do",
	//更新问题
	updateQuestion: WEBPACK_CONIFG_HOST + "sys/appstoreservice/question/updateQuestion.do",
	//删除答案
	deleteSolveQuestion: WEBPACK_CONIFG_HOST + "sys/appstoreservice/question/deleteSolveQuestion.do",
	//更新答案
	updateSolveQuestion: WEBPACK_CONIFG_HOST + "sys/appstoreservice/question/updateSolveQuestion.do",
	//获取学校列表
	getSchools: WEBPACK_CONIFG_HOST + "sys/appstoreservice/question/queryCustomByUserGh.do",
	//获取用户身份信息
	queryCurrentUserInfo: WEBPACK_CONIFG_HOST + "sys/appstoreservice/question/queryCurrentUserInfo.do",
	//请求图片地址
	getImgs: WEBPACK_CONIFG_HOST + 'sys/emapcomponent/file/getUploadedAttachment/',
	//删除图片
	deleteImgs: WEBPACK_CONIFG_HOST + 'sys/appstoreservice/qUpload/deleteFile.do',
	//请求问题详情
	queryQuestionDetail: WEBPACK_CONIFG_HOST + "sys/appstoreservice/question/queryQuestionDetail.do",
	//查询销售获取资料详情
	queryAppIntroduceFjxx: WEBPACK_CONIFG_HOST + "sys/appstoreservice/send/queryAppIntroduceFjxx.do",
	//发送销售获取资料项目
	sendAppSalesLog: WEBPACK_CONIFG_HOST + "sys/appstoreservice/send/sendAppSalesLog.do",
	//应用核心数据
	data: WEBPACK_CONIFG_HOST + "sys/appstoreservice/core/data.do",
	//数据-案例卡片
	customerData: WEBPACK_CONIFG_HOST + "sys/appstoreservice/core/customerData.do",
	//安心守护运行数据
	runData: WEBPACK_CONIFG_HOST + "sys/appstoreservice/core/runData.do",
	//钉钉分享log
	saveLink: WEBPACK_CONIFG_HOST + "sys/appstoreservice/shareLog/saveLink.do",
	//钉钉分享后，打开链接的log
	saveLinkLog: WEBPACK_CONIFG_HOST + "sys/appstoreservice/shareLog/saveLinkLog.do",
}