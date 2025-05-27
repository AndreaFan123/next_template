module.exports = {
  types: [
    { type: 'feat', section: '✨ Features | 新功能' },
    { type: 'fix', section: '🐛 Bug Fixes | 修復 Bug' },
    { type: 'docs', section: '📝 Documentation | 文件變更' },
    { type: 'style', section: '🎨 Styles | 程式碼格式' },
    { type: 'refactor', section: '♻️ Code Refactoring | 程式碼重構' },
    {
      type: 'perf',
      section: '⚡ Performance Improvements | 改善效能的程式碼變更',
    },
    { type: 'test', section: '✅ Tests | 新增或修正測試' },
    { type: 'revert', section: '⏪ Revert | 回退先前的提交' },
    {
      type: 'build',
      section: '📦 Build System | 影響構建系統或外部依賴的變更',
    },
    {
      type: 'chore',
      section: '🔧 chore | 其他不修改 src 或測試文件的變更',
    },
    {
      type: 'ci',
      section: '👷 Continuous Integration | CI 配置',
    },
  ],
  skip: {
    bump: true,
    changelog: false,
    commit: true,
    tag: true,
  },
};
