import React from "react";
import { ScrollArea, Stack } from "@mantine/core";
import { ActionIcon, Box, Button, Text, TextInput } from "@mantine/core";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";
import styles from "./page.module.css";

const Page = () => {
    // Define Sidebar inside the Page component
    const Sidebar = () => {
        return (
            <div className={styles.layoutStyle}>
                <ScrollArea style={{ height: "100vh", flex: "0 0 auto" }}>
                    {/* <Stack spacing="md">
                        {[...Array(3)].map((_, index) => (
                            <LocationCard
                                key={index}
                                title={`Location ${index + 1}`}
                                description={`Description for location ${
                                    index + 1
                                }`}
                                imageSrc="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                            />
                        ))}
                    </Stack> */}
                </ScrollArea>
            </div>
        );
    };

    return (
        <div className={styles.layoutStyle}>
            <div>
                <TextInput
                    size="md"
                    placeholder="Search locations"
                    rightSectionWidth={42}
                    leftSection={<IconSearch stroke={1.5} />}
                    rightSection={
                        <ActionIcon size={32} radius="xl" variant="filled">
                            <IconArrowRight stroke={1.5} />
                        </ActionIcon>
                    }
                />
                <h1 className={styles.searchHeaderFont}> Locally Owned... </h1>
                {/* <div className={styles.layout}>
                    <Button className={styles.buttonStyle}>Cafes</Button>
                    <Button className={styles.buttonStyle}>Restaurants</Button>
                    <Button className={styles.buttonStyle}>
                        Clothing Stores
                    </Button>
                    <Button className={styles.buttonStyle}>Books</Button>
                </div> */}
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "200vh",
                }}
            >
                {/* Sidebar on the left with a responsive width */}
                <div
                    style={{
                        width: "800px" /* Default width for larger screens */,
                        minWidth:
                            "200px" /* Minimum width for smaller screens */,
                        maxWidth: "800px" /* Optional max width */,
                        flexShrink: 0 /* Prevent sidebar from shrinking */,
                        transition:
                            "width 0.3s ease-in-out" /* Smooth transition for width change */,
                    }}
                >
                    <Sidebar />
                </div>

                {/* Main content on the right */}
                <div style={{ flex: 1, padding: "20px" }}>
                    <h1 className={styles.descriptionFontLayout}>
                        Find Your New Favourite Business!
                    </h1>
                    <p className={styles.searchDescriptionFontLayout}>
                        Vancouver is full of inspiring small businesses, waiting
                        for you to discover
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;
