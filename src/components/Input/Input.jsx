// src/components/Input/Input.jsx
import React from 'react';
import { Primitive } from '@radix-ui/react-primitive'; // Primitiveをインポート
import styles from './Input.module.css'; // CSS Modulesをインポート

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  ...props
}) => {
  // CSS Modulesのクラス名を適用
  const className = `${styles.input} ${disabled ? styles.disabled : ''}`; // disabledクラスも追加

  return (
    // <input>の代わりにPrimitive.inputを使用
    <Primitive.input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props} // 残りのpropsを渡す
    />
  );
};

export default Input;