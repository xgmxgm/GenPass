import { FC, useState } from 'react'
import { useTranslation } from "react-i18next"

import "./Main.scss"
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button';
import { Range } from '@/shared/ui/Range/Range';

export const Main: FC = () => {
    const [lenght, setLenght] = useState<number>(1);
    const [value, setValue] = useState('');
    const [upper, setUpper] = useState(false);
    const [lower, setLower] = useState(false);
    const [number, setNumber] = useState(false);
    const [symbol, setSymbol] = useState(false);

    const { t } = useTranslation();

    const getAllKey = (num: number) => {
        let text = '';
        let password = '';

        if (upper) {
            for (let item = 65; item < 90; item++) {
                text += String.fromCharCode(item);
            }
        }

        if (lower) {
            for (let item = 97; item < 122; item++) {
                text += String.fromCharCode(item);
            }
        }

        if (number) {
            for (let item = 48; item < 58; item++) {
                text += String.fromCharCode(item);
            }
        }

        if (symbol) {
            for (let item = 33; item < 47; item++) {
                text += String.fromCharCode(item);
            }

            for (let item = 58; item < 64; item++) {
                text += String.fromCharCode(item);
            }

            for (let item = 91; item < 96; item++) {
                text += String.fromCharCode(item);
            }

            for (let item = 123; item < 126; item++) {
                text += String.fromCharCode(item);
            }
        }

        for (let item = 0; item < num; item++) {
            password += text[Math.floor(Math.random() * text.length)]
        }

        if (!upper && !lower && !number && !symbol) {
            password = '';
        }

        return password
    }

    const RangeVal = (event: React.ChangeEvent<HTMLInputElement>) => {        
        const curren_number = event.target.value;
        setLenght(Number(curren_number));
    }

    return (
    <main>
        <Input value={value} />
        {/* <input className='range' type="range" min="1" max="15" value={lenght} onChange={RangeVal as () => void} /> */}
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
        <Button onClick={() => setValue(getAllKey(lenght))}>{t("main.button")}</Button>
    </main>
    )
}