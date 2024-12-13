import { MenuPage } from '@pages/menu'
import {
    SathcelCryptosystemCommon,
    SathcelCryptosystemDemo,
    SathcelCryptosystemEditorial,
    SathcelCryptosystemTest
} from '@pages/satchelCryptosystem'
import { SigninPage } from '@pages/signin'
import { SignupPage } from '@pages/signup'
import { RFC } from '@shared/types/component'


export const routes: RFC[] = [
    MenuPage,
    SigninPage,
    SignupPage,
    SathcelCryptosystemCommon,
    SathcelCryptosystemEditorial,
    SathcelCryptosystemTest,
    SathcelCryptosystemDemo,
]
