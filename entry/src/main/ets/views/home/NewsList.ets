import NewModel from '../../model/NewModel'
import NewsListViewModel from '../../viewmodel/NewsListViewModel'
import NewsListItem from './NewsListItem'
@Component
export default struct NewsList {
  @Prop categoryId:number
  @State newsList: NewModel[] = []

  async aboutToAppear(){
    this.newsList = await NewsListViewModel.getNewsListByCategory(this.categoryId,1)
  }

  build() {
    Row(){
      List(){
        ForEach(
          this.newsList,
          (news: NewModel,index) => {
            ListItem() {
              NewsListItem({newsModel: news})
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