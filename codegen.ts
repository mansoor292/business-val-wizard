import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/lib/graphql/generated/': {
      preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations'
      ],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
      },
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false
      }
    }
  }
}

export default config
