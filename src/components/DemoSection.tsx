
import { Sparkles } from 'lucide-react'
import React from 'react'

interface DemoSectionProps {
  
}

export default function DemoSection(props: DemoSectionProps ) {
  return (
    <section className="flex justify-around mt-12 items-center">
    <div className="bg-gray-800/60 w-[240px] h-[480px] rounded-xl"></div>
        < Sparkles className="h-6 w-6" />
    <div className="bg-gray-800/60 w-[240px] h-[480px] rounded-xl"></div>
  </section>
  )
}
