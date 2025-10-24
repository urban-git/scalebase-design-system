// src/components/Button/Button.jsx
import React from 'react';
import { Primitive } from '@radix-ui/react-primitive'; // Radix UIのPrimitiveをインポート
import styles from './Button.module.css'; // CSS Modulesをインポート

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  asChild = false, // Radix UI特有のProp
  ...props // onClickなども含む残りのprops
}) => {
  // CSSクラス名を動的に組み立てる
  const classNames = [
    styles.base, // 共通スタイル
    styles[variant] || styles.primary, // バリアントスタイル (存在しない場合はprimaryを適用)
    styles[size] || styles.md,         // サイズスタイル (存在しない場合はmdを適用)
    disabled ? styles.disabled : '', // disabledスタイル
  ].filter(Boolean).join(' '); // filter(Boolean)で空文字を除去し、スペースで結合

  // asChild propに応じて、レンダリングする要素をPrimitive.buttonまたはPrimitive.spanに切り替え
  const Comp = asChild ? Primitive.span : Primitive.button;

  return (
    // Primitiveコンポーネントを使用
    <Comp
      className={classNames} // CSS Modulesのクラス名を適用
      disabled={disabled}
      {...props} // 残りのprops（onClickなど）を渡す
    >
      {children}
    </Comp>
  );
};

export default Button;