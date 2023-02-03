import { Link } from "react-router-dom";

const Contact = () => {
    return(
        <>
            <div className="bg-mybgcolor w-screen h-screen flex items-center justify-center">
                <div className="bg-mycolor w-4/5 h-4/5 relative flex rounded-lg shadow-xl">
                    <div className="m-5 container">
                        <div className="mt-10 mx-10 w-max font-bold text-4xl text-white">
                            CONTACT
                        </div>
                        <div className="mx-10 mt-20 mb-5 text-start text-lg text-white">
                            <b>Email Address :</b> dandymay19@gmail.com
                        </div>
                        <div className="mx-10 text-start text-lg text-white">
                            <b>Phone Number :</b> +62 856-0734-0053
                        </div>
                        <div className="mt-10 mx-10 flex">
                            <div className="inline-flex gap-5">
                                <a href="https://www.facebook.com/dandy.maulana.5817">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:fill-blue-400" x="0px" y="0px" width="40" height="40"viewBox="0 0 30 30"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path></svg>
                                </a>
                                <a href="https://www.instagram.com/dandy_m.a.y/">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:fill-pink-500" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24"><path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path></svg>
                                </a>
                                <a href="https://github.com/DandyMaulana19">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:fill-gray-400" x="0px" y="0px" width="40" height="40"viewBox="0 0 30 30"><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
                                </a>
                                <a href="https://discordapp.com/users/927122990548811786">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:fill-blue-700" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50"><path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div className="inline-flex gap-5 ml-6 mr-5 mt-20" role="group">
                            <Link className="rounded-lg px-6 py-2.5 bg-mybgcolor text-white font-medium text-xs uppercase hover:bg-mycolor2 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" to="/">Portfolio</Link> 
                            <Link className="rounded-lg px-6 py-2.5 bg-mybgcolor text-white font-medium text-xs uppercase hover:bg-mycolor2 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" to="/prof">Profile</Link>
                            <Link className="rounded-lg px-6 py-2.5 bg-mybgcolor text-white font-medium text-xs uppercase hover:bg-mycolor2 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" to="/edu">Education</Link>
                            <Link className="rounded-lg px-6 py-2.5  bg-blue-700 text-white font-medium text-xs uppercase hover:bg-mycolor2 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" to="">Contact</Link>
                        </div>

                    </div>
                    <div className=" container flex mr-10 my-5">
                        <div className="w-auto m-10 mt-20 container justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="animate-pulse" data-name="Layer 1" width="400" height="300" viewBox="0 0 842.72998 573"><path d="M934.654,722.90511c-18.90064,13.616-43.39446,14.29971-67.07038,12.627-3.306-.23326-6.58868-.507-9.84091-.80228-.01965-.0051-.04544-.00328-.06541-.00836-.15629-.01487-.3129-.02976-.46245-.03863-.67126-.0628-1.34284-.12554-2.0078-.18875l.15708.29974.493.93009c-.17718-.31128-.35423-.6161-.53141-.92739-.05212-.09343-.11053-.18646-.16233-.28-6.13337-10.67317-12.21659-21.73842-13.76829-33.926-1.6039-12.65015,2.9037-26.9743,14.03727-33.19189a22.467,22.467,0,0,1,4.61018-1.93081c.66586-.20234,1.34073-.36645,2.02325-.5117A24.081,24.081,0,0,1,890.07022,696.26c9.43927-9.67911,7.67846-25.38108,4.42236-38.504-3.26239-13.12256-7.21179-27.72486-.57639-39.51162,3.68851-6.56063,10.175-10.63106,17.45435-12.27081.22331-.04815.44631-.09623.67008-.13789a35.14393,35.14393,0,0,1,25.249,4.42406c13.91882,8.77112,21.06772,25.40139,23.38793,41.69208C964.41589,678.16654,956.14294,707.423,934.654,722.90511Z" transform="translate(-178.63501 -163.5)" fill="#f2f2f2"/><path d="M928.55168,680.88193a59.74248,59.74248,0,0,1-4.12321,16.83544,51.87511,51.87511,0,0,1-8.05438,13.156,66.46538,66.46538,0,0,1-25.53063,18.40893,95.65939,95.65939,0,0,1-23.25985,6.24981c-3.306-.23326-6.58868-.507-9.84091-.80228-.01965-.0051-.04544-.00328-.06541-.00836-.15629-.01487-.3129-.02976-.46245-.03863-.67126-.0628-1.34284-.12554-2.0078-.18875l.15708.29974.493.93009c-.17718-.31128-.35423-.6161-.53141-.92739-.05212-.09343-.11053-.18646-.16233-.28a52.87823,52.87823,0,0,0,14.81951-46.25623,53.33113,53.33113,0,0,0-9.94035-22.79246c.66586-.20234,1.34073-.36645,2.02325-.5117a55.29272,55.29272,0,0,1,5.04382,8.35406,54.17979,54.17979,0,0,1,4.67445,33.70568,55.393,55.393,0,0,1-14.03439,27.62923c.63145-.0445,1.269-.09592,1.893-.15286,11.81832-1.00128,23.61258-3.542,34.33191-8.74615A61.83274,61.83274,0,0,0,917.13821,706.74c6.492-8.95336,9.35272-19.723,9.84414-30.6688a129.42851,129.42851,0,0,0-3.67377-35.0389,147.06843,147.06843,0,0,0-12.35789-33.6628,1.0574,1.0574,0,0,1,.41985-1.39591.89934.89934,0,0,1,.67008-.13789.78294.78294,0,0,1,.51687.44275c.67566,1.3187,1.33875,2.63828,1.97662,3.97261a148.73787,148.73787,0,0,1,11.64367,34.92405C928.52711,656.82724,929.78107,669.01639,928.55168,680.88193Z" transform="translate(-178.63501 -163.5)" fill="#fff"/><path d="M213.7948,345.626a4.53477,4.53477,0,0,1-1.64453-.31055,4.47489,4.47489,0,0,1-2.87-4.19629v-47.0332a6.01164,6.01164,0,0,0-6.00464-6.00489h-9.63134A15.02614,15.02614,0,0,1,178.635,273.07178v-94.5625A15.02614,15.02614,0,0,1,193.64429,163.5H533.36963a15.02615,15.02615,0,0,1,15.00928,15.00928v94.5625a15.02615,15.02615,0,0,1-15.00928,15.00927H271.15a6.02074,6.02074,0,0,0-4.42651,1.94727l-49.62183,54.1333A4.47614,4.47614,0,0,1,213.7948,345.626ZM193.64429,165.5A13.024,13.024,0,0,0,180.635,178.50928v94.5625a13.024,13.024,0,0,0,13.00928,13.00927h9.63134a8.01371,8.01371,0,0,1,8.00464,8.00489v47.0332a2.50251,2.50251,0,0,0,4.34717,1.69092l49.62183-54.1333a8.02556,8.02556,0,0,1,5.90075-2.59571H533.36963a13.024,13.024,0,0,0,13.00928-13.00927v-94.5625A13.024,13.024,0,0,0,533.36963,165.5Z" transform="translate(-178.63501 -163.5)" fill="#ccc"/><circle cx="36.81607" cy="29.45637" r="13.13371" fill="#ccc"/><path d="M518.04693,265.62955H208.967a7.00465,7.00465,0,1,1,0-14.00929H518.04693a7.00465,7.00465,0,1,1,0,14.00929Z" transform="translate(-178.63501 -163.5)" fill="#ccc"/><path d="M417.35517,235.85981H208.967a7.00465,7.00465,0,1,1,0-14.00929H417.35517a7.00465,7.00465,0,1,1,0,14.00929Z" transform="translate(-178.63501 -163.5)" fill="#ccc"/><path d="M213.7948,679.22217a4.53456,4.53456,0,0,1-1.64453-.31055,4.47537,4.47537,0,0,1-2.87-4.19629v-47.0332a6.01163,6.01163,0,0,0-6.00464-6.00488h-9.63134A15.02614,15.02614,0,0,1,178.635,606.668v-94.5625a15.02614,15.02614,0,0,1,15.00928-15.00928H533.36963a15.02615,15.02615,0,0,1,15.00928,15.00928V606.668a15.02615,15.02615,0,0,1-15.00928,15.00928H271.15a6.02073,6.02073,0,0,0-4.42651,1.94726l-49.62183,54.1333A4.4761,4.4761,0,0,1,213.7948,679.22217Zm-20.15051-180.126A13.024,13.024,0,0,0,180.635,512.10547V606.668a13.024,13.024,0,0,0,13.00928,13.00928h9.63134a8.0137,8.0137,0,0,1,8.00464,8.00488v47.0332a2.50251,2.50251,0,0,0,4.34717,1.69092l49.62183-54.1333a8.02559,8.02559,0,0,1,5.90075-2.5957H533.36963A13.024,13.024,0,0,0,546.37891,606.668v-94.5625a13.024,13.024,0,0,0-13.00928-13.00928Z" transform="translate(-178.63501 -163.5)" fill="#ccc"/><path d="M715.478,505.85742a4.47521,4.47521,0,0,1-3.30664-1.46435l-49.62207-54.1333a6.02039,6.02039,0,0,0-4.42627-1.94727H395.90344a15.02614,15.02614,0,0,1-15.00927-15.00928v-94.5625a15.02614,15.02614,0,0,1,15.00927-15.00927H735.62866a15.02614,15.02614,0,0,1,15.00928,15.00927v94.5625a15.02614,15.02614,0,0,1-15.00928,15.00928h-9.63135a6.01156,6.01156,0,0,0-6.00463,6.00488v47.03321a4.474,4.474,0,0,1-2.87012,4.1958A4.5256,4.5256,0,0,1,715.478,505.85742Zm-319.57459-180.126a13.024,13.024,0,0,0-13.00927,13.00927v94.5625a13.024,13.024,0,0,0,13.00927,13.00928H658.12305a8.02441,8.02441,0,0,1,5.90039,2.5957l49.62207,54.1333a2.50253,2.50253,0,0,0,4.34717-1.69091V454.31738a8.01369,8.01369,0,0,1,8.00463-8.00488h9.63135a13.024,13.024,0,0,0,13.00928-13.00928v-94.5625a13.024,13.024,0,0,0-13.00928-13.00927Z" transform="translate(-178.63501 -163.5)" fill="#3f3d56"/><circle cx="36.81607" cy="363.05254" r="13.13371" fill="#ccc"/><path d="M518.04693,599.22573H208.967a7.00465,7.00465,0,1,1,0-14.00929H518.04693a7.00464,7.00464,0,1,1,0,14.00929Z" transform="translate(-178.63501 -163.5)" fill="#ccc"/><path d="M417.35517,569.456H208.967a7.00465,7.00465,0,1,1,0-14.00929H417.35517a7.00465,7.00465,0,1,1,0,14.00929Z" transform="translate(-178.63501 -163.5)" fill="#ccc"/><circle cx="239.07517" cy="188.81202" r="13.13371" fill="#3f3d56"/><path d="M720.306,424.9852H411.22611a7.00464,7.00464,0,1,1,0-14.00928H720.306a7.00464,7.00464,0,1,1,0,14.00928Z" transform="translate(-178.63501 -163.5)" fill="#5431d4"/><path d="M619.61427,395.21547H411.22611a7.00465,7.00465,0,1,1,0-14.00929H619.61427a7.00465,7.00465,0,1,1,0,14.00929Z" transform="translate(-178.63501 -163.5)" fill="#5431d4"/><path d="M720.17137,523.85872a10.05574,10.05574,0,0,1,13.594-7.27736l23.4593-26.95627,4.98283,17.88869-23.04128,22.8556a10.11027,10.11027,0,0,1-18.99481-6.51066Z" transform="translate(-178.63501 -163.5)" fill="#ffb8b8"/><circle cx="670.29019" cy="209.30068" r="24.56103" fill="#ffb8b8"/><polygon points="641.436 547.373 629.177 547.372 623.344 500.084 641.439 500.085 641.436 547.373" fill="#ffb8b8"/><path d="M823.198,722.75707l-39.53052-.00146v-.5a15.38605,15.38605,0,0,1,15.38648-15.38623h.001l24.1438.001Z" transform="translate(-178.63501 -163.5)" fill="#2f2e41"/><polygon points="678.436 560.373 666.177 560.372 664.479 514.214 678.439 513.085 678.436 560.373" fill="#ffb8b8"/><path d="M860.198,735.75707l-39.53052-.00146v-.5a15.38605,15.38605,0,0,1,15.38648-15.38623h.001l24.1438.001Z" transform="translate(-178.63501 -163.5)" fill="#2f2e41"/><path d="M853.5844,715.24336l-9.54688-1.124a4.51224,4.51224,0,0,1-3.97388-4.4043l-1.78906-124.33887a1.49985,1.49985,0,0,0-2.91357-.47851L822.1154,622.29707l.94727,70.10156a4.49832,4.49832,0,0,1-4.22876,4.55274l-12.46387.52929a4.52692,4.52692,0,0,1-4.74439-3.9248l-6.50976-79.30078-.00415-.04981,9.8772-82.81933,74.1831,5.36718L858.57927,711.302a4.50657,4.50657,0,0,1-4.46631,3.97266A4.40036,4.40036,0,0,1,853.5844,715.24336Z" transform="translate(-178.63501 -163.5)" fill="#2f2e41"/><path d="M805.30559,538.72773a4.47312,4.47312,0,0,1-2.35474-3.61816s6.6709-41.48438,9.11548-42.2627l-5.34863-44.36328a40.90923,40.90923,0,0,1,8.78051-30.49023A39.01332,39.01332,0,0,1,842.53,403.51094q1.12134-.10109,2.23047-.1543a39.36853,39.36853,0,0,1,33.134,15.082,40.11988,40.11988,0,0,1,7.21949,36.40625l-2.99976,10.43945v72.95606a4.55525,4.55525,0,0,1-1.86182,3.65332c-9.34106,6.85547-19.897,9.2793-30.15551,9.2793C830.686,551.17305,812.33977,542.49336,805.30559,538.72773Z" transform="translate(-178.63501 -163.5)" fill="#5431d4"/><path d="M747.71632,525.37712,734.8139,515.729a4.49946,4.49946,0,0,1-.59686-6.67226l76.863-82.47429A15.05277,15.05277,0,0,1,830.6013,424.507l.00021.00012a14.97783,14.97783,0,0,1,1.92528,22.97632L753.563,524.98515a4.47169,4.47169,0,0,1-5.36242.70857A4.62136,4.62136,0,0,1,747.71632,525.37712Z" transform="translate(-178.63501 -163.5)" fill="#5431d4"/><path d="M846.4649,514.45717A10.05578,10.05578,0,0,1,861.18,509.85032l28.08641-22.09373,1.54966,18.50493L863.9071,524.40509a10.11027,10.11027,0,0,1-17.4422-9.94792Z" transform="translate(-178.63501 -163.5)" fill="#ffb8b8"/><path d="M871.60393,523.08223a4.46445,4.46445,0,0,1-3.023-3.249l-2.83716-11.916a4.43719,4.43719,0,0,1,1.65039-4.61231l19.08887-20.64453-28.07862-43.2959a15.24849,15.24849,0,0,1-.46191-18.626,15.242,15.242,0,0,1,26.29468,2.99414l26.104,50.81054a23.11846,23.11846,0,0,1-7.721,29.79493L875.94353,522.1584a4.46131,4.46131,0,0,1-2.97046,1.13672A4.54941,4.54941,0,0,1,871.60393,523.08223Z" transform="translate(-178.63501 -163.5)" fill="#5431d4"/><path d="M867.12452,394.75775a4.39849,4.39849,0,0,1-6.49318-2.5649l-.01539-.06128c-.50024-2.04355-.10536-4.18241.02383-6.28233s-.08861-4.40488-1.52657-5.94066c-2.68052-2.86288-7.4138-1.31231-11.27146-2.01917a9.51064,9.51064,0,0,1-7.45268-10.117c.05255-.43662.13628-.87389.23045-1.31095a7.32469,7.32469,0,0,0-7.65072-8.82988c-3.89343.24353-8.091,1.446-11.32878-1.42141a8.3509,8.3509,0,0,1-2.05309-8.99159c1.81153-5.32069,6.99681-8.12883,12.13466-9.68478a44.5881,44.5881,0,0,1,37.8262,5.99911c3.26265,2.2737,6.31357,5.13619,7.71889,8.85636s.76213,8.42656-2.34866,10.904a20.12271,20.12271,0,0,1,4.76546,19.52057C878.16711,387.79388,870.82864,392.6,867.12452,394.75775Z" transform="translate(-178.63501 -163.5)" fill="#2f2e41"/><path d="M1021.365,735.5a1.00276,1.00276,0,0,1-1,1h-381a1,1,0,0,1,0-2h381A1.00276,1.00276,0,0,1,1021.365,735.5Z" transform="translate(-178.63501 -163.5)" fill="#3f3d56"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact