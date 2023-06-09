import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import './Header.css'

const HeaderARR = [
    { id: 0, text: "Home", link: "a" },
    { id: 1, text: "Skills", link: "#skills" },
    { id: 2, text: "Portfolio", link: "#portfolio" },
    { id: 3, text: "Contact me", link: "#ContactMe" }];

function Header(props) {
    const [VisibleMenu, setVisibleMenu] = useState(false)
    const [ActiveMenu, setActiveMenu] = useState(false)

    const Msvg = document.querySelector('.motion-svg')
    const handleHeader = () => {
        setVisibleMenu(!VisibleMenu)
        if (ActiveMenu) {
            Msvg.classList.remove('active');
        }
        else {
            Msvg.classList.add('active');
        }
        setActiveMenu(!ActiveMenu)
    }



    useEffect(() => {


    }, [])

    const animationSVG = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    }

    const animationHeader = {
        view: {
            stroke: "#ffff",
            strokeWidth: 4,
            pathLength: 1,
            fill: "#2F2E2A",
            strokeDasharray: "0 1",
            strokeOpacity: "1",
            transition: {
                duration: 15,
                ease: "easeInOut",
                repeat: Infinity,
            },
        },

        initial: {
            fill: "transparent",
            pathLength: 0,
            transition: {
                duration: 1
            }
        }
    }

    const [activeId, setActive] = useState(false)
    if (props.WinWidth > 1220) {
        return (
            <>

                <div id="main-Header" className='main-Header'>
                    <div className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100" height="85" viewBox="0 0 1000.000000 700.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)" fill="#FFFFF" stroke="none">
                                <path d="M4657 5558 l-347 -243 0 -106 c0 -58 3 -208 7 -332 5 -198 8 -227 22 -227 9 0 61 11 116 25 171 42 245 52 255 35 11 -17 14 -2348 4 -2399 -8 -40 -16 -40 -186 0 -73 17 -150 33 -170 36 l-38 6 0 -109 c-1 -60 -3 -210 -6 -334 l-5 -225 336 -235 c185 -129 345 -239 355 -244 14 -6 89 42 364 234 l346 242 0 86 c0 48 -3 198 -7 335 -6 239 -7 247 -26 247 -18 0 -89 -16 -218 -50 -20 -6 -63 -13 -96 -16 l-60 -7 -7 1001 c-4 551 -4 1098 0 1217 6 196 9 215 25 220 25 8 89 -1 243 -37 70 -16 130 -28 132 -26 1 2 6 152 10 334 l7 330 -346 242 c-190 133 -349 242 -354 242 -5 0 -165 -109 -356 -242z" />
                                <path d="M3693 4880 c-349 -246 -409 -289 -482 -348 -58 -46 -165 -154 -214 -217 -26 -33 -56 -69 -67 -80 -11 -12 -20 -26 -20 -32 0 -6 -10 -24 -23 -40 -31 -37 -122 -226 -137 -283 -7 -25 -16 -50 -21 -56 -14 -17 -39 -181 -39 -254 0 -46 -4 -70 -12 -73 -10 -3 -10 -9 0 -26 6 -11 12 -43 12 -70 0 -64 28 -225 40 -229 6 -2 10 -11 10 -19 0 -26 33 -123 42 -123 4 0 8 -6 8 -14 0 -26 48 -117 105 -202 75 -113 294 -331 429 -429 23 -16 46 -35 51 -41 6 -6 57 -44 115 -85 58 -40 110 -78 115 -84 12 -14 213 -155 221 -155 8 0 69 -44 72 -52 2 -5 8 -8 13 -8 5 0 41 -23 80 -51 39 -28 73 -48 76 -45 3 3 2 740 -3 1638 l-9 1634 -362 -256z m-193 -1380 c0 -672 0 -670 -46 -584 -10 19 -21 34 -25 34 -3 0 -14 17 -25 38 -10 20 -22 39 -25 42 -11 9 -67 135 -79 175 -6 22 -15 49 -21 60 -37 82 -37 395 0 480 5 11 14 36 21 55 15 42 71 163 79 170 3 3 15 22 25 43 11 20 23 37 27 37 4 0 10 8 13 18 6 18 42 62 51 62 3 0 5 -283 5 -630z" />
                                <path d="M5960 4842 l0 -289 48 -24 c26 -13 76 -40 111 -61 34 -21 65 -38 67 -38 2 0 38 -23 79 -52 l75 -52 0 -827 0 -826 -55 -37 c-30 -20 -57 -36 -61 -36 -3 0 -20 -11 -37 -24 -37 -28 -99 -64 -174 -102 l-53 -26 0 -289 c0 -174 4 -289 9 -289 15 0 741 511 833 586 69 57 151 136 221 214 43 48 143 199 178 270 13 25 26 47 29 50 4 3 13 23 20 45 7 22 20 58 30 80 10 22 23 67 29 100 7 33 17 69 22 81 6 11 9 33 7 48 -3 27 -7 24 -204 -113 -111 -78 -207 -141 -213 -141 -8 0 -11 115 -11 410 0 296 3 410 11 410 6 0 77 -46 158 -102 200 -141 242 -168 252 -168 11 0 12 43 1 56 -5 5 -14 40 -21 78 -7 38 -20 88 -30 110 -10 23 -24 59 -31 81 -7 22 -16 42 -19 45 -3 3 -16 25 -28 50 -25 50 -38 70 -70 117 -13 17 -23 36 -23 41 0 6 -4 12 -8 14 -5 2 -22 21 -38 43 -52 73 -189 215 -249 260 -22 16 -44 34 -50 41 -5 6 -140 103 -300 214 -159 111 -291 206 -293 211 -2 5 -8 9 -14 9 -6 0 -25 11 -42 23 -68 52 -136 97 -146 97 -6 0 -10 -101 -10 -288z" />
                            </g>
                        </svg>
                    </div>
                    <div className="links">
                        {
                            HeaderARR.map((obj, index) => (
                                <MenuItem
                                    key={obj.id}
                                    link={obj.link}
                                    text={obj.text}
                                    id={obj.id}
                                    isSelected={activeId === index}
                                    onMouseE={() => setActive(index)}
                                    onMouseL={() => setActive(false)}
                                >
                                </MenuItem>))
                        }
                        <div className='div-null'></div>
                    </div>
                </div>

            </>
        );

    }
    else {
        return (
            <>
                <div id="main-Header" className='main-Header'>
                    {VisibleMenu && <motion.div className="mobile-header"
                        initial="hidden"
                        animate="visible"
                        variants={animationSVG}
                    >
                        <div className="mobile-header-left">
                            {HeaderARR.map((obj, index) => (
                                <MenuItem
                                    key={obj.id}
                                    link={obj.link}
                                    text={obj.text}
                                    id={obj.id}
                                    isSelected={activeId === index}
                                    onMouseE={() => setActive(index)}
                                    onMouseL={() => setActive(false)}
                                >
                                </MenuItem>))}
                        </div>

                        <div className="mobile-header-right">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" version="1.0" width="200" height="200" viewBox="0 0 1000.000000 700.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)" fill="#FFFFF" stroke="none">
                                    <path d="M4657 5558 l-347 -243 0 -106 c0 -58 3 -208 7 -332 5 -198 8 -227 22 -227 9 0 61 11 116 25 171 42 245 52 255 35 11 -17 14 -2348 4 -2399 -8 -40 -16 -40 -186 0 -73 17 -150 33 -170 36 l-38 6 0 -109 c-1 -60 -3 -210 -6 -334 l-5 -225 336 -235 c185 -129 345 -239 355 -244 14 -6 89 42 364 234 l346 242 0 86 c0 48 -3 198 -7 335 -6 239 -7 247 -26 247 -18 0 -89 -16 -218 -50 -20 -6 -63 -13 -96 -16 l-60 -7 -7 1001 c-4 551 -4 1098 0 1217 6 196 9 215 25 220 25 8 89 -1 243 -37 70 -16 130 -28 132 -26 1 2 6 152 10 334 l7 330 -346 242 c-190 133 -349 242 -354 242 -5 0 -165 -109 -356 -242z" />
                                    <path d="M3693 4880 c-349 -246 -409 -289 -482 -348 -58 -46 -165 -154 -214 -217 -26 -33 -56 -69 -67 -80 -11 -12 -20 -26 -20 -32 0 -6 -10 -24 -23 -40 -31 -37 -122 -226 -137 -283 -7 -25 -16 -50 -21 -56 -14 -17 -39 -181 -39 -254 0 -46 -4 -70 -12 -73 -10 -3 -10 -9 0 -26 6 -11 12 -43 12 -70 0 -64 28 -225 40 -229 6 -2 10 -11 10 -19 0 -26 33 -123 42 -123 4 0 8 -6 8 -14 0 -26 48 -117 105 -202 75 -113 294 -331 429 -429 23 -16 46 -35 51 -41 6 -6 57 -44 115 -85 58 -40 110 -78 115 -84 12 -14 213 -155 221 -155 8 0 69 -44 72 -52 2 -5 8 -8 13 -8 5 0 41 -23 80 -51 39 -28 73 -48 76 -45 3 3 2 740 -3 1638 l-9 1634 -362 -256z m-193 -1380 c0 -672 0 -670 -46 -584 -10 19 -21 34 -25 34 -3 0 -14 17 -25 38 -10 20 -22 39 -25 42 -11 9 -67 135 -79 175 -6 22 -15 49 -21 60 -37 82 -37 395 0 480 5 11 14 36 21 55 15 42 71 163 79 170 3 3 15 22 25 43 11 20 23 37 27 37 4 0 10 8 13 18 6 18 42 62 51 62 3 0 5 -283 5 -630z" />
                                    <path d="M5960 4842 l0 -289 48 -24 c26 -13 76 -40 111 -61 34 -21 65 -38 67 -38 2 0 38 -23 79 -52 l75 -52 0 -827 0 -826 -55 -37 c-30 -20 -57 -36 -61 -36 -3 0 -20 -11 -37 -24 -37 -28 -99 -64 -174 -102 l-53 -26 0 -289 c0 -174 4 -289 9 -289 15 0 741 511 833 586 69 57 151 136 221 214 43 48 143 199 178 270 13 25 26 47 29 50 4 3 13 23 20 45 7 22 20 58 30 80 10 22 23 67 29 100 7 33 17 69 22 81 6 11 9 33 7 48 -3 27 -7 24 -204 -113 -111 -78 -207 -141 -213 -141 -8 0 -11 115 -11 410 0 296 3 410 11 410 6 0 77 -46 158 -102 200 -141 242 -168 252 -168 11 0 12 43 1 56 -5 5 -14 40 -21 78 -7 38 -20 88 -30 110 -10 23 -24 59 -31 81 -7 22 -16 42 -19 45 -3 3 -16 25 -28 50 -25 50 -38 70 -70 117 -13 17 -23 36 -23 41 0 6 -4 12 -8 14 -5 2 -22 21 -38 43 -52 73 -189 215 -249 260 -22 16 -44 34 -50 41 -5 6 -140 103 -300 214 -159 111 -291 206 -293 211 -2 5 -8 9 -14 9 -6 0 -25 11 -42 23 -68 52 -136 97 -146 97 -6 0 -10 -101 -10 -288z" />
                                </g>
                            </svg>
                        </div>
                    </motion.div>}
                    <motion.svg variants={animationSVG} xmlns="http://www.w3.org/2000/svg" width="240" height="80"
                        id="motion-svg"
                        className="motion-svg"
                        onClick={handleHeader}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.path
                            variants={animationHeader}
                            initial="initial"
                            animate="view"
                            d="m3.101461,1.699689l234.120419,-0.43752l0,10.31385l0,10.31385l-100.221853,57.230891c-25.100467,-73.791292 -97.363475,5.237153 -133.913964,-54.948693c0.005136,-7.490789 0.010262,-14.981589 0.015398,-22.472378z" />
                        <text x="90" y="30" style={{ fill: "#ffff", fontSize: "30px" }}>Menu</text>
                    </motion.svg>
                </div>

            </>
        )
    }


}

export default Header


function MenuItem(props) {
    const {
        link, text, id,
        isSelected,
        onMouseE = Function.prototype,
        onMouseL = Function.prototype,
    } = props

    return (
        <motion.div
            key={id}
            id="header-items"
            className="header-items"
            onMouseLeave={onMouseL}
            onMouseEnter={onMouseE}
            initial={{ scale: 1 }}
            animate={{ scale: isSelected ? 1.2 : 1 }}
        >
            <a href={link}
                key={link}>
                {text}
            </a>

            {isSelected && <ActiveLine />}
        </motion.div>

    )
}


function ActiveLine() {
    return (
        <motion.div
            className="header-line"
            layoutId="active"
        ></motion.div>
    )
}
