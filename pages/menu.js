import Head from "next/head";
import React from "react";
import useTranslation from "next-translate/useTranslation";

import { MenuComponent } from "../components";

const Menu = () => {
    const { t } = useTranslation();
    const strings = t("menu:strings", {}, { returnObjects: true });

    return (
        <div className="content" itemScope itemType="http://schema.org/Ficha">
            <Head>
                <title>{strings.meta.tabTitle}</title>
            </Head>
            <MenuComponent strings={strings.menu} />
        </div>
    );
};

export default Menu;
