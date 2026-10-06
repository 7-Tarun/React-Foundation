function WeatherSkeleton() {
  return (
    <div className="weather-card-skeleton">
      {/* Top Bar: Location and Date */}
      <div className="skel-top-row">
        <div className="skel-loc-box">
          <div className="skel-icon circle"></div>
          <div className="skel-text short"></div>
        </div>
        <div className="skel-text date"></div>
      </div>

      {/* Middle Row: Temperature and Big Weather Icon */}
      <div className="skel-middle-row">
        <div className="skel-left-main">
          <div className="skel-text time"></div>
          <div className="skel-temp-box"></div>
          <div className="skel-text status"></div>
          <div className="skel-text details"></div>
        </div>
        <div className="skel-right-icon"></div>
      </div>

      {/* Bottom Grid: 6 Info Boxes */}
      <div className="skel-bottom-grid">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="skel-grid-item">
            <div className="skel-grid-header">
              <div className="skel-icon small-circle"></div>
              <div className="skel-text tiny"></div>
            </div>
            <div className="skel-text value"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherSkeleton;