import type React from "react";

type ErrorMessageProps = {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
    message
}) => {
    return(
        <>
            <p
                className="error-message"
            >
                {message}
            </p>
        </>
    );
}

export default ErrorMessage;