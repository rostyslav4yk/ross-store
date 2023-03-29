import React, { useEffect } from "react"
import { navigate } from "gatsby"

const IndexPage = () => {
  useEffect(() => {
    navigate("/en/")
  }, [])

  return <></>
}

export default IndexPage
