import { expect, test } from "vitest";
import HomeBio from "@/pages/home/HomeBio.tsx";
import { renderWithProviders } from "@/test/renderWithProviders.tsx";

test("bio introduces Jessica with her photo", async () => {
    const { getByRole } = await renderWithProviders(<HomeBio />);

    await expect
        .element(getByRole("heading", { name: "Hi, I'm Jessica Ludlow" }))
        .toBeInTheDocument();
    await expect
        .element(getByRole("img", { name: "Jessica Ludlow" }))
        .toBeInTheDocument();
});
