import BasicDataSource from '../common/utils/BasicDataSource';
import VideoModel from '../model/VideoModel';
export default class VideoDataSource<T> extends BasicDataSource{
  private dataArray: T[] = [];

  public setDataArray(dataArray: T[]): void {
    this.dataArray = dataArray;
  }

  public totalCount(): number {
    return this.dataArray.length;
  }

  public getData(index: number): T {
    return this.dataArray[index];
  }

  public addData(index: number, data: T): void {
    this.dataArray.splice(index, 0, data);
    this.notifyDataAdd(index);
  }

  public pushData(data: T): void {
    this.dataArray.push(data);
    this.notifyDataAdd(this.dataArray.length - 1);
  }

  public pushDatas(datas: T[]): void {
    datas.forEach( data => {
      this.pushData(data);
    })
  }

  public deleteData(index: number): void {
    this.dataArray.splice(index, 1);
    this.notifyDataDelete(index);
  }

  public deleteDataAll(): void {
    this.dataArray = []
  }

  public reloadData(): void {
    this.notifyDataReload();
  }
}