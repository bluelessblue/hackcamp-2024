import { ActionIcon, Box, Container, Group, TextInput } from "@mantine/core";
import { IconSearch, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import styles from "../pages/page.module.css";

export const Header = () => {
    return (
        <header>
            <Group display={"flex"}>
                <Box component={Link} href={"/"}>
                    <Box
                        component={"img"}
                        src={"/logo.svg"}
                        width={60}
                        height={60}
                        alt={"local compass logo"}
                        className="test-mg"
                    />
                </Box>

            
            
                <TextInput
                    size="md"
                    className={styles.searchBarLocCard}
                    placeholder="Search location..."
                    rightSectionWidth={42}
                    leftSection={<IconSearch stroke={1.5} />}
                    rightSection={
                        <ActionIcon style={{
                            backgroundColor: "rgb(173, 173, 215)",}}
                            size={32} 
                            radius="xl" 
                            variant="filled">
                            <IconArrowRight stroke={1.5} />
                        </ActionIcon>
                    }
                />
            
                 

                







            </Group>
        </header>
    );
};
