import { CommonConstants } from '../../../common/constants/CommonConstants'
import NewModel from '../../../model/NewModel'
@Component
export default struct LittleCard {
  @Link newsModel:NewModel
  build() {
    Column({space:CommonConstants.SPACE_4}){
      Text(this.newsModel.title)
        .fontSize(20)
        .fontWeight(CommonConstants.FONT_WEIGHT_400)
        .maxLines(1)
        .margin({
          top:8
        })
      Text(this.newsModel.author)
        .fontSize(12)
        .fontColor($r('app.color.light_gray'))
      Divider()
    }
    .alignItems(HorizontalAlign.Start)
  }
}