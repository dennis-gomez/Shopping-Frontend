import ErrorMessage from "../atoms/error";
import Input from "../atoms/input";
import Label from "../atoms/label";

type InputLabeledProps = {
    inputType: string;
    inputPlaceHolder: string;
    inputValue: string | number;
    inputName: string;
    inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    labelText: string;
    labelColor?: string;
    errorMessage?: string;
}

const InputLabeled: React.FC<InputLabeledProps> = ({ 
    inputType, 
    inputPlaceHolder, 
    inputValue, 
    inputName,
    inputOnChange, 
    labelText, 
    labelColor, 
    errorMessage
 }) => {
    return (
        <>
            <div
                className="inputLabeled"
            >
                <Label 
                    text={labelText} 
                    color={labelColor} 
                />
                <Input 
                    type={inputType} 
                    value={inputValue}
                    name={inputName}
                    placeholder={inputPlaceHolder} 
                    onChange={inputOnChange}
                /> 
                {(errorMessage) && 
                    <ErrorMessage 
                        message={errorMessage}
                    />
                }
            </div>
        </>
    );
}

export default InputLabeled;