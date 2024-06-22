import * as React from 'react'
import { ListItem, UnorderedList } from '@chakra-ui/react'

function PhilipsList() {
  return (
    <UnorderedList spacing={4}>
      <ListItem>
        Automated the process of onboarding / offboarding through building a full-stack web application that gave / withdrew access to
        different services such as AWS IAM, Slack, Jirat
      </ListItem>
      <ListItem>
        Refactored/maintained Bamboo CI/CD pipelines, whilst working with development teams to create new ones depending on their needs,
        thus reducing their time dedicated to deployment
      </ListItem>
      <ListItem>
        Supported software development teams through any server side complications & actively partook in their agile development processes
      </ListItem>
    </UnorderedList>
  )
}

function ProcurifyList() {
  return (
    <UnorderedList spacing={4}>
      <ListItem>
        Implemented a microservice and its subsequent REST API which facilitated the syncing of bills from our native app to Netsuite,
        allowing the company to greatly expand their customer base to include Netsuite customers
      </ListItem>
      <ListItem>
        Optimized existing Terraform infrastructure to reduce code duplication and costs of unused AWS services while provisioning new AWS
        services to better suite our needs
      </ListItem>
      <ListItem>
        Spearheaded the transition away from hashicorp vault to AWS Secrets manager, accordingly updating all environment variables in our
        codebase to reflect these changes{' '}
      </ListItem>
      <ListItem>
        Launched a proof of concept testing the feasability of replacing Terraform with AWS CDK aiming to explore the possibility for
        developers to provision their own infrastructure without outside DevOps support
      </ListItem>
    </UnorderedList>
  )
}

export { PhilipsList, ProcurifyList }
