import { CommonConstants } from '../../common/constants/CommonConstants'
import PreferenceUtil from '../../common/utils/PreferenceUtil'
import { mineContent } from '../../viewmodel/MineViewModel'
@Preview
@Component
export default struct MineView {

  @State userName: string = ''
  async aboutToAppear(){
    this.userName = await PreferenceUtil.getPreferenceValue(CommonConstants.UserNameKey,"用户名") as string
  }

  build() {
    Column(){
      this.headBuild()
      Divider()
        .width('80%')
      this.contentBuild()

    }
    .justifyContent(FlexAlign.Start)
    .width('100%')
    .height('100%')
  }

  @Builder headBuild(){
    Row({space: CommonConstants.SPACE_10}){
      Image($r('app.media.icon'))
        .width(80)
        .height(80)
      Column({space: CommonConstants.SPACE_10}){
        Text(this.userName)
          .fontSize(20)
          .fontColor($r('app.color.primary_color'))
        Text('用户简介')
          .fontSize(15)
          .fontColor($r('app.color.light_gray'))
      }
      .alignItems(HorizontalAlign.Start)
      .margin({
        top: 20
      })
    }
    .width('90%')
    .alignItems((VerticalAlign.Top))
    .justifyContent(FlexAlign.Start)
    .margin({
      top:30,
      bottom: 20
    })
  }

  @Builder contentBuild(){
    Column(){
      ForEach(
        mineContent,
        (item, value)=>{
          Row({space: CommonConstants.SPACE_10}){
            Image(item.icon)
              .width(40)
              .height(40)
            Text(item.name)
              .fontSize(20)
              .fontWeight(CommonConstants.FONT_WEIGHT_400)
          }
          .width('90%')
          .padding({
            top: 10,
            bottom:10
          })
        }
      )
    }
    .margin({
      top: 20
    })
  }
}