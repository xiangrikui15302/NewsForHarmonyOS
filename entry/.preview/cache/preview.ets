struct preview{build(){Tabs(){
        ForEach(
          this.tabsArr,
          (item:NewsCategoryModel,index)=>{
            TabContent(){
              NewsList()
            }
            .tabBar(this.tabBarBuilder(item,index))
          }
        )
      }
      .barMode(BarMode.Scrollable)
      .onChange(index => {
        this.currentIndex = index
      })
      // .vertical(false)

      .width('100%')}}