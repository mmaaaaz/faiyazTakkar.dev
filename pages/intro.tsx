import React, { useEffect, useState } from 'react'
import { IGlobalLayoutProps } from './_app'
import { NextPage, GetStaticProps } from 'next'
import { prepareIntroPageSeo } from '../utils/seo/intro'
import CoreLink from '../components/core/CoreLink'

interface IProps extends IGlobalLayoutProps {
  pageData: {}
}

const Intro: NextPage<IProps> = props => {
  return (
    <div className="pt-5 lg:pt-8 lg:ml-72">
      <div className="px-5 md:px-10 pb-20">
        <div className="text-2xl font-bold font-primary-bold">Detailed introduction</div>

        <p className="mt-6">
          So you might have already learnt about my love for building digital products, but this isn't a newly-found
          love. I've been learning technology since the age of 12.
        </p>

        <p className="mt-5">
          Born and raised in{' '}
          <CoreLink
            url="https://en.wikipedia.org/wiki/Dharavi"
            className="border-dashed border-b border-funBlue text-funBlue"
            isExternal>
            Dharavi
          </CoreLink>{' '}
          (Asia's largest slum). Have also worked at a small-scale Jeans producing factory for almost a year when I was
          17/18.
        </p>

        <p className="mt-5">
          After some stability, I began working on full-stack web applications for learning. Worked with various
          programming languages and open-sourced them all. Did this for more 2 years.
        </p>

        <p className="mt-5">
          Got my first job offer as a front-end developer from People Interactive when I was 19. Job role was to build
          features end-to-end for users.
        </p>

        <p className="mt-5">
          My other interests include literature, travelling, fictional books, economics and history.
        </p>
      </div>
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
