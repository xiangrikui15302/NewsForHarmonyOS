import webview from '@ohos:web.webview';
import router from '@ohos:router';
import toastUtil from '@bundle:com.yuzhaopan.news/entry/ets/common/utils/ToastUtil';
class ActivityWebPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.webController = new webview.WebviewController();
        this.__params = new ObservedPropertyObjectPU(router.getParams(), this, "params");
        this.__progressVal = new ObservedPropertySimplePU(0, this, "progressVal");
        this.__isLoading = new ObservedPropertySimplePU(true, this, "isLoading");
        this.__intervalLoading = new ObservedPropertySimplePU(-1, this, "intervalLoading");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.webController !== undefined) {
            this.webController = params.webController;
        }
        if (params.params !== undefined) {
            this.params = params.params;
        }
        if (params.progressVal !== undefined) {
            this.progressVal = params.progressVal;
        }
        if (params.isLoading !== undefined) {
            this.isLoading = params.isLoading;
        }
        if (params.intervalLoading !== undefined) {
            this.intervalLoading = params.intervalLoading;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__params.purgeDependencyOnElmtId(rmElmtId);
        this.__progressVal.purgeDependencyOnElmtId(rmElmtId);
        this.__isLoading.purgeDependencyOnElmtId(rmElmtId);
        this.__intervalLoading.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__params.aboutToBeDeleted();
        this.__progressVal.aboutToBeDeleted();
        this.__isLoading.aboutToBeDeleted();
        this.__intervalLoading.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get params() {
        return this.__params.get();
    }
    set params(newValue) {
        this.__params.set(newValue);
    }
    get progressVal() {
        return this.__progressVal.get();
    }
    set progressVal(newValue) {
        this.__progressVal.set(newValue);
    }
    get isLoading() {
        return this.__isLoading.get();
    }
    set isLoading(newValue) {
        this.__isLoading.set(newValue);
    }
    get intervalLoading() {
        return this.__intervalLoading.get();
    }
    set intervalLoading(newValue) {
        this.__intervalLoading.set(newValue);
    }
    aboutToAppear() {
        // 开启一个定时器
        this.intervalLoading = setInterval(() => {
            this.progressVal = this.progressVal >= 100 ? 0 : (this.progressVal + 10);
        }, 100);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width('100%');
            Column.height('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // Web component loading H5.
            Web.create({ src: this.params['path'], controller: this.webController });
            // Web component loading H5.
            Web.zoomAccess(false);
            // Web component loading H5.
            Web.width('100%');
            // Web component loading H5.
            Web.aspectRatio(1);
            // Web component loading H5.
            Web.margin({ left: 10, right: 10,
                top: 30 });
            // Web component loading H5.
            Web.onConfirm((event) => {
                AlertDialog.show({
                    message: "恭喜您抽中" + (event === null || event === void 0 ? void 0 : event.message),
                    confirm: {
                        value: '确定',
                        action: () => {
                            event === null || event === void 0 ? void 0 : event.result.handleConfirm();
                        }
                    },
                    cancel: () => {
                        event === null || event === void 0 ? void 0 : event.result.handleCancel();
                    }
                });
                return true;
            });
            // Web component loading H5.
            Web.onErrorReceive((event) => {
                if ((event === null || event === void 0 ? void 0 : event.error.getErrorInfo()) === 'ERR_INTERNET_DISCONNECTED') {
                    toastUtil.showToast("网络连接错误");
                }
                if ((event === null || event === void 0 ? void 0 : event.error.getErrorInfo()) === 'ERR_CONNECTION_TIMED_OUT') {
                    toastUtil.showToast("网络超时");
                }
            });
            // Web component loading H5.
            Web.onProgressChange((event) => {
                // 加载完成，取消定时器
                if ((event === null || event === void 0 ? void 0 : event.newProgress) === 100) {
                    this.isLoading = false;
                    clearInterval(this.intervalLoading);
                    this.intervalLoading = -1;
                }
            });
            if (!isInitialRender) {
                // Web component loading H5.
                Web.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            // web加载等待框
            if (this.isLoading) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Progress.create({
                            value: 0,
                            total: 100,
                            type: ProgressType.ScaleRing
                        });
                        Progress.color(Color.Grey);
                        Progress.value(this.progressVal);
                        Progress.width(80);
                        Progress.style({
                            strokeWidth: 15,
                            scaleCount: 15,
                            scaleWidth: 5
                        });
                        Progress.zIndex(1);
                        Progress.position({
                            x: '40%',
                            y: '30%'
                        });
                        if (!isInitialRender) {
                            Progress.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
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
            Button.createWithLabel('点击抽奖');
            Button.width('90%');
            Button.onClick(() => {
                this.webController.runJavaScript('startDraw()');
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new ActivityWebPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=ActivityWebPage.js.map