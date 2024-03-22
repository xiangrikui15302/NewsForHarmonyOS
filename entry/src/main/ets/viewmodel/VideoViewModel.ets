import axios from '@ohos/axios'
import { HttpConstants } from '../common/constants/HttpConstants'
import Logger from '../common/utils/Logger'
import ToastUtil from '../common/utils/ToastUtil'
import BannerModel from '../model/BannerModel'
import VideoModel from '../model/VideoModel'
class VideoViewModel {
  private newsPath: string = HttpConstants.HOSTURL+HttpConstants.NEWSPATH

  /**
   * 获取banner数据
   * @returns
   */
  getBannerData():Promise<BannerModel[]>{
    return new Promise((receive,reject) => {
      let url = this.newsPath + HttpConstants.BannerUrl
      axios.get(
        url,
        {
          // params:{"param1": "value1"},// get时的参数
          // data:{"param1": "value1"}  // post时的参数
        }
      ).then(result => {
        if(result.status == 200) {
          Logger.debug(result.data.toString())
          receive(result.data)
        } else {
          ToastUtil.showToast(result.data)
        }

      }).catch(error => {
        reject(error)
        Logger.debug(JSON.stringify(error))
      })
    })
  }

  /**
   * 获取视频数据
   * @returns
   */
  getVideoList():Promise<VideoModel[]> {
    return new Promise((receive, reject) => {
      let url = this.newsPath + HttpConstants.VideoListUrl
      axios.get(
        url,
        {
          // params:{"param1": "value1"},// get时的参数
          // data:{"param1": "value1"}  // post时的参数
        }
      ).then(result => {
        if(result.status == 200) {
          Logger.debug(result.data.toString())
          receive(result.data)
        } else {
          ToastUtil.showToast(result.data)
        }

      }).catch(error => {
        reject(error)
        Logger.debug(JSON.stringify(error))
      })
    })
  }
}

let videoViewModel = new VideoViewModel()
export default videoViewModel as VideoViewModel