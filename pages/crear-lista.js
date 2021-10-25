import Head from "next/head";
import React from "react";
import useTranslation from "next-translate/useTranslation";

import { NewListForm } from "../components";

const CreateList = () => {
    const { t } = useTranslation();
    const strings = t("newList:strings", {}, { returnObjects: true });

    return (
        <div className="content" itemScope itemType="http://schema.org/Ficha">
            <Head>
                <title>{strings.meta.tabTitle}</title>
            </Head>
            <NewListForm strings={strings.newList} />
        </div>
    );
};

export default CreateList;
