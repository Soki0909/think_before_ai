// ポップアップのHTMLを作成
const popup = document.createElement('div');
popup.id = 'ai-usage-alert-overlay';
popup.innerHTML = `
  <div class="ai-usage-alert-popup">
    <p>その作業、<br>本当に生成AIが必要ですか...？</p>
    <button id="ai-usage-alert-close">はい、必要です</button>
  </div>
`;
document.body.appendChild(popup);

// ポップアップを閉じる関数
function closePopup() {
  const popupElement = document.getElementById('ai-usage-alert-overlay');
  if (popupElement) {
    popupElement.style.display = 'none';
  }
}

// 「はい、必要です」ボタンがクリックされたら閉じる
document.getElementById('ai-usage-alert-close').addEventListener('click', closePopup);