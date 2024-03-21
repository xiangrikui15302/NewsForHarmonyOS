import { CommonConstants } from '../common/constants/CommonConstants'
import HomeView from '../views/home/HomeView'
import MineView from '../views/mine/MineView'
import VideoView from '../views/video/VideoView'
@Entry
@Component
struct Index {
  @State message: string = 'Hello World'

  @State currentIndex: number = 0

  build() {
    Row() {
      Tabs({
        barPosition: BarPosition.End,
      }) {
        TabContent(){
          HomeView()

        }
        .tabBar(this.tabBarBuilder('新闻',$r('app.media.tabbarhome'),0))

        TabContent(){
          VideoView()
        }
        .tabBar(this.tabBarBuilder('视频',$r('app.media.video_icon'),1))

        TabContent(){
          MineView()
        }
        .tabBar(this.tabBarBuilder('我的',$r('app.media.mine_icon'),2))
      }
      .barHeight(70)
      .onChange((index: number) => {
        this.currentIndex = index
      })

    }
    .height('100%')
  }

  @Builder tabBarBuilder(name: string, image:ResourceStr, index: number){
    Column({space:CommonConstants.SPACE_4}) {
      Image(image)
        .width(40)
        .fillColor(this.currentIndex === index ? $r('app.color.primary_color') : $r('app.color.light_gray'))
      Text(name)
        .fontColor(this.currentIndex === index ? $r('app.color.primary_color') : $r('app.color.light_gray'))
        .fontSize(15)
        .fontWeight(this.currentIndex === index ? 500 : 400)

    }.width('100%')
  }
}