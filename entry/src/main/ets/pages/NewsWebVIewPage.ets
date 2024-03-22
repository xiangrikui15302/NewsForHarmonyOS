import web_webview from '@ohos.web.webview'
import router from '@ohos.router'
@Entry
@Component
export default struct NewsWebVIewPage {
  webUrl: string = router.getParams()["webUrl"]
  private controller:web_webview.WebviewController = new web_webview.WebviewController()

  build() {
    Row() {
      Web({
        src:this.webUrl,
        controller:this.controller
      })

        .width('100%')
        .height('100%')

    }
    .height('100%')
  }
}