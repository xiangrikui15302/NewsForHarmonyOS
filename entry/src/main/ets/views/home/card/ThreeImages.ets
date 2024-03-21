import thermal from '@ohos.thermal'
import { CommonConstants } from '../../../common/constants/CommonConstants'
import { HttpConstants } from '../../../common/constants/HttpConstants'
import NewModel from '../../../model/NewModel'
@Component
export default struct ThreeImages {
  @Link newsModel:NewModel
  build() {
    Column({space: CommonConstants.SPACE_10}){
      Text(this.newsModel.title)
        .width('100%')
        .fontSize(20)
        .fontWeight(CommonConstants.FONT_WEIGHT_500)
      this.imageBuilder()
      Text(this.newsModel.author)
        .fontColor($r('app.color.light_gray'))
        .fontSize(12)
      Divider()

    }
    .alignItems(HorizontalAlign.Start)
    .margin({
      top:10,
      bottom:10
    })
  }

  @Builder imageBuilder(){
    Row(){
      ForEach(
        this.newsModel.images,
        (string,index) => {
          Image(HttpConstants.HOSTURL+ this.newsModel.images[index])
            .height(90)
            .width('30%')
        }
      )
    }.justifyContent(FlexAlign.SpaceEvenly)
    .width('100%')
  }
}