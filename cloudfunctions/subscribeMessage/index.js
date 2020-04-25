// 云函数入口文件
const cloud = require('wx-server-sdk')
const TcbRouter = require('tcb-router')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const {
      OPENID
    } = cloud.getWXContext()
    const result = await cloud.openapi.subscribeMessage.send({
        touser: OPENID,
        page: `/pages/blog-comment/blog-comment?blogId=${event.blogId}`,
        lang: 'zh_CN',
        data: {
          time01: {
            value: db.serverDate()
          },
          phrase02: {
            value: '评价完成'
          },
          thing03: {
            value: event.content
          }
        },
        templateId: 'k-8AvAjQojx8pGwjdMf-K-iqCXwxz3wx8OErauBhubY',
        miniprogramState: 'developer'
      })
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    return err
  }

  
}