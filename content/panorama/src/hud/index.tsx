import React, { useCallback, useState } from 'react';
import { render, useGameEvent } from 'react-panorama';

import { disableDefaultUI, enableDefaultUI } from '../utils/ui'
import { PICKING_EVENTS } from '../types/event'

import GameLayout from './layouts/GameLayout'
import HeroSelectionLayout from './layouts/HeroSelectionLayout'

import './style.less'

disableDefaultUI()

/**
 * @description hud入口文件
 * 1. 初始化时，展示英雄选择界面
 * 2. 如果触发PICKING_DONE事件，则表明所有玩家都选择好了英雄，进入游戏界面
 */
function Entry () {
  /** States */
  const [isStarted, setIsStarted] = useState(false)

  /** Functions */
  const onPickingDone = useCallback(() => {
    setIsStarted(true)
  }, [setIsStarted])

  /** Events */
  useGameEvent(PICKING_EVENTS.DONE, onPickingDone)

  if (!isStarted) {
    return <HeroSelectionLayout />
  }

  return <GameLayout />
}

render(<Entry />, $.GetContextPanel());
