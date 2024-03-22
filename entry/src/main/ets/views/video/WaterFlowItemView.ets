import VideoModel, { videoType } from '../../model/VideoModel'
import BigVideoFlowItem from './BigVideoFlowItem'
import SmallVideoFlowItem from './SmallVideoFlowItem'
@Component
export default struct WaterFlowItemView {

  @State videoModel:VideoModel = new VideoModel()
  build() {
    Column(){
      if(this.videoModel.type  === videoType.smallVideo) {
        SmallVideoFlowItem({videoModel: $videoModel})
      } else {
        BigVideoFlowItem({videoModel: $videoModel})
      }

    }
  }
}