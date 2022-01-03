import React from 'react'
import { SCREEN_SIZE } from '../constants/constants'

export type DEVICE_PROFILE = keyof typeof SCREEN_SIZE

export interface IDeviceInfo {
  isDesktop: boolean
  isMobile: boolean

  isLandscapeMode: boolean

  profile: DEVICE_PROFILE

  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
  is2Xl: boolean
}

export interface IApplicationContextProps {
  device: IDeviceInfo
}

export const defaultApplicationContext: IApplicationContextProps = {
  device: {
    isDesktop: true,
    isMobile: true,

    isLandscapeMode: false,

    profile: 'XL',

    isSm: true,
    isMd: false,
    isLg: false,
    isXl: false,
    is2Xl: false,
  },
}

const ApplicationContext = React.createContext<IApplicationContextProps>(defaultApplicationContext)

export default ApplicationContext
