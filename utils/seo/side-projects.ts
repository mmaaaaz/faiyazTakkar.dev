import { IAppSeoProps } from '../../components/seo/AppSeo'
import appConfig from '../../config/appConfig'
import { getSideProjectsPageUrl } from '../side-projects'
import { COMMON_KEYWORDS } from './constants'

// http://localhost:3005/side-projects
export const prepareSideProjectsPageSeo = (): IAppSeoProps => {
  return {
    title: `Side projects - ${appConfig.global.fullName}`,
    description: `My side projects.`,
    canonical: getSideProjectsPageUrl(),
    keywords: [...COMMON_KEYWORDS],
  }
}
