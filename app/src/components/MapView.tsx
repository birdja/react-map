import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import './MapView.css';

const MapView: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const map = useRef<maplibregl.Map | null>(null);

    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: 'https://demotiles.maplibre.org/style.json', // public demo tiles
            center: [0, 0],
            zoom: 2,
        });
    }, []);

    return (
        <div className="map-view-wrapper" style={{ display: "flex" }}>
            <div
                ref={mapContainer}
                style={{ width: "100%", height: "100vh" }}
            ></div>
        </div>
    )
};

export default MapView;