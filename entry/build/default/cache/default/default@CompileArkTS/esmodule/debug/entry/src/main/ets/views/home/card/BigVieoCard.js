import { CommonConstants } from '@bundle:com.yuzhaopan.news/entry/ets/common/constants/CommonConstants';
import { HttpConstants } from '@bundle:com.yuzhaopan.news/entry/ets/common/constants/HttpConstants';
export default class BigVideoCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__newsModel = new SynchedPropertyObjectTwoWayPU(params.newsModel, this, "newsModel");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__newsModel.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__newsModel.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get newsModel() {
        return this.__newsModel.get();
    }
    set newsModel(newValue) {
        this.__newsModel.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: CommonConstants.SPACE_10 });
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
            Text.create(this.newsModel.title);
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
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.newsModel.author);
            Text.fontSize(12);
            Text.fontColor({ "id": 16777226, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('2评');
            Text.fontSize(12);
            Text.fontColor({ "id": 16777226, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
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
            Stack.width('100%');
            Stack.alignContent(Alignment.Center);
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(HttpConstants.HOSTURL + this.newsModel.images[0]);
            Image.width('100%');
            Image.height(150);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777236, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
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
            Image.create({ "id": 16777237, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
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
            Text.fontSize(12);
            Text.fontColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
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