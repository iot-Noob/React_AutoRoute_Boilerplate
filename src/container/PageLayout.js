import React from 'react'
import { lazy,Suspense } from 'react'
import { Route,Routes } from 'react-router-dom'
import ErrorBoundry from '../msic/ErrorBoundary'
const PageContent=lazy(()=>import('./PageContent'))
 
const PageLayout = (children) => {
  return (
   <>
    <ErrorBoundry>
    <PageContent/>
    </ErrorBoundry>
   </>
  )
}

export default PageLayout
