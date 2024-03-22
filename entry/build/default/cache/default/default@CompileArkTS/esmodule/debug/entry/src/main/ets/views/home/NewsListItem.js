import NewModel, { NewsType } from '@bundle:com.yuzhaopan.news/entry/ets/model/NewModel';
import BigVideoCard from '@bundle:com.yuzhaopan.news/entry/ets/views/home/card/BigVieoCard';
import LittleCard from '@bundle:com.yuzhaopan.news/entry/ets/views/home/card/LittileCard';
import LittleVideoCard from '@bundle:com.yuzhaopan.news/entry/ets/views/home/card/LittleVideoCard';
import RightImage from '@bundle:com.yuzhaopan.news/entry/ets/views/home/card/RightImage';
import ThreeImages from '@bundle:com.yuzhaopan.news/entry/ets/views/home/card/ThreeImages';
export default class NewsListItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__newsModel = new ObservedPropertyObjectPU(new NewModel(), this, "newsModel");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.newsModel !== undefined) {
            this.newsModel = params.newsModel;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__newsModel.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__newsModel.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get newsModel() {
        return this.__newsModel.get();
    }
    set newsModel(newValue) {
        this.__newsModel.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.newsModel.type === NewsType.littleVideoCardType) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new LittleVideoCard(this, { newsModel: this.__newsModel }, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
                });
            }
            else if (this.newsModel.type === NewsType.rightImageCardType) {
                this.ifElseBranchUpdateFunction(1, () => {
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new RightImage(this, { newsModel: this.__newsModel }, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
                });
            }
            else if (this.newsModel.type === NewsType.threeImageCardType) {
                this.ifElseBranchUpdateFunction(2, () => {
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new ThreeImages(this, { newsModel: this.__newsModel }, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
                });
            }
            else if (this.newsModel.type === NewsType.bigVideoCardType) {
                this.ifElseBranchUpdateFunction(3, () => {
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new BigVideoCard(this, { newsModel: this.__newsModel }, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(4, () => {
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new LittleCard(this, { newsModel: this.__newsModel }, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=NewsListItem.js.map