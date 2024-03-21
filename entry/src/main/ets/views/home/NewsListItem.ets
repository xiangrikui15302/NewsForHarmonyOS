import NewModel, { NewsType } from '../../model/NewModel'
import BigVideoCard from './card/BigVieoCard'
import LittleCard from './card/LittileCard'
import LittleVideoCard from './card/LittleVideoCard'
import RightImage from './card/RightImage'
import ThreeImages from './card/ThreeImages'
@Component
export default struct NewsListItem {
  @State newsModel:NewModel = new NewModel()
  build() {
    Row(){

      if(this.newsModel.type === NewsType.littleVideoCardType){
        LittleVideoCard({newsModel: $newsModel})
      } else if(this.newsModel.type === NewsType.rightImageCardType){
        RightImage({newsModel: $newsModel})
      } else if(this.newsModel.type === NewsType.threeImageCardType){
        ThreeImages({newsModel: $newsModel})
      } else if(this.newsModel.type === NewsType.bigVideoCardType){
        BigVideoCard({newsModel: $newsModel})
      } else {
        LittleCard({newsModel: $newsModel})
      }

    }
  }
}