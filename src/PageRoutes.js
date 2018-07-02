import { createStackNavigator } from 'react-navigation';
import TabBarPage from './HomeTabRoutes'
import Assets from './components/asset/asset'
import CurrencyDetail from './components/asset/currencyDetail'
import Transfer from './components/asset/transfer'
import Receipt from './components/asset/receipt'
import Guide from './guide/guide'
import CreateWallet from './components/my/wallet/createWallet'
import ImportWallet from './components/my/wallet/importWallet'
<<<<<<< HEAD
import AboutUs from './components/my/aboutus'
import UserPolicy from './components/my/userpolicy'
import PrivacyPolicy from './components/my/privacypolicy'
import Versions from './components/my/versions'
=======
import WalletInfo from './components/asset/walletInfo'
import ExportMnemonic from './components/asset/exportMnemonic'
>>>>>>> 317b7d954bdbb8b946c3d8f3ac5e2279025f4ed0

export default createStackNavigator(
    {
        Guide: {
            screen: Guide,
            navigationOptions: {
                header: null
            }
        },
        Assets: {
            screen: Assets,
            navigationOptions: {
                header: null,
                gesturesEnabled: false
            }
        },
        TabBarPage: {
            screen: TabBarPage,
            navigationOptions: {
                header: null,
                gesturesEnabled: false
            }
        },
        CurrencyDetail: CurrencyDetail,
        Transfer: Transfer,
        Receipt: Receipt,
        CreateWallet: CreateWallet,
        ImportWallet: ImportWallet,
<<<<<<< HEAD
        AboutUs,
        UserPolicy,
        PrivacyPolicy,
        Versions
=======
        WalletInfo: {
            screen: WalletInfo,
            navigationOptions: {
                headerTitle: '账户信息'
            }
        },
        ExportMnemonic: {
            screen: ExportMnemonic,
            navigationOptions: {
                headerTitle: '导出助记词'
            }
        },
>>>>>>> 317b7d954bdbb8b946c3d8f3ac5e2279025f4ed0
    },
    {
        initialRouteName: 'Guide',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#000'
        }
    }
)


