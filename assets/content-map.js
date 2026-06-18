// assets/content-map.js
// 站点内容分区与搜索过滤模块

const contentSections = [
  {
    id: 'home',
    title: '首页',
    keywords: ['开云', '首页', '概览'],
    items: [
      { name: '平台简介', url: 'https://www.shuru-kaiyun.com.cn/about' },
      { name: '最新动态', url: 'https://www.shuru-kaiyun.com.cn/news' }
    ]
  },
  {
    id: 'products',
    title: '产品中心',
    keywords: ['开云', '产品', '服务', '解决方案'],
    items: [
      { name: '云服务器', url: 'https://www.shuru-kaiyun.com.cn/products/cloud' },
      { name: '数据存储', url: 'https://www.shuru-kaiyun.com.cn/products/storage' },
      { name: '安全防护', url: 'https://www.shuru-kaiyun.com.cn/products/security' }
    ]
  },
  {
    id: 'support',
    title: '技术支持',
    keywords: ['开云', '帮助', '文档', 'FAQ'],
    items: [
      { name: '使用指南', url: 'https://www.shuru-kaiyun.com.cn/support/guide' },
      { name: '常见问题', url: 'https://www.shuru-kaiyun.com.cn/support/faq' },
      { name: '联系我们', url: 'https://www.shuru-kaiyun.com.cn/support/contact' }
    ]
  },
  {
    id: 'community',
    title: '社区',
    keywords: ['开云', '论坛', '交流', '博客'],
    items: [
      { name: '技术博客', url: 'https://www.shuru-kaiyun.com.cn/community/blog' },
      { name: '问答区', url: 'https://www.shuru-kaiyun.com.cn/community/qa' }
    ]
  }
];

const allKeywords = ['开云', '产品', '服务', '帮助', '文档', '社区', '博客'];

function filterSections(query) {
  const lowerQuery = query.toLowerCase();
  return contentSections.filter(section => {
    const titleMatch = section.title.toLowerCase().includes(lowerQuery);
    const keywordMatch = section.keywords.some(k => k.includes(lowerQuery));
    const itemMatch = section.items.some(item => item.name.toLowerCase().includes(lowerQuery));
    return titleMatch || keywordMatch || itemMatch;
  });
}

function getSectionById(id) {
  return contentSections.find(s => s.id === id) || null;
}

function getAllUrls() {
  const urls = [];
  contentSections.forEach(section => {
    section.items.forEach(item => urls.push(item.url));
  });
  return urls;
}

function generateKeywordCloud() {
  return allKeywords.map(keyword => ({
    text: keyword,
    weight: contentSections.filter(s => s.keywords.includes(keyword)).length
  }));
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    contentSections,
    allKeywords,
    filterSections,
    getSectionById,
    getAllUrls,
    generateKeywordCloud
  };
}