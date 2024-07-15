import { videos } from "./content";

function KnowUs(props) {
  return (
    <div className="know-us">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <a href="#" className="pic lazyload" onClick={ props.handleShow } data-videosrc={ videos[0] }>
              <h2>Get to know us<br className="visible-xs" /> in 30 seconds</h2>
              <div className="play"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KnowUs;