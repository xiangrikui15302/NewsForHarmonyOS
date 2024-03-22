import { HttpConstants } from '../common/constants/HttpConstants'
import NewModel from '../model/NewModel'
import {NewsCategoryModel} from '../model/NewsCategoryModel'
import axios from '@ohos/axios'
import hilog from '@ohos.hilog'
import Logger from '../common/utils/Logger'
import Prompt from '@system.prompt'
import ToastUtil from '../common/utils/ToastUtil'
class NewsListViewModel{

  private newsPath: string = HttpConstants.HOSTURL+HttpConstants.NEWSPATH
  /**
   * 获取分类
   * @returns
   */

  getAllCategorys(): Promise<NewsCategoryModel[]>{
    return new Promise((receive,reject)=>{
      let url = this.newsPath + HttpConstants.CategoryListUrl
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
   * 根据分类id获取新闻列表
   * @param categoryId
   * @param pageNo
   * @returns
   */
  getNewsListByCategory(categoryId: number, pageNo: number): Promise<NewModel[]>{
    return new Promise((receive,reject)=>{
      let url = this.newsPath + HttpConstants.NewsListUrl
      axios.get(
        url,
        {
          params:{"pageNo": pageNo},// get时的参数
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

let newsListViewModel = new NewsListViewModel()
export default newsListViewModel as NewsListViewModel