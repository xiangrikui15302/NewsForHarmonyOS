import { CommonConstants } from '@bundle:com.yuzhaopan.news/entry/ets/common/constants/CommonConstants';
export default class LittleCard extends ViewPU {
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
            Column.create({ space: CommonConstants.SPACE_4 });
            Column.debugLine("views/home/card/LittileCard.ets(5:5)");
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('我是标题我是标题我是标题我是标题我是标题我是标题');
            Text.debugLine("views/home/card/LittileCard.ets(6:7)");
            Text.fontSize(20);
            Text.fontWeight(CommonConstants.FONT_WEIGHT_400);
            Text.maxLines(1);
            Text.margin({
                top: 8
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('我是作者我是作者');
            Text.debugLine("views/home/card/LittileCard.ets(13:7)");
            Text.fontSize(12);
            Text.fontColor({ "id": 16777227, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=LittileCard.js.map