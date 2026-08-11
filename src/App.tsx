import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SmoothScrollProvider, ThemeProvider } from '@/components/providers'
import { RootLayout } from '@/components/layout/root-layout'
import { ScrollToTop } from '@/components/layout/scroll-to-top'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <BrowserRouter>
        <SmoothScrollProvider>
          <ScrollToTop />
          <Routes>
            <Route element={<RootLayout />}>
              <Route index element={<HomePage />} />
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
