import { HttpConstants } from '../../common/constants/HttpConstants'
import BannerModel from '../../model/BannerModel'
import videoViewModel from '../../viewmodel/VideoViewModel'
@Component
export default struct VideoSwipper {
  private swiperController: SwiperController = new SwiperController()
  @State bannerList:BannerModel[] = []

  async aboutToAppear(){
    this.bannerList = await videoViewModel.getBannerData()
  }

  build() {
    Row(){
      Swiper(this.swiperController) {
        ForEach(
          this.bannerList,
          (item:BannerModel,index) => {
            this.swipperContentBuilder(item.image)
          }
        )
      }
      .loop(true)
      .autoPlay(true)
      .indicatorStyle({
        size: 30,
        color: $r('app.color.light_gray'),
        selectedColor: $r('app.color.primary_color'),
      })
      .indicator(true)
    }
  }

  @Builder swipperContentBuilder(imageUrl: string){
    Row(){
      Image(HttpConstants.HOSTURL+imageUrl)
        .width('100%')
        .height('100%')
        .borderRadius(10)
    }
  }
}