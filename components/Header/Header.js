import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from 'next/router';

import useTranslation from "next-translate/useTranslation";

import { GoHome, User } from "../../components";

//REDUX
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    userToken: state.userToken.userToken,
});

const Header = ({ className, userToken }) => {
    const router = useRouter();
    const path = router.pathname;

    const [home, setHome] = useState(true);

    const { t } = useTranslation();
    const strings = t("common:strings", {}, { returnObjects: true });

    useEffect(() => {
        if (window) {
            window.location.pathname === "/" ? setHome(true) : setHome(false);
        }
    },[path]);

    if (home) {
        return null;
    } else {
        return (
            <div className={`${className} header`}>
                <GoHome logo={strings.imgHeader}/>
                {userToken && <User logo={strings.imgProfile} />}
            </div>
        );
    }
};

Header.propTypes = {
    className: PropTypes.string,
    userToken: PropTypes.any
};

export default connect(mapStateToProps, null)(Header);
