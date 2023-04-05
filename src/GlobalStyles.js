import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    
    body {
        line-height: 1.5;
        font-family: consolas, Menlo, monospace, sans-serif;
    }
    
    ol, ul {
        list-style: none;
    }
    
    blockquote, q {
        quotes: none;
    }
    
    blockquote:before, blockquote:after, q:before, q:after {
        content: '';
        content: none;
    }
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    body {
        font-size: 16px;
    }
    
    a, button {
        transition: .3s;
        cursor: pointer;
        background: transparent;
        font-size: 1rem;
        color: rebeccapurple;
    }
    
    a:focus, button:focus {
        outline: none;
    }
    
    .container {
        margin: auto;
        max-width: 1200px;
        font-family: sans-serif;
    }
        
    .heading {
        color: rebeccapurple;
        text-align: center;
        margin-bottom: 1rem;
        font-size: 3rem;
        font-weight: 600;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
    }

    header, footer {
        font-size: 1rem;
        color: gray;
        font-weight: 700;
    }
      
    header .container,
    footer .container {
        margin: 1rem auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    header .gatsby-image-wrapper,
    footer .gatsby-image-wrapper {
        width: 150px;
        display: flex;
    }
      
    header .nav-links,
    footer .nav-links {
        display: flex;
        list-style: none;
        padding-left: 0;
    }
      
    header .nav-link-item,
    footer .nav-link-item {
        padding-right: 2rem;
    }
      
    header .nav-link-text,
    footer .nav-link-text {
        color: black;
        font-size: 18px;
        transition: .3s;
        font-weight: bold;
    }
      
    header .nav-link-text.active,
    footer .nav-link-text.active {
        color: rebeccapurple;
        cursor: default;
        pointer-events: none;
        text-decoration: none;
    }

    header .nav-link-text:hover,
    footer .nav-link-text:hover {
        color: rebeccapurple;
    }
`

export default GlobalStyle
