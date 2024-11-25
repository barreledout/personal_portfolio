import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const UnderlineLogo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Animation for a smoother fade into the screen when first mounted
  const svgVariants = {
    hidden: { opacity: 0, x: "-5%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 1, ease: "easeInOut", delay: 0.2 },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 2400 800"
      style={{ overflow: "hidden", display: "absolute" }}
      width="120"
      height="30"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <defs></defs>
      <g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity="1"></g>
      <motion.path
        d="M -13.11380078236445 769.8042829711308 Q -13.11380078236445 769.8042829711308 -6.695921147600316 763.1186193713902 -0.2780415128361824 756.4329557716495 13.202671093518024 745.8011101866521 26.68338369987223 735.1692646016545 48.90728143807114 723.166809840696 71.13117917627005 711.1643550797377 87.32291889856045 704.642033310991 103.51465862085084 698.1197115422443 123.28683550545445 691.9085986726084 143.05901239005806 685.6974858029724 164.33809320952912 680.3325755642987 185.6171740290002 674.967665325625 205.680917960635 669.9810061203654 225.74466189226982 664.9943469151057 248.385464473102 660.3678762702224 271.02626705393413 655.7414056253391 294.70229316476076 651.0149860386987 318.3783192755874 646.2885664520584 342.350224601679 641.978606947949 366.32212992777056 637.6686474438395 391.257480689519 634.5803859814155 416.19283145126747 631.4921245189914 441.50026500007016 628.6778198676712 466.80769854887285 625.8635152163511 493.3277806682289 623.1514774546642 519.847862787585 620.4394396929775 548.4667777800834 618.933554492959 577.0856927725818 617.4276692929404 607.0370785760697 615.8194107857935 636.9884643795576 614.2111522786464 669.2838064214831 614.2354457553859 701.5791484634085 614.2597392321253 718.4176911446 614.4324015182406 735.2562338257914 614.605063804356 766.9384301542407 614.7914442017066 798.62062648269 614.9778245990573 816.2121183013085 615.9676049553955 833.803610119927 616.9573853117336 851.8392851711072 618.3557061262728 869.8749602222874 619.7540269408121 887.4018947201828 621.2316470873668 904.9288292180781 622.7092672339217 922.9517972778096 624.2716778515454 940.9747653375413 625.8340884691692 959.9780887563097 628.3144802500756 978.9814121750782 630.7948720309819 998.386547264327 633.6467720820932 1017.7916823535757 636.4986721332045 1036.832227717828 638.5833888478383 1055.8727730820801 640.668105562472 1076.053193102725 643.3806034166248 1096.2336131233697 646.0931012707778 1115.6339836841446 648.0849577629494 1135.0343542449195 650.0768142551212 1155.3469412560517 652.7089665930366 1175.659528267184 655.341118930952 1195.8924175089123 657.3444903050859 1216.1253067506404 659.3478616792197 1237.5695222559061 662.0176052659665 1259.0137377611716 664.6873488527134 1280.600797199071 666.7540865598166 1302.1878566369703 668.8208242669199 1324.9733360360678 671.5381371270803 1347.7588154351654 674.2554499872407 1369.7681254403324 677.0943307431123 1391.7774354454991 679.9332114989841 1412.1254612957314 681.8566803621825 1432.4734871459634 683.7801492253808 1454.1112506089762 685.5236485954017 1475.7490140719888 687.2671479654226 1498.0439820944866 688.922954674916 1520.3389501169843 690.5787613844094 1542.907415110435 692.1778486381156 1565.475880103886 693.7769358918218 1588.160102252421 695.3368628766677 1610.844324400956 696.8967898615136 1634.3621809775454 698.5113345907446 1657.8800375541346 700.1258793199754 1679.7290759366015 700.7319121748975 1701.5781143190682 701.3379450298196 1725.2104694069913 702.5489599693572 1748.842824494914 703.7599749088946 1770.7266135056911 704.189724554175 1792.610402516468 704.6194741994553 1815.8049904417858 704.9095040183389 1838.9995783671038 705.1995338372225 1861.9603100961062 705.32659317709 1884.921041825109 705.4536525169575 1906.957363607158 705.4335797119243 1928.993685389207 705.4135069068909 1951.453749527584 705.4217557065981 1973.9138136659608 705.4300045063053 1995.2431825036147 704.5636071085854 2016.5725513412685 703.6972097108655 2038.2743554855158 701.7627658734027 2059.976159629763 699.8283220359399 2081.056029754895 698.0347009825771 2102.135899880027 696.2410799292144 2122.0208576272444 693.8003462168165 2141.9058153744622 691.3596125044187 2160.896045258284 688.5660184324195 2179.8862751421057 685.7724243604201 2196.729306145994 682.7677787552564 2213.572337149882 679.7631331500927 2244.219639809223 672.4819275620778 2274.866942468563 665.2007219740628 2302.5153498874383 657.6523483231317 2330.1637573063135 650.1039746722007 2341.41854081095 646.2426654787707 2352.673324315587 642.3813562853408 2357.6213751079777 641.6860862898294 2362.5694259003685 640.990816294318 2367.4804531700574 641.911912471224 2372.391480439746 642.8330086481301 2376.751298335211 645.2740319845856 2381.111116230676 647.7150553210411 2384.463250667382 651.4204300293517 2387.815385104088 655.1258047376623 2389.8088667216343 659.7075771077439 2391.8023483391803 664.2893494778255 2392.2284590859817 669.2678067330601 2392.654569832783 674.2462639882947 2391.468695801167 679.1001603398742 2390.282821769551 683.9540566914536 2387.6091242836683 688.1751879100634 2384.9354267977856 692.3963191286732 2381.053842690196 695.5427316614545 2377.172258582606 698.6891441942357 2372.489190734012 700.4314078184339 2367.806122885418 702.1736714426321 2362.811889735778 702.3293706968809 2357.8176565861377 702.4850699511296 2353.0351556645683 701.0379030824083 2348.252654742999 699.5907362136871 2344.182615158446 696.692221975166 2340.112575573893 693.7937077366449 2337.181131545245 689.7473213342306 2334.2496875165975 685.7009349318163 2332.7637620074806 680.9303340899837 2331.2778364983637 676.159733248151 2331.393006301829 671.1644011343565 2331.5081761052934 666.1690690205619 2333.2123829125153 661.4720182257593 2334.916589719737 656.7749674309565 2338.031402628133 652.8679804132626 2341.1462155365284 648.9609933955685 2345.3455128123583 646.2531327270801 2349.544810088188 643.5452720585919 2354.388924198166 642.3200514661057 2359.2330383081435 641.0948308736197 2364.214789226233 641.4805312765959 2369.1965401443217 641.8662316795721 2373.7943372343434 643.822470144004 2378.3921343243655 645.778708608436 2382.1245870172947 649.1006664507008 2385.857039710224 652.4226242929656 2388.3333592238387 656.7624916500664 2390.809678737453 661.1023590071673 2391.7705937649926 666.005750621202 2392.7315087925326 670.9091422352367 2392.0764112769575 675.8626717098462 2391.421313761382 680.8162011844556 2389.218792585501 685.3012326760435 2387.01627140962 689.7862641676313 2383.4969311219575 693.3332136950949 2379.9775908342954 696.8801632225585 2375.509907291985 699.1176642340687 2371.042223749675 701.3551652455789 2371.0466467853803 701.353787578111 2371.0510698210855 701.3524099106431 2344.3026314842464 708.0595856459347 2317.5541931474067 714.7667613812264 2287.171364120075 721.2834569161914 2256.788535092743 727.8001524511566 2239.590620651195 731.2953188243978 2222.392706209647 734.7904851976389 2204.8253856856063 737.2977075361152 2187.2580651615663 739.8049298745917 2167.652347861107 742.2768307458082 2148.0466305606483 744.7487316170248 2127.1909520102936 746.9937916703734 2106.3352734599384 749.2388517237222 2085.479900435451 750.7671042425666 2064.6245274109633 752.2953567614111 2041.5799184458126 754.3252829847023 2018.535309480662 756.3552092079935 1996.2078492189967 757.1131352643455 1973.8803889573314 757.8710613206974 1951.3953002976782 757.8494446090755 1928.9102116380247 757.8278278974535 1906.821916370021 757.7374833010576 1884.7336211020172 757.6471387046619 1861.6485225018514 757.608852653088 1838.5634239016858 757.5705666015141 1815.04356529192 757.4715484405356 1791.5237066821544 757.372530279557 1768.9715550290398 756.8868729133974 1746.4194033759254 756.4012155472377 1723.273401984471 755.458331636328 1700.127400593017 754.5154477254184 1677.3901219720783 753.9052863354924 1654.6528433511394 753.2951249455664 1631.038681921094 752.0480361575073 1607.4245204910483 750.8009473694484 1584.6902808661598 749.4794220698166 1561.9560412412711 748.1578967701847 1539.2860558533212 746.8288993460296 1516.616070465371 745.4999019218745 1494.0963094769436 744.1179006749571 1471.5765484885164 742.7358994280397 1449.3965744005477 741.1833358445573 1427.2166003125787 739.6307722610749 1406.0927508705195 737.6506019310577 1384.96890142846 735.6704316010405 1363.32224078954 733.1760820114323 1341.6755801506204 730.6817324218242 1319.5180918003048 728.5538740991462 1297.3606034499892 726.4260157764683 1274.8280219747473 724.7958742240896 1252.2954404995055 723.165732671711 1231.5574198603395 720.9887398747046 1210.8193992211736 718.8117470776981 1189.57676614696 717.114638943644 1168.3341330727465 715.4175308095898 1148.8342189889236 713.1944755903259 1129.334304905101 710.9714203710619 1108.983279851827 709.2427826053022 1088.6322547985533 707.5141448395426 1069.205056807282 705.3243416077082 1049.7778588160108 703.1345383758737 1029.5489212547072 701.3880351064747 1009.3199836934034 699.6415318370757 990.251412978954 697.3305996819613 971.1828422645048 695.0196675268469 953.5848766368881 693.0557423461833 935.9869110092715 691.0918171655197 917.9624734600916 689.9006175036224 899.9380359109116 688.709417841725 882.7208199468919 687.5597580279637 865.5036039828722 686.4100982142022 832.0758196843697 684.8375416957501 798.6480353858673 683.264985177298 767.0378991013714 683.5017840073583 735.4277628168755 683.7385828374188 718.712910189246 683.9944953736224 701.9980575616166 684.2504079098261 670.7808382882232 684.9314853665013 639.5636190148298 685.6125628231765 611.0774454000028 687.6404785994112 582.5912717851759 689.6683943756457 555.040062448538 691.5269057711489 527.4888531119002 693.385417166652 501.329018751488 696.3849274917231 475.16918439107576 699.3844378167944 450.35288224042864 702.3614225332576 425.5365800897815 705.3384072497208 401.58533045067117 708.4829919522659 377.6340808115608 711.627576654811 354.35737061177144 715.9951801429887 331.0806604119821 720.3627836311664 308.87283740896885 724.9336281288656 286.6650144059556 729.5044726265647 265.76656098847974 733.7546109893113 244.86810757100383 738.004749352058 222.8177152447048 743.4174216681431 200.76732291840577 748.8300939842283 182.6109480945999 753.2318586417197 164.45457327079407 757.6336232992111 146.70651179196818 762.8977393215546 128.9584503131423 768.1618553438981 108.73679727336727 775.5893945007103 88.51514423359224 783.0169336575225 68.88057808267924 794.5019590357099 49.24601193176623 805.9869844138974 42.56780670954337 812.3973809948209 35.889601487320505 818.8077775757442 32.601674017067964 821.3836788401296 29.313746546815416 823.959580104515 25.504893565034287 825.6737485141762 21.696040583253158 827.3879169238375 17.587632804202755 828.1407249302652 13.479225025152353 828.893532936693 9.310043301983804 828.6412273031831 5.140861578815256 828.3889216696731 1.1532189491672744 827.1461664114997 -2.8344236804807075 825.9034111533263 -6.408765239614391 823.742435264485 -9.983106798748075 821.5814593756437 -12.936406388010894 818.6278588763271 -15.889705977273714 815.6742583770105 -18.050317685777525 812.099696667013 -20.210929394281337 808.5251349570156 -21.453278368011993 804.5373657308725 -22.69562734174265 800.5495965047294 -22.947508199975417 796.3803890972285 -23.199389058208183 792.2111816897278 -22.446162473627993 788.1028506312826 -21.692935889047803 783.9945195728375 -19.978379426140656 780.1858412575939 -18.26382296323351 776.3771629423503 -15.687586724181662 773.0894979329403 -13.111350485129815 769.8018329235301 -13.112575633747133 769.8030579473304 Z"
        fill={resolvedTheme === "dark" ? "hsl(212.8,43.86%,66.47%)" : "#e2d1c3"}
        variants={pathVariants}
      ></motion.path>
    </motion.svg>
  );
};

declare module "react" {
  interface SVGAttributes<T> extends React.DOMAttributes<T> {
    "xmlns:svgjs"?: string; // Add the custom attribute
  }
}
