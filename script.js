const majorGroups = {
  "计算机与信息技术": [
    ["computer-software", "软件工程"],
    ["computer-science", "计算机科学与技术"],
    ["network-security", "网络空间安全"],
    ["iot", "物联网工程"],
    ["ai", "人工智能"]
  ],
  "数据与数学": [
    ["data-science", "数据科学与大数据技术"],
    ["statistics", "统计学"],
    ["math", "数学与应用数学"],
    ["business-analytics", "商业分析"]
  ],
  "经济金融与管理": [
    ["finance", "金融学"],
    ["accounting", "会计学"],
    ["economics", "经济学"],
    ["business-admin", "工商管理"],
    ["marketing", "市场营销"],
    ["hr", "人力资源管理"]
  ],
  "设计与传媒": [
    ["ux-design", "交互设计"],
    ["visual-design", "视觉传达设计"],
    ["industrial-design", "工业设计"],
    ["journalism", "新闻传播学"],
    ["language", "外语类"]
  ],
  "工程制造": [
    ["mechanical", "机械工程"],
    ["automation", "自动化"],
    ["electrical", "电气工程"],
    ["materials", "材料科学与工程"],
    ["civil", "土木工程"]
  ],
  "医药与教育": [
    ["medicine", "临床医学"],
    ["pharmacy", "药学"],
    ["education", "教育学"],
    ["psychology", "心理学"]
  ]
};

const cities = [
  "不限",
  "北京",
  "上海",
  "深圳",
  "广州",
  "杭州",
  "成都",
  "南京",
  "苏州",
  "武汉",
  "西安",
  "重庆",
  "天津",
  "长沙",
  "郑州",
  "青岛",
  "厦门",
  "合肥",
  "宁波",
  "无锡",
  "佛山",
  "东莞",
  "远程"
];

const industries = [
  "不限",
  "企业服务 / SaaS",
  "人工智能",
  "新零售",
  "金融",
  "智能制造",
  "工业互联网",
  "游戏 / 文娱",
  "教育科技",
  "新能源"
];

const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "SQL",
  "机器学习",
  "PyTorch",
  "产品分析",
  "原型设计",
  "接口测试",
  "C/C++",
  "沟通协作",
  "Figma",
  "财务建模"
];

const preferences = ["技术成长", "数据驱动", "业务挑战", "稳定平台"];

