import router from '@ohos:router';
import { CommonConstants } from '@bundle:com.yuzhaopan.news/entry/ets/common/constants/CommonConstants';
import PreferenceUtil from '@bundle:com.yuzhaopan.news/entry/ets/common/utils/PreferenceUtil';
import toastUtil from '@bundle:com.yuzhaopan.news/entry/ets/common/utils/ToastUtil';
function __TextInput__inputStyle() {
    TextInput.backgroundColor(Color.Transparent);
    TextInput.placeholderColor(Color.Grey);
    TextInput.placeholderFont({ size: 14, weight: 400 });
    TextInput.caretColor(Color.Blue);
    TextInput.layoutWeight(1);
    TextInput.height(40);
    TextInput.fontSize(14);
    TextInput.fontColor(Color.Grey);
    TextInput.margin({
        left: 50
    });
}
class Login extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.username = "";
        this.password = "";
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.username !== undefined) {
            this.username = params.username;
        }
        if (params.password !== undefined) {
            this.password = params.password;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    async loginAction() {
        focusControl.requestFocus("focus");
        if (this.username.length == 0) {
            toastUtil.showToast('用户名不能为空！');
            return;
        }
        if (this.password.length == 0) {
            toastUtil.showToast('密码不能为空！');
            return;
        }
        await PreferenceUtil.putPreferenceValue(CommonConstants.LoginKey, true);
        router.replaceUrl({
            url: 'pages/Index'
        });
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/Login.ets(59:5)");
            Row.height('100%');
            Row.backgroundColor({ "id": 16777237, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 20 });
            Column.debugLine("pages/Login.ets(60:7)");
            Column.width('100%');
            Column.height('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777222, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Image.debugLine("pages/Login.ets(62:9)");
            Image.width(100);
            Image.margin({
                top: 150
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('欢迎来到新闻资讯App');
            Text.debugLine("pages/Login.ets(67:9)");
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.loginBuilder.bind(this)();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('登录');
            Button.debugLine("pages/Login.ets(73:9)");
            Button.onClick((event) => {
                this.loginAction();
            });
            Button.width('80%');
            Button.id('focus');
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
        Row.pop();
    }
    loginBuilder(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create();
            Stack.debugLine("pages/Login.ets(88:5)");
            Stack.alignContent(Alignment.Start);
            Stack.width('80%');
            Stack.height(50);
            Stack.borderWidth(1);
            Stack.borderColor({ "id": 16777230, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Stack.borderRadius(8);
            Stack.padding({
                left: 10,
                right: 10
            });
            Stack.margin({
                top: 30
            });
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("手机号");
            Text.debugLine("pages/Login.ets(89:7)");
            Text.fontColor({ "id": 16777230, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Text.fontSize(16);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: '请输入手机号' });
            TextInput.debugLine("pages/Login.ets(92:7)");
            __TextInput__inputStyle();
            TextInput.type(InputType.PhoneNumber);
            TextInput.onChange((value) => {
                this.username = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Stack.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create();
            Stack.debugLine("pages/Login.ets(105:5)");
            Stack.alignContent(Alignment.Start);
            Stack.width('80%');
            Stack.height(50);
            Stack.borderWidth(1);
            Stack.borderColor({ "id": 16777230, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Stack.borderRadius(8);
            Stack.padding({
                left: 10,
                right: 10
            });
            Stack.margin({
                top: 15
            });
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("密码");
            Text.debugLine("pages/Login.ets(106:7)");
            Text.fontColor({ "id": 16777230, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Text.fontSize(16);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: '请输入密码' });
            TextInput.debugLine("pages/Login.ets(109:7)");
            __TextInput__inputStyle();
            TextInput.type(InputType.Password);
            TextInput.onChange((value) => {
                this.password = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Login(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Login.js.map