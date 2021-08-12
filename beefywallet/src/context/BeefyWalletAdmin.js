import BeefyWalletHeaderAndSideBar from './BeefyWalletHeaderAndSideBar'
import BeefyWalletMain from './BeefyWalletMain'
const BeefyWalletAdmin = ({ children }) => {
  console.log(children[1].type[1])
  return (
    <>
      <BeefyWalletHeaderAndSideBar>
        <BeefyWalletMain>{children}</BeefyWalletMain>
      </BeefyWalletHeaderAndSideBar>
    </>
  )
}
export default BeefyWalletAdmin
