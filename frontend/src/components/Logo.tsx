import { Image } from "@mantine/core";

export const Logo = ({ width, height }: { width: number; height: number }) => {
    return (
        <Image
            src={"./logo.svg"}
            width={width}
            height={height}
            alt={"local compass logo"}
        />
    );
};
