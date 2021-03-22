/*
 * @Author: your name
 * @Date: 2021-03-22 14:40:19
 * @LastEditTime: 2021-03-22 14:52:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/vue.config.js
 */
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://www.yuque.com",
        changeOrigin: true,
        pathRewrite: {
          // ["^" + "/api"]: "https://www.yuque.com",
        },
      },
    },
  },
};
