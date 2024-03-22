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
export class PullToRefreshConfigurator {
    constructor() {
        this.hasRefresh = true; // 是否具有下拉刷新功能
        this.hasLoadMore = true; // 是否具有上拉加载功能
        this.maxTranslate = 100; // 可下拉上拉的最大距离
        this.sensitivity = 0.7; // 下拉上拉灵敏度
        this.listIsPlacement = true; // 滑动结束后列表是否归位
        this.animDuration = 150; // 滑动结束后，回弹动画执行时间
        this.refreshHeight = 30; // 下拉动画高度
        this.refreshColor = '#999999'; // 下拉动画颜色
        this.refreshBackgroundColor = 'rgba(0,0,0,0)'; // 下拉动画区域背景色
        this.refreshTextColor = '#999999'; // 下拉加载完毕后提示文本的字体颜色
        this.refreshTextSize = 18; // 下拉加载完毕后提示文本的字体大小
        this.refreshAnimDuration = 1000; // 下拉动画执行一次的时间
        this.loadImgHeight = 30; // 上拉图片高度
        this.loadBackgroundColor = 'rgba(0,0,0,0)'; // 上拉动画区域背景色
        this.loadTextColor = '#999999'; // 上拉文本的字体颜色
        this.loadTextSize = 18; // 上拉文本的字体大小
        this.loadTextPullUp1 = '正在上拉刷新...'; // 上拉1阶段文本
        this.loadTextPullUp2 = '放开刷新'; // 上拉2阶段文本
        this.loadTextLoading = '正在玩命加载中...'; // 上拉加载更多中时的文本
    }
    setHasRefresh(hasRefresh) {
        this.hasRefresh = hasRefresh;
        return this;
    }
    getHasRefresh() {
        return this.hasRefresh;
    }
    setHasLoadMore(hasLoadMore) {
        this.hasLoadMore = hasLoadMore;
        return this;
    }
    getHasLoadMore() {
        return this.hasLoadMore;
    }
    setMaxTranslate(maxTranslate) {
        this.maxTranslate = maxTranslate;
        return this;
    }
    getMaxTranslate() {
        return this.maxTranslate;
    }
    setSensitivity(sensitivity) {
        this.sensitivity = sensitivity;
        return this;
    }
    getSensitivity() {
        return this.sensitivity;
    }
    setListIsPlacement(listIsPlacement) {
        this.listIsPlacement = listIsPlacement;
        return this;
    }
    getListIsPlacement() {
        return this.listIsPlacement;
    }
    setAnimDuration(animDuration) {
        this.animDuration = animDuration;
        return this;
    }
    getAnimDuration() {
        return this.animDuration;
    }
    getRefreshWidth() {
        return this.refreshHeight / 3 * 4;
    }
    setRefreshHeight(refreshHeight) {
        this.refreshHeight = refreshHeight;
        return this;
    }
    getRefreshHeight() {
        return this.refreshHeight;
    }
    setRefreshColor(refreshColor) {
        this.refreshColor = refreshColor;
        return this;
    }
    getRefreshColor() {
        return this.refreshColor;
    }
    setRefreshBackgroundColor(refreshBackgroundColor) {
        this.refreshBackgroundColor = refreshBackgroundColor;
        return this;
    }
    getRefreshBackgroundColor() {
        return this.refreshBackgroundColor;
    }
    setRefreshTextColor(refreshTextColor) {
        this.refreshTextColor = refreshTextColor;
        return this;
    }
    getRefreshTextColor() {
        return this.refreshTextColor;
    }
    setRefreshTextSize(refreshTextSize) {
        this.refreshTextSize = refreshTextSize;
        return this;
    }
    getRefreshTextSize() {
        return this.refreshTextSize;
    }
    setRefreshAnimDuration(refreshAnimDuration) {
        this.refreshAnimDuration = refreshAnimDuration;
        return this;
    }
    getRefreshAnimDuration() {
        return this.refreshAnimDuration;
    }
    setLoadImgHeight(loadImgHeight) {
        this.loadImgHeight = loadImgHeight;
        return this;
    }
    getLoadImgHeight() {
        return this.loadImgHeight;
    }
    setLoadBackgroundColor(loadBackgroundColor) {
        this.loadBackgroundColor = loadBackgroundColor;
        return this;
    }
    getLoadBackgroundColor() {
        return this.loadBackgroundColor;
    }
    setLoadTextColor(loadTextColor) {
        this.loadTextColor = loadTextColor;
        return this;
    }
    getLoadTextColor() {
        return this.loadTextColor;
    }
    setLoadTextSize(loadTextSize) {
        this.loadTextSize = loadTextSize;
        return this;
    }
    getLoadTextSize() {
        return this.loadTextSize;
    }
    setLoadTextPullUp1(loadTextPullUp1) {
        this.loadTextPullUp1 = loadTextPullUp1;
        return this;
    }
    getLoadTextPullUp1() {
        return this.loadTextPullUp1;
    }
    setLoadTextPullUp2(loadTextPullUp2) {
        this.loadTextPullUp2 = loadTextPullUp2;
        return this;
    }
    getLoadTextPullUp2() {
        return this.loadTextPullUp2;
    }
    setLoadTextLoading(loadTextLoading) {
        this.loadTextLoading = loadTextLoading;
        return this;
    }
    getLoadTextLoading() {
        return this.loadTextLoading;
    }
}
//# sourceMappingURL=PullToRefreshConfigurator.js.map