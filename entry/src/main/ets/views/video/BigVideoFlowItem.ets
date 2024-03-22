import { CommonConstants } from '../../common/constants/CommonConstants'
import { HttpConstants } from '../../common/constants/HttpConstants'
import VideoModel from '../../model/VideoModel'
@Component
export default struct BigVideoFlowItem {
  @Link videoModel:VideoModel

  build() {
    Column({space:CommonConstants.SPACE_10}){
      Stack(){
        Image(HttpConstants.HOSTURL+this.videoModel.image)
          .width('100%')
          .height(100)
          // .borderRadius(8)
        Image($r('app.media.ic_play'))
          .width(25)
          .height(25)
      }
      .alignContent(Alignment.Center)
      .width('100%')

      Text(this.videoModel.title)
        .fontColor(Color.Gray)
        .fontSize(15)
        .margin({
          left:'10%',
          right:'10%',
          bottom:10
        })

    }
    .alignItems(HorizontalAlign.Start)
    .borderRadius(8)
    .backgroundColor($r('app.color.lightest_gray'))
    .clip(true)
  }
}