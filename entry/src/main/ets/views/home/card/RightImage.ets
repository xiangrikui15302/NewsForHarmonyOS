import { CommonConstants } from '../../../common/constants/CommonConstants'
@Component
export default struct RightImage {
  build() {
    Column(){
      Row({space:CommonConstants.SPACE_10}){
        Column(){
          Text('我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容')

          Text('我是作者')
            .fontColor($r('app.color.light_gray'))
            .fontSize(12)
            .margin({
              top:10
            })
        }
        .layoutWeight(1)
        .alignItems(HorizontalAlign.Start)
        Image($r('app.media.app_icon'))

          .width(80)
          .height(50)

      }
      .width('100%')
      .alignItems(VerticalAlign.Top)
      .justifyContent(FlexAlign.SpaceBetween)

      Divider()
        .backgroundColor($r('app.color.page_background'))
        // .height(0.5)
        .margin({
          top:10
        })
    }
    .margin({
      top:10,
      bottom:10
    })


  }
}