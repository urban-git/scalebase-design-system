// src/components/Input/Input.jsx
import React from 'react';
// デザイントークンをインポート
import { colors, fontSizes, spacing, borderRadii } from '../../tokens'; // borderRadiiを仮定（後で追加）

const Input = ({ type = 'text', placeholder, value, onChange }) => {
  // トークンを使ってスタイルを定義
  const inputStyle = {
    padding: `${spacing['2']} ${spacing['3']}`, // 例: '8px 12px'
    fontSize: fontSizes.base,
    border: `1px solid ${colors.neutral.gray300}`,
    borderRadius: '4px', // トークン化を検討 (例: borderRadii.sm)
    width: '100%', // 親要素に合わせる
    boxSizing: 'border-box', // paddingを含めてwidth 100%にする
  };

  // フォーカス時のスタイル（例）
  // const focusStyle = {
  //   outline: 'none',
  //   borderColor: colors.primary.blue,
  //   boxShadow: `0 0 0 2px ${colors.primary.lightBlue}`, // フォーカスリング
  // };
  // (注: focusスタイルはCSS ModulesやStyled Componentsの方が管理しやすいです)

  return (
    <input
      type={type}
      style={inputStyle}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;