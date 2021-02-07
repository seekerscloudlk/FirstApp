export default class RoomDTO{
  private _roomId: string;
  private _roomName: string;
  private _roomType: string;
  private _sleeps: number;
  private _cost: number;
  private _count: number;
  private _size: number;
  private _description: string;
  private _petsAllowedState: boolean;
  private _images: Array<any>;
  private _facilities: Array<any>;
  private _state: boolean;
  private _other: Array<any>;


  constructor(roomId: string, roomName: string, roomType: string, sleeps: number, cost: number, count: number, size: number, description: string, petsAllowedState: boolean, images: Array<any>, facilities: Array<any>, state: boolean, other: Array<any>) {
    this._roomId = roomId;
    this._roomName = roomName;
    this._roomType = roomType;
    this._sleeps = sleeps;
    this._cost = cost;
    this._count = count;
    this._size = size;
    this._description = description;
    this._petsAllowedState = petsAllowedState;
    this._images = images;
    this._facilities = facilities;
    this._state = state;
    this._other = other;
  }


  get roomId(): string {
    return this._roomId;
  }

  set roomId(value: string) {
    this._roomId = value;
  }

  get roomName(): string {
    return this._roomName;
  }

  set roomName(value: string) {
    this._roomName = value;
  }

  get roomType(): string {
    return this._roomType;
  }

  set roomType(value: string) {
    this._roomType = value;
  }

  get sleeps(): number {
    return this._sleeps;
  }

  set sleeps(value: number) {
    this._sleeps = value;
  }

  get cost(): number {
    return this._cost;
  }

  set cost(value: number) {
    this._cost = value;
  }

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get petsAllowedState(): boolean {
    return this._petsAllowedState;
  }

  set petsAllowedState(value: boolean) {
    this._petsAllowedState = value;
  }

  get images(): Array<any> {
    return this._images;
  }

  set images(value: Array<any>) {
    this._images = value;
  }

  get facilities(): Array<any> {
    return this._facilities;
  }

  set facilities(value: Array<any>) {
    this._facilities = value;
  }

  get state(): boolean {
    return this._state;
  }

  set state(value: boolean) {
    this._state = value;
  }

  get other(): Array<any> {
    return this._other;
  }

  set other(value: Array<any>) {
    this._other = value;
  }
}
