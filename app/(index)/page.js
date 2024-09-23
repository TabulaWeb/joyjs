'use client'
// import dynamic from 'next/dynamic'
import React, { lazy } from 'react'
// import Landing from '@/components/landing';
const Landing = lazy(() => import('../../components/landing'));

// const Landing = dynamic(() => import('../../components/landing'), { ssr: false });

export default function Index() {
  return <Landing />
}
