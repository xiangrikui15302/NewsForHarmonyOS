export enum NewsType {
  littleCardType = 1,
  rightImageCardType,
  threeImageCardType,
  littleVideoCardType,
  bigVideoCardType
}


export default class NewModel {
  id: number
  title: string
  author: string
  type:number
  images: string[]

}