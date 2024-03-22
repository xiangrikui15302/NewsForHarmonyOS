import { CommonConstants } from '@bundle:com.yuzhaopan.news/entry/ets/common/constants/CommonConstants';
export default class HomeHeaderView extends ViewPU {
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
            Row.create({ space: CommonConstants.SPACE_8 });
            Row.debugLine("views/home/HomeHeaderView.ets(6:5)");
            Row.width('90%');
            Row.height('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.backgroundColor(Color.White);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create();
            Stack.debugLine("views/home/HomeHeaderView.ets(8:7)");
            Stack.layoutWeight(1);
            Stack.alignContent(Alignment.Start);
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777222, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Image.debugLine("views/home/HomeHeaderView.ets(9:9)");
            Image.width(40);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({
                placeholder: '搜一搜你感兴趣的内容'
            });
            TextInput.debugLine("views/home/HomeHeaderView.ets(11:9)");
            TextInput.padding({
                left: 30,
                right: 5
            });
            TextInput.margin({
                left: 20
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Stack.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777224, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Image.debugLine("views/home/HomeHeaderView.ets(25:7)");
            Image.width(40);
            Image.onClick(() => {
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=HomeHeaderView.js.map