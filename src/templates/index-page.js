import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = () => (<div>Hello</div>)


export default IndexPage

// export const pageQuery = graphql`
  // query IndexPageTemplate {
  //   markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
  //     frontmatter {
  //       title
  //       image {
  //         childImageSharp {
  //           fluid(maxWidth: 2048, quality: 100) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //       heading
  //       subheading
  //       mainpitch {
  //         title
  //         description
  //       }
//         description
//         intro {
//           blurbs {
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 240, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//       }
//     }
//   }
// `
