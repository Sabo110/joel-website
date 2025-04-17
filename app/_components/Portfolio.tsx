import * as React from "react"
import RealizationList from "./RealizationList";
import ContainerForAll from "./ContainerForAll";

export default function Portfolio() {

    return (
        <section className="pb-16 pt-8 bg-secondary">
            <ContainerForAll className="px-4 space-y-6">
                <h3 className="text-center">
                    Portfolio
                </h3>
                <RealizationList />
            </ContainerForAll>
        </section>
    );
}