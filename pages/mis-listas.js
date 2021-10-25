import Head from "next/head";
import React from "react";
import useTranslation from "next-translate/useTranslation";

import { MyListsComponent } from "../components";

const MyLists = () => {
    const { t } = useTranslation();
    const strings = t("myLists:strings", {}, { returnObjects: true });

    return (
        <div className="content" itemScope itemType="http://schema.org/Ficha">
            <Head>
                <title>{strings.meta.tabTitle}</title>
            </Head>
            <MyListsComponent strings={strings.lists} />
        </div>
    );
};

export default MyLists;
