// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()


// 云函数入口函数
// exports.main = async(event, context) => {
//   const {
//     OPENID
//   } = cloud.getWXContext()

//   const result = await cloud.openapi.templateMessage.send({
//     touser: OPENID,
//     page: `/pages/blog-comment/blog-comment?blogId=${event.blogId}`,
//     data: {
//       keyword1: {
//         value: '评价完成'
//       },
//       keyword2: {
//         value: event.content
//       }
//     },
//     templateId: 'k-8AvAjQojx8pGwjdMf-K-iqCXwxz3wx8OErauBhubY',
//     formId: event.formId
//   })
//   return result
// }

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
          time1: {
            value: event.time
          },
          phrase2: {
            value: '评价完成'
          },
          thing3: {
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