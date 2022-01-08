import React, { useEffect, useState } from 'react'
import { IGlobalLayoutProps } from './_app'
import { NextPage, GetStaticProps } from 'next'
import { prepareIntroPageSeo } from '../utils/seo/intro'

interface IProps extends IGlobalLayoutProps {
  pageData: {}
}

const Intro: NextPage<IProps> = props => {
  return (
    <div className="pt-5 lg:pt-8 lg:ml-72">
      <div className="px-5 md:px-10 pb-20">Some text</div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IProps> = async context => {
  return {
    props: {
      pageData: null,
      seo: prepareIntroPageSeo(),
      layoutData: {},
    },
  }
}

export default Intro
