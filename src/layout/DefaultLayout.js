import React from 'react'
import TopHeader from '../components/header/TopHeader'
import TopSecondHeader from '../components/header/TopSecondHeader';
// AppContent, AppSidebar, AppFooter,
import Sidebar from '../components/header/Sidebar';

const DefaultLayout = () => {
  return (
    <div>
      {/* <AppSidebar /> */}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <TopHeader />
        <TopSecondHeader />
        <Sidebar />
        <div className="body flex-grow-1 px-3"> 
          {/* <AppContent />
        </div>
        <AppFooter /> */}
      </div>
    </div>
    </div>
  )
}

export default DefaultLayout;
