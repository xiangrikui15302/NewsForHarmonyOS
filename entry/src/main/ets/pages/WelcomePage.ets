
import router from '@ohos.router'
import { CommonConstants } from '../common/constants/CommonConstants'
import PreferenceUtil from '../common/utils/PreferenceUtil'
/**
 * 欢迎页（启动页）
 */

@Entry
@Component
struct WelcomePage {
  @State message: string = 'Hello World'

  async aboutToAppear(){

    // let isLogin = await PreferenceUtil.getPreferenceValue(CommonConstants.LoginKey,false)
    // console.log(isLogin+" isLogin")
    // if(isLogin){
      this.jumpToPage('pages/Index')
    // } else {
    //   this.jumpToPage('pages/Login')
    // }

  }

  build() {
    Row() {
      Column() {
        Image($r("app.media.welcome"))
          .width('100%')
          .height('100%')
          .objectFit(ImageFit.Fill)
      }
      .width('100%')
    }
    .height('100%')
  }

  jumpToPage(url: string){
    setTimeout(() => {
      router.replaceUrl({
        url: url
      })
    },2000)
  }

}