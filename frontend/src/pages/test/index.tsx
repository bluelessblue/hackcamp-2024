import MapComponent from "@/components/Map";

const coordinates = [
    [49.2667, -123.25],
    [49.2687, -123.248],
    [49.2707, -123.246],
    [49.2647, -123.244],
];

export default function Page() {
    return (
        <div>
            <MapComponent coordinates={coordinates} />
        </div>
    );
}
