import NewModel, { NewsType } from '../../model/NewModel'
import NewsListViewModel from '../../viewmodel/NewsListViewModel'
import NewsListItem from './NewsListItem'
import { PullToRefresh } from '@ohos/pulltorefresh'
import toastUtil from '../../common/utils/ToastUtil'
import router from '@ohos.router'
import BasicDataSource from '../../common/utils/BasicDataSource'
import thermal from '@ohos.thermal'

class NewsDataSource extends BasicDataSource {
  private dataArray: NewModel[] = [];

  public totalCount(): number {
    return this.dataArray.length;
  }

  public getData(index: number): NewModel {
    return this.dataArray[index];
  }

  public addData(index: number, data: NewModel): void {
    this.dataArray.splice(index, 0, data);
    this.notifyDataAdd(index);
  }

  public pushData(data: NewModel): void {
    this.dataArray.push(data);
    this.notifyDataAdd(this.dataArray.length - 1);
  }

  public pushDatas(datas: NewModel[]): void {
    datas.forEach( data => {
      this.pushData(data);
    })
  }

  public deleteData(index: number): void {
    this.dataArray.splice(index, 1);
    this.notifyDataDelete(index);
  }

  public deleteDataAll(): void {
    this.dataArray = []
  }

  public reloadData(): void {
    this.notifyDataReload();
  }
}


@Component
export default struct NewsList {
  @Prop categoryId:number
  @State newsList: NewsDataSource = new NewsDataSource()
  // 需绑定列表或宫格组件
  private scroller: Scroller = new Scroller();
  private pageNo = 1
  private timer:null|number=null;

  async aboutToAppear(){
    let newsList = await NewsListViewModel.getNewsListByCategory(this.categoryId,1)
    this.newsList.pushDatas(newsList)
  }

  build() {
    Column() {
      PullToRefresh({
        // 必传项，列表组件所绑定的数据
        data: $newsList,
        // 必传项，需绑定传入主体布局内的列表或宫格组件
        scroller: this.scroller,
        // 必传项，自定义主体布局，内部有列表或宫格组件
        customList:() => {
          // 一个用@Builder修饰过的UI方法
          this.getListView();
        },
        // 可选项，下拉刷新回调
        onRefresh: () => {
          this.pageNo = 1
          return new Promise<string>((resolve, reject) => {
            NewsListViewModel.getNewsListByCategory(this.categoryId,this.pageNo)
              .then(newsList => {
                resolve('刷新成功');
                this.newsList.deleteDataAll()
                this.newsList.pushDatas(newsList);
              })
              .catch(error => {
                reject(error)
              })
          });

        },
        // 可选项，上拉加载更多回调
        onLoadMore: () => {
          this.pageNo += 1
          return new Promise<string>((resolve, reject) => {
            NewsListViewModel.getNewsListByCategory(this.categoryId,this.pageNo)
              .then(newsList => {
                resolve('');
                if(newsList.length === 0){
                  this.pageNo -= 1
                  toastUtil.showToast('没有更多了')
                } else {
                  resolve('');
                  this.newsList.pushDatas(newsList);
                }
              })
              .catch(error => {
                this.pageNo -= 1
                reject(error)
              })
          });
        },
        customLoad: null,
        customRefresh: null,
      })
    }
  }

  @Builder
  private getListView() {
    List({ space: 3 , scroller: this.scroller }) {
      LazyForEach(this.newsList, (item: NewModel, index?:number) => {
        ListItem() {
          NewsListItem({newsModel:item})
            //组件挂载显示触发
            .onAppear(() => {
              if(index){
                console.log(" onAppear: index="+index + ' content= ' +this.newsList.getData(index) );
              }
            })
              //组件卸载载显示触发
            .onDisAppear(()=>{
              if(index) {
                console.log(" onDisAppear: index=" + index + ' content= ' + this.newsList.getData(index));
              }
            })
            .onClick(()=>{
              if(item.type == NewsType.littleVideoCardType || item.type == NewsType.bigVideoCardType ){
                router.pushUrl({
                  url:'pages/VideoPage'
                })
                return
              }
              router.pushUrl({
                url:'pages/NewsWebVIewPage',
                params:{webUrl:item.contentUrl}
              })

            })
          }
      }, (item: string) => item);
    }.cachedCount(5)
    .width('90%')
    .edgeEffect(EdgeEffect.None) // 必须设置列表为滑动到边缘无效果
  }
  aboutToDisappear() {
    clearTimeout(this.timer);
    this.newsList.deleteDataAll();
  }
}