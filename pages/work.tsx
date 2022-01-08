import React, { useEffect, useState } from 'react'
import { IGlobalLayoutProps } from './_app'
import { NextPage, GetStaticProps } from 'next'
import { prepareWorkPageSeo } from '../utils/seo/work'
import workConfig from '../config/workConfig'
import CoreImage from '../components/core/CoreImage'
import appConfig from '../config/appConfig'
import CoreLink from '../components/core/CoreLink'

interface IProps extends IGlobalLayoutProps {
  pageData: {}
}

const Work: NextPage<IProps> = props => {
  const workExperienceList = workConfig.list

  return (
    <div className="pt-5 lg:pt-8 lg:ml-72">
      <div className="px-5 md:px-10 pb-20">
        <div className="text-2xl font-bold font-primary-bold">My work experience!</div>

        <div className="mt-6 grid grid-cols-1 lg:gap-y-4">
          {workExperienceList.map((workExperience, index) => {
            return (
              <div key={index} className="flex items-start py-4">
                <div>
                  <CoreImage
                    url={workExperience.company.logo}
                    alt={`${appConfig.global.fullName}'s work experience at ${workExperience.company.name}`}
                    className="w-14 h-14 mr-3 relative top-[6px]"
                  />
                </div>
                <div>
                  <div className="font-medium font-primary-medium">{workExperience.role}</div>
                  <div className="text-sm mt-1">
                    {workExperience.company.name} - {workExperience.location}
                  </div>
                  <div className="text-sm text-gray700">
                    {workExperience.experience.from} - {workExperience.experience.to} •{' '}
                    {workExperience.experience.total}
                  </div>
                  <div className="mt-1">
                    {workExperience.company.urls.map((url, index) => (
                      <CoreLink
                        key={index}
                        url={url.href}
                        isExternal
                        className="text-sm border-dashed border-b border-funBlue text-funBlue mr-2">
                        {url.label}
                      </CoreLink>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IProps> = async context => {
  return {
    props: {
      pageData: null,
      seo: prepareWorkPageSeo(),
      layoutData: {},
    },
  }
}

export default Work
