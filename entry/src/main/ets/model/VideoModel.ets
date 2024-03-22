
enum videoType{
  smallVideo = 0,
  bigVideo
}

export default class VideoItem{
  id: number
  type:number
  image:string
  title:string
}



export { videoType };