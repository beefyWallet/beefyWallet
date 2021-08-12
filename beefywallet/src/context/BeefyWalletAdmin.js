import BeefyWalletHeaderAndSideBar from './BeefyWalletHeaderAndSideBar'
import BeefyWalletMain from './BeefyWalletMain'
import { useRouter } from 'next/dist/client/router'

const BeefyWalletAdmin = ({ children }) => {
  return (
    <>
      <BeefyWalletHeaderAndSideBar>
        <BeefyWalletMain>{children}</BeefyWalletMain>
      </BeefyWalletHeaderAndSideBar>
    </>
  )
}
export default BeefyWalletAdmin
