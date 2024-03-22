/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
import { PullToRefresh} from '@ohos/pulltorefresh'
class BasicDataSource implements IDataSource{
  private listeners: DataChangeListener[] = new Array<DataChangeListener>();
  public totalCount(): number {
    return 0;
  }
  public getData(index: number): Object {
    return index;
  }
  // 为LazyForEach组件向其数据源处添加listener监听
  registerDataChangeListener(listener: DataChangeListener): void {
    if (this.listeners.indexOf(listener) < 0) {
      console.info('add listener');
      this.listeners.push(listener);
    }
  }
  // 为对应的LazyForEach组件在数据源处去除listener监听
  unregisterDataChangeListener(listener: DataChangeListener): void {
    const pos = this.listeners.indexOf(listener);
    if (pos >= 0) {
      console.info('remove listener');
      this.listeners.splice(pos, 1);
    }
  }
  // 通知LazyForEach组件需要重载所有子组件
  notifyDataReload(): void {
    this.listeners.forEach(listener => {
      listener.onDataReloaded();
    })
  }
  // 通知LazyForEach组件需要在index对应索引处添加子组件
  notifyDataAdd(index: number): void {
    this.listeners.forEach(listener => {
      listener.onDataAdd(index);
    })
  }
  // 通知LazyForEach组件需要在index对应索引处添加子组件
  notifyDataChange(index: number): void {
    this.listeners.forEach(listener => {
      listener.onDataChange(index);
    })
  }
  // 通知LazyForEach组件需要在index对应索引处删除该子组件
  notifyDataDelete(index: number): void {
    this.listeners.forEach(listener => {
      listener.onDataDelete(index);
    })
  }

  notifyDataMove(from: number, to: number): void {
    this.listeners.forEach(listener => {
      listener.onDataMove(from, to);
    })
  }
}

class MyDataSource extends BasicDataSource {
  private dataArray: string[] = [];
  public totalCount(): number {
    return this.dataArray.length;
  }
  public getData(index: number): Object {
    return this.dataArray[index];
  }
  public addData(index: number, data: string): void {
    this.dataArray.splice(index, 0, data);
    this.notifyDataAdd(index);
  }
  public pushData(data: string): void {
    this.dataArray.push(data);
    this.notifyDataAdd(this.dataArray.length - 1);
  }
  public deleteData(index: number): void {
    this.dataArray.splice(index, 1);
    this.notifyDataDelete(index);
  }
  public clear():void{
    this.dataArray = [];
  }
}
@Entry
@Component
struct MyComponent {
  @State  refreshText: string = '';
  @State data: MyDataSource = new MyDataSource();
  // 需绑定列表或宫格组件
  private scroller: Scroller = new Scroller();
  private timer:null|number=null;
  aboutToAppear() {
    for (let i = 1; i <= 20; i++) {
      this.data.pushData(`Hello ${i}`);
    }
  }
  build() {
    Column() {

      this.getListView();
    }
  }

  @Builder
  private getListView() {
    List({ space: 3 , scroller: this.scroller }) {
      LazyForEach(this.data, (item: string, index?:number) => {
        ListItem() {
          Row() {
            Text(item).fontSize(50)
              //组件挂载显示触发
              .onAppear(() => {
                if(index){
                  console.log(" onAppear: index="+index + ' content= ' +this.data.getData(index) );
                }
              })
            //组件卸载载显示触发
              .onDisAppear(()=>{
                if(index) {
                  console.log(" onDisAppear: index=" + index + ' content= ' + this.data.getData(index));
                }
              })
              .onClick(()=>{
                // this.data.pushData('Hell0'+this.data.totalCount())
                this.data.addData(0,'ADD HEAD 0');
              })
          }.margin({ left: 10, right: 10 })
        }
      }, (item: string) => item);
    }.cachedCount(5)
    .backgroundColor('#eeeeee')
    .divider({ strokeWidth: 1, color: 0x222222 })
    .edgeEffect(EdgeEffect.None) // 必须设置列表为滑动到边缘无效果
  }
  aboutToDisappear() {
    clearTimeout(this.timer);
    this.data.clear();
  }


}