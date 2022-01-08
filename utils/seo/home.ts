import { IAppSeoProps } from '../../components/seo/AppSeo'
import appConfig from '../../config/appConfig'
import { getHomePageUrl } from '../home'

// http://localhost:3005/
export const prepareHomePageSeo = (): IAppSeoProps => {
  return {
    title: `Hi, I'm ${appConfig.global.fullName}!`,
    description: `I'm a digital product builder by profession.`,
    canonical: getHomePageUrl(),
    keywords: ['Faiyaz', 'Takkar', 'yTakkar', 'Faiyaz Shaikh'],
  }
}
