import Head from "next/head";
import React from "react";
import useTranslation from "next-translate/useTranslation";

import { Search } from "../components";

const SearchArtist = () => {
    const { t } = useTranslation();
    const strings = t("artists:strings", {}, { returnObjects: true });

    return (
        <div className="content" itemScope itemType="http://schema.org/Ficha">
            <Head>
                <title>{strings.meta.tabTitle}</title>
            </Head>
            <Search strings={strings.artists} type={'artist'} />
        </div>
    );
};

export default SearchArtist;
