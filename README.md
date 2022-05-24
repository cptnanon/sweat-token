
# Sweat Token

Sweat token help startups create an early stage cap table for sweat equity.

In other words sweat token is the early stage governance token that is gradually and transparently issues based on merits.

# Progressive Web App

SporosDAO Sweat Token is a Progressive Web App hosted on Netlify. Deployment sites below:

| Branch | Live Deployment | Admin Console |
|--------|-----------------|---------------|
| `main` / production | [live](https://sporosdaoapp-main.netlify.app/) | [admin](https://app.netlify.com/sites/sporosdaoapp-main/overview) |
| `dev` / development | [live](https://sporosdaoapp-dev.netlify.app/) | [admin](https://app.netlify.com/sites/sporosdaoapp-dev/overview) |


## Resources

- [Sweat Token wiki](https://github.com/SporosDAO/sweat-token/wiki)
- [Figma UX design](https://www.figma.com/file/4V3DBa9tF69vo1DWkR3jpB/SweatTokenV2?node-id=0%3A1)
- [Concepts document](https://docs.google.com/document/d/1NA3czMIlXwXscIGnxf-IwOGBfgX03HJEUQWb-YxOybc/edit#heading=h.eqtjaae3omvc)

## Development

1. Build the development environment with `docker-compose build`
2. Start the development environment with `docker-compose up -d`

These steps will build and start containers and docker services for `mongodb`, `frontend`, `backend` and `contracts` mounting on the local directory.

You can obtain logs for each container while developing with
- frontend `docker-compose logs -f frontend`
- backend `docker-compose logs -f backend`
- contracts `docker-compose logs -f contracts`

## Contributing

We welcome your contributions. To provide your code please fork the project and create a PR against the `dev` branch.
Request at least one review from the core team.
`dev` will be merged in `main` branch when we reach a relevant milestone that will be then deployed via the CI/CD pipelines.

## Supporters

- The SporosDAO PWA is hosted by [Netlify](https://www.netlify.com/)
