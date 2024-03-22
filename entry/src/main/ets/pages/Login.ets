import promptAction from '@ohos.promptAction'
import router from '@ohos.router'
import { CommonConstants } from '../common/constants/CommonConstants'
import PreferenceUtil from '../common/utils/PreferenceUtil'
import toastUtil from '../common/utils/ToastUtil'

@Styles function loginStyle(){
  .width('80%')
  .height(50)
  .borderWidth(1)
  .borderColor($r('app.color.light_gray'))
  .borderRadius(8)
  .padding({
    left:10,
    right:10
  })
}

@Extend(TextInput) function inputStyle(){
  .backgroundColor(Color.Transparent)
  .placeholderColor(Color.Grey)
  .placeholderFont({ size: 14, weight: 400 })
  .caretColor(Color.Blue)
  .layoutWeight(1)
  .height(40)
  .fontSize(14)
  .fontColor(Color.Grey)
  .margin({
    left:50
  })
}


@Entry
@Component
struct Login {

  private username:string = ""
  private password:string = ""

  async loginAction(){
    focusControl.requestFocus("focus")
    if (this.username.length == 0) {
      toastUtil.showToast('用户名不能为空！')
      return
    }

    if(this.password.length == 0) {
      toastUtil.showToast('密码不能为空！')
      return
    }
    await PreferenceUtil.putPreferenceValue(CommonConstants.LoginKey,true)
    router.replaceUrl({
      url:'pages/Index'
    })
  }

  build() {
    Row() {
      Column({space: 20}) {

        Image($r('app.media.icon'))
          .width(100)
          .margin({
            top:150
          })
        Text('欢迎来到新闻资讯App')
          .fontSize(20)
          .fontWeight(FontWeight.Bold)

        this.loginBuilder()

        Button('登录').onClick((event: ClickEvent) => {
          this.loginAction()
        })
          .width('80%')
          .id('focus')

      }
      .width('100%')
      .height('100%')
    }
    .height('100%')
    .backgroundColor($r('app.color.page_background'))
  }

  @Builder loginBuilder(){
    Stack(){
      Text("手机号")
        .fontColor($r('app.color.light_gray'))
        .fontSize(16)
      TextInput({ placeholder: '请输入手机号' })
        .inputStyle()
        .type(InputType.PhoneNumber)
        .onChange((value: string) => {
          this.username = value
        })

    }
    .alignContent(Alignment.Start)
    .loginStyle()
    .margin({
      top:30
    })
    Stack(){
      Text("密码")
        .fontColor($r('app.color.light_gray'))
        .fontSize(16)
      TextInput({ placeholder: '请输入密码' })
        .inputStyle()
        .type(InputType.Password)
        .onChange((value: string) => {
          this.password = value
        })

    }
    .alignContent(Alignment.Start)
    .loginStyle()
    .margin({
      top:15
    })
  }
}