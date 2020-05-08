import React from "react";
import Layout from "../components/UI/Layout/Layout";
import {graphql} from "gatsby";
import ConcertLink from "../components/ConcertLink/ConcertLink";

const koncerty = ({data}) => {
	const concertsJSX = {}

	return (
		<Layout>
			<h1>Koncerty</h1>
			<h2 style={{"fontStyle": "italic"}}>Zobacz nasze koncerty i ich osiągniecia <span role="img">🎉</span> !</h2>
			<div>
			</div>
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
