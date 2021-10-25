import Head from "next/head";
import { Cover } from "../components";
import useTranslation from "next-translate/useTranslation";

const Home = () => {
    const { t } = useTranslation();
    const strings = t("home:strings", {}, { returnObjects: true });

    return (
        <div className="container">
            <Head>
                <title>{strings.meta.tabTitle}</title>
            </Head>
            <Cover strings={strings.cover} />
        </div>
    );
};

export default Home;
