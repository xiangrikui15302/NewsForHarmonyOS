import { CommonConstants } from '../../common/constants/CommonConstants'
import NewModel from '../../model/NewModel'
import { NewsCategoryModel } from '../../model/NewsCategoryModel'
import NewsListViewModel from '../../viewmodel/NewsListViewModel'
import HomeHeaderView from './HomeHeaderView'
import NewsList from './NewsList'
@Component
export default struct HomeView {

  @State tabsArr: NewsCategoryModel[] = []

  @State
  @Watch("refreshCategoryId")
  currentIndex: number = 0
  @State categoryId:number = 0


  async aboutToAppear(){
    this.tabsArr = await NewsListViewModel.getAllCategorys()
    this.refreshCategoryId()
  }

  refreshCategoryId(){
    if(this.tabsArr.length > 0){
      this.categoryId = this.tabsArr[this.currentIndex].id
    }
  }

  build() {
    Column(){
      HomeHeaderView()
        .height(60)
      if(this.tabsArr.length == 0) {
        this.FailLayout()
      }else {
        Tabs(){
          ForEach(
            this.tabsArr,
            (item:NewsCategoryModel,index)=>{
              TabContent(){
                NewsList({categoryId: this.categoryId})
              }
              .tabBar(this.tabBarBuilder(item.name,index))
            }
          )
        }
        .barMode(BarMode.Scrollable)
        .onChange(index => {
          this.currentIndex = index
        })
        .width('100%')
        .layoutWeight(1)
      }

    }
    .width('100%')
    .height('100%')
  }

  @Builder tabBarBuilder(name:string, index: number){
    Column(){

      Text(name)
        .height('100%')
        .padding({ left: 10, right: 10 })
        .fontSize(this.currentIndex === index ? 20 : 18)
        .fontWeight(this.currentIndex === index ? CommonConstants.FONT_WEIGHT_600 : 350)
        .fontColor(this.currentIndex === index ?$r('app.color.blue'):$r('app.color.gray'))

    }
  }

  @Builder FailLayout() {
    Column(){
      Image($r('app.media.none'))
        .height(120)
        .width(120)
      Text('网络请求失败')
        .fontSize(16)
        .fontColor($r('app.color.light_gray'))
        .margin({ top: 10 })
    }
    .layoutWeight(1)

  }
}