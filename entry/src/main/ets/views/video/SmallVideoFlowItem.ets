import { HttpConstants } from '../../common/constants/HttpConstants'
import VideoModel from '../../model/VideoModel'
@Component
export default struct SmallVideoFlowItem {
  @Link videoModel:VideoModel

  build() {
    Stack(){
      Stack(){
        Image(HttpConstants.HOSTURL+this.videoModel.image)
          .width('100%')
          .height('100%')
          .borderRadius(10)
        Image($r('app.media.ic_play'))
          .width(25)
          .height(25)
      }
      .alignContent(Alignment.Center)
      .width('100%')
      .height('100%')

      Text(this.videoModel.title)
        .fontSize(15)
        .fontColor(Color.White)
        .width('90%')
        .maxLines(2)
        .margin({
          left:'10%',
          right:'10%',
          bottom:10
        })
    }
    .alignContent(Alignment.Bottom)
    .width('100%')
    .height(200)

  }
}