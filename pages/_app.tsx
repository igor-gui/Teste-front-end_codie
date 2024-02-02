import type { AppProps } from 'next/app'
import MainLayout from '@/components/MainLayout'
import GlobalStyle from '@/styles/GlobalStyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
