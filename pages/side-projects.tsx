import React, { useEffect, useState } from 'react'
import { IGlobalLayoutProps } from './_app'
import { NextPage, GetStaticProps } from 'next'
import { prepareSideProjectsPageSeo } from '../utils/seo/side-projects'

interface IProps extends IGlobalLayoutProps {
  pageData: {}
}

const SideProjects: NextPage<IProps> = props => {
  return (
    <div className="pt-5 lg:pt-8 lg:ml-72">
      <div className="px-5 md:px-10 pb-20">
        <div className="text-2xl font-bold font-primary-bold">Few of my side projects</div>

        <p className="mt-6">Coming soon...</p>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IProps> = async context => {
  return {
    props: {
      pageData: null,
      seo: prepareSideProjectsPageSeo(),
      layoutData: {},
    },
  }
}

export default SideProjects
