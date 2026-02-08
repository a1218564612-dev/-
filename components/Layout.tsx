
import React, { useState } from 'react';
import { ToolCategory } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeCategory: ToolCategory | '全部';
  onCategoryChange: (category: ToolCategory | '全部') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeCategory, 
  onCategoryChange,
  searchQuery,
  onSearchChange 
}) => {
  const categories = ['全部', ...Object.values(ToolCategory)];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  };

  const [time, setTime] = React.useState(getTime());

  React.useEffect(() => {
    const interval = setInterval(() => setTime(getTime()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#fbfcfd]">
      {/* 移动端页头 */}
      <header className="md:hidden glass fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">影</span>
          </div>
          <span className="font-bold text-slate-900">智能办公空间</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-slate-600"
        >
          <i className={`fa-solid ${isSidebarOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
        </button>
      </header>

      {/* 侧边栏 */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-72 glass border-r border-slate-100 transform transition-transform duration-500 ease-in-out
        md:translate-x-0 md:static md:block
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col p-8">
          <div className="hidden md:flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl shadow-slate-200">
              <span className="text-white font-bold text-2xl">影</span>
            </div>
            <div>
              <h1 className="font-bold text-slate-900 text-lg tracking-tight">智能办公空间</h1>
            </div>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
            <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.2em] mb-6 ml-4">分类</p>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onCategoryChange(cat as any);
                  setIsSidebarOpen(false);
                }}
                className={`
                  w-full text-left px-5 py-3.5 rounded-2xl transition-all duration-300 flex items-center gap-4 text-[14px] font-medium
                  ${activeCategory === cat 
                    ? 'bg-slate-900 text-white shadow-2xl shadow-slate-300 translate-x-1' 
                    : 'text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-sm'}
                `}
              >
                <i className={`fa-solid ${getCategoryIcon(cat)} w-5 text-center text-[16px]`}></i>
                {cat}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-slate-50">
            <div className="bg-slate-50/50 p-6 rounded-[2rem] flex flex-col items-center text-center">
              <span className="text-2xl font-bold text-slate-800 tracking-tight">{time}</span>
              <p className="text-[11px] text-slate-400 font-medium mt-1">
                {new Date().toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'long' })}
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* 主内容区 */}
      <main className="flex-1 pt-20 md:pt-0 p-6 md:p-12 transition-all duration-300 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-2">
                {activeCategory === '全部' ? '全能工作台' : activeCategory}
              </h2>
              <p className="text-slate-400 font-medium text-[15px]">专注于电商效率与 AI 智能赋能</p>
            </div>
            <div className="relative group w-full lg:w-96">
              <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-slate-900 transition-colors"></i>
              <input 
                type="text" 
                placeholder="搜索工具..." 
                className="pl-14 pr-6 py-4 bg-white border border-slate-100 rounded-[1.5rem] w-full focus:ring-8 focus:ring-slate-50 focus:border-slate-300 outline-none transition-all shadow-sm text-[14px]"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};

const getCategoryIcon = (cat: string) => {
  switch (cat) {
    case '全部': return 'fa-layer-group';
    case ToolCategory.AI_CHAT: return 'fa-microchip';
    case ToolCategory.OFFICE_PDF: return 'fa-file-signature';
    case ToolCategory.DESIGN_IMAGE: return 'fa-swatchbook';
    case ToolCategory.ECOMMERCE: return 'fa-bag-shopping';
    case ToolCategory.DATA_ANALYSIS: return 'fa-chart-line';
    case ToolCategory.SEARCH: return 'fa-compass';
    default: return 'fa-circle';
  }
};

export default Layout;
