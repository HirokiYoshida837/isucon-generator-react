/**
 * TypeScriptでMath.random() を扱いやすくするためのユーティリティ
 * <br/>
 * refs from : https://qiita.com/FAL/items/9fd36e594608af6ab36a
 */


/**
 *  [0, maxInt) の範囲でランダムな整数を返す関数
 *
 */
export const randomInt = (maxInt: number) => Math.floor(Math.random() * maxInt);
