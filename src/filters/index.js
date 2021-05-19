/*
 * @Author: kim
 * @Date: 2021-04-07 14:39:23
 * @LastEditors: kim
 * @LastEditTime: 2021-04-12 20:32:04
 * @FilePath: /bagels-finance/src/filters/index.js
 */

//空值转换
export const holder = (value, payload = "-") => {
  return value ? value : payload;
};

//隐藏账号中间位数
export const hiddenDots = (value) => {
  return value ? value.substring(0, 4) + '...' + value.substring(38) : '';

};