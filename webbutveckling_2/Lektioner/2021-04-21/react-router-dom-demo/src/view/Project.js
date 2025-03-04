import Title from "../components/Title";
import Lorem from "../components/Lorem";
import imageSrc from "../Global/img/project.png";
import ImageSection from "../components/ImageSection";
import data from "../Global/data";

export default function Project() {

    const index = 1;

    return (
        <>
            <Title name={ data[index].sideName }/>
            <Lorem title={ data[index].title1 }
                   text={ data[index].text1 }/>
            <ImageSection
                imageTitle={ data[index].imageTitle }
                imageSrc={ imageSrc }
                imageAlt={ data[index].imageAlt }/>
            <Lorem title={ data[index].title2 }
                   text={ data[index].text2 }/>
        </>
    )
}
