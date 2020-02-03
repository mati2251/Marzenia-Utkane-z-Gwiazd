import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="pl">
    <head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Marzenia Utkane z Gwiazd</title>
      <meta name="Description"
            content="Marzenia Utkane z Gwiazd to charytatywny koncert wielkanocny odbywający się w Szczecinie. Na celu ma pomóc ludziom potrzebującym i pokazać się młodym talentom."/>
      <meta name="robots" content="index, follow"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Marzenia Utkane z Gwiazd"/>
      <meta property="og:description" content="Marzenia Utkane z Gwiazd to charytatywny koncert wielkanocny odbywający się w Szczecinie. Na celu ma pomóc ludziom potrzebującym i pokazać się młodym talentom."/>
      <meta property="og:image" content=""/>
      <meta property="og:url" content=""/>
      <meta property="og:site_name" content="Marzenia Utkane z Gwiazd"/>
      <link rel="icon" href="resources/logo.png"/>
        {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
    {props.preBodyComponents}
    <div
      key={`body`}
      id="___gatsby"
      dangerouslySetInnerHTML={{ __html: props.body }}
    />
    {props.postBodyComponents}
    </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
