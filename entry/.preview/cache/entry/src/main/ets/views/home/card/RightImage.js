import { CommonConstants } from '@bundle:com.yuzhaopan.news/entry/ets/common/constants/CommonConstants';
export default class RightImage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("views/home/card/RightImage.ets(5:5)");
            Column.margin({
                top: 10,
                bottom: 10
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: CommonConstants.SPACE_10 });
            Row.debugLine("views/home/card/RightImage.ets(6:7)");
            Row.width('100%');
            Row.alignItems(VerticalAlign.Top);
            Row.justifyContent(FlexAlign.SpaceBetween);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("views/home/card/RightImage.ets(7:9)");
            Column.layoutWeight(1);
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容');
            Text.debugLine("views/home/card/RightImage.ets(8:11)");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('我是作者');
            Text.debugLine("views/home/card/RightImage.ets(10:11)");
            Text.fontColor({ "id": 16777227, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Text.fontSize(12);
            Text.margin({
                top: 10
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777217, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Image.debugLine("views/home/card/RightImage.ets(19:9)");
            Image.width(80);
            Image.height(50);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.debugLine("views/home/card/RightImage.ets(29:7)");
            Divider.backgroundColor({ "id": 16777233, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Divider.margin({
                top: 10
            });
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=RightImage.js.map