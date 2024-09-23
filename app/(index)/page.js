'use client'
import dynamic from 'next/dynamic'

const Landing = dynamic(() => import('../../components/landing'));

export default async function Index() {
  return <Landing />
}
