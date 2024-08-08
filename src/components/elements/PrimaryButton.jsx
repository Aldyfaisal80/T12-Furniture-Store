/* eslint-disable react/prop-types */
const PrimaryButton = ({ children  }) => {
    return (
        <>
            {children}
        </>
    )
}
const WhiteButton = ({ className , text }) => {
    return (
        <button className={`bg-white text-primary-blue border-2 border-primary-blue p-2 w-[120px] rounded-bl-xl rounded-tr-xl ${className}`}>{text}</button>
    )
}

const BlueButton = ({ className , text }) => {
    return (
        <button className={`bg-primary-blue text-white p-2 w-[120px] rounded-bl-xl rounded-tr-xl ${className}`}>{text}</button>
    )
}

PrimaryButton.WhiteButton = WhiteButton
PrimaryButton.BlueButton = BlueButton

export default PrimaryButton