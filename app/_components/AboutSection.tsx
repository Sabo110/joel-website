import AboutSectionRight from "./AboutSectionRight";
import ContainerForAll from "./ContainerForAll";
import AboutSectionLeft from "./AboutSectionLeft";

export default function AboutSection() {
    return (
        <section className=" py-8 bg-secondary">
            <ContainerForAll className="flex flex-col-reverse gap-8 px-4 lg:flex-row">
                <AboutSectionLeft />
                <AboutSectionRight />
            </ContainerForAll>

        </section>
    );
}