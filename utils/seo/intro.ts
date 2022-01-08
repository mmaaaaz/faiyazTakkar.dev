import { IAppSeoProps } from '../../components/seo/AppSeo'
import appConfig from '../../config/appConfig'
import { getWorkPageUrl } from '../work'
import { COMMON_KEYWORDS } from './constants'

// http://localhost:3005/intro
export const prepareIntroPageSeo = (): IAppSeoProps => {
  return {
    title: `Detailed introduction - ${appConfig.global.fullName}`,
    description: `My detailed introduction.`,
    canonical: getWorkPageUrl(),
    keywords: [...COMMON_KEYWORDS],
  }
}
