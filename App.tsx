
import React, { useState, useMemo } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import ToolCard from './components/ToolCard';
import AIAssistant from './components/AIAssistant';
import { TOOLS_DATA } from './constants';
import { ToolCategory, ToolTag } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ToolCategory | '全部'>('全部');
  const [activeTag, setActiveTag] = useState<ToolTag | '全部'>('全部');
  const [searchQuery, setSearchQuery] = useState('');

  const tags: (ToolTag | '全部')[] = ['全部', '必备', '免费', '高效', '创意', '专业'];

  const filteredTools = useMemo(() => {
    return TOOLS_DATA.filter(tool => {
      const matchesCategory = activeCategory === '全部' || tool.category === activeCategory;
      const matchesTag = activeTag === '全部' || tool.tags.includes(activeTag as ToolTag);
      const searchTerms = searchQuery.toLowerCase();
      const matchesSearch = 
        tool.name.toLowerCase().includes(searchTerms) || 
        tool.description.toLowerCase().includes(searchTerms) ||
        tool.tags.some(t => t.toLowerCase().includes(searchTerms));
      
      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [activeCategory, activeTag, searchQuery]);

  return (
    <Router>
      <Layout 
        activeCategory={activeCategory} 
        onCategoryChange={(cat) => { setActiveCategory(cat); setActiveTag('全部'); }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      >
        {/* 标签过滤栏 */}
        <div className="flex flex-wrap gap-2.5 mb-12 items-center bg-white/40 p-4 rounded-[1.8rem] border border-white shadow-sm">
          <span className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.2em] px-4 border-r border-slate-200 mr-2">筛选</span>
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`
                px-6 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300
                ${activeTag === tag 
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-200 scale-105' 
                  : 'bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-900 border border-slate-50'}
              `}
            >
              {tag}
            </button>
          ))}
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-24">
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center mb-8 shadow-inner border border-slate-50">
              <i className="fa-solid fa-cloud-moon text-3xl text-slate-200"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800">暂未收录相关工具</h3>
            <p className="text-slate-400 mt-3 max-w-xs text-sm font-medium">您可以尝试更换搜索词，或查看其他分类。</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('全部'); setActiveTag('全部');}}
              className="mt-10 px-10 py-4 bg-slate-900 text-white rounded-[1.2rem] font-bold shadow-2xl shadow-slate-200 hover:opacity-90 transition-all text-sm"
            >
              重置所有条件
            </button>
          </div>
        )}
        
        <footer className="mt-20 py-16 border-t border-slate-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">影</div>
                <p className="text-[17px] text-slate-900 font-bold tracking-tight">影的智能办公空间</p>
              </div>
              <p className="text-[12px] text-slate-400 font-medium leading-relaxed">为个人与电商从业者构建的高效数字工作台</p>
            </div>
            <div className="flex flex-wrap justify-center gap-12">
               <div className="text-center">
                 <p className="text-[10px] text-slate-300 font-bold tracking-widest mb-2">系统状态</p>
                 <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <p className="text-[13px] text-slate-800 font-bold">运行中</p>
                 </div>
               </div>
               <div className="text-center">
                 <p className="text-[10px] text-slate-300 font-bold tracking-widest mb-2">版本标识</p>
                 <p className="text-[13px] text-slate-800 font-bold">2.5.0 正式版</p>
               </div>
               <div className="text-center">
                 <p className="text-[10px] text-slate-300 font-bold tracking-widest mb-2">持有人</p>
                 <p className="text-[13px] text-slate-800 font-bold underline underline-offset-4 decoration-slate-200">王国友 (影)</p>
               </div>
            </div>
          </div>
          <div className="mt-16 pt-10 border-t border-slate-50 text-center">
            <p className="text-[11px] text-slate-300 font-bold tracking-[0.4em]">
              版权所有 &copy; {new Date().getFullYear()} 王国友 | 影
            </p>
          </div>
        </footer>

        <AIAssistant />
      </Layout>
    </Router>
  );
};

export default App;
