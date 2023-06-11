import { FC, useState } from 'react'
import { useTranslation } from "react-i18next"

import "./Main.scss"
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button';
import { Range } from '@/shared/ui/Range';
import { getAllKey } from '@/features/GetAllKey';

export const Main: FC = () => {
    const [lenght, setLenght] = useState<number>(1);
    const [value, setValue] = useState('');
    const [upper, setUpper] = useState(false);
    const [lower, setLower] = useState(false);
    const [number, setNumber] = useState(false);
    const [symbol, setSymbol] = useState(false);

    const { t } = useTranslation();

    const Get_All_Key = (num: number) => {
        const password = getAllKey(num, upper, lower, number, symbol);
        return password;
    }

    const RangeVal = (event: React.ChangeEvent<HTMLInputElement>) => {        
        const curren_number = event.target.value;
        setLenght(Number(curren_number));
    }

    return (
    <main>
        <Input value={value} />
        <Range min="1" max="15" value={lenght} onChange={RangeVal as () => void} />
        <h2>{t("main.length")}: {lenght}</h2>
        <div className='Effect'>
            <input type="checkbox" onClick={() => setUpper(!upper)} />
            <h2>{t("main.upper")}</h2>
        </div>
        <div className="Effect">
            <input type="checkbox" onClick={() => setLower(!lower)} />
            <h2>{t("main.lower")}</h2>
        </div>
        <div className="Effect">
            <input type="checkbox" onClick={() => setNumber(!number)} />
            <h2>{t("main.number")}</h2>
        </div>
        <div className="Effect">
            <input type="checkbox" onClick={() => setSymbol(!symbol)} />
            <h2>{t("main.symbol")}</h2>
        </div>
        <Button onClick={() => setValue(Get_All_Key(lenght))}>{t("main.button")}</Button>
    </main>
    )
}