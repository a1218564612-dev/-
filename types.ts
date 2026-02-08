
export enum ToolCategory {
  AI_CHAT = 'AI 助手',
  OFFICE_PDF = '办公/PDF',
  DESIGN_IMAGE = '设计/绘图',
  ECOMMERCE = '电商 AI',
  DATA_ANALYSIS = '数据分析',
  SEARCH = '搜索研究'
}

export type ToolTag = '必备' | '创意' | '免费' | '高效' | '专业' | '热门';

export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  category: ToolCategory;
  tags: ToolTag[];
  isHot?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
