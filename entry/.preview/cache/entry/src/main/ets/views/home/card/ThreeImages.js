import { CommonConstants } from '@bundle:com.yuzhaopan.news/entry/ets/common/constants/CommonConstants';
import NewModel from '@bundle:com.yuzhaopan.news/entry/ets/common/model/NewModel';
export default class ThreeImages extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__news = new ObservedPropertyObjectPU(new NewModel(), this, "news");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.news !== undefined) {
            this.news = params.news;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__news.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__news.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get news() {
        return this.__news.get();
    }
    set news(newValue) {
        this.__news.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: CommonConstants.SPACE_10 });
            Column.debugLine("views/home/card/ThreeImages.ets(8:5)");
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
            Text.create('我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题');
            Text.debugLine("views/home/card/ThreeImages.ets(9:7)");
            Text.width('100%');
            Text.fontSize(20);
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.imageBuilder.bind(this)();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("我是作者");
            Text.debugLine("views/home/card/ThreeImages.ets(14:7)");
            Text.fontColor({ "id": 16777227, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Text.fontSize(12);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.debugLine("views/home/card/ThreeImages.ets(17:7)");
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
    }
    imageBuilder(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("views/home/card/ThreeImages.ets(28:5)");
            Row.justifyContent(FlexAlign.SpaceEvenly);
            Row.width('100%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const string = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create({ "id": 16777221, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
                    Image.debugLine("views/home/card/ThreeImages.ets(33:11)");
                    Image.height(90);
                    Image.width('30%');
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
            };
            this.forEachUpdateFunction(elmtId, 
            // this.news.images,
            ['', '', ''], forEachItemGenFunction, undefined, true, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=ThreeImages.js.map