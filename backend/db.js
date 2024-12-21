const mariadb = require('mariadb');

// إعدادات الاتصال بقاعدة البيانات
const pool = mariadb.createPool({
  host: 'localhost', // عنوان السيرفر
  user: 'fares',      // اسم المستخدم
  password: 'maria',      // كلمة المرور
  database: 'NoteKeeper', // اسم قاعدة البيانات
});


module.exports = pool;
