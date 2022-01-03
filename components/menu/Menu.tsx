import { AnnotationIcon, BriefcaseIcon, ChipIcon, ExternalLinkIcon, HomeIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { SOCIAL_ICONS_SRC_MAP } from '../../constants/constants'
import { getHomePageUrl } from '../../utils/home'
import CoreActiveLink from '../core/CoreActiveLink'
import CoreImage from '../core/CoreImage'
import { DesktopView, MobileView } from '../ResponsiveViews'

const PAGE_LINKS = [
  {
    label: 'Home',
    icon: HomeIcon,
    url: getHomePageUrl(),
  },
  {
    label: 'Detailed Intro',
    icon: AnnotationIcon,
    url: 's',
  },
  {
    label: 'Side Projects',
    icon: ChipIcon,
    url: 'ssa',
  },
  {
    label: 'Work',
    icon: BriefcaseIcon,
    url: 'ssaa',
  },
]

const SOCIAL_LINKS = [
  {
    label: 'Twitter',
    iconUrl: SOCIAL_ICONS_SRC_MAP.TWITTER,
    isExternal: true,
    url: getHomePageUrl(),
  },
  {
    label: 'GitHub',
    iconUrl: SOCIAL_ICONS_SRC_MAP.GITHUB,
    isExternal: true,
    url: getHomePageUrl(),
  },
  {
    label: 'LinkedIn',
    iconUrl: SOCIAL_ICONS_SRC_MAP.LINKEDIN,
    isExternal: true,
    url: getHomePageUrl(),
  },
  {
    label: 'Instagram',
    iconUrl: SOCIAL_ICONS_SRC_MAP.INSTAGRAM,
    isExternal: true,
    url: getHomePageUrl(),
  },
  {
    label: 'Email',
    iconUrl: SOCIAL_ICONS_SRC_MAP.MAIL,
    isExternal: false,
    url: getHomePageUrl(),
  },
]

interface IMenuProps {}

const MenuContent: React.FC<IMenuProps> = () => {
  return (
    <div>
      <div>
        {PAGE_LINKS.map((pageLink, index) => {
          const defaultIcon = () => null
          const Icon = pageLink.icon || defaultIcon

          return (
            <CoreActiveLink
              key={pageLink.label}
              url={pageLink.url}
              className="flex items-center hover:bg-gray100 transition-all rounded-lg w-full px-4 py-2 mb-2"
              activeClassName="bg-primary hover:bg-primary text-white">
              <Icon className="w-6 h-6 mr-2" />
              <span>{pageLink.label}</span>
            </CoreActiveLink>
          )
        })}
      </div>

      <div className="mt-6 mb-2 text-gray600 ml-4">Social</div>
      <div>
        {SOCIAL_LINKS.map((socialLink, index) => {
          return (
            <CoreActiveLink
              key={socialLink.label}
              url={socialLink.url}
              className="flex items-center hover:bg-gray100 transition-all rounded-lg w-full px-4 py-2 mb-2">
              <CoreImage className="w-5 h-5 mr-2" alt={socialLink.label} url={socialLink.iconUrl} />
              <span>{socialLink.label}</span>
              {socialLink.isExternal ? <ExternalLinkIcon className="w-4 h-4 text-gray400 ml-auto" /> : null}
            </CoreActiveLink>
          )
        })}
      </div>
    </div>
  )
}

interface IMenuMobileProps extends IMenuProps {}

const MenuMobile: React.FC<IMenuMobileProps> = props => {
  const [showMenu, toggleMenu] = useState(false)

  return (
    <div>
      {!showMenu ? (
        <div className="fixed bottom-0 left-0 z-10 block w-full p-2" onClick={() => toggleMenu(true)}>
          <div className="border border-gray400 rounded-lg text-black bg-white/70 backdrop-filter backdrop-blur py-3 text-center cursor-pointer">
            Menu
          </div>
        </div>
      ) : null}

      {showMenu ? (
        <div className="fixed bottom-0 left-0 right-0 p-2 m-2 bg-white/70 backdrop-filter backdrop-blur border border-gray400 rounded-lg">
          <div className="py-3 text-center cursor-pointer text-black" onClick={() => toggleMenu(false)}>
            Close
          </div>
          <MenuContent />
        </div>
      ) : (
        false
      )}
    </div>
  )
}

interface IMenuDesktopProps extends IMenuProps {}

const MenuDesktop: React.FC<IMenuDesktopProps> = props => {
  return (
    <div className="bg-white w-64 border-r border-gray200 h-screen pt-6 pb-10 flex flex-col px-4">
      <MenuContent />
    </div>
  )
}

const Menu: React.FC<IMenuProps> = props => {
  return (
    <div>
      <MobileView useCSS>
        <MenuMobile {...props} />
      </MobileView>
      <DesktopView useCSS>
        <MenuDesktop {...props} />
      </DesktopView>
    </div>
  )
}

export default Menu
