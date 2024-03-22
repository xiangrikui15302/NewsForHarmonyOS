import { CommonConstants } from '@bundle:com.yuzhaopan.news/entry/ets/common/constants/CommonConstants';
export default class BigVideoCard extends ViewPU {
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
            Column.create({ space: CommonConstants.SPACE_10 });
            Column.debugLine("views/home/card/BigVieoCard.ets(5:5)");
            Column.alignItems(HorizontalAlign.Start);
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
            Text.create("我是标题我是标题我是标题我是标题我是标题我是标题我是标题");
            Text.debugLine("views/home/card/BigVieoCard.ets(6:7)");
            Text.width('100%');
            Text.fontSize(20);
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.videoBuidler.bind(this)();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: CommonConstants.SPACE_10 });
            Row.debugLine("views/home/card/BigVieoCard.ets(13:7)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('我是作者');
            Text.debugLine("views/home/card/BigVieoCard.ets(14:9)");
            Text.fontSize(12);
            Text.fontColor({ "id": 16777231, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('2评');
            Text.debugLine("views/home/card/BigVieoCard.ets(17:9)");
            Text.fontSize(12);
            Text.fontColor({ "id": 16777231, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.debugLine("views/home/card/BigVieoCard.ets(22:7)");
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
    }
    videoBuidler(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create();
            Stack.debugLine("views/home/card/BigVieoCard.ets(32:5)");
            Stack.width('100%');
            Stack.alignContent(Alignment.Center);
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777222, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Image.debugLine("views/home/card/BigVieoCard.ets(33:7)");
            Image.width('100%');
            Image.height(150);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777226, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Image.debugLine("views/home/card/BigVieoCard.ets(36:7)");
            Image.width(50);
            Image.height(50);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: CommonConstants.SPACE_4 });
            Row.debugLine("views/home/card/BigVieoCard.ets(39:7)");
            Row.justifyContent(FlexAlign.End);
            Row.width('100%');
            Row.height(50);
            Row.linearGradient({
                direction: GradientDirection.Bottom,
                repeating: false,
                colors: [[0x10ffffff, 0.0], [0x40000000, 0.5], [0x80000000, 1.0]] // 数组末尾元素占比小于1时满足重复着色效果
            });
            Row.margin({
                top: 100
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777225, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Image.debugLine("views/home/card/BigVieoCard.ets(40:9)");
            Image.width(15);
            Image.height(15);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('1456' + " | " + '04:22');
            Text.debugLine("views/home/card/BigVieoCard.ets(43:9)");
            Text.fontSize(12);
            Text.fontColor({ "id": 16777229, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Text.margin({
                right: 10
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=BigVieoCard.js.map