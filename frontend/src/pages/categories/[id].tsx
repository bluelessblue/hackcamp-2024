import { Header } from "@/components/Header";
import { LocationCard } from "@/components/LocationCard";
import { Box, Group } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../pages/page.module.css";
import MapComponent from "@/components/Map";

const coordinates = [
    [49.2667, -123.25],
    [49.2687, -123.248],
    [49.2707, -123.246],
    [49.2647, -123.244],
];

export default function Page() {
    const router = useRouter();
    const id = router.query.id;
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        const getBusinessesById = async () => {
            try {
                const response = await fetch(
                    `http://128.189.194.203:5206/api/categories/${id}`
                );

                const data = await response.json();

                console.log(data);

                setBusinesses(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (id) {
            getBusinessesById();
        }
    }, [id]);

    return (
        <Box className={styles.searchLayoutStyle}>
            <Header />
            <MapComponent coordinates={coordinates} />

            <h1 className={styles.searchHeaderFont}>
                Find Your New Favourite Business Today!{" "}
            </h1>
            <Group>
                <Box>
                    {businesses &&
                        businesses.map(
                            ({
                                id,
                                businessName,
                                description,
                                bipocOwner,
                                address,
                                rating,
                                categoryId,
                            }: {
                                id: string;
                                businessName: string;
                                description: string;
                                bipocOwner: boolean;
                                address: string;
                                rating: number;
                                categoryId: string;
                            }) => (
                                <LocationCard
                                    key={id}
                                    id={id}
                                    businessName={businessName}
                                    description={description}
                                    bipocOwner={bipocOwner}
                                    address={address}
                                    rating={rating}
                                    categoryId={categoryId}
                                />
                            )
                        )}
                </Box>
            </Group>
        </Box>
    );
}
