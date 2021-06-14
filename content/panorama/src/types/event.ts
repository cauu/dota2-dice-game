/**
 * @event PICKING_DONE 所有英雄都选择完成后触发
 * @event PICKING_TIME_UPDATE 服务端更新英雄选择事件
 * @event PICKING_PLAYER_PICK 
 */
export enum PICKING_EVENTS {
  DONE = 'PICKING_DONE',
  TIME_UPDATE = 'PICKING_TIME_UPDATE',
  PLAYER_PICKED = 'PICKING_PLAYER_PICKED'
}

export interface PropsPickingTimeUpdate {
  time: string
}

export interface PropsPickingPlayerPicked {
  playerId: string
  heroName: string
}
