import thermal from '@ohos.thermal'
import { CommonConstants } from '../../../common/constants/CommonConstants'
import NewModel from '../../../common/model/NewModel'
@Component
export default struct ThreeImages {
  @State news: NewModel = new NewModel()
  build() {
    Column({space: CommonConstants.SPACE_10}){
      Text('我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题')
        .width('100%')
        .fontSize(20)
        .fontWeight(CommonConstants.FONT_WEIGHT_500)
      this.imageBuilder()
      Text("我是作者")
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
        // this.news.images,
        ['','',''],
        (string,index) => {
          Image($r('app.media.icon'))
            .height(90)
            .width('30%')
        }
      )
    }.justifyContent(FlexAlign.SpaceEvenly)
    .width('100%')
  }
}