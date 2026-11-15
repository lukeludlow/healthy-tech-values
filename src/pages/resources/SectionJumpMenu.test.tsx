import { expect, test } from "vitest";
import { userEvent } from "vitest/browser";
import ResourcesPage from "@/pages/resources/ResourcesPage.tsx";
import { renderWithProviders } from "@/test/renderWithProviders.tsx";

const sections = [
    ["Quizzes & Self-Assessments", "#quizzes"],
    ["Organizations & Websites", "#organizations"],
    ["Articles", "#articles"],
    ["Books", "#books"],
    ["Podcasts & Documentaries", "#podcasts-and-documentaries"],
    ["Social Accounts to Follow", "#social-accounts"],
    ["The Healthy Tech Balance Framework", "#framework"],
] as const;

test("the sticky menu lists every section, and Escape closes it", async () => {
    const { getByRole } = await renderWithProviders(<ResourcesPage />, {
        route: "/resources",
    });

    // Only one "On this page" navigation, and it starts closed.
    await expect
        .element(getByRole("navigation", { name: "On this page" }))
        .toBeInTheDocument();
    await expect
        .element(getByRole("menuitem", { name: "Books" }))
        .not.toBeInTheDocument();

    await getByRole("button", { name: /On this page/ }).click();

    for (const [name, href] of sections) {
        await expect
            .element(getByRole("menuitem", { name }))
            .toHaveAttribute("href", href);
    }

    await userEvent.keyboard("{Escape}");
    await expect
        .element(getByRole("menuitem", { name: "Books" }))
        .not.toBeInTheDocument();
});
