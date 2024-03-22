import { CommonConstants } from '../../common/constants/CommonConstants'
import VideoSwipper from './VideoSwipper'
import WaterFlowView from './WaterFlowView'
@Preview
@Component
export default struct VideoView {
  build() {
    Column({space: CommonConstants.SPACE_10}){

      VideoSwipper()
        .height(160)
        .width('90%')
        .margin({
          top:20
        })
      WaterFlowView()
    }
    .width('100%')
    .height('100%')
  }
}