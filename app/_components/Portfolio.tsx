import * as React from "react"
import RealizationList from "./RealizationList";

export default function Portfolio() {
    
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 lg:px-5 xl:px-20 2xl:px-56">
                <h2 className="text-3xl lg:text-4xl font-bold  mb-12 text-center">
                    Portfolio
                </h2>
                <RealizationList/>
            </div>
        </section>
    );
}