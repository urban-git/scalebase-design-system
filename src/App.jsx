// src/App.jsx
import React, { useState } from 'react';
// 作成したコンポーネントをインポート
// vite.config.jsでエイリアス設定している場合
import Button from './components/Button/Button';
import Input from './components/Input/Input';

// エイリアス設定していない場合（相対パス）
// import Button from './components/Button/Button';
// import Input from './components/Input/Input';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    alert('ボタンがクリックされました！');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Scalebase UI Kit Preview</h1>

      <h2>Button Component</h2>
      <Button onClick={handleButtonClick}>
        Primary Button
      </Button>
      <div style={{ marginTop: '20px' }}>
        <Button onClick={handleButtonClick} style={{ backgroundColor: '#ccc', color: '#333' }}>
          Secondary Button
        </Button>
      </div>

      <h2 style={{ marginTop: '40px' }}>Input Component</h2>
      <Input
        placeholder="テキストを入力してください"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p style={{ marginTop: '10px' }}>入力値: {inputValue}</p>
    </div>
  );
}

export default App;