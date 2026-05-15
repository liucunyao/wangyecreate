import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const PORT = Number(process.env.PORT || 8787);
const ROOT = process.cwd();

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

const platformLabels = {
  boss: "BOSS 直聘",
  zhilian: "智联招聘",
  job51: "前程无忧",
  liepin: "猎聘",
  lagou: "拉勾招聘"
};

const platformSearch = {
  boss: ({ title, city }) => `https://www.zhipin.com/web/geek/job?query=${encodeURIComponent(title)}&city=${encodeURIComponent(city)}`,
  zhilian: ({ title, city }) => `https://sou.zhaopin.com/?jl=${encodeURIComponent(city)}&kw=${encodeURIComponent(title)}`,
  job51: ({ title, city }) => `https://we.51job.com/pc/search?keyword=${encodeURIComponent(title)}&searchType=2&jobArea=${encodeURIComponent(city)}`,
  liepin: ({ title, city }) => `https://www.liepin.com/zhaopin/?key=${encodeURIComponent(title)}&dq=${encodeURIComponent(city)}`,
  lagou: ({ title, city }) => `https://www.lagou.com/wn/jobs?pn=1&kd=${encodeURIComponent(title)}&city=${encodeURIComponent(city)}`
};

const majorCareerMap = {
  "computer-software": ["前端开发工程师", "后端开发工程师", "全栈开发工程师", "Java 开发工程师", "软件测试工程师"],
  "computer-science": ["软件开发工程师", "算法工程师", "后端研发工程师", "云计算工程师", "数据开发工程师"],
  "network-security": ["网络安全工程师", "安全运营工程师", "渗透测试工程师", "安全开发工程师"],
  iot: ["物联网工程师", "嵌入式软件工程师", "硬件测试工程师", "IoT 平台工程师"],
  ai: ["机器学习工程师", "算法工程师", "大模型应用工程师", "计算机视觉工程师"],
  "data-science": ["数据分析师", "数据开发工程师", "商业分析师", "BI 工程师", "数据产品经理"],
  statistics: ["数据分析师", "风控建模分析师", "统计分析师", "用户研究分析师"],
  math: ["算法工程师", "数据分析师", "量化研究员", "运筹优化工程师"],
  "business-analytics": ["商业分析师", "经营分析师", "数据产品经理", "策略分析师"],
  finance: ["财务分析师", "金融产品经理", "风控分析师", "投资分析师"],
  accounting: ["会计专员", "财务分析专员", "审计助理", "税务专员"],
  economics: ["行业研究员", "经营分析师", "市场研究分析师", "策略分析师"],
  "business-admin": ["产品经理", "运营经理", "项目经理", "管培生"],
  marketing: ["增长运营", "市场营销专员", "品牌策划", "用户运营"],
  hr: ["招聘专员", "HRBP", "人力资源专员", "薪酬绩效专员"],
  "ux-design": ["交互设计师", "用户体验设计师", "产品设计师", "UI 设计师"],
  "visual-design": ["视觉设计师", "品牌设计师", "UI 设计师", "平面设计师"],
  "industrial-design": ["工业设计师", "产品设计师", "结构设计工程师", "CMF 设计师"],
  journalism: ["内容运营", "新媒体运营", "品牌策划", "文案策划"],
  language: ["跨境电商运营", "外贸业务员", "海外市场专员", "本地化运营"],
  mechanical: ["机械工程师", "结构工程师", "工艺工程师", "设备工程师"],
  automation: ["自动化工程师", "电气工程师", "PLC 工程师", "机器人工程师"],
  electrical: ["电气工程师", "硬件工程师", "电力电子工程师", "测试工程师"],
  materials: ["材料工程师", "材料研发工程师", "工艺工程师", "质量工程师"],
  civil: ["土木工程师", "结构工程师", "施工员", "项目工程师"],
  medicine: ["临床研究助理", "医学专员", "医疗产品经理", "医药代表"],
  pharmacy: ["药物分析研究员", "药品注册专员", "临床监察员", "医药研发助理"],
  education: ["课程顾问", "教研专员", "学习规划师", "教育产品经理"],
  psychology: ["用户研究员", "心理咨询助理", "HRBP", "人才测评顾问"]
};

function getProfile(url) {
  const q = url.searchParams;
  return {
    education: q.get("education") || "bachelor",
    major: q.get("major") || "computer-software",
    experience: Number(q.get("experience") || 0),
    city: q.get("city") || "不限",
    salaryMin: Number(q.get("salaryMin") || 0),
    industry: q.get("industry") || "不限",
    skills: q.get("skills") ? q.get("skills").split(",").filter(Boolean) : [],
    preferences: q.get("preferences") ? q.get("preferences").split(",").filter(Boolean) : []
  };
}

function getTitles(profile) {
  const base = majorCareerMap[profile.major] || ["产品经理", "数据分析师", "运营专员"];
  const skills = profile.skills.flatMap((skill) => {
    if (skill === "Python") return ["Python 开发工程师", "数据分析师"];
    if (skill === "SQL") return ["BI 工程师", "数据开发工程师"];
    if (skill === "JavaScript" || skill === "TypeScript") return ["前端开发工程师", "Web 前端工程师"];
    if (skill === "机器学习" || skill === "PyTorch") return ["算法工程师", "机器学习工程师"];
    if (skill === "Figma" || skill === "原型设计") return ["交互设计师", "产品经理"];
    return [];
  });
  return [...new Set([...base, ...skills])].slice(0, 12);
}

