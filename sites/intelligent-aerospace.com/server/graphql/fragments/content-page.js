const gql = require('graphql-tag');

module.exports = gql`
fragment ContentPageFragment on Content {
  id
  name
  teaser(input: { useFallback: false, maxLength: null })
  body
  published
  siteContext {
    path
  }
  company {
    id
    name
    canonicalPath
    enableRmi
  }
  primarySection {
    id
    name
    alias
    canonicalPath
    hierarchy {
      id
      name
      alias
      canonicalPath
    }
  }
  primaryImage {
    id
    src
    alt
    caption
    credit
    isLogo
  }
  gating {
    surveyType
    surveyId
  }
  ... on ContentVideo {
    embedCode
  }
  ... on ContentNews {
    source
    byline
  }
  ... on ContentEvent {
    ends
    starts
  }
  ... on ContentArticle {
    sidebars
  }
  ... on ContentWebinar {
    linkUrl
    starts
    sponsors {
      edges {
        node {
          id
          name
          canonicalPath
        }
      }
    }
  }
  ... on Addressable {
    address1
    address2
    cityStateZip
    country
  }
  ... on Contactable {
    phone
    tollfree
    fax
    website
    title
    mobile
    publicEmail
  }
  ... on ContentCompany {
    email
  }
  ... on SocialLinkable {
    socialLinks {
      provider
      url
      label
    }
  }
  ... on Media {
    fileSrc
  }
  ... on Inquirable {
    enableRmi
  }
  ... on Authorable {
    authors {
      edges {
        node {
          id
          name
          type
          canonicalPath
        }
      }
    }
    contributors {
      edges {
        node {
          id
          name
          type
          canonicalPath
        }
      }
    }
    photographers {
      edges {
        node {
          id
          name
          type
          canonicalPath
        }
      }
    }
  }
  images(input:{ pagination: { limit: 0 }, sort: { order: values } }) {
    edges {
      node {
        id
        src
        alt
        displayName
        caption
        credit
        source {
          width
          height
        }
      }
    }
  }
}
`;
