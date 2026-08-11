import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SmoothScrollProvider, ThemeProvider } from '@/components/providers'
import { RootLayout } from '@/components/layout/root-layout'
import { ScrollToTop } from '@/components/layout/scroll-to-top'
import {
  AiProductEngineeringPage,
  AiSoftwarePlmPage,
  CaseStudiesPage,
  ContactPage,
  HealthcarePage,
  HomePage,
  KnowledgeGraphsPage,
  LegacyMaintenancePage,
  ManufacturingPage,
  MicroGccPage,
  NotFoundPage,
  PharmaPage,
  RealEstatePage,
  TalentPodsPage,
  TechnologiesPage,
  UiUxModernizationPage,
} from '@/pages'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <BrowserRouter>
        <SmoothScrollProvider>
          <ScrollToTop />
          <Routes>
            <Route element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route
                path="capabilities/ai-product-engineering"
                element={<AiProductEngineeringPage />}
              />
              <Route path="services/ai-software-plm" element={<AiSoftwarePlmPage />} />
              <Route path="services/legacy-maintenance" element={<LegacyMaintenancePage />} />
              <Route path="services/knowledge-graphs" element={<KnowledgeGraphsPage />} />
              <Route path="services/ui-ux-modernization" element={<UiUxModernizationPage />} />
              <Route path="technologies" element={<TechnologiesPage />} />
              <Route path="engagement/micro-gcc" element={<MicroGccPage />} />
              <Route path="engagement/talent-pods" element={<TalentPodsPage />} />
              <Route path="case-studies" element={<CaseStudiesPage />} />
              <Route path="industries/real-estate" element={<RealEstatePage />} />
              <Route path="industries/healthcare" element={<HealthcarePage />} />
              <Route path="industries/pharma" element={<PharmaPage />} />
              <Route path="industries/manufacturing" element={<ManufacturingPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route path="/home" element={<Navigate to="/" replace />} />
          </Routes>
        </SmoothScrollProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
