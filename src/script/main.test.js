/** @jest-environment jsdom */
import { jest } from '@jest/globals';
/** @type {import("./main.js")} */
import * as MainModule from "./main.js";



describe("Decides which sceen to display", () => {
    beforeEach(() => {
        localStorage.clear();
    });
    test('should return "Prosess" when parameter is "Prosess"', () => {
        /**@type {string} resultat*/
        const resultat = MainModule.visSkjerm("Prosess");
        expect(resultat).toBe("Prosess");
    });

    test('should return "Hovedside" as default', () => {
        // @ts-ignore - tester ugyldig input for å sjekke default-case
        const resultat = MainModule.visSkjerm("SomethingWrong");

        expect(resultat).toBe("Hovedside");
    });

    test('will ask for navigation to "Prosess" using "navigerTilSkjerm"', () => {
        MainModule.visSkjerm("Prosess");
        expect(localStorage.getItem("skjerm")).toBe("Prosess");
    });
});

describe("Sets cookie for current screen", () => {
    beforeEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    });
    test('updates localStorage with new screen info', () => {
        /** @type {jest.SpiedFunction<typeof window.history.pushState>} */
        const pushStateSpy = jest.spyOn(window.history, 'pushState');
        /**@type {string} nySkjerm*/
        const nySkjerm = "Prosess";

        MainModule.navigerTilSkjerm(nySkjerm);

        expect(localStorage.getItem("skjerm")).toBe(nySkjerm);
        expect(pushStateSpy).toHaveBeenCalledWith({ skjerm: nySkjerm }, "", "");

        pushStateSpy.mockRestore();
    });
});



describe("App initialization and navigation events", () => {
    beforeEach(() => {
        localStorage.clear();
        // Vi nullstiller history-staten for hver test
        window.history.replaceState({}, "", "");
    });

    test('DOMContentLoaded should start on "Hovedside" if localstorage "skjerm" is missing', () => {
        // ACT: Vi trigger hendelsen
        document.dispatchEvent(new Event('DOMContentLoaded'));

        // ASSERT: Vi sjekker resultatet i localStorage i stedet for en spy
        // Dette beviser at visSkjerm("Hovedside") ble kjørt
        expect(localStorage.getItem("skjerm")).toBe("Hovedside");
    });

    test('popstate should update localstorage and display correct screen', () => {
        // ARRANGE: Lag et event med en spesifikk state
        const nySkjerm = 'Designbrief';
        const event = new PopStateEvent('popstate', { state: { skjerm: nySkjerm } });

        // ACT: Trigger hendelsen
        window.dispatchEvent(event);

        // ASSERT: Sjekk om logikken din faktisk oppdaterte lageret
        expect(localStorage.getItem("skjerm")).toBe(nySkjerm);
    });
});