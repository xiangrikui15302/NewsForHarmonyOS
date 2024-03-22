import webview from '@ohos.web.webview';
import router from '@ohos.router';
import toastUtil from '../common/utils/ToastUtil';
@Entry
@Component
struct ActivityWebPage {
  webController: webview.WebviewController = new webview.WebviewController();
  @State params: object = router.getParams();
  @State progressVal: number = 0;
  @State isLoading: boolean = true;
  @State intervalLoading: number = -1;

  aboutToAppear() {
    // 开启一个定时器
    this.intervalLoading = setInterval(() => {
      this.progressVal = this.progressVal >= 100 ? 0 : (this.progressVal + 10);
    }, 100);
  }

  build() {
    Column() {
      // Web component loading H5.
      Web({ src: this.params['path'], controller: this.webController })
        .zoomAccess(false)
        .width('100%')
        .aspectRatio(1)
        .margin({ left: 10, right: 10,
          top: 30 })
        .onConfirm((event) => {
          AlertDialog.show({
            message: "恭喜您抽中" + event?.message,
            confirm: {
              value: '确定',
              action: () => {
                event?.result.handleConfirm();
              }
            },
            cancel: () => {
              event?.result.handleCancel();
            }
          });
          return true;
        })
        .onErrorReceive((event) => {
          if (event?.error.getErrorInfo() === 'ERR_INTERNET_DISCONNECTED') {
            toastUtil.showToast("网络连接错误")

          }
          if (event?.error.getErrorInfo() === 'ERR_CONNECTION_TIMED_OUT') {
            toastUtil.showToast("网络超时")

          }
        })
        .onProgressChange((event) => {
          // 加载完成，取消定时器
          if (event?.newProgress === 100) {
            this.isLoading = false;
            clearInterval(this.intervalLoading);
            this.intervalLoading = -1;
          }
        })

      // web加载等待框
      if (this.isLoading) {
        Progress({
          value: 0,
          total: 100,
          type: ProgressType.ScaleRing
        })
          .color(Color.Grey)
          .value(this.progressVal)
          .width(80)
          .style({
            strokeWidth: 15,
            scaleCount: 15,
            scaleWidth: 5
          })
          .zIndex(1)
          .position({
            x: '40%',
            y: '30%'
          })
      }

      Button('点击抽奖')
        .width('90%')
        .onClick(() => {
          this.webController.runJavaScript('startDraw()');
        })
    }
    .width('100%')
    .height('100%')
  }
}