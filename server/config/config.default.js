'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1536859564199_3953';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      ignoreJSON: false,
    },
  };

  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'admin',
      password: '', // admin用户的初始密码请到云服务详情页的“数据库”标签页查看
      database: 'sample',
    },
    app: true,
    agent: false,
  };

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/sample',
      options: {
        user: 'admin',
        pass: '', // admin用户的初始密码请到云服务详情页的“数据库”标签页查看
        useNewUrlParser: true,
      },
    },
  };

  return config;
};
