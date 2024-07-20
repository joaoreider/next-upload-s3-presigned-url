
import PageHeaders from '@/components/PageHeaders'
import React from 'react'

interface PricingProps {
  
}

export default function Pricing(props: PricingProps ) {
  return (
    <div>
      <PageHeaders h1Text='Check out our pricing' h2Text='Our pricing is very simple'/>
      <div className='bg-white text-slate-700 rounded-lg p-4 max-w-xs mx-auto text-center'>
        <h3 className='font-bold text-3xl'>Free</h3>
        <h4>Free forever</h4>
      </div>
    </div>
  )
}
