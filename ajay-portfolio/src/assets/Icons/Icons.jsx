import React from "react"
import { CgFacebook, CgInstagram } from "react-icons/cg"
import { GrLinkedinOption, GrTwitter } from "react-icons/gr"
import { SiBiolink } from "react-icons/si"

const style = { fontSize: "20px", padding: "10px" }

export const Facebook = () => {
  return <CgFacebook style={style} />
}

export const Instagram = () => {
  return <CgInstagram style={style} />
}

export const Twitter = () => {
  return <GrTwitter style={style} />
}

export const LinkedIn = () => {
  return <GrLinkedinOption style={style} />
}

export const BioOption = () => {
  return <SiBiolink style={style} />
}
