import { CommonConstants } from '../../../common/constants/CommonConstants'
import NewModel from '../../../model/NewModel'
@Component
export default struct LittleVideoCard {
  @Link newsModel:NewModel
  build() {
    Column({space:CommonConstants.SPACE_10}){
      Row({space:CommonConstants.SPACE_10}){
        Column({space:CommonConstants.SPACE_10}){
          Text(this.newsModel.title)
          Text(this.newsModel.author + '   21小时前')
            .fontSize(12)
            .fontColor($r('app.color.light_gray'))
        }
        .layoutWeight(1)
        .alignItems(HorizontalAlign.Start)
        this.videoBuilder()

      }
      .width('100%')
      .justifyContent(FlexAlign.SpaceBetween)
      Divider()
    }
    .width('100%')
    .margin({
      top: 10,
      bottom: 10
    })

  }
  @Builder videoBuilder(){
    Stack(){
      Image($r('app.media.welcome'))
        .width(100)
        .height(75)
      Row(){
        Image($r('app.media.bofang'))
          .width(12)
          .width(12)
        Text('10:00')
          .fontColor($r('app.color.light_gray'))
          .fontSize(12)
      }
      .borderRadius(10)
      .backgroundColor($r('app.color.opacity_blank_66'))
      .padding({
        left:8,
        right:8,
        top:2,
        bottom:2
      })
      .margin({
        right:6,
        bottom:4
      })
    }
    .alignContent(Alignment.BottomEnd)
  }
}