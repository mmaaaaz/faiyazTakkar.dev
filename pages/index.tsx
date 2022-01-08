import React, { useEffect, useState } from 'react'
import { IGlobalLayoutProps } from './_app'
import { NextPage, GetStaticProps } from 'next'
import { prepareHomePageSeo } from '../utils/seo/home'
import CoreImage from '../components/core/CoreImage'
import appConfig from '../config/appConfig'
import CoreLink from '../components/core/CoreLink'

interface IProps extends IGlobalLayoutProps {
  pageData: {}
}

const Home: NextPage<IProps> = props => {
  return (
    <div className="pt-5 lg:pt-8 lg:ml-72">
      <div className="px-5 md:px-10 pb-20 lg:max-w-[620px] absolute lg:left-1/2 lg:-translate-x-1/2 ">
        <div>
          <CoreImage
            url="/images/logo.jpeg"
            alt={appConfig.global.fullName}
            className="w-full mb-10 rounded-lg max-h-[500px] shadow-2xl object-cover"
          />
        </div>

        <div>
          <h2 className="mt-12 mb-6 text-3xl font-black md:text-5xl font-primary-bold">
            <span className="text-gray600">Hi, I'm </span>
            {appConfig.global.fullName}!
          </h2>
        </div>

        <div className="post-content text-lg text-gray900">
          <p className="">
            I'm a <span className="font-medium font-primary-medium">full-stack developer</span> by profession, currently
            a consultant at ESPN re-writing world's largest cricket platform{' '}
            <CoreLink url="https://www.espncricinfo.com" isExternal className="underline">
              ESPNcricinfo
            </CoreLink>
            .
          </p>

          <p className="mt-8">
            I like to build advanced yet beautiful digital products with technology that suites best.
          </p>

          <p className="mt-8">
            On weekends I like to do nothing. Sometimes I would read poetry just to remind myself beauty still exists in
            this world. But these days most of my free time is dedicated to building{' '}
            <CoreLink url="https://ownstore.dev" isExternal className="underline">
              OwnStore
            </CoreLink>
            .
          </p>
        </div>
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

export default Home
