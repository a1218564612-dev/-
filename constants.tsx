
import { Tool, ToolCategory } from './types';

export const TOOLS_DATA: Tool[] = [
  // AI Chat
  { id: 'gemini', name: 'Google Gemini', description: 'Google 官方 AI，支持强大的多模态理解与实时搜索。', url: 'https://gemini.google.com', icon: 'fa-solid fa-sparkles', category: ToolCategory.AI_CHAT, tags: ['必备', '专业', '创意'], isHot: true },
  { id: 'deepseek', name: 'DeepSeek', description: '国产之光，推理能力极强，完全免费。', url: 'https://chat.deepseek.com', icon: 'fa-solid fa-brain', category: ToolCategory.AI_CHAT, tags: ['必备', '免费', '高效'], isHot: true },
  { id: 'kimi', name: 'Kimi', description: '超长上下文，擅长整理长文档和研报。', url: 'https://kimi.moonshot.cn', icon: 'fa-solid fa-moon', category: ToolCategory.AI_CHAT, tags: ['必备', '高效'] },
  { id: 'qwen', name: '通义千问', description: '阿里出品，全能型 AI 助手。', url: 'https://tongyi.aliyun.com', icon: 'fa-solid fa-cloud', category: ToolCategory.AI_CHAT, tags: ['高效', '专业'] },

  // E-commerce AI
  { id: 'weshop', name: 'WeShop', description: '电商 AI 模特/产品图实景生成，节省商业拍摄成本。', url: 'https://www.weshop.com', icon: 'fa-solid fa-shirt', category: ToolCategory.ECOMMERCE, tags: ['专业', '创意'], isHot: true },
  { id: 'flair', name: 'Flair.ai', description: '专为品牌设计，一键生成高质量电商产品主图。', url: 'https://flair.ai', icon: 'fa-solid fa-wand-magic-sparkles', category: ToolCategory.ECOMMERCE, tags: ['创意', '专业'] },
  { id: 'aliprice', name: 'AliPrice', description: '电商选品/价格追踪利器，支持多平台搜同款。', url: 'https://www.aliprice.com', icon: 'fa-solid fa-tags', category: ToolCategory.ECOMMERCE, tags: ['必备', '高效'] },
  { id: 'pixelcut', name: 'Pixelcut', description: 'AI 自动扣图，快速制作电商产品卡片。', url: 'https://www.pixelcut.ai', icon: 'fa-solid fa-scissors', category: ToolCategory.ECOMMERCE, tags: ['免费', '高效'] },

  // Office & PDF
  { id: 'ilovepdf', name: 'iLovePDF', description: '最全的 PDF 在线处理工具：合并、拆分、压缩、转置。', url: 'https://www.ilovepdf.com/zh-cn', icon: 'fa-solid fa-file-pdf', category: ToolCategory.OFFICE_PDF, tags: ['必备', '免费'], isHot: true },
  { id: 'flowus', name: 'FlowUs', description: '国产 Notion，适合做电商知识库和团队协作。', url: 'https://flowus.cn', icon: 'fa-solid fa-water', category: ToolCategory.OFFICE_PDF, tags: ['专业', '高效'] },
  { id: 'notion', name: 'Notion', description: '多合一办公空间，支持海量模板。', url: 'https://www.notion.so', icon: 'fa-solid fa-book-open', category: ToolCategory.OFFICE_PDF, tags: ['必备', '专业'] },

  // Design & Image
  { id: 'liblib', name: 'Liblib', description: '中国领先的 AI 创作社区，海量模型免费用。', url: 'https://www.liblib.art', icon: 'fa-solid fa-image', category: ToolCategory.DESIGN_IMAGE, tags: ['创意', '免费'], isHot: true },
  { id: 'canvas', name: 'Canva 可画', description: '傻瓜式海报设计，包含大量电商模版。', url: 'https://www.canva.cn', icon: 'fa-solid fa-palette', category: ToolCategory.DESIGN_IMAGE, tags: ['必备', '创意'] },

  // Data Analysis
  { id: 'chat-excel', name: 'ChatExcel', description: '通过聊天的方式处理 Excel 表格数据。', url: 'https://chatexcel.com', icon: 'fa-solid fa-table', category: ToolCategory.DATA_ANALYSIS, tags: ['高效', '免费'] },
  { id: 'vanna', name: 'Vanna.ai', description: '通过自然语言生成 SQL 进行数据查询。', url: 'https://vanna.ai', icon: 'fa-solid fa-database', category: ToolCategory.DATA_ANALYSIS, tags: ['专业'] },

  // Search & Research
  { id: 'metaso', name: '秘塔搜索', description: '结构化搜索，直接给出答案，无广告干扰。', url: 'https://metaso.cn', icon: 'fa-solid fa-magnifying-glass-chart', category: ToolCategory.SEARCH, tags: ['必备', '高效'], isHot: true },
  { id: 'deepl', name: 'DeepL', description: '公认最精准的翻译工具，出海必备。', url: 'https://www.deepl.com', icon: 'fa-solid fa-language', category: ToolCategory.SEARCH, tags: ['必备', '免费'] },
];
