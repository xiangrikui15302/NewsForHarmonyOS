"use strict";
class VideoPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__isPlay = new ObservedPropertySimplePU(false, this, "isPlay");
        this.__isClicked = new ObservedPropertySimplePU(false, this, "isClicked");
        this.controller = new VideoController();
        this.__durationTime = new ObservedPropertySimplePU(0, this, "durationTime");
        this.__currentTime = new ObservedPropertySimplePU(0, this, "currentTime");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.isPlay !== undefined) {
            this.isPlay = params.isPlay;
        }
        if (params.isClicked !== undefined) {
            this.isClicked = params.isClicked;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.durationTime !== undefined) {
            this.durationTime = params.durationTime;
        }
        if (params.currentTime !== undefined) {
            this.currentTime = params.currentTime;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isPlay.purgeDependencyOnElmtId(rmElmtId);
        this.__isClicked.purgeDependencyOnElmtId(rmElmtId);
        this.__durationTime.purgeDependencyOnElmtId(rmElmtId);
        this.__currentTime.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isPlay.aboutToBeDeleted();
        this.__isClicked.aboutToBeDeleted();
        this.__durationTime.aboutToBeDeleted();
        this.__currentTime.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get isPlay() {
        return this.__isPlay.get();
    }
    set isPlay(newValue) {
        this.__isPlay.set(newValue);
    }
    get isClicked() {
        return this.__isClicked.get();
    }
    set isClicked(newValue) {
        this.__isClicked.set(newValue);
    }
    get durationTime() {
        return this.__durationTime.get();
    }
    set durationTime(newValue) {
        this.__durationTime.set(newValue);
    }
    get currentTime() {
        return this.__currentTime.get();
    }
    set currentTime(newValue) {
        this.__currentTime.set(newValue);
    }
    onPageHide() {
        console.log('3wewe');
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.height('100%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create({ alignContent: Alignment.Bottom });
            Stack.width('100%');
            Stack.height('100%');
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Video.create({
                src: { "id": 0, "type": 30000, params: ['videoTest.mp4'], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" },
                previewUri: '',
                controller: this.controller
            });
            Video.objectFit(ImageFit.Contain);
            Video.controls(false);
            Video.width('100%');
            Video.height('100%');
            Video.onPrepared((event) => {
                this.durationTime = event.duration;
            });
            Video.onUpdate(event => {
                this.currentTime = event.time;
            });
            Video.onFinish(() => {
                this.durationTime = 0;
                this.currentTime = 0;
            });
            if (!isInitialRender) {
                Video.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (!this.isClicked) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Stack.create();
                        Stack.width('100%');
                        Stack.height('100%');
                        if (!isInitialRender) {
                            Stack.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777250, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
                        Image.width('100%');
                        Image.height(200);
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777240, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
                        Image.width(30);
                        Image.onClick(() => {
                            this.isClicked = true;
                            this.isPlay = true;
                            this.controller.start();
                        });
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Stack.pop();
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: 10 });
            Row.padding(5);
            Row.width('100%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.isPlay ? { "id": 16777239, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" } : { "id": 16777240, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Image.width(30);
            Image.onClick(() => {
                this.isClicked = true;
                this.isPlay = !this.isPlay;
                this.isPlay ? this.controller.start() : this.controller.pause();
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Slider.create({
                value: this.currentTime,
                min: 0,
                max: this.durationTime
            });
            Slider.trackColor(Color.Gray);
            Slider.height(6);
            Slider.layoutWeight(1);
            Slider.onChange(value => {
                this.controller.setCurrentTime(value);
            });
            if (!isInitialRender) {
                Slider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.currentTime + ':' + this.durationTime);
            Text.fontColor(Color.White);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Stack.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new VideoPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=VideoPage.js.map