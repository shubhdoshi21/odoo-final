import React from "react";
import { Link } from "react-router-dom";
import style from "../module/notfound.module.css";

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <svg
        width="200"
        height="300"
        viewBox="0 0 499 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_0_1)">
          <path
            d="M78 255.5C78 160.783 154.783 84 249.5 84V84C344.217 84 421 160.783 421 255.5V479C421 512.137 394.137 539 361 539H138C104.863 539 78 512.137 78 479V255.5Z"
            fill="#D9D9D9"
          />
        </g>
        <g filter="url(#filter1_b_0_1)">
          <path
            d="M185 555H314V555C314 579.853 293.853 600 269 600H230C205.147 600 185 579.853 185 555V555Z"
            fill="#D9D9D9"
          />
        </g>
        <g filter="url(#filter2_b_0_1)">
          <circle cx="421" cy="312" r="35" fill="#D9D9D9" />
        </g>
        <g filter="url(#filter3_b_0_1)">
          <circle cx="78" cy="312" r="35" fill="#D9D9D9" />
        </g>
        <g filter="url(#filter4_b_0_1)">
          <circle cx="25" cy="473" r="25" fill="#D9D9D9" />
        </g>
        <g filter="url(#filter5_b_0_1)">
          <circle cx="250" cy="25" r="25" fill="#D9D9D9" />
        </g>
        <g filter="url(#filter6_b_0_1)">
          <circle cx="474" cy="473" r="25" fill="#D9D9D9" />
        </g>
        <g filter="url(#filter7_b_0_1)">
          <rect
            x="44.2927"
            y="312"
            width="35"
            height="148"
            transform="rotate(13 44.2927 312)"
            fill="#D9D9D9"
          />
        </g>
        <g filter="url(#filter8_b_0_1)">
          <rect x="232" y="37" width="35" height="74" fill="#D9D9D9" />
        </g>
        <g filter="url(#filter9_b_0_1)">
          <rect
            x="421"
            y="319.873"
            width="35"
            height="148"
            transform="rotate(-13 421 319.873)"
            fill="#D9D9D9"
          />
        </g>
        <g filter="url(#filter10_b_0_1)">
          <mask
            id="path-11-outside-1_0_1"
            maskUnits="userSpaceOnUse"
            x="148"
            y="380"
            width="204"
            height="88"
            fill="black"
          >
            <rect fill="white" x="148" y="380" width="204" height="88" />
            <path d="M150.464 447.445V439.403L185.94 383.273H191.774V395.729H187.832L161.028 438.142V438.773H208.803V447.445H150.464ZM188.463 464V445.001V441.256V383.273H197.766V464H188.463ZM249.905 465.104C243.966 465.104 238.908 463.488 234.729 460.255C230.551 456.997 227.358 452.28 225.151 446.104C222.944 439.903 221.84 432.413 221.84 423.636C221.84 414.912 222.944 407.462 225.151 401.287C227.385 395.085 230.591 390.355 234.769 387.096C238.973 383.811 244.019 382.169 249.905 382.169C255.792 382.169 260.824 383.811 265.002 387.096C269.207 390.355 272.413 395.085 274.62 401.287C276.854 407.462 277.971 414.912 277.971 423.636C277.971 432.413 276.867 439.903 274.66 446.104C272.452 452.28 269.259 456.997 265.081 460.255C260.903 463.488 255.844 465.104 249.905 465.104ZM249.905 456.432C255.792 456.432 260.364 453.594 263.623 447.918C266.881 442.241 268.51 434.148 268.51 423.636C268.51 416.646 267.761 410.694 266.264 405.78C264.792 400.866 262.663 397.121 259.878 394.546C257.119 391.971 253.794 390.683 249.905 390.683C244.071 390.683 239.512 393.561 236.227 399.316C232.943 405.044 231.3 413.151 231.3 423.636C231.3 430.626 232.036 436.565 233.508 441.453C234.979 446.341 237.095 450.059 239.854 452.608C242.639 455.157 245.99 456.432 249.905 456.432ZM291.057 447.445V439.403L326.533 383.273H332.367V395.729H328.425L301.621 438.142V438.773H349.395V447.445H291.057ZM329.056 464V445.001V441.256V383.273H338.358V464H329.056Z" />
          </mask>
          <path
            d="M150.464 447.445V439.403L185.94 383.273H191.774V395.729H187.832L161.028 438.142V438.773H208.803V447.445H150.464ZM188.463 464V445.001V441.256V383.273H197.766V464H188.463ZM249.905 465.104C243.966 465.104 238.908 463.488 234.729 460.255C230.551 456.997 227.358 452.28 225.151 446.104C222.944 439.903 221.84 432.413 221.84 423.636C221.84 414.912 222.944 407.462 225.151 401.287C227.385 395.085 230.591 390.355 234.769 387.096C238.973 383.811 244.019 382.169 249.905 382.169C255.792 382.169 260.824 383.811 265.002 387.096C269.207 390.355 272.413 395.085 274.62 401.287C276.854 407.462 277.971 414.912 277.971 423.636C277.971 432.413 276.867 439.903 274.66 446.104C272.452 452.28 269.259 456.997 265.081 460.255C260.903 463.488 255.844 465.104 249.905 465.104ZM249.905 456.432C255.792 456.432 260.364 453.594 263.623 447.918C266.881 442.241 268.51 434.148 268.51 423.636C268.51 416.646 267.761 410.694 266.264 405.78C264.792 400.866 262.663 397.121 259.878 394.546C257.119 391.971 253.794 390.683 249.905 390.683C244.071 390.683 239.512 393.561 236.227 399.316C232.943 405.044 231.3 413.151 231.3 423.636C231.3 430.626 232.036 436.565 233.508 441.453C234.979 446.341 237.095 450.059 239.854 452.608C242.639 455.157 245.99 456.432 249.905 456.432ZM291.057 447.445V439.403L326.533 383.273H332.367V395.729H328.425L301.621 438.142V438.773H349.395V447.445H291.057ZM329.056 464V445.001V441.256V383.273H338.358V464H329.056Z"
            fill="#605D5D"
          />
          <path
            d="M150.464 447.445H148.464V449.445H150.464V447.445ZM150.464 439.403L148.774 438.335L148.464 438.824V439.403H150.464ZM185.94 383.273V381.273H184.838L184.25 382.204L185.94 383.273ZM191.774 383.273H193.774V381.273H191.774V383.273ZM191.774 395.729V397.729H193.774V395.729H191.774ZM187.832 395.729V393.729H186.73L186.142 394.66L187.832 395.729ZM161.028 438.142L159.338 437.074L159.028 437.563V438.142H161.028ZM161.028 438.773H159.028V440.773H161.028V438.773ZM208.803 438.773H210.803V436.773H208.803V438.773ZM208.803 447.445V449.445H210.803V447.445H208.803ZM188.463 464H186.463V466H188.463V464ZM188.463 383.273V381.273H186.463V383.273H188.463ZM197.766 383.273H199.766V381.273H197.766V383.273ZM197.766 464V466H199.766V464H197.766ZM152.464 447.445V439.403H148.464V447.445H152.464ZM152.155 440.472L187.631 384.341L184.25 382.204L148.774 438.335L152.155 440.472ZM185.94 385.273H191.774V381.273H185.94V385.273ZM189.774 383.273V395.729H193.774V383.273H189.774ZM191.774 393.729H187.832V397.729H191.774V393.729ZM186.142 394.66L159.338 437.074L162.719 439.211L189.523 396.797L186.142 394.66ZM159.028 438.142V438.773H163.028V438.142H159.028ZM161.028 440.773H208.803V436.773H161.028V440.773ZM206.803 438.773V447.445H210.803V438.773H206.803ZM208.803 445.445H150.464V449.445H208.803V445.445ZM190.463 464V445.001H186.463V464H190.463ZM190.463 445.001V441.256H186.463V445.001H190.463ZM190.463 441.256V383.273H186.463V441.256H190.463ZM188.463 385.273H197.766V381.273H188.463V385.273ZM195.766 383.273V464H199.766V383.273H195.766ZM197.766 462H188.463V466H197.766V462ZM234.729 460.255L233.5 461.832L233.506 461.837L234.729 460.255ZM225.151 446.104L223.267 446.775L223.268 446.778L225.151 446.104ZM225.151 401.287L223.269 400.609L223.268 400.613L225.151 401.287ZM234.769 387.096L235.999 388.673L236 388.672L234.769 387.096ZM265.002 387.096L263.766 388.669L263.777 388.677L265.002 387.096ZM274.62 401.287L272.736 401.957L272.739 401.967L274.62 401.287ZM274.66 446.104L276.543 446.778L276.544 446.775L274.66 446.104ZM265.081 460.255L266.305 461.837L266.311 461.832L265.081 460.255ZM263.623 447.918L261.888 446.922L261.888 446.922L263.623 447.918ZM266.264 405.78L264.348 406.354L264.35 406.363L266.264 405.78ZM259.878 394.546L258.513 396.008L258.52 396.015L259.878 394.546ZM236.227 399.316L237.962 400.311L237.964 400.307L236.227 399.316ZM233.508 441.453L231.592 442.03L231.592 442.03L233.508 441.453ZM239.854 452.608L238.497 454.077L238.504 454.084L239.854 452.608ZM249.905 463.104C244.351 463.104 239.738 461.601 235.953 458.673L233.506 461.837C238.078 465.374 243.581 467.104 249.905 467.104V463.104ZM235.959 458.678C232.144 455.703 229.144 451.334 227.034 445.431L223.268 446.778C225.572 453.225 228.958 458.291 233.5 461.832L235.959 458.678ZM227.035 445.434C224.925 439.506 223.84 432.256 223.84 423.636H219.84C219.84 432.57 220.962 440.3 223.267 446.775L227.035 445.434ZM223.84 423.636C223.84 415.07 224.925 407.861 227.034 401.96L223.268 400.613C220.962 407.063 219.84 414.754 219.84 423.636H223.84ZM227.033 401.964C229.17 396.031 232.183 391.649 235.999 388.673L233.539 385.519C228.998 389.061 225.6 394.138 223.269 400.609L227.033 401.964ZM236 388.672C239.816 385.691 244.416 384.169 249.905 384.169V380.169C243.622 380.169 238.13 381.932 233.538 385.52L236 388.672ZM249.905 384.169C255.394 384.169 259.978 385.691 263.766 388.669L266.238 385.524C261.669 381.932 256.189 380.169 249.905 380.169V384.169ZM263.777 388.677C267.615 391.651 270.626 396.03 272.736 401.957L276.504 400.616C274.199 394.14 270.799 389.058 266.227 385.515L263.777 388.677ZM272.739 401.967C274.873 407.866 275.971 415.072 275.971 423.636H279.971C279.971 414.752 278.835 407.058 276.501 400.606L272.739 401.967ZM275.971 423.636C275.971 432.256 274.885 439.506 272.775 445.434L276.544 446.775C278.849 440.3 279.971 432.57 279.971 423.636H275.971ZM272.776 445.431C270.666 451.334 267.666 455.703 263.851 458.678L266.311 461.832C270.852 458.291 274.238 453.225 276.543 446.778L272.776 445.431ZM263.857 458.673C260.073 461.601 255.459 463.104 249.905 463.104V467.104C256.229 467.104 261.733 465.374 266.305 461.837L263.857 458.673ZM249.905 458.432C256.6 458.432 261.79 455.127 265.357 448.913L261.888 446.922C258.938 452.061 254.983 454.432 249.905 454.432V458.432ZM265.357 448.913C268.865 442.803 270.51 434.306 270.51 423.636H266.51C266.51 433.989 264.898 441.68 261.888 446.922L265.357 448.913ZM270.51 423.636C270.51 416.515 269.749 410.354 268.177 405.197L264.35 406.363C265.774 411.034 266.51 416.778 266.51 423.636H270.51ZM268.18 405.206C266.64 400.066 264.361 395.967 261.236 393.078L258.52 396.015C260.966 398.276 262.944 401.666 264.348 406.354L268.18 405.206ZM261.243 393.084C258.101 390.152 254.284 388.683 249.905 388.683V392.683C253.305 392.683 256.137 393.79 258.513 396.008L261.243 393.084ZM249.905 388.683C243.243 388.683 238.073 392.048 234.49 398.324L237.964 400.307C240.951 395.074 244.9 392.683 249.905 392.683V388.683ZM234.492 398.321C230.96 404.481 229.3 412.988 229.3 423.636H233.3C233.3 413.315 234.925 405.608 237.962 400.311L234.492 398.321ZM229.3 423.636C229.3 430.755 230.048 436.9 231.592 442.03L235.423 440.877C234.024 436.23 233.3 430.498 233.3 423.636H229.3ZM231.592 442.03C233.131 447.141 235.397 451.214 238.497 454.077L241.211 451.139C238.792 448.904 236.827 445.54 235.423 440.877L231.592 442.03ZM238.504 454.084C241.673 456.984 245.51 458.432 249.905 458.432V454.432C246.469 454.432 243.606 453.331 241.204 451.133L238.504 454.084ZM291.057 447.445H289.057V449.445H291.057V447.445ZM291.057 439.403L289.367 438.335L289.057 438.824V439.403H291.057ZM326.533 383.273V381.273H325.431L324.842 382.204L326.533 383.273ZM332.367 383.273H334.367V381.273H332.367V383.273ZM332.367 395.729V397.729H334.367V395.729H332.367ZM328.425 395.729V393.729H327.323L326.734 394.66L328.425 395.729ZM301.621 438.142L299.931 437.074L299.621 437.563V438.142H301.621ZM301.621 438.773H299.621V440.773H301.621V438.773ZM349.395 438.773H351.395V436.773H349.395V438.773ZM349.395 447.445V449.445H351.395V447.445H349.395ZM329.056 464H327.056V466H329.056V464ZM329.056 383.273V381.273H327.056V383.273H329.056ZM338.358 383.273H340.358V381.273H338.358V383.273ZM338.358 464V466H340.358V464H338.358ZM293.057 447.445V439.403H289.057V447.445H293.057ZM292.748 440.472L328.224 384.341L324.842 382.204L289.367 438.335L292.748 440.472ZM326.533 385.273H332.367V381.273H326.533V385.273ZM330.367 383.273V395.729H334.367V383.273H330.367ZM332.367 393.729H328.425V397.729H332.367V393.729ZM326.734 394.66L299.931 437.074L303.312 439.211L330.116 396.797L326.734 394.66ZM299.621 438.142V438.773H303.621V438.142H299.621ZM301.621 440.773H349.395V436.773H301.621V440.773ZM347.395 438.773V447.445H351.395V438.773H347.395ZM349.395 445.445H291.057V449.445H349.395V445.445ZM331.056 464V445.001H327.056V464H331.056ZM331.056 445.001V441.256H327.056V445.001H331.056ZM331.056 441.256V383.273H327.056V441.256H331.056ZM329.056 385.273H338.358V381.273H329.056V385.273ZM336.358 383.273V464H340.358V383.273H336.358ZM338.358 462H329.056V466H338.358V462Z"
            fill="black"
            mask="url(#path-11-outside-1_0_1)"
          />
        </g>
        <g filter="url(#filter11_b_0_1)">
          <path
            d="M356.11 206C356.11 234.443 387.61 257.5 250.11 257.5C112.61 257.5 144.11 234.443 144.11 206C144.11 177.557 191.568 134 250.11 134C308.652 134 356.11 177.557 356.11 206Z"
            fill="#605D5D"
          />
        </g>
        <g filter="url(#filter12_b_0_1)">
          <ellipse cx="198.5" cy="208.5" rx="13.5" ry="22.5" fill="#D9D9D9" />
        </g>
        <g filter="url(#filter13_b_0_1)">
          <ellipse cx="300.5" cy="208.5" rx="13.5" ry="22.5" fill="#D9D9D9" />
        </g>
        <defs>
          <filter
            id="filter0_b_0_1"
            x="74"
            y="80"
            width="351"
            height="463"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_b_0_1"
            x="181"
            y="551"
            width="137"
            height="53"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_b_0_1"
            x="382"
            y="273"
            width="78"
            height="78"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_b_0_1"
            x="39"
            y="273"
            width="78"
            height="78"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_b_0_1"
            x="-4"
            y="444"
            width="58"
            height="58"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_b_0_1"
            x="221"
            y="-4"
            width="58"
            height="58"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter6_b_0_1"
            x="445"
            y="444"
            width="58"
            height="58"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter7_b_0_1"
            x="7"
            y="308"
            width="75.3958"
            height="160.08"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter8_b_0_1"
            x="228"
            y="33"
            width="43"
            height="82"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter9_b_0_1"
            x="417"
            y="308"
            width="75.3958"
            height="160.08"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter10_b_0_1"
            x="146.465"
            y="378.169"
            width="206.931"
            height="90.9347"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter11_b_0_1"
            x="137"
            y="130"
            width="226.22"
            height="131.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter12_b_0_1"
            x="181"
            y="182"
            width="35"
            height="53"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter13_b_0_1"
            x="283"
            y="182"
            width="35"
            height="53"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <h1 className={style.title}>Looks like you're lost</h1>
      <p className={style.message}>
        The page you're looking for is not available
      </p>
      <Link to="/">
        <button className={style.button}>Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
