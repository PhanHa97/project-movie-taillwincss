import { Fragment } from "react";
import { Route } from "react-router";

export const HomeTemplate = (props) => {
    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {

        return <Fragment>
            <h1>day la home page</h1>
            <Component {...propsRoute} />
            footer
        </Fragment>
    }} />;
};
