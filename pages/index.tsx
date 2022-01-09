import React, { useEffect, useState } from 'react'
import { IGlobalLayoutProps } from './_app'
import { NextPage, GetStaticProps } from 'next'
import { prepareHomePageSeo } from '../utils/seo/home'
import CoreImage from '../components/core/CoreImage'
import appConfig from '../config/appConfig'
import CoreLink from '../components/core/CoreLink'
import dayjs from 'dayjs'

interface IProps extends IGlobalLayoutProps {
  pageData: {}
}

const Home: NextPage<IProps> = props => {
  const age = dayjs().diff(dayjs(appConfig.global.birthDate), 'year')

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
          <h2 className="mt-12 mb-6 text-3xl lg:text-4xl font-black font-primary-bold">
            <span className="text-gray600">Hi, I'm </span>
            {appConfig.global.name} ({appConfig.global.nickName})
          </h2>
        </div>

        <div className="post-content text-lg text-gray900">
          <p className="">
            A {age}-year old <span className="font-medium font-primary-medium">full-stack developer</span> and an{' '}
            <span className="font-medium font-primary-medium">open-sourcer</span>. Currently a consultant at ESPN
            re-writing the world's largest cricket platform{' '}
            <CoreLink
              url="https://www.espncricinfo.com"
              isExternal
              className="border-dashed border-b border-funBlue text-funBlue">
              ESPNcricinfo
            </CoreLink>
            .
          </p>

          <p className="mt-8">
            I like to build advanced yet beautiful digital products with technology that suits them best.
          </p>

          <p className="mt-8">
            On weekends I like to do nothing. Sometimes I would read poetry just to remind myself beauty still exists in
            this world.
          </p>

          <p className="mt-8">
            I've recently open-sourced a profitable product named{' '}
            <CoreLink
              url="https://ownstore.dev"
              isExternal
              className="border-dashed border-b border-funBlue text-funBlue">
              OwnStore
            </CoreLink>{' '}
            for the community. Helps businesses set up their online store instantly with a few configurable projects.
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
