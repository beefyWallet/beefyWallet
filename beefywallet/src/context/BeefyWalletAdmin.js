import BeefyWalletHeaderAndSideBar from './BeefyWalletHeaderAndSideBar'
import BeefyWalletMain from './BeefyWalletMain'
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
