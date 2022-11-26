import "./HomeBanner.css";

function HomeBanner() {
  return (
    <section className="home_banner_area" style={{background: "rgb(179, 179, 179)"}}>
      <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    
            </ul>
      <div className="banner_inner d-flex align-items-center">
        <div
          className="overlay bg-parallax"
          data-stellar-ratio="0.9"
          data-stellar-vertical-offset="0"
          data-background=""
        ></div>
        <div className="container">
          <div className="banner_content">
            <div className="w3-display-middle w3-margin-top">
              {/* span style="font-family: 'Crimson Text', serif;" */}

              {/* style="text-indent: 1.1vw;" */}
              
              
                  <svg viewBox="0 0 1060 300">
                    <symbol id="s-text">
                      <text text-anchor="middle" x="50%" y="80%">
                        365toJapan
                      </text>
                    </symbol>

                    <g class="g-ants">
                      <use xlinkHref="#s-text" class="text-copy"></use>
                      <use xlinkHref="#s-text" class="text-copy"></use>
                      <use xlinkHref="#s-text" class="text-copy"></use>
                      <use xlinkHref="#s-text" class="text-copy"></use>
                      <use xlinkHref="#s-text" class="text-copy"></use>
                    </g>
                  </svg>
                
              
            </div>

            


          </div>
          
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
