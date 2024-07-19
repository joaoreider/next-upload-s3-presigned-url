
import React from 'react'

interface PageHeadersProps {
  h1Text: string;
  h2Text: string;
}

export default function PageHeaders({
    h1Text,
    h2Text
}: PageHeadersProps ) {
  return (

        <section className="text-center mt-24 mb-8">
            <h1 className="text-3xl"> {h1Text}</h1>
            <h2 className="text-opacity-75">{h2Text}</h2>
        </section>
  )
}
