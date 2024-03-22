import { CommonConstants } from '@bundle:com.yuzhaopan.news/entry/ets/common/constants/CommonConstants';
import PreferenceUtil from '@bundle:com.yuzhaopan.news/entry/ets/common/utils/PreferenceUtil';
import { mineContent } from '@bundle:com.yuzhaopan.news/entry/ets/viewmodel/MineViewModel';
export default class MineView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__userName = new ObservedPropertySimplePU('', this, "userName");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.userName !== undefined) {
            this.userName = params.userName;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__userName.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__userName.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get userName() {
        return this.__userName.get();
    }
    set userName(newValue) {
        this.__userName.set(newValue);
    }
    async aboutToAppear() {
        this.userName = await PreferenceUtil.getPreferenceValue(CommonConstants.UserNameKey, "用户名");
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("views/mine/MineView.ets(14:5)");
            Column.justifyContent(FlexAlign.Start);
            Column.width('100%');
            Column.height('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.headBuild.bind(this)();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.debugLine("views/mine/MineView.ets(16:7)");
            Divider.width('80%');
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.contentBuild.bind(this)();
        Column.pop();
    }
    headBuild(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: CommonConstants.SPACE_10 });
            Row.debugLine("views/mine/MineView.ets(27:5)");
            Row.width('90%');
            Row.alignItems((VerticalAlign.Top));
            Row.justifyContent(FlexAlign.Start);
            Row.margin({
                top: 30,
                bottom: 20
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777222, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Image.debugLine("views/mine/MineView.ets(28:7)");
            Image.width(80);
            Image.height(80);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: CommonConstants.SPACE_10 });
            Column.debugLine("views/mine/MineView.ets(31:7)");
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({
                top: 20
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.userName);
            Text.debugLine("views/mine/MineView.ets(32:9)");
            Text.fontSize(20);
            Text.fontColor({ "id": 16777244, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('用户简介');
            Text.debugLine("views/mine/MineView.ets(35:9)");
            Text.fontSize(15);
            Text.fontColor({ "id": 16777236, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        Row.pop();
    }
    contentBuild(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("views/mine/MineView.ets(54:5)");
            Column.margin({
                top: 20
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, value) => {
                const item = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Row.create({ space: CommonConstants.SPACE_10 });
                    Row.debugLine("views/mine/MineView.ets(58:11)");
                    Row.width('90%');
                    Row.padding({
                        top: 10,
                        bottom: 10
                    });
                    if (!isInitialRender) {
                        Row.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create(item.icon);
                    Image.debugLine("views/mine/MineView.ets(59:13)");
                    Image.width(40);
                    Image.height(40);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(item.name);
                    Text.debugLine("views/mine/MineView.ets(62:13)");
                    Text.fontSize(20);
                    Text.fontWeight(CommonConstants.FONT_WEIGHT_400);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, mineContent, forEachItemGenFunction, undefined, true, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    previewComponent();
}
else {
    storePreviewComponents(1, "MineView", new MineView(undefined, {}));
}
//# sourceMappingURL=MineView.js.map