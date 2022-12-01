export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '6388fba4e29f8d376edfdda5',
                  title: 'Sanity Studio',
                  name: 'sanity-table-test-studio',
                  apiId: '5c446388-2cea-405c-88cf-a967ea9f089a'
                },
                {
                  buildHookId: '6388fba4ff675639cdc3c277',
                  title: 'Blog Website',
                  name: 'sanity-table-test',
                  apiId: '7b3b5200-661e-40c1-8284-d5eefc7f3006'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zacklerner/sanity-table-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-table-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
