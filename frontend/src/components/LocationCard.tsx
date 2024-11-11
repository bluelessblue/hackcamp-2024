import {
    Card,
    Image,
    Text,
    Badge,
    Button,
    Group,
    Stack,
    Rating,
} from "@mantine/core";
import styles from "../pages/page.module.css";
import logo from "../../../public/logo.svg";

export const LocationCard = ({
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
}) => {
    return (
        <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{ width: "600px", marginLeft: "50px" }}
            className={styles.cardStyle}
        >
            <Group align="left">
                {/* Align items horizontally without wrapping */}
                {/* Left side image */}
                <Card.Section>
                    {/* <div className={styles.imgCardLayout}>
                        <Image src="logo" height={80} width={80} alt="logo" />
                    </div> */}
                </Card.Section>
                {/* Right side content */}
                <Stack style={{ alignItems: "flex-end", width: "100%" }}>
                    {/* Stack content vertically with spacing */}
                    <Text
                        className={styles.locationCardFontLayout}
                        /*style={{ whiteSpace: "nowrap", flexGrow: 1 }}*/
                    >
                        {businessName}
                    </Text>
                    <div className={styles.ratingStyle}>
                        <Group >
                            <Group>
                                <Text
                                    c="dimmed"
                                    className={styles.cardTextStyle}
                                >
                                    {rating}
                                </Text>
                                <Rating
                                    defaultValue={5}
                                    value={rating}
                                    size={"lg"}
                                    readOnly
                                    fractions={3}
                                />
                            </Group>
                            {bipocOwner ? (
                                <Badge color="pink">BIPOC Owned</Badge>
                            ) : null}
                        </Group>
                    </div>{" "}
                    {/* Close the div */}
                    <div>
                        {" "}
                        {/* Added closing div tag */}
                        <Text
                            c="dimmed"
                            className={styles.locDescriptionFontLayout}
                            style={{ fontSize: "25px" }}
                        >
                            {description}
                        </Text>
                        <Button
                            className={styles.buttonStyle}
                            style={{
                                display: "block",
                                margin: "0 auto",
                                width: "400px",
                            }}
                            mt="md"
                            radius="md"
                        >
                            Visit Now
                        </Button>
                    </div>{" "}
                    {/* Close the div */}
                </Stack>
            </Group>
        </Card>
    );
};
