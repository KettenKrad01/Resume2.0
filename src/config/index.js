//项目经历
const projectList = [{
    id: 0,
    name: '银河智投',
    date: '2017-11',
    link: 'http://yh178178.com',
    detail: '/yh',
    account: 13266705799,
    password: 123456,
    dec: `银河智投是个金属交易所网站，主要功能有交易、平仓、出入金、展示行情数据、图示化数据等。
主要技术栈: React+Mobx+Typescript
组件样式: antd+less。`,
    points: [
        'mobx状态管理库管理数据，实现多组件数据同步，实时更新。',
        '使用typescript增加类型检查，提高开发和维护的效率。',
        'less提取公共样式，cssModules限制组件样式作用域。',
        '基于react-helmet实现黑白主题。',
        '基于react-stockchart定制了股票图表。',
        '实现路由按需加载。',
    ],
}, {
    id: 1,
    name: '基于vue后台管理模版',
    date: '2017-10',
    link: 'https://github.com/tossers/vue-template-backstage',
    detail: '/yh',
    account: '',
    password: '',
    dec: '基于Vue+Mockjs+ElementUI+echarts后台管理模板.',
    points: [
        '基于vue,vuex,Mock后台管理模版实践。',
        '基于elementUI,echart,提供后台管理常见使用场景。',
        '使用vuex管理状态,vue-router实现路由按需加载。',
        '使用mock实现脱离后端开发。',
        '使用rem单位实现浅度自适应。',
    ],
}, {
    id: 2,
    name: '摩尔交易所',
    date: '2017-8',
    link: 'https://trade.moer.pro',
    detail: '/yh',
    account: 13266705799,
    password: 123456,
    dec: `摩尔交易所是个交易所网站，主要功能有交易，平仓，出入金，展示行情数据，图示化数据等。
主要技术栈: React+Mobx
组件样式: antd+less。`,
    points: [
        'mobx状态管理库管理数据，实现多组件数据同步，实时更新。',
        '基于Echarts定制股票图表。',
        '使用react-intl实现多语言功能。',
        'less提取公共样式，cssModules限制组件样式作用域。',
        '根据路由按需加载。',
        '数据节流，优化websocket实时推送带来的频繁渲染。',
    ],
}, {
    id: 3,
    name: '交易所后台展板',
    date: '2017-6',
    link: 'http://dashboard.quant.tuling.me',
    detail: '/yh',
    account: 'cds',
    password: 123456,
    dec: `这是监控数据的内部网站，主要功能是后台数据展示，图示化数据，对数据进行增删改查操作等。
主要技术栈: React+dva，
组件样式: antd+highchart+css。`,
    points: [
        '使用阿里开源项目dva手脚架',
        '使用highcharts图示化数据。',
    ],
}];
//个人特点
const traitList = [
    '深入前端工程化，拥抱组件化和函数式编程，有dry编程习惯。',
    '会总结项目开发和维护的难点痛点，思考解决方案。',
    '认真负责，有较强的学习能力，对新事物有较强的接受能力。',
    '有时间观念，能在规定时间内完成任务。',
    '知乎，github重度使用者，关注前端技术的最新发展，会收听技术大牛的Live。',
    '热爱阅读技术书籍，喜欢的书目有《深入浅出React和Redux》，《你不知道的JavaScript》。',
];
//技术栈
const skillList = [
    'react',
    'mobx',
    'vue',
    'jQuery',
    'html',
    'typescript',
    'javascript',
    'css',
    'less',
    'antd',
    'ES6',
    'webpack',
    'elementUI',
    'echarts',
    'highcharts',
];
//社交链接
const social = [{
    id: 0,
    name: '博客',
    url: '//tossers.github.io',
    icon: '/blog.png',
    text: '//tossers.github.io',
}, {
    id: 1,
    name: 'GitHub',
    url: '//github.com/tossers',
    icon: '/github.png',
    text: '//github.com/tossers'
}, {
    id: 2,
    name: '知乎',
    url: '//www.zhihu.com/people/wo-shi-you-xiang/activities',
    icon: '/zhihu.png',
    text: '//www.zhihu.com/people/wo-shi-you-xiang/activities'
}, {
    id: 3,
    name: '邮箱',
    url: '',
    icon: '/email.png',
    text: '371777394@qq.com'
}, {
    id: 4,
    name: '电话',
    url: '',
    icon: '/phone.png',
    text: '13266705799',
}];
//个人信息
const personalInfo = {
    name: '严超颖',
    sex: '男',
    position: '前端开发工程师',
    birthday: '1994.08',
    university: '深圳大学',
    major: '电子信息工程',
    education: '本科',
    graduation: '2017年',
    english: '六级',
    social,
    skillList,
};
//最后修改时间
const lastUpdate = '2018-02-10';
export default {
    traitList,
    projectList,
    personalInfo,
    lastUpdate,
};
