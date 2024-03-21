import { CommonConstants } from '../../common/constants/CommonConstants'
import HomeHeaderView from './HomeHeaderView'
import NewsList from './NewsList'
@Preview
@Component
export default struct HomeView {

  private tabsArr: string[] = ['推荐', '快讯','深度', '体育','法治','娱乐','国际']

  @State currentIndex: number = 0

  build() {
    Column(){
      HomeHeaderView()
        .height(60)
      Tabs(){
        ForEach(
          this.tabsArr,
          (item:string,index)=>{
            TabContent(){
              NewsList()
            }
            .tabBar(this.tabBarBuilder(item,index))
          }
        )
      }
      .barMode(BarMode.Scrollable)
      .onChange(index => {
        this.currentIndex = index
      })
      // .vertical(false)

      .width('100%')
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
}