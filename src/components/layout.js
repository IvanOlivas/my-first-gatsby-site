//layout.js

//import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/GlobalStyles";
import { lightMode, darkMode } from "../components/theme"
import React, { useState, useEffect } from 'react'
import storage from 'local-storage-fallback'

function getTheme() {
  const savedTheme = storage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme) : {mode: 'light'};
}

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [theme, setTheme] = useState(getTheme);
  useEffect(
    ()=> {
    storage.setItem('theme', JSON.stringify(theme));
    },
    [theme]
  );
  
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}> 
    <>
		<GlobalStyles/>
    <div className={container}>
    <button onClick={toggleTheme}>Toggle Dark/Light Mode</button>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/pokemon" className={navLinkText}>
              Pokemon
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/map" className={navLinkText}>
              Map
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
    </>
    </ThemeProvider>
  )
}

export default Layout