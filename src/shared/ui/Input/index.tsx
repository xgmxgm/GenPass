import { useTranslation } from "react-i18next";

import { Button } from "../Button";
import "./Input.scss"

interface IProps {
    value: any;
}

export const Input = (props: IProps) => {
    const { value } = props

    const { t } = useTranslation();

    const copy = () => {
        navigator.clipboard.writeText(value);
    }

    return (
        <>
            <input className="Input" readOnly type="text" value={value} />
            <Button onClick={copy}>{t("main.copy")}</Button>
        </>
    )
}