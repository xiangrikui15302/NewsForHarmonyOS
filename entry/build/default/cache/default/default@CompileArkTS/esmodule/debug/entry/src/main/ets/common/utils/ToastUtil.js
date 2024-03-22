import promptAction from '@ohos:promptAction';
class ToastUtil {
    showToast(message) {
        promptAction.showToast({
            message: message,
            duration: 2000,
            bottom: '100'
        });
    }
}
let toastUtil = new ToastUtil();
export default toastUtil;
//# sourceMappingURL=ToastUtil.js.map