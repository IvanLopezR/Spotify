import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from 'next/router';

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
                <GoHome />
                {userToken && <User />}
            </div>
        );
    }
};

Header.propTypes = {
    className: PropTypes.string,
    userToken: PropTypes.any
};

export default connect(mapStateToProps, null)(Header);
