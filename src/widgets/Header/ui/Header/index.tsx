import { FC } from "react"
import { DesktopHeader } from "../DesktopHeader/index"
import { MobileHeader } from "../MobileHeader/index"

export const Header: FC = () => {

    const widthScreen = window.innerWidth;

    return (
        <>
        { widthScreen >= 701 ? <DesktopHeader /> : <MobileHeader />}
        </>
    )
}