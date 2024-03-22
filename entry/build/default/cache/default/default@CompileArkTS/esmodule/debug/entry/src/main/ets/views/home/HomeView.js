import { CommonConstants } from '@bundle:com.yuzhaopan.news/entry/ets/common/constants/CommonConstants';
import NewsListViewModel from '@bundle:com.yuzhaopan.news/entry/ets/viewmodel/NewsListViewModel';
import HomeHeaderView from '@bundle:com.yuzhaopan.news/entry/ets/views/home/HomeHeaderView';
import NewsList from '@bundle:com.yuzhaopan.news/entry/ets/views/home/NewsList';
export default class HomeView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__tabsArr = new ObservedPropertyObjectPU([], this, "tabsArr");
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.__categoryId = new ObservedPropertySimplePU(0, this, "categoryId");
        this.setInitiallyProvidedValue(params);
        this.declareWatch("currentIndex", this.refreshCategoryId);
    }
    setInitiallyProvidedValue(params) {
        if (params.tabsArr !== undefined) {
            this.tabsArr = params.tabsArr;
        }
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.categoryId !== undefined) {
            this.categoryId = params.categoryId;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__tabsArr.purgeDependencyOnElmtId(rmElmtId);
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__categoryId.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__tabsArr.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        this.__categoryId.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get tabsArr() {
        return this.__tabsArr.get();
    }
    set tabsArr(newValue) {
        this.__tabsArr.set(newValue);
    }
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue) {
        this.__currentIndex.set(newValue);
    }
    get categoryId() {
        return this.__categoryId.get();
    }
    set categoryId(newValue) {
        this.__categoryId.set(newValue);
    }
    async aboutToAppear() {
        this.tabsArr = await NewsListViewModel.getAllCategorys();
        this.refreshCategoryId();
    }
    refreshCategoryId() {
        if (this.tabsArr.length > 0) {
            this.categoryId = this.tabsArr[this.currentIndex].id;
        }
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
            __Common__.create();
            __Common__.height(60);
            if (!isInitialRender) {
                __Common__.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new HomeHeaderView(this, {}, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        __Common__.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.tabsArr.length == 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.FailLayout.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Tabs.create();
                        Tabs.barMode(BarMode.Scrollable);
                        Tabs.onChange(index => {
                            this.currentIndex = index;
                        });
                        Tabs.width('100%');
                        Tabs.layoutWeight(1);
                        if (!isInitialRender) {
                            Tabs.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ForEach.create();
                        const forEachItemGenFunction = (_item, index) => {
                            const item = _item;
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                TabContent.create(() => {
                                    {
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            if (isInitialRender) {
                                                ViewPU.create(new NewsList(this, { categoryId: this.categoryId }, undefined, elmtId));
                                            }
                                            else {
                                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                                    categoryId: this.categoryId
                                                });
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                    }
                                });
                                TabContent.tabBar({ builder: () => {
                                        this.tabBarBuilder.call(this, item.name, index);
                                    } });
                                if (!isInitialRender) {
                                    TabContent.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            TabContent.pop();
                        };
                        this.forEachUpdateFunction(elmtId, this.tabsArr, forEachItemGenFunction, undefined, true, false);
                        if (!isInitialRender) {
                            ForEach.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    ForEach.pop();
                    Tabs.pop();
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Column.pop();
    }
    tabBarBuilder(name, index, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(name);
            Text.height('100%');
            Text.padding({ left: 10, right: 10 });
            Text.fontSize(this.currentIndex === index ? 20 : 18);
            Text.fontWeight(this.currentIndex === index ? CommonConstants.FONT_WEIGHT_600 : 350);
            Text.fontColor(this.currentIndex === index ? { "id": 16777222, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" } : { "id": 16777223, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    FailLayout(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.layoutWeight(1);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777245, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Image.height(120);
            Image.width(120);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('网络请求失败');
            Text.fontSize(16);
            Text.fontColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
            Text.margin({ top: 10 });
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
//# sourceMappingURL=HomeView.js.map