function estimateSalary(profile, title) {
  let min = profile.salaryMin || 8;
  if (/算法|大模型|机器学习|量化/.test(title)) min = Math.max(min, 22 + profile.experience * 2);
  else if (/开发|工程师|数据|产品/.test(title)) min = Math.max(min, 14 + profile.experience * 2);
  else min = Math.max(min, 9 + profile.experience);
  return [Math.round(min), Math.round(min + 8 + Math.min(profile.experience, 8) * 2)];
}

function buildPlatformJobs(profile) {
  const city = profile.city === "不限" ? "全国" : profile.city;
  const titles = getTitles(profile);
  return titles.flatMap((title, index) =>
    Object.entries(platformSearch).map(([platform, makeUrl], platformIndex) => {
      const [salaryMin, salaryMax] = estimateSalary(profile, title);
      return {
        id: `server-platform-${platform}-${index}`,
        origin: "platform",
        platform,
        title,
        company: platformLabels[platform],
        city,
        district: "实时检索",
        education: profile.education,
        minExperience: Math.max(0, profile.experience - 1),
        maxExperience: Math.max(3, profile.experience + 3),
        salaryMin,
        salaryMax,
        industry: profile.industry === "不限" ? "全行业" : profile.industry,
        companySize: "来自招聘平台",
        type: "外部职位线索",
        skills: profile.skills.length ? profile.skills : ["沟通协作"],
        preferences: profile.preferences,
        score: Math.max(70, 96 - index - platformIndex),
        hardFailed: [],
        reasons: [`按筛选条件生成「${title}」检索`, `跳转 ${platformLabels[platform]} 查看实时在招岗位`, "请在招聘平台核对最新薪资与要求"],
        responsibilities: ["该卡片是招聘平台实时检索入口，不伪造外部网站职位详情。", "点击后进入招聘网站查看最新公司、薪资和岗位描述。"],
        requirements: ["以招聘平台页面为准。", "建议核对岗位状态、公司资质、地点、薪资和经验要求。"],
        matchedSkills: profile.skills,
        url: makeUrl({ title, city })
      };
    })
  );
}

async function fetchJSearch(profile) {
  const key = process.env.RAPIDAPI_KEY;
  if (!key) return [];
  const title = getTitles(profile)[0];
  const location = profile.city === "不限" ? "China" : `${profile.city}, China`;
  const url = new URL("https://jsearch.p.rapidapi.com/search");
  url.searchParams.set("query", `${title} in ${location}`);
  url.searchParams.set("page", "1");
  url.searchParams.set("num_pages", "1");

  const response = await fetch(url, {
    headers: {
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
      "x-rapidapi-key": key
    }
  });
  if (!response.ok) return [];
  const payload = await response.json();
  return (payload.data || []).slice(0, 20).map((item, index) => ({
    id: `jsearch-${index}-${item.job_id || item.employer_name || item.job_title}`,
    origin: "api",
    platform: "JSearch",
    title: item.job_title || title,
    company: item.employer_name || "招聘平台",
    city: item.job_city || profile.city || "未标注",
    district: item.job_country || "API 职位",
    education: profile.education,
    minExperience: Math.max(0, profile.experience - 1),
    maxExperience: Math.max(3, profile.experience + 3),
    salaryMin: profile.salaryMin || 0,
    salaryMax: profile.salaryMin ? profile.salaryMin + 15 : 0,
    industry: profile.industry === "不限" ? "全行业" : profile.industry,
    companySize: "API 来源",
    type: "真实职位数据",
    skills: profile.skills,
    preferences: profile.preferences,
    score: 92 - Math.min(index, 12),
    hardFailed: [],
    reasons: ["来自职位数据 API", "按当前筛选条件检索", "可跳转原始职位页面核实"],
    responsibilities: [item.job_description || "请打开原职位页面查看完整描述。"],
    requirements: ["以原始职位页面为准。"],
    matchedSkills: profile.skills,
    url: item.job_apply_link || item.job_google_link || ""
  }));
}

async function getApiJobs(profile) {
  const providers = [fetchJSearch];
  const settled = await Promise.allSettled(providers.map((provider) => provider(profile)));
  return settled.flatMap((result) => (result.status === "fulfilled" ? result.value : []));
}

async function handleApiJobs(req, res, url) {
  const profile = getProfile(url);
  const apiJobs = await getApiJobs(profile);
  const fallbackJobs = buildPlatformJobs(profile);
  sendJson(res, {
    ok: true,
    generatedAt: new Date().toISOString(),
    mode: apiJobs.length ? "api+platform" : "platform",
    jobs: [...apiJobs, ...fallbackJobs]
  });
}

function sendJson(res, data, status = 200) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "access-control-allow-origin": "*",
    "cache-control": "no-store"
  });
  res.end(body);
}

async function serveStatic(res, pathname) {
  const requested = pathname === "/" ? "index.html" : pathname.slice(1);
  const filePath = normalize(join(ROOT, requested));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  try {
    const body = await readFile(filePath);
    res.writeHead(200, {
      "content-type": contentTypes[extname(filePath)] || "application/octet-stream",
      "cache-control": "no-store"
    });
    res.end(body);
  } catch {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
}

createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "127.0.0.1"}`);

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET,OPTIONS",
      "access-control-allow-headers": "content-type"
    });
    res.end();
    return;
  }

  try {
    if (url.pathname === "/api/jobs") {
      await handleApiJobs(req, res, url);
      return;
    }

    await serveStatic(res, decodeURIComponent(url.pathname));
  } catch (error) {
    sendJson(res, { ok: false, error: error.message }, 500);
  }
}).listen(PORT, "127.0.0.1", () => {
  console.log(`智岗匹配服务已启动：http://127.0.0.1:${PORT}/`);
});
