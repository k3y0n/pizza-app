import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={456}
    viewBox="0 0 280 456"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="120" r="120" /> 
    <rect x="0" y="256" rx="10" ry="10" width="280" height="24" /> 
    <rect x="0" y="298" rx="10" ry="10" width="280" height="71" /> 
    <rect x="7" y="393" rx="10" ry="10" width="89" height="35" /> 
    <rect x="126" y="384" rx="10" ry="10" width="150" height="50" />
  </ContentLoader>
)

export default Skeleton