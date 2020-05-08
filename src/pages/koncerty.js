import React from "react";
import Layout from "../components/UI/Layout/Layout";
import {graphql} from "gatsby";

const koncerty = ({data}) => {
	console.log(data)
	return (
		<Layout>
			<h1>Koncerty</h1>
			<h2 style={{"fontStyle": "italic"}}>Zobacz nasze koncerty i ich osiągniecia <span role="img">🎉</span> !</h2>
		</Layout>
	)
}

export const query = graphql`
    query {
        data {
            roks {
                rok
                value
                zdjecieGlowne {
                    url
                }
            }
        }
    }
`

export default koncerty;
