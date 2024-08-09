/* eslint-disable react/prop-types */
const FooterLink = ({ text }) => {
    return (
        <a className="hover-underline" href="#">{text}</a>
    )
}

const FooterIcons = ({ icon }) => {
    return (
        <a href="#">{icon}</a>
    )
}

export { FooterLink, FooterIcons }