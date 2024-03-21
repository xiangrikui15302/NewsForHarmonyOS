import BigVideoCard from './card/BigVieoCard'
import LittleCard from './card/LittileCard'
import LittleVideoCard from './card/LittleVideoCard'
import RightImage from './card/RightImage'
import ThreeImages from './card/ThreeImages'
@Component
export default struct NewsListItem {
  build() {
    Row(){
      // LittleCard()
      // RightImage()
      // ThreeImages()
      // BigVideoCard()
      LittleVideoCard()
    }
  }
}