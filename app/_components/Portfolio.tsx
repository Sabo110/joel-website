import * as React from "react"
import RealizationList from "./RealizationList";
import ContainerForAll from "./ContainerForAll";

export default function Portfolio() {

    return (
        <section className="lg:pb-16 lg:pt-20 lg:min-h-screen min-h-[700px] flex items-center">
            <ContainerForAll className="px-4 space-y-6">
                <h3 className="text-center">
                    Portfolio
                </h3>
                <RealizationList />
            </ContainerForAll>
        </section>
    );
}