//Creating Footer in a seperate file.
// In React, the function that returns UI (like- function Footer()) is called a Component. A Component name must start with a Capital letter (e.g. App, Cart), otherwise React may treat it as an HTML tag.

function Footer() {
    return (
        <div>
            <hr />
            <p>Copyright 2026 @All Rights Reserved</p>
        </div>
    )
}

export default Footer
// export default:- Makes this component available to be imported and used in other files.