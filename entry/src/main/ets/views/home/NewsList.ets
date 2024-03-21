import NewModel, { NewsType } from '../../model/NewModel'
import NewsListViewModel from '../../viewmodel/NewsListViewModel'
import NewsListItem from './NewsListItem'
import { PullToRefresh } from '@ohos/pulltorefresh'
import toastUtil from '../../common/utils/ToastUtil'
import router from '@ohos.router'

@Component
export default struct NewsList {
  @Prop categoryId:number
  @State newsList: NewModel[] = []
  // 需绑定列表或宫格组件
  private scroller: Scroller = new Scroller();
  private pageNo = 1

  async aboutToAppear(){
    this.newsList = await NewsListViewModel.getNewsListByCategory(this.categoryId,1)

  }

  build() {
    Row(){
      PullToRefresh({
        // 必传项，列表组件所绑定的数据
        data: $newsList,
        // 必传项，需绑定传入主体布局内的列表或宫格组件
        scroller: this.scroller,
        // 必传项，自定义主体布局，内部有列表或宫格组件
        customList: () => {
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
                this.newsList = newsList
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

                if(newsList.length === 0){
                  this.pageNo -= 1
                  resolve('');
                  toastUtil.showToast('没有更多了')
                } else {
                  resolve('');
                  this.newsList.push(...newsList)
                }

              })
              .catch(error => {
                reject(error)
                this.pageNo -= 1
              })
          });
        },
        customLoad: null,
        customRefresh: null,
      })
    }
    .justifyContent(FlexAlign.Center)
    .alignItems(VerticalAlign.Top)
    .width('100%')
    .height('100%')
  }

  @Builder
  private getListView() {
    List({scroller: this.scroller}){
      ForEach(
        this.newsList,
        (news: NewModel,index) => {
          ListItem() {
            NewsListItem({newsModel: news})
          }
          .onClick(()=>{
            if(news.type == NewsType.littleVideoCardType || news.type == NewsType.bigVideoCardType ){
              router.pushUrl({
                url:'pages/VideoPage'
              })
              return
            }
            router.pushUrl({
              url:'pages/NewsWebVIewPage',
              params:{webUrl:news.contentUrl}
            })
          })
        }
      )
    }
    .edgeEffect(EdgeEffect.None)
    .width('90%')
  }
}