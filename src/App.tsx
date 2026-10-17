import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import About from './pages/About'
import ArticleDetail from './pages/ArticleDetail'
import Articles from './pages/Articles'
import Cities from './pages/Cities'
import CityDetail from './pages/CityDetail'
import Configure from './pages/Configure'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProcessPage from './pages/ProcessPage'
import Projects from './pages/Projects'
import ServiceDetail from './pages/ServiceDetail'
import ServicesPage from './pages/Services'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="xizmatlar" element={<ServicesPage />} />
        <Route path="xizmatlar/:slug" element={<ServiceDetail />} />
        <Route path="konfigurator" element={<Configure />} />
        <Route path="loyihalar" element={<Projects />} />
        <Route path="jarayon" element={<ProcessPage />} />
        <Route path="biz-haqimizda" element={<About />} />
        <Route path="savollar" element={<FaqPage />} />
        <Route path="hududlar" element={<Cities />} />
        <Route path="hududlar/:slug" element={<CityDetail />} />
        <Route path="maqolalar" element={<Articles />} />
        <Route path="maqolalar/:slug" element={<ArticleDetail />} />
        <Route path="aloqa" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