const jobs = [
  {
    id: "fe-saas-001",
    title: "前端开发工程师",
    company: "云栈科技",
    city: "杭州",
    district: "余杭区",
    education: "bachelor",
    minExperience: 1,
    maxExperience: 5,
    salaryMin: 18,
    salaryMax: 32,
    industry: "企业服务 / SaaS",
    companySize: "500-999人",
    type: "全职",
    majors: ["computer-software", "computer-science", "ux-design"],
    skills: ["JavaScript", "TypeScript", "Vue", "React", "Figma"],
    preferences: ["技术成长", "业务挑战"],
    responsibilities: ["负责 Web 端核心业务模块开发", "与产品和设计协作优化复杂表单与数据看板", "沉淀组件和前端工程规范"],
    requirements: ["熟悉 JavaScript 或 TypeScript", "有至少一个主流前端框架项目经验", "能理解接口、权限、状态管理等工程问题"]
  },
  {
    id: "data-retail-002",
    title: "数据分析师",
    company: "星河零售",
    city: "上海",
    district: "徐汇区",
    education: "bachelor",
    minExperience: 1,
    maxExperience: 4,
    salaryMin: 16,
    salaryMax: 28,
    industry: "新零售",
    companySize: "1000-9999人",
    type: "全职",
    majors: ["data-science", "statistics", "business-analytics", "marketing", "finance"],
    skills: ["SQL", "Python", "Tableau", "产品分析", "沟通协作"],
    preferences: ["数据驱动", "业务挑战"],
    responsibilities: ["搭建经营指标体系", "分析用户增长、转化和复购问题", "输出数据报告并推动业务复盘"],
    requirements: ["熟练使用 SQL", "理解 A/B 测试和常见统计口径", "能把分析结论转化为行动建议"]
  },
  {
    id: "ml-ai-003",
    title: "机器学习工程师",
    company: "北辰智能",
    city: "北京",
    district: "海淀区",
    education: "master",
    minExperience: 2,
    maxExperience: 6,
    salaryMin: 30,
    salaryMax: 55,
    industry: "人工智能",
    companySize: "100-499人",
    type: "全职",
    majors: ["ai", "computer-science", "data-science", "statistics", "math"],
    skills: ["Python", "机器学习", "PyTorch", "SQL", "算法"],
    preferences: ["技术成长", "数据驱动"],
    responsibilities: ["训练和评估推荐、搜索或预测模型", "优化特征工程和模型上线流程", "与工程团队协作落地算法服务"],
    requirements: ["具备机器学习基础", "熟悉 Python 和至少一种深度学习框架", "有模型评估、调参或线上实验经验"]
  },
  {
    id: "pm-b2b-004",
    title: "B 端产品经理",
    company: "明镜 SaaS",
    city: "深圳",
    district: "南山区",
    education: "bachelor",
    minExperience: 2,
    maxExperience: 6,
    salaryMin: 22,
    salaryMax: 38,
    industry: "企业服务 / SaaS",
    companySize: "100-499人",
    type: "全职",
    majors: ["business-admin", "computer-software", "ux-design", "business-analytics"],
    skills: ["产品分析", "原型设计", "沟通协作", "SQL", "Figma"],
    preferences: ["业务挑战", "数据驱动"],
    responsibilities: ["负责客户需求调研和产品方案设计", "梳理权限、审批、报表等复杂业务流程", "推动研发、测试、交付节奏"],
    requirements: ["有 B 端或后台产品经验", "能写清晰 PRD 和验收标准", "对数据和业务指标敏感"]
  },
  {
    id: "finance-005",
    title: "财务分析专员",
    company: "丰原资本",
    city: "广州",
    district: "天河区",
    education: "bachelor",
    minExperience: 0,
    maxExperience: 3,
    salaryMin: 12,
    salaryMax: 22,
    industry: "金融",
    companySize: "100-499人",
    type: "全职",
    majors: ["finance", "accounting", "economics"],
    skills: ["财务建模", "Excel", "SQL", "沟通协作"],
    preferences: ["稳定平台", "业务挑战"],
    responsibilities: ["维护预算和预测模型", "跟踪业务线成本与收入变化", "支持投资测算和经营分析"],
    requirements: ["财务、会计或金融基础扎实", "熟练使用 Excel", "能独立完成基础财务分析"]
  },
  {
    id: "ux-game-006",
    title: "用户体验设计师",
    company: "澜舟互娱",
    city: "成都",
    district: "高新区",
    education: "associate",
    minExperience: 1,
    maxExperience: 5,
    salaryMin: 14,
    salaryMax: 26,
    industry: "游戏 / 文娱",
    companySize: "500-999人",
    type: "全职",
    majors: ["ux-design", "visual-design", "industrial-design", "psychology"],
    skills: ["Figma", "用户研究", "原型设计", "沟通协作"],
    preferences: ["业务挑战", "稳定平台"],
    responsibilities: ["负责游戏社区和运营工具体验设计", "输出用户旅程、原型和交互说明", "参与可用性测试和版本复盘"],
    requirements: ["具备成熟作品集", "熟悉移动端和 Web 端交互规范", "能结合业务目标优化体验"]
  },
  {
    id: "qa-auto-007",
    title: "自动化测试工程师",
    company: "启衡工业云",
    city: "远程",
    district: "远程办公",
    education: "associate",
    minExperience: 1,
    maxExperience: 5,
    salaryMin: 15,
    salaryMax: 26,
    industry: "工业互联网",
    companySize: "100-499人",
    type: "全职",
    majors: ["computer-software", "computer-science", "automation", "mechanical"],
    skills: ["Python", "接口测试", "SQL", "自动化测试", "JavaScript"],
    preferences: ["技术成长", "稳定平台"],
    responsibilities: ["搭建接口和 UI 自动化测试", "维护测试数据与质量报表", "参与持续集成流程建设"],
    requirements: ["会写 Python 脚本", "熟悉接口测试和常见数据库操作", "理解测试用例设计方法"]
  },
  {
    id: "embedded-008",
    title: "嵌入式软件工程师",
    company: "川行机器人",
    city: "苏州",
    district: "工业园区",
    education: "bachelor",
    minExperience: 2,
    maxExperience: 7,
    salaryMin: 20,
    salaryMax: 36,
    industry: "智能制造",
    companySize: "100-499人",
    type: "全职",
    majors: ["automation", "electrical", "computer-software", "iot", "mechanical"],
    skills: ["C/C++", "Linux", "通信协议", "Python"],
    preferences: ["技术成长", "稳定平台"],
    responsibilities: ["开发机器人控制和通信模块", "参与驱动调试和性能优化", "配合硬件团队完成联调"],
    requirements: ["熟悉 C/C++", "了解 Linux 或 RTOS", "有串口、CAN、TCP/IP 等通信经验"]
  },
  {
    id: "materials-rd-009",
    title: "材料研发工程师",
    company: "曜石新材",
    city: "上海",
    district: "浦东新区",
    education: "master",
    minExperience: 0,
    maxExperience: 5,
    salaryMin: 18,
    salaryMax: 34,
    industry: "智能制造",
    companySize: "100-499人",
    type: "全职",
    majors: ["materials", "mechanical"],
    skills: ["材料表征", "实验设计", "数据分析", "沟通协作"],
    preferences: ["技术成长", "稳定平台"],
    responsibilities: ["负责高分子或复合材料配方验证", "设计实验方案并跟踪性能测试结果", "沉淀材料数据库和研发报告"],
    requirements: ["材料科学相关专业背景", "熟悉常见材料测试与表征方法", "能独立完成实验记录和结果分析"]
  },
  {
    id: "process-materials-010",
    title: "材料工艺工程师",
    company: "海川新能源",
    city: "苏州",
    district: "工业园区",
    education: "bachelor",
    minExperience: 1,
    maxExperience: 6,
    salaryMin: 16,
    salaryMax: 28,
    industry: "新能源",
    companySize: "1000-9999人",
    type: "全职",
    majors: ["materials", "automation", "mechanical", "electrical"],
    skills: ["工艺优化", "质量分析", "Excel", "沟通协作"],
    preferences: ["稳定平台", "业务挑战"],
    responsibilities: ["优化电池材料相关生产工艺", "分析良率、缺陷和异常批次", "推动工艺参数标准化和量产导入"],
    requirements: ["材料、化工或工程制造相关专业", "理解生产现场质量和工艺问题", "具备跨部门沟通和问题闭环能力"]
  },
  {
    id: "quality-materials-011",
    title: "材料质量工程师",
    company: "川行机器人",
    city: "杭州",
    district: "钱塘区",
    education: "bachelor",
    minExperience: 1,
    maxExperience: 5,
    salaryMin: 13,
    salaryMax: 23,
    industry: "智能制造",
    companySize: "100-499人",
    type: "全职",
    majors: ["materials", "mechanical", "industrial-design"],
    skills: ["质量分析", "供应商管理", "Excel", "沟通协作"],
    preferences: ["稳定平台", "业务挑战"],
    responsibilities: ["负责结构件、涂层或复合材料来料质量", "跟进供应商异常和改善措施", "维护检验标准和质量数据报表"],
    requirements: ["材料或机械相关专业", "了解常见质量工具", "能推动供应商和内部团队完成问题闭环"]
  },
  {
    id: "mkt-012",
    title: "增长运营",
    company: "微澜教育",
    city: "南京",
    district: "建邺区",
    education: "bachelor",
    minExperience: 1,
    maxExperience: 4,
    salaryMin: 13,
    salaryMax: 24,
    industry: "教育科技",
    companySize: "500-999人",
    type: "全职",
    majors: ["marketing", "journalism", "education", "business-admin", "psychology"],
    skills: ["内容运营", "产品分析", "沟通协作", "SQL"],
    preferences: ["业务挑战", "数据驱动"],
    responsibilities: ["设计拉新、转化和留存活动", "分析渠道投放与内容转化", "协调销售、教研和产品团队"],
    requirements: ["理解用户分层和转化漏斗", "有内容、社群或渠道运营经验", "能用数据复盘活动效果"]
  },
  {
    id: "hr-013",
    title: "招聘专员",
    company: "海川新能源",
    city: "武汉",
    district: "光谷",
    education: "bachelor",
    minExperience: 1,
    maxExperience: 4,
    salaryMin: 9,
    salaryMax: 16,
    industry: "新能源",
    companySize: "1000-9999人",
    type: "全职",
    majors: ["hr", "psychology", "business-admin", "language"],
    skills: ["招聘配置", "沟通协作", "Excel", "人才寻访"],
    preferences: ["稳定平台", "业务挑战"],
    responsibilities: ["负责技术和职能岗位招聘", "维护招聘渠道和候选人池", "跟进面试、录用和入职流程"],
    requirements: ["熟悉招聘流程", "沟通推进能力强", "能维护多岗位招聘进度"]
  }
];

