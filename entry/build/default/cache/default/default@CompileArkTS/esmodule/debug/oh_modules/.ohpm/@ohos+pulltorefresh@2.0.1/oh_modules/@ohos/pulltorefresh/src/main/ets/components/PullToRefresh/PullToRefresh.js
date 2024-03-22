/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { PullToRefreshConfigurator } from '@package:pkg_modules/.ohpm/@ohos+pulltorefresh@2.0.1/pkg_modules/@ohos/pulltorefresh/src/main/ets/components/PullToRefresh/PullToRefreshConfigurator';
const IS_FREE = 0;
const IS_PULL_DOWN_1 = 11;
const IS_PULL_DOWN_2 = 12;
const IS_REFRESHING = 2;
const IS_REFRESHED = 3;
const IS_PULL_UP_1 = 41;
const IS_PULL_UP_2 = 42;
const IS_LOADING = 5;
export class PullToRefresh extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__data = new SynchedPropertyObjectTwoWayPU(params.data, this, "data");
        this.scroller = undefined;
        this.customList = undefined;
        this.refreshConfigurator = undefined;
        this.mWidth = '100%';
        this.mHeight = '100%';
        this.onRefresh = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('刷新失败');
                }, 1000);
            });
        };
        this.onLoadMore = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('');
                }, 1000);
            });
        };
        this.customRefresh = undefined;
        this.onAnimPullDown = undefined;
        this.onAnimRefreshing = undefined;
        this.customLoad = undefined;
        this.onAnimPullUp = undefined;
        this.onAnimLoading = undefined;
        this.__mHeightNumber = new ObservedPropertySimplePU(0, this, "mHeightNumber");
        this.__trYTop = new ObservedPropertySimplePU(0, this, "trYTop");
        this.__trYBottom = new ObservedPropertySimplePU(0, this, "trYBottom");
        this.__state = new ObservedPropertySimplePU(IS_FREE, this, "state");
        this.__refreshText = new ObservedPropertySimplePU('', this, "refreshText");
        this.__loadText = new ObservedPropertySimplePU('', this, "loadText");
        this.__angle1 = new ObservedPropertySimplePU(0, this, "angle1");
        this.__angle2 = new ObservedPropertySimplePU(0, this, "angle2");
        this.mWidthNumber = 0;
        this.touchYOld = 0;
        this.touchYNew = 0;
        this.listOffsetOld = 0;
        this.listOffsetNew = 0;
        this.canvasSetting = new RenderingContextSettings(true);
        this.canvasRefresh = new CanvasRenderingContext2D(this.canvasSetting);
        this.value = 0;
        this.timer = undefined;
        this.refreshRingOx = 0;
        this.refreshRingOy = 0;
        this.refreshRingRadius = 0;
        this.refreshPoint1x = 0;
        this.refreshPoint1y = 0;
        this.refreshPoint2x = 0;
        this.refreshPoint2y = 0;
        this.panOption = new PanGestureOptions({ direction: PanDirection.Up | PanDirection.Down });
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
        if (params.customList !== undefined) {
            this.customList = params.customList;
        }
        if (params.refreshConfigurator !== undefined) {
            this.refreshConfigurator = params.refreshConfigurator;
        }
        if (params.mWidth !== undefined) {
            this.mWidth = params.mWidth;
        }
        if (params.mHeight !== undefined) {
            this.mHeight = params.mHeight;
        }
        if (params.onRefresh !== undefined) {
            this.onRefresh = params.onRefresh;
        }
        if (params.onLoadMore !== undefined) {
            this.onLoadMore = params.onLoadMore;
        }
        if (params.customRefresh !== undefined) {
            this.customRefresh = params.customRefresh;
        }
        if (params.onAnimPullDown !== undefined) {
            this.onAnimPullDown = params.onAnimPullDown;
        }
        if (params.onAnimRefreshing !== undefined) {
            this.onAnimRefreshing = params.onAnimRefreshing;
        }
        if (params.customLoad !== undefined) {
            this.customLoad = params.customLoad;
        }
        if (params.onAnimPullUp !== undefined) {
            this.onAnimPullUp = params.onAnimPullUp;
        }
        if (params.onAnimLoading !== undefined) {
            this.onAnimLoading = params.onAnimLoading;
        }
        if (params.mHeightNumber !== undefined) {
            this.mHeightNumber = params.mHeightNumber;
        }
        if (params.trYTop !== undefined) {
            this.trYTop = params.trYTop;
        }
        if (params.trYBottom !== undefined) {
            this.trYBottom = params.trYBottom;
        }
        if (params.state !== undefined) {
            this.state = params.state;
        }
        if (params.refreshText !== undefined) {
            this.refreshText = params.refreshText;
        }
        if (params.loadText !== undefined) {
            this.loadText = params.loadText;
        }
        if (params.angle1 !== undefined) {
            this.angle1 = params.angle1;
        }
        if (params.angle2 !== undefined) {
            this.angle2 = params.angle2;
        }
        if (params.mWidthNumber !== undefined) {
            this.mWidthNumber = params.mWidthNumber;
        }
        if (params.touchYOld !== undefined) {
            this.touchYOld = params.touchYOld;
        }
        if (params.touchYNew !== undefined) {
            this.touchYNew = params.touchYNew;
        }
        if (params.listOffsetOld !== undefined) {
            this.listOffsetOld = params.listOffsetOld;
        }
        if (params.listOffsetNew !== undefined) {
            this.listOffsetNew = params.listOffsetNew;
        }
        if (params.canvasSetting !== undefined) {
            this.canvasSetting = params.canvasSetting;
        }
        if (params.canvasRefresh !== undefined) {
            this.canvasRefresh = params.canvasRefresh;
        }
        if (params.value !== undefined) {
            this.value = params.value;
        }
        if (params.timer !== undefined) {
            this.timer = params.timer;
        }
        if (params.refreshRingOx !== undefined) {
            this.refreshRingOx = params.refreshRingOx;
        }
        if (params.refreshRingOy !== undefined) {
            this.refreshRingOy = params.refreshRingOy;
        }
        if (params.refreshRingRadius !== undefined) {
            this.refreshRingRadius = params.refreshRingRadius;
        }
        if (params.refreshPoint1x !== undefined) {
            this.refreshPoint1x = params.refreshPoint1x;
        }
        if (params.refreshPoint1y !== undefined) {
            this.refreshPoint1y = params.refreshPoint1y;
        }
        if (params.refreshPoint2x !== undefined) {
            this.refreshPoint2x = params.refreshPoint2x;
        }
        if (params.refreshPoint2y !== undefined) {
            this.refreshPoint2y = params.refreshPoint2y;
        }
        if (params.panOption !== undefined) {
            this.panOption = params.panOption;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__data.purgeDependencyOnElmtId(rmElmtId);
        this.__mHeightNumber.purgeDependencyOnElmtId(rmElmtId);
        this.__trYTop.purgeDependencyOnElmtId(rmElmtId);
        this.__trYBottom.purgeDependencyOnElmtId(rmElmtId);
        this.__state.purgeDependencyOnElmtId(rmElmtId);
        this.__refreshText.purgeDependencyOnElmtId(rmElmtId);
        this.__loadText.purgeDependencyOnElmtId(rmElmtId);
        this.__angle1.purgeDependencyOnElmtId(rmElmtId);
        this.__angle2.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__data.aboutToBeDeleted();
        this.__mHeightNumber.aboutToBeDeleted();
        this.__trYTop.aboutToBeDeleted();
        this.__trYBottom.aboutToBeDeleted();
        this.__state.aboutToBeDeleted();
        this.__refreshText.aboutToBeDeleted();
        this.__loadText.aboutToBeDeleted();
        this.__angle1.aboutToBeDeleted();
        this.__angle2.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get data() {
        return this.__data.get();
    }
    set data(newValue) {
        this.__data.set(newValue);
    }
    get mHeightNumber() {
        return this.__mHeightNumber.get();
    }
    set mHeightNumber(newValue) {
        this.__mHeightNumber.set(newValue);
    }
    get trYTop() {
        return this.__trYTop.get();
    }
    set trYTop(newValue) {
        this.__trYTop.set(newValue);
    }
    get trYBottom() {
        return this.__trYBottom.get();
    }
    set trYBottom(newValue) {
        this.__trYBottom.set(newValue);
    }
    get state() {
        return this.__state.get();
    }
    set state(newValue) {
        this.__state.set(newValue);
    }
    get refreshText() {
        return this.__refreshText.get();
    }
    set refreshText(newValue) {
        this.__refreshText.set(newValue);
    }
    get loadText() {
        return this.__loadText.get();
    }
    set loadText(newValue) {
        this.__loadText.set(newValue);
    }
    get angle1() {
        return this.__angle1.get();
    }
    set angle1(newValue) {
        this.__angle1.set(newValue);
    }
    get angle2() {
        return this.__angle2.get();
    }
    set angle2(newValue) {
        this.__angle2.set(newValue);
    }
    aboutToAppear() {
        if (!this.refreshConfigurator) {
            this.refreshConfigurator = new PullToRefreshConfigurator();
        }
    }
    initCanvas() {
        if (this.refreshRingOx == 0) {
            this.canvasRefresh.strokeStyle = this.refreshConfigurator.getRefreshColor();
            this.canvasRefresh.fillStyle = this.refreshConfigurator.getRefreshColor();
            this.canvasRefresh.lineWidth = this.refreshConfigurator.getRefreshHeight() / 60 + 1;
            this.refreshRingOx = this.refreshConfigurator.getRefreshWidth() / 2; // 圆心x坐标
            this.refreshRingOy = this.refreshConfigurator.getRefreshHeight() / 2; // 圆心y坐标
            this.refreshRingRadius = this.refreshConfigurator.getRefreshHeight() / 4; // 半径
            this.refreshPoint1x = this.refreshRingOx + this.refreshRingRadius * Math.cos(Math.PI * 150 / 180);
            this.refreshPoint1y = this.refreshRingOy + this.refreshRingRadius * Math.sin(Math.PI * 150 / 180);
            this.refreshPoint2x = this.refreshRingOx + this.refreshRingRadius * Math.cos(Math.PI * -30 / 180);
            this.refreshPoint2y = this.refreshRingOy + this.refreshRingRadius * Math.sin(Math.PI * -30 / 180);
        }
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(this.mWidth === undefined ? '100%' : this.mWidth);
            Column.height(this.mHeight === undefined ? '100%' : this.mHeight);
            Column.onAreaChange((oldValue, newValue) => {
                this.mWidthNumber = Math.round(newValue.width);
                this.mHeightNumber = Math.round(newValue.height);
            });
            Gesture.create(GesturePriority.Parallel);
            PanGesture.create(this.panOption);
            PanGesture.onActionStart((event) => {
                this.touchYOld = event.offsetY;
            });
            PanGesture.onActionUpdate((event) => {
                this.onActionUpdate(event);
            });
            PanGesture.onActionEnd(() => {
                this.onActionEnd();
            });
            PanGesture.pop();
            Gesture.pop();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 下拉刷新动画部分
            Stack.create();
            // 下拉刷新动画部分
            Stack.width('100%');
            // 下拉刷新动画部分
            Stack.height(this.trYTop);
            // 下拉刷新动画部分
            Stack.backgroundColor(this.refreshConfigurator.getRefreshBackgroundColor());
            if (!isInitialRender) {
                // 下拉刷新动画部分
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.headerUI.bind(this)();
        // 下拉刷新动画部分
        Stack.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 主体列表部分
            Column.create();
            // 主体列表部分
            Column.width('100%');
            // 主体列表部分
            Column.height(this.mHeightNumber - this.trYTop + this.trYBottom);
            if (!isInitialRender) {
                // 主体列表部分
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.customList.bind(this)();
        // 主体列表部分
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 上拉加载动画部分
            Stack.create();
            // 上拉加载动画部分
            Stack.width('100%');
            // 上拉加载动画部分
            Stack.height(-this.trYBottom);
            // 上拉加载动画部分
            Stack.backgroundColor(this.refreshConfigurator.getLoadBackgroundColor());
            if (!isInitialRender) {
                // 上拉加载动画部分
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.footerUI.bind(this)();
        // 上拉加载动画部分
        Stack.pop();
        Column.pop();
    }
    headerUI(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.customRefresh) {
                this.ifElseBranchUpdateFunction(0, () => {
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
                    this.customRefresh.bind(this)();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
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
                        Text.create(this.refreshText);
                        Text.textAlign(TextAlign.Center);
                        Text.fontColor(this.refreshConfigurator.getRefreshTextColor());
                        Text.fontSize(this.refreshConfigurator.getRefreshTextSize());
                        if (!isInitialRender) {
                            Text.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Text.pop();
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Stack.create();
                        Stack.width(this.refreshConfigurator.getRefreshWidth());
                        Stack.height(this.refreshConfigurator.getRefreshHeight());
                        if (!isInitialRender) {
                            Stack.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Canvas.create(this.canvasRefresh);
                        Canvas.width('100%');
                        Canvas.height('100%');
                        Canvas.onReady(() => {
                            this.initCanvas();
                        });
                        Canvas.visibility(this.state == IS_PULL_DOWN_2 ? Visibility.Visible : Visibility.Hidden);
                        if (!isInitialRender) {
                            Canvas.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Canvas.pop();
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        LoadingProgress.create();
                        LoadingProgress.width(this.refreshConfigurator.getRefreshHeight());
                        LoadingProgress.height(this.refreshConfigurator.getRefreshHeight());
                        LoadingProgress.color(this.refreshConfigurator.getRefreshColor());
                        LoadingProgress.visibility(this.state == IS_REFRESHING ? Visibility.Visible : Visibility.Hidden);
                        if (!isInitialRender) {
                            LoadingProgress.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Stack.pop();
                    Stack.pop();
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
    }
    footerUI(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.customLoad) {
                this.ifElseBranchUpdateFunction(0, () => {
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
                    this.customLoad.bind(this)();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
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
                        Stack.create();
                        Stack.width(this.refreshConfigurator.getLoadImgHeight());
                        Stack.height(this.refreshConfigurator.getLoadImgHeight());
                        if (!isInitialRender) {
                            Stack.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777250, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
                        Image.width('100%');
                        Image.height('100%');
                        Image.objectFit(ImageFit.Contain);
                        Image.visibility(this.state == IS_PULL_UP_2 ? Visibility.Visible : Visibility.Hidden);
                        Image.rotate({
                            z: 1,
                            angle: this.angle1
                        });
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777249, "type": 20000, params: [], "bundleName": "com.yuzhaopan.news", "moduleName": "entry" });
                        Image.width('100%');
                        Image.height('100%');
                        Image.objectFit(ImageFit.Contain);
                        Image.visibility(this.state == IS_LOADING ? Visibility.Visible : Visibility.Hidden);
                        Image.rotate({
                            z: 1,
                            angle: this.angle2
                        });
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Stack.pop();
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Text.create(this.loadText);
                        Text.height('100%');
                        Text.textAlign(TextAlign.Center);
                        Text.margin({ left: 8 });
                        Text.fontColor(this.refreshConfigurator.getLoadTextColor());
                        Text.fontSize(this.refreshConfigurator.getLoadTextSize());
                        if (!isInitialRender) {
                            Text.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Text.pop();
                    Row.pop();
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
    }
    onActionUpdate(event) {
        if (this.state == IS_FREE ||
            this.state == IS_PULL_DOWN_1 || this.state == IS_PULL_DOWN_2 ||
            this.state == IS_PULL_UP_1 || this.state == IS_PULL_UP_2) {
            if (!this.scroller.currentOffset()) {
                return;
            }
            this.touchYNew = event.offsetY;
            // 当前手势是否下拉
            let distanceY = this.touchYNew - this.touchYOld;
            let isPullAction = distanceY > 0;
            if ((this.state == IS_FREE && this.scroller.currentOffset().yOffset == 0 && isPullAction) || // 处于自由状态且列表处于顶部位置 并且 当前手势是下拉手势
                this.state == IS_PULL_DOWN_1 || this.state == IS_PULL_DOWN_2) { // 处于下拉状态中
                if (this.refreshConfigurator.getHasRefresh()) {
                    // 获取最新位移距离
                    var trY = this.touchYNew - this.touchYOld;
                    // 计算当前需要位移的总距离
                    this.trYTop = this.getTranslateYOfRefresh(trY);
                    if (this.trYTop < this.refreshConfigurator.getRefreshHeight()) {
                        this.state = IS_PULL_DOWN_1;
                    }
                    else {
                        this.state = IS_PULL_DOWN_2;
                    }
                    // 如果没有自定义刷新动画，就执行内置动画下拉时的逻辑
                    if (!this.customRefresh) {
                        this.drawRefreshView(this.trYTop / this.refreshConfigurator.getMaxTranslate());
                    }
                    // 如果有下拉中动画回调，就执行下拉中动画回调
                    if (this.onAnimPullDown) {
                        this.onAnimPullDown(this.trYTop / this.refreshConfigurator.getMaxTranslate(), this.mWidthNumber, this.trYTop);
                    }
                }
            }
            else if (this.refreshConfigurator.getHasLoadMore()) {
                this.listOffsetNew = this.scroller.currentOffset().yOffset;
                // 列表处于底部位置且上滑时，2.已上滑时
                if ((this.state == IS_FREE && this.listOffsetOld == this.listOffsetNew && this.listOffsetOld != 0 && this.touchYNew < this.touchYOld) ||
                    this.state == IS_PULL_UP_1 || this.state == IS_PULL_UP_2) {
                    // 获取最新的位移距离
                    var trY = this.touchYNew - this.touchYOld;
                    // 计算当前需要位移的总距离
                    this.trYBottom = this.getTranslateYOfLoadMore(trY);
                    if (this.trYBottom > -this.refreshConfigurator.getLoadImgHeight()) {
                        this.state = IS_PULL_UP_1;
                    }
                    else {
                        this.state = IS_PULL_UP_2;
                    }
                    // 如果没有自定义加载更多动画，就执行内置动画上拉时的逻辑
                    if (!this.customLoad) {
                        this.drawLoadView(true, -this.trYBottom / this.refreshConfigurator.getMaxTranslate());
                    }
                    // 如果有上拉中动画回调，就执行上拉中动画回调
                    if (this.onAnimPullUp) {
                        this.onAnimPullUp(-this.trYBottom / this.refreshConfigurator.getMaxTranslate(), this.mWidthNumber, -this.trYBottom);
                    }
                }
                this.listOffsetOld = this.listOffsetNew;
            }
            this.touchYOld = this.touchYNew;
        }
    }
    onActionEnd() {
        if (this.refreshConfigurator.getListIsPlacement()) {
            if (this.state == IS_PULL_DOWN_1 || this.state == IS_PULL_DOWN_2) {
                // 让列表归位到顶部
                this.scroller.scrollEdge(Edge.Top);
                // 让列表归位到底部
            }
            else if (this.state == IS_PULL_UP_1 || this.state == IS_PULL_UP_2) {
                this.scroller.scrollEdge(Edge.Bottom);
            }
        }
        if (this.trYTop > 0) { // 下拉结束
            if (this.state == IS_FREE || this.state == IS_PULL_DOWN_1 || this.state == IS_PULL_DOWN_2) {
                if (this.trYTop / this.refreshConfigurator.getMaxTranslate() < 0.75) {
                    this.closeRefresh();
                }
                else {
                    this.state = IS_REFRESHING;
                    this.trYTop = this.refreshConfigurator.getMaxTranslate() * 0.75;
                    clearInterval(this.timer);
                    this.timer = setInterval(() => {
                        if (this.value >= 1) {
                            this.value -= 1;
                        }
                        else {
                            this.value += 10 / this.refreshConfigurator.getRefreshAnimDuration();
                        }
                        // 保留3位小数
                        this.value = Math.round(this.value * 1000) / 1000;
                        // 刷新中动画采用系统组件，因此不用自己去执行动画
                        // 如果有刷新中动画回调，就执行刷新中动画回调
                        if (this.onAnimRefreshing) {
                            this.onAnimRefreshing(this.value, this.mWidthNumber, this.trYTop);
                        }
                    }, 10);
                    this.onRefresh().then((refreshText) => {
                        if (refreshText.length == 0) {
                            this.closeRefresh();
                        }
                        else {
                            this.state = IS_REFRESHED;
                            if (!this.customRefresh) {
                                this.refreshText = refreshText;
                            }
                            setTimeout(() => {
                                this.closeRefresh();
                            }, 1000);
                        }
                    });
                }
            }
        }
        else if (this.trYBottom < 0) { // 上拉结束
            if (this.state == IS_FREE || this.state == IS_PULL_UP_1 || this.state == IS_PULL_UP_2) {
                if (-this.trYBottom / this.refreshConfigurator.getMaxTranslate() < 0.75) {
                    this.closeLoad();
                }
                else {
                    this.state = IS_LOADING;
                    this.trYBottom = -this.refreshConfigurator.getMaxTranslate() * 0.75;
                    clearInterval(this.timer);
                    this.timer = setInterval(() => {
                        if (this.value >= 1) {
                            this.value -= 1;
                        }
                        else {
                            this.value += 0.01;
                        }
                        // 保留2位小数
                        this.value = Math.round(this.value * 100) / 100;
                        // 如果没有自定义加载中动画，就执行内置加载中动画
                        if (!this.customLoad) {
                            this.drawLoadView(false, this.value);
                        }
                        // 如果有加载中动画回调，就执行加载中动画回调
                        if (this.onAnimLoading) {
                            this.onAnimLoading(this.value, this.mWidthNumber, -this.trYBottom);
                        }
                    }, 10);
                    this.onLoadMore().then((loadText) => {
                        this.closeLoad();
                    });
                }
            }
        }
        else {
            this.state = IS_FREE;
        }
    }
    getTranslateYOfRefresh(newTranslateY) {
        var maxTranslateY = this.refreshConfigurator.getMaxTranslate();
        var sensitivity = this.refreshConfigurator.getSensitivity();
        // 阻尼值计算
        if (this.trYTop / maxTranslateY < 0.2) {
            newTranslateY = newTranslateY * 1 * sensitivity;
        }
        else if (this.trYTop / maxTranslateY < 0.4) {
            newTranslateY = newTranslateY * 0.8 * sensitivity;
        }
        else if (this.trYTop / maxTranslateY < 0.6) {
            newTranslateY = newTranslateY * 0.6 * sensitivity;
        }
        else if (this.trYTop / maxTranslateY < 0.8) {
            newTranslateY = newTranslateY * 0.4 * sensitivity;
        }
        else {
            newTranslateY = newTranslateY * 0.2 * sensitivity;
        }
        // 下拉值计算
        if (this.trYTop + newTranslateY > maxTranslateY) {
            return maxTranslateY;
        }
        else if (this.trYTop + newTranslateY < 0) {
            return 0;
        }
        else {
            return this.trYTop + newTranslateY;
        }
    }
    getTranslateYOfLoadMore(newTranslateY) {
        var maxTranslateY = this.refreshConfigurator.getMaxTranslate();
        var sensitivity = this.refreshConfigurator.getSensitivity();
        // 阻尼值计算
        if (this.trYBottom / maxTranslateY > -0.2) {
            newTranslateY = newTranslateY * 1 * sensitivity;
        }
        else if (this.trYBottom / maxTranslateY > -0.4) {
            newTranslateY = newTranslateY * 0.8 * sensitivity;
        }
        else if (this.trYBottom / maxTranslateY > -0.6) {
            newTranslateY = newTranslateY * 0.6 * sensitivity;
        }
        else if (this.trYBottom / maxTranslateY > -0.8) {
            newTranslateY = newTranslateY * 0.4 * sensitivity;
        }
        else {
            newTranslateY = newTranslateY * 0.2 * sensitivity;
        }
        // 下拉值计算
        if (this.trYBottom + newTranslateY < -maxTranslateY) {
            return -maxTranslateY;
        }
        else if (this.trYBottom + newTranslateY > 0) {
            return 0;
        }
        else {
            return this.trYBottom + newTranslateY;
        }
    }
    drawRefreshView(value) {
        if (this.trYTop >= this.refreshConfigurator.getRefreshHeight()) {
            this.canvasRefresh.clearRect(0, 0, this.refreshConfigurator.getRefreshWidth(), this.refreshConfigurator.getRefreshHeight());
            // 绘制圆环
            this.canvasRefresh.beginPath();
            this.canvasRefresh.arc(this.refreshRingOx, this.refreshRingOy, this.refreshRingRadius, 0, Math.PI * 2);
            this.canvasRefresh.stroke();
            // 绘制卫星
            value = value > 0.75 ? 0.75 : value;
            this.canvasRefresh.beginPath();
            this.canvasRefresh.arc(value * (this.refreshPoint2x - this.refreshPoint1x) + this.refreshPoint1x, value * (this.refreshPoint2y - this.refreshPoint1y) + this.refreshPoint1y, this.refreshConfigurator.getRefreshHeight() / 20 + 1, 0, Math.PI * 2);
            this.canvasRefresh.fill();
        }
    }
    drawLoadView(isPullUp, value) {
        if (isPullUp) {
            if (this.trYBottom <= -this.refreshConfigurator.getLoadImgHeight()) {
                if (value < 0.75) {
                    this.angle1 = 0;
                    this.loadText = this.refreshConfigurator.getLoadTextPullUp1();
                }
                else {
                    this.angle1 = 180;
                    this.loadText = this.refreshConfigurator.getLoadTextPullUp2();
                }
            }
            else {
                this.loadText = '';
            }
        }
        else {
            this.angle2 = value * 360;
            this.loadText = this.refreshConfigurator.getLoadTextLoading();
        }
    }
    closeRefresh() {
        clearInterval(this.timer);
        Context.animateTo({ duration: this.refreshConfigurator.getAnimDuration() }, () => {
            this.trYTop = 0;
        });
        setTimeout(() => {
            this.state = IS_FREE;
            this.refreshText = '';
        }, this.refreshConfigurator.getAnimDuration());
    }
    closeLoad() {
        clearInterval(this.timer);
        Context.animateTo({ duration: this.refreshConfigurator.getAnimDuration() }, () => {
            this.trYBottom = 0;
        });
        this.state = IS_FREE;
        this.loadText = '';
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=PullToRefresh.js.map