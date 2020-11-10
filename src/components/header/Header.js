import React from "react"
import "./header.css"


const Header = () => {
    return (
        <header className="header">
            <div className="header__filho">
                <img src="https://www.secovi.com.br/assets/images/noticias/2020/09/casa-verde-e-amarela-logo,400x133.png "alt="img" className="Logo__Principal" />

                <div className="header_imgs">
                    <img src="https://logodownload.org/wp-content/uploads/2014/02/caixa-logo-4.png" width="40%" alt="img" />
                    <img src="https://lh3.googleusercontent.com/proxy/uF6WeQB_xUXFLAHEogL5cU9ITv0BLcq3xxv5EBOpU-98ttgXLG-_6bDYqhmfy86nfDUD8EuqBS045vrzok1s" width="40%" alt="img" />

                </div>
            </div>


        </header>
    )
}

export default Header;