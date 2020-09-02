import React, { ReactNode } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../../styles/index.scss'
import layoutStyles from './layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <Header />
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout
