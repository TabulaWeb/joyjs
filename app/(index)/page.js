'use client'
import dynamic from 'next/dynamic'

const Landing = dynamic(() => import('../../components/landing'), { ssr: false });

export default function Index() {
  return <Landing />
}
