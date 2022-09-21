import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Private = () => {

	const { store, actions } = useContext(Context);
	const navigate = useNavigate()
  
	useEffect(() => {
        if (store.currentUser === null) navigate('/');
    }, [store])

	return (
		<div >
			<h1>This is the private page</h1>
		</div>
	);
};