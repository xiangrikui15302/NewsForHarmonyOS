import { HttpConstants } from '@bundle:com.yuzhaopan.news/entry/ets/common/constants/HttpConstants';
import axios from '@package:pkg_modules/.ohpm/@ohos+axios@2.2.0/pkg_modules/@ohos/axios/index';
import Logger from '@bundle:com.yuzhaopan.news/entry/ets/common/utils/Logger';
import ToastUtil from '@bundle:com.yuzhaopan.news/entry/ets/common/utils/ToastUtil';
class NewsListViewModel {
    constructor() {
        this.newsPath = HttpConstants.HOSTURL + HttpConstants.NEWSPATH;
    }
    /**
     * 获取分类
     * @returns
     */
    getAllCategorys() {
        return new Promise((receive, reject) => {
            let url = this.newsPath + HttpConstants.CategoryListUrl;
            axios.get(url, {
            // params:{"param1": "value1"},// get时的参数
            // data:{"param1": "value1"}  // post时的参数
            }).then(result => {
                if (result.status == 200) {
                    Logger.debug(result.data.toString());
                    receive(result.data);
                }
                else {
                    ToastUtil.showToast(result.data);
                }
            }).catch(error => {
                reject(error);
                Logger.debug(JSON.stringify(error));
            });
        });
    }
    /**
     * 根据分类id获取新闻列表
     * @param categoryId
     * @param pageNo
     * @returns
     */
    getNewsListByCategory(categoryId, pageNo) {
        return [];
    }
}
let newsListViewModel = new NewsListViewModel();
export default newsListViewModel;
//# sourceMappingURL=NewsListViewModel.js.map