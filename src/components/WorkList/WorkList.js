import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import Icon from '../Icon';
import { iconMural, iconPainting, iconPaper, iconDivider, iconEye } from '../../constants/svg';
import './style.scss';

const tabValues = {
  mural: {
    el: 'τοιχογραφίες',
    en: 'murals',
    icon: iconMural,
  },
  painting: {
    icon: iconPainting,
    el: 'πίνακες',
    en: 'paintings',
  },
  paper: {
    icon: iconPaper,
    el: 'χαρτί',
    en: 'paper'
  },
};

const WorkList = ({ data, locale }) => {
  const { group: types } = data.allMarkdownRemark;
  const [selectedTab, setSelectedTab] = useState('painting');
  const tabs = [];
  const tabPanels = [];
  types.forEach(({ fieldValue, edges }) => {
    tabs.push(fieldValue);
    tabPanels.push(edges);
  });

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setSelectedTab(urlParams.get('view'));
  }, []);

  const onSelectTab = (tabIndex) => {
    setSelectedTab(tabs[tabIndex]);
    window.history.pushState("", "", `/work?view=${tabs[tabIndex]}`);
  };

  const selectedTabIndex = tabs.indexOf(selectedTab);
  const prefix = locale === 'el' ? '' : 'en';

  return (
    <Tabs
      selectedIndex={selectedTabIndex > -1 ? selectedTabIndex : 1}
      onSelect={onSelectTab}
      selectedTabClassName="active">
      <TabList className="tabs">
        {tabs && tabs.map(tab => (
          <Tab key={tab} className="tab" >
            <div className="tab__content">
              <span className="tab__icon">
                <span className="icon">
                  <Icon {...tabValues[tab]['icon']} />
                </span>
              </span>
              <div className="h2 heading heading--gutters heading--center">{tabValues[tab][locale]}</div>
            </div>
          </Tab>
        ))}
      </TabList>

      {tabPanels && tabPanels.map((cases, index) => (
        <TabPanel key={index} className="tabPanel">
          {cases && cases.map(({ node: { id, fields, frontmatter: fm } }, index) => {
            const isFirst = index === 0;
            // We want to hide the identical years
            const isSameYear = !isFirst && fm.date === cases[index-1].node.frontmatter.date;
            const addDivider = !isSameYear && !isFirst;
            return (
              <div key={id} className="case">
                {addDivider && (
                  <div className="grid grid--work-list grid--work-list-divider">
                    <div className="case__divider">
                      <Icon {...iconDivider} />
                    </div>
                  </div>
                )}
                <article className="grid grid--work-list">
                  <div className="case__left">
                    <div className={isSameYear ? 'visually-hidden' : ''}>
                      <div className="case__year">
                        <div className="heading h2">
                          {fm.date}
                        </div>
                        <div className="case__arrow">
                          <div className="icon">
                            <svg viewBox="0 0 242 1626" xmlns="http://www.w3.org/2000/svg">
                              <path d="M128.191-.5v1565.967c17.296-23.065 32.365-38.372 45.207-45.92 12.843-7.548 35.543-14.44 68.102-20.675v20.675c-33.456 0-60.122 10.57-80 31.71-19.878 21.138-30.98 45.886-33.309 74.243h-15.503c.561-20.123-7.805-42.813-25.098-68.069s-45.99-37.884-86.09-37.884v-20.675c31.78 5.416 54.655 12.308 68.625 20.675 13.97 8.367 28.157 23.674 42.563 45.92V-.5h15.503z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="case__middle">
                    <div className="case__thumb">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: fm.image,
                          alt: prefix ? fm.titleEN : fm.title,
                        }}
                      />
                      <Link to={`${prefix}${fields.slug}`} className="case__meta">
                        <div className="case__icon">
                          <Icon {...iconEye} />
                        </div>
                        <h2 className="heading heading--center h3">
                          {prefix ? fm.titleEN : fm.title}
                        </h2>
                      </Link>
                    </div>
                  </div>
                  <div>
                    {fm.quote && fm.quote}
                  </div>
                </article>
              </div>
            )
          })}
        </TabPanel>
      ))}
    </Tabs>
  )
};

WorkList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default ({ locale }) => (
  <StaticQuery
    query={graphql`
      query WorkListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "work-item" } } }
        ) {
          group(field: frontmatter___type) {
            fieldValue
            edges {
              node {
                id
                fields {
                    slug
                }
                frontmatter {
                  title
                  titleEN
                  date(formatString: "YYYY")
                  image {
                    childImageSharp {
                      fluid(maxWidth: 834, quality: 50) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
          edges {
            node {
              frontmatter {
                templateKey
                type
                date(formatString: "YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data) => <WorkList data={data} locale={locale} />}
  />
)
