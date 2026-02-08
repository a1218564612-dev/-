
import React from 'react';
import { Tool, ToolTag } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <a 
      href={tool.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group bg-white p-8 rounded-[2.5rem] border border-slate-50 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
    >
      {tool.isHot && (
        <span className="absolute top-0 right-0 bg-slate-900 text-white text-[10px] font-bold px-4 py-2 rounded-bl-2xl shadow-lg z-10 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          精选
        </span>
      )}
      
      <div className="flex items-center gap-5 mb-8">
        <div className={`w-14 h-14 rounded-[1.2rem] flex items-center justify-center text-white text-2xl shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${getBrandColor(tool.category)}`}>
          <i className={tool.icon}></i>
        </div>
        <div className="flex-1 overflow-hidden">
          <h3 className="font-bold text-slate-800 text-lg leading-tight truncate group-hover:text-slate-900 transition-colors">{tool.name}</h3>
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1.5">{tool.category}</p>
        </div>
      </div>
      
      <p className="text-slate-500 text-[14px] font-medium leading-relaxed mb-8 flex-1 line-clamp-2">
        {tool.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {tool.tags.map(tag => (
          <span key={tag} className={`text-[10px] px-3 py-1 rounded-lg font-bold transition-all ${getTagStyle(tag)}`}>
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
        <span className="text-[12px] font-bold text-slate-900 flex items-center gap-3 group-hover:gap-5 transition-all">
          进入使用 <i className="fa-solid fa-arrow-right-long"></i>
        </span>
      </div>
    </a>
  );
};

const getTagStyle = (tag: ToolTag) => {
  switch (tag) {
    case '必备': return 'bg-rose-50 text-rose-500';
    case '免费': return 'bg-emerald-50 text-emerald-600';
    case '高效': return 'bg-blue-50 text-blue-600';
    case '创意': return 'bg-purple-50 text-purple-600';
    case '专业': return 'bg-slate-100 text-slate-700';
    default: return 'bg-slate-50 text-slate-400';
  }
};

const getBrandColor = (category: string) => {
  switch (category) {
    case 'AI 助手': return 'bg-slate-800';
    case '办公/PDF': return 'bg-[#ff4d4d]';
    case '设计/绘图': return 'bg-[#6366f1]';
    case '电商 AI': return 'bg-[#f59e0b]';
    case '数据分析': return 'bg-[#0ea5e9]';
    case '搜索研究': return 'bg-[#1e293b]';
    default: return 'bg-slate-800';
  }
};

export default ToolCard;
