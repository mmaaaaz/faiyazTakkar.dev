import React, { useContext } from 'react'
import { IGlobalLayoutProps } from './_app'
import { GetStaticProps, NextPage } from 'next'
import PageContainer from '../components/PageContainer'
import { prepareHomePageSeo } from '../utils/seo/home'
import CoreImage from '../components/core/CoreImage'

interface IProps extends IGlobalLayoutProps {
  pageData: {}
}

const NotFoundPage: NextPage<IProps> = props => {
  const { pageData } = props

  return (
    <div className="md:absolute transform md:left-1/2 md:-translate-x-1/2">
      <div className="flex flex-col items-center justify-center mt-20">
        <CoreImage url={'/images/empty/empty-glass.svg'} alt="Page not found" className="w-52 lg:w-60" />
        <div className="text-center text-lg lg:text-xl mt-5">{`We couldn't find the page you were looking for.`}</div>
        <div className="text-center mt-2 lg:mt-3"></div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IProps> = async context => {
  return {
    props: {
      pageData: null,
      seo: prepareHomePageSeo(),
      layoutData: {},
    },
  }
}

export default NotFoundPage
