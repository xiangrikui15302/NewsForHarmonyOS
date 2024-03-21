import { CommonConstants } from '../../../common/constants/CommonConstants'
@Component
export default struct LittleCard {
  build() {
    Column({space:CommonConstants.SPACE_4}){
      Text('我是标题我是标题我是标题我是标题我是标题我是标题')
        .fontSize(20)
        .fontWeight(CommonConstants.FONT_WEIGHT_400)
        .maxLines(1)
        .margin({
          top:8
        })
      Text('我是作者我是作者')
        .fontSize(12)
        .fontColor($r('app.color.light_gray'))
    }
    .alignItems(HorizontalAlign.Start)
  }
}