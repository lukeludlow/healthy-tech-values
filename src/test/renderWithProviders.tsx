import type { ReactNode } from "react";
import type { WritableAtom } from "jotai";
import { createStore, Provider } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { MemoryRouter } from "react-router";
import { render } from "vitest-browser-react";

type InitialAtomValues = ReadonlyArray<
    readonly [WritableAtom<any, any[], any>, any]
>;

function AtomsHydrator({
    initialValues,
    children,
}: {
    initialValues: InitialAtomValues;
    children: ReactNode;
}) {
    useHydrateAtoms(new Map(initialValues));
    return children;
}

export function renderWithProviders(
    ui: ReactNode,
    {
        route = "/",
        initialAtomValues = [],
    }: { route?: string; initialAtomValues?: InitialAtomValues } = {},
) {
    return render(ui, {
        wrapper: ({ children }) => (
            <MemoryRouter initialEntries={[route]}>
                <Provider store={createStore()}>
                    <AtomsHydrator initialValues={initialAtomValues}>
                        {children}
                    </AtomsHydrator>
                </Provider>
            </MemoryRouter>
        ),
    });
}
