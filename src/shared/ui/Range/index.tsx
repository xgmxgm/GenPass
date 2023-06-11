import "./Range.scss"

interface IProps {
    min: string,
    max: string,
    value: number,
    onChange: () => void,
}

export const Range = (props: IProps) => {
    const { min, max, value, onChange } = props;

    return (
        <div className="middle">
            <div className="slider-container">
                <input className="slider" type="range"  min={min} max={max} value={value} onChange={onChange} />
            </div>
        </div>
    )
}