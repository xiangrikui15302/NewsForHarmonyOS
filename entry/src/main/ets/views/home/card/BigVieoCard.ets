import { CommonConstants } from '../../../common/constants/CommonConstants'
import { HttpConstants } from '../../../common/constants/HttpConstants'
import NewModel from '../../../model/NewModel'
@Component
export default struct BigVideoCard {
  @Link newsModel:NewModel
  build() {
    Column({space:CommonConstants.SPACE_10}){
      Text(this.newsModel.title)
        .width('100%')
        .fontSize(20)
        .fontWeight(CommonConstants.FONT_WEIGHT_500)

      this.videoBuidler()

      Row({space:CommonConstants.SPACE_10}){
        Text(this.newsModel.author)
          .fontSize(12)
          .fontColor($r('app.color.lightest_gray'))
        Text('2评')
          .fontSize(12)
          .fontColor($r('app.color.lightest_gray'))
      }

      Divider()
    }
    .alignItems(HorizontalAlign.Start)
    .margin({
      top:10,
      bottom:10
    })
  }

  @Builder videoBuidler(){
    Stack(){
      Image(HttpConstants.HOSTURL+ this.newsModel.images[0])
        .width('100%')
        .height(150)
      Image($r('app.media.bofang'))
        .width(50)
        .height(50)
      Row({space:CommonConstants.SPACE_4}){
        Image($r('app.media.guankanliang'))
          .width(15)
          .height(15)
        Text('1456' + " | " + '04:22')
          .fontSize(12)
          .fontColor($r('app.color.light_gray'))
          .margin({
            right:10
          })
      }
      .justifyContent(FlexAlign.End)
      .width('100%')
      .height(50)
      .linearGradient({
        direction: GradientDirection.Bottom, // 渐变方向
        repeating: false, // 渐变颜色是否重复
        colors: [[0x10ffffff, 0.0],[0x40000000, 0.5],[0x80000000, 1.0] ] // 数组末尾元素占比小于1时满足重复着色效果
      })
      .margin({
        top:100
      })

    }
    .width('100%')
    .alignContent(Alignment.Center)
  }
}