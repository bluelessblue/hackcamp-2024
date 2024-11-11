import { useEffect, useState } from "react";

export default function Page() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const response = await fetch(
                "http://128.189.194.203:5206/api/categories",
                { method: "GET", credentials: "include" }
            );

            const data = await response.json();

            setCategories(data);

            // console.log(await response.json());
        };

        getCategories();
    }, []);

    return (
        <div>
            <p>`frontend/src/pages/fetch/index.tsx`</p>
            <button onClick={() => console.log(categories)}>click me</button>
        </div>
    );
}
