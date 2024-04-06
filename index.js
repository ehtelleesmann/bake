// utils.js

// 1. 校验邮箱地址
const validateEmail = (email) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(email);
};

// 2. 校验手机号码
const validatePhone = (phone) => {
  const regex = /^\d{3}-\d{3}-\d{4}$/;
  return regex.test(phone);
};

// 3. 校验URL地址
const validateURL = (url) => {
  const regex = /^(http|https):\/\/[a-z0-9]+([\-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(([0-9]{1,5})?\/.*)?$/i;
  return regex.test(url);
};

// 4. 随机生成指定长度的字符串
const generateRandomString = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// 5. 截取字符串的前n个字符
const truncateString = (str, n) => {
  return str.slice(0, n);
};

// 6. 判断一个数字是否为偶数
const isEven = (number) => {
  return number % 2 === 0;
};

// 7. 将字符串反转
const reverseString = (str) => {
  return str.split('').reverse().join('');
};

// 8. 数组去重
const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

// 9. 判断一个字符串是否为回文字符串
const isPalindrome = (str) => {
  const reversedStr = reverseString(str);
  return str === reversedStr;
};

// 10. 获取当前日期的字符串表示
const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

module.exports = {
  validateEmail,
  validatePhone,
  validateURL,
  generateRandomString,
  truncateString,
  isEven,
  reverseString,
  removeDuplicates,
  isPalindrome,
  getCurrentDate
};
