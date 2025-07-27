import Input from "../atoms/input";
import Label from "../atoms/label";

type InputLabeledProps = {
    inputType: string;
    inputClassName: string;
    inputPlaceHolder: string;
    inputValue: string | number;
    inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    labelText: string;
    labelColor: string;
    labelClassName: string;
}

const InputLabeled: React.FC<InputLabeledProps> = ({ 
    inputType, 
    inputClassName, 
    inputPlaceHolder, 
    inputValue, 
    inputOnChange, 
    labelText, 
    labelColor, 
    labelClassName
 }) => {
    return (
        <>
            <div>
                <Input 
                    type={inputType} 
                    value={inputValue}
                    className={inputClassName} 
                    placeholder={inputPlaceHolder} 
                    onChange={inputOnChange}
                />
                <Label 
                    text={labelText} 
                    color={labelColor} 
                    className={labelClassName} 
                />
            </div>
        </>
    );
}

export default InputLabeled;