import { HeroContext } from "../../components";
import IconsMatter from "../../matter/icons-matter";
import "./home.css";

function Home() {
    return (
        <div className="min-h-screen pt-5 sm:pt-0 overflow-hidden">
            <div className="absolute -z-10 bottom-0 left-0 right-0 hidden md:block">
                <svg
                    width="100%"
                    height="100%"
                    id="svg"
                    viewBox="0 0 1440 390"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transitionduration-300 ease-in-out delay-150"
                >
                    <path
                        d="M 0,400 L 0,150 C 20.74511523594081,116.41887139439605 41.49023047188162,82.8377427887921 76,96 C 110.50976952811838,109.1622572112079 158.78419334841436,169.06790023922764 189,221 C 219.21580665158564,272.93209976077236 231.37299613446083,316.89065625429737 258,360 C 284.62700386553917,403.10934374570263 325.72382211374213,445.3694747435829 357,438 C 388.27617788625787,430.6305252564171 409.73171541057064,373.6314447713709 442,380 C 474.26828458942936,386.3685552286291 517.3493162439754,456.10474617093337 551,495 C 584.6506837560246,533.8952538290666 608.8710196135276,541.9495705448957 631,562 C 653.1289803864724,582.0504294551043 673.1666053019144,614.0969716494844 705,636 C 736.8333946980856,657.9030283505156 780.4625591788142,669.6625428571664 812,705 C 843.5374408211858,740.3374571428336 862.9831579828285,799.2528569218503 893,839 C 923.0168420171715,878.7471430781497 963.6048088898713,899.3260294554331 996,926 C 1028.3951911101287,952.6739705445669 1052.5976064576864,985.4430252564171 1077,1024 C 1101.4023935423136,1062.556974743583 1126.004765279383,1106.9018695188988 1154,1111 C 1181.995234720617,1115.0981304811012 1213.3833324247812,1078.9494966679886 1245,1092 C 1276.6166675752188,1105.0505033320114 1308.461905021491,1167.3001438091462 1341,1206 C 1373.538094978509,1244.6998561908538 1406.7690474892545,1259.849928095427 1440,1275 L 1440,400 L 0,400 Z"
                        stroke="none"
                        strokeWidth="0"
                        fill="#0693e3"
                        fillOpacity="1"
                        className="transition-all duration-300 ease-in-out delay-150 path-0"
                    ></path>
                </svg>
            </div>
            <div className="my-container flex flex-col md:flex-row md:items-center md:justify-between  z-40">
                <HeroContext />
                <IconsMatter />
            </div>
        </div>
    );
}

export default Home;
