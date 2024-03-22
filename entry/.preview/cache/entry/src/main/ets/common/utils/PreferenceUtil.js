import preferences from '@ohos:data.preferences';
import { CommonConstants } from '@bundle:com.yuzhaopan.news/entry/ets/common/constants/CommonConstants';
import Logger from '@bundle:com.yuzhaopan.news/entry/ets/common/utils/Logger';
class PreferenceUtil {
    async loadPreference(context) {
        try { // 加载preferences
            this.pref = await preferences.getPreferences(context, CommonConstants.H_STORE);
            Logger.debug(`加载Preferences[${CommonConstants.H_STORE}]成功`);
        }
        catch (e) {
            Logger.debug(`加载Preferences[${CommonConstants.H_STORE}]失败`, JSON.stringify(e));
        }
    }
    async putPreferenceValue(key, value) {
        if (!this.pref) {
            Logger.debug(`Preferences[${CommonConstants.H_STORE}]尚未初始化！`);
            return;
        }
        try {
            // 写入数据
            await this.pref.put(key, value);
            // 刷盘
            await this.pref.flush();
            Logger.debug(`保存Preferences[${key} = ${value}]成功`);
        }
        catch (e) {
            Logger.debug(`保存Preferences[${key} = ${value}]失败`, JSON.stringify(e));
        }
    }
    async getPreferenceValue(key, defaultValue) {
        if (!this.pref) {
            Logger.debug(`Preferences[${CommonConstants.H_STORE}]尚未初始化！`);
            return;
        }
        try {
            // 读数据
            let value = await this.pref.get(key, defaultValue);
            Logger.debug(`读取Preferences[${key} = ${value}]成功`);
            return value;
        }
        catch (e) {
            Logger.debug(`读取Preferences[${key}]失败`, JSON.stringify(e));
        }
    }
}
const preferenceUtil = new PreferenceUtil();
export default preferenceUtil;
//# sourceMappingURL=PreferenceUtil.js.map