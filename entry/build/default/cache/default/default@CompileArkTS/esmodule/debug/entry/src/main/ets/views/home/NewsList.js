import NewsListViewModel from '@bundle:com.yuzhaopan.news/entry/ets/viewmodel/NewsListViewModel';
import NewsListItem from '@bundle:com.yuzhaopan.news/entry/ets/views/home/NewsListItem';
import { PullToRefresh } from '@package:pkg_modules/.ohpm/@ohos+pulltorefresh@2.0.1/pkg_modules/@ohos/pulltorefresh/index';
import toastUtil from '@bundle:com.yuzhaopan.news/entry/ets/common/utils/ToastUtil';
import BasicDataSource from '@bundle:com.yuzhaopan.news/entry/ets/common/utils/BasicDataSource';
class NewsDataSource extends BasicDataSource {
    constructor() {
        super(...arguments);
        this.dataArray = [];
    }
    totalCount() {
        return this.dataArray.length;
    }
    getData(index) {
        return this.dataArray[index];
    }
    addData(index, data) {
        this.dataArray.splice(index, 0, data);
        this.notifyDataAdd(index);
    }
    pushData(data) {
        this.dataArray.push(data);
        this.notifyDataAdd(this.dataArray.length - 1);
    }
    pushDatas(datas) {
        datas.forEach(data => {
            this.pushData(data);
        });
    }
    deleteData(index) {
        this.dataArray.splice(index, 1);
        this.notifyDataDelete(index);
    }
    deleteDataAll() {
        this.dataArray = [];
    }
    reloadData() {
        this.notifyDataReload();
    }
}
export default class NewsList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__categoryId = new SynchedPropertySimpleOneWayPU(params.categoryId, this, "categoryId");
        this.__newsList = new ObservedPropertyObjectPU(new NewsDataSource()
        // 需绑定列表或宫格组件
        , this, "newsList");
        this.scroller = new Scroller();
        this.pageNo = 1;
        this.timer = null;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.newsList !== undefined) {
            this.newsList = params.newsList;
        }
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
        if (params.pageNo !== undefined) {
            this.pageNo = params.pageNo;
        }
        if (params.timer !== undefined) {
            this.timer = params.timer;
        }
    }
    updateStateVars(params) {
        this.__categoryId.reset(params.categoryId);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__categoryId.purgeDependencyOnElmtId(rmElmtId);
        this.__newsList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__categoryId.aboutToBeDeleted();
        this.__newsList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get categoryId() {
        return this.__categoryId.get();
    }
    set categoryId(newValue) {
        this.__categoryId.set(newValue);
    }
    get newsList() {
        return this.__newsList.get();
    }
    set newsList(newValue) {
        this.__newsList.set(newValue);
    }
    async aboutToAppear() {
        let newsList = await NewsListViewModel.getNewsListByCategory(this.categoryId, 1);
        this.newsList.pushDatas(newsList);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new PullToRefresh(this, {
                        // 必传项，列表组件所绑定的数据
                        data: this.__newsList,
                        // 必传项，需绑定传入主体布局内的列表或宫格组件
                        scroller: this.scroller,
                        // 必传项，自定义主体布局，内部有列表或宫格组件
                        customList: () => {
                            // 一个用@Builder修饰过的UI方法
                            this.getListView();
                        },
                        // 可选项，下拉刷新回调
                        onRefresh: () => {
                            this.pageNo = 1;
                            return new Promise((resolve, reject) => {
                                NewsListViewModel.getNewsListByCategory(this.categoryId, this.pageNo)
                                    .then(newsList => {
                                    resolve('刷新成功');
                                    this.newsList.deleteDataAll();
                                    this.newsList.pushDatas(newsList);
                                })
                                    .catch(error => {
                                    reject(error);
                                });
                            });
                        },
                        // 可选项，上拉加载更多回调
                        onLoadMore: () => {
                            this.pageNo += 1;
                            return new Promise((resolve, reject) => {
                                NewsListViewModel.getNewsListByCategory(this.categoryId, this.pageNo)
                                    .then(newsList => {
                                    resolve('');
                                    if (newsList.length === 0) {
                                        this.pageNo -= 1;
                                        toastUtil.showToast('没有更多了');
                                    }
                                    else {
                                        resolve('');
                                        this.newsList.pushDatas(newsList);
                                    }
                                })
                                    .catch(error => {
                                    this.pageNo -= 1;
                                    reject(error);
                                });
                            });
                        },
                        customLoad: null,
                        customRefresh: null,
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        Column.pop();
    }
    getListView(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create({ space: 3, scroller: this.scroller });
            List.cachedCount(5);
            List.edgeEffect(EdgeEffect.None);
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            const __lazyForEachItemGenFunction = (_item, index) => {
                const item = _item;
                {
                    const isLazyCreate = (globalThis.__lazyForEachItemGenFunction !== undefined) && true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        ListItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            __Common__.create();
                            __Common__.onAppear(() => {
                                if (index) {
                                    console.log(" onAppear: index=" + index + ' content= ' + this.newsList.getData(index));
                                }
                            });
                            __Common__.onDisAppear(() => {
                                if (index) {
                                    console.log(" onDisAppear: index=" + index + ' content= ' + this.newsList.getData(index));
                                }
                            });
                            if (!isInitialRender) {
                                __Common__.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new NewsListItem(this, { newsModel: item }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                        __Common__.pop();
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            __Common__.create();
                            __Common__.onAppear(() => {
                                if (index) {
                                    console.log(" onAppear: index=" + index + ' content= ' + this.newsList.getData(index));
                                }
                            });
                            __Common__.onDisAppear(() => {
                                if (index) {
                                    console.log(" onDisAppear: index=" + index + ' content= ' + this.newsList.getData(index));
                                }
                            });
                            if (!isInitialRender) {
                                __Common__.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new NewsListItem(this, { newsModel: item }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                        __Common__.pop();
                        ListItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            const __lazyForEachItemIdFunc = (item) => item;
            LazyForEach.create("1", this, this.newsList, __lazyForEachItemGenFunction, __lazyForEachItemIdFunc);
            LazyForEach.pop();
        }
        List.pop();
    }
    aboutToDisappear() {
        clearTimeout(this.timer);
        this.newsList.deleteDataAll();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=NewsList.js.map