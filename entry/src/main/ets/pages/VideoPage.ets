@Entry
@Component
struct VideoPage {
  @State isPlay: boolean = false
  @State isClicked: boolean = false
  private controller: VideoController = new VideoController();
  @State durationTime: number = 0
  @State currentTime: number = 0
  build() {
    Row() {
      Stack({ alignContent: Alignment.Bottom }) {

          Video({
            src:$rawfile('videoTest.mp4'),
            previewUri:'',
            controller:this.controller
          })
            .objectFit(ImageFit.Contain)
            .controls(false)
            .width('100%')
            .height('100%')
            .onPrepared((event)=>{
              this.durationTime = event.duration
            })
            .onUpdate(event => {
              this.currentTime = event.time
            })
            .onFinish(() => {
              this.durationTime = 0
              this.currentTime = 0
            })
        if(!this.isClicked){
          Stack(){
            Image($r('app.media.welcome'))
              .width('100%')
              .height(200)

            Image($r('app.media.ic_play'))
              .width(30)
              .onClick(() => {
                this.isClicked = true
                this.isPlay = true
                this.controller.start()

              })
          }
          .width('100%')
          .height('100%')

        }

        Row({space:10}){
          Image(this.isPlay ? $r('app.media.ic_pause') : $r('app.media.ic_play'))
            .width(30)
            .onClick(() => {
              this.isClicked = true
              this.isPlay = !this.isPlay
              this.isPlay ? this.controller.start():this.controller.pause()


            })
          Slider({
            value:this.currentTime,
            min:0,
            max:this.durationTime
          })
            .trackColor(Color.Gray)
            .height(6)
            .layoutWeight(1)
            .onChange(value => {
              this.controller.setCurrentTime(value)
            })
          Text(this.currentTime+':'+this.durationTime)
            .fontColor(Color.White)
        }
        .padding(5)
        .width('100%')
      }
      .width('100%')
      .height('100%')
    }
    .height('100%')
  }
}