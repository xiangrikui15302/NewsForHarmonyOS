import NewModel from '../../common/model/NewModel'
import NewsListItem from './NewsListItem'
@Component
export default struct NewsList {
  @State newsList: NewModel[] = [new NewModel(), new NewModel(), new NewModel()]
  build() {
    Row(){
      List(){
        ForEach(
          this.newsList,
          (news: NewModel,index) => {
            ListItem() {
              NewsListItem()
            }
          }
        )
      }

      .width('90%')
    }
    .justifyContent(FlexAlign.Center)
    .alignItems(VerticalAlign.Top)
    .width('100%')
    .height('100%')
  }
}