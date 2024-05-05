import React, {FC, ReactNode} from 'react';

type TButton = 'button' | 'reset' | 'submit';

interface IBlueButton {
    className?: string
    children?: ReactNode,
    backgroundBtn?: string,
    colorText?: string,
    widthBtn?: string,
    heightBtn?: string,
    paddingGtn?: string,
    fontSIzeBnt?: string,
    fontWeightBnt?: string,
    type: TButton,
    disable?: boolean,
    border?: string
}

const BlueButton: FC<IBlueButton> = (
    {
        children,
        backgroundBtn = '#79a6ec',
        colorText = 'white',
        widthBtn = 'fit-content',
        heightBtn = 'fit-content',
        paddingGtn = '8px 24px',
        fontSIzeBnt = '12px',
        fontWeightBnt = '400',
        type = "button",
        disable = false,
        border = 'none'
    }
) => {
    return (
        <button style={{
            background: backgroundBtn,
            color: colorText,
            width: widthBtn,
            height: heightBtn,
            padding: paddingGtn,
            fontSize: fontSIzeBnt,
            fontWeight: fontWeightBnt,
            outline: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            boxSizing: 'border-box',
            border: border,
            letterSpacing: '1px'
        }} type={type} disabled={disable}>{children}</button>
    );
}

export default BlueButton;