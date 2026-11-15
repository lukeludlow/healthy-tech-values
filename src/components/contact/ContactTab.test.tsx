import { expect, test } from "vitest";
import { userEvent } from "vitest/browser";
import ContactTab, { CONTACT_EMAIL } from "@/components/contact/ContactTab.tsx";
import { renderWithProviders } from "@/test/renderWithProviders.tsx";

test("opens to show the contact email as a mailto link, and Escape closes it", async () => {
    const { getByRole } = await renderWithProviders(<ContactTab />);

    await getByRole("button", { name: "Contact Jessica" }).click();

    const link = getByRole("link", { name: CONTACT_EMAIL });
    await expect.element(link).toBeVisible();
    await expect
        .element(link)
        .toHaveAttribute("href", `mailto:${CONTACT_EMAIL}`);
    await expect
        .element(getByRole("button", { name: "Copy email" }))
        .toBeVisible();

    await userEvent.keyboard("{Escape}");
    await expect.element(link).not.toBeInTheDocument();
    await expect
        .element(getByRole("button", { name: "Contact Jessica" }))
        .toBeInTheDocument();
});
