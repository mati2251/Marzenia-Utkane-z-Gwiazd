import {graphql, useStaticQuery} from "gatsby";



const Thumbnails = (id) => {
	const query = useStaticQuery(graphql`
        query {
            data {
                assets {
                    id
                    url(transformation: {image: {resize: {height: 150}}})
                }
            }
        }

	`)
	return query.data.assets.filter((item) => item.id === id)[0].url
}

export default Thumbnails;

