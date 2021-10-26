import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import { modalAnimation } from "../Search/Search.animations";

const axios = require("axios");

import { LoginRequired } from "../../components";
import { userID, createNewList } from "../../utils/SpotifyAPI";

//REDUX
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    userToken: state.userToken.userToken,
});

const NewListForm = ({ className, strings, userToken }) => {
    const [inputName, setInputName] = useState("");
    const [inputDescription, setInputDescription] = useState("");
    const [userInfo, setUserInfo] = useState(null);
    const modalRef = useRef(null);

    useEffect(() => {
        const data = userID(userToken);
        axios(data.endpoint, data.atributes)
            .then((response) => {
                setUserInfo(response.data);
            })
            .catch((error) => console.log(error.response.data.error));
    }, [userToken]);

    useEffect(() => {
        const data = userID(userToken);
        axios(data.endpoint, data.atributes)
            .then((response) => {
                setUserInfo(response.data);
            })
            .catch((error) => console.log(error.response.data.error));
    }, []);

    const handleInputName = (string) => {
        setInputName(string);
    };

    const handleInputDescription = (string) => {
        setInputDescription(string);
    };

    const finishedAnimation = () => {
        document.getElementById("Name").value = "";
        document.getElementById("Description").value = "";
        setInputName("");
        setInputDescription("");
        document.getElementById("Name").focus();
    };

    const createList = () => {
        const data = createNewList(
            inputName,
            inputDescription,
            userInfo.id,
            userToken
        );
        axios(data.endpoint, data.atributes)
            .then((response) => {
                console.log(response);
                modalAnimation(modalRef, finishedAnimation);
            })
            .catch((error) => console.log(error.response.data.error));
    };

    const showForm = () => {
        return (
            <div className="new-list-form__container">
                <div
                    className="new-list-form__container__notification"
                    ref={modalRef}
                >
                    <div className="new-list-form__container__notification__container">
                        <p className="new-list-form__container__notification__container__text">{`Lista ${inputName} creada con éxito`}</p>
                    </div>
                </div>
                <p className="new-list-form__container__title">
                    {strings.title}
                </p>
                <div className="new-list-form__container__principal">
                    <input
                        className="new-list-form__container__principal__input"
                        autoFocus
                        id="Name"
                        type="text"
                        placeholder={strings.name}
                        onInput={(e) => handleInputName(e.currentTarget.value)}
                    ></input>
                    <input
                        className="new-list-form__container__principal__input"
                        id="Description"
                        type="text"
                        placeholder={strings.description}
                        onInput={(e) =>
                            handleInputDescription(e.currentTarget.value)
                        }
                    ></input>
                    <button className="new-list-form__container__principal__btn" onClick={() => createList()}>{strings.btn}</button>
                </div>
            </div>
        );
    };

    const checkLoging = () => {
        return userToken ? showForm() : <LoginRequired />;
    };

    return <div className={`${className} new-list-form`}>{checkLoging()}</div>;
};

NewListForm.propTypes = {
    className: PropTypes.string,
    strings: PropTypes.object,
    userToken: PropTypes.any,
};

export default connect(mapStateToProps, null)(NewListForm);
