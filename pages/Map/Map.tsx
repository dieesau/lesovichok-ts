    import React from 'react';
    import "./Map.scss"

    function Map() {

        return (
            <div className="map-container">
                <h2 className="map-header mb-12 text-center text-3xl font-bold"
                >
                  Мы тут
                </h2>
                  <iframe
                      src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=37.358720%2C54.938459&mode=search&sll=37.357744%2C54.938907&text=54.938907%2C37.357744&z=18.38"
                      width="560"
                      height="400"
                      allowFullScreen="true">
                  </iframe>
              </div>
        );
    }

    export default Map;
