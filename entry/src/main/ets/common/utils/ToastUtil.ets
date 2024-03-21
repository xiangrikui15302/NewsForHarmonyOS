import promptAction from '@ohos.promptAction'
class ToastUtil{
  showToast(message:string){
    promptAction.showToast({
      message:message,
      duration:2000,//默认1500
      bottom:'100'
    })
  }
}

let toastUtil = new ToastUtil()
export default toastUtil as ToastUtil

