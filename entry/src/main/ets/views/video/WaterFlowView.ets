import router from '@ohos.router';
import VideoModel from '../../model/VideoModel';
import VideoDataSource from '../../viewmodel/VideoDataSource';
import videoViewModel from '../../viewmodel/VideoViewModel';
import WaterFlowItemView from './WaterFlowItemView';
@Component
export default struct WaterFlowView {
  @State datasource: VideoDataSource<VideoModel> = new VideoDataSource<VideoModel>();

  aboutToAppear(){

    videoViewModel.getVideoList()
    .then(value => {
      this.datasource.pushDatas(value)
    })
    .catch(error => {

    })


  }

  build() {
    Row(){
      WaterFlow({ footer: this.itemFoot.bind(this) }) {
        LazyForEach(
          this.datasource,
          (item: VideoModel, index) => {
          FlowItem() {
            WaterFlowItemView({videoModel:item})
              .onClick(() => {
                router.pushUrl({
                  url:'pages/VideoPage'
                })
              })
          }

        }, item => item)
      }
      .columnsTemplate("1fr 1fr")
      .itemConstraintSize({
        minWidth: 0,
        maxWidth: '100%',
        minHeight: 0,
        maxHeight: '100%'
      })
      .columnsGap(10)
      .rowsGap(5)
      .onReachStart(() => {
        console.info("onReachStart")
      })
      .onReachEnd(() => {
        console.info("onReachEnd")
      })
      .width('90%')
      .height('80%')
      .layoutDirection(FlexDirection.Column)
    }
  }

  @Builder
  itemFoot() {
    Column() {
      Text('已经到最低了')
        .fontColor(Color.Gray)
        .fontSize(14)
        .width('100%')
        .height(60)
        .textAlign(TextAlign.Center)
    }
  }
  aboutToDisappear() {
    this.datasource.deleteDataAll();
  }
}