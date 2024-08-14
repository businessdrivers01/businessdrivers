import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {
  Home,
  Layout,
  About,
  Contact,
  SEO,
  SMM,
  PPC,
  WebDev,
  ContentWriting,
  CreativesBranding,
  AllServices,
  PrivacyPolicy,
  TermsAndConditions
} from './components/index.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />} />

      <Route path='about' element={<About />} />

      <Route path='contact' element={<Contact />} />

      <Route path="/seo" element={<SEO />} />
      <Route path="/social-media-marketing" element={<SMM />} />
      <Route path="/ppc" element={<PPC />} />
      <Route path="/web-dev" element={<WebDev />} />
      <Route path="/content-writing" element={<ContentWriting />} />
      <Route path="/creatives-branding" element={<CreativesBranding />} />
      <Route path="/all-services" element={<AllServices />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
