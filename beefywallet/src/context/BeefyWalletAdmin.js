import BeefyWalletHeaderAndSideBar from './BeefyWalletHeaderAndSideBar'
import Dashboard from '../pages/Dashboard'

import BeefyWalletFooter from './BeefyWalletFooter'

const BeefyWalletAdmin = () => {
  return (
    <>
      <BeefyWalletHeaderAndSideBar>
        <Dashboard />
      </BeefyWalletHeaderAndSideBar>
      {/* <BeefyWalletFooter /> */}
    </>
  )
}
export default BeefyWalletAdmin
