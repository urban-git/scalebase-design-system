// src/components/Button/Button.jsx
import React from 'react';
// さきほど定義したトークンをインポートします
import { colors, fontSizes, fontWeights, spacing } from '../../tokens';

const Button = ({ children, onClick }) => {
  // トークンを使ってスタイルを定義します
  const buttonStyle = {
    backgroundColor: colors.primary.blue,
    color: colors.neutral.white,
    padding: `${spacing['2']} ${spacing['4']}`, // 例: '8px 16px'
    fontSize: fontSizes.base, // 例: '16px'
    fontWeight: fontWeights.bold, // 例: 700
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    // ホバー時のスタイルも追加してみましょう
    ':hover': {
      backgroundColor: colors.primary.darkBlue,
    }
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;