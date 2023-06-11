import { FC } from 'react'

import "./Layout.scss"
import { Header } from '@/widgets/Header'
import { Main } from '@/widgets/Main'

export const Layout: FC = () => {
    return (
        <div className='Layout'>
            <Header />
            <Main />
        </div>
    )
}