export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62fb5b8a8ce0aa71851d26c2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-error-test-studio-46xgcuzu',
                  apiId: '7023eea7-a62a-4a12-b100-4869631bc0e9'
                },
                {
                  buildHookId: '62fb5b8af65ade71493b4c6e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-error-test',
                  apiId: 'fd2f65c3-d241-4a74-99b4-4c1883d6d85c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomwrankmore/sanity-gatsby-portfolio-error-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-error-test.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
