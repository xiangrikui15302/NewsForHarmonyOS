import { NewsType } from '@bundle:com.yuzhaopan.news/entry/ets/model/NewModel';
import NewsListViewModel from '@bundle:com.yuzhaopan.news/entry/ets/viewmodel/NewsListViewModel';
import NewsListItem from '@bundle:com.yuzhaopan.news/entry/ets/views/home/NewsListItem';
import { PullToRefresh } from '@package:pkg_modules/.ohpm/@ohos+pulltorefresh@2.0.1/pkg_modules/@ohos/pulltorefresh/index';
import toastUtil from '@bundle:com.yuzhaopan.news/entry/ets/common/utils/ToastUtil';
import router from '@ohos:router';
export default class NewsList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__categoryId = new SynchedPropertySimpleOneWayPU(params.categoryId, this, "categoryId");
        this.__newsList = new ObservedPropertyObjectPU([]
        // 需绑定列表或宫格组件
        , this, "newsList");
        this.scroller = new Scroller();
        this.pageNo = 1;
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
        this.newsList = await NewsListViewModel.getNewsListByCategory(this.categoryId, 1);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.justifyContent(FlexAlign.Center);
            Row.alignItems(VerticalAlign.Top);
            Row.width('100%');
            Row.height('100%');
            if (!isInitialRender) {
                Row.pop();
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
                                    this.newsList = newsList;
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
                                    if (newsList.length === 0) {
                                        this.pageNo -= 1;
                                        resolve('');
                                        toastUtil.showToast('没有更多了');
                                    }
                                    else {
                                        resolve('');
                                        this.newsList.push(...newsList);
                                    }
                                })
                                    .catch(error => {
                                    reject(error);
                                    this.pageNo -= 1;
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
        Row.pop();
    }
    getListView(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create({ scroller: this.scroller });
            List.edgeEffect(EdgeEffect.None);
            List.width('90%');
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const news = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.onClick(() => {
                            if (news.type == NewsType.littleVideoCardType || news.type == NewsType.bigVideoCardType) {
                                router.pushUrl({
                                    url: 'pages/VideoPage'
                                });
                                return;
                            }
                            router.pushUrl({
                                url: 'pages/NewsWebVIewPage',
                                params: { webUrl: news.contentUrl }
                            });
                        });
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
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new NewsListItem(this, { newsModel: news }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new NewsListItem(this, { newsModel: news }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
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
            this.forEachUpdateFunction(elmtId, this.newsList, forEachItemGenFunction, undefined, true, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=NewsList.js.map