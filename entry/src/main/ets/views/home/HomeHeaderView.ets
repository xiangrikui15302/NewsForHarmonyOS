import { CommonConstants } from '../../common/constants/CommonConstants'
import { NavigatorModel } from '../../viewmodel/NavigatorModel'

@Component
export default struct HomeHeaderView {
  build() {
    Row({space: CommonConstants.SPACE_8}){

      Stack(){
        Image($r('app.media.icon'))
          .width(40)
        TextInput({
          placeholder: '搜一搜你感兴趣的内容'
        })
          .padding({
            left: 30,
            right: 5
          })
          .margin({
            left:20
          })
      }
      .layoutWeight(1)
      .alignContent(Alignment.Start)

      Navigator({ target: CommonConstants.WEB_PAGE_URI, type: NavigationType.Push }) {
        Image($r('app.media.xinshouhuodong'))
          .width(40)

      }
      .params({ path: CommonConstants.LOCAL_PATH, tips: '(本地)' } as NavigatorModel)



    }
    .width('90%')
    .height('100%')
    .justifyContent(FlexAlign.SpaceBetween)
    .backgroundColor(Color.White)
  }
}