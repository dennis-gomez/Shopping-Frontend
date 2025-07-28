import React from "react"
import Paragraph from "../atoms/paragraph";
import HeadingThree from "../atoms/headingThree";

type ParagraphHeadedProps = {
    label: string;
    paragraph: string;
}

const ParagraphHeaded: React.FC<ParagraphHeadedProps> = ({
    label, 
    paragraph
}) => {
    return(
        <>
        <div>
            <HeadingThree 
                label={label}
                className=""
            />

            <Paragraph 
                paragraph={paragraph}
                className=""
            />
        </div>
        </>
    );
}
export default ParagraphHeaded;