const educationRank = {
  associate: 1,
  bachelor: 2,
  master: 3,
  doctor: 4
};

const educationLabel = {
  associate: "大专",
  bachelor: "本科",
  master: "硕士",
  doctor: "博士"
};

const platformSearch = {
  boss: ({ title, city }) => `https://www.zhipin.com/web/geek/job?query=${encodeURIComponent(title)}&city=${encodeURIComponent(city)}`,
  zhilian: ({ title, city }) => `https://sou.zhaopin.com/?jl=${encodeURIComponent(city)}&kw=${encodeURIComponent(title)}`,
  job51: ({ title, city }) => `https://we.51job.com/pc/search?keyword=${encodeURIComponent(title)}&searchType=2&jobArea=${encodeURIComponent(city)}`,
  liepin: ({ title, city }) => `https://www.liepin.com/zhaopin/?key=${encodeURIComponent(title)}&dq=${encodeURIComponent(city)}`,
  lagou: ({ title, city }) => `https://www.lagou.com/wn/jobs?pn=1&kd=${encodeURIComponent(title)}&city=${encodeURIComponent(city)}`
};

const platformLabels = {
  boss: "BOSS 直聘",
  zhilian: "智联招聘",
  job51: "前程无忧",
  liepin: "猎聘",
  lagou: "拉勾招聘"
};

const majorCareerMap = {
  "computer-software": ["前端开发工程师", "后端开发工程师", "全栈开发工程师", "Java 开发工程师", "软件测试工程师", "运维开发工程师"],
  "computer-science": ["软件开发工程师", "算法工程师", "后端研发工程师", "云计算工程师", "数据开发工程师", "系统工程师"],
  "network-security": ["网络安全工程师", "安全运营工程师", "渗透测试工程师", "安全开发工程师", "等保测评工程师"],
  iot: ["物联网工程师", "嵌入式软件工程师", "硬件测试工程师", "边缘计算工程师", "IoT 平台工程师"],
  ai: ["机器学习工程师", "算法工程师", "大模型应用工程师", "计算机视觉工程师", "NLP 算法工程师"],
  "data-science": ["数据分析师", "数据开发工程师", "商业分析师", "BI 工程师", "数据产品经理", "数据挖掘工程师"],
  statistics: ["数据分析师", "风控建模分析师", "量化研究助理", "统计分析师", "用户研究分析师"],
  math: ["算法工程师", "数据分析师", "量化研究员", "运筹优化工程师", "数学建模工程师"],
  "business-analytics": ["商业分析师", "经营分析师", "数据产品经理", "策略分析师", "用户增长分析师"],
  finance: ["财务分析师", "金融产品经理", "风控分析师", "投资分析师", "行业研究员"],
  accounting: ["会计专员", "财务分析专员", "审计助理", "税务专员", "资金专员"],
  economics: ["行业研究员", "经营分析师", "市场研究分析师", "策略分析师", "投资分析助理"],
  "business-admin": ["产品经理", "运营经理", "项目经理", "管培生", "商务拓展经理"],
  marketing: ["增长运营", "市场营销专员", "品牌策划", "用户运营", "电商运营"],
  hr: ["招聘专员", "HRBP", "人力资源专员", "组织发展专员", "薪酬绩效专员"],
  "ux-design": ["交互设计师", "用户体验设计师", "产品设计师", "UI 设计师", "用户研究员"],
  "visual-design": ["视觉设计师", "品牌设计师", "UI 设计师", "平面设计师", "电商设计师"],
  "industrial-design": ["工业设计师", "产品设计师", "结构设计工程师", "CMF 设计师", "用户体验设计师"],
  journalism: ["内容运营", "新媒体运营", "品牌策划", "文案策划", "公关传播专员"],
  language: ["跨境电商运营", "外贸业务员", "海外市场专员", "本地化运营", "英语编辑"],
  mechanical: ["机械工程师", "结构工程师", "工艺工程师", "设备工程师", "质量工程师"],
  automation: ["自动化工程师", "电气工程师", "PLC 工程师", "机器人工程师", "测试工程师"],
  electrical: ["电气工程师", "硬件工程师", "电力电子工程师", "测试工程师", "嵌入式工程师"],
  materials: ["材料工程师", "材料研发工程师", "工艺工程师", "质量工程师", "新能源材料工程师"],
  civil: ["土木工程师", "结构工程师", "施工员", "项目工程师", "造价工程师"],
  medicine: ["临床研究助理", "医学专员", "医疗产品经理", "医药代表", "医学编辑"],
  pharmacy: ["药物分析研究员", "药品注册专员", "临床监察员", "医药研发助理", "药剂师"],
  education: ["课程顾问", "教研专员", "学习规划师", "教育产品经理", "培训讲师"],
  psychology: ["用户研究员", "心理咨询助理", "HRBP", "人才测评顾问", "用户体验研究员"]
};

const skillCareerMap = {
  JavaScript: ["前端开发工程师", "Web 前端工程师", "全栈开发工程师"],
  TypeScript: ["前端开发工程师", "React 开发工程师", "Vue 开发工程师"],
  Python: ["Python 开发工程师", "数据分析师", "自动化测试工程师"],
  SQL: ["数据分析师", "BI 工程师", "数据开发工程师"],
  机器学习: ["机器学习工程师", "算法工程师", "AI 应用工程师"],
  PyTorch: ["深度学习工程师", "算法工程师", "大模型算法工程师"],
  产品分析: ["产品经理", "数据产品经理", "商业分析师"],
  原型设计: ["产品经理", "交互设计师", "用户体验设计师"],
  接口测试: ["测试工程师", "自动化测试工程师", "测试开发工程师"],
  "C/C++": ["C++ 开发工程师", "嵌入式软件工程师", "客户端开发工程师"],
  沟通协作: ["项目经理", "产品经理", "运营经理"],
  Figma: ["UI 设计师", "交互设计师", "产品设计师"],
  财务建模: ["财务分析师", "投资分析师", "风控分析师"]
};

const form = document.querySelector("#profileForm");
const majorSelect = document.querySelector("#major");
const citySelect = document.querySelector("#city");
const industrySelect = document.querySelector("#industry");
const skillPicker = document.querySelector("#skillPicker");
const preferencePicker = document.querySelector("#preferencePicker");
const jobList = document.querySelector("#jobList");
const template = document.querySelector("#jobCardTemplate");
const matchCount = document.querySelector("#matchCount");
const totalJobs = document.querySelector("#totalJobs");
const hardMatchJobs = document.querySelector("#hardMatchJobs");
const visibleJobs = document.querySelector("#visibleJobs");
const averageScore = document.querySelector("#averageScore");
const filterReadout = document.querySelector("#filterReadout");
const profileInsight = document.querySelector("#profileInsight");
const overallMeter = document.querySelector("#overallMeter");
const keywordSearch = document.querySelector("#keywordSearch");
const sortControl = document.querySelector("#sortControl");
const detailDialog = document.querySelector("#jobDetailDialog");
const detailBody = document.querySelector("#detailBody");
const closeDetail = document.querySelector("#closeDetail");

let currentSort = "score";
let scoredJobs = [];
let currentProfile = null;
let refreshToken = 0;

function hydrateSelects() {
  majorSelect.innerHTML = Object.entries(majorGroups)
    .map(([group, options]) => {
      const optionHtml = options.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
      return `<optgroup label="${group}">${optionHtml}</optgroup>`;
    })
    .join("");

  citySelect.innerHTML = cities.map((city) => `<option value="${city}">${city}</option>`).join("");
  industrySelect.innerHTML = industries.map((industry) => `<option value="${industry}">${industry}</option>`).join("");

  skillPicker.innerHTML = skills
    .map((skill) => {
      const checked = ["JavaScript", "Python"].includes(skill) ? " checked" : "";
      return `<label><input type="checkbox" value="${skill}"${checked} />${skill}</label>`;
    })
    .join("");

  preferencePicker.innerHTML = preferences
    .map((preference) => {
      const checked = preference === "技术成长" ? " checked" : "";
      return `<label><input type="checkbox" name="preference" value="${preference}"${checked} />${preference}</label>`;
    })
    .join("");

  majorSelect.value = "computer-software";
  citySelect.value = "不限";
  industrySelect.value = "不限";
}

function getProfile() {
  return {
    education: form.education.value,
    major: form.major.value,
    experience: Number(form.experience.value || 0),
    city: form.city.value,
    salaryMin: Number(form.salaryMin.value || 0),
    industry: form.industry.value,
    skills: [...form.querySelectorAll("#skillPicker input:checked")].map((input) => input.value),
    preferences: [...form.querySelectorAll("input[name='preference']:checked")].map((input) => input.value)
  };
}

function getHardFilterStatus(job, profile) {
  const failed = [];
  if (educationRank[profile.education] < educationRank[job.education]) failed.push("学历未达最低要求");
  if (profile.experience < job.minExperience) failed.push("工作年限偏低");
  if (profile.city !== "不限" && profile.city !== job.city && job.city !== "远程") failed.push("城市不匹配");
  if (profile.salaryMin && job.salaryMax < profile.salaryMin) failed.push("薪资低于期望");
  if (profile.industry !== "不限" && profile.industry !== job.industry) failed.push("行业不匹配");
  if (!job.majors.includes(profile.major)) failed.push("专业方向不匹配");
  return failed;
}

function calculateMatch(job, profile) {
  const failed = getHardFilterStatus(job, profile);
  let score = failed.length ? 18 : 42;
  const reasons = [];

  if (!failed.length) {
    reasons.push("通过学历、经验、城市、薪资等硬性条件");
  }

  if (job.majors.includes(profile.major)) {
    score += 28;
    reasons.push("专业方向与岗位要求相关");
  } else {
    score -= 24;
  }

  if (profile.experience >= job.minExperience && profile.experience <= job.maxExperience) {
    score += 12;
    reasons.push("工作年限处在岗位偏好区间");
  } else if (profile.experience > job.maxExperience) {
    score += 7;
    reasons.push("经验高于岗位最低要求");
  }

  const matchedSkills = job.skills.filter((skill) => profile.skills.includes(skill));
  score += matchedSkills.length * 7;
  if (matchedSkills.length) reasons.push(`技能命中：${matchedSkills.join("、")}`);

  const matchedPreferences = job.preferences.filter((item) => profile.preferences.includes(item));
  score += matchedPreferences.length * 5;
  if (matchedPreferences.length) reasons.push(`职业偏好契合：${matchedPreferences.join("、")}`);

  if (profile.city === "不限" || profile.city === job.city || job.city === "远程") {
    score += 6;
  }

  return {
    ...job,
    score: Math.max(0, Math.min(98, score)),
    hardFailed: failed,
    reasons,
    matchedSkills
  };
}

function getMajorLabel(value) {
  for (const options of Object.values(majorGroups)) {
    const found = options.find(([itemValue]) => itemValue === value);
    if (found) return found[1];
  }
  return value;
}

function getProfileTitles(profile) {
  const titles = [
    ...(majorCareerMap[profile.major] || []),
    ...profile.skills.flatMap((skill) => skillCareerMap[skill] || [])
  ];

  if (profile.industry !== "不限") {
    titles.push(`${profile.industry} 产品经理`, `${profile.industry} 运营`, `${profile.industry} 数据分析师`);
  }

  return [...new Set(titles)].slice(0, 18);
}

function getRecommendedSkills(profile, title) {
  const base = profile.skills.length ? profile.skills : ["沟通协作"];
  const titleSkills = [];
  if (/前端|Web|React|Vue/.test(title)) titleSkills.push("JavaScript", "TypeScript", "React", "Vue");
  if (/数据|BI|分析|算法|机器学习|大模型|AI/.test(title)) titleSkills.push("Python", "SQL", "机器学习", "数据分析");
  if (/产品|交互|体验|设计/.test(title)) titleSkills.push("产品分析", "原型设计", "Figma", "沟通协作");
  if (/测试|质量/.test(title)) titleSkills.push("Python", "接口测试", "SQL", "自动化测试");
  if (/嵌入式|C\+\+|硬件|电气|自动化/.test(title)) titleSkills.push("C/C++", "Python", "Linux", "通信协议");
  if (/财务|金融|投资|风控/.test(title)) titleSkills.push("Excel", "SQL", "财务建模", "数据分析");
  if (/运营|市场|增长|内容/.test(title)) titleSkills.push("产品分析", "沟通协作", "SQL", "内容运营");
  return [...new Set([...base, ...titleSkills])].slice(0, 6);
}

function estimateSalary(profile, title) {
  const experience = profile.experience;
  let min = profile.salaryMin || 8;
  if (/算法|大模型|机器学习|量化/.test(title)) min = Math.max(min, 22 + experience * 2);
  else if (/开发|工程师|数据|产品/.test(title)) min = Math.max(min, 14 + experience * 2);
  else if (/设计|运营|市场|HR|招聘|财务/.test(title)) min = Math.max(min, 9 + experience);
  const max = Math.round(min + 8 + Math.min(experience, 8) * 2);
  return [Math.round(min), max];
}

function generatePlatformLeads(profile) {
  const titles = getProfileTitles(profile);
  const city = profile.city === "不限" ? "全国" : profile.city;
  const platforms = Object.keys(platformSearch);
  const majorLabel = getMajorLabel(profile.major);
  const leads = [];

  titles.forEach((title, index) => {
    platforms.forEach((platform, platformIndex) => {
      const [salaryMin, salaryMax] = estimateSalary(profile, title);
      const score = Math.max(68, Math.min(97, 92 - Math.floor(index / 2) - platformIndex));
      leads.push({
        id: `platform-${platform}-${index}`,
        origin: "platform",
        platform,
        title,
        company: platformLabels[platform],
        city,
        district: "实时检索",
        education: profile.education,
        minExperience: Math.max(0, profile.experience - 1),
        maxExperience: Math.max(profile.experience + 3, 3),
        salaryMin,
        salaryMax,
        industry: profile.industry === "不限" ? "全行业" : profile.industry,
        companySize: "来自招聘平台",
        type: "外部职位线索",
        majors: [profile.major],
        skills: getRecommendedSkills(profile, title),
        preferences: profile.preferences,
        responsibilities: [
          `根据「${majorLabel}、${city}、${profile.experience} 年经验、${profile.industry}」生成的招聘平台检索线索。`,
          "点击后将跳转到对应招聘网站的实时搜索结果页，可查看最新在招公司、薪资和岗位描述。",
          "不同招聘平台会根据登录状态、城市编码和推荐策略展示不同结果。"
        ],
        requirements: [
          "请在招聘网站内核对岗位是否仍在招聘。",
          "重点确认薪资范围、工作地点、学历、经验、技能栈和公司资质。",
          "如果平台要求登录或验证码，请以平台页面展示为准。"
        ],
        score,
        hardFailed: [],
        reasons: [`已按专业方向生成「${title}」检索`, `覆盖 ${platformLabels[platform]} 实时招聘结果`, `匹配城市、经验、薪资和技能条件`],
        matchedSkills: profile.skills,
        url: platformSearch[platform]({ title, city })
      });
    });
  });

  return leads;
}

function getApiBase() {
  if (location.protocol === "http:" || location.protocol === "https:") {
    return location.origin;
  }
  return "http://127.0.0.1:8787";
}

function buildJobQuery(profile) {
  const params = new URLSearchParams({
    education: profile.education,
    major: profile.major,
    experience: String(profile.experience),
    city: profile.city,
    salaryMin: String(profile.salaryMin),
    industry: profile.industry,
    skills: profile.skills.join(","),
    preferences: profile.preferences.join(",")
  });
  return params.toString();
}

async function fetchBackendJobs(profile) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 2800);

  try {
    const response = await fetch(`${getApiBase()}/api/jobs?${buildJobQuery(profile)}`, {
      signal: controller.signal,
      cache: "no-store"
    });
    if (!response.ok) return [];
    const payload = await response.json();
    return Array.isArray(payload.jobs) ? payload.jobs : [];
  } catch {
    return [];
  } finally {
    window.clearTimeout(timer);
  }
}

function isExternalJob(job) {
  return job.origin === "platform" || job.origin === "api";
}

function renderJobs() {
  const keyword = keywordSearch.value.trim().toLowerCase();
  const filtered = scoredJobs
    .filter((job) => {
      const haystack = `${job.title} ${job.company} ${job.city} ${job.industry} ${job.skills.join(" ")}`.toLowerCase();
      return haystack.includes(keyword);
    })
    .sort((a, b) => {
      if (currentSort === "salary") return b.salaryMax - a.salaryMax;
      if (currentSort === "experience") return a.minExperience - b.minExperience;
      if (a.hardFailed.length !== b.hardFailed.length) return a.hardFailed.length - b.hardFailed.length;
      return b.score - a.score;
    });

  updateStats(filtered, keyword);
  jobList.innerHTML = "";

  if (!filtered.length) {
    jobList.innerHTML = '<div class="empty-state">没有找到符合当前条件的岗位，请调整城市、行业、技能或关键词。</div>';
    return;
  }

  const fragment = document.createDocumentFragment();

  filtered.forEach((job) => {
    const card = template.content.cloneNode(true);
    const article = card.querySelector(".job-card");
    const scoreBadge = card.querySelector(".score-badge");
    article.dataset.jobId = job.id;
    article.classList.toggle("is-limited", Boolean(job.hardFailed.length));
    article.classList.toggle("is-external", isExternalJob(job));
    card.querySelector(".company").textContent =
      isExternalJob(job) ? `${job.company} · ${job.industry} · 外部数据源` : `${job.company} · ${job.industry}`;
    card.querySelector("h3").textContent = job.title;
    scoreBadge.textContent = job.origin === "api" ? "真实职位" : job.origin === "platform" ? "平台检索" : job.hardFailed.length ? "需确认" : `${job.score}%`;
    scoreBadge.classList.toggle("is-warning", Boolean(job.hardFailed.length));
    card.querySelector(".job-meta").innerHTML = `
      <span>${job.city} ${job.district}</span>
      <span>${educationLabel[job.education]}及以上</span>
      <span>${job.minExperience}-${job.maxExperience} 年</span>
      <span>${job.companySize}</span>
    `;
    card.querySelector(".reason").textContent =
      isExternalJob(job)
        ? `${job.reasons.slice(0, 3).join("；")}。`
        : job.hardFailed.length
          ? `硬性条件待确认：${job.hardFailed.join("、")}。`
          : `${job.reasons.slice(0, 3).join("；")}。`;
    card.querySelector(".skill-row").innerHTML = job.skills
      .map((skill) => `<span class="${job.matchedSkills.includes(skill) ? "is-hit" : ""}">${skill}</span>`)
      .join("");
    card.querySelector(".salary").textContent = `${job.salaryMin}K-${job.salaryMax}K`;
    const actionButton = card.querySelector("button");
    actionButton.textContent = isExternalJob(job) ? "查看原职位" : "查看详情";
    actionButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (isExternalJob(job) && job.url) {
        window.open(job.url, "_blank", "noreferrer");
        return;
      }
      showDetail(job.id);
    });
    article.addEventListener("click", () => showDetail(job.id));
    fragment.appendChild(card);
  });

  jobList.appendChild(fragment);
}

function updateStats(filtered, keyword) {
  const hardMatched = scoredJobs.filter((job) => !job.hardFailed.length);
  const highMatched = filtered.filter((job) => job.score >= 70 && !job.hardFailed.length);
  const average = filtered.length
    ? Math.round(filtered.reduce((sum, job) => sum + job.score, 0) / filtered.length)
    : 0;
  const salaryText = currentProfile.salaryMin ? `${currentProfile.salaryMin}K+` : "不限薪资";
  const skillText = currentProfile.skills.length ? currentProfile.skills.join("、") : "未选技能";
  const keywordText = keyword ? `关键词：${keyword}` : "无关键词";

  matchCount.textContent = highMatched.length;
  totalJobs.textContent = scoredJobs.length;
  hardMatchJobs.textContent = hardMatched.length;
  visibleJobs.textContent = filtered.length;
  averageScore.textContent = `${average}%`;
  filterReadout.textContent = `实时条件：${educationLabel[currentProfile.education]}，${majorSelect.options[majorSelect.selectedIndex].text}，${currentProfile.experience} 年经验，${currentProfile.city}，${salaryText}，${currentProfile.industry}，${keywordText}，技能：${skillText}`;
}

function updateInsights(profile) {
  const hardMatched = scoredJobs.filter((job) => !job.hardFailed.length);
  const top = hardMatched[0] || scoredJobs[0];
  const average = Math.round(scoredJobs.reduce((sum, job) => sum + job.score, 0) / scoredJobs.length);
  const skillText = profile.skills.length ? profile.skills.slice(0, 4).join("、") : "尚未选择技能";

  overallMeter.style.width = `${average}%`;
  profileInsight.textContent = `当前画像偏向 ${skillText}。系统会先推导适合的岗位方向，再生成 BOSS 直聘、智联、前程无忧、猎聘、拉勾等平台的实时检索入口；当前优先方向为「${top.title}」。`;
}

async function refreshMatches() {
  const token = ++refreshToken;
  const profile = getProfile();
  currentProfile = profile;
  const localJobs = jobs.map((job) => calculateMatch(job, profile));
  const platformJobs = generatePlatformLeads(profile);
  const sortJobs = (items) => items.sort((a, b) => {
    if (isExternalJob(a) !== isExternalJob(b)) return isExternalJob(a) ? -1 : 1;
    if (a.hardFailed.length !== b.hardFailed.length) return a.hardFailed.length - b.hardFailed.length;
    return b.score - a.score;
  });

  scoredJobs = sortJobs([...platformJobs, ...localJobs]);
  updateInsights(profile);
  renderJobs();

  const backendJobs = await fetchBackendJobs(profile);
  if (token !== refreshToken || !backendJobs.length) return;

  scoredJobs = sortJobs([...backendJobs, ...localJobs]);
  updateInsights(profile);
  renderJobs();
}

function makePlatformLinks(job) {
  if (isExternalJob(job) && job.url) {
    const title = platformLabels[job.platform] || "招聘平台";
    return `<a href="${job.url}" target="_blank" rel="noreferrer">打开${title}原始结果</a>`;
  }

  return Object.entries(platformSearch)
    .map(([key, makeUrl]) => {
      return `<a href="${makeUrl(job)}" target="_blank" rel="noreferrer">${platformLabels[key]}核实</a>`;
    })
    .join("");
}

function showDetail(jobId) {
  const job = scoredJobs.find((item) => item.id === jobId);
  if (!job) return;

  detailBody.innerHTML = `
    <div class="detail-heading">
      <div>
        <p class="company">${job.company} · ${job.industry}</p>
        <h2>${job.title}</h2>
      </div>
      <div class="score-badge ${job.hardFailed.length ? "is-warning" : ""}">${job.hardFailed.length ? "需确认" : `${job.score}%`}</div>
    </div>
    <div class="job-meta detail-meta">
      <span>${job.city} ${job.district}</span>
      <span>${educationLabel[job.education]}及以上</span>
      <span>${job.minExperience}-${job.maxExperience} 年</span>
      <span>${job.salaryMin}K-${job.salaryMax}K</span>
      <span>${job.companySize}</span>
    </div>
    <section>
      <h3>匹配判断</h3>
      <p>${job.hardFailed.length ? `以下硬性条件需要确认：${job.hardFailed.join("、")}。` : `${job.reasons.join("；")}。`}</p>
    </section>
    <section>
      <h3>岗位职责</h3>
      <ul>${job.responsibilities.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section>
      <h3>任职要求</h3>
      <ul>${job.requirements.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section>
      <h3>技能标签</h3>
      <div class="skill-row">${job.skills.map((skill) => `<span class="${job.matchedSkills.includes(skill) ? "is-hit" : ""}">${skill}</span>`).join("")}</div>
    </section>
    <section>
      <h3>招聘平台核实</h3>
      <p class="verify-note">点击后会带着岗位名和城市跳转到对应招聘平台搜索页，用于核对真实在招岗位、薪资、学历和经验要求。</p>
      <div class="platform-links">${makePlatformLinks(job)}</div>
    </section>
  `;
  detailDialog.showModal();
}

hydrateSelects();
form.addEventListener("submit", (event) => {
  event.preventDefault();
  refreshMatches();
});
form.addEventListener("change", refreshMatches);
form.addEventListener("input", refreshMatches);
keywordSearch.addEventListener("input", renderJobs);
closeDetail.addEventListener("click", () => detailDialog.close());
detailDialog.addEventListener("click", (event) => {
  if (event.target === detailDialog) detailDialog.close();
});

sortControl.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  currentSort = button.dataset.sort;
  sortControl.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
  renderJobs();
});

refreshMatches